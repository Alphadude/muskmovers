import React, { useState } from 'react';
import Sidebar from './components/Sidebar.tsx';
import { Page } from './types.ts';
import Introduction from './pages/Introduction.tsx';
import BrandValues from './pages/BrandValues.tsx';
import { Colors, Typography, Iconography, Grid } from './pages/FoundationPages.tsx';
import { Buttons, Inputs, Modals } from './pages/ComponentPages.tsx';
import { Marketplace, Logistics } from './pages/MarketplacePatterns.tsx';
import { MuskMoverLogo } from './constants.tsx';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.INTRODUCTION);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleExportPDF = () => {
    setIsPrintMode(true);
    // Increased timeout to ensure all components and images render fully for the PDF
    setTimeout(() => {
      window.print();
      setIsPrintMode(false);
    }, 1000);
  };

  const renderContent = () => {
    if (isPrintMode) {
      return (
        <div className="print-document">
          {/* PDF Cover Page */}
          <div className="page-break-after flex flex-col items-center justify-center h-[90vh] text-center border-[12px] border-brand-blue m-8">
            <MuskMoverLogo size={180} variant="primary" className="mb-12" />
            <h1 className="text-6xl font-display font-bold text-brand-blue uppercase tracking-tighter mb-4">
              Design System
            </h1>
            <p className="text-xl font-mono text-brand-orange font-bold tracking-[0.3em]">
              VERSION 1.0.0 / 2024
            </p>
            <div className="mt-24 text-sm text-brand-gray-400 font-mono">
              CONFIDENTIAL ENGINEERING GUIDELINES
            </div>
          </div>

          {/* Sequential PDF Content */}
          <div className="page-break"><Introduction /></div>
          <div className="page-break"><BrandValues /></div>
          <div className="page-break"><Colors /></div>
          <div className="page-break"><Typography /></div>
          <div className="page-break"><Grid /></div>
          <div className="page-break"><Iconography /></div>
          <div className="page-break"><Buttons /></div>
          <div className="page-break"><Inputs /></div>
          <div className="page-break"><Modals /></div>
          <div className="page-break"><Marketplace /></div>
          <div className="page-break"><Logistics /></div>
        </div>
      );
    }

    switch (activePage) {
      case Page.INTRODUCTION: return <Introduction />;
      case Page.BRAND_VALUES: return <BrandValues />;
      case Page.COLORS: return <Colors />;
      case Page.TYPOGRAPHY: return <Typography />;
      case Page.ICONS: return <Iconography />;
      case Page.GRID: return <Grid />;
      case Page.BUTTONS: return <Buttons />;
      case Page.INPUTS: return <Inputs />;
      case Page.MODALS: return <Modals />;
      case Page.MARKETPLACE: return <Marketplace />;
      case Page.LOGISTICS: return <Logistics />;
      case Page.CARDS: return (
        <div className="py-20 text-center">
          <h2 className="text-4xl font-display font-bold mb-4 uppercase tracking-tighter">Cards</h2>
          <p className="text-brand-gray-500">Card components are demonstrated within the <button onClick={() => setActivePage(Page.MARKETPLACE)} className="text-brand-orange underline">Marketplace Pattern</button>.</p>
        </div>
      );
      default: return (
        <div className="py-20 text-center">
          <h2 className="text-4xl font-display font-bold mb-4 uppercase tracking-tighter">Work in Progress</h2>
          <p className="text-brand-gray-500">The engineering team is currently refining this component.</p>
        </div>
      );
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} ${isPrintMode ? 'print-mode' : ''}`}>
      <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-brand-blue text-brand-blue dark:text-white transition-colors duration-300">
        {!isPrintMode && (
          <Sidebar 
            activePage={activePage} 
            onPageChange={setActivePage} 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
            onExportPDF={handleExportPDF}
          />
        )}
        <main className={`flex-1 overflow-y-auto scroll-smooth ${isPrintMode ? 'p-0 bg-white' : 'px-6 py-10 md:px-12 md:py-16'}`}>
          <div className={`mx-auto ${isPrintMode ? 'max-w-none w-full' : 'max-w-5xl'}`}>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;