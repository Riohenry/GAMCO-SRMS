import React from 'react';

export interface NavItem {
  idx: number;
  name: string;
  normal_Icon: React.ReactNode;
  hovered_Icon: React.ReactNode;
  dropdown: boolean;
  Lock: boolean;
  goto?: string;
  subItems?: SubNavItem[];
}

export interface SubNavItem {
  idx: number;
  name: string;
  goto?: string;
  icon: string;
  Lock?: boolean;
}

export interface PageNavProps {
  sideBar: boolean;
  toggle: (value: boolean) => void;
}

export interface SideNavProps {
  selectedTab: string | null;
  selectedSubTab: string | null;
  onTabChange: (tabIdx: string, subTabIdx: string | null) => void;
}

export interface DivertPagesState {
  login: boolean;
  loginType: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
}

export interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
