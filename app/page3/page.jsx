"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, Database, Terminal, Settings, 
  Activity, FileText, Disc, Archive, 
  ArrowRight, Check, Play, Power, 
  MessageSquare, GitMerge, ShoppingCart
} from 'lucide-react';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@400;500;600;700&display=swap');

  :root {
    --chassis-main: #EFECE6;
    --chassis-panel: #E4DFD5;
    --chassis-dark: #D4CEBE;
    --ink-black: #1A1A1A;
    --ink-gray: #4A4A4A;
    --signal-red: #E63946;
    --blueprint-navy: #1D3557;
    
    --font-serif: 'Playfair Display', serif;
    --font-mono: 'Courier Prime', monospace;
    --font-sans: 'Inter', sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background-color: var(--chassis-main);
    color: var(--ink-black);
    font-family: var(--font-sans);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-image: 
      linear-gradient(var(--chassis-panel) 1px, transparent 1px),
      linear-gradient(90deg, var(--chassis-panel) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  ::selection {
    background-color: var(--blueprint-navy);
    color: var(--chassis-main);
  }

  /* Hardware Panel Styling */
  .hardware-panel {
    background-color: var(--chassis-main);
    border: 2px solid var(--ink-black);
    box-shadow: 6px 6px 0px var(--ink-gray);
    position: relative;
  }

  .hardware-panel::before, .hardware-panel::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--ink-gray);
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.5);
  }

  .hardware-panel::before { top: 6px; left: 6px; }
  .hardware-panel::after { top: 6px; right: 6px; }
  
  .hardware-panel-screws-bottom::before { content: ''; position: absolute; width: 6px; height: 6px; border-radius: 50%; background-color: var(--ink-gray); box-shadow: inset 1px 1px 2px rgba(0,0,0,0.5); bottom: 6px; left: 6px; }
  .hardware-panel-screws-bottom::after { content: ''; position: absolute; width: 6px; height: 6px; border-radius: 50%; background-color: var(--ink-gray); box-shadow: inset 1px 1px 2px rgba(0,0,0,0.5); bottom: 6px; right: 6px; }

  /* Mechanical Button */
  .mech-button {
    background-color: var(--chassis-dark);
    border: 2px solid var(--ink-black);
    font-family: var(--font-mono);
    text-transform: uppercase;
    font-weight: 700;
    transition: all 0.1s;
    box-shadow: 2px 2px 0px var(--ink-black);
    cursor: pointer;
  }
  .mech-button:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px var(--ink-black);
    background-color: var(--chassis-panel);
  }
  .mech-button.primary {
    background-color: var(--signal-red);
    color: white;
  }
  .mech-button.primary:active {
    background-color: #C1272D;
  }

  /* Telemetry Plotter Animation */
  .plotter-track {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
  }
  .plotter-track.active {
    animation: drawTrack 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }
  
  .plotter-head {
    offset-path: path('M 0 150 L 150 150 L 150 50 L 400 50 L 400 250 L 700 250 L 700 100 L 950 100');
    offset-distance: 0%;
    opacity: 0;
  }
  .plotter-head.active {
    opacity: 1;
    animation: runPlotter 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
  }

  @keyframes drawTrack {
    to { stroke-dashoffset: 0; }
  }
  @keyframes runPlotter {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Paper / Memo styling */
  .memo-card {
    background-color: #FDFBF7;
    border: 1px solid var(--ink-gray);
    border-left: 4px solid var(--signal-red);
    box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
  }

  /* Utility Classes */
  .font-serif { font-family: var(--font-serif); }
  .font-mono { font-family: var(--font-mono); }
  
  /* Scrollbar */
  ::-webkit-scrollbar { width: 12px; }
  ::-webkit-scrollbar-track { background: var(--chassis-panel); border-left: 2px solid var(--ink-black); }
  ::-webkit-scrollbar-thumb { background: var(--ink-gray); border: 2px solid var(--ink-black); }
`;

const generatePunchCardData = () => {
  const data = [];
  // Generating 12 columns (months/weeks) of 7 rows (days)
  for (let col = 0; col < 16; col++) {
    const week = [];
    for (let row = 0; row < 7; row++) {
      // 0 = empty hole, 1, 2, 3 = filled levels
      const intensity = Math.random() > 0.5 ? Math.floor(Math.random() * 4) : 0;
      week.push(intensity);
    }
    data.push(week);
  }
  return data;
};
const PUNCH_CARD_DATA = generatePunchCardData();

const TECH_SPECS = [
  { id: 'SYS-LANG', label: 'LANGUAGES', val: 'JavaScript, TypeScript, Python, Go' },
  { id: 'SYS-FRONT', label: 'INTERFACE', val: 'React, Next.js, Tailwind, WebGL' },
  { id: 'SYS-BACK', label: 'BACKEND', val: 'Node.js, Express, Rust, Redis' },
  { id: 'SYS-DATA', label: 'DATASTORE', val: 'PostgreSQL, MongoDB, Supabase' },
];

const CLIENT_LOGS = [
  { id: 'LOG-081', client: 'O. Martinez', role: 'CTO, DataCorp', text: 'Shavandeb completely overhauled our legacy billing engine. Zero downtime during the migration and the query speeds improved by 400%.' },
  { id: 'LOG-092', client: 'S. Chen', role: 'Founder, AtlasUI', text: 'The React component architecture provided was industrial-grade. It saved our front-end team roughly 3 months of boilerplate work.' },
  { id: 'LOG-104', client: 'E. Vance', role: 'VP Eng, Chronos', text: 'Uncompromising attention to detail. Built an internal dashboard that feels faster than native desktop software.' }
];

const SUPPLY_MANIFEST = [
  { id: 'MOD-A1', name: 'ADMIN KIT V2', price: 89, desc: 'Next.js admin dashboard starter with auth and chart integrations pre-wired. Production ready.', icon: Terminal },
  { id: 'MOD-B2', name: 'BILLING CORE', price: 149, desc: 'Standalone subscription billing engine. Plugs directly into any Node application via API.', icon: Database },
  { id: 'MOD-C3', name: 'AI CHAT UI', price: 129, desc: 'Starter kit for LLM applications. Includes streaming response UI, prompt tooling, and history.', icon: Cpu },
];

const MachineNameplate = ({ view, setView }) => (
  <header className="border-b-4 border-black bg-[var(--chassis-main)] sticky top-0 z-50">
    <div className="max-w-[1600px] mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
          <Disc size={28} />
        </div>
        <div>
          <h1 className="font-serif text-2xl font-bold uppercase tracking-tight leading-none text-black">HalfClutch</h1>
          <div className="font-mono text-xs font-bold text-gray-600 tracking-widest mt-1">
            MFR: S. KAITI // SN: 2026-821
          </div>
        </div>
      </div>

      <div className="flex bg-[var(--chassis-dark)] p-1 border-2 border-black">
        <button 
          onClick={() => setView('console')}
          className={`px-6 py-2 font-mono text-sm font-bold uppercase transition-colors ${view === 'console' ? 'bg-black text-white' : 'text-black hover:bg-[var(--chassis-panel)]'}`}
        >
          Main Console
        </button>
        <button 
          onClick={() => setView('supply')}
          className={`px-6 py-2 font-mono text-sm font-bold uppercase transition-colors ${view === 'supply' ? 'bg-[#1D3557] text-white' : 'text-black hover:bg-[var(--chassis-panel)]'}`}
        >
          Supply Manifest (Store)
        </button>
      </div>

    </div>
  </header>
);

const TelemetryPlotter = () => {
  const [plotting, setPlotting] = useState(false);

  const executePlot = () => {
    if(plotting) return;
    setPlotting(true);
    setTimeout(() => setPlotting(false), 2600);
  };

  return (
    <div className="hardware-panel hardware-panel-screws-bottom col-span-1 md:col-span-12 lg:col-span-8 p-6 md:p-10 flex flex-col relative overflow-hidden h-[500px]">
      
      {/* Background Grid Pattern for Radar/Plotter */}
      <div className="absolute inset-0 bg-[var(--chassis-panel)] z-0 opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 flex-1 flex flex-col justify-between pointer-events-none">
        <div>
          <div className="font-mono text-xs font-bold bg-black text-white inline-block px-2 py-1 mb-6 uppercase">
            System Identity
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-black text-black leading-[0.9] tracking-tighter max-w-xl">
            Software Engineered.<br/>Not Assembled.
          </h2>
          <p className="font-mono text-sm font-bold text-gray-700 mt-6 max-w-md leading-relaxed">
            I build, repair, and deploy high-performance digital infrastructure. Uncompromising logic and precision execution.
          </p>
        </div>
      </div>

      <div className="relative z-20 mt-8 flex items-end justify-between border-t-2 border-black pt-4">
        <div className="font-mono text-xs font-bold text-gray-600">
          STATUS: <span className="text-[#E63946]">AWAITING INPUT</span>
        </div>
        <button onClick={executePlot} className="mech-button primary px-6 py-3 flex items-center gap-2">
          <Play size={16} /> Execute Logic Trace
        </button>
      </div>

      {/* The Mechanical Plotter SVG (Drift Animation) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 500" preserveAspectRatio="none">
        <path 
          d="M 0 150 L 150 150 L 150 50 L 400 50 L 400 250 L 700 250 L 700 100 L 1050 100" 
          fill="none" 
          stroke="rgba(0,0,0,0.1)" 
          strokeWidth="4" 
        />
        <path 
          className={`plotter-track ${plotting ? 'active' : ''}`}
          d="M 0 150 L 150 150 L 150 50 L 400 50 L 400 250 L 700 250 L 700 100 L 1050 100" 
          fill="none" 
          stroke="#E63946" 
          strokeWidth="4" 
          strokeLinecap="square"
        />
      </svg>
      {/* The physical 'stylus' or 'car' drifting along the track */}
      <div className={`plotter-head absolute top-0 left-0 w-4 h-4 bg-black border-2 border-[#E63946] shadow-lg z-20 ${plotting ? 'active' : 'hidden'}`}>
        <div className="absolute -inset-2 border border-[#E63946] animate-ping opacity-50"></div>
      </div>

    </div>
  );
};

