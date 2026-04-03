'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PagesIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard by default
    router.push('/pages/dashboard');
  }, [router]);

  return null;
}
