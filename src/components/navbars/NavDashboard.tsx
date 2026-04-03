'use client';

import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CiSearch } from 'react-icons/ci';
import { TfiFullscreen } from 'react-icons/tfi';
import Logo from '@/assets/Vidyalay.png';
import Image from 'next/image';

interface NavDashboardProps {
  sideBar: boolean;
  toggle: (value: boolean) => void;
}

interface NavProps {
  sidebar: boolean;
  toggle: (value: boolean) => void;
}

const OrdinaryNav: React.FC<NavProps> = ({ sidebar, toggle }) => {
  return (
    <div className="h-14 d-bg dp items-center relative">
      <div className="h-full w-60 flex items-center justify-between p-2.5">
        <Image
          src={Logo}
          className="pl-7 max-h-11"
          alt="eSkooly-Logo"
          width={44}
          height={44}
        />
        <RxHamburgerMenu
          color="#000000"
          size={20}
          className="cursor-pointer"
          onClick={() => toggle(!sidebar)}
        />
      </div>
      <div>
        <ul className="flex items-center">
          <li></li>
          <li className="p-2">
            <CiSearch color="#000000" size={20} />
          </li>
          <li className="p-1">
            <TfiFullscreen color="#000000" size={20} />
          </li>
        </ul>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

const MobileNav: React.FC<NavProps> = ({ sidebar, toggle }) => {
  return (
    <div className="h-14 d-bg dp-mb items-center relative">
      <div className="h-full w-full flex items-center justify-between p-2.5">
        <Image
          src={Logo}
          className="pl-7 max-h-11"
          alt="eSkooly-Logo"
          width={44}
          height={44}
        />
        <RxHamburgerMenu
          color="#000000"
          size={30}
          className="cursor-pointer mr-7"
          onClick={() => toggle(!sidebar)}
        />
      </div>
    </div>
  );
};

const NavDashboard: React.FC<NavDashboardProps> = ({ sideBar, toggle }) => {
  return (
    <div>
      <OrdinaryNav sidebar={sideBar} toggle={toggle} />
      <MobileNav sidebar={sideBar} toggle={toggle} />
    </div>
  );
};

export default NavDashboard;