const ComponentDrawer = () => (
  <div className="hardware-panel hardware-panel-screws-bottom col-span-1 md:col-span-12 lg:col-span-4 p-6 flex flex-col">
    <div className="flex justify-between items-start mb-6 border-b-2 border-black pb-4">
      <div className="font-mono text-xs font-bold uppercase tracking-widest text-gray-600">
        Engineer Specs
      </div>
      <Settings size={18} className="text-gray-400" />
    </div>
    
    <div className="flex-1">
      <h3 className="font-serif text-3xl font-black text-black mb-1">Shavandeb Kaiti</h3>
      <p className="font-mono text-sm font-bold text-[#1D3557] mb-8">FULL-STACK ARCHITECT</p>
      
      <div className="flex flex-col gap-0 border-2 border-black bg-[var(--chassis-dark)]">
        {TECH_SPECS.map((spec, i) => (
          <div key={spec.id} className={`p-3 flex flex-col gap-1 ${i !== TECH_SPECS.length - 1 ? 'border-b-2 border-black' : ''}`}>
            <span className="font-mono text-[10px] font-bold text-gray-600 tracking-widest">{spec.label}</span>
            <span className="font-sans text-sm font-bold text-black">{spec.val}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PunchCardGraph = () => {
  const intensityColors = {
    0: 'var(--chassis-panel)',
    1: '#A8B8D0', // light navy
    2: '#5C7498', // medium navy
    3: 'var(--blueprint-navy)' // dark navy
  };

  return (
    <div className="hardware-panel hardware-panel-screws-bottom col-span-1 md:col-span-12 lg:col-span-7 p-6">
      <div className="flex justify-between items-end mb-6 border-b-2 border-black pb-4">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-gray-600 mb-2 flex items-center gap-2">
            <Activity size={14} /> Telemetry Readout
          </div>
          <h3 className="font-serif text-2xl font-black text-black">Code Output</h3>
        </div>
        <div className="text-right">
          <div className="font-sans text-4xl font-black text-black tracking-tighter">1,245</div>
          <div className="font-mono text-[10px] font-bold text-[#E63946] uppercase">Commits YTD</div>
        </div>
      </div>

      <div className="bg-[#Fdfcfb] border-2 border-black p-4 overflow-x-auto relative shadow-inner">
        {/* Fake punch card holes on edges */}
        <div className="absolute top-0 bottom-0 left-2 flex flex-col justify-between py-2">
           {[1,2,3,4,5,6].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[var(--chassis-panel)] shadow-inner"></div>)}
        </div>
        <div className="absolute top-0 bottom-0 right-2 flex flex-col justify-between py-2">
           {[1,2,3,4,5,6].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[var(--chassis-panel)] shadow-inner"></div>)}
        </div>

        <div className="flex gap-1.5 min-w-max mx-6">
          {PUNCH_CARD_DATA.map((week, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              {week.map((intensity, j) => (
                <div 
                  key={`${i}-${j}`} 
                  className="w-4 h-4 border border-[rgba(0,0,0,0.1)] transition-colors duration-300 hover:border-black"
                  style={{ backgroundColor: intensityColors[intensity] }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ClientLogs = () => (
  <div className="hardware-panel hardware-panel-screws-bottom col-span-1 md:col-span-12 lg:col-span-5 p-6 bg-[#1D3557] text-white">
    <div className="flex justify-between items-start mb-6 border-b-2 border-white/20 pb-4">
      <div className="font-mono text-xs font-bold uppercase tracking-widest text-gray-300 flex items-center gap-2">
        <MessageSquare size={14} /> Client Memos
      </div>
    </div>
    
    <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px] pr-2">
      {CLIENT_LOGS.map(log => (
        <div key={log.id} className="memo-card p-4 text-black relative">
          <div className="absolute top-2 right-2 text-gray-300 font-serif opacity-30 text-4xl">"</div>
          <p className="font-serif text-sm italic text-gray-800 leading-relaxed relative z-10 mb-4">
            {log.text}
          </p>
          <div className="border-t border-dashed border-gray-300 pt-2 flex justify-between items-end">
            <div>
              <div className="font-sans font-bold text-sm text-black">{log.client}</div>
              <div className="font-mono text-[10px] text-gray-500 uppercase">{log.role}</div>
            </div>
            <div className="font-mono text-[9px] text-[#E63946]">{log.id}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SupplyManifest = () => {
  return (
    <div className="max-w-[1200px] mx-auto pt-8 pb-24">
      <div className="mb-12 border-b-4 border-black pb-8">
        <div className="font-mono text-xs font-bold bg-[#1D3557] text-white inline-block px-2 py-1 mb-4 uppercase flex items-center gap-2 w-fit">
          <Archive size={14} /> Inventory
        </div>
        <h2 className="font-serif text-5xl md:text-6xl font-black text-black leading-tight tracking-tighter">
          Supply Manifest.
        </h2>
        <p className="font-mono text-sm font-bold text-gray-700 mt-4 max-w-2xl leading-relaxed">
          Pre-engineered software modules ready for deployment. Industrial-grade solutions that bypass weeks of boilerplate logic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUPPLY_MANIFEST.map((prod) => {
          const Icon = prod.icon;
          return (
            <div key={prod.id} className="hardware-panel hardware-panel-screws-bottom flex flex-col group h-full">
              
              {/* Product Header / Graphic */}
              <div className="h-48 border-b-2 border-black bg-[#EFECE6] p-4 flex flex-col justify-between relative overflow-hidden">
                {/* Blueprint grid background */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1D3557 1px, transparent 1px), linear-gradient(90deg, #1D3557 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <div className="font-mono text-[10px] font-bold text-black border-2 border-black bg-white px-2 py-1 w-fit relative z-10 shadow-[2px_2px_0px_#000]">
                  {prod.id}
                </div>
                
                <div className="self-end relative z-10 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_#1D3557] transition-transform group-hover:scale-110">
                  <Icon size={40} className="text-[#1D3557]" />
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col bg-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-sans text-xl font-bold text-black uppercase tracking-tight">{prod.name}</h3>
                  <span className="font-mono text-lg font-bold text-[#E63946]">${prod.price}</span>
                </div>
                <p className="font-serif text-sm text-gray-700 mb-8 flex-1 leading-relaxed">
                  {prod.desc}
                </p>
                
                <button className="mech-button w-full py-3 flex items-center justify-center gap-2">
                  <ShoppingCart size={16} /> Requisition Module
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('console');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view]);

  return (
    <>
      <style>{globalStyles}</style>
      
      <div className="min-h-screen flex flex-col">
        <MachineNameplate view={view} setView={setView} />
        
        <main className="flex-1 w-full px-4 py-8">
          {view === 'console' ? (
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
              <TelemetryPlotter />
              <ComponentDrawer />
              <PunchCardGraph />
              <ClientLogs />
            </div>
          ) : (
            <SupplyManifest />
          )}
        </main>

        <footer className="border-t-4 border-black bg-[var(--chassis-dark)] py-6 px-4 mt-12">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs font-bold text-black uppercase">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#E63946] border border-black animate-pulse"></div>
              SYSTEM STATUS: ONLINE
            </div>
            <div>© 2026 SHAVANDEB KAITI // ARCHIVAL PORTFOLIO</div>
          </div>
        </footer>
      </div>
    </>
  );
}