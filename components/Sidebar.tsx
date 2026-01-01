
import React, { useState } from 'react';
import { Page, NavItem } from '../types';
import { MuskMoverLogo, Icons } from '../constants';

interface SidebarProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems: NavItem[] = [
  { id: Page.INTRODUCTION, label: 'Introduction', category: 'Getting Started' },
  { id: Page.BRAND_VALUES, label: 'Brand Values', category: 'Getting Started' },
  { id: Page.COLORS, label: 'Colors', category: 'Foundation' },
  { id: Page.TYPOGRAPHY, label: 'Typography', category: 'Foundation' },
  { id: Page.ICONS, label: 'Iconography', category: 'Foundation' },
  { id: Page.BUTTONS, label: 'Buttons', category: 'Components' },
  { id: Page.INPUTS, label: 'Inputs', category: 'Components' },
  { id: Page.MODALS, label: 'Modals', category: 'Components' },
];

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange, isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = Array.from(new Set(navItems.map(item => item.category)));

  const handleNavClick = (page: Page) => {
    onPageChange(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-brand-gray-200 dark:border-brand-gray-800 bg-white dark:bg-brand-blue sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <MuskMoverLogo size={24} variant={isDarkMode ? 'white' : 'primary'} />
          <span className="font-display font-bold text-sm tracking-tight text-brand-blue dark:text-white">MUSK MOVER</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-brand-blue dark:text-white"
          aria-label="Toggle Menu"
        >
          <Icons.Menu />
        </button>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-brand-blue/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-white dark:bg-brand-blue border-r border-brand-gray-200 dark:border-brand-gray-800 z-50 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:flex md:flex-col md:h-screen md:sticky md:top-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b border-brand-gray-200 dark:border-brand-gray-800 hidden md:flex items-center gap-3">
          <MuskMoverLogo size={32} variant={isDarkMode ? 'white' : 'primary'} />
          <span className="font-display font-bold text-lg tracking-tight text-brand-blue dark:text-white">MUSK MOVER</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4">
          {categories.map(category => (
            <div key={category} className="mb-8 last:mb-0">
              <h3 className="text-[10px] font-bold text-brand-gray-400 dark:text-brand-gray-500 uppercase tracking-widest px-4 mb-4">
                {category}
              </h3>
              <ul className="space-y-1">
                {navItems
                  .filter(item => item.category === category)
                  .map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                          activePage === item.id
                            ? 'bg-brand-blue text-white dark:bg-brand-orange'
                            : 'text-brand-gray-600 dark:text-brand-gray-400 hover:bg-brand-gray-100 dark:hover:bg-brand-gray-800 hover:text-brand-blue dark:hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-brand-gray-200 dark:border-brand-gray-800 space-y-4">
          <button 
            onClick={toggleDarkMode}
            className="flex items-center gap-2 w-full px-4 py-2 text-xs font-bold uppercase tracking-widest border border-brand-gray-200 dark:border-brand-gray-700 rounded hover:bg-brand-gray-100 dark:hover:bg-brand-gray-800 transition-colors"
          >
            {isDarkMode ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                <span>Dark Mode</span>
              </>
            )}
          </button>
          <div className="text-[10px] text-brand-gray-400 font-mono">
            DS V1.0.0 © 2024
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
