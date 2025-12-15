import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ASSETS_DIR = 'backup-assets';
const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];

// Create assets backup directory
fs.mkdirSync(ASSETS_DIR, { recursive: true });

console.log('🖼️ Downloading external assets...');

// List of external images used in the project
const externalAssets = [
  {
    url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    filename: 'wedding-event.jpg',
    description: 'Wedding event image'
  },
  {
    url: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    filename: 'corporate-event.jpg',
    description: 'Corporate event image'
  },
  {
    url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    filename: 'construction-site.jpg',
    description: 'Construction site image'
  },
  {
    url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    filename: 'festival-event.jpg',
    description: 'Festival event image'
  },
  {
    url: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800',
    filename: 'ada-accessible.jpg',
    description: 'ADA accessible facilities'
  },
  {
    url: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800',
    filename: 'hand-wash-station.jpg',
    description: 'Hand wash station'
  },
  {
    url: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    filename: 'sanitizer-station.jpg',
    description: 'Hand sanitizer station'
  },
  {
    url: 'https://images.pexels.com/photos/9324336/pexels-photo-9324336.jpeg?auto=compress&cs=tinysrgb&w=800',
    filename: 'solar-technology.jpg',
    description: 'Solar panels and green technology'
  },
  {
    url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    filename: 'team-sarah.jpg',
    description: 'Team member photo'
  },
  {
    url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    filename: 'team-michael.jpg',
    description: 'Team member photo'
  },
  {
    url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    filename: 'team-emily.jpg',
    description: 'Team member photo'
  }
];

// Download function using curl
const downloadAsset = async (asset) => {
  const filePath = path.join(ASSETS_DIR, asset.filename);
  
  try {
    console.log(`⬇️ Downloading: ${asset.description}`);
    execSync(`curl -L "${asset.url}" -o "${filePath}"`, { stdio: 'pipe' });
    
    // Verify download
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      console.log(`✅ Downloaded: ${asset.filename} (${(stat.size / 1024).toFixed(1)} KB)`);
      return true;
    } else {
      console.error(`❌ Failed to download: ${asset.filename}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error downloading ${asset.filename}:`, error.message);
    return false;
  }
};

// Download all assets
let successCount = 0;
let totalSize = 0;

for (const asset of externalAssets) {
  const success = await downloadAsset(asset);
  if (success) {
    successCount++;
    const stat = fs.statSync(path.join(ASSETS_DIR, asset.filename));
    totalSize += stat.size;
  }
  
  // Small delay to be respectful to the server
  await new Promise(resolve => setTimeout(resolve, 500));
}

// Create asset manifest
const assetManifest = {
  timestamp: new Date().toISOString(),
  totalAssets: externalAssets.length,
  successfulDownloads: successCount,
  totalSize: totalSize,
  sizeFormatted: `${(totalSize / 1024 / 1024).toFixed(2)} MB`,
  assets: externalAssets.map(asset => ({
    ...asset,
    downloaded: fs.existsSync(path.join(ASSETS_DIR, asset.filename)),
    localPath: asset.filename
  }))
};

fs.writeFileSync(
  path.join(ASSETS_DIR, 'asset-manifest.json'),
  JSON.stringify(assetManifest, null, 2)
);

// Create asset replacement guide
const replacementGuide = `# Asset Replacement Guide

This backup includes all external images used in the project. To use local images instead of external URLs:

## Image Locations

${externalAssets.map(asset => `
### ${asset.description}
- **External URL:** ${asset.url}
- **Local File:** ${asset.filename}
- **Usage:** Search codebase for the external URL to find where it's used
`).join('')}

## How to Replace External URLs

1. Copy the downloaded images to your \`public/images/\` directory
2. Update the image URLs in your components from external URLs to local paths
3. Example: Change \`https://images.pexels.com/...\` to \`/images/${asset.filename}\`

## Search and Replace Commands

\`\`\`bash
# Find all external image URLs
grep -r "https://images.pexels.com" src/

# Replace with local paths (example)
sed -i 's|https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800|/images/wedding-event.jpg|g' src/**/*.tsx
\`\`\`

This ensures your site works completely offline with no external dependencies.
`;

fs.writeFileSync(path.join(ASSETS_DIR, 'REPLACEMENT_GUIDE.md'), replacementGuide);

console.log('\n🎉 Asset backup completed!');
console.log(`📁 Assets saved to: ${ASSETS_DIR}`);
console.log(`📊 Downloaded: ${successCount}/${externalAssets.length} assets`);
console.log(`💾 Total size: ${assetManifest.sizeFormatted}`);
console.log('\n💡 See REPLACEMENT_GUIDE.md for instructions on using local images');