
import React from 'react';
import ComponentDemo from '../components/ComponentDemo';

export const Buttons: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-5xl font-display font-bold mb-6 tracking-tight dark:text-white">Buttons</h1>
      <p className="text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Buttons initiate actions and transitions. They are the most common component in the Musk Mover platform.
      </p>

      <ComponentDemo
        title="Primary Button"
        description="Used for the main action in a workflow. High visibility."
        code={`<button className="bg-brand-blue text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all">
  PROCEED TO DELIVERY
</button>`}
      >
        <button className="bg-brand-blue dark:bg-brand-orange text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all border border-brand-blue dark:border-brand-orange">
          PROCEED TO DELIVERY
        </button>
      </ComponentDemo>

      <ComponentDemo
        title="Secondary Button"
        description="Used for destructive actions or specific emphasis."
        code={`<button className="bg-brand-orange text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all">
  INITIATE LAUNCH
</button>`}
      >
        <button className="bg-brand-orange dark:bg-transparent dark:border-2 dark:border-brand-orange text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all border border-brand-orange">
          INITIATE LAUNCH
        </button>
      </ComponentDemo>

      <ComponentDemo
        title="Outline Button"
        description="Secondary actions that shouldn't compete with the primary button."
        code={`<button className="border-2 border-brand-blue text-brand-blue px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-blue hover:text-white transition-all">
  VIEW SCHEDULER
</button>`}
      >
        <button className="border-2 border-brand-blue dark:border-white text-brand-blue dark:text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-blue dark:hover:bg-white hover:text-white dark:hover:text-brand-blue transition-all">
          VIEW SCHEDULER
        </button>
      </ComponentDemo>
    </div>
  );
};

