
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { Page } from './types';
import Introduction from './pages/Introduction';
import BrandValues from './pages/BrandValues';
import { Colors, Typography, Iconography } from './pages/FoundationPages';
import { Buttons, Inputs, Modals } from './pages/ComponentPages';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.INTRODUCTION);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderContent = () => {
    switch (activePage) {
      case Page.INTRODUCTION: return <Introduction />;
      case Page.BRAND_VALUES: return <BrandValues />;
      case Page.COLORS: return <Colors />;
      case Page.TYPOGRAPHY: return <Typography />;
      case Page.ICONS: return <Iconography />;
      case Page.BUTTONS: return <Buttons />;
      case Page.INPUTS: return <Inputs />;
      case Page.MODALS: return <Modals />;
      default: return (
        <div className="py-20 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Work in Progress</h2>
          <p className="text-brand-gray-500">The engineering team is currently refining this component.</p>
        </div>
      );
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-brand-blue text-brand-blue dark:text-white transition-colors duration-300">
        <Sidebar 
          activePage={activePage} 
          onPageChange={setActivePage} 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
        <main className="flex-1 overflow-y-auto px-6 py-10 md:px-12 md:py-16 scroll-smooth">
          <div className="mx-auto max-w-5xl">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
