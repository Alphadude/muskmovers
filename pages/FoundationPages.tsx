
import React from 'react';
import { Icons } from '../constants';

export const Colors: React.FC = () => {
  const colorScales = [
    { name: 'Primary (Midnight)', hex: '#06233D', desc: 'Core brand color for trust and precision.' },
    { name: 'Secondary (Rocket)', hex: '#F84713', desc: 'Action and emphasis color representing power.' },
    { name: 'White', hex: '#FFFFFF', desc: 'Background and negative space.' },
    { name: 'Gray 900', hex: '#111827', desc: 'Text and deep contrast UI.' },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white">Colors</h1>
      <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Our color palette is inspired by nocturnal engineering and aerospace propulsion.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {colorScales.map((c) => (
          <div key={c.name} className="border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm overflow-hidden bg-white dark:bg-brand-blue">
            <div className="h-24 md:h-40 w-full" style={{ backgroundColor: c.hex }}></div>
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-bold text-base md:text-lg dark:text-white">{c.name}</h3>
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
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white">Typography</h1>
        <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 max-w-2xl">
          Our typography system uses two distinct font families to balance high-impact brand expression with technical legibility.
        </p>
      </header>

      {/* Font Families Section */}
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
          <p className="text-sm text-brand-gray-600 dark:text-brand-gray-400 italic">
            Used for headings, subheadings, and key marketing statements. Its geometric nature reflects our engineering roots.
          </p>
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
          <p className="text-sm text-brand-gray-600 dark:text-brand-gray-400 italic">
            Used for all UI elements, body copy, and technical data. Optimized for maximum readability across all devices.
          </p>
        </div>
      </section>

      {/* Contextual Examples Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold dark:text-white border-b border-brand-gray-200 dark:border-brand-gray-800 pb-4">Contextual Usage</h2>
        
        <div className="space-y-12">
          {/* Example 1: Brand Statement */}
          <div className="bg-brand-gray-50 dark:bg-brand-gray-900 p-10 rounded-sm border border-brand-gray-200 dark:border-brand-gray-800">
            <h4 className="text-[10px] font-bold text-brand-orange uppercase mb-4 tracking-widest">Marketing Statement (Display Font)</h4>
            <p className="font-display text-3xl md:text-5xl font-bold text-brand-blue dark:text-white leading-[1.1] tracking-tighter">
              WE ARE REDEFINING THE MOMENTUM OF GLOBAL LOGISTICS.
            </p>
            <p className="font-display text-xl mt-6 text-brand-gray-600 dark:text-brand-gray-300 font-medium">
              Precision is not an option; it is our standard protocol.
            </p>
          </div>

          {/* Example 2: Technical Body Copy */}
          <div className="p-10 border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm">
            <h4 className="text-[10px] font-bold text-brand-blue dark:text-brand-orange uppercase mb-4 tracking-widest">Technical Body Copy (Interface Sans)</h4>
            <div className="max-w-2xl space-y-4">
              <p className="text-lg font-bold text-brand-blue dark:text-white">Operational Telemetry Overview</p>
              <p className="text-brand-gray-600 dark:text-brand-gray-400 leading-relaxed">
                The propulsion sequence is monitored by a distributed array of 42 sensors located throughout the primary cargo hold. Each sensor relays data at a frequency of 100Hz to the central processing unit. In the event of a deviation greater than 0.05%, an automatic lockdown protocol is initiated to preserve the integrity of the payload.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-brand-gray-100 dark:border-brand-gray-800">
                <div>
                  <p className="text-[10px] font-bold text-brand-gray-400 uppercase">Pressure</p>
                  <p className="text-xl font-mono text-brand-blue dark:text-white">101.3 kPa</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand-gray-400 uppercase">Temp</p>
                  <p className="text-xl font-mono text-brand-blue dark:text-white">24.5°C</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand-gray-400 uppercase">Status</p>
                  <p className="text-xl font-bold text-green-600">NOMINAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Type Scale Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-bold dark:text-white border-b border-brand-gray-200 dark:border-brand-gray-800 pb-4">Type Scale</h2>
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
                <td className="py-6"><span className="font-display text-4xl font-bold dark:text-white">Headline 1</span></td>
              </tr>
              <tr>
                <td className="py-6 font-mono text-xs">Display H2</td>
                <td className="py-6 text-xs uppercase">Space Grotesk</td>
                <td className="py-6 text-xs text-brand-gray-500">48px / 700</td>
                <td className="py-6"><span className="font-display text-3xl font-bold dark:text-white">Headline 2</span></td>
              </tr>
              <tr>
                <td className="py-6 font-mono text-xs">Body Large</td>
                <td className="py-6 text-xs uppercase">Inter</td>
                <td className="py-6 text-xs text-brand-gray-500">18px / 400</td>
                <td className="py-6"><span className="text-lg dark:text-brand-gray-200">The quick brown fox jumps over the lazy dog.</span></td>
              </tr>
              <tr>
                <td className="py-6 font-mono text-xs">Body Base</td>
                <td className="py-6 text-xs uppercase">Inter</td>
                <td className="py-6 text-xs text-brand-gray-500">16px / 400</td>
                <td className="py-6"><span className="text-base dark:text-brand-gray-400">The quick brown fox jumps over the lazy dog.</span></td>
              </tr>
              <tr>
                <td className="py-6 font-mono text-xs">Caption</td>
                <td className="py-6 text-xs uppercase">Inter</td>
                <td className="py-6 text-xs text-brand-gray-500">12px / 500</td>
                <td className="py-6"><span className="text-xs font-medium text-brand-gray-500 uppercase tracking-wider">The quick brown fox jumps over the lazy dog.</span></td>
              </tr>
            </tbody>
          </table>
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
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white">Iconography</h1>
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

      <div className="mt-16 p-6 md:p-8 bg-brand-gray-900 text-white rounded-sm">
        <h3 className="text-lg md:text-xl font-display font-bold mb-4">Icon Usage Guidelines</h3>
        <ul className="space-y-4 text-xs md:text-sm text-brand-gray-300">
          <li className="flex gap-3">
            <span className="text-brand-orange font-bold">01.</span>
            <span>Use icons at base size of 24px or 32px.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-brand-orange font-bold">02.</span>
            <span>Maintain a stroke weight of 2px.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
