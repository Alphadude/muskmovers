
import React, { useState } from 'react';
import { Page, NavItem } from '../types.ts';
import { MuskMoverLogo, Icons } from '../constants.tsx';

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
  { id: Page.GRID, label: 'Grid System', category: 'Foundation' },
  { id: Page.ICONS, label: 'Iconography', category: 'Foundation' },
  { id: Page.BUTTONS, label: 'Buttons', category: 'Components' },
  { id: Page.INPUTS, label: 'Inputs', category: 'Components' },
  { id: Page.CARDS, label: 'Cards', category: 'Components' },
  { id: Page.MODALS, label: 'Modals', category: 'Components' },
  { id: Page.MARKETPLACE, label: 'Marketplace', category: 'Patterns' },
  { id: Page.LOGISTICS, label: 'Logistics Tracking', category: 'Patterns' },
];

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange, isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories: NavItem['category'][] = ['Getting Started', 'Foundation', 'Components', 'Patterns'];

  const handleNavClick = (page: Page) => {
    onPageChange(page);
    setIsOpen(false);
  };

  return (
    <>
      <header className="md:hidden flex items-center justify-between p-4 border-b border-brand-gray-100 dark:border-brand-gray-800 bg-white dark:bg-brand-blue sticky top-0 z-40">
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

      {isOpen && (
        <div 
          className="fixed inset-0 bg-brand-blue/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-white dark:bg-[#06233D] border-r border-brand-gray-100 dark:border-brand-gray-800 z-50 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:flex md:flex-col md:h-screen md:sticky md:top-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 pt-8 border-none flex items-center gap-3">
          <MuskMoverLogo size={28} variant={isDarkMode ? 'white' : 'primary'} />
          <span className="font-display font-bold text-lg tracking-tight text-brand-blue dark:text-white uppercase">MUSK MOVER</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-8 px-4">
          {categories.map(category => (
            <div key={category} className="mb-10 last:mb-0">
              <h3 className="text-[10px] font-bold text-brand-gray-400 dark:text-brand-gray-500 uppercase tracking-[0.15em] px-4 mb-4">
                {category}
              </h3>
              <ul className="space-y-1">
                {navItems
                  .filter(item => item.category === category)
                  .map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-2 rounded-sm text-sm font-semibold transition-colors duration-150 ${
                          activePage === item.id
                            ? 'bg-[#06233D] text-white shadow-lg'
                            : 'text-brand-gray-600 dark:text-brand-gray-400 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 hover:text-brand-blue dark:hover:text-white'
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

        <div className="p-4 border-t border-brand-gray-100 dark:border-brand-gray-800 space-y-4">
          <button 
            onClick={toggleDarkMode}
            className="flex items-center justify-center gap-3 w-full px-4 py-3 text-xs font-bold uppercase tracking-widest border border-brand-gray-200 dark:border-brand-gray-700 rounded-sm hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 transition-colors"
          >
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              <span>DARK MODE</span>
            </div>
          </button>
          <div className="text-[10px] text-brand-gray-400 font-mono text-center pt-2">
            DS V1.0.0 © 2024
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
