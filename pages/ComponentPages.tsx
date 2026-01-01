
import React from 'react';
import ComponentDemo from '../components/ComponentDemo.tsx';

export const Buttons: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Buttons</h1>
      <p className="text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Buttons initiate actions and transitions. They represent the primary touchpoints for industrial operations.
      </p>

      <ComponentDemo
        title="Primary Button"
        description="Used for critical mission-start actions. Features high-contrast dark blue or brand orange."
        code={`<button className="bg-brand-blue text-white px-8 py-4 font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-opacity-90 transition-all border border-brand-blue">
  INITIATE LOGISTICS SEQUENCE
</button>`}
      >
        <button className="bg-[#06233D] dark:bg-brand-orange text-white px-8 py-4 font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-opacity-90 transition-all border border-[#06233D] dark:border-brand-orange">
          INITIATE LOGISTICS SEQUENCE
        </button>
      </ComponentDemo>

      <ComponentDemo
        title="Secondary / Outline"
        description="Used for non-destructive, secondary operations or system navigation."
        code={`<button className="border-2 border-brand-blue text-brand-blue px-8 py-4 font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-brand-blue hover:text-white transition-all">
  DOWNLOAD MANIFEST
</button>`}
      >
        <button className="border-2 border-brand-blue dark:border-white text-brand-blue dark:text-white px-8 py-4 font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-brand-blue dark:hover:bg-white hover:text-white dark:hover:text-brand-blue transition-all">
          DOWNLOAD MANIFEST
        </button>
      </ComponentDemo>
    </div>
  );
};

export const Inputs: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Inputs</h1>
      <p className="text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Our input components prioritize precision and data integrity for engineering-grade telemetry systems.
      </p>

      <ComponentDemo
        title="Engineering Field"
        description="Clean bottom-border styling with high-contrast labels."
        code={`<div className="w-full max-w-sm">
  <label className="block text-[10px] font-bold uppercase text-brand-gray-500 mb-2 tracking-widest">Vessel Registry Number</label>
  <input type="text" className="w-full border-b-2 border-brand-gray-300 py-3 bg-transparent focus:border-brand-blue outline-none transition-colors" placeholder="MM-XXXX-99" />
</div>`}
      >
        <div className="w-full max-w-sm">
          <label className="block text-[10px] font-bold uppercase text-brand-gray-500 dark:text-brand-gray-400 mb-2 tracking-widest">Vessel Registry Number</label>
          <input type="text" className="w-full border-b-2 border-brand-gray-300 dark:border-brand-gray-700 py-3 bg-transparent focus:outline-none focus:border-brand-blue dark:focus:border-brand-orange transition-colors placeholder-brand-gray-300 dark:placeholder-brand-gray-600 text-brand-blue dark:text-white text-lg font-mono" placeholder="MM-XXXX-99" />
        </div>
      </ComponentDemo>
    </div>
  );
};

export const Modals: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Modals</h1>
      <p className="text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Modals provide a focused context for critical decisions, featuring the signature 28dp Material Design radius.
      </p>

      <ComponentDemo
        title="Standard Alert"
        description="Highly visible modal for destructive or critical confirmation tasks."
        code={`<div className="bg-white rounded-[28px] p-8 shadow-2xl max-w-sm border-t-8 border-brand-orange">
  <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter">Confirm Drop-off?</h3>
  <p className="text-sm text-brand-gray-600 mb-8 leading-relaxed">This will signal the heavy-lift team to begin payload descent. Confirm all safety zones are clear.</p>
  <div className="flex justify-end gap-4">
    <button className="text-xs font-bold uppercase tracking-widest text-brand-gray-400">Cancel</button>
    <button className="bg-brand-orange text-white px-6 py-2 text-xs font-bold uppercase tracking-widest">Confirm</button>
  </div>
</div>`}
      >
        <div className="bg-white dark:bg-brand-gray-900 rounded-[28px] p-8 shadow-2xl max-w-sm border-t-8 border-brand-orange border border-brand-gray-100 dark:border-brand-gray-800">
          <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter text-brand-blue dark:text-white">Confirm Drop-off?</h3>
          <p className="text-sm text-brand-gray-600 dark:text-brand-gray-400 mb-8 leading-relaxed">This will signal the heavy-lift team to begin payload descent. Confirm all safety zones are clear before continuing.</p>
          <div className="flex justify-end gap-6 items-center">
            <button className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-400 hover:text-brand-blue transition-colors">Cancel</button>
            <button className="bg-brand-orange text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-brand-orange/20">Confirm</button>
          </div>
        </div>
      </ComponentDemo>
    </div>
  );
};
