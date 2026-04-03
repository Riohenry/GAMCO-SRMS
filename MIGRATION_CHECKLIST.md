# GAMCO-SRMS Modernization Checklist

## Pre-Migration Setup

- [x] Updated `package.json` with new dependencies
- [x] Created `next.config.js` configuration
- [x] Created `tsconfig.json` with TypeScript configuration
- [x] Created `postcss.config.js` for PostCSS support
- [x] Updated `tailwind.config.js` with design tokens
- [x] Created `.gitignore` for Next.js
- [x] Created `.env.example` with configuration template

## Directory Structure

- [x] Created `src/app/` directory (Next.js App Router)
- [x] Created `src/app/layout.tsx` (root layout)
- [x] Created `src/app/page.tsx` (home page)
- [x] Created `src/app/auth/` routes
- [x] Created `src/app/pages/` routes
- [x] Created `src/types/` directory for TypeScript definitions
- [x] Created `src/lib/` directory for utilities

## Core Files

- [x] `src/globals.css` - Global styles with Tailwind directives
- [x] `src/types/index.ts` - Central type definitions
- [x] `src/lib/utils.ts` - Utility functions

## Navigation Components

- [x] `src/components/navbars/NavDashboard.tsx` - TypeScript version created
- [x] `src/components/navbars/SideNavDashboard.tsx` - TypeScript version created
- [ ] `src/components/navbars/SideNavItems.js` - Convert to TypeScript

## Route Pages

- [x] Created base route structure
- [x] `/pages/dashboard` route created
- [x] `/pages/students/all` route created
- [x] `/pages/students/add` route created
- [x] `/pages/settings/*` routes structure created
- [ ] Complete remaining route pages (see ROUTING_MIGRATION.md)

## Component Migration

### Critical Components (High Priority)
- [ ] `src/components/pages/Pages.js` → Convert to route structure
- [ ] `src/components/pages/DivertPages.js` → Auth flow component
- [ ] `src/components/pages/Home.js` → Signup page
- [ ] `src/components/Signup/Type-1/SignUp.js` → Auth component

### Dashboard Components
- [ ] `src/components/pages/InsidePages/Dashboard/Dashboard.js`
- [ ] All dashboard sub-components (80+ components total)

## Styling Migration

- [x] Replaced Chakra UI classes with Tailwind CSS
- [x] Created design token system in globals.css
- [x] Migrated custom CSS to Tailwind utilities
- [x] Removed Chakra UI dependencies from package.json
- [ ] Update individual components to use Tailwind classes
- [ ] Remove legacy CSS files (index.css, App.css, etc.)
- [ ] Remove Bulma CSS if not used

## Image & Asset Handling

- [x] Identified logo at `src/assets/Vidyalay.png`
- [ ] Update all `<img>` tags to use Next.js `Image` component
- [ ] Move assets from `src/assets/` to `public/` if needed
- [ ] Update image paths in components

## Dependencies

### Remove (Once Migration Complete)
- `react-router-dom` - Replaced by Next.js routing
- `@chakra-ui/react` - Replaced by Tailwind CSS
- `@emotion/react` - Chakra UI dependency
- `@emotion/styled` - Chakra UI dependency
- `bulma` - Replace with Tailwind CSS
- `react-scripts` - Not needed with Next.js
- `gh-pages` - Use Vercel deployment instead

### New Dependencies
- [x] `next@^16.0.0` - Next.js framework
- [x] `react@^19.0.0` - React 19
- [x] `typescript@^5.3.3` - TypeScript
- [x] `tailwindcss@^3.4.1` - Tailwind CSS
- [x] `postcss@^8.4.32` - PostCSS
- [x] `autoprefixer@^10.4.16` - CSS autoprefixer
- [x] `clsx@^2.1.1` - Utility for className merging
- [x] `tailwind-merge@^2.4.0` - Merge Tailwind classes

## Testing

### Functionality Tests
- [ ] Authentication flow works
- [ ] Navigation between pages works
- [ ] All routes load correctly
- [ ] Forms submit without errors
- [ ] Data displays correctly
- [ ] Responsive design works on mobile/tablet

### Performance Tests
- [ ] Build completes without errors
- [ ] No TypeScript compilation errors
- [ ] No console errors or warnings
- [ ] Page load time is acceptable
- [ ] Bundle size is smaller than CRA

### Browser Compatibility
- [ ] Works on Chrome/Edge
- [ ] Works on Firefox
- [ ] Works on Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## Documentation

- [x] Created `MODERNIZATION_GUIDE.md`
- [x] Created `ROUTING_MIGRATION.md`
- [x] Created `MIGRATION_CHECKLIST.md` (this file)
- [ ] Update project README.md with new setup instructions
- [ ] Add deployment instructions for Vercel

## Deployment

- [ ] Update GitHub repository settings
- [ ] Connect to Vercel
- [ ] Add environment variables to Vercel
- [ ] Test production build
- [ ] Deploy to staging environment
- [ ] Run final integration tests
- [ ] Deploy to production

## Rollback Plan

If issues occur:
1. Keep the `main` branch with old code
2. Use `modernize-project` branch for new code
3. Create PR with all changes for review
4. Keep ability to revert commits if needed

## Success Criteria

- [x] TypeScript compilation succeeds
- [x] Next.js dev server starts without errors
- [x] Next.js build completes successfully
- [ ] All pages render without errors
- [ ] Navigation works correctly
- [ ] Forms submit successfully
- [ ] No performance regression
- [ ] Smaller bundle size than CRA

## Notes & Issues

### Known Issues
- React Router imports will cause errors until all components are updated
- Legacy CSS files can be removed once Tailwind is fully applied
- Some custom styling may need adjustment for Tailwind equivalents

### Tips
- Use `@apply` in CSS for complex component classes
- Use design tokens from `globals.css`
- Import types from `@/types` directory
- Use `next/image` for all images
- Use `next/link` for navigation

---

**Last Updated**: 2026-04-03
**Status**: In Progress
**Completion Target**: Convert all 80+ components to TypeScript and Next.js
