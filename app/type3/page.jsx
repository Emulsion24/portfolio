"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { User, Cpu, Code, Mail, Play, RotateCcw, ChevronRight, ShieldAlert, Trophy, Shield, Zap, Terminal } from 'lucide-react';

const PORTFOLIO_NODES = [
  {
    id: 'origin',
    title: 'SYS.ADMIN // ORIGIN',
    color: '#00f3ff', // Neon Blue
    icon: <User className="w-8 h-8" />,
    content: (
      <div className="space-y-4 text-gray-300">
        <h3 className="text-xl font-bold text-white">Full Stack Developer & Interactive Designer</h3>
        <p>I build experiences that captivate. I specialize in turning standard web applications into highly interactive, memorable digital journeys.</p>
        <p>With a deep understanding of modern frameworks and rendering engines, I bridge the gap between heavy backend logic and breathtaking frontend interfaces.</p>
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
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> TypeScript / JavaScript</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> Tailwind CSS & Framer Motion</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> HTML5 Canvas / Three.js</li>
          </ul>
        </div>
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#00ff66]/50 transition-colors">
          <h4 className="text-[#00ff66] font-bold mb-3 text-sm tracking-widest">BACKEND</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> Node.js & Express</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> Python & FastAPI</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> PostgreSQL & MongoDB</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></div> Docker, CI/CD, AWS</li>
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
            <h4 className="text-white font-bold text-lg group-hover:text-[#b026ff] transition-colors">Neon Runner Engine</h4>
            <span className="text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded">2023</span>
          </div>
          <p className="text-xs text-gray-400 mb-3 font-mono">HTML5 Canvas • Vanilla JS • Physics</p>
          <p className="text-sm text-gray-300">A custom-built 2D physics engine for endless runner games, optimized to run at 60fps on mobile browsers.</p>
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
          <h3 className="text-2xl font-bold text-white mb-2">Ready for Lift-Off?</h3>
          <p className="text-gray-400">Looking for a creative engineer to propel your next project? Let's initiate the launch sequence.</p>
        </div>
        
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a href="#" className="flex items-center justify-between group bg-[#ff9d00]/10 hover:bg-[#ff9d00]/20 text-[#ff9d00] py-4 px-6 rounded-lg border border-[#ff9d00]/50 transition-all font-bold tracking-wide">
            <span className="flex items-center gap-3"><Mail className="w-5 h-5" /> INITIATE EMAIL</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" className="flex items-center justify-between group bg-white/5 hover:bg-white/10 text-white py-4 px-6 rounded-lg border border-white/20 transition-all font-bold tracking-wide">
            <span className="flex items-center gap-3"><Terminal className="w-5 h-5" /> GITHUB REPOSITORY</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    )
  }
];

// Game Configuration
const GAME_WIDTH = 1000;
const GAME_HEIGHT = 600;
const GRAVITY = 0.5;
const THRUST = 0.9;
const TERMINAL_VELOCITY = 12;

