# GAMCO-SRMS - School Resource Management System

A comprehensive school management system built with Next.js 16, TypeScript, and Tailwind CSS.

## About This Project

GAMCO-SRMS has been modernized to use cutting-edge web technologies for improved performance, type safety, and maintainability. This is version 0.2.0, featuring a complete migration from Create React App to Next.js 16 with full TypeScript support.

## Getting Started

### Quick Setup (5 minutes)

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Start development server
npm run dev
```

Then visit `http://localhost:3000`

**First time? Read [QUICK_START.md](./QUICK_START.md)**

## Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Next.js | 16.0.0 |
| React | React | 19.0.0 |
| Language | TypeScript | 5.3.3 |
| Styling | Tailwind CSS | 3.4.1 |
| Icons | React Icons | 5.0.1 |
| HTTP Client | Axios | 1.6.7 |

## Key Features

- **Cloud-Based**: Access from anywhere with secure authentication
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Type Safe**: Full TypeScript support for better development experience
- **Fast**: Optimized performance with server-side rendering and code splitting

## Core Functionalities

- **Student Management**: Admissions, records, and student information
- **Employee Management**: Staff directory and HR functionality
- **Attendance Tracking**: Digital attendance for students and staff
- **Exam Management**: Create, schedule, and manage exams
- **Fee Management**: Automate fee collection and tracking
- **Reports & Analytics**: Comprehensive reports on performance and attendance
- **Messaging & Communication**: Built-in messaging system
- **Live Classes**: Virtual classroom support
- **Certificates**: Generate certificates for students

## Documentation

This project includes comprehensive documentation for developers:

- **[QUICK_START.md](./QUICK_START.md)** - Get started in 5 minutes
- **[MODERNIZATION_GUIDE.md](./MODERNIZATION_GUIDE.md)** - Detailed migration guide
- **[ROUTING_MIGRATION.md](./ROUTING_MIGRATION.md)** - Route mapping reference
- **[MIGRATION_CHECKLIST.md](./MIGRATION_CHECKLIST.md)** - Progress tracking
- **[MODERNIZATION_SUMMARY.md](./MODERNIZATION_SUMMARY.md)** - Complete overview
- **[COMMIT_GUIDE.md](./COMMIT_GUIDE.md)** - Git conventions
- **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** - Full documentation index

## Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # React components
├── lib/             # Utility functions
├── types/           # TypeScript definitions
├── assets/          # Static assets
└── globals.css      # Global styles
```

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm start           # Run production server
npm run type-check  # Check TypeScript errors
npm run lint        # Lint code
```

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- AWS Amplify
- Netlify
- Self-hosted with Docker
- Traditional VPS

## Project Status

### Version 0.2.0 - Modernized (Current)

- [x] Migrated from Create React App to Next.js 16
- [x] Added full TypeScript support
- [x] Replaced Chakra UI with Tailwind CSS
- [x] Implemented Next.js App Router
- [x] Created comprehensive documentation
- [ ] Completed component migration
- [ ] Full testing and QA

### Roadmap

- Component TypeScript migration
- Route completion
- Performance optimization
- Enhanced testing coverage
- Mobile app development
- Advanced analytics features

## Contributing

1. Create a feature branch: `git checkout -b feat/feature-name`
2. Make your changes
3. Follow [COMMIT_GUIDE.md](./COMMIT_GUIDE.md) conventions
4. Push and create a pull request

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
npm run type-check
```

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

See [QUICK_START.md](./QUICK_START.md) for more troubleshooting tips.

## License

Licensed under the MIT License - see LICENSE file for details.

## Support

- Documentation: See files listed in Documentation section
- Issues: Report via GitHub issues
- Questions: Check existing documentation

---

**Current Version**: 0.2.0 (Modernized)
**Last Updated**: 2026-04-03
**Repository**: Riohenry/GAMCO-SRMS
**Branch**: modernize-project
