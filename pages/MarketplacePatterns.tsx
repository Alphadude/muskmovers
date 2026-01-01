
import React from 'react';
import { Icons } from '../constants.tsx';

export const Marketplace: React.FC = () => {
  const listings = [
    { id: 'MM-CRANE-01', name: 'Terex CC 8800-1', category: 'Cranes', capacity: '1600t', status: 'Available' },
    { id: 'MM-EXC-04', name: 'Caterpillar 6090 FS', category: 'Excavators', capacity: '1000t', status: 'On Hire' },
    { id: 'MM-TRK-09', name: 'BelAZ 75710', category: 'Haul Trucks', capacity: '450t', status: 'Available' },
  ];

  return (
    <div className="max-w-5xl animate-in fade-in duration-700">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Marketplace Pattern</h1>
      <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Our marketplace combines high-density data visualization with premium equipment listings to facilitate rapid decision-making for industrial giants.
      </p>

      <section className="space-y-12">
        <div className="flex flex-col md:flex-row gap-4 items-end justify-between border-b border-brand-gray-100 dark:border-brand-gray-800 pb-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-xs font-bold text-brand-orange uppercase tracking-widest">Filter Equipment</h3>
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-64">
                <input type="text" placeholder="Search machine class..." className="w-full border-b-2 border-brand-gray-200 dark:border-brand-gray-700 bg-transparent py-2 focus:border-brand-blue dark:focus:border-brand-orange outline-none text-sm" />
              </div>
              <select className="border-b-2 border-brand-gray-200 dark:border-brand-gray-700 bg-transparent py-2 outline-none text-sm uppercase font-bold tracking-tight">
                <option>All Capacities</option>
                <option>0-500t</option>
                <option>500-1000t</option>
                <option>1000t+</option>
              </select>
            </div>
          </div>
          <button className="bg-brand-blue dark:bg-brand-orange text-white px-8 py-3 font-bold uppercase tracking-widest text-xs">Refresh Results</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listings.map(item => (
            <div key={item.id} className="group border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm overflow-hidden bg-white dark:bg-brand-blue hover:border-brand-orange transition-all duration-300">
              <div className="h-48 bg-brand-gray-100 dark:bg-brand-gray-900 relative overflow-hidden">
                <div className="absolute top-4 left-4 bg-brand-blue/80 text-white px-2 py-1 text-[10px] font-mono uppercase tracking-widest z-10">{item.id}</div>
                <div className={`absolute top-4 right-4 px-2 py-1 text-[10px] font-bold uppercase tracking-widest z-10 ${item.status === 'Available' ? 'bg-green-500 text-white' : 'bg-brand-orange text-white'}`}>{item.status}</div>
                <div className="w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-blue/60 group-hover:scale-110 transition-transform duration-1000 flex items-center justify-center">
                  <Icons.HardHat />
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold text-brand-gray-400 uppercase tracking-widest mb-1">{item.category}</p>
                <h4 className="font-display font-bold text-lg dark:text-white uppercase tracking-tight mb-4">{item.name}</h4>
                <div className="flex justify-between items-center pt-4 border-t border-brand-gray-100 dark:border-brand-gray-800">
                  <span className="text-xs font-mono dark:text-brand-gray-400">Cap: {item.capacity}</span>
                  <button className="text-brand-blue dark:text-brand-orange font-bold text-xs uppercase tracking-widest flex items-center gap-2 group">
                    View Specs <Icons.ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const Logistics: React.FC = () => {
  return (
    <div className="max-w-5xl animate-in fade-in duration-700">
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight dark:text-white uppercase">Logistics Pattern</h1>
      <p className="text-lg md:text-xl text-brand-gray-600 dark:text-brand-gray-400 mb-12">
        Tracking the movement of high-value assets requires precision, real-time telemetry, and absolute transparency.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-brand-gray-900 text-white p-8 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Icons.Globe />
            </div>
            <div className="relative z-10">
              <h3 className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-6">Live Transit Telemetry</h3>
              <div className="flex items-center gap-6 mb-8">
                <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center">
                  <Icons.Ship />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold uppercase tracking-tight">Vessel: MM-ATLANTIC-IV</h4>
                  <p className="text-brand-gray-400 text-sm">ETA: OCT 24, 2024 - 14:00 UTC</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span>Departure: Rotterdam</span>
                  <span>Destination: Houston</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange w-[65%] rounded-full shadow-[0_0_10px_rgba(248,71,19,0.5)]"></div>
                </div>
                <p className="text-center text-[10px] font-mono text-brand-orange">65% OF JOURNEY COMPLETE</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {[
               { label: 'Current Speed', value: '18.4 knots', icon: <Icons.Waves /> },
               { label: 'Heading', value: '274.5° W', icon: <Icons.Navigation /> },
               { label: 'Payload Mass', value: '42,500t', icon: <Icons.Package /> }
             ].map((stat, i) => (
               <div key={i} className="p-6 border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm">
                 <div className="text-brand-gray-400 mb-2">{stat.icon}</div>
                 <p className="text-[10px] font-bold text-brand-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                 <p className="text-lg font-display font-bold dark:text-white">{stat.value}</p>
               </div>
             ))}
          </div>
        </div>

        <div className="bg-brand-gray-50 dark:bg-brand-gray-900 p-8 border border-brand-gray-200 dark:border-brand-gray-800 rounded-sm">
          <h3 className="text-xs font-bold text-brand-blue dark:text-brand-orange uppercase tracking-widest mb-6">Milestone Logs</h3>
          <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-gray-200 dark:before:bg-brand-gray-800">
            {[
              { time: 'OCT 20, 08:30', event: 'Customs Cleared', status: 'Complete' },
              { time: 'OCT 19, 14:15', event: 'Payload Secured', status: 'Complete' },
              { time: 'OCT 18, 09:00', event: 'Departure Confirmed', status: 'Complete' },
              { time: 'TBD', event: 'Arrival Checkpoint', status: 'Pending' },
            ].map((log, i) => (
              <div key={i} className="relative pl-8">
                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-brand-gray-50 dark:border-brand-gray-900 ${log.status === 'Complete' ? 'bg-brand-blue dark:bg-brand-orange' : 'bg-brand-gray-200 dark:bg-brand-gray-800'}`}></div>
                <p className="text-[10px] font-mono text-brand-gray-400 mb-1">{log.time}</p>
                <h4 className="text-sm font-bold dark:text-white uppercase tracking-tight">{log.event}</h4>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 border border-brand-blue dark:border-brand-gray-700 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white dark:hover:bg-brand-orange transition-all">Download Transit Manifest</button>
        </div>
      </div>
    </div>
  );
};
