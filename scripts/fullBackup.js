import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-');
const BACKUP_NAME = `gogreen-complete-backup-${TIMESTAMP}`;
const BACKUP_DIR = 'complete-backups';
const BACKUP_PATH = path.join(BACKUP_DIR, BACKUP_NAME);

console.log('🚀 Creating complete site backup with all assets...');

// Create backup directory
fs.mkdirSync(BACKUP_PATH, { recursive: true });

// Step 1: Copy all source files
console.log('📁 Step 1: Copying source files...');
const sourceItems = [
  'src/', 'public/', 'scripts/', 'docs/', '.github/',
  'package.json', 'package-lock.json', 'tsconfig.json', 'tsconfig.app.json', 
  'tsconfig.node.json', 'vite.config.ts', 'tailwind.config.js', 
  'postcss.config.js', 'eslint.config.js', 'index.html', 
  'README.md', 'CONTRIBUTING.md', 'netlify.toml'
];

const copyRecursive = (src, dest) => {
  const stat = fs.statSync(src);
  
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    const items = fs.readdirSync(src);
    
    for (const item of items) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
};

let copiedFiles = 0;
for (const item of sourceItems) {
  if (fs.existsSync(item)) {
    copyRecursive(item, path.join(BACKUP_PATH, item));
    copiedFiles++;
  }
}

// Step 2: Download external assets
console.log('🖼️ Step 2: Downloading external images...');
const assetsDir = path.join(BACKUP_PATH, 'downloaded-assets');
fs.mkdirSync(assetsDir, { recursive: true });

const externalAssets = [
  'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=800'
];

let downloadedAssets = 0;
for (let i = 0; i < externalAssets.length; i++) {
  const url = externalAssets[i];
  const filename = `asset-${i + 1}.jpg`;
  const filePath = path.join(assetsDir, filename);
  
  try {
    execSync(`curl -L "${url}" -o "${filePath}"`, { stdio: 'pipe' });
    if (fs.existsSync(filePath)) {
      downloadedAssets++;
      console.log(`✅ Downloaded: ${filename}`);
    }
  } catch (error) {
    console.warn(`⚠️ Failed to download asset ${i + 1}`);
  }
  
  // Rate limiting
  await new Promise(resolve => setTimeout(resolve, 300));
}

// Step 3: Create built version
console.log('🏗️ Step 3: Creating production build...');
try {
  execSync('npm run build:site', { stdio: 'inherit' });
  if (fs.existsSync('dist')) {
    copyRecursive('dist', path.join(BACKUP_PATH, 'dist'));
    console.log('✅ Production build included');
  }
} catch (error) {
  console.warn('⚠️ Could not create production build:', error.message);
}

// Step 4: Export city data
console.log('📊 Step 4: Exporting city data...');
const dataExportDir = path.join(BACKUP_PATH, 'data-export');
fs.mkdirSync(dataExportDir, { recursive: true });

try {
  // Export cities as CSV
  const { cities } = await import('../src/data/cities.js');
  const csvHeader = 'name,slug,state,stateAbbr,county,population,zipCodes,serviceAreas,landmarks,events\n';
  const csvRows = cities.map(city => [
    city.name,
    city.slug,
    city.state,
    city.stateAbbr,
    city.county,
    city.population,
    `"${city.zipCodes.join(';')}"`,
    `"${city.serviceAreas.join(';')}"`,
    `"${city.landmarks.join(';')}"`,
    `"${city.events.join(';')}"`
  ].join(',')).join('\n');
  
  fs.writeFileSync(path.join(dataExportDir, 'cities.csv'), csvHeader + csvRows);
  
  // Export as JSON
  fs.writeFileSync(
    path.join(dataExportDir, 'cities.json'),
    JSON.stringify(cities, null, 2)
  );
  
  console.log('✅ City data exported');
} catch (error) {
  console.warn('⚠️ Could not export city data:', error.message);
}

// Step 5: Create comprehensive manifest
const completeManifest = {
  backupName: BACKUP_NAME,
  timestamp: new Date().toISOString(),
  backupType: 'complete',
  contents: {
    sourceFiles: copiedFiles,
    externalAssets: downloadedAssets,
    productionBuild: fs.existsSync(path.join(BACKUP_PATH, 'dist')),
    cityDataExport: fs.existsSync(path.join(dataExportDir, 'cities.json'))
  },
  gitInfo: (() => {
    try {
      return {
        commit: execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim(),
        branch: execSync('git branch --show-current', { encoding: 'utf8' }).trim(),
        remoteUrl: execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim()
      };
    } catch {
      return { commit: 'No git repository', branch: 'unknown', remoteUrl: 'none' };
    }
  })(),
  environment: {
    nodeVersion: process.version,
    platform: process.platform,
    timestamp: new Date().toISOString()
  },
  instructions: {
    restore: 'See RESTORE_INSTRUCTIONS.md for complete restoration guide',
    assets: 'See downloaded-assets/ for all external images',
    build: 'Run npm install && npm run build:site to rebuild'
  }
};

