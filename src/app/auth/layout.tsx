'use client';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex h-screen">
      {children}
    </div>
  );
}
