"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Activity, Database, Cpu, 
  Settings, Layers, Box, Code2, 
  ChevronRight, Play, Server, User, 
  MessageSquare, ShoppingCart, Zap, Crosshair
} from 'lucide-react';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Manrope:wght@300;500;700;800&display=swap');

  :root {
    --void-black: #030305;
    --panel-dark: #0A0A0E;
    --bone-white: #F8F9FA;
    --acid-green: #39FF14;
    --warning-red: #FF2A4D;
    --grid-line: rgba(255, 255, 255, 0.05);
    
    --font-head: 'Manrope', sans-serif;
    --font-data: 'JetBrains Mono', monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background-color: var(--void-black);
    color: var(--bone-white);
    font-family: var(--font-head);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* Abyssal Targeting Grid */
  .aero-grid {
    position: fixed;
    inset: 0;
    z-index: -1;
    background-image: 
      linear-gradient(var(--grid-line) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
    background-size: 50px 50px;
    background-position: center center;
  }
  
  .aero-grid::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 0%, var(--void-black) 80%);
  }

  ::selection {
    background-color: var(--acid-green);
    color: var(--void-black);
  }

  /* Tactile Racks & Bays */
  .tactile-bay {
    background-color: var(--panel-dark);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .tactile-bay:hover {
    border-color: rgba(57, 255, 20, 0.4);
    box-shadow: 0 0 20px rgba(57, 255, 20, 0.05);
  }

  /* Hardware Corner Accents */
  .corner-accent {
    position: absolute;
    width: 8px;
    height: 8px;
    border: 1px solid var(--acid-green);
    opacity: 0.5;
  }
  .tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
  .tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
  .bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
  .br { bottom: -1px; right: -1px; border-left: none; border-top: none; }

  /* Typography */
  .font-data { font-family: var(--font-data); }
  .text-glow { text-shadow: 0 0 10px rgba(248, 249, 250, 0.3); }
  .text-acid { color: var(--acid-green); text-shadow: 0 0 10px rgba(57, 255, 20, 0.4); }

  /* Custom Scrollbar */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: var(--void-black); border-left: 1px solid rgba(255,255,255,0.1); }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); }
  ::-webkit-scrollbar-thumb:hover { background: var(--acid-green); }

  /* HUD Button */
  .hud-btn {
    font-family: var(--font-data);
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    padding: 12px 24px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--bone-white);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
  }
  .hud-btn::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: var(--acid-green);
    transition: all 0.3s ease;
    z-index: -1;
  }
  .hud-btn:hover {
    color: var(--void-black);
    border-color: var(--acid-green);
    box-shadow: 0 0 15px rgba(57, 255, 20, 0.3);
  }
  .hud-btn:hover::before { left: 0; }

  /* Signal Tracer Animation (The Drift) */
  .tracer-path {
    stroke-dasharray: 3000;
    stroke-dashoffset: 3000;
  }
  .tracer-path.active {
    animation: drawTracer 2s cubic-bezier(0.7, 0, 0.3, 1) forwards;
  }
  
  .tracer-particle {
    offset-path: path('M -50 100 L 200 100 L 200 300 L 600 300 L 600 50 L 900 50 L 900 400 L 1250 400');
    offset-distance: 0%;
    opacity: 0;
  }
  .tracer-particle.active {
    opacity: 1;
    animation: moveTracer 2s cubic-bezier(0.7, 0, 0.3, 1) forwards;
  }

  @keyframes drawTracer {
    0% { stroke-dashoffset: 3000; opacity: 1; }
    80% { stroke-dashoffset: 0; opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 0; }
  }
  @keyframes moveTracer {
    0% { offset-distance: 0%; transform: scale(1); }
    10% { transform: scale(1.5); }
    90% { transform: scale(1.5); }
    100% { offset-distance: 100%; opacity: 0; transform: scale(0); }
  }
