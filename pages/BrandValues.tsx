
import React from 'react';
import { MuskMoverLogo } from '../constants.tsx';

const BrandValues: React.FC = () => {
  const logoVariations = [
    { title: 'Primary', variant: 'primary', bg: 'bg-white dark:bg-brand-blue', text: 'text-brand-blue dark:text-white' },
    { title: 'Monochrome', variant: 'monochrome', bg: 'bg-brand-gray-50 dark:bg-brand-gray-900', text: 'text-brand-blue dark:text-white' },
    { title: 'Inverted', variant: 'white', bg: 'bg-brand-blue dark:bg-brand-gray-950', text: 'text-white' },
    { title: 'Accent', variant: 'orange', bg: 'bg-brand-gray-900 dark:bg-brand-gray-950', text: 'text-white' },
  ];

  return (
    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Brand Identity</h1>
      
      <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-10 leading-relaxed max-w-4xl">
        The Musk Mover logo is a symbol of engineering excellence, speed, and reliability. It consists of two interlocking geometric peaks representing propulsion and progress.
      </p>

      <section className="mb-20">
        <div className="relative p-1 border-[3px] border-blue-400/50 rounded-sm">
          <div className="relative h-[400px] md:h-[600px] overflow-hidden bg-brand-blue">
            <img 
              src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=1600&auto=format&fit=crop" 
              alt="Heavy Cargo Vessel at Sea" 
              className="w-full h-full object-cover opacity-70 transition-transform duration-[3000ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
              <p className="text-brand-orange text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Heavy Lift Operations
              </p>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter leading-[0.85]">
                Industrial<br />Strength.<br />Digital<br />Intelligence.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 dark:text-white uppercase tracking-tight">Logo Variations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {logoVariations.map((item) => (
            <div key={item.title} className="flex flex-col">
              <div className={`h-64 rounded-sm flex items-center justify-center border border-brand-gray-200 dark:border-brand-gray-800 ${item.bg} transition-colors duration-300 shadow-sm`}>
                <MuskMoverLogo size={120} variant={item.variant as any} />
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg dark:text-white uppercase tracking-tight">{item.title}</h3>
                <p className="text-brand-gray-500 dark:text-brand-gray-400 text-sm">Used for {item.title.toLowerCase()} contexts and backgrounds.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 dark:text-white uppercase tracking-tight">Clearance & Sizing</h2>
        <div className="bg-brand-gray-50 dark:bg-brand-gray-900 p-8 md:p-12 flex flex-col items-center border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm">
          <div className="relative border-2 border-dashed border-brand-orange/40 p-12">
            <MuskMoverLogo size={80} variant="primary" />
            <div className="absolute top-0 left-0 text-[10px] font-mono text-brand-orange bg-brand-gray-50 dark:bg-brand-gray-900 px-1 -mt-2 ml-2">SAFETY ZONE (X)</div>
          </div>
          <p className="mt-8 text-center text-brand-gray-600 dark:text-brand-gray-400 max-w-md text-sm md:text-base italic">
            Always maintain a safety zone equal to the height of the inner peak (X) around the logo to ensure maximum visibility and impact.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BrandValues;