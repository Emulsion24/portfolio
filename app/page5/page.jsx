"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Server, Database, Code2, Layout, Zap, 
  ArrowUpRight, Shield, Activity, Map, Maximize, 
  Crosshair, Cpu, Box, MessageSquare
} from 'lucide-react';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=JetBrains+Mono:wght@400;700&display=swap');

  :root {
    --abyss: #050505;
    --zinc-900: #18181b;
    --zinc-800: #27272a;
    --zinc-400: #a1a1aa;
    --zinc-50: #fafafa;
    --acid-mint: #00FFAA;
    --acid-mint-glow: rgba(0, 255, 170, 0.4);
    
    --font-sans: 'Space Grotesk', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background-color: var(--abyss);
    color: var(--zinc-50);
    font-family: var(--font-sans);
    overflow: hidden; /* NO standard scrolling allowed in this layout */
    -webkit-font-smoothing: antialiased;
  }

  /* Typography utilities */
  .font-mono { font-family: var(--font-mono); }
  .text-mint { color: var(--acid-mint); }
  
  ::selection { background: var(--acid-mint); color: var(--abyss); }

  /* --- SPATIAL UI / BLUEPRINT GRID BACKGROUND --- */
  .spatial-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 300vw; /* 3 columns */
    height: 200vh; /* 2 rows */
    background-image: 
      linear-gradient(var(--zinc-900) 1px, transparent 1px),
      linear-gradient(90deg, var(--zinc-900) 1px, transparent 1px);
    background-size: 100px 100px;
    background-position: center center;
    transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }

  /* Center crosshairs for grid nodes */
  .grid-crosshair {
    position: absolute;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .grid-crosshair::before, .grid-crosshair::after {
    content: '';
    position: absolute;
    background: var(--zinc-800);
  }
  .grid-crosshair::before { top: 50%; left: 0; width: 100%; height: 1px; }
  .grid-crosshair::after { left: 50%; top: 0; height: 100%; width: 1px; }

  /* --- GLASSMORPHISM (STYLE 4) --- */
  .glass-panel {
    background: rgba(24, 24, 27, 0.65);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(161, 161, 170, 0.15);
    box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.5);
  }

  .glass-btn {
    background: rgba(24, 24, 27, 0.8);
    backdrop-filter: blur(8px);
    border: 1px solid var(--zinc-800);
    color: var(--zinc-50);
    transition: all 0.3s ease;
  }
  .glass-btn:hover, .glass-btn.active {
    background: var(--acid-mint);
    border-color: var(--acid-mint);
    color: var(--abyss);
    box-shadow: 0 0 15px var(--acid-mint-glow);
  }

  /* --- DRIFTER (THE CAR) & TELEMETRY SVG PATH --- */
  .tracer-container {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none;
    z-index: 10;
  }

  .telemetry-path {
    fill: none;
    stroke: var(--acid-mint);
    stroke-width: 2;
    stroke-dasharray: 8 8;
    filter: drop-shadow(0 0 6px var(--acid-mint));
    opacity: 0.6;
    animation: flowDash 20s linear infinite;
  }

  @keyframes flowDash {
    to { stroke-dashoffset: -1000; }
  }

  .tracer-car {
    position: absolute;
    width: 32px;
    height: 32px;
    margin-top: -16px;
    margin-left: -16px;
    transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 20;
    filter: drop-shadow(0 0 10px var(--acid-mint));
  }

  /* Drifting exhaust effect */
  .tracer-car::after {
    content: '';
    position: absolute;
    top: 50%; left: -20px;
    width: 20px; height: 4px;
    background: var(--acid-mint);
    transform: translateY(-50%);
    filter: blur(4px);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .tracer-car.is-moving::after {
    opacity: 1;
    animation: exhaustPulse 0.1s infinite alternate;
  }
  @keyframes exhaustPulse {
    0% { transform: translateY(-50%) scaleX(1); }
    100% { transform: translateY(-50%) scaleX(2); opacity: 0.5; }
  }

  /* Layout containers */
  .node-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10vh 5vw;
  }
