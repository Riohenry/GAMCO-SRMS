'use client';

import { useEffect, useState } from 'react';
import DivertPages from '@/components/pages/DivertPages';
import Pages from '@/components/pages/Pages';

export default function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check logged in status from localStorage
    const loggedInStatus = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(loggedInStatus);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-foreground text-lg">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-auto w-full flex flex-col">
      {!isLoggedIn ? (
        <div className="w-full flex h-screen">
          <DivertPages />
        </div>
      ) : (
        <div className="flex w-full">
          <Pages />
        </div>
      )}
    </div>
  );
}
