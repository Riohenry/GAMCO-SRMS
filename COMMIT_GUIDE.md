# Commit Guide for Modernization

## Recommended Commit Messages

This document provides suggested commit messages for the modernization work.

## Initial Modernization Commits

### 1. Setup Phase
```
feat: modernize project to Next.js 16 with TypeScript

- Upgrade React to 19.0.0
- Replace Create React App with Next.js 16
- Add TypeScript support with strict mode
- Configure Tailwind CSS for styling
- Update package.json and dependencies
- Create Next.js configuration files
```

### 2. Configuration Setup
```
chore: configure Next.js, TypeScript, and Tailwind CSS

- Create next.config.js for Next.js settings
- Create tsconfig.json with path aliases
- Create tailwind.config.js with design tokens
- Create postcss.config.js
- Update .gitignore for Next.js
- Create .env.example template
```

### 3. Project Structure
```
feat: setup Next.js App Router structure

- Create src/app/ directory with new routing
- Create root layout.tsx and page.tsx
- Create /auth routes for authentication
- Create /pages routes for main application
- Create base route pages for dashboard and main sections
```

### 4. Styling Migration
```
feat: replace Chakra UI + Bulma with Tailwind CSS

- Create src/globals.css with Tailwind directives
- Add design token system with color palette
- Convert custom CSS classes to Tailwind utilities
- Update tailwind.config.js with extended utilities
- Remove Chakra UI and Bulma dependencies
```

### 5. TypeScript & Utils
```
feat: add TypeScript types and utility functions

- Create src/types/index.ts with central type definitions
- Create src/lib/utils.ts with helper functions
- Add interfaces for components, props, and data
- Export utility functions for cn(), formatDate(), etc.
```

### 6. Component Migration
```
feat: convert navigation components to TypeScript

- Convert NavDashboard.js to NavDashboard.tsx
- Convert SideNavDashboard.js to SideNavDashboard.tsx
- Update to use next/link instead of react-router
- Update to use next/image for images
- Add full TypeScript type annotations
```

### 7. Documentation
```
docs: add comprehensive modernization documentation

- Add MODERNIZATION_GUIDE.md with detailed info
- Add ROUTING_MIGRATION.md with route mapping
- Add MIGRATION_CHECKLIST.md for progress tracking
- Add QUICK_START.md for getting started
- Add MODERNIZATION_SUMMARY.md overview
```

## Component Conversion Commits

When converting individual components, use this format:

```
feat(components): convert [ComponentName] to TypeScript

- Convert src/components/[path]/[Component].js to .tsx
- Add TypeScript interfaces for props
- Update imports to use path aliases
- Replace react-router with next/link if needed
- Update styling to use Tailwind classes
```

### Examples

```
feat(components/navbars): convert NavDashboard to TypeScript
feat(pages/students): convert AllStudents to TypeScript
feat(pages/employees): convert AllEmployees to TypeScript
```

## Route Implementation Commits

```
feat(routes): implement [feature] routes

- Create /pages/[feature]/ routes
- Create page.tsx files for each route
- Add route layout if needed
- Update navigation items
```

### Examples

```
feat(routes): implement student management routes
feat(routes): implement employee management routes
feat(routes): implement settings routes
```

## Bug Fix Commits

```
fix: [issue description]

- Resolve issue with [component/feature]
- Update [file] to handle [case]
- Add type safety for [property]
```

## Performance Commits

```
perf: optimize [component/feature]

- Reduce bundle size by [method]
- Improve load time for [feature]
- Optimize image loading with next/image
```

## Refactoring Commits

```
refactor: improve [component/feature] structure

- Simplify [logic/component]
- Extract [logic] into [new location]
- Remove [deprecated pattern]
```

## Best Practices

### Do
- Reference issue numbers: `Fixes #123`
- Be specific about what changed
- Keep commits focused and atomic
- Use imperative mood: "add" not "added"
- Mention files changed in description

### Don't
- Mix multiple features in one commit
- Use vague messages: "update stuff"
- Commit without testing
- Ignore TypeScript errors
- Leave console.log() statements

## Commit Examples

### Good
```
feat(components): convert Dashboard to TypeScript

- Add DashboardProps interface
- Update API calls with proper typing
- Replace style prop with Tailwind classes
- Fix type errors from imports
- Update tests for new component
```

### Bad
```
update stuff
various fixes
working on modernization
```

## Git Workflow

### Create Feature Branch
```bash
git checkout -b feat/component-typescript-migration
```

### Commit Changes
```bash
git add src/components/NavDashboard.tsx
git commit -m "feat(components): convert NavDashboard to TypeScript"
```

### Push and Create PR
```bash
git push origin feat/component-typescript-migration
```

### Create Pull Request
- Link related issues
- Provide description of changes
- Request review from team
- Wait for tests to pass

## Common Commit Patterns

### Component Migration
```
feat(components): migrate [component] to TypeScript
feat(types): add interfaces for [module]
refactor(components): use Tailwind classes in [component]
```

### Feature Implementation
```
feat(pages): add [feature] page
feat(routes): implement [feature] routing
feat(api): add [endpoint] API route
```

### Bug Fixes
```
fix(components): handle null values in [component]
fix(styling): correct [class] display on mobile
fix(types): resolve type errors in [file]
```

### Documentation
```
docs: add [feature] documentation
docs(guide): update migration checklist
docs(readme): add setup instructions
```

---

**Reference**: Use these patterns when committing modernization changes.
**Format**: Conventional Commits (https://www.conventionalcommits.org/)