export const Inputs: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-5xl font-display font-bold mb-6 tracking-tight dark:text-white">Inputs</h1>
      <p className="text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Our input components are designed for high-density technical environments where clarity and data integrity are paramount.
      </p>

      <ComponentDemo
        title="Standard Text Input"
        description="Clean, focused input fields for data entry with floating-style labels."
        code={`<div className="w-full max-w-xs">
  <label className="block text-xs font-bold uppercase text-brand-gray-500 mb-2">Payload ID</label>
  <input type="text" className="w-full border-b-2 border-brand-gray-300 py-2 focus:outline-none focus:border-brand-blue transition-colors placeholder-brand-gray-300" placeholder="MM-XXXX-99" />
</div>`}
      >
        <div className="w-full max-w-xs">
          <label className="block text-xs font-bold uppercase text-brand-gray-500 dark:text-brand-gray-400 mb-2">Payload ID</label>
          <input type="text" className="w-full border-b-2 border-brand-gray-300 dark:border-brand-gray-700 py-2 bg-transparent focus:outline-none focus:border-brand-blue dark:focus:border-brand-orange transition-colors placeholder-brand-gray-300 dark:placeholder-brand-gray-600 text-brand-blue dark:text-white" placeholder="MM-XXXX-99" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Search Input"
        description="Used for filtering logistics data and fleet navigation."
        code={`<div className="relative w-full max-w-sm">
  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-gray-400">
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
  </span>
  <input type="search" className="w-full pl-8 pr-4 border-b-2 border-brand-gray-300 py-2 bg-transparent focus:outline-none focus:border-brand-blue placeholder-brand-gray-400" placeholder="Search fleet..." />
</div>`}
      >
        <div className="relative w-full max-w-sm">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-gray-400 dark:text-brand-gray-500">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </span>
          <input type="search" className="w-full pl-8 pr-4 border-b-2 border-brand-gray-300 dark:border-brand-gray-700 py-2 bg-transparent focus:outline-none focus:border-brand-blue dark:focus:border-brand-orange transition-colors placeholder-brand-gray-400 dark:placeholder-brand-gray-600 text-brand-blue dark:text-white" placeholder="Search fleet..." />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Dropdown Select"
        description="Custom-styled selection menu for categorized options."
        code={`<div className="w-full max-w-xs relative">
  <label className="block text-xs font-bold uppercase text-brand-gray-500 mb-2">Vessel Type</label>
  <select className="w-full appearance-none border-b-2 border-brand-gray-300 py-2 bg-transparent focus:outline-none focus:border-brand-blue text-brand-blue pr-8">
    <option>Heavy Lift</option>
    <option>Containership</option>
    <option>Bulk Carrier</option>
  </select>
  <div className="absolute right-0 bottom-3 pointer-events-none text-brand-gray-400">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
  </div>
</div>`}
      >
        <div className="w-full max-w-xs relative">
          <label className="block text-xs font-bold uppercase text-brand-gray-500 dark:text-brand-gray-400 mb-2">Vessel Type</label>
          <select className="w-full appearance-none border-b-2 border-brand-gray-300 dark:border-brand-gray-700 py-2 bg-transparent focus:outline-none focus:border-brand-blue dark:focus:border-brand-orange transition-colors text-brand-blue dark:text-white pr-8">
            <option className="bg-white dark:bg-brand-blue">Heavy Lift</option>
            <option className="bg-white dark:bg-brand-blue">Containership</option>
            <option className="bg-white dark:bg-brand-blue">Bulk Carrier</option>
          </select>
          <div className="absolute right-0 bottom-3 pointer-events-none text-brand-gray-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Selection Controls"
        description="Precise Checkboxes and Radio buttons for binary or exclusive choices."
        code={`<div className="flex flex-col gap-4">
  <label className="flex items-center gap-3 cursor-pointer group">
    <input type="checkbox" className="w-5 h-5 border-2 border-brand-gray-300 text-brand-blue focus:ring-brand-blue rounded-none" />
    <span className="text-sm font-medium">Accept terms of transport</span>
  </label>
  <div className="flex gap-6">
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="radio" name="priority" className="w-4 h-4 text-brand-orange focus:ring-brand-orange" />
      <span className="text-sm">Standard</span>
    </label>
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="radio" name="priority" className="w-4 h-4 text-brand-orange focus:ring-brand-orange" />
      <span className="text-sm font-bold">Priority</span>
    </label>
  </div>
</div>`}
      >
        <div className="flex flex-col gap-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-brand-blue dark:accent-brand-orange border-2 border-brand-gray-300 dark:border-brand-gray-700 bg-transparent rounded-none focus:ring-brand-blue" 
            />
            <span className="text-sm font-medium text-brand-blue dark:text-white">Accept terms of transport</span>
          </label>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold text-brand-gray-400 uppercase tracking-widest">Delivery Priority</p>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="demo-priority" className="w-4 h-4 accent-brand-orange" defaultChecked />
                <span className="text-sm text-brand-blue dark:text-brand-gray-300">Standard</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="demo-priority" className="w-4 h-4 accent-brand-orange" />
                <span className="text-sm text-brand-blue dark:text-brand-gray-300 font-bold">Express</span>
              </label>
            </div>
          </div>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Switch / Toggle"
        description="Binary toggle for operational modes."
        code={`<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-brand-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-orange"></div>
  <span className="ml-3 text-sm font-bold uppercase tracking-tight">Active Tracking</span>
</label>`}
      >
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="relative w-11 h-6 bg-brand-gray-200 dark:bg-brand-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-orange"></div>
          <span className="ml-3 text-sm font-bold uppercase tracking-tight text-brand-blue dark:text-white">Active Tracking</span>
        </label>
      </ComponentDemo>

      <ComponentDemo
        title="Validation States"
        description="Clear indicators for success and error conditions."
        code={`<div className="flex flex-col gap-6 w-full max-w-xs">
  <div>
    <label className="block text-xs font-bold uppercase text-red-500 mb-2">Invalid Container ID</label>
    <input type="text" className="w-full border-b-2 border-red-500 py-2 bg-transparent text-red-600 focus:outline-none" value="INVALID-001" readOnly />
    <p className="mt-1 text-[10px] text-red-500 font-medium italic">Identification check failed.</p>
  </div>
  <div>
    <label className="block text-xs font-bold uppercase text-green-600 mb-2">Vessel Verified</label>
    <input type="text" className="w-full border-b-2 border-green-500 py-2 bg-transparent text-green-700 focus:outline-none" value="MM-ATLANTIC-04" readOnly />
  </div>
</div>`}
      >
        <div className="flex flex-col gap-8 w-full max-w-xs">
          <div>
            <label className="block text-xs font-bold uppercase text-red-500 mb-2">Invalid Container ID</label>
            <input type="text" className="w-full border-b-2 border-red-500 py-2 bg-transparent text-red-600 dark:text-red-400 focus:outline-none" value="INVALID-001" readOnly />
            <p className="mt-1 text-[10px] text-red-500 font-medium italic">Identification check failed.</p>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-green-600 mb-2">Vessel Verified</label>
            <input type="text" className="w-full border-b-2 border-green-500 py-2 bg-transparent text-green-700 dark:text-green-400 focus:outline-none font-bold" value="MM-ATLANTIC-04" readOnly />
            <p className="mt-1 text-[10px] text-green-600 font-medium italic">Authentication complete.</p>
          </div>
        </div>
      </ComponentDemo>
    </div>
  );
};

