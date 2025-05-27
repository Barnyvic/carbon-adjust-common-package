# @carbon-adjust/common

Shared code and utilities for Carbon Adjust microservices.

## Installation

```bash
npm install @carbon-adjust/common
# or
yarn add @carbon-adjust/common
```

## Publishing Guidelines

Before publishing a new version, ensure you follow these steps:

1. Update the version number:

   ```bash
   # For patch updates (bug fixes)
   yarn version --patch

   # For minor updates (new features)
   yarn version --minor

   # For major updates (breaking changes)
   yarn version --major
   ```

2. The following checks will run automatically before publishing:

   - Code formatting (Prettier)
   - Linting (ESLint)
   - Build process (TypeScript)

3. If all checks pass, publish the package:
   ```bash
   npm publish
   ```

## Development Workflow

1. Make your changes in the `src` directory
2. Format code: `yarn format`
3. Lint code: `yarn lint`
4. Build: `yarn build`

## Git Hooks

This package uses Husky to enforce:

- Code formatting before commits
- Linting before commits
- Version updates before publishing

## Available Scripts

- `yarn build` - Build the package
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn prepublishOnly` - Run before publishing (automatic)
- `yarn version` - Update version and format code (automatic)
- `yarn postversion` - Push changes and tags (automatic)
- `yarn precommit` - Run before commit (automatic)

## Dependencies

This package requires the following peer dependencies:

- @nestjs/common: ^10.0.0
- @nestjs/mongoose: ^10.0.0
- @nestjs/swagger: ^7.1.8
- mongoose: ^7.0.0
