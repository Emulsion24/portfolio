"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { User, Cpu, Code, Mail, Play, RotateCcw, ChevronRight, ShieldAlert, Trophy, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Server } from 'lucide-react';

const PORTFOLIO_NODES = [
  {
    id: 'origin',
    title: 'SYS.ADMIN // ORIGIN',
    color: '#00f3ff', // Neon Blue
    icon: <User className="w-8 h-8" />,
    content: (
      <div className="space-y-4 text-gray-300">
        <h3 className="text-xl font-bold text-white">Full Stack Developer & Systems Architect</h3>
        <p>I build secure, scalable, and highly interactive digital experiences. I don't just write code; I engineer robust systems designed for high performance.</p>
        <p>My background bridges the gap between heavily optimized backend logic and fluid, engaging frontend user interfaces.</p>
      </div>
    )
  },
  {
    id: 'stack',
    title: 'CORE // TECH_STACK',
    color: '#00ff66', // Neon Green
    icon: <Cpu className="w-8 h-8" />,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#00ff66]/50 transition-colors">
          <h4 className="text-[#00ff66] font-bold mb-3 text-sm tracking-widest">FRONTEND</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> React & Next.js</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> TypeScript</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> Tailwind CSS</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> HTML5 Canvas/WebGL</li>
          </ul>
        </div>
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#00ff66]/50 transition-colors">
          <h4 className="text-[#00ff66] font-bold mb-3 text-sm tracking-widest">BACKEND</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> Node.js & Python</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> PostgreSQL / Redis</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> AWS Infrastructure</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> Docker & CI/CD</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'projects',
    title: 'DATABANKS // ARCHIVES',
    color: '#b026ff', // Neon Purple
    icon: <Code className="w-8 h-8" />,
    content: (
      <div className="space-y-4">
        <div className="group bg-black/40 p-5 rounded-lg border border-[#b026ff]/30 hover:bg-[#b026ff]/10 hover:border-[#b026ff] transition-all cursor-pointer">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-white font-bold text-lg group-hover:text-[#b026ff] transition-colors">Vortex Trading Platform</h4>
            <span className="text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded">2024</span>
          </div>
          <p className="text-xs text-gray-400 mb-3 font-mono">React • WebSockets • Go</p>
          <p className="text-sm text-gray-300">A real-time cryptocurrency dashboard handling thousands of websocket updates per second with zero UI lag.</p>
        </div>
        <div className="group bg-black/40 p-5 rounded-lg border border-[#b026ff]/30 hover:bg-[#b026ff]/10 hover:border-[#b026ff] transition-all cursor-pointer">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-white font-bold text-lg group-hover:text-[#b026ff] transition-colors">Nexus E-Commerce</h4>
            <span className="text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded">2023</span>
          </div>
          <p className="text-xs text-gray-400 mb-3 font-mono">Next.js • Stripe • Three.js</p>
          <p className="text-sm text-gray-300">Headless storefront featuring 3D product previews and ultra-fast page loads.</p>
        </div>
      </div>
    )
  },
  {
    id: 'contact',
    title: 'UPLINK // CONTACT',
    color: '#ff9d00', // Neon Orange
    icon: <Mail className="w-8 h-8" />,
    content: (
      <div className="text-center space-y-8 py-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Open for Collaboration</h3>
          <p className="text-gray-400">Looking for a creative engineer to fortify your team? Let's open a secure channel.</p>
        </div>
        
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a href="#" className="flex items-center justify-between group bg-[#ff9d00]/10 hover:bg-[#ff9d00]/20 text-[#ff9d00] py-4 px-6 rounded-lg border border-[#ff9d00]/50 transition-all font-bold tracking-wide">
            <span className="flex items-center gap-3"><Mail className="w-5 h-5" /> INITIATE EMAIL</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" className="flex items-center justify-between group bg-white/5 hover:bg-white/10 text-white py-4 px-6 rounded-lg border border-white/20 transition-all font-bold tracking-wide">
            <span className="flex items-center gap-3"><Server className="w-5 h-5" /> GITHUB REPOSITORY</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    )
  }
];

// Game Grid Configuration
const GAME_WIDTH = 1000;
const GAME_HEIGHT = 700;
const GRID_SIZE = 25; // Size of each cell
const COLS = Math.floor(GAME_WIDTH / GRID_SIZE);
const ROWS = Math.floor(GAME_HEIGHT / GRID_SIZE);

export default function CyberWormPortfolio() {
  const [gameState, setGameState] = useState('start'); // start, playing, paused, gameover, win
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [unlockedNodes, setUnlockedNodes] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  
  const canvasRef = useRef(null);
  const requestRef = useRef();
  
  // The core mutable game engine state
  const engine = useRef({
    snake: [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }],
    dir: { x: 1, y: 0 },
    nextDir: { x: 1, y: 0 },
    food: { x: 15, y: 10, type: 'bit', color: '#fff' },
    vault: null, // Holds the current portfolio node block
    particles: [],
    shakeTime: 0,
    lastTick: 0,
    baseTickRate: 120, // ms per movement
    currentTickRate: 120,
    pulseOffset: 0
  });

  // Get random free grid position
  const getRandomFreePos = useCallback(() => {
    const state = engine.current;
    let newPos;
    let isOccupied = true;
    while (isOccupied) {
      newPos = {
        x: Math.floor(Math.random() * COLS),
        y: Math.floor(Math.random() * ROWS)
      };
      // Check snake
      isOccupied = state.snake.some(segment => segment.x === newPos.x && segment.y === newPos.y);
      // Check food
      if (state.food && state.food.x === newPos.x && state.food.y === newPos.y) isOccupied = true;
      // Check vault
      if (state.vault && state.vault.x === newPos.x && state.vault.y === newPos.y) isOccupied = true;
    }
    return newPos;
  }, []);

  const spawnFood = useCallback(() => {
    const pos = getRandomFreePos();
    engine.current.food = { ...pos, type: 'bit', color: '#ffffff' };
  }, [getRandomFreePos]);

  const spawnVault = useCallback(() => {
    // Find the next node that hasn't been unlocked
    const nextNode = PORTFOLIO_NODES.find(n => !unlockedNodes.includes(n.id));
    if (nextNode) {
      const pos = getRandomFreePos();
      engine.current.vault = { 
        ...pos, 
        nodeData: nextNode, 
        color: nextNode.color 
      };
    } else {
      engine.current.vault = null;
    }
  }, [unlockedNodes, getRandomFreePos]);

  const spawnParticles = (x, y, color, count, isGridPos = true) => {
    const state = engine.current;
    const px = isGridPos ? x * GRID_SIZE + GRID_SIZE/2 : x;
    const py = isGridPos ? y * GRID_SIZE + GRID_SIZE/2 : y;
    
    for (let i = 0; i < count; i++) {
      state.particles.push({
        x: px, y: py,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 1,
        decay: Math.random() * 0.03 + 0.02,
        color,
        size: Math.random() * 4 + 2
      });
    }
  };

  // Handle keyboard inputs
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameState !== 'playing') return;
      const state = engine.current;
      
      // Prevent reversing directly into itself
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (state.dir.y !== 1) state.nextDir = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (state.dir.y !== -1) state.nextDir = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (state.dir.x !== 1) state.nextDir = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (state.dir.x !== -1) state.nextDir = { x: 1, y: 0 };
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  // Touch/On-screen button handlers
  const handleDirectionClick = (dx, dy) => {
    if (gameState !== 'playing') return;
    const state = engine.current;
    if (dx !== 0 && state.dir.x !== -dx) state.nextDir = { x: dx, y: 0 };
    if (dy !== 0 && state.dir.y !== -dy) state.nextDir = { x: 0, y: dy };
  };

  const updateAndDraw = useCallback((timestamp) => {
    if (gameState !== 'playing') {
      requestRef.current = requestAnimationFrame(updateAndDraw);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const state = engine.current;

    // --- LOGIC UPDATE (Grid Tick) ---
    if (timestamp - state.lastTick > state.currentTickRate) {
      state.lastTick = timestamp;
      state.dir = { ...state.nextDir }; // Apply queued direction

      const head = state.snake[0];
      let newX = head.x + state.dir.x;
      let newY = head.y + state.dir.y;

      // Screen Wrapping
      if (newX < 0) newX = COLS - 1;
      if (newX >= COLS) newX = 0;
      if (newY < 0) newY = ROWS - 1;
      if (newY >= ROWS) newY = 0;

      // Self Collision Check
      const isSelfCollision = state.snake.some((seg, index) => {
          // ignore the last tail segment because it will move forward anyway
          if (index === state.snake.length - 1) return false; 
          return seg.x === newX && seg.y === newY;
      });

      if (isSelfCollision) {
        setGameState('gameover');
        state.shakeTime = 20;
        spawnParticles(newX, newY, '#ff0055', 50);
        if (score > highScore) setHighScore(score);
        return; // Stop update
      }

      const newHead = { x: newX, y: newY };
      state.snake.unshift(newHead); // Add new head

      let ateSomething = false;

      // Check Food Collision
      if (state.food && newX === state.food.x && newY === state.food.y) {
        setScore(s => s + 10);
        spawnParticles(newX, newY, state.food.color, 15);
        ateSomething = true;
        spawnFood();
        
        // Speed up slightly
        state.currentTickRate = Math.max(50, state.currentTickRate - 2);

        // Spawn a vault every 5 score points if one isn't on board
        if (!state.vault && Math.random() > 0.5) {
            spawnVault();
        }
      }

      // Check Vault Collision
      if (state.vault && newX === state.vault.x && newY === state.vault.y) {
        setScore(s => s + 500);
        spawnParticles(newX, newY, state.vault.color, 40);
        ateSomething = true;
        
        const node = state.vault.nodeData;
        setActiveModal(node);
        setUnlockedNodes(prev => {
            const next = [...prev, node.id];
            if (next.length === PORTFOLIO_NODES.length) {
                setTimeout(() => setGameState('win'), 800);
            }
            return next;
        });
        
        state.vault = null;
        setGameState('paused');
      }

      // If didn't eat, pop the tail
      if (!ateSomething) {
        state.snake.pop();
      }
    }

    // --- RENDERING ---
    // Background
    ctx.fillStyle = '#050510';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    ctx.save();
    
    // Screen Shake
    if (state.shakeTime > 0) {
        const magnitude = (state.shakeTime / 20) * 15;
        const dx = (Math.random() - 0.5) * magnitude;
        const dy = (Math.random() - 0.5) * magnitude;
        ctx.translate(dx, dy);
        state.shakeTime--;
    }

    // Draw Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i = 0; i < GAME_WIDTH; i += GRID_SIZE) {
        ctx.moveTo(i, 0); ctx.lineTo(i, GAME_HEIGHT);
    }
    for(let i = 0; i < GAME_HEIGHT; i += GRID_SIZE) {
        ctx.moveTo(0, i); ctx.lineTo(GAME_WIDTH, i);
    }
    ctx.stroke();

    state.pulseOffset += 0.1;
    const pulse = Math.sin(state.pulseOffset) * 0.2 + 0.8;

    // Draw Vault (Portfolio Node)
    if (state.vault) {
        const vx = state.vault.x * GRID_SIZE;
        const vy = state.vault.y * GRID_SIZE;
        
        ctx.shadowBlur = 20 * pulse;
        ctx.shadowColor = state.vault.color;
        ctx.fillStyle = `${state.vault.color}30`;
        ctx.strokeStyle = state.vault.color;
        ctx.lineWidth = 2;
        
        ctx.fillRect(vx, vy, GRID_SIZE, GRID_SIZE);
        ctx.strokeRect(vx, vy, GRID_SIZE, GRID_SIZE);
        
        // Inner glowing core
        ctx.fillStyle = state.vault.color;
        ctx.fillRect(vx + 6, vy + 6, GRID_SIZE - 12, GRID_SIZE - 12);
        
        ctx.shadowBlur = 0;
    }

    // Draw Food
    if (state.food) {
        const fx = state.food.x * GRID_SIZE + GRID_SIZE/2;
        const fy = state.food.y * GRID_SIZE + GRID_SIZE/2;
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = state.food.color;
        ctx.fillStyle = state.food.color;
        
        ctx.beginPath();
        ctx.arc(fx, fy, (GRID_SIZE/3) * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    // Draw Particles
    for (let i = state.particles.length - 1; i >= 0; i--) {
        let pt = state.particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life -= pt.decay;
        
        if (pt.life <= 0) {
            state.particles.splice(i, 1);
        } else {
            ctx.globalAlpha = pt.life;
            ctx.fillStyle = pt.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = pt.color;
            ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        }
    }

    // Draw Snake
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Draw Glow/Trail
    ctx.beginPath();
    for (let i = 0; i < state.snake.length; i++) {
        const seg = state.snake[i];
        const px = seg.x * GRID_SIZE + GRID_SIZE/2;
        const py = seg.y * GRID_SIZE + GRID_SIZE/2;
        
        // Don't connect lines if wrapping across screen
        if (i > 0) {
            const prev = state.snake[i-1];
            if (Math.abs(seg.x - prev.x) > 1 || Math.abs(seg.y - prev.y) > 1) {
                ctx.moveTo(px, py); // Lift pen
            } else {
                ctx.lineTo(px, py);
            }
        } else {
            ctx.moveTo(px, py);
        }
    }
    
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#00f3ff';
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = GRID_SIZE - 4;
    ctx.stroke();

    // Draw Core (Inner bright line)
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = GRID_SIZE - 12;
    ctx.stroke();

    // Draw Head (Eyes)
    const head = state.snake[0];
    const hx = head.x * GRID_SIZE;
    const hy = head.y * GRID_SIZE;
    
    ctx.fillStyle = '#fff';
    // Position eyes based on direction
    if (state.dir.x === 1) { // Right
        ctx.fillRect(hx + 16, hy + 4, 4, 4);
        ctx.fillRect(hx + 16, hy + 16, 4, 4);
    } else if (state.dir.x === -1) { // Left
        ctx.fillRect(hx + 4, hy + 4, 4, 4);
        ctx.fillRect(hx + 4, hy + 16, 4, 4);
    } else if (state.dir.y === 1) { // Down
        ctx.fillRect(hx + 4, hy + 16, 4, 4);
        ctx.fillRect(hx + 16, hy + 16, 4, 4);
    } else { // Up
        ctx.fillRect(hx + 4, hy + 4, 4, 4);
        ctx.fillRect(hx + 16, hy + 4, 4, 4);
    }

    ctx.restore();
    requestRef.current = requestAnimationFrame(updateAndDraw);
  }, [gameState, unlockedNodes, spawnFood, spawnVault]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateAndDraw);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updateAndDraw]);

  const startGame = () => {
    const state = engine.current;
    state.snake = [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }];
    state.dir = { x: 1, y: 0 };
    state.nextDir = { x: 1, y: 0 };
    state.particles = [];
    state.currentTickRate = state.baseTickRate;
    
    setScore(0);
    setUnlockedNodes([]);
    spawnFood();
    spawnVault();
    
    setGameState('playing');
  };

  const resumeGame = () => {
    setActiveModal(null);
    engine.current.lastTick = performance.now(); // Prevent instant jump on resume
    setGameState('playing');
  };

  return (
    <div className="min-h-screen bg-[#020205] flex items-center justify-center p-2 md:p-6 font-sans select-none overflow-hidden touch-none">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00f3ff] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#b026ff] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>

      <div className="relative w-full max-w-5xl flex flex-col gap-4 z-10">
        
        {/* --- HUD --- */}
        <div className="flex justify-between items-end px-2">
            <div>
                <h1 className="text-xl md:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#00ff66] uppercase mb-1">
                    CYBER_WORM
                </h1>
                <p className="text-[10px] md:text-xs text-gray-500 font-mono">PORTFOLIO DECRYPTION MINER v2.0</p>
            </div>

            <div className="flex gap-4 md:gap-8 items-center bg-white/5 border border-white/10 rounded-lg px-4 md:px-6 py-2 md:py-3">
                <div className="flex flex-col items-center">
                    <span className="text-[8px] md:text-[10px] text-gray-400 font-mono tracking-widest flex items-center gap-1"><Trophy className="w-3 h-3"/> BEST</span>
                    <span className="text-sm md:text-xl font-bold text-gray-500 font-mono leading-none">
                        {highScore.toString().padStart(5, '0')}
                    </span>
                </div>
                <div className="w-px h-6 md:h-8 bg-white/20"></div>
                <div className="flex flex-col items-center">
                    <span className="text-[8px] md:text-[10px] text-gray-400 font-mono tracking-widest">DATA EXTRACTED</span>
                    <span className="text-lg md:text-xl font-black text-white font-mono leading-none flex items-center gap-2">
                        {score.toString().padStart(5, '0')}
                    </span>
                </div>
            </div>
        </div>

        {/* --- GAME CANVAS CONTAINER --- */}
        <div className="relative w-full aspect-[10/7] bg-[#050510] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00f3ff]/5">
            <canvas 
                ref={canvasRef} 
                width={GAME_WIDTH} 
                height={GAME_HEIGHT}
                className="w-full h-full block"
            />

            {/* --- OVERLAYS --- */}
            
            {/* START SCREEN */}
            {gameState === 'start' && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-[#0a0a15] border border-white/20 p-6 md:p-10 rounded-2xl max-w-lg w-full text-center shadow-2xl relative overflow-hidden">
                        <Server className="w-12 h-12 md:w-16 md:h-16 text-[#00f3ff] mx-auto mb-4 md:mb-6" />
                        <h2 className="text-2xl md:text-3xl font-black mb-2 text-white tracking-wider">SYSTEM SECURED</h2>
                        <p className="text-gray-400 font-mono text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
                            Deploy the Cyber Worm to extract portfolio data. Navigate the grid, collect raw bits to increase processing speed, and consume 4 encrypted Vaults to decrypt the portfolio.
                        </p>
                        
                        <div className="bg-white/5 rounded-lg p-4 mb-6 md:mb-8 text-left border border-white/5 text-xs md:text-sm font-mono text-gray-300">
                            <span className="text-[#00f3ff] block mb-2 font-bold">PROTOCOL:</span>
                            • Desktop: Use <span className="text-white">WASD</span> or <span className="text-white">Arrow Keys</span><br/>
                            • Mobile: Use on-screen D-Pad<br/>
                            • Avoid crashing into your own data trail. Grid boundaries wrap seamlessly.
                        </div>

                        <button 
                            onClick={startGame}
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-[#00f3ff] rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,243,255,0.4)] w-full"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[150%] group-hover:h-56 opacity-20"></span>
                            <span className="relative flex items-center gap-2 tracking-widest uppercase">
                                <Play className="w-5 h-5 fill-current" /> Deploy Worm
                            </span>
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL (PAUSED / DATA NODE) */}
            {gameState === 'paused' && activeModal && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 z-50">
                    <div 
                        className="w-full max-w-2xl bg-[#0a0a15] rounded-xl overflow-hidden border-2 shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col max-h-full"
                        style={{ borderColor: activeModal.color, boxShadow: `0 0 50px ${activeModal.color}40` }}
                    >
                        {/* Header */}
                        <div className="px-4 py-3 md:px-6 md:py-4 border-b border-white/10 flex justify-between items-center shrink-0" style={{ backgroundColor: `${activeModal.color}15` }}>
                            <h2 className="text-lg md:text-2xl font-black font-mono tracking-wider flex items-center gap-3" style={{ color: activeModal.color }}>
                                {activeModal.icon}
                                {activeModal.title}
                            </h2>
                        </div>
                        
                        {/* Content */}
                        <div className="p-4 md:p-8 flex-1 overflow-y-auto bg-gradient-to-b from-transparent to-black/50">
                            {activeModal.content}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-3 md:px-6 md:py-5 bg-black border-t border-white/10 flex justify-between items-center shrink-0">
                            <span className="text-[10px] md:text-xs text-gray-500 font-mono tracking-widest">
                                VAULTS DECRYPTED: {unlockedNodes.length}/4
                            </span>
                            <button 
                                onClick={resumeGame}
                                className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-bold font-mono text-xs md:text-base tracking-wider"
                            >
                                CONTINUE <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* GAME OVER SCREEN */}
            {gameState === 'gameover' && (
                <div className="absolute inset-0 bg-red-950/90 backdrop-blur-md flex items-center justify-center p-6 z-50">
                    <div className="text-center">
                        <ShieldAlert className="w-16 h-16 md:w-24 md:h-24 text-red-500 mx-auto mb-4 md:mb-6 animate-pulse" />
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 md:mb-4 tracking-widest">CRITICAL ERROR</h2>
                        <p className="text-red-400 font-mono mb-6 md:mb-8 text-sm md:text-lg">Data loop detected. Worm destroyed.</p>
                        <button 
                            onClick={startGame}
                            className="flex items-center mx-auto gap-3 px-6 py-3 md:px-8 md:py-4 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors font-bold font-mono tracking-widest text-sm md:text-base"
                        >
                            <RotateCcw className="w-4 h-4 md:w-5 md:h-5" /> REBOOT SEQUENCE
                        </button>
                    </div>
                </div>
            )}

            {/* WIN SCREEN */}
            {gameState === 'win' && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 z-50">
                    <div className="text-center max-w-2xl w-full">
                        <Server className="w-20 h-20 md:w-24 md:h-24 text-[#00ff66] mx-auto mb-6 drop-shadow-[0_0_15px_rgba(0,255,102,0.8)]" />
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-2 md:mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                            FULL ACCESS GRANTED
                        </h2>
                        <p className="text-[#00ff66] font-mono mb-8 md:mb-10 text-sm md:text-xl tracking-widest">All portfolio data successfully extracted.</p>
                        
                        <div className="inline-block bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl mb-8 md:mb-10">
                            <div className="text-xs md:text-sm text-gray-500 font-mono mb-1">FINAL SCORE</div>
                            <div className="text-5xl md:text-6xl font-black text-[#00f3ff] font-mono">{score}</div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={startGame}
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-bold font-mono"
                            >
                                <RotateCcw className="w-4 h-4" /> RESTART MINING
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
        {/* --- BOTTOM SECTION: Tracker & Mobile Controls --- */}
        <div className="flex justify-between items-center mt-1 md:mt-2">
            
            {/* Node tracker indicator */}
            <div className="flex gap-2 md:gap-3">
                {PORTFOLIO_NODES.map((node) => {
                    const isUnlocked = unlockedNodes.includes(node.id);
                    return (
                        <div 
                            key={node.id} 
                            className={`w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center border-2 transition-all duration-500 ${
                                isUnlocked ? 'bg-black text-white scale-100' : 'bg-transparent border-gray-800 text-gray-800 scale-90'
                            }`}
                            style={{ 
                                borderColor: isUnlocked ? node.color : '',
                                boxShadow: isUnlocked ? `0 0 15px ${node.color}40` : ''
                            }}
                        >
                            {React.cloneElement(node.icon, { className: 'w-5 h-5 md:w-6 md:h-6' })}
                        </div>
                    );
                })}
            </div>

            {/* Mobile On-Screen D-PAD (Only shows gracefully, mainly used for small screens) */}
            <div className="grid grid-cols-3 gap-1 md:hidden opacity-80">
                <div />
                <button onClick={() => handleDirectionClick(0, -1)} className="bg-white/10 p-3 rounded active:bg-white/30"><ArrowUp className="w-6 h-6 text-[#00f3ff]"/></button>
                <div />
                <button onClick={() => handleDirectionClick(-1, 0)} className="bg-white/10 p-3 rounded active:bg-white/30"><ArrowLeft className="w-6 h-6 text-[#00f3ff]"/></button>
                <button onClick={() => handleDirectionClick(0, 1)} className="bg-white/10 p-3 rounded active:bg-white/30"><ArrowDown className="w-6 h-6 text-[#00f3ff]"/></button>
                <button onClick={() => handleDirectionClick(1, 0)} className="bg-white/10 p-3 rounded active:bg-white/30"><ArrowRight className="w-6 h-6 text-[#00f3ff]"/></button>
            </div>
            
            <div className="hidden md:block text-right text-gray-500 font-mono text-sm">
                Use <kbd className="bg-gray-800 px-2 py-1 rounded text-[#00f3ff]">W A S D</kbd> to move
            </div>
        </div>

      </div>
    </div>
  );
}