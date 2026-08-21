"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Box, GitBranch, Cpu, User, MessageSquare, 
  Maximize2, Minimize2, X, Play, RefreshCw, Layers, Shield, 
  ExternalLink, Command, HardDrive, Zap, CheckCircle 
} from 'lucide-react';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

  :root {
    --os-bg: #0b0d10;
    --os-surface: #14181f;
    --os-surface-hover: #1c222d;
    --os-border: #2b3342;
    --os-border-glow: #38bdf8;
    --accent-cyan: #38bdf8;
    --accent-amber: #fbbf24;
    --accent-green: #34d399;
    --accent-pink: #f472b6;
    --text-main: #f1f5f9;
    --text-muted: #94a3b8;
    
    --font-mono: 'JetBrains Mono', monospace;
    --font-sans: 'Plus Jakarta Sans', sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background-color: var(--os-bg);
    color: var(--text-main);
    font-family: var(--font-sans);
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  /* CRT Scanline & Grid Effect */
  .crt-overlay {
    position: fixed;
    inset: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
    background-size: 100% 3px, 6px 100%;
    pointer-events: none;
    z-index: 9999;
  }

  /* OS Desktop Canvas */
  .os-desktop {
    position: relative;
    width: 100vw;
    height: calc(100vh - 48px);
    background: radial-gradient(circle at 50% 50%, #161b24 0%, #0b0d10 100%);
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-content: flex-start;
    overflow: auto;
  }

  /* Window Styling */
  .os-window {
    background: var(--os-surface);
    border: 1px solid var(--os-border);
    border-radius: 8px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
    animation: windowPop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .os-window:hover {
    border-color: var(--os-border-glow);
    box-shadow: 0 25px 60px rgba(56, 189, 248, 0.1);
  }

  @keyframes windowPop {
    0% { transform: scale(0.95); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .window-titlebar {
    background: #10141b;
    border-bottom: 1px solid var(--os-border);
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: grab;
  }

  .window-titlebar:active { cursor: grabbing; }

  .window-controls {
    display: flex;
    gap: 8px;
  }

  .w-btn {
    width: 12px; height: 12px; border-radius: 50%; border: none; cursor: pointer;
  }
  .w-close { background: #ef4444; }
  .w-min { background: #f59e0b; }
  .w-max { background: #10b981; }

  /* OS Taskbar */
  .os-taskbar {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    height: 48px;
    background: #080a0e;
    border-top: 1px solid var(--os-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1000;
  }

  .taskbar-start {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--accent-cyan);
    cursor: pointer;
    padding: 6px 12px;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 4px;
    transition: background 0.2s;
  }

  .taskbar-start:hover { background: rgba(56, 189, 248, 0.2); }

  .taskbar-apps {
    display: flex;
    gap: 8px;
  }

  .taskbar-app {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    padding: 6px 14px;
    background: var(--os-surface);
    border: 1px solid var(--os-border);
    color: var(--text-muted);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
  }

  .taskbar-app.active {
    background: var(--os-surface-hover);
    color: var(--text-main);
    border-color: var(--accent-cyan);
  }

  /* Status Drifter Track */
  .status-track {
    position: relative;
    width: 180px;
    height: 20px;
    background: #040507;
    border: 1px solid var(--os-border);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .drifter-car {
    position: absolute;
    width: 24px;
    height: 10px;
    background: var(--accent-amber);
    border-radius: 3px;
    box-shadow: 0 0 10px var(--accent-amber);
    animation: driftLoop 4s linear infinite;
  }

  @keyframes driftLoop {
    0% { transform: translateX(-30px) skewX(0deg); }
    40% { transform: translateX(110px) skewX(-15deg); }
    50% { transform: translateX(140px) skewX(15deg); }
    100% { transform: translateX(200px) skewX(0deg); }
  }

  /* Custom UI Components inside Windows */
  .shelf-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }

  .shelf-card {
    background: #0f131a;
    border: 1px solid var(--os-border);
    padding: 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  .shelf-card:hover { border-color: var(--accent-cyan); }

  .git-heatmap {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    gap: 4px;
    margin-top: 10px;
  }

  .heat-block {
    aspect-ratio: 1;
    background: #1a2230;
    border-radius: 2px;
  }
  .heat-block.l1 { background: #0e4429; }
  .heat-block.l2 { background: #006d32; }
  .heat-block.l3 { background: #26a641; }
  .heat-block.l4 { background: #39d353; box-shadow: 0 0 6px #39d353; }
`;

export default function App() {
  const [activeWindows, setActiveWindows] = useState({
    profile: true,
    shelf: true,
    telemetry: true,
    stack: true,
    reviews: false
  });

  const toggleWindow = (winKey) => {
    setActiveWindows(prev => ({ ...prev, [winKey]: !prev[winKey] }));
  };

  return (
    <>
      <style>{globalStyles}</style>
      <div className="crt-overlay"></div>

      {/* OS Desktop Workspace */}
      <div className="os-desktop">
        
        {/* WINDOW 01: PROFILE / SYSTEM ID */}
        {activeWindows.profile && (
          <div className="os-window" style={{ width: '360px', height: '380px' }}>
            <div className="window-titlebar">
              <span className="font-mono text-xs text-sky-400 flex items-center gap-2">
                <Terminal size={14} /> /sys/profile/shavandeb.info
              </span>
              <div className="window-controls">
                <button className="w-btn w-min" onClick={() => toggleWindow('profile')} />
                <button className="w-btn w-max" />
                <button className="w-btn w-close" onClick={() => toggleWindow('profile')} />
              </div>
            </div>
            <div className="p-5 flex flex-col justify-between flex-1 font-mono text-xs">
              <div>
                <h1 className="text-xl font-bold text-white mb-1 font-sans">SHAVANDEB KAITI</h1>
                <p className="text-sky-400 mb-4">// SOFTWARE ARCHITECT & FOUNDRY</p>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span className="text-slate-500">KERNEL:</span> <span>Full-Stack Systems v4.2</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span className="text-slate-500">BASE:</span> <span>Durgapur / Remote</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span className="text-slate-500">STATUS:</span> <span className="text-emerald-400">ACTIVE / ENGAGED</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 p-3 rounded border border-slate-800 text-slate-400 text-[11px]">
                "HalfClutch runs on one principle: engage fully or don't engage at all. Bulletproof backends & zero-latency UI."
              </div>
            </div>
          </div>
        )}

        {/* WINDOW 02: THE SHELF (PRODUCTS STORE) */}
        {activeWindows.shelf && (
          <div className="os-window" style={{ width: '420px', height: '420px' }}>
            <div className="window-titlebar">
              <span className="font-mono text-xs text-amber-400 flex items-center gap-2">
                <Box size={14} /> /modules/the_shelf.store
              </span>
              <div className="window-controls">
                <button className="w-btn w-min" onClick={() => toggleWindow('shelf')} />
                <button className="w-btn w-max" />
                <button className="w-btn w-close" onClick={() => toggleWindow('shelf')} />
              </div>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              <div className="shelf-grid">
                {[
                  { id: '01', name: 'NEXUS ADMIN', price: '$89', stack: 'Next.js / Tailwind' },
                  { id: '02', name: 'LEDGER ENGINE', price: '$149', stack: 'Node / Postgres' },
                  { id: '03', name: 'FORGE AUTH', price: '$69', stack: 'JWT / Redis' },
                  { id: '04', name: 'ATLAS INVENT', price: '$129', stack: 'React / MySQL' }
                ].map(item => (
                  <div key={item.id} className="shelf-card">
                    <div className="flex justify-between font-mono text-[10px] text-sky-400 mb-1">
                      <span>MOD_{item.id}</span>
                      <span className="font-bold text-amber-400">{item.price}</span>
                    </div>
                    <div className="font-bold text-sm text-white mb-1">{item.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{item.stack}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* WINDOW 03: GIT TELEMETRY */}
        {activeWindows.telemetry && (
          <div className="os-window" style={{ width: '380px', height: '340px' }}>
            <div className="window-titlebar">
              <span className="font-mono text-xs text-emerald-400 flex items-center gap-2">
                <GitBranch size={14} /> /telemetry/git_commits.log
              </span>
              <div className="window-controls">
                <button className="w-btn w-min" onClick={() => toggleWindow('telemetry')} />
                <button className="w-btn w-max" />
                <button className="w-btn w-close" onClick={() => toggleWindow('telemetry')} />
              </div>
            </div>
            <div className="p-5 font-mono">
              <div className="flex justify-between text-xs text-slate-400 mb-3">
                <span>UPTIME: 99.98%</span>
                <span className="text-emerald-400">1,420 COMMITS YTD</span>
              </div>
              <div className="git-heatmap">
                {Array.from({ length: 42 }).map((_, i) => {
                  const r = Math.random();
                  const lvl = r > 0.8 ? 'l4' : r > 0.6 ? 'l3' : r > 0.4 ? 'l2' : r > 0.2 ? 'l1' : '';
                  return <div key={i} className={`heat-block ${lvl}`} />;
                })}
              </div>
              <div className="mt-4 text-[11px] text-slate-500 border-t border-slate-800 pt-2 flex justify-between">
                <span>LESS ACTIVITY</span>
                <span>MORE ACTIVITY</span>
              </div>
            </div>
          </div>
        )}

        {/* WINDOW 04: TECH STACK */}
        {activeWindows.stack && (
          <div className="os-window" style={{ width: '340px', height: '340px' }}>
            <div className="window-titlebar">
              <span className="font-mono text-xs text-pink-400 flex items-center gap-2">
                <Cpu size={14} /> /bin/tech_stack.bin
              </span>
              <div className="window-controls">
                <button className="w-btn w-min" onClick={() => toggleWindow('stack')} />
                <button className="w-btn w-max" />
                <button className="w-btn w-close" onClick={() => toggleWindow('stack')} />
              </div>
            </div>
            <div className="p-4 flex flex-wrap gap-2 content-start font-mono text-xs">
              {['TypeScript', 'React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS ECS', 'Tailwind CSS', 'GraphQL'].map((tech, idx) => (
                <span key={idx} className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded text-slate-200">
                  ⚡ {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* WINDOW 05: CLIENT REVIEWS */}
        {activeWindows.reviews && (
          <div className="os-window" style={{ width: '380px', height: '320px' }}>
            <div className="window-titlebar">
              <span className="font-mono text-xs text-amber-400 flex items-center gap-2">
                <MessageSquare size={14} /> /logs/client_reviews.db
              </span>
              <div className="window-controls">
                <button className="w-btn w-min" onClick={() => toggleWindow('reviews')} />
                <button className="w-btn w-max" />
                <button className="w-btn w-close" onClick={() => toggleWindow('reviews')} />
              </div>
            </div>
            <div className="p-5 font-mono text-xs space-y-4">
              <div className="bg-black/30 p-3 rounded border border-slate-800">
                <p className="text-slate-300 mb-2">"Zero-latency deployment. The code structure is remarkably clean and bulletproof."</p>
                <span className="text-sky-400">— DIRECTOR VANCE // NEXUS CORP</span>
              </div>
              <div className="bg-black/30 p-3 rounded border border-slate-800">
                <p className="text-slate-300 mb-2">"A rare engineer who masterfully bridges backend scale with striking UI components."</p>
                <span className="text-pink-400">— S. KAEL // VOID DYNAMICS</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* OS Taskbar Dock */}
      <footer className="os-taskbar">
        <div className="taskbar-start" onClick={() => setActiveWindows({ profile: true, shelf: true, telemetry: true, stack: true, reviews: true })}>
          <Command size={16} /> HALFCLUTCH_OS
        </div>

        <div className="taskbar-apps">
          <button className={`taskbar-app ${activeWindows.profile ? 'active' : ''}`} onClick={() => toggleWindow('profile')}>
            <User size={14} /> profile.info
          </button>
          <button className={`taskbar-app ${activeWindows.shelf ? 'active' : ''}`} onClick={() => toggleWindow('shelf')}>
            <Box size={14} /> the_shelf.store
          </button>
          <button className={`taskbar-app ${activeWindows.telemetry ? 'active' : ''}`} onClick={() => toggleWindow('telemetry')}>
            <GitBranch size={14} /> git_telemetry.log
          </button>
          <button className={`taskbar-app ${activeWindows.stack ? 'active' : ''}`} onClick={() => toggleWindow('stack')}>
            <Cpu size={14} /> tech_stack.bin
          </button>
          <button className={`taskbar-app ${activeWindows.reviews ? 'active' : ''}`} onClick={() => toggleWindow('reviews')}>
            <MessageSquare size={14} /> client_reviews.db
          </button>
        </div>

        {/* Live Kernel Drifter Animation */}
        <div className="status-track">
          <div className="drifter-car"></div>
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-amber-300 tracking-widest pointer-events-none">
            KERNEL_ACTIVE
          </span>
        </div>
      </footer>
    </>
  );
}