export const Modals: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-5xl font-display font-bold mb-6 tracking-tight dark:text-white">Modals</h1>
      <p className="text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Musk Mover modals follow Material Design 3 patterns for focus, clarity, and accessibility. They use standard elevation and spacing to prioritize critical tasks.
      </p>

      <h2 className="text-3xl font-display font-bold mb-8 dark:text-white border-b border-brand-gray-200 dark:border-brand-gray-800 pb-4">Modal Sizes</h2>

      <ComponentDemo
        title="Small (Confirmation)"
        description="Used for quick confirmations or simple settings. max-width: 320px."
        code={`<div className="bg-white dark:bg-brand-gray-900 rounded-[28px] p-6 shadow-2xl max-w-xs border border-brand-gray-100 dark:border-brand-gray-800">
  <h3 className="text-xl font-display font-bold text-brand-blue dark:text-white mb-2">Delete Log?</h3>
  <p className="text-brand-gray-600 dark:text-brand-gray-400 mb-6 text-sm">
    This action will remove the telemetry record permanently.
  </p>
  <div className="flex justify-end gap-2">
    <button className="text-brand-blue dark:text-brand-gray-300 font-bold text-sm px-4 py-2 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 rounded-full transition-all uppercase">Keep</button>
    <button className="text-brand-orange font-bold text-sm px-4 py-2 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 rounded-full transition-all uppercase">Delete</button>
  </div>
</div>`}
      >
        <div className="bg-white dark:bg-brand-gray-900 rounded-[28px] p-6 shadow-2xl w-full max-w-[320px] border border-brand-gray-100 dark:border-brand-gray-800">
          <h3 className="text-xl font-display font-bold text-brand-blue dark:text-white mb-2">Delete Log?</h3>
          <p className="text-brand-gray-600 dark:text-brand-gray-400 mb-6 text-sm leading-relaxed">
            This action will remove the telemetry record permanently.
          </p>
          <div className="flex justify-end gap-2">
            <button className="text-brand-blue dark:text-brand-gray-300 font-bold text-sm px-4 py-2 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 rounded-full transition-all uppercase tracking-wider">Keep</button>
            <button className="text-brand-orange font-bold text-sm px-4 py-2 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 rounded-full transition-all uppercase tracking-wider">Delete</button>
          </div>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Medium (Standard)"
        description="The default size for most workflows and forms. max-width: 448px."
        code={`<div className="bg-white dark:bg-brand-gray-900 rounded-[28px] p-6 shadow-2xl max-w-md border border-brand-gray-100 dark:border-brand-gray-800">
  <h3 className="text-2xl font-display font-bold text-brand-blue dark:text-white mb-4">Payload Authorization</h3>
  <p className="text-brand-gray-600 dark:text-brand-gray-400 mb-6 text-sm leading-relaxed">
    Authorizing this payload will initiate the tracking sequence and alert the marine transport fleet. Ensure all weight limits are verified.
  </p>
  <div className="flex justify-end gap-3">
    <button className="text-brand-blue dark:text-brand-gray-300 font-bold text-sm px-4 py-2 rounded-full uppercase tracking-wider">Cancel</button>
    <button className="text-brand-blue dark:text-brand-orange font-bold text-sm px-4 py-2 rounded-full uppercase tracking-wider">Authorize</button>
  </div>
</div>`}
      >
        <div className="bg-white dark:bg-brand-gray-900 rounded-[28px] p-6 shadow-2xl w-full max-w-md border border-brand-gray-100 dark:border-brand-gray-800">
          <h3 className="text-2xl font-display font-bold text-brand-blue dark:text-white mb-4">Payload Authorization</h3>
          <p className="text-brand-gray-600 dark:text-brand-gray-400 mb-6 text-sm leading-relaxed">
            Authorizing this payload will initiate the tracking sequence and alert the marine transport fleet. Ensure all weight limits are verified before continuing.
          </p>
          <div className="flex justify-end gap-3">
            <button className="text-brand-blue dark:text-brand-gray-300 font-bold text-sm px-4 py-2 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 rounded-full transition-all uppercase tracking-wider">Cancel</button>
            <button className="text-brand-blue dark:text-brand-orange font-bold text-sm px-4 py-2 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 rounded-full transition-all uppercase tracking-wider">Authorize</button>
          </div>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Large (Information Rich)"
        description="For complex data entry or detailed information summaries. max-width: 672px."
        code={`<div className="bg-white dark:bg-brand-gray-900 rounded-[28px] p-8 shadow-2xl max-w-2xl border border-brand-gray-100 dark:border-brand-gray-800">
  <div className="flex justify-between items-start mb-6">
    <h3 className="text-3xl font-display font-bold text-brand-blue dark:text-white">Fleet Performance Report</h3>
    <span className="text-[10px] font-mono bg-brand-gray-100 dark:bg-brand-gray-800 px-2 py-1 rounded">Q4 OPERATIONAL</span>
  </div>
  <div className="grid grid-cols-2 gap-6 mb-8">
    <div className="p-4 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-xl">
      <p className="text-[10px] font-bold text-brand-gray-400 uppercase mb-1">Efficiency</p>
      <p className="text-2xl font-display font-bold text-brand-blue dark:text-brand-orange">98.4%</p>
    </div>
    <div className="p-4 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-xl">
      <p className="text-[10px] font-bold text-brand-gray-400 uppercase mb-1">Active Vessels</p>
      <p className="text-2xl font-display font-bold text-brand-blue dark:text-brand-orange">42 Units</p>
    </div>
  </div>
  <p className="text-brand-gray-600 dark:text-brand-gray-400 mb-8 text-sm leading-relaxed">
    Current metrics indicate a significant uplift in maritime routing efficiency following the deployment of the Musk Mover Navigation v2.0. All heavy equipment transport vessels are within the designated fuel optimization parameters.
  </p>
  <div className="flex justify-end gap-4">
    <button className="text-brand-blue dark:text-brand-gray-300 font-bold text-sm px-6 py-3 border border-brand-gray-200 dark:border-brand-gray-700 rounded-full uppercase tracking-wider">Export PDF</button>
    <button className="bg-brand-blue dark:bg-brand-orange text-white font-bold text-sm px-8 py-3 rounded-full uppercase tracking-widest shadow-lg">Close Report</button>
  </div>
</div>`}
      >
        <div className="bg-white dark:bg-brand-gray-900 rounded-[28px] p-8 shadow-2xl w-full max-w-2xl border border-brand-gray-100 dark:border-brand-gray-800">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-blue dark:text-white">Fleet Performance Report</h3>
            <span className="text-[10px] font-mono bg-brand-gray-100 dark:bg-brand-gray-800 px-2 py-1 rounded dark:text-brand-gray-300">Q4 OPERATIONAL</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-xl">
              <p className="text-[10px] font-bold text-brand-gray-400 uppercase mb-1">Efficiency</p>
              <p className="text-2xl font-display font-bold text-brand-blue dark:text-brand-orange">98.4%</p>
            </div>
            <div className="p-4 bg-brand-gray-50 dark:bg-brand-gray-800 rounded-xl">
              <p className="text-[10px] font-bold text-brand-gray-400 uppercase mb-1">Active Vessels</p>
              <p className="text-2xl font-display font-bold text-brand-blue dark:text-brand-orange">42 Units</p>
            </div>
          </div>
          <p className="text-brand-gray-600 dark:text-brand-gray-400 mb-8 text-sm leading-relaxed">
            Current metrics indicate a significant uplift in maritime routing efficiency following the deployment of the Musk Mover Navigation v2.0. All heavy equipment transport vessels are within the designated fuel optimization parameters.
          </p>
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button className="text-brand-blue dark:text-brand-gray-300 font-bold text-sm px-6 py-3 border border-brand-gray-200 dark:border-brand-gray-700 rounded-full uppercase tracking-wider hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 transition-all text-center">Export PDF</button>
            <button className="bg-brand-blue dark:bg-brand-orange text-white font-bold text-sm px-8 py-3 rounded-full uppercase tracking-widest shadow-lg hover:opacity-90 transition-all text-center">Close Report</button>
          </div>
        </div>
      </ComponentDemo>

      <h2 className="text-3xl font-display font-bold mt-20 mb-8 dark:text-white border-b border-brand-gray-200 dark:border-brand-gray-800 pb-4">Specialized Variants</h2>

      <ComponentDemo
        title="Alert Dialog"
        description="Used for destructive or high-risk actions. High contrast and specific color cues using brand-orange."
        code={`<div className="bg-white rounded-[28px] p-6 shadow-xl max-w-sm border-t-4 border-brand-orange">
  <div className="flex items-center gap-3 mb-4">
    <div className="text-brand-orange">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
    </div>
    <h3 className="text-2xl font-display font-bold text-brand-blue">Abort Operation?</h3>
  </div>
  <p className="text-brand-gray-600 mb-8 text-sm leading-relaxed">
    Aborting the launch sequence is irreversible. All propulsion systems will be locked for a mandatory 12-hour cooling period.
  </p>
  <div className="flex justify-end gap-3">
    <button className="text-brand-gray-500 font-bold text-sm px-4 py-2 hover:bg-brand-gray-50 rounded-full transition-all uppercase tracking-wider">Keep Running</button>
    <button className="bg-brand-orange text-white font-bold text-sm px-6 py-2 rounded-full hover:shadow-lg transition-all uppercase tracking-wider shadow-md">Abort Launch</button>
  </div>
</div>`}
      >
        <div className="bg-white dark:bg-brand-gray-900 rounded-[28px] p-6 shadow-2xl max-w-sm border-t-4 border-brand-orange scale-90 sm:scale-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-brand-orange">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-blue dark:text-white">Abort Operation?</h3>
          </div>
          <p className="text-brand-gray-600 dark:text-brand-gray-400 mb-8 text-sm leading-relaxed">
            Aborting the launch sequence is irreversible. All propulsion systems will be locked for a mandatory 12-hour cooling period.
          </p>
          <div className="flex justify-end gap-3">
            <button className="text-brand-gray-500 dark:text-brand-gray-400 font-bold text-sm px-4 py-2 hover:bg-brand-gray-50 dark:hover:bg-brand-gray-800 rounded-full transition-all uppercase tracking-wider">Keep Running</button>
            <button className="bg-brand-orange text-white font-bold text-sm px-6 py-2 rounded-full hover:shadow-lg transition-all uppercase tracking-wider shadow-md">Abort Launch</button>
          </div>
        </div>
      </ComponentDemo>

      <section className="mt-16 p-8 bg-brand-gray-50 dark:bg-brand-gray-900 border border-brand-gray-200 dark:border-brand-gray-800 rounded-lg">
        <h3 className="text-xl font-display font-bold mb-4 dark:text-white">Material 3 Modal Specifications</h3>
        <ul className="space-y-4 text-sm text-brand-gray-600 dark:text-brand-gray-400">
          <li className="flex gap-4">
            <span className="font-mono text-brand-orange font-bold">SHAPE</span>
            <span>Container corners use a 28dp radius for a modern, approachable feel.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-brand-orange font-bold">PADDING</span>
            <span>Internal content spacing is strictly 24dp on all sides. For Large modals, this increases to 32dp.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-brand-orange font-bold">SCRIM</span>
            <span>When active, background content is obscured with a 30% brand-blue overlay.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