`;

// The Map Coordinates for the Spatial UI (X, Y)
// X: 0 = Left, 1 = Middle, 2 = Right
// Y: 0 = Top, 1 = Bottom
const NODES = {
  hero: { id: 'hero', title: '00: CORE', x: 0, y: 0, icon: Crosshair },
  stack: { id: 'stack', title: '01: STACK', x: 1, y: 0, icon: LayersIcon },
  shelf: { id: 'shelf', title: '02: SHELF', x: 2, y: 0, icon: Box },
  telemetry: { id: 'telemetry', title: '03: TELEMETRY', x: 0, y: 1, icon: Activity },
  reviews: { id: 'reviews', title: '04: LOGS', x: 1, y: 1, icon: MessageSquare }
};

// Helper component for missing icon
function LayersIcon(props) {
  return <Layout {...props} />;
}

const STACK = [
  { name: "TypeScript", desc: "Strict Type Safety", icon: Code2, type: "Language" },
  { name: "React / Next.js", desc: "Front-end Architecture", icon: Layout, type: "Framework" },
  { name: "Node / Express", desc: "API & Microservices", icon: Server, type: "Backend" },
  { name: "PostgreSQL", desc: "Relational Data Models", icon: Database, type: "Database" },
  { name: "AWS Infrastucture", desc: "Cloud Deployment", icon: Zap, type: "DevOps" },
  { name: "WebAssembly", desc: "High-Performance Compute", icon: Cpu, type: "Low-Level" }
];

const SHELF_PRODUCTS = [
  { id: "MX-01", name: "HORIZON AUTH", price: "$120", desc: "Enterprise-grade authentication module with SSO and Magic Links.", type: "NODE API" },
  { id: "MX-02", name: "GRID UI KIT", price: "$65", desc: "A strict, accessible component library based on editorial design principles.", type: "REACT / CSS" },
  { id: "MX-03", name: "CHRONOS DB", price: "$190", desc: "Lightweight, embedded time-series database wrapper for fast charting.", type: "TYPESCRIPT" }
];

const REVIEWS = [
  { quote: "Rewrote our entire legacy monolith into microservices without a single minute of downtime. Architectural foresight is terrifyingly good.", author: "J. KLINE", role: "CTO, ATLAS DATA" },
  { quote: "The UI library he built for us decreased our front-end development time by 60%. It just works, beautifully.", author: "S. VANCE", role: "FOUNDER, NEXUS" }
];

const TELEMETRY_DATA = Array.from({ length: 112 }, () => Math.floor(Math.random() * 5));


const HeroNode = ({ onNavigate }) => (
  <div className="w-full max-w-4xl relative z-10">
    <div className="font-mono text-sm text-zinc-500 mb-6 flex items-center gap-4">
      <span className="w-2 h-2 bg-mint rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,170,0.8)]" style={{backgroundColor: 'var(--acid-mint)'}}></span>
      SYSTEM ONLINE // SPATIAL OS V2.0
    </div>
    
    {/* Dark Technical Typography */}
    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-zinc-50 leading-[0.9]">
      SOFTWARE.<br/>
      <span className="text-mint" style={{color: 'var(--acid-mint)'}}>ENGINEERED.</span>
    </h1>
    
    <p className="font-mono text-base md:text-lg text-zinc-400 max-w-2xl mb-12 mt-8 leading-relaxed border-l-2 border-zinc-800 pl-6">
      Shavandeb Kaiti. Software Workshop. I construct robust, high-performance digital infrastructure. 
      No superficial abstractions. Pure architectural execution mapped across a spatial plane.
    </p>
    
    <div className="flex gap-4">
      <button onClick={() => onNavigate('stack')} className="glass-btn font-mono text-sm uppercase px-8 py-4 font-bold tracking-widest flex items-center gap-2">
        Initialize Systems <ArrowUpRight size={16} />
      </button>
      <button onClick={() => onNavigate('shelf')} className="font-mono text-sm uppercase px-8 py-4 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-zinc-50 transition-colors">
        Access Store
      </button>
    </div>
  </div>
);

const StackNode = () => (
  <div className="w-full max-w-6xl relative z-10">
    <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6">
      <div>
        <div className="font-mono text-mint mb-2 text-sm">NODE 01</div>
        <h2 className="text-5xl font-bold tracking-tighter">TECH_STACK</h2>
      </div>
      <div className="font-mono text-zinc-500 text-xs hidden md:block">DEPENDENCY GRAPH // RESOLVED</div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {STACK.map((item, i) => (
        <div key={i} className="glass-panel p-6 group hover:border-mint transition-colors duration-300">
          <div className="flex justify-between items-start mb-6">
            <item.icon size={32} className="text-zinc-600 group-hover:text-mint transition-colors" />
            <span className="font-mono text-[10px] uppercase text-zinc-500 border border-zinc-800 px-2 py-1 bg-zinc-900/50">
              {item.type}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
          <p className="font-mono text-xs text-zinc-400">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const ShelfNode = () => (
  <div className="w-full max-w-6xl relative z-10">
    <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6">
      <div>
        <div className="font-mono text-mint mb-2 text-sm">NODE 02</div>
        <h2 className="text-5xl font-bold tracking-tighter">THE_SHELF</h2>
      </div>
      <div className="font-mono text-zinc-500 text-xs hidden md:block">PRE-COMPILED MODULES // READY</div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {SHELF_PRODUCTS.map((prod, i) => (
        <div key={i} className="glass-panel p-8 flex flex-col group relative overflow-hidden">
          {/* Decorative scanner line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-mint/50 transform -translate-y-full group-hover:translate-y-[400px] transition-transform duration-1000 ease-linear"></div>
          
          <div className="flex justify-between font-mono text-xs mb-8">
            <span className="text-zinc-500">[{prod.id}]</span>
            <span className="text-mint">{prod.type}</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">{prod.name}</h3>
          <p className="font-mono text-sm text-zinc-400 flex-grow mb-12 leading-relaxed">
            {prod.desc}
          </p>
          <div className="flex justify-between items-center pt-6 border-t border-zinc-800">
            <div className="font-mono text-xl text-zinc-50 font-bold">{prod.price}</div>
            <button className="text-mint hover:text-zinc-50 transition-colors">
              <ArrowUpRight size={24} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TelemetryNode = () => (
  <div className="w-full max-w-5xl relative z-10">
     <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6">
      <div>
        <div className="font-mono text-mint mb-2 text-sm">NODE 03</div>
        <h2 className="text-5xl font-bold tracking-tighter">GIT_TELEMETRY</h2>
      </div>
      <div className="font-mono text-zinc-500 text-xs hidden md:block">LIVE CODEBASE ACTIVITY</div>
    </div>

    <div className="glass-panel p-8 md:p-12">
      <div className="flex justify-between font-mono text-xs text-zinc-500 mb-8">
        <span>ACTIVITY MATRIX</span>
        <span>LAST 112 DAYS</span>
      </div>
      
      {/* Blueprint/Industrial Heatmap */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(14px,1fr))] gap-1 md:gap-2">
        {TELEMETRY_DATA.map((val, i) => {
          const intensities = [
            'bg-zinc-900 border-zinc-800', 
            'bg-zinc-800 border-zinc-700', 
            'bg-zinc-600 border-zinc-500', 
            'bg-mint/60 border-mint', 
            'bg-mint border-mint shadow-[0_0_8px_rgba(0,255,170,0.6)]'
          ];
          return (
            <div 
              key={i} 
              className={`aspect-square border rounded-sm transition-all duration-300 hover:scale-125 ${intensities[val]}`}
              title={`Commit Level: ${val}`}
            ></div>
          );
        })}
      </div>
    </div>
  </div>
);

const ReviewsNode = () => (
  <div className="w-full max-w-4xl relative z-10">
    <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6">
      <div>
        <div className="font-mono text-mint mb-2 text-sm">NODE 04</div>
        <h2 className="text-5xl font-bold tracking-tighter">EXECUTION_LOGS</h2>
      </div>
      <div className="font-mono text-zinc-500 text-xs hidden md:block">CLIENT VERIFICATION</div>
    </div>

    <div className="flex flex-col gap-8">
      {REVIEWS.map((rev, i) => (
        <div key={i} className="glass-panel p-8 border-l-4 border-l-mint">
          <p className="font-sans text-xl md:text-2xl text-zinc-300 mb-6 leading-relaxed">
            "{rev.quote}"
          </p>
          <div className="font-mono flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-mint font-bold text-sm">{rev.author}</span>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span className="text-zinc-500 text-xs uppercase tracking-widest">{rev.role}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);


export default function App() {
  const [activeNode, setActiveNode] = useState('hero');
  const [visitedNodes, setVisitedNodes] = useState(['hero']);
  const [isMoving, setIsMoving] = useState(false);
  const mapRef = useRef(null);

  // Handle Spatial Navigation
  const navigateTo = (nodeId) => {
    if (nodeId === activeNode) return;
    setIsMoving(true);
    setActiveNode(nodeId);
    
    setVisitedNodes(prev => {
      // If we've visited it, don't re-add to keep the path clean, 
      // or re-add it to draw a new line. Let's append to draw the full journey.
      return [...prev, nodeId];
    });

    // Stop exhaust animation shortly after transition ends
    setTimeout(() => setIsMoving(false), 1200);
  };

  // Calculate Map Offset based on active node
  const activeCoords = NODES[activeNode];
  const mapTransform = `translate(-${activeCoords.x * 100}vw, -${activeCoords.y * 100}vh)`;

  // Generate SVG Path coordinates for the Tracer
  // The centers of each node are at (x*100 + 50)vw and (y*100 + 50)vh
  const generatePath = () => {
    if (visitedNodes.length === 0) return '';
    return visitedNodes.map((id, index) => {
      const node = NODES[id];
      // Note: SVG doesn't use vw/vh natively in path strings easily if viewbox is fixed.
      // So we use percentages. Width = 300%, Height = 200%.
      // Centers relative to total SVG size:
      // X = (node.x * 33.33) + 16.66 %
      // Y = (node.y * 50) + 25 %
      const px = (node.x * (100/3)) + (100/6);
      const py = (node.y * 50) + 25;
      return `${index === 0 ? 'M' : 'L'} ${px} ${py}`;
    }).join(' ');
  };

  // Calculate current car position and rotation
  const carX = `calc(${activeCoords.x * 100}vw + 50vw)`;
  const carY = `calc(${activeCoords.y * 100}vh + 50vh)`;
  
  // Calculate rotation based on previous node
  let carRotation = 0;
  if (visitedNodes.length > 1) {
    const prevNode = NODES[visitedNodes[visitedNodes.length - 2]];
    const dx = activeCoords.x - prevNode.x;
    const dy = activeCoords.y - prevNode.y;
    // Simple 90-deg snaps based on grid movement
    if (dx > 0) carRotation = 90;
    else if (dx < 0) carRotation = -90;
    else if (dy > 0) carRotation = 180;
    else if (dy < 0) carRotation = 0;
  }

  return (
    <>
      <style>{globalStyles}</style>
      
      {/* FIXED HUD (Heads Up Display) */}
      <div className="fixed inset-0 pointer-events-none z-50 p-6 flex flex-col justify-between">
        
        {/* Top Bar */}
        <header className="flex justify-between items-start pointer-events-auto">
          <div className="font-mono">
            <div className="text-xl font-bold tracking-tighter text-zinc-50">HALFCLUTCH_</div>
            <div className="text-xs text-mint mt-1">SYS.OP: SHAVANDEB KAITI</div>
          </div>
          <div className="glass-panel px-4 py-2 font-mono text-xs text-zinc-400 flex items-center gap-2">
            <Map size={14} />
            LOC: X:{activeCoords.x}.0, Y:{activeCoords.y}.0
          </div>
        </header>

        {/* Bottom Navigation Dock */}
        <nav className="pointer-events-auto mx-auto glass-panel p-2 flex gap-2 rounded-lg">
          {Object.values(NODES).map(node => {
            const isActive = activeNode === node.id;
            return (
              <button
                key={node.id}
                onClick={() => navigateTo(node.id)}
                className={`glass-btn p-3 rounded-md flex items-center gap-3 ${isActive ? 'active' : ''}`}
                title={node.title}
              >
                <node.icon size={18} />
                <span className="font-mono text-xs hidden md:inline">{node.title}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* THE SPATIAL VIEWPORT */}
      <div className="relative w-screen h-screen overflow-hidden">
        
        {/* THE MASSIVE MAP CANVAS */}
        <div 
          className="spatial-canvas" 
          ref={mapRef}
          style={{ transform: mapTransform }}
        >
          {/* GRID DECORATIONS */}
          {Object.values(NODES).map(node => (
            <div 
              key={`crosshair-${node.id}`}
              className="grid-crosshair"
              style={{ left: `calc(${node.x * 100}vw + 50vw)`, top: `calc(${node.y * 100}vh + 50vh)` }}
            />
          ))}

          {/* TELEMETRY PATH SVG & DRIFTER CAR */}
          <div className="tracer-container">
            {/* SVG coordinate system matches 300vw x 200vh */}
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                className="telemetry-path" 
                d={generatePath()}
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            
            {/* The Drifting Data Tracer */}
            <div 
              className={`tracer-car ${isMoving ? 'is-moving' : ''}`}
              style={{ 
                left: carX, 
                top: carY,
                transform: `rotate(${carRotation}deg)` 
              }}
            >
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Cyber-Brutalist packet/car design */}
                <polygon points="16,2 30,30 16,24 2,30" fill="var(--abyss)" stroke="var(--acid-mint)" strokeWidth="2"/>
                <circle cx="16" cy="18" r="3" fill="var(--acid-mint)"/>
              </svg>
            </div>
          </div>

          {/* CONTENT NODES */}
          <div className="node-container" style={{ left: '0vw', top: '0vh' }}>
            <HeroNode onNavigate={navigateTo} />
          </div>
          
          <div className="node-container" style={{ left: '100vw', top: '0vh' }}>
            <StackNode />
          </div>
          
          <div className="node-container" style={{ left: '200vw', top: '0vh' }}>
            <ShelfNode />
          </div>
          
          <div className="node-container" style={{ left: '0vw', top: '100vh' }}>
            <TelemetryNode />
          </div>
          
          <div className="node-container" style={{ left: '100vw', top: '100vh' }}>
            <ReviewsNode />
          </div>

        </div>
      </div>
    </>
  );
}