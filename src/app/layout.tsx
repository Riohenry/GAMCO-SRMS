import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'GAMCO SRMS - School Management System',
  description: 'A comprehensive school resource management system',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-auto w-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
