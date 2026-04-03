'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlus, FaMinus, FaLock } from 'react-icons/fa';
import SideNavItems from './SideNavItems';
import type { NavItem, SubNavItem, SideNavProps } from '@/types';

const SideNavDashboard: React.FC<SideNavProps> = ({
  selectedTab,
  selectedSubTab,
  onTabChange,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [hoveredSubIdx, setHoveredSubIdx] = useState<number | null>(null);
  const [expandedDropdown, setExpandedDropdown] = useState<number | null>(null);

  const handleItemClick = (idx: number, dropdown: boolean, subIdx?: number) => {
    if (dropdown) {
      setExpandedDropdown((prev) => (prev === idx ? null : idx));
      localStorage.setItem('tabIndex', String(idx));
      if (subIdx !== undefined) {
        localStorage.setItem('subTabIndex', String(subIdx));
      }
    } else {
      onTabChange(String(idx), null);
      localStorage.setItem('tabIndex', String(idx));
      localStorage.setItem('subTabIndex', '');
    }
  };

  return (
    <div
      className="shadow-2xl overflow-auto sid-nav"
      style={{
        width: '235px',
        float: 'left',
        height: 'calc(100% - 50px)',
        backgroundColor: '#fff',
      }}
    >
      <ul>
        <li className="px-2.5 py-1.5">
          <span></span>menu
        </li>
        {(SideNavItems as NavItem[]).map((items) => (
          <li
            key={items.idx}
            className="w-full cursor-pointer"
            style={{
              color: hoveredIdx === items.idx ? '#5e81f4' : '#666',
            }}
            onMouseEnter={() => setHoveredIdx(items.idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <Link
              href={items.goto || '#'}
              className="flex items-center justify-between pr-3 w-full"
              onClick={() =>
                handleItemClick(items.idx, items.dropdown || false, undefined)
              }
            >
              <div
                className={`flex items-center px-5 py-1.5 ${
                  String(selectedTab) === String(items.idx)
                    ? 'border-l-4 border-indigo-500'
                    : ''
                }`}
              >
                <span className="p-1 pt-2 mr-0 inline-block items-center h-8 w-8 rounded">
                  {hoveredIdx === items.idx
                    ? items.hovered_Icon
                    : items.normal_Icon}
                </span>
                <span className="text-sm">{items.name}</span>
              </div>
              {items.dropdown && (
                <div className="flex items-center w-2 wl-0 w r-8 justify-end">
                  {expandedDropdown === items.idx ? (
                    <FaMinus color="gray" />
                  ) : (
                    <FaPlus color="gray" />
                  )}
                </div>
              )}
              {items.Lock && (
                <div className="flex items-center w-2 justify-end">
                  <FaLock color="#ff808b" style={{ opacity: '0.6' }} />
                </div>
              )}
            </Link>
            {items.dropdown && expandedDropdown === items.idx && (
              <ul
                className="relative opacity-100 visible"
                style={{
                  transform: 'rotateX(0deg)',
                  transition:
                    'transform 0.5s, opacity 0.5s, -webkit-transform 0.5s',
                  WebkitTransformStyle: 'preserve-3d',
                }}
              >
                {(items.subItems || []).map((item: SubNavItem) => (
                  <Link
                    key={item.idx}
                    href={item.goto || '#'}
                    className="flex items-center justify-between w-full px-5"
                    onClick={() => onTabChange(String(items.idx), String(item.idx))}
                  >
                    <li
                      className={`px-4 py-1.5 w-full flex justify-between cursor-pointer border-indigo-500 ${
                        hoveredSubIdx === item.idx ? 'text-blue-600 ' : ''
                      } ${
                        String(selectedSubTab) === String(item.idx)
                          ? ''
                          : ''
                      }`}
                      onMouseEnter={() => setHoveredSubIdx(item.idx)}
                      onMouseLeave={() => setHoveredSubIdx(null)}
                      style={{
                        borderLeftWidth:
                          String(selectedSubTab) === String(item.idx) ||
                          hoveredSubIdx === item.idx
                            ? '3px'
                            : '1px',
                        color:
                          hoveredSubIdx === item.idx ? '#5e81f4' : '#666',
                        opacity: item.Lock ? '0.6' : '',
                      }}
                    >
                      <div className="flex items-center">
                        <span className="text-sm">{item.name}</span>
                      </div>
                      {item.Lock && (
                        <div className="flex items-center w-2 justify-end">
                          <FaLock
                            color="#ff808b"
                            style={{ opacity: '0.6' }}
                          />
                        </div>
                      )}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavDashboard;
