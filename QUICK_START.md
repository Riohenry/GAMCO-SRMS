# Quick Start Guide - GAMCO-SRMS Modernization

## 1. Install Dependencies

```bash
npm install
```

This installs all the updated dependencies including Next.js 16, TypeScript, and Tailwind CSS.

## 2. Setup Environment

Copy the example environment file and update as needed:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual configuration values.

## 3. Run Development Server

```bash
npm run dev
```

The application will start on `http://localhost:3000`.

## 4. Build for Production

```bash
npm run build
npm run start
```

## 5. Type Check

To verify TypeScript has no errors:

```bash
npm run type-check
```

## What Changed?

### Tech Stack
- **Framework**: Create React App → Next.js 16
- **Routing**: React Router → Next.js App Router
- **Styling**: Chakra UI + Bulma → Tailwind CSS
- **Language**: JavaScript → TypeScript
- **Deployment**: GitHub Pages → Vercel (recommended)

### File Structure
```
src/
├── app/                  # Next.js routes (new)
├── components/           # React components
├── lib/                  # Utility functions (new)
├── types/               # TypeScript types (new)
├── assets/              # Images and static files
└── globals.css          # Global styles (updated)
```

### Key Files Created
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `src/app/layout.tsx` - Root layout
- `src/app/page.tsx` - Home page
- `src/globals.css` - Tailwind styles
- `src/types/index.ts` - Type definitions
- `src/lib/utils.ts` - Utility functions

## Common Tasks

### Add a New Page

1. Create a new folder in `src/app/pages/`:
```bash
mkdir src/app/pages/new-feature
```

2. Create `page.tsx`:
```typescript
'use client';

export default function NewFeaturePage() {
  return <div>New Feature</div>;
}
```

3. Access at `/pages/new-feature`

### Convert JavaScript Component to TypeScript

1. Rename `.js` to `.tsx`
2. Add TypeScript types:
```typescript
import type { FC } from 'react';

interface MyComponentProps {
  title: string;
  count: number;
}

const MyComponent: FC<MyComponentProps> = ({ title, count }) => {
  return <div>{title}: {count}</div>;
};

export default MyComponent;
```

### Use Tailwind CSS Classes

Instead of inline styles:
```typescript
// ❌ Old (CSS)
<div style={{ color: '#5e81f4', padding: '8px' }}>

// ✅ New (Tailwind)
<div className="text-primary p-2">
```

### Import Images with Next.js Image

```typescript
import Image from 'next/image';
import Logo from '@/assets/Vidyalay.png';

export default function Header() {
  return <Image src={Logo} alt="Logo" width={44} height={44} />;
}
```

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### TypeScript Errors
Check `src/types/index.ts` for type definitions or add your own:
```typescript
export interface MyType {
  id: string;
  name: string;
}
```

### Tailwind Classes Not Working
1. Verify file is in `tailwind.config.js` content paths
2. Check component uses `className` (not `style`)
3. Run `npm run dev` to rebuild

### Build Fails
1. Run `npm run type-check` to find TypeScript errors
2. Check console for error messages
3. Verify all imports are correct
4. Clear `.next` folder: `rm -rf .next`

## Useful Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run type-check` | Check TypeScript |
| `npm run lint` | Lint code |

## Documentation

- [MODERNIZATION_GUIDE.md](./MODERNIZATION_GUIDE.md) - Detailed migration info
- [ROUTING_MIGRATION.md](./ROUTING_MIGRATION.md) - Route mapping
- [MIGRATION_CHECKLIST.md](./MIGRATION_CHECKLIST.md) - Progress tracking
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)

## Next Steps

1. Review the modernization progress in MODERNIZATION_GUIDE.md
2. Start converting components to TypeScript
3. Update navigation components to use next/link
4. Replace React Router usage with Next.js routing
5. Test all features work correctly
6. Deploy to Vercel

## Need Help?

- Check the troubleshooting section above
- Review the MODERNIZATION_GUIDE.md for detailed info
- Look at converted components (NavDashboard.tsx) for examples
- Check TypeScript errors with `npm run type-check`

---

**Ready to start?** Run `npm install && npm run dev` and visit `http://localhost:3000`!