`;

const generateTelemetry = () => {
  const weeks = 40; // Fit screen width nicely
  const days = 7;
  const data = [];
  for (let i = 0; i < weeks; i++) {
    const week = [];
    for (let j = 0; j < days; j++) {
      // 0 = none, 1-3 = intensity
      week.push(Math.random() > 0.6 ? Math.floor(Math.random() * 3) + 1 : 0);
    }
    data.push(week);
  }
  return data;
};

const TELEMETRY_DATA = generateTelemetry();
const INTENSITY_MAP = {
  0: 'rgba(255,255,255,0.03)',
  1: 'rgba(57, 255, 20, 0.3)',
  2: 'rgba(57, 255, 20, 0.6)',
  3: 'var(--acid-green)'
};

const TECH_NODES = [
  { name: 'REACT.JS', type: 'FRONTEND', core: true },
  { name: 'NEXT.JS', type: 'FRAMEWORK', core: true },
  { name: 'NODE.JS', type: 'RUNTIME', core: true },
  { name: 'TYPESCRIPT', type: 'LANGUAGE', core: true },
  { name: 'POSTGRESQL', type: 'DATABASE', core: false },
  { name: 'REDIS', type: 'CACHE', core: false },
  { name: 'DOCKER', type: 'INFRA', core: false },
  { name: 'AWS ECS', type: 'DEPLOY', core: false },
];

const REVIEWS = [
  { id: 'RV-092', author: 'E. VANCE', org: 'CHRONOS DATA', text: 'Shavandeb delivered an architecture that handled our massive telemetry load without breaking a sweat. Code quality is uncompromising.' },
  { id: 'RV-104', author: 'S. CHEN', org: 'ATLAS LOGISTICS', text: 'The custom routing engine dropped our calculation latency by 400ms. Exceptional understanding of system optimization.' },
  { id: 'RV-118', author: 'O. MARTINEZ', org: 'NEXUS PAY', text: 'Flawless execution on the billing migration. Zero downtime, perfectly typed interfaces, and clean documentation.' }
];

const THE_SHELF = [
  { id: 'MOD-A1', name: 'NEXUS ADMIN UI', desc: 'High-density admin dashboard toolkit. Next.js, Tailwind, pre-wired for auth.', price: '$89', icon: Layers },
  { id: 'MOD-B2', name: 'LEDGER CORE', desc: 'Standalone subscription billing engine API. Plugs directly into any Node stack.', price: '$149', icon: Database },
  { id: 'MOD-C3', name: 'SIGNAL CHAT UI', desc: 'LLM interface starter. Streaming responses, history state, prompt engineering UI.', price: '$129', icon: MessageSquare },
];

const HUDHeader = ({ activeView, setView }) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-[#030305]/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
      
      <div className="flex items-center gap-4">
        <Crosshair className="text-acid w-6 h-6 animate-[spin_10s_linear_infinite]" />
        <div>
          <h1 className="text-xl font-extrabold tracking-tighter leading-none text-glow">HALFCLUTCH</h1>
          <div className="font-data text-[10px] text-white/50 tracking-[0.2em] mt-1">
            SYS.ENG: S.KAITI // LOC: DURGAPUR, IN
          </div>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-sm border border-white/10">
        <button 
          onClick={() => setView('DASHBOARD')}
          className={`font-data text-xs px-6 py-2 transition-colors ${activeView === 'DASHBOARD' ? 'bg-white text-black' : 'text-white hover:text-acid'}`}
        >
          DASHBOARD
        </button>
        <button 
          onClick={() => setView('SHELF')}
          className={`font-data text-xs px-6 py-2 transition-colors ${activeView === 'SHELF' ? 'bg-[#39FF14] text-black' : 'text-white hover:text-acid'}`}
        >
          THE SHELF [STORE]
        </button>
      </nav>
      
      <div className="font-data text-xs text-acid flex items-center gap-2">
        <div className="w-2 h-2 bg-acid rounded-full animate-pulse shadow-[0_0_8px_#39FF14]"></div>
        UPLINK OK
      </div>

    </div>
  </header>
);

const HeroTracer = () => {
  const [tracing, setTracing] = useState(false);

  const executeTrace = () => {
    if (tracing) return;
    setTracing(true);
    setTimeout(() => setTracing(false), 2200);
  };

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] flex flex-col justify-center border-b border-white/10 overflow-hidden">
      
      {/* Background SVG Track */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 600">
        <path d="M -50 100 L 200 100 L 200 300 L 600 300 L 600 50 L 900 50 L 900 400 L 1500 400" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Active Animation Track */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 600">
        <path 
          className={`tracer-path ${tracing ? 'active' : ''}`}
          d="M -50 100 L 200 100 L 200 300 L 600 300 L 600 50 L 900 50 L 900 400 L 1500 400" 
          fill="none" 
          stroke="#39FF14" 
          strokeWidth="3"
          strokeLinecap="square"
          style={{ filter: 'drop-shadow(0 0 8px #39FF14)' }}
        />
      </svg>

      {/* The Particle (Car) */}
      <div className={`tracer-particle absolute top-0 left-0 w-6 h-6 bg-acid shadow-[0_0_20px_#39FF14] z-20 flex items-center justify-center ${tracing ? 'active' : 'hidden'}`}>
        <div className="w-full h-1 bg-white"></div>
      </div>

      <div className="relative z-20 max-w-[1600px] mx-auto px-6 w-full">
        <div className="font-data text-acid text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
          <Zap size={16} /> SYSTEM INITIALIZED
        </div>
        
        <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[0.9] text-glow mb-6">
          ENGINEERED.<br/>NOT ASSEMBLED.
        </h2>
        
        <p className="max-w-xl text-lg md:text-xl text-white/70 font-medium mb-10 border-l-2 border-acid pl-4">
          I architect, build, and repair high-performance digital infrastructure. Uncompromising logic, minimal abstractions, pure execution.
        </p>

        <button onClick={executeTrace} className="hud-btn flex items-center gap-3">
          <Play size={16} /> INITIATE LOGIC DRIFT
        </button>
      </div>
    </div>
  );
};

