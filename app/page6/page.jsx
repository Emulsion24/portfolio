"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Database, Code2, Server, Layout, GitBranch, Star, Quote, ArrowUpRight, Cpu, Activity, PackageOpen } from 'lucide-react';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap');

  :root {
    --space: #050507;
    --grid: rgba(0, 240, 255, 0.05);
    --grid-strong: rgba(0, 240, 255, 0.15);
    --cyan: #00F0FF;
    --pink: #FF0055;
    --white: #FFFFFF;
    --text-muted: #8892B0;
    --panel-bg: rgba(10, 10, 15, 0.7);
    --panel-border: rgba(0, 240, 255, 0.2);
    
    --font-sans: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background-color: var(--space);
    color: var(--white);
    font-family: var(--font-sans);
    overflow: hidden; /* Strict NO SCROLLING, we use spatial panning */
    -webkit-font-smoothing: antialiased;
  }

  /* The Infinite Spatial Map Background */
  .spatial-map {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400vw;
    height: 400vh;
    /* Translate based on React state to move the world around the camera */
    transition: transform 1.5s cubic-bezier(0.65, 0, 0.15, 1);
    transform-origin: center center;
    background-image: 
      linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 50px 50px;
    background-position: center center;
    z-index: 1;
  }

  /* Coordinate Axis Lines */
  .axis-x, .axis-y {
    position: absolute;
    background: var(--grid-strong);
    z-index: 2;
  }
  .axis-x { top: 50%; left: 0; width: 100%; height: 1px; }
  .axis-y { top: 0; left: 50%; width: 1px; height: 100%; }

  /* Map Nodes / Islands */
  .map-node {
    position: absolute;
    /* Center the node on its specific coordinate */
    transform: translate(-50%, -50%);
    width: 85vw;
    max-width: 1200px;
    height: 80vh;
    max-height: 800px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    pointer-events: none; /* Let background clicks pass, enable on children */
  }
  
  .map-node > * {
    pointer-events: auto;
  }

  /* Bento Box Containers */
  .bento-panel {
    background: var(--panel-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--panel-border);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05);
    transition: transform 0.2s ease, border-color 0.2s ease;
  }
  .bento-panel:hover {
    border-color: var(--cyan);
  }

  /* Typography */
  .font-mono { font-family: var(--font-mono); }
  .text-cyan { color: var(--cyan); }
  .text-pink { color: var(--pink); }
  
  .heading-hero {
    font-size: clamp(3rem, 6vw, 6rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
    text-transform: uppercase;
  }

  /* Fancy UI Buttons */
  .btn-cyber {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: var(--cyan);
    font-family: var(--font-mono);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 12px 24px;
    border: 1px solid var(--cyan);
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .btn-cyber::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: var(--cyan);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
    z-index: -1;
  }
  .btn-cyber:hover { color: var(--space); box-shadow: 0 0 20px rgba(0, 240, 255, 0.4); }
  .btn-cyber:hover::before { transform: scaleX(1); transform-origin: left; }

  /* The Camera / Player (Always in exact center of viewport) */
  .camera-center {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translate(-50%, -50%);
    z-index: 100;
    pointer-events: none;
  }

  .cyber-car {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.4s ease;
  }
  
  /* Drifting Animation Logic */
  .is-moving .cyber-car {
    transform: scale(1.1) rotate(15deg); /* Lean into the speed */
  }

  /* Exhaust Trails */
  .exhaust {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 4px;
    height: 0;
    background: var(--pink);
    box-shadow: 0 0 15px var(--pink), 0 0 30px var(--pink);
    transform: translateX(-50%);
    border-radius: 4px;
    opacity: 0;
    transition: height 0.3s ease, opacity 0.3s ease;
  }
  
  .is-moving .exhaust {
    height: 40px;
    opacity: 1;
    animation: exhaustPulse 0.1s infinite alternate;
  }

  @keyframes exhaustPulse {
    from { height: 40px; filter: brightness(1); }
    to { height: 60px; filter: brightness(1.5); }
  }

  /* Fixed Navigation HUD */
  .hud-nav {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
    display: flex;
    gap: 1rem;
    background: rgba(5, 5, 7, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 99px;
  }

  .hud-btn {
    background: transparent;
    border: none;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;
    border-radius: 99px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .hud-btn:hover { color: var(--white); background: rgba(255,255,255,0.05); }
  .hud-btn.active { color: var(--space); background: var(--cyan); box-shadow: 0 0 15px rgba(0, 240, 255, 0.3); }
  
  /* Utilities */
  .hide-scroll::-webkit-scrollbar { display: none; }
  .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
`;

// Defining the spatial coordinates for each section (in viewport units)
// Home is 0,0. North is negative Y. South is positive Y.
const ZONES = [
  { id: 'hero',      title: 'SYS.INIT',   x: 0,    y: 0 },
  { id: 'workshop',  title: 'WORKSHOP',   x: 0,    y: -100 },
  { id: 'shelf',     title: 'THE SHELF',  x: 100,  y: 0 },
  { id: 'telemetry', title: 'TELEMETRY',  x: 0,    y: 100 },
  { id: 'reviews',   title: 'VERIFIED',   x: -100, y: 0 }
];

// Telemetry Fake Data
const GIT_HEATMAP = Array.from({ length: 84 }, () => Math.floor(Math.random() * 5));

const PROJECTS = [
  { name: 'NEXUS CRM', type: 'CLIENT', stack: ['React', 'Node'], desc: 'High-availability customer pipeline.' },
  { name: 'CHRONOS', type: 'OPEN SOURCE', stack: ['Rust', 'WASM'], desc: '60fps time-series rendering engine.' },
  { name: 'ATLAS INVENTORY', type: 'CLIENT', stack: ['Next.js', 'SQL'], desc: 'Multi-warehouse logic core.' },
  { name: 'PILOT AI', type: 'R&D', stack: ['OpenAI', 'Vector'], desc: 'Autonomous support agent.' }
];

const SHELF_MODULES = [
  { id: 'MOD-01', name: 'AUTH FORGE', price: 89, desc: 'Enterprise SSO & JWT core.' },
  { id: 'MOD-02', name: 'GRID UI KIT', price: 149, desc: 'Strict accessible components.' },
  { id: 'MOD-03', name: 'LEDGER API', price: 199, desc: 'Billing & invoicing engine.' }
];


const HeroNode = ({ navigate }) => (
  <div className="h-full flex flex-col justify-center items-center text-center p-8">
    <div className="bento-panel flex flex-col items-center max-w-4xl w-full relative overflow-hidden">
      {/* Decorative background logo */}
      <div className="absolute -top-20 -right-20 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none">HC</div>
      
      <div className="font-mono text-cyan text-sm mb-6 flex items-center gap-3">
        <span className="w-2 h-2 bg-pink rounded-full animate-pulse"></span>
        HALFCLUTCH.TECH // ONLINE
      </div>
      <h1 className="heading-hero mb-6">
        Software <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--white)' }}>Built.</span><br/>
        Sold. Fixed.
      </h1>
      <p className="text-text-muted text-lg max-w-2xl mb-10">
        I construct highly scalable, fault-tolerant digital infrastructure. No bloated abstractions. Just raw engineering precision.
      </p>
      <div className="flex gap-4">
        <button onClick={() => navigate(1)} className="btn-cyber">Inspect Workshop</button>
        <button onClick={() => navigate(3)} className="btn-cyber" style={{ borderColor: 'var(--panel-border)', color: 'var(--white)' }}>View Telemetry</button>
      </div>
    </div>
  </div>
);

const WorkshopNode = () => (
  <div className="h-full flex flex-col pt-12">
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-4xl font-bold uppercase tracking-tight">The Workshop</h2>
        <p className="font-mono text-cyan text-sm mt-1">COORD: [0, -100] // DEPLOYED ASSETS</p>
      </div>
      <Code2 size={32} className="text-panel-border" />
    </div>
    
    <div className="grid grid-cols-2 gap-6 h-full pb-12">
      {PROJECTS.map((proj, i) => (
        <div key={i} className="bento-panel flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-xs text-pink border border-pink/30 px-2 py-1 rounded bg-pink/10">{proj.type}</span>
            <ArrowUpRight size={20} className="text-text-muted hover:text-white cursor-pointer" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{proj.name}</h3>
          <p className="text-text-muted text-sm flex-grow">{proj.desc}</p>
          <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
            {proj.stack.map(s => <span key={s} className="font-mono text-xs text-cyan">{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ShelfNode = () => (
  <div className="h-full flex flex-col pt-12">
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-4xl font-bold uppercase tracking-tight">The Shelf</h2>
        <p className="font-mono text-cyan text-sm mt-1">COORD: [100, 0] // READY-MADE MODULES</p>
      </div>
      <PackageOpen size={32} className="text-panel-border" />
    </div>

    <div className="flex flex-col gap-4 overflow-y-auto hide-scroll pb-12">
      {SHELF_MODULES.map(mod => (
        <div key={mod.id} className="bento-panel flex items-center justify-between group">
          <div>
            <div className="font-mono text-xs text-text-muted mb-1">{mod.id}</div>
            <h3 className="text-xl font-bold">{mod.name}</h3>
            <p className="text-sm text-text-muted mt-1">{mod.desc}</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xl font-bold">${mod.price}</span>
            <button className="btn-cyber text-xs px-4 py-2">ACQUIRE</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TelemetryNode = () => (
  <div className="h-full flex flex-col pt-12">
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-4xl font-bold uppercase tracking-tight">Telemetry</h2>
        <p className="font-mono text-cyan text-sm mt-1">COORD: [0, 100] // SYSTEM LOGS</p>
      </div>
      <Activity size={32} className="text-panel-border" />
    </div>

    <div className="grid grid-cols-2 gap-6 h-full pb-12">
      <div className="bento-panel flex flex-col">
        <h3 className="font-mono text-sm text-text-muted mb-4 uppercase">Commit Heatmap</h3>
        <div className="grid grid-cols-12 gap-1 flex-grow content-start">
          {GIT_HEATMAP.map((val, i) => (
            <div key={i} 
                 className="aspect-square rounded-sm" 
                 style={{ 
                   backgroundColor: val === 0 ? 'var(--panel-bg)' : 
                                    val === 1 ? 'rgba(0, 240, 255, 0.2)' : 
                                    val === 2 ? 'rgba(0, 240, 255, 0.5)' : 
                                    val === 3 ? 'rgba(0, 240, 255, 0.8)' : 'var(--cyan)',
                   border: val === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                 }}
            />
          ))}
        </div>
      </div>
      
      <div className="bento-panel flex flex-col">
        <h3 className="font-mono text-sm text-text-muted mb-4 uppercase">Core Infrastructure</h3>
        <div className="flex flex-col gap-4">
          {[
            { name: 'TypeScript', val: 95, icon: <Code2 size={16}/> },
            { name: 'React / Next', val: 90, icon: <Layout size={16}/> },
            { name: 'Node / Express', val: 85, icon: <Server size={16}/> },
            { name: 'PostgreSQL', val: 80, icon: <Database size={16}/> }
          ].map(tech => (
            <div key={tech.name}>
              <div className="flex justify-between font-mono text-sm mb-1">
                <span className="flex items-center gap-2">{tech.icon} {tech.name}</span>
                <span className="text-cyan">{tech.val}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-cyan" style={{ width: `${tech.val}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ReviewsNode = () => (
  <div className="h-full flex flex-col pt-12">
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-4xl font-bold uppercase tracking-tight">Verified Logs</h2>
        <p className="font-mono text-cyan text-sm mt-1">COORD: [-100, 0] // CLIENT DATA</p>
      </div>
      <Star size={32} className="text-panel-border" />
    </div>

    <div className="flex flex-col gap-6 overflow-y-auto hide-scroll pb-12">
      {[
        { text: "Rewrote our legacy monolith without a single minute of downtime. Flawless execution and deep architectural knowledge.", author: "J. Kline", role: "CTO, Nexus Corp" },
        { text: "The UI library built for us decreased development time by 60%. Highly modular and strictly typed.", author: "S. Vance", role: "Founder, Apex Web" }
      ].map((rev, i) => (
        <div key={i} className="bento-panel relative pl-12">
          <Quote size={24} className="absolute top-8 left-4 text-white/10" />
          <p className="text-lg italic text-white/90 mb-6">"{rev.text}"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/5 border border-cyan/50 rounded-full flex items-center justify-center font-bold text-cyan">{rev.author.charAt(0)}</div>
            <div>
              <div className="font-bold">{rev.author}</div>
              <div className="font-mono text-xs text-text-muted">{rev.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [carRotation, setCarRotation] = useState(0);

  const navigateTo = (index) => {
    if (index === activeIndex || isMoving) return;
    
    const currentZone = ZONES[activeIndex];
    const targetZone = ZONES[index];

    // Calculate direction for the car to face
    // Since map coordinates are essentially X, Y graph:
    const dx = targetZone.x - currentZone.x;
    const dy = targetZone.y - currentZone.y;
    
    // atan2 gives angle in radians from X axis.
    // We want 0 deg to be facing UP (North / -Y).
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    // Adjust so pointing right (dx>0, dy=0) is 90deg, pointing up (dy<0) is 0deg.
    angle += 90; 
    
    setCarRotation(angle);
    setIsMoving(true);
    setActiveIndex(index);

    // Animation takes 1.5s (matches CSS map transition)
    setTimeout(() => {
      setIsMoving(false);
      // Optional: reset rotation to 0 after arriving, or keep it facing travel dir
      // setCarRotation(0); 
    }, 1500);
  };

  const activeZone = ZONES[activeIndex];

  return (
    <>
      <style>{globalStyles}</style>

      {/* The Central Fixed Camera & Car */}
      <div className={`camera-center ${isMoving ? 'is-moving' : ''}`}>
        <div className="cyber-car" style={{ transform: `rotate(${carRotation}deg)` }}>
          <div className="exhaust"></div>
          {/* Top-Down Geometric Cyber-Car SVG */}
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            {/* Chassis */}
            <path d="M30 5 L45 20 L40 50 L30 55 L20 50 L15 20 Z" fill="var(--panel-bg)" stroke="var(--cyan)" strokeWidth="2"/>
            {/* Cockpit */}
            <path d="M30 15 L38 25 L35 35 L25 35 L22 25 Z" fill="var(--space)" stroke="var(--panel-border)" strokeWidth="1"/>
            {/* Thrusters / Taillights */}
            <rect x="22" y="50" width="6" height="4" fill="var(--pink)" />
            <rect x="32" y="50" width="6" height="4" fill="var(--pink)" />
            {/* Details */}
            <line x1="30" y1="5" x2="30" y2="15" stroke="var(--cyan)" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* The Massive Translating Spatial Map */}
      <div 
        className="spatial-map"
        style={{ 
          // Move the map inversely to the target coordinates so the target sits at (0,0) relative to viewport center
          transform: `translate(calc(-50% - ${activeZone.x}vw), calc(-50% - ${activeZone.y}vh))` 
        }}
      >
        {/* Infinite Axes for Visual Anchor */}
        <div className="axis-x"></div>
        <div className="axis-y"></div>

        {/* Placing Nodes at their exact Coordinates */}
        {ZONES.map((zone, i) => (
          <div 
            key={zone.id} 
            className="map-node"
            style={{ 
              left: `calc(50% + ${zone.x}vw)`, 
              top: `calc(50% + ${zone.y}vh)`,
              // Fade out unselected nodes slightly for depth
              opacity: activeIndex === i ? 1 : 0.3,
              transition: 'opacity 1.5s ease'
            }}
          >
            {i === 0 && <HeroNode navigate={navigateTo} />}
            {i === 1 && <WorkshopNode />}
            {i === 2 && <ShelfNode />}
            {i === 3 && <TelemetryNode />}
            {i === 4 && <ReviewsNode />}
          </div>
        ))}
      </div>

      {/* Fixed HUD Navigation */}
      <nav className="hud-nav">
        {ZONES.map((zone, i) => (
          <button 
            key={zone.id}
            onClick={() => navigateTo(i)}
            className={`hud-btn ${activeIndex === i ? 'active' : ''}`}
          >
            {zone.title}
          </button>
        ))}
      </nav>
      
      {/* HUD Details */}
      <div className="fixed top-6 left-6 font-mono text-xs text-text-muted z-50 select-none">
        <div>SYS.OP // SHAVANDEB KAITI</div>
        <div>LATENCY: 12ms</div>
      </div>
      <div className="fixed top-6 right-6 font-mono text-xs text-text-muted z-50 text-right select-none">
        <div className="text-cyan animate-pulse">■ LIVE TRACKING</div>
        <div>POS: [{activeZone.x}, {activeZone.y}]</div>
      </div>
    </>
  );
}