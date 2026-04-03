'use client';

import React, { useEffect, useState } from 'react';
import PageNav from '@/components/navbars/NavDashboard';
import SideNavPage from '@/components/navbars/SideNavDashboard';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [selectedSubTab, setSelectedSubTab] = useState<string | null>(null);
  const [sideBar, setSideBar] = useState(true);

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const handleResize = () => {
    setSideBar(window.innerWidth > 990);
  };

  useEffect(() => {
    const storedTab = localStorage.getItem('tabIndex');
    const storedSubTab = localStorage.getItem('subTabIndex');
    setSelectedTab(storedTab);
    setSelectedSubTab(storedSubTab);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabChange = (tabIndex: string, subTabIndex: string) => {
    setSelectedTab(tabIndex);
    setSelectedSubTab(subTabIndex);
    localStorage.setItem('tabIndex', tabIndex);
    localStorage.setItem('subTabIndex', subTabIndex);
  };

  return (
    <div className='bg-gray-100 w-full overflow-hidden'>
      <PageNav sideBar={sideBar} toggle={toggleSideBar} />
      <div className='flex h-screen w-full'>
        {sideBar ? (
          <SideNavPage
            selectedTab={selectedTab}
            selectedSubTab={selectedSubTab}
            onTabChange={handleTabChange}
          />
        ) : null}
        <div className='flex flex-col flex-grow w-full bg-[#f3f3f3]'>
          {children}
        </div>
      </div>
    </div>
  );
}
