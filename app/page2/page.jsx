"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Code2, 
  Cpu, 
  Zap, 
  PackageSearch,
  ShoppingCart,
  Github,
  Layers,
  Database,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const DATA = {
  projects: [
    { id: 'SYS-01', name: 'NEXUS ROUTER', desc: 'High-throughput edge routing engine built for low-latency financial data streams. Handles 100k+ req/sec.', stack: ['Rust', 'WASM'], color: 'bg-[#a3e635]', span: 'md:col-span-8' },
    { id: 'SYS-02', name: 'LEDGER.IO', desc: 'Immutable, cryptographically verifiable append-only ledger for enterprise audit logs.', stack: ['Go', 'PostgreSQL'], color: 'bg-[#b088f9]', span: 'md:col-span-4' },
    { id: 'SYS-03', name: 'CHRONOS UI', desc: 'Real-time telemetry dashboard rendering 1M+ data points at 60fps.', stack: ['React', 'WebGL'], color: 'bg-[#fde047]', span: 'md:col-span-5' },
    { id: 'SYS-04', name: 'ATLAS CACHE', desc: 'Distributed in-memory caching layer with automatic geographical sharding.', stack: ['C++', 'Redis'], color: 'bg-[#93c5fd]', span: 'md:col-span-7' },
  ],
  products: [
    { id: 'PKG-A1', name: 'FORGE AUTH', cat: 'Security', price: 129, desc: 'Drop-in authentication primitive. OAuth, Magic Links, and biometric passkeys.', stack: 'Node, Redis' },
    { id: 'PKG-B2', name: 'SYNTAX ENGINE', cat: 'UI Core', price: 89, desc: 'Strictly typed, headless React component library for complex dashboards.', stack: 'React, Tailwind' },
    { id: 'PKG-C3', name: 'SIGNAL AI', cat: 'AI / ML', price: 199, desc: 'Streaming LLM wrapper with built-in rate limiting, caching, and prompt defense.', stack: 'Next.js, OpenAI' },
    { id: 'PKG-D4', name: 'VAULT ORM', cat: 'Database', price: 149, desc: 'Type-safe query builder optimized for edge computing and serverless environments.', stack: 'TypeScript, SQL' },
    { id: 'PKG-E5', name: 'METRIC.SH', cat: 'Telemetry', price: 99, desc: 'Lightweight analytics script that bypasses ad-blockers for vital system telemetry.', stack: 'Go, ClickHouse' },
    { id: 'PKG-F6', name: 'NEXUS ADMIN', cat: 'UI Core', price: 159, desc: 'Full-featured admin panel starter. Data grids, charts, and RBAC included.', stack: 'Next.js, Tailwind' },
  ]
};

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;900&family=JetBrains+Mono:wght@400;700;800&display=swap');

  :root {
    --bg-color: #F4F4F0;
    --ink: #0A0A0A;
    
    /* Neo-Brutalist Vibrant Palette */
    --neo-lime: #a3e635;
    --neo-purple: #b088f9;
    --neo-yellow: #fde047;
    --neo-pink: #f9a8d4;
    --neo-blue: #93c5fd;
    
    --border-width: 4px;
    --shadow-solid: 8px 8px 0px var(--ink);
    --shadow-hover: 3px 3px 0px var(--ink);
    
    --font-sans: 'Space Grotesk', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  * { box-sizing: border-box; }
  
  html { scroll-behavior: smooth; }

  body {
    background-color: var(--bg-color);
    color: var(--ink);
    font-family: var(--font-sans);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* Developer Grid Background */
    background-image: 
      linear-gradient(rgba(10,10,10,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(10,10,10,0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    background-position: -1px -1px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.04em;
    margin: 0;
    line-height: 1.1;
  }

  .mono { font-family: var(--font-mono); text-transform: uppercase; }

  /* Brutalist UI Primitives */
  .brutal-border { border: var(--border-width) solid var(--ink); }
  
  .brutal-card {
    background: #FFFFFF;
    border: var(--border-width) solid var(--ink);
    box-shadow: var(--shadow-solid);
    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    position: relative;
    overflow: hidden;
  }
  
  .brutal-card:hover {
    transform: translate(5px, 5px);
    box-shadow: var(--shadow-hover);
  }

  .brutal-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: #FFFFFF;
    border: var(--border-width) solid var(--ink);
    box-shadow: 6px 6px 0px var(--ink);
    font-family: var(--font-mono);
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.15s ease;
    color: var(--ink);
    font-size: 1rem;
    letter-spacing: 0.05em;
  }

  .brutal-btn:hover {
    transform: translate(3px, 3px);
    box-shadow: 3px 3px 0px var(--ink);
    background: var(--neo-lime);
  }

  .brutal-btn:active {
    transform: translate(6px, 6px);
    box-shadow: 0px 0px 0px var(--ink);
  }
  
  .brutal-pill {
    background: #FFFFFF;
    border: 2px solid var(--ink);
    padding: 0.25rem 1rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 99px;
    box-shadow: 3px 3px 0px var(--ink);
    text-transform: uppercase;
  }

  /* Marquee Animation */
  .marquee-container {
    overflow: hidden;
    white-space: nowrap;
    border-top: var(--border-width) solid var(--ink);
    border-bottom: var(--border-width) solid var(--ink);
    background: var(--neo-yellow);
    padding: 1rem 0;
    display: flex;
  }
  
  .marquee-content {
    display: flex;
    animation: marquee 20s linear infinite;
  }
  
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* Logic Drift Animation (Hero Section) */
  .hero-container {
    position: relative;
    overflow: hidden;
    min-height: 85vh;
    display: flex;
    align-items: center;
    border-bottom: var(--border-width) solid var(--ink);
  }

  .drift-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .track-line {
    fill: none;
    stroke: rgba(10, 10, 10, 0.1);
    stroke-width: 4;
    stroke-dasharray: 20 10;
  }

  .drift-trail {
    fill: none;
    stroke: var(--neo-purple);
    stroke-width: 8;
    stroke-linecap: square;
    stroke-dasharray: 4000;
    stroke-dashoffset: 4000;
    filter: drop-shadow(0 0 12px var(--neo-purple));
  }
  
  .drift-trail.active {
    animation: draw-trail 2.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  }

  @keyframes draw-trail {
    0% { stroke-dashoffset: 4000; }
    100% { stroke-dashoffset: 0; }
  }

  .data-drifter {
    opacity: 0;
  }

  .data-drifter.active {
    opacity: 1;
  }

  .fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const HeroSection = ({ setView }) => {
  const [isDrifting, setIsDrifting] = useState(false);

  const handleIgnition = () => {
    if (isDrifting) return;
    setIsDrifting(true);
    setTimeout(() => setIsDrifting(false), 3000);
  };

  return (
    <section className="hero-container bg-white">
      {/* The SVG Track spanning the entire hero */}
      <svg className="drift-svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        {/* Abstract track layout resembling a developer's logic flow chart with sharp corners */}
        <path 
          id="drift-path" 
          className="track-line" 
          d="M -100 600 L 200 600 L 200 200 L 800 200 L 800 500 L 1200 500 L 1200 100 L 1600 100" 
        />
        
        {/* The glowing execution trail */}
        <path 
          className={`drift-trail ${isDrifting ? 'active' : ''}`}
          d="M -100 600 L 200 600 L 200 200 L 800 200 L 800 500 L 1200 500 L 1200 100 L 1600 100" 
        />

        {/* The Data Packet / Conceptual Developer Car */}
        <g className={`data-drifter ${isDrifting ? 'active' : ''}`}>
          <animateMotion 
            dur="2.5s" 
            fill="freeze" 
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.65 0 0.35 1"
            path="M -100 600 L 200 600 L 200 200 L 800 200 L 800 500 L 1200 500 L 1200 100 L 1600 100"
            begin={isDrifting ? "0s" : "indefinite"}
          />
          {/* Cyber/Brutalist representation of a vehicle/packet */}
          <polygon points="-25,-15 35,0 -25,15 -10,0" fill="var(--neo-lime)" stroke="var(--ink)" strokeWidth="3" />
          <circle cx="-10" cy="0" r="4" fill="var(--neo-pink)" />
          <line x1="-40" y1="0" x2="-25" y2="0" stroke="var(--ink)" strokeWidth="4" strokeDasharray="4 4"/>
        </g>
      </svg>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-start pt-20 pb-20">
        <div className="fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="brutal-pill mb-8 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            SYSTEM ONLINE // READY TO COMPILE
          </div>
        </div>

        <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] tracking-tighter mb-8 fade-in-up" style={{ animationDelay: '200ms', textShadow: '4px 4px 0px var(--neo-blue)' }}>
          CODE <br />
          <span className="text-white" style={{ textShadow: '-4px -4px 0 var(--ink), 4px -4px 0 var(--ink), -4px 4px 0 var(--ink), 4px 4px 0 var(--ink), 8px 8px 0px var(--neo-pink)' }}>
            COMPILED.
          </span><br />
          SHIPPED.
        </h1>

        <p className="text-xl md:text-3xl max-w-2xl font-semibold mb-12 bg-white p-2 brutal-border fade-in-up shadow-[4px_4px_0px_var(--neo-yellow)]" style={{ animationDelay: '300ms' }}>
          Engineering scalable web architecture without the bloat. We build high-performance logic engines and robust user interfaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 fade-in-up" style={{ animationDelay: '400ms' }}>
          <button 
            onClick={handleIgnition}
            disabled={isDrifting}
            className={`brutal-btn ${isDrifting ? '!bg-gray-200 cursor-wait' : ''}`}
          >
            <Zap size={20} className={isDrifting ? 'animate-bounce text-[var(--neo-pink)]' : ''} />
            {isDrifting ? 'EXECUTING LOGIC...' : 'COMPILE & DRIFT'}
          </button>
          
          <button onClick={() => setView('shelf')} className="brutal-btn !bg-[var(--neo-purple)] !text-white">
            <PackageSearch size={20} />
            BROWSE THE SHELF
          </button>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const text = " // NO ABSTRACTIONS // PURE LOGIC // ZERO BLOAT // HIGH PERFORMANCE // EDGE ROUTING // REACT ARCHITECTURE // ";
  return (
    <div className="marquee-container">
      <div className="marquee-content mono text-2xl font-bold">
        {text}{text}{text}{text}
      </div>
    </div>
  );
};

const WorkshopSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl mb-4" style={{ textShadow: '4px 4px 0px var(--neo-lime)' }}>THE WORKSHOP</h2>
          <p className="text-xl max-w-xl font-medium bg-[var(--neo-pink)] p-2 brutal-border inline-block shadow-[4px_4px_0px_var(--ink)]">
            Custom systems engineered for high load. Built, tested, and deployed to production.
          </p>
        </div>
        <div className="mono text-sm font-bold brutal-border p-4 bg-white shadow-[4px_4px_0px_var(--ink)] text-right">
          TOTAL BUILDS: <span className="text-2xl ml-2">42</span><br/>
          SYSTEM HEALTH: <span className="text-[var(--neo-lime)]">100%</span>
        </div>
      </div>

      {/* Asymmetric Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {DATA.projects.map((project, i) => (
          <div key={project.id} className={`brutal-card flex flex-col p-8 ${project.color} ${project.span}`}>
            <div className="flex justify-between items-start mb-12">
              <span className="mono text-sm font-bold bg-white brutal-border px-3 py-1 shadow-[2px_2px_0px_var(--ink)]">
                {project.id}
              </span>
              <button className="w-10 h-10 bg-white brutal-border flex items-center justify-center rounded-full hover:bg-[var(--ink)] hover:text-white transition-colors shadow-[2px_2px_0px_var(--ink)]">
                <ArrowUpRight size={20} />
              </button>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-4xl mb-4 bg-white inline-block p-1 brutal-border">{project.name}</h3>
              <p className="text-lg font-semibold mb-6 bg-white/90 p-3 brutal-border">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="mono text-xs font-bold bg-[var(--ink)] text-white px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ShelfView = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] pt-32 pb-24 px-6 fade-in-up">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 border-b-4 border-[var(--ink)] pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-6xl md:text-8xl mb-6 text-white" style={{ 
              textShadow: '-4px -4px 0 var(--ink), 4px -4px 0 var(--ink), -4px 4px 0 var(--ink), 4px 4px 0 var(--ink), 8px 8px 0px var(--neo-purple)' 
            }}>
              THE SHELF
            </h2>
            <p className="text-2xl font-bold bg-[var(--neo-yellow)] p-2 brutal-border inline-block shadow-[4px_4px_0px_var(--ink)]">
              Ready-made software modules. Drop them into your stack and go.
            </p>
          </div>
          <div className="mono font-bold flex items-center gap-4 bg-white brutal-border p-3 shadow-[4px_4px_0px_var(--ink)]">
            <span className="w-3 h-3 bg-[var(--neo-lime)] brutal-border inline-block"></span>
            API STATUS: NOMINAL
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA.products.map((product, i) => (
            <div key={product.id} className="brutal-card bg-white flex flex-col group">
              {/* Product Header / Visual */}
              <div className="h-48 border-b-4 border-[var(--ink)] bg-[var(--neo-blue)] p-6 relative overflow-hidden group-hover:bg-[var(--neo-pink)] transition-colors">
                <div className="absolute top-4 right-4 mono text-xs font-bold bg-white brutal-border px-2 py-1">
                  {product.cat}
                </div>
                <div className="absolute -bottom-6 -right-6 opacity-20">
                  <Database size={160} strokeWidth={1} />
                </div>
                <h3 className="text-3xl relative z-10 bg-white inline-block p-1 brutal-border mt-12 shadow-[2px_2px_0px_var(--ink)]">
                  {product.name}
                </h3>
              </div>
              
              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-lg font-medium mb-6 flex-1">{product.desc}</p>
                
                <div className="mono text-xs font-bold mb-6 flex gap-2 items-center text-gray-600">
                  <Code2 size={16} /> STACK: {product.stack}
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t-4 border-[var(--ink)]">
                  <div className="text-3xl font-black">${product.price}</div>
                  <button className="brutal-btn !px-4 !py-2 !text-sm !shadow-[3px_3px_0px_var(--ink)] hover:!shadow-[1px_1px_0px_var(--ink)]">
                    <ShoppingCart size={16} /> GET
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const Navbar = ({ view, setView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-color)] border-b-[var(--border-width)] border-[var(--ink)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setView('landing')}
        >
          <div className="w-10 h-10 bg-[var(--neo-yellow)] brutal-border flex items-center justify-center shadow-[2px_2px_0px_var(--ink)] group-hover:shadow-[0px_0px_0px_var(--ink)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
            <Terminal size={20} strokeWidth={2.5} className="text-[var(--ink)]" />
          </div>
          <h1 className="text-2xl tracking-tighter hidden sm:block">HALFCLUTCH</h1>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <button 
            onClick={() => setView('landing')} 
            className={`mono font-bold text-sm sm:text-base border-b-4 transition-colors ${view === 'landing' ? 'border-[var(--ink)]' : 'border-transparent hover:border-[var(--neo-purple)]'}`}
          >
            01_WORKSHOP
          </button>
          <button 
            onClick={() => setView('shelf')} 
            className={`mono font-bold text-sm sm:text-base border-b-4 transition-colors ${view === 'shelf' ? 'border-[var(--ink)]' : 'border-transparent hover:border-[var(--neo-lime)]'}`}
          >
            02_THE_SHELF
          </button>
          <button className="w-10 h-10 bg-white brutal-border flex items-center justify-center rounded-full hover:bg-[var(--ink)] hover:text-white transition-colors shadow-[2px_2px_0px_var(--ink)] hidden sm:flex">
            <FaGithub size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  const [view, setView] = useState('landing');
  
  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  return (
    <>
      <style>{globalStyles}</style>
      
      <div className="min-h-screen">
        <Navbar view={view} setView={setView} />
        
        <main className="pt-20">
          {view === 'landing' ? (
            <div className="fade-in-up">
              <HeroSection setView={setView} />
              <Marquee />
              <WorkshopSection />
            </div>
          ) : (
            <ShelfView />
          )}
        </main>

        {/* Big Brutalist Footer */}
        <footer className="border-t-[var(--border-width)] border-[var(--ink)] bg-white pt-20 pb-10 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-6xl mb-6">INITIATE<br/>CONNECTION.</h2>
                <button className="brutal-btn !bg-[var(--neo-lime)] text-xl !px-8 !py-4">
                  OPEN A JOB <ArrowRight />
                </button>
              </div>
              <div className="flex flex-col md:items-end justify-end space-y-4 font-mono font-bold">
                <a href="#" className="text-xl hover:text-[var(--neo-purple)] transition-colors inline-block bg-[var(--bg-color)] px-4 py-2 brutal-border">GITHUB // REPOS</a>
                <a href="#" className="text-xl hover:text-[var(--neo-pink)] transition-colors inline-block bg-[var(--bg-color)] px-4 py-2 brutal-border">TWITTER // COMMS</a>
                <a href="#" className="text-xl hover:text-[var(--neo-blue)] transition-colors inline-block bg-[var(--bg-color)] px-4 py-2 brutal-border">EMAIL // DIRECT</a>
              </div>
            </div>
            
            <div className="border-t-4 border-[var(--ink)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 mono text-sm font-bold">
              <div>© 2026 HALFCLUTCH FOUNDRY.</div>
              <div className="flex items-center gap-2">
                <Activity size={16} /> SYS_HEALTH: OPTIMAL
              </div>
            </div>
          </div>
          
          {/* Decorative giant background icon */}
          <div className="absolute -bottom-20 -right-20 text-[var(--bg-color)] pointer-events-none z-0">
            <Cpu size={400} strokeWidth={1} />
          </div>
        </footer>
      </div>
    </>
  );
}