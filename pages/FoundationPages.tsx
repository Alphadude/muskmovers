
import React from 'react';
import { Icons } from '../constants.tsx';

export const Colors: React.FC = () => {
  const colorScales = [
    { name: 'Primary (Midnight)', hex: '#06233D', desc: 'Core brand color for trust and precision.' },
    { name: 'Secondary (Rocket)', hex: '#F84713', desc: 'Action and emphasis color representing power.' },
    { name: 'White', hex: '#FFFFFF', desc: 'Background and negative space.' },
    { name: 'Gray 900', hex: '#111827', desc: 'Text and deep contrast UI.' },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Colors</h1>
      <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Our color palette is inspired by nocturnal engineering and aerospace propulsion.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {colorScales.map((c) => (
          <div key={c.name} className="border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm overflow-hidden bg-white dark:bg-brand-blue">
            <div className="h-24 md:h-40 w-full" style={{ backgroundColor: c.hex }}></div>
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-bold text-base md:text-lg dark:text-white uppercase tracking-tight">{c.name}</h3>
                <code className="text-[10px] md:text-sm bg-brand-gray-100 dark:bg-brand-gray-800 dark:text-brand-gray-300 px-2 py-1 rounded">{c.hex}</code>
              </div>
              <p className="text-xs md:text-sm text-brand-gray-500 dark:text-brand-gray-400">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Typography: React.FC = () => {
  return (
    <div className="max-w-4xl space-y-16">
      <header>
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Typography</h1>
        <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 max-w-2xl">
          Our typography system uses two distinct font families to balance high-impact brand expression with technical legibility.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-brand-orange text-[10px] font-bold text-white uppercase tracking-widest">Brand Display</div>
          <h2 className="text-xs font-bold text-brand-gray-400 dark:text-brand-gray-500 uppercase tracking-[0.2em]">Space Grotesk</h2>
          <div className="p-8 border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm bg-brand-gray-50 dark:bg-brand-gray-900">
            <p className="font-display text-6xl font-bold dark:text-white">Aa</p>
            <p className="font-display text-sm mt-4 dark:text-brand-gray-300 leading-relaxed">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              1234567890!@#$%^&*
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-brand-blue text-[10px] font-bold text-white uppercase tracking-widest">Interface Sans</div>
          <h2 className="text-xs font-bold text-brand-gray-400 dark:text-brand-gray-500 uppercase tracking-[0.2em]">Inter</h2>
          <div className="p-8 border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm bg-brand-gray-50 dark:bg-brand-gray-900">
            <p className="text-6xl font-bold dark:text-white">Aa</p>
            <p className="text-sm mt-4 dark:text-brand-gray-300 leading-relaxed">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              1234567890!@#$%^&*
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold dark:text-white border-b border-brand-gray-200 dark:border-brand-gray-800 pb-4 uppercase tracking-tight">Type Scale</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-brand-gray-400 uppercase tracking-widest border-b border-brand-gray-100 dark:border-brand-gray-800">
                <th className="py-4 font-normal">Token</th>
                <th className="py-4 font-normal">Font Family</th>
                <th className="py-4 font-normal">Size / Weight</th>
                <th className="py-4 font-normal">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-gray-100 dark:divide-brand-gray-800">
              <tr>
                <td className="py-6 font-mono text-xs">Display H1</td>
                <td className="py-6 text-xs uppercase">Space Grotesk</td>
                <td className="py-6 text-xs text-brand-gray-500">60px / 700</td>
                <td className="py-6"><span className="font-display text-4xl font-bold dark:text-white uppercase tracking-tighter">Headline 1</span></td>
              </tr>
              <tr>
                <td className="py-6 font-mono text-xs">Body Large</td>
                <td className="py-6 text-xs uppercase">Inter</td>
                <td className="py-6 text-xs text-brand-gray-500">18px / 400</td>
                <td className="py-6"><span className="text-lg dark:text-brand-gray-200">The quick brown fox jumps over the lazy dog.</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export const Grid: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Grid System</h1>
      <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        A precise 12-column grid ensures structural integrity across all Musk Mover platforms, from mobile telemetry dashboards to industrial desktop interfaces.
      </p>

      <section className="space-y-12">
        <div className="p-8 border border-brand-gray-200 dark:border-brand-gray-800 bg-brand-gray-50 dark:bg-brand-gray-900 rounded-sm">
          <h3 className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-6">12-Column Visualizer</h3>
          <div className="grid grid-cols-4 md:grid-cols-12 gap-4 mb-8">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-32 bg-brand-blue/5 dark:bg-brand-orange/10 border border-brand-blue/10 dark:border-brand-orange/20 rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold text-brand-blue/40 dark:text-brand-orange/40">{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             <div className="col-span-1 h-12 bg-brand-blue/10 dark:bg-white/5 rounded-sm flex items-center justify-center text-[10px] font-bold uppercase tracking-widest">Col Span 1 (Mobile)</div>
             <div className="col-span-1 h-12 bg-brand-blue/10 dark:bg-white/5 rounded-sm flex items-center justify-center text-[10px] font-bold uppercase tracking-widest">Col Span 1 (Mobile)</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm">
            <h4 className="font-display font-bold mb-4 dark:text-white uppercase tracking-tight">Desktop Breakdown</h4>
            <ul className="space-y-3 text-sm text-brand-gray-600 dark:text-brand-gray-400">
              <li className="flex justify-between"><span>Columns:</span> <span className="font-mono font-bold text-brand-blue dark:text-white">12</span></li>
              <li className="flex justify-between"><span>Gutter:</span> <span className="font-mono font-bold text-brand-blue dark:text-white">32px</span></li>
              <li className="flex justify-between"><span>Margin:</span> <span className="font-mono font-bold text-brand-blue dark:text-white">64px - 120px</span></li>
            </ul>
          </div>
          <div className="p-6 border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm">
            <h4 className="font-display font-bold mb-4 dark:text-white uppercase tracking-tight">Mobile Breakdown</h4>
            <ul className="space-y-3 text-sm text-brand-gray-600 dark:text-brand-gray-400">
              <li className="flex justify-between"><span>Columns:</span> <span className="font-mono font-bold text-brand-blue dark:text-white">4</span></li>
              <li className="flex justify-between"><span>Gutter:</span> <span className="font-mono font-bold text-brand-blue dark:text-white">16px</span></li>
              <li className="flex justify-between"><span>Margin:</span> <span className="font-mono font-bold text-brand-blue dark:text-white">16px - 24px</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Iconography: React.FC = () => {
  const categories = [
    {
      name: 'Logistics',
      icons: [
        { name: 'Truck', icon: <Icons.Truck /> },
        { name: 'Package', icon: <Icons.Package /> },
        { name: 'Clipboard', icon: <Icons.Clipboard /> },
        { name: 'Bar Chart', icon: <Icons.BarChart /> },
      ]
    },
    {
      name: 'Marine',
      icons: [
        { name: 'Anchor', icon: <Icons.Anchor /> },
        { name: 'Ship', icon: <Icons.Ship /> },
        { name: 'Waves', icon: <Icons.Waves /> },
      ]
    },
    {
      name: 'Engineering',
      icons: [
        { name: 'Hard Hat', icon: <Icons.HardHat /> },
        { name: 'Hammer', icon: <Icons.Hammer /> },
        { name: 'Wrench', icon: <Icons.Wrench /> },
        { name: 'Cog', icon: <Icons.Cog /> },
      ]
    },
    {
      name: 'Interface',
      icons: [
        { name: 'Arrow Right', icon: <Icons.ArrowRight /> },
        { name: 'Check', icon: <Icons.Check /> },
        { name: 'Info', icon: <Icons.Info /> },
        { name: 'Menu', icon: <Icons.Menu /> },
        { name: 'Map Pin', icon: <Icons.MapPin /> },
        { name: 'Globe', icon: <Icons.Globe /> },
        { name: 'Navigation', icon: <Icons.Navigation /> },
      ]
    }
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Iconography</h1>
      <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        A technical suite of icons designed for global logistics.
      </p>
      
      {categories.map((cat) => (
        <div key={cat.name} className="mb-12">
          <h2 className="text-xs font-bold text-brand-gray-400 dark:text-brand-gray-500 uppercase tracking-widest mb-4 border-b border-brand-gray-100 dark:border-brand-gray-800 pb-2">
            {cat.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {cat.icons.map((item) => (
              <div key={item.name} className="flex flex-col items-center justify-center p-6 md:p-8 border border-brand-gray-100 dark:border-brand-gray-800 rounded-sm bg-white dark:bg-brand-gray-900 hover:border-brand-blue dark:hover:border-brand-orange hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 transition-all group">
                <div className="mb-4 transform scale-110 md:scale-150 text-brand-blue dark:text-brand-gray-200 group-hover:text-brand-orange transition-colors">
                  {item.icon}
                </div>
                <span className="text-[9px] md:text-[10px] font-mono font-bold text-brand-gray-400 dark:text-brand-gray-500 uppercase tracking-wider">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
