# Contributing to GoGreen Portable Toilets

Thank you for your interest in contributing to the GoGreen Portable Toilets project! This guide will help you get started.

## Development Workflow

### 1. Fork and Clone
```bash
git clone https://github.com/your-username/gogreen-portable-toilets.git
cd gogreen-portable-toilets
npm install
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes
- Follow the existing code style and patterns
- Test your changes thoroughly
- Update documentation if needed

### 4. Test Your Changes
```bash
# Verify cities data
npm run verify:cities

# Test the build
npm run build:site

# Run development server
npm run dev
```

### 5. Commit and Push
```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

### 6. Create Pull Request
- Provide a clear description of your changes
- Reference any related issues
- Ensure all tests pass

## Code Style Guidelines

### React Components
- Use functional components with TypeScript
- Follow the existing naming conventions
- Keep components focused and single-purpose
- Use proper prop typing

### File Organization
- Keep files under 200 lines when possible
- Use clear, descriptive file names
- Organize related functionality together
- Follow the existing directory structure

### City Data Management
- Never modify core cities directly
- Use the batch system for adding new cities
- Validate all city data before adding
- Follow the scaling guidelines in `docs/SCALING_GUIDE.md`

## Adding New Cities

### Safe City Addition Process
1. **Use the batch system** - Never add cities directly to the main array
2. **Validate data** - Ensure all required fields are present
3. **Test thoroughly** - Verify pages generate correctly
4. **Follow naming conventions** - Use consistent slug formats

### Example City Addition
```typescript
// In src/data/cityBatches.ts
export const newStateBatch: CityBatch = {
  id: 'fl-batch-1',
  name: 'Florida Major Cities',
  status: 'planned', // Start as planned, activate when ready
  cities: [
    {
      name: "Miami",
      slug: "miami-fl",
      state: "Florida",
      stateAbbr: "FL",
      county: "Miami-Dade County",
      population: 442241,
      zipCodes: ["33101", "33102", "33109"],
      serviceAreas: ["Downtown Miami", "South Beach", "Brickell"],
      landmarks: ["Art Deco Historic District", "Vizcaya Museum"],
      events: ["Art Basel Miami Beach", "Ultra Music Festival"]
    }
  ]
};
```

## Testing Guidelines

### Before Submitting
- [ ] All existing tests pass
- [ ] New features have appropriate tests
- [ ] City data validates correctly
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] SEO metadata is complete

### Manual Testing Checklist
- [ ] Navigation works correctly
- [ ] Forms submit properly
- [ ] Phone links work on mobile
- [ ] Responsive design looks good
- [ ] All images load correctly
- [ ] No console errors

## Documentation

### When to Update Documentation
- Adding new features or components
- Changing the city management system
- Modifying build or deployment processes
- Adding new scaling strategies

### Documentation Standards
- Use clear, concise language
- Include code examples where helpful
- Update README.md for major changes
- Keep scaling guides current

## Performance Guidelines

### Code Performance
- Optimize images and assets
- Minimize bundle size
- Use lazy loading where appropriate
- Follow React best practices

### SEO Performance
- Maintain fast page load times
- Ensure proper meta tags
- Use semantic HTML structure
- Optimize for Core Web Vitals

## Security Considerations

### Data Handling
- Never commit sensitive data
- Use environment variables for secrets
- Validate all user inputs
- Follow GDPR compliance guidelines

### Third-Party Integrations
- Keep API keys secure
- Use HTTPS for all external calls
- Validate webhook payloads
- Monitor for security updates

## Getting Help

### Resources
- Check existing documentation in `docs/`
- Review similar implementations in the codebase
- Look at the scaling guides for city management
- Check the GitHub issues for known problems

### Contact
- Create an issue for bugs or feature requests
- Use discussions for questions
- Follow the issue templates when available

## Release Process

### Version Management
- Follow semantic versioning
- Update CHANGELOG.md for releases
- Tag releases appropriately
- Document breaking changes

### Deployment
- All changes go through pull request review
- Automated testing must pass
- Production deployments happen via GitHub Actions
- Monitor deployment success and performance

Thank you for contributing to GoGreen Portable Toilets!