const TelemetryMatrix = () => (
  <div className="tactile-bay p-8">
    <div className="corner-accent tl"></div><div className="corner-accent tr"></div>
    <div className="corner-accent bl"></div><div className="corner-accent br"></div>
    
    <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
      <div>
        <div className="font-data text-xs text-white/50 tracking-widest mb-1 flex items-center gap-2">
          <Activity size={14} /> SERVER TELEMETRY
        </div>
        <h3 className="text-2xl font-extrabold tracking-tight">EXECUTION HEATMAP</h3>
      </div>
      <div className="text-right">
        <div className="text-4xl font-extrabold text-acid">1,492</div>
        <div className="font-data text-[10px] text-white/50 tracking-widest">COMMITS YTD</div>
      </div>
    </div>

    <div className="overflow-x-auto pb-4">
      <div className="flex gap-1.5 min-w-max">
        {TELEMETRY_DATA.map((week, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            {week.map((intensity, j) => (
              <div 
                key={`${i}-${j}`} 
                className="w-4 h-4 rounded-sm transition-colors duration-300"
                style={{ 
                  backgroundColor: INTENSITY_MAP[intensity],
                  boxShadow: intensity === 3 ? '0 0 8px rgba(57, 255, 20, 0.4)' : 'none'
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TechStack = () => (
  <div className="tactile-bay p-8 flex flex-col h-full">
    <div className="corner-accent tl"></div><div className="corner-accent tr"></div>
    <div className="corner-accent bl"></div><div className="corner-accent br"></div>
    
    <div className="mb-8 border-b border-white/10 pb-4">
      <div className="font-data text-xs text-white/50 tracking-widest mb-1 flex items-center gap-2">
        <Cpu size={14} /> CORE COMPONENTS
      </div>
      <h3 className="text-2xl font-extrabold tracking-tight">TECHNOLOGY STACK</h3>
    </div>

    <div className="grid grid-cols-2 gap-4 flex-1">
      {TECH_NODES.map((node, i) => (
        <div key={i} className={`p-4 border ${node.core ? 'border-acid/30 bg-acid/5' : 'border-white/10 bg-white/5'} flex flex-col justify-center group hover:border-acid transition-colors`}>
          <div className="font-data text-[10px] text-white/40 tracking-widest mb-1">{node.type}</div>
          <div className={`font-extrabold tracking-tight ${node.core ? 'text-acid' : 'text-white'}`}>{node.name}</div>
        </div>
      ))}
    </div>
  </div>
);

const ClientReviews = () => (
  <div className="tactile-bay p-8 h-full bg-[#1A1A24]">
    <div className="corner-accent tl"></div><div className="corner-accent tr"></div>
    <div className="corner-accent bl"></div><div className="corner-accent br"></div>
    
    <div className="mb-8 border-b border-white/10 pb-4">
      <div className="font-data text-xs text-white/50 tracking-widest mb-1 flex items-center gap-2">
        <Terminal size={14} /> DECRYPTED COMMUNIQUES
      </div>
      <h3 className="text-2xl font-extrabold tracking-tight">CLIENT MEMOS</h3>
    </div>

    <div className="flex flex-col gap-6">
      {REVIEWS.map((review) => (
        <div key={review.id} className="relative pl-6 border-l-2 border-white/10 hover:border-acid transition-colors group">
          <div className="absolute top-0 left-[-5px] w-2 h-2 bg-void border border-white/30 group-hover:bg-acid group-hover:border-acid transition-colors"></div>
          <p className="text-white/80 font-medium text-sm leading-relaxed mb-3">
            "{review.text}"
          </p>
          <div className="flex justify-between items-end font-data">
            <div>
              <div className="text-white font-bold text-xs">{review.author}</div>
              <div className="text-[10px] text-white/40 tracking-widest">{review.org}</div>
            </div>
            <div className="text-[10px] text-acid">{review.id}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TheShelf = () => (
  <div className="max-w-[1600px] mx-auto px-6 py-12 min-h-[80vh]">
    <div className="mb-12">
      <div className="font-data text-acid text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
        <Box size={16} /> INVENTORY SYSTEM
      </div>
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-glow mb-6">
        THE SUPPLY SHELF.
      </h2>
      <p className="max-w-2xl text-lg text-white/60 border-l-2 border-acid pl-4">
        Pre-engineered software modules, built for production. Deploy industrial-grade solutions instantly without rewriting boilerplate logic.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {THE_SHELF.map((mod) => {
        const Icon = mod.icon;
        return (
          <div key={mod.id} className="tactile-bay flex flex-col group">
            <div className="corner-accent tl"></div><div className="corner-accent tr"></div>
            <div className="corner-accent bl"></div><div className="corner-accent br"></div>
            
            {/* Graphic Header */}
            <div className="h-48 border-b border-white/10 bg-white/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIj48L2NpcmNsZT4KPC9zdmc+')] opacity-50"></div>
              
              <div className="absolute top-4 left-4 font-data text-[10px] text-white/50 tracking-widest border border-white/20 px-2 py-1 bg-void">
                {mod.id}
              </div>
              
              <Icon size={64} className="text-white/20 group-hover:text-acid group-hover:scale-110 transition-all duration-500 relative z-10" />
            </div>
            
            {/* Details */}
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-extrabold tracking-tight">{mod.name}</h3>
                <span className="font-data text-acid font-bold">{mod.price}</span>
              </div>
              <p className="text-sm text-white/60 mb-8 flex-1 leading-relaxed">
                {mod.desc}
              </p>
              
              <button className="hud-btn w-full flex items-center justify-center gap-2">
                <ShoppingCart size={16} /> REQUISITION MODULE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default function App() {
  const [view, setView] = useState('DASHBOARD');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view]);

  return (
    <>
      <style>{globalStyles}</style>
      <div className="aero-grid"></div>
      
      <div className="min-h-screen flex flex-col pt-16">
        <HUDHeader activeView={view} setView={setView} />
        
        <main className="flex-1 w-full">
          {view === 'DASHBOARD' ? (
            <>
              <HeroTracer />
              
              <div className="max-w-[1600px] mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Row 1 */}
                  <div className="lg:col-span-12">
                    <TelemetryMatrix />
                  </div>
                  
                  {/* Row 2 */}
                  <div className="lg:col-span-7">
                    <TechStack />
                  </div>
                  <div className="lg:col-span-5">
                    <ClientReviews />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <TheShelf />
          )}
        </main>

        <footer className="border-t border-white/10 bg-[#0A0A0E] py-8 px-6 mt-12 relative z-10">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-data text-[10px] tracking-widest text-white/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-acid animate-pulse shadow-[0_0_8px_#39FF14]"></div>
                ALL SYSTEMS OPERATIONAL
              </div>
              <span className="hidden md:inline">|</span>
              <span>VER: 2026.08.21</span>
            </div>
            <div>© 2026 SHAVANDEB KAITI // HIGH-FIDELITY ARCHITECTURE</div>
          </div>
        </footer>
      </div>
    </>
  );
}