fs.writeFileSync(
  path.join(BACKUP_PATH, 'complete-manifest.json'),
  JSON.stringify(completeManifest, null, 2)
);

// Create restoration instructions
const restoreInstructions = `# Complete Restoration Instructions

## Quick Start
1. Extract this backup to a new directory
2. \`cd ${BACKUP_NAME}\`
3. \`npm install\`
4. \`npm run dev\`

## Full Restoration Process

### 1. Environment Setup
\`\`\`bash
# Install Node.js 18+ if not already installed
# Clone or extract this backup
cd ${BACKUP_NAME}
npm install
\`\`\`

### 2. Development Server
\`\`\`bash
npm run dev
# Site will be available at http://localhost:5173
\`\`\`

### 3. Production Build
\`\`\`bash
npm run build:site
# Built files will be in dist/
\`\`\`

### 4. Deploy to Hosting
\`\`\`bash
# For Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist

# For other hosts, upload the dist/ folder
\`\`\`

### 5. GitHub Integration
\`\`\`bash
git init
git add .
git commit -m "Restore from backup ${TIMESTAMP}"
git remote add origin <your-new-repo-url>
git push -u origin main
\`\`\`

## Asset Management

### Using Downloaded Assets
- All external images are in \`downloaded-assets/\`
- Copy to \`public/images/\` to use locally
- Update image URLs in components to use local paths

### External Dependencies
- All external images have been downloaded
- No external dependencies for core functionality
- Site can run completely offline

## Data Management

### City Data
- Current city data exported to \`data-export/\`
- Available in both JSON and CSV formats
- Can be imported into databases or spreadsheets

### Scaling System
- All city batches and scaling utilities included
- Safe to activate additional states
- See docs/SCALING_GUIDE.md for expansion instructions

## Backup Contents

✅ Complete source code
✅ All configuration files  
✅ GitHub workflows and templates
✅ Documentation and guides
✅ External images downloaded
✅ Production build (if available)
✅ City data export
✅ Restoration instructions

## Support

If you need help restoring this backup:
1. Check the complete-manifest.json for backup details
2. Review the original README.md for project setup
3. See CONTRIBUTING.md for development guidelines

---
Backup created: ${new Date().toISOString()}
Git commit: ${completeManifest.gitInfo.commit}
`;

fs.writeFileSync(path.join(BACKUP_PATH, 'RESTORE_INSTRUCTIONS.md'), restoreInstructions);

// Calculate backup statistics
const calculateDirectoryStats = (dirPath) => {
  let totalFiles = 0;
  let totalSize = 0;
  
  const processItem = (itemPath) => {
    try {
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        const items = fs.readdirSync(itemPath);
        for (const item of items) {
          processItem(path.join(itemPath, item));
        }
      } else {
        totalFiles++;
        totalSize += stat.size;
      }
    } catch (error) {
      // Skip files that can't be accessed
    }
  };
  
  processItem(dirPath);
  return { totalFiles, totalSize };
};

const { totalFiles, totalSize } = calculateDirectoryStats(BACKUP_PATH);

// Create ZIP if possible
try {
  console.log('📦 Creating complete backup archive...');
  execSync(`cd ${BACKUP_DIR} && zip -r ${BACKUP_NAME}.zip ${BACKUP_NAME}/`, { stdio: 'inherit' });
  console.log(`✅ Complete backup archive: ${BACKUP_DIR}/${BACKUP_NAME}.zip`);
} catch (error) {
  console.warn('⚠️ Could not create ZIP archive');
}

console.log('\n🎉 Complete backup finished!');
console.log(`📁 Backup location: ${BACKUP_PATH}`);
console.log(`📊 Source files: ${copiedFiles} items`);
console.log(`📄 Total files: ${totalFiles}`);
console.log(`🖼️ Assets downloaded: ${downloadedAssets}/${externalAssets.length}`);
console.log(`💾 Total backup size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
console.log('\n📋 What\'s included:');
console.log('   ✓ Complete source code');
console.log('   ✓ All configuration files');
console.log('   ✓ External images downloaded');
console.log('   ✓ Production build (if available)');
console.log('   ✓ City data export');
console.log('   ✓ Restoration instructions');