export default function NeonRunPortfolio() {
  const [gameState, setGameState] = useState('start'); // start, playing, paused, gameover, win
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [shields, setShields] = useState(3);
  const [unlockedNodes, setUnlockedNodes] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  
  const canvasRef = useRef(null);
  const requestRef = useRef();
  
  // Input tracking
  const isThrusting = useRef(false);

  // The core mutable game engine state
  const engine = useRef({
    player: { x: 150, y: GAME_HEIGHT / 2, vy: 0, width: 40, height: 30, invincibleTime: 0 },
    scrollSpeed: 6,
    distanceTraveled: 0,
    particles: [],
    lasers: [],
    coins: [],
    vaults: [],
    shakeTime: 0,
    lastTime: 0,
    framesSinceLastSpawn: 0,
    bgOffset: 0
  });

  // Input Listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        isThrusting.current = true;
        e.preventDefault();
      }
    };
    const handleKeyUp = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        isThrusting.current = false;
      }
    };

    const handleTouchStart = (e) => { 
        if (gameState === 'playing') {
            isThrusting.current = true; 
            // e.preventDefault(); // Prevent scrolling while playing
        }
    };
    const handleTouchEnd = (e) => { isThrusting.current = false; };
    const handleMouseDown = (e) => { 
        if(e.button === 0 && gameState === 'playing') isThrusting.current = true; 
    };
    const handleMouseUp = (e) => { 
        if(e.button === 0) isThrusting.current = false; 
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [gameState]);

  const spawnParticles = (x, y, color, count, speedFactor = 1) => {
    const state = engine.current;
    for (let i = 0; i < count; i++) {
      state.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 10 * speedFactor - (state.scrollSpeed * 0.5), // inherit some backward momentum
        vy: (Math.random() - 0.5) * 10 * speedFactor,
        life: 1,
        decay: Math.random() * 0.02 + 0.02,
        color,
        size: Math.random() * 4 + 2
      });
    }
  };

  const spawnEntities = useCallback(() => {
    const state = engine.current;
    state.framesSinceLastSpawn++;

    // Increase difficulty over time
    if (state.distanceTraveled % 1000 === 0 && state.scrollSpeed < 15) {
        state.scrollSpeed += 0.5;
    }

    // Spawn Lasers (Obstacles)
    if (state.framesSinceLastSpawn > Math.max(40, 100 - (state.scrollSpeed * 2))) {
        if (Math.random() > 0.3) {
            // Random Y position, ensuring it's not totally impossible to dodge
            const h = Math.random() * 150 + 100;
            const y = Math.random() * (GAME_HEIGHT - h);
            state.lasers.push({
                x: GAME_WIDTH + 50,
                y: y,
                width: 20,
                height: h,
                passed: false
            });
            state.framesSinceLastSpawn = 0;
        }
    }

    // Spawn Coins (Data Shards)
    if (Math.random() < 0.05) {
        state.coins.push({
            x: GAME_WIDTH + 50,
            y: Math.random() * (GAME_HEIGHT - 100) + 50,
            size: 15,
            sinOffset: Math.random() * Math.PI * 2
        });
    }

    // Spawn Vaults (Portfolio Nodes) - Spawns periodically if nodes are left
    const unlockedCount = unlockedNodes.length;
    // Spawn vaults at rough distance intervals (1500, 3000, 4500, etc.)
    if (unlockedCount < PORTFOLIO_NODES.length && !state.vaults.length) {
        const nextNode = PORTFOLIO_NODES[unlockedCount];
        // Target specific distances for vaults
        const targetDistance = (unlockedCount + 1) * 1500;
        
        if (state.distanceTraveled > targetDistance) {
            state.vaults.push({
                x: GAME_WIDTH + 100,
                y: GAME_HEIGHT / 2 - 40,
                width: 80,
                height: 80,
                nodeData: nextNode,
                color: nextNode.color,
                pulse: 0
            });
        }
    }

  }, [unlockedNodes]);

  const updateAndDraw = useCallback((timestamp) => {
    if (gameState !== 'playing') {
      requestRef.current = requestAnimationFrame(updateAndDraw);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const state = engine.current;

    // --- PHYSICS & LOGIC ---
    state.distanceTraveled += state.scrollSpeed;
    
    // Player Physics
    if (isThrusting.current) {
        state.player.vy -= THRUST;
        // Thruster particles
        if (Math.random() > 0.5) {
            spawnParticles(state.player.x, state.player.y + state.player.height, '#ff9d00', 1, 0.5);
        }
    } else {
        state.player.vy += GRAVITY;
    }

    // Terminal velocity
    if (state.player.vy > TERMINAL_VELOCITY) state.player.vy = TERMINAL_VELOCITY;
    if (state.player.vy < -TERMINAL_VELOCITY) state.player.vy = -TERMINAL_VELOCITY;

    state.player.y += state.player.vy;

    // Invincibility ticks
    if (state.player.invincibleTime > 0) {
        state.player.invincibleTime--;
    }

    // Screen Bounds
    if (state.player.y < 0) {
        state.player.y = 0;
        state.player.vy = 0;
    }
    if (state.player.y > GAME_HEIGHT - state.player.height) {
        state.player.y = GAME_HEIGHT - state.player.height;
        state.player.vy = 0;
    }

    spawnEntities();

    // Define AABB Collision helper
    const checkCollision = (r1, r2) => {
        return r1.x < r2.x + (r2.width || r2.size*2) &&
               r1.x + r1.width > r2.x &&
               r1.y < r2.y + (r2.height || r2.size*2) &&
               r1.y + r1.height > r2.y;
    };

    // Update Lasers & Collision
    for (let i = state.lasers.length - 1; i >= 0; i--) {
        let l = state.lasers[i];
        l.x -= state.scrollSpeed;

        if (checkCollision(state.player, l) && state.player.invincibleTime <= 0) {
            // Hit laser
            spawnParticles(state.player.x + 20, state.player.y + 15, '#ff0055', 30, 2);
            state.shakeTime = 15;
            
            setShields(prev => {
                const next = prev - 1;
                if (next < 0) {
                    setGameState('gameover');
                    if (Math.floor(state.distanceTraveled / 10) > highScore) {
                        setHighScore(Math.floor(state.distanceTraveled / 10));
                    }
                } else {
                    state.player.invincibleTime = 90; // 1.5 seconds of i-frames
                }
                return next;
            });
            // Don't instantly splice to prevent double hit edge cases, i-frames handles it
        }

        // Add passive score for dodging
        if (!l.passed && l.x + l.width < state.player.x) {
            l.passed = true;
            setScore(s => s + 50);
        }

        if (l.x + l.width < 0) state.lasers.splice(i, 1);
    }

    // Update Coins
    for (let i = state.coins.length - 1; i >= 0; i--) {
        let c = state.coins[i];
        c.x -= state.scrollSpeed;
        c.y += Math.sin(state.distanceTraveled * 0.05 + c.sinOffset) * 2; // Floating effect

        if (checkCollision(state.player, { x: c.x - c.size, y: c.y - c.size, width: c.size*2, height: c.size*2 })) {
            setScore(s => s + 100);
            spawnParticles(c.x, c.y, '#ffff00', 10);
            state.coins.splice(i, 1);
            continue;
        }

        if (c.x + c.size < 0) state.coins.splice(i, 1);
    }

    // Update Vaults
    for (let i = state.vaults.length - 1; i >= 0; i--) {
        let v = state.vaults[i];
        v.x -= state.scrollSpeed;
        v.pulse += 0.1;

        if (checkCollision(state.player, v)) {
            // HIT VAULT!
            setScore(s => s + 1000);
            spawnParticles(v.x + v.width/2, v.y + v.height/2, v.color, 50, 3);
            
            const node = v.nodeData;
            setActiveModal(node);
            setUnlockedNodes(prev => {
                const next = [...prev, node.id];
                if (next.length === PORTFOLIO_NODES.length) {
                    setTimeout(() => setGameState('win'), 800);
                }
                return next;
            });
            
            state.vaults.splice(i, 1);
            setGameState('paused');
            isThrusting.current = false; // reset input
            continue;
        }

        if (v.x + v.width < 0) state.vaults.splice(i, 1);
    }

    // --- RENDERING ---
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, GAME_HEIGHT);
    gradient.addColorStop(0, '#0a001a');
    gradient.addColorStop(1, '#1a0033');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    ctx.save();
    
    // Screen Shake
    if (state.shakeTime > 0) {
        const magnitude = (state.shakeTime / 15) * 10;
        const dx = (Math.random() - 0.5) * magnitude;
        const dy = (Math.random() - 0.5) * magnitude;
        ctx.translate(dx, dy);
        state.shakeTime--;
    }

    // Draw Parallax Grid Floor/Ceiling
    state.bgOffset = (state.bgOffset + state.scrollSpeed * 0.5) % 50;
    ctx.strokeStyle = '#b026ff40';
    ctx.lineWidth = 2;
    ctx.beginPath();
    // Vertical lines
    for(let i = -state.bgOffset; i < GAME_WIDTH; i += 50) {
        ctx.moveTo(i, 0); ctx.lineTo(i, 100);
        ctx.moveTo(i, GAME_HEIGHT - 100); ctx.lineTo(i, GAME_HEIGHT);
    }
    // Horizontal lines
    for(let i = 0; i <= 100; i += 25) {
        ctx.moveTo(0, i); ctx.lineTo(GAME_WIDTH, i);
        ctx.moveTo(0, GAME_HEIGHT - i); ctx.lineTo(GAME_WIDTH, GAME_HEIGHT - i);
    }
    ctx.stroke();

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
            ctx.shadowBlur = 10;
            ctx.shadowColor = pt.color;
            ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        }
    }

    // Draw Lasers
    state.lasers.forEach(l => {
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ff0055';
        ctx.fillStyle = '#ff005580';
        ctx.fillRect(l.x, l.y, l.width, l.height);
        ctx.fillStyle = '#fff';
        ctx.fillRect(l.x + l.width/2 - 2, l.y, 4, l.height); // bright core
        ctx.shadowBlur = 0;
    });

    // Draw Coins
    state.coins.forEach(c => {
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ffff00';
        ctx.fillStyle = '#ffff00';
        ctx.beginPath();
        ctx.moveTo(c.x, c.y - c.size);
        ctx.lineTo(c.x + c.size, c.y);
        ctx.lineTo(c.x, c.y + c.size);
        ctx.lineTo(c.x - c.size, c.y);
        ctx.fill();
        ctx.shadowBlur = 0;
    });

    // Draw Vaults
    state.vaults.forEach(v => {
        const pulseAnim = Math.sin(v.pulse) * 5;
        ctx.shadowBlur = 30 + pulseAnim;
        ctx.shadowColor = v.color;
        
        ctx.strokeStyle = v.color;
        ctx.lineWidth = 3;
        ctx.strokeRect(v.x - pulseAnim/2, v.y - pulseAnim/2, v.width + pulseAnim, v.height + pulseAnim);
        
        ctx.fillStyle = `${v.color}40`;
        ctx.fillRect(v.x, v.y, v.width, v.height);
        
        // Inner core
        ctx.fillStyle = '#fff';
        ctx.fillRect(v.x + 20, v.y + 20, v.width - 40, v.height - 40);
        ctx.shadowBlur = 0;
    });

    // Draw Player
    // Blink if invincible
    if (state.player.invincibleTime <= 0 || Math.floor(state.player.invincibleTime / 5) % 2 === 0) {
        const p = state.player;
        ctx.save();
        ctx.translate(p.x + p.width/2, p.y + p.height/2);
        
        // Tilt ship based on velocity
        const tilt = Math.max(-0.5, Math.min(0.5, p.vy * 0.05));
        ctx.rotate(tilt);

        ctx.shadowBlur = 20;
        ctx.shadowColor = '#00f3ff';
        
        // Ship Body (Triangle)
        ctx.fillStyle = '#00f3ff';
        ctx.beginPath();
        ctx.moveTo(p.width/2, 0); // Nose
        ctx.lineTo(-p.width/2, -p.height/2); // Top tail
        ctx.lineTo(-p.width/3, 0); // Engine indent
        ctx.lineTo(-p.width/2, p.height/2); // Bottom tail
        ctx.closePath();
        ctx.fill();

        // Engine core
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(-p.width/3, 0, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    ctx.restore();
    requestRef.current = requestAnimationFrame(updateAndDraw);
  }, [gameState, unlockedNodes, spawnEntities]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateAndDraw);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updateAndDraw]);

  const startGame = () => {
    const state = engine.current;
    state.player = { x: 150, y: GAME_HEIGHT / 2, vy: 0, width: 40, height: 30, invincibleTime: 60 };
    state.scrollSpeed = 6;
    state.distanceTraveled = 0;
    state.particles = [];
    state.lasers = [];
    state.coins = [];
    state.vaults = [];
    state.framesSinceLastSpawn = 0;
    
    setScore(0);
    setShields(3);
    setUnlockedNodes([]);
    setActiveModal(null);
    setGameState('playing');
  };

  const resumeGame = () => {
    setActiveModal(null);
    engine.current.player.invincibleTime = 60; // 1 second of safety after closing modal
    setGameState('playing');
  };

  return (
    <div className="min-h-screen bg-[#05000a] flex items-center justify-center p-2 md:p-6 font-sans select-none overflow-hidden touch-none">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#b026ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00f3ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
      </div>

      <div className="relative w-full max-w-5xl flex flex-col gap-4 z-10">
        
        {/* --- HUD --- */}
        <div className="flex justify-between items-end px-2">
            <div>
                <h1 className="text-2xl md:text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#b026ff] to-[#00f3ff] uppercase mb-1 drop-shadow-[0_0_10px_rgba(176,38,255,0.5)]">
                    NEON_RUN
                </h1>
                <p className="text-[10px] md:text-xs text-gray-400 font-mono tracking-widest">PORTFOLIO PROTOCOL // V3.0</p>
            </div>

            <div className="flex gap-4 md:gap-8 items-center bg-white/5 border border-[#b026ff]/30 rounded-lg px-4 md:px-6 py-2 md:py-3 shadow-[0_0_15px_rgba(176,38,255,0.1)]">
                {/* Health / Shields */}
                <div className="flex flex-col items-center mr-2 md:mr-4">
                    <span className="text-[8px] md:text-[10px] text-gray-400 font-mono tracking-widest mb-1">INTEGRITY</span>
                    <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                            <Shield key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i <= shields ? 'text-[#00ff66] drop-shadow-[0_0_5px_#00ff66]' : 'text-gray-700'}`} fill={i <= shields ? "currentColor" : "none"} />
                        ))}
                    </div>
                </div>

                <div className="w-px h-6 md:h-8 bg-white/20"></div>
                
                <div className="flex flex-col items-center">
                    <span className="text-[8px] md:text-[10px] text-gray-400 font-mono tracking-widest flex items-center gap-1"><Trophy className="w-3 h-3 text-[#ff9d00]"/> MAX</span>
                    <span className="text-sm md:text-xl font-bold text-gray-400 font-mono leading-none">
                        {highScore.toString().padStart(6, '0')}
                    </span>
                </div>

                <div className="w-px h-6 md:h-8 bg-white/20"></div>
                
                <div className="flex flex-col items-center">
                    <span className="text-[8px] md:text-[10px] text-[#00f3ff] font-mono tracking-widest">DISTANCE / DATA</span>
                    <span className="text-lg md:text-2xl font-black text-white font-mono leading-none drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">
                        {Math.floor((engine.current?.distanceTraveled || 0) / 10 + score).toString().padStart(6, '0')}
                    </span>
                </div>
            </div>
        </div>

        {/* --- GAME CANVAS CONTAINER --- */}
        <div className="relative w-full aspect-[16/9] md:aspect-[10/6] bg-[#05000a] rounded-xl overflow-hidden border-2 border-[#b026ff]/40 shadow-[0_0_30px_rgba(176,38,255,0.2)]">
            <canvas 
                ref={canvasRef} 
                width={GAME_WIDTH} 
                height={GAME_HEIGHT}
                className="w-full h-full block cursor-crosshair"
                onContextMenu={(e) => e.preventDefault()}
            />

            {/* --- OVERLAYS --- */}
            
            {/* START SCREEN */}
            {gameState === 'start' && (
                <div className="absolute inset-0 bg-[#0a001a]/90 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="bg-[#1a0033]/80 border-2 border-[#b026ff] p-6 md:p-10 rounded-2xl max-w-lg w-full text-center shadow-[0_0_50px_rgba(176,38,255,0.3)] relative overflow-hidden">
                        <Zap className="w-12 h-12 md:w-16 md:h-16 text-[#00f3ff] mx-auto mb-4 md:mb-6" />
                        <h2 className="text-2xl md:text-4xl font-black mb-2 text-white tracking-widest uppercase">System Online</h2>
                        <p className="text-gray-300 font-mono text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
                            Welcome to the Neon Protocol. Navigate the data stream to extract portfolio records. 
                        </p>
                        
                        <div className="bg-black/50 rounded-lg p-4 mb-6 md:mb-8 text-left border border-[#b026ff]/30 text-xs md:text-sm font-mono text-gray-300 shadow-inner">
                            <span className="text-[#ff9d00] block mb-2 font-bold tracking-widest">HOW TO FLY:</span>
                            • <strong className="text-white">Hold Spacebar, Mouse Click, or Touch</strong> to fire thrusters and ascend.<br/>
                            • Release to descend.<br/>
                            • Dodge the red lasers. Collect data shards. <br/>
                            • <strong className="text-[#00f3ff]">Smash into Data Vaults to unlock portfolio nodes.</strong>
                        </div>

                        <button 
                            onClick={startGame}
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-[#b026ff] to-[#00f3ff] rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,243,255,0.5)] w-full border border-white/20"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[150%] group-hover:h-56 opacity-20"></span>
                            <span className="relative flex items-center gap-2 tracking-widest uppercase text-lg">
                                <Play className="w-5 h-5 fill-current" /> Ignite Thrusters
                            </span>
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL (PAUSED / DATA NODE) */}
            {gameState === 'paused' && activeModal && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 z-50">
                    <div 
                        className="w-full max-w-2xl bg-[#0a0a15] rounded-xl overflow-hidden border-2 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90%]"
                        style={{ borderColor: activeModal.color, boxShadow: `0 0 50px ${activeModal.color}40` }}
                    >
                        {/* Header */}
                        <div className="px-4 py-4 md:px-6 md:py-5 border-b border-white/10 flex justify-between items-center shrink-0" style={{ backgroundColor: `${activeModal.color}15` }}>
                            <h2 className="text-xl md:text-3xl font-black font-mono tracking-widest flex items-center gap-3 drop-shadow-md" style={{ color: activeModal.color }}>
                                {activeModal.icon}
                                {activeModal.title}
                            </h2>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5 md:p-8 flex-1 overflow-y-auto bg-gradient-to-b from-transparent to-black/80 text-base md:text-lg custom-scrollbar">
                            {activeModal.content}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-4 md:px-6 md:py-5 bg-black border-t border-white/10 flex justify-between items-center shrink-0">
                            <span className="text-[10px] md:text-xs text-gray-500 font-mono tracking-widest">
                                NODES UNLOCKED: <span className="text-white">{unlockedNodes.length} / 4</span>
                            </span>
                            <button 
                                onClick={resumeGame}
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-bold font-mono text-sm md:text-base tracking-widest border border-white/20 hover:border-white/50"
                            >
                                RESUME FLIGHT <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* GAME OVER SCREEN */}
            {gameState === 'gameover' && (
                <div className="absolute inset-0 bg-red-950/90 backdrop-blur-md flex items-center justify-center p-6 z-50">
                    <div className="text-center bg-black/50 p-8 rounded-2xl border border-red-500/50 shadow-[0_0_50px_rgba(255,0,0,0.2)]">
                        <ShieldAlert className="w-16 h-16 md:w-20 md:h-20 text-red-500 mx-auto mb-4 animate-pulse drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-widest">HULL BREACH</h2>
                        <p className="text-red-400 font-mono mb-8 text-sm md:text-lg">Integrity critical. Ship destroyed.</p>
                        
                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-8 inline-block">
                            <p className="text-xs text-gray-400 font-mono mb-1">FINAL SCORE</p>
                            <p className="text-3xl font-black text-white font-mono">{Math.floor((engine.current?.distanceTraveled || 0) / 10 + score)}</p>
                        </div>

                        <button 
                            onClick={startGame}
                            className="flex items-center mx-auto gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors font-bold font-mono tracking-widest text-sm md:text-base shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                        >
                            <RotateCcw className="w-5 h-5" /> REBOOT SYSTEM
                        </button>
                    </div>
                </div>
            )}

            {/* WIN SCREEN */}
            {gameState === 'win' && (
                <div className="absolute inset-0 bg-[#0a001a]/95 backdrop-blur-xl flex items-center justify-center p-6 z-50">
                    <div className="text-center max-w-2xl w-full">
                        <Terminal className="w-20 h-20 md:w-24 md:h-24 text-[#00ff66] mx-auto mb-6 drop-shadow-[0_0_20px_rgba(0,255,102,0.8)]" />
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-2 md:mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#00ff66] to-white">
                            DOWNLOAD COMPLETE
                        </h2>
                        <p className="text-[#00ff66] font-mono mb-8 md:mb-10 text-sm md:text-xl tracking-widest">All portfolio data securely extracted.</p>
                        
                        <div className="inline-block bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl mb-8 md:mb-10 shadow-[0_0_30px_rgba(0,255,102,0.1)]">
                            <div className="text-xs md:text-sm text-gray-400 font-mono mb-1">FINAL SCORE</div>
                            <div className="text-5xl md:text-6xl font-black text-[#00ff66] font-mono drop-shadow-[0_0_10px_rgba(0,255,102,0.5)]">
                                {Math.floor((engine.current?.distanceTraveled || 0) / 10 + score)}
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={startGame}
                                className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-bold font-mono border border-white/20"
                            >
                                <RotateCcw className="w-5 h-5" /> FLY AGAIN
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
        {/* --- BOTTOM SECTION: Node Tracker --- */}
        <div className="flex justify-center md:justify-start items-center mt-2">
            <div className="flex gap-3 md:gap-4">
                {PORTFOLIO_NODES.map((node) => {
                    const isUnlocked = unlockedNodes.includes(node.id);
                    return (
                        <div 
                            key={node.id} 
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center border-2 transition-all duration-500 ${
                                isUnlocked ? 'bg-black text-white scale-100 rotate-0' : 'bg-transparent border-[#b026ff]/30 text-[#b026ff]/30 scale-90 -rotate-12'
                            }`}
                            style={{ 
                                borderColor: isUnlocked ? node.color : '',
                                boxShadow: isUnlocked ? `0 0 20px ${node.color}60` : '',
                                backgroundColor: isUnlocked ? `${node.color}15` : ''
                            }}
                        >
                            {React.cloneElement(node.icon, { className: 'w-6 h-6 md:w-7 md:h-7 drop-shadow-md' })}
                        </div>
                    );
                })}
            </div>
            
            <div className="hidden md:block ml-auto text-right text-gray-500 font-mono text-sm border border-gray-800 bg-black/50 px-4 py-2 rounded-lg">
                Hold <kbd className="bg-gray-800 px-2 py-1 rounded text-[#00f3ff] font-bold mx-1">SPACE</kbd> or <kbd className="bg-gray-800 px-2 py-1 rounded text-[#00f3ff] font-bold mx-1">CLICK</kbd> to Thrust
            </div>
        </div>

      </div>

        {/* Global style for custom scrollbar in modal */}
        <style dangerouslySetInnerHTML={{__html: `
            .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.4);
            }
        `}} />
    </div>
  );
}