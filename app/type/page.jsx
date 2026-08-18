"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Terminal, User, Code, Mail, Play, RotateCcw, ChevronRight, ShieldAlert, Cpu, Award } from 'lucide-react';

const PORTFOLIO_NODES = [
  {
    id: 'origin',
    title: 'SYS.ADMIN // ORIGIN',
    color: '#00f3ff', // Neon Blue
    icon: <User className="w-6 h-6" />,
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
    icon: <Cpu className="w-6 h-6" />,
    content: (
      <div className="grid grid-cols-2 gap-4">
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
    icon: <Code className="w-6 h-6" />,
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
    icon: <Mail className="w-6 h-6" />,
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
            <span className="flex items-center gap-3"><Terminal className="w-5 h-5" /> GITHUB REPOSITORY</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    )
  }
];

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 700;

export default function BreakoutPortfolio() {
  const [gameState, setGameState] = useState('start'); // start, playing, paused, gameover, win
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [unlockedNodes, setUnlockedNodes] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  
  const canvasRef = useRef(null);
  const requestRef = useRef();
  
  // Mutable game engine state for physics and rendering
  const engine = useRef({
    paddle: { x: GAME_WIDTH / 2 - 60, y: GAME_HEIGHT - 40, w: 120, h: 12, speed: 8, dx: 0, color: '#fff' },
    ball: { x: GAME_WIDTH / 2, y: GAME_HEIGHT - 60, radius: 8, speed: 6, dx: 0, dy: 0, active: false, trail: [] },
    bricks: [],
    particles: [],
    shakeTime: 0,
    keys: { ArrowLeft: false, ArrowRight: false, a: false, d: false, Space: false }
  });

  const initLevel = useCallback(() => {
    const state = engine.current;
    state.bricks = [];
    
    const rows = 6;
    const cols = 10;
    const brickWidth = 80;
    const brickHeight = 25;
    const padding = 12;
    const offsetX = (GAME_WIDTH - (cols * (brickWidth + padding) - padding)) / 2;
    const offsetY = 80;

    // Pick 4 unique random positions for the portfolio nodes
    let portfolioPositions = new Set();
    while (portfolioPositions.size < 4) {
      portfolioPositions.add(Math.floor(Math.random() * (rows * cols)));
    }
    const portfolioArray = Array.from(portfolioPositions);

    let brickIndex = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = offsetX + c * (brickWidth + padding);
        const y = offsetY + r * (brickHeight + padding);
        
        let type = 'normal';
        let color = `hsl(${200 + r * 15}, 80%, 60%)`; // Gradient of blues/purples
        let nodeData = null;

        // Check if this brick should be a portfolio vault
        const pIndex = portfolioArray.indexOf(brickIndex);
        if (pIndex !== -1) {
          type = 'vault';
          nodeData = PORTFOLIO_NODES[pIndex];
          color = nodeData.color;
        }

        // Only add if it hasn't been unlocked yet (for restarts)
        if (type === 'normal' || (type === 'vault' && !unlockedNodes.includes(nodeData.id))) {
           state.bricks.push({
             x, y, w: brickWidth, h: brickHeight, 
             status: 1, type, color, nodeData
           });
        }
        
        brickIndex++;
      }
    }

    resetBall();
  }, [unlockedNodes]);

  const resetBall = () => {
    const state = engine.current;
    state.ball.x = state.paddle.x + state.paddle.w / 2;
    state.ball.y = state.paddle.y - state.ball.radius - 2;
    state.ball.dx = 0;
    state.ball.dy = 0;
    state.ball.active = false;
    state.ball.trail = [];
  };

  const launchBall = () => {
    const state = engine.current;
    if (!state.ball.active) {
      state.ball.active = true;
      state.ball.dy = -state.ball.speed;
      // Launch slightly left or right randomly
      state.ball.dx = (Math.random() > 0.5 ? 1 : -1) * (state.ball.speed * 0.5); 
    }
  };

  const spawnParticles = (x, y, color, count) => {
    const state = engine.current;
    for (let i = 0; i < count; i++) {
      state.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        life: 1,
        decay: Math.random() * 0.04 + 0.02,
        color,
        size: Math.random() * 4 + 2
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => { 
        if (engine.current.keys.hasOwnProperty(e.code)) engine.current.keys[e.code] = true; 
        if (engine.current.keys.hasOwnProperty(e.key)) engine.current.keys[e.key] = true; 
        
        if (e.code === 'Space' && gameState === 'playing') launchBall();
    };
    const handleKeyUp = (e) => { 
        if (engine.current.keys.hasOwnProperty(e.code)) engine.current.keys[e.code] = false; 
        if (engine.current.keys.hasOwnProperty(e.key)) engine.current.keys[e.key] = false; 
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState]);

  // Handle Mouse movement for paddle
  const handleMouseMove = (e) => {
    if (gameState !== 'playing') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    // Scale mouse position to internal game resolution
    const scaleX = GAME_WIDTH / rect.width;
    const mouseX = (e.clientX - rect.left) * scaleX;
    
    const state = engine.current;
    // Center paddle on mouse
    state.paddle.x = mouseX - state.paddle.w / 2;
    
    // Clamp to screen
    if (state.paddle.x < 0) state.paddle.x = 0;
    if (state.paddle.x + state.paddle.w > GAME_WIDTH) state.paddle.x = GAME_WIDTH - state.paddle.w;
  };

  const updateAndDraw = useCallback(() => {
    if (gameState !== 'playing') {
      requestRef.current = requestAnimationFrame(updateAndDraw);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const state = engine.current;

    // --- PHYSICS & LOGIC ---

    // Keyboard Paddle Movement
    if (state.keys.ArrowLeft || state.keys.a) {
      state.paddle.x -= state.paddle.speed;
    }
    if (state.keys.ArrowRight || state.keys.d) {
      state.paddle.x += state.paddle.speed;
    }
    
    // Clamp Paddle
    if (state.paddle.x < 0) state.paddle.x = 0;
    if (state.paddle.x + state.paddle.w > GAME_WIDTH) state.paddle.x = GAME_WIDTH - state.paddle.w;

    // Ball Movement
    if (state.ball.active) {
      state.ball.x += state.ball.dx;
      state.ball.y += state.ball.dy;

      // Trail
      state.ball.trail.push({ x: state.ball.x, y: state.ball.y });
      if (state.ball.trail.length > 8) state.ball.trail.shift();

      // Wall Collisions
      if (state.ball.x - state.ball.radius < 0) {
        state.ball.x = state.ball.radius;
        state.ball.dx = -state.ball.dx;
      }
      if (state.ball.x + state.ball.radius > GAME_WIDTH) {
        state.ball.x = GAME_WIDTH - state.ball.radius;
        state.ball.dx = -state.ball.dx;
      }
      if (state.ball.y - state.ball.radius < 0) {
        state.ball.y = state.ball.radius;
        state.ball.dy = -state.ball.dy;
      }

      // Bottom Wall (Death)
      if (state.ball.y + state.ball.radius > GAME_HEIGHT) {
        setLives(l => {
            const newLives = l - 1;
            if (newLives <= 0) setGameState('gameover');
            return newLives;
        });
        state.shakeTime = 15;
        resetBall();
      }

      // Paddle Collision
      if (state.ball.y + state.ball.radius > state.paddle.y && 
          state.ball.y - state.ball.radius < state.paddle.y + state.paddle.h &&
          state.ball.x > state.paddle.x && 
          state.ball.x < state.paddle.x + state.paddle.w) {
            
        // Calculate angle based on where it hit the paddle
        let hitPoint = state.ball.x - (state.paddle.x + state.paddle.w / 2);
        hitPoint = hitPoint / (state.paddle.w / 2); // Normalized between -1 and 1
        
        const maxAngle = Math.PI / 3; // 60 degrees
        const angle = hitPoint * maxAngle;
        
        // Speed up slightly on paddle hit, max out at 12
        state.ball.speed = Math.min(state.ball.speed + 0.1, 12);
        
        state.ball.dx = state.ball.speed * Math.sin(angle);
        state.ball.dy = -state.ball.speed * Math.cos(angle);
        
        // Fix position to prevent sticking
        state.ball.y = state.paddle.y - state.ball.radius;
        
        // Spark effect
        spawnParticles(state.ball.x, state.ball.y + state.ball.radius, '#fff', 5);
      }

      // Brick Collision
      let allBricksCleared = true;
      for (let i = 0; i < state.bricks.length; i++) {
        let b = state.bricks[i];
        if (b.status === 1) {
          allBricksCleared = false;
          // Simple AABB vs Circle approximation
          let testX = state.ball.x;
          let testY = state.ball.y;
          
          if (state.ball.x < b.x) testX = b.x;
          else if (state.ball.x > b.x + b.w) testX = b.x + b.w;
          if (state.ball.y < b.y) testY = b.y;
          else if (state.ball.y > b.y + b.h) testY = b.y + b.h;

          let distX = state.ball.x - testX;
          let distY = state.ball.y - testY;
          let distance = Math.sqrt((distX*distX) + (distY*distY));

          if (distance <= state.ball.radius) {
            // Collision!
            b.status = 0;
            spawnParticles(b.x + b.w/2, b.y + b.h/2, b.color, b.type === 'vault' ? 30 : 10);
            
            // Determine bounce direction
            if (testX === b.x || testX === b.x + b.w) {
               state.ball.dx = -state.ball.dx; 
            } else {
               state.ball.dy = -state.ball.dy;
            }

            // Game Logic
            if (b.type === 'vault') {
                // Hit a portfolio node!
                setScore(s => s + 500);
                setActiveModal(b.nodeData);
                setUnlockedNodes(prev => {
                    const next = [...prev, b.nodeData.id];
                    // Check absolute Win condition here (all 4 collected)
                    if (next.length === PORTFOLIO_NODES.length) {
                        setTimeout(() => setGameState('win'), 1000);
                    }
                    return next;
                });
                setGameState('paused');
                state.ball.active = false; // Reset ball for when they return
            } else {
                setScore(s => s + 50);
            }
          }
        }
      }
      
      // Secondary win condition (cleared normal bricks but missed a vault? Highly unlikely with setup, but safe fallback)
      if (allBricksCleared && unlockedNodes.length === PORTFOLIO_NODES.length) {
          setGameState('win');
      }
    } else {
        // Ball follows paddle when inactive
        state.ball.x = state.paddle.x + state.paddle.w / 2;
    }

    // --- RENDERING ---
    
    // Setup Context
    ctx.fillStyle = '#050510'; // Deep space blue/black
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

    // Draw Grid (Cyberpunk background)
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i = 0; i < GAME_WIDTH; i += 50) {
        ctx.moveTo(i, 0); ctx.lineTo(i, GAME_HEIGHT);
    }
    for(let i = 0; i < GAME_HEIGHT; i += 50) {
        ctx.moveTo(0, i); ctx.lineTo(GAME_WIDTH, i);
    }
    ctx.stroke();

    // Draw Bricks
    const time = Date.now() / 200;
    for (let b of state.bricks) {
      if (b.status === 1) {
        if (b.type === 'vault') {
            // Data Vault (Glows, pulsates, has icon)
            const pulse = Math.sin(time + b.x) * 0.2 + 0.8;
            ctx.shadowBlur = 20 * pulse;
            ctx.shadowColor = b.color;
            ctx.fillStyle = `${b.color}40`; // Transparent fill
            ctx.strokeStyle = b.color;
            ctx.lineWidth = 2;
            
            ctx.fillRect(b.x, b.y, b.w, b.h);
            ctx.strokeRect(b.x, b.y, b.w, b.h);
            
            // Draw cross hatch or pattern inside
            ctx.beginPath();
            ctx.moveTo(b.x, b.y); ctx.lineTo(b.x + b.w, b.y + b.h);
            ctx.moveTo(b.x + b.w, b.y); ctx.lineTo(b.x, b.y + b.h);
            ctx.strokeStyle = `${b.color}80`;
            ctx.stroke();
            
            ctx.shadowBlur = 0;
        } else {
            // Normal Firewall Brick
            ctx.fillStyle = '#111122';
            ctx.strokeStyle = b.color;
            ctx.lineWidth = 1.5;
            
            ctx.fillRect(b.x, b.y, b.w, b.h);
            
            // Top highlight
            ctx.beginPath();
            ctx.moveTo(b.x, b.y);
            ctx.lineTo(b.x + b.w, b.y);
            ctx.strokeStyle = '#fff';
            ctx.stroke();
            
            ctx.strokeStyle = b.color;
            ctx.strokeRect(b.x, b.y, b.w, b.h);
        }
      }
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
            ctx.shadowBlur = 10;
            ctx.shadowColor = pt.color;
            ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        }
    }

    // Draw Paddle
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#00f3ff';
    ctx.fillStyle = '#111';
    ctx.fillRect(state.paddle.x, state.paddle.y, state.paddle.w, state.paddle.h);
    
    // Paddle core
    ctx.fillStyle = '#00f3ff';
    ctx.fillRect(state.paddle.x + 10, state.paddle.y + 3, state.paddle.w - 20, state.paddle.h - 6);
    ctx.shadowBlur = 0;

    // Draw Ball Trail
    if (state.ball.active) {
        for (let i = 0; i < state.ball.trail.length; i++) {
            const ratio = i / state.ball.trail.length;
            ctx.globalAlpha = ratio * 0.5;
            ctx.fillStyle = '#ff0055';
            const tr = state.ball.trail[i];
            const r = state.ball.radius * ratio;
            ctx.beginPath();
            ctx.arc(tr.x, tr.y, r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    // Draw Ball
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#ff0055';
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(state.ball.x, state.ball.y, state.ball.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Launch prompt
    if (!state.ball.active && gameState === 'playing') {
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'center';
        // Pulse alpha
        ctx.globalAlpha = Math.sin(Date.now() / 200) * 0.5 + 0.5;
        ctx.fillText("CLICK OR PRESS SPACE TO LAUNCH", GAME_WIDTH / 2, state.paddle.y - 40);
        ctx.globalAlpha = 1;
    }

    ctx.restore();

    requestRef.current = requestAnimationFrame(updateAndDraw);
  }, [gameState, unlockedNodes]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateAndDraw);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updateAndDraw]);

  const startGame = () => {
    setScore(0);
    setLives(3);
    setUnlockedNodes([]);
    initLevel();
    setGameState('playing');
  };

  const resumeGame = () => {
    setActiveModal(null);
    setGameState('playing');
    resetBall(); // Ensure they have to relaunch after reading
  };

  return (
    <div className="min-h-screen bg-[#020205] flex items-center justify-center p-4 font-sans select-none text-white overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00f3ff] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#b026ff] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>

      <div className="relative w-full max-w-5xl flex flex-col gap-4 z-10">
        
        {/* --- HUD --- */}
        <div className="flex justify-between items-end px-2">
            <div>
                <h1 className="text-2xl md:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#b026ff] uppercase mb-1">
                    System_Breach
                </h1>
                <p className="text-xs text-gray-500 font-mono">PORTFOLIO DECRYPTION PROTOCOL v1.0</p>
            </div>

            <div className="flex gap-8 items-center bg-white/5 border border-white/10 rounded-lg px-6 py-3">
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 font-mono tracking-widest">DATA EXTRACTED</span>
                    <span className="text-xl font-black text-white font-mono leading-none flex items-center gap-2">
                        {score.toString().padStart(5, '0')}
                    </span>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 font-mono tracking-widest">CONNECTION LIVES</span>
                    <div className="flex gap-1 mt-1">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`w-3 h-3 rounded-full ${i <= lives ? 'bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]' : 'bg-gray-800'}`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* --- GAME CANVAS CONTAINER --- */}
        <div 
            className="relative w-full aspect-[10/7] bg-[#050510] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00f3ff]/5 cursor-crosshair"
            onMouseMove={handleMouseMove}
            onClick={() => { if(gameState === 'playing') launchBall(); }}
        >
            <canvas 
                ref={canvasRef} 
                width={GAME_WIDTH} 
                height={GAME_HEIGHT}
                className="w-full h-full block"
            />

            {/* --- OVERLAYS --- */}
            
            {/* START SCREEN */}
            {gameState === 'start' && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
                    <div className="bg-[#0a0a15] border border-white/20 p-10 rounded-2xl max-w-lg w-full text-center shadow-2xl relative overflow-hidden">
                        <ShieldAlert className="w-16 h-16 text-[#00f3ff] mx-auto mb-6" />
                        <h2 className="text-3xl font-black mb-2 text-white tracking-wider">FIREWALL DETECTED</h2>
                        <p className="text-gray-400 font-mono text-sm mb-8 leading-relaxed">
                            Access to portfolio databanks is restricted. Use the decryption paddle to breach the firewall and extract the 4 glowing Data Vaults.
                        </p>
                        
                        <div className="bg-white/5 rounded-lg p-4 mb-8 text-left border border-white/5 text-sm font-mono text-gray-300">
                            <span className="text-[#00f3ff] block mb-2 font-bold">CONTROLS:</span>
                            • Mouse to move paddle<br/>
                            • Click or Spacebar to launch payload<br/>
                            • Keyboard Left/Right arrows also supported
                        </div>

                        <button 
                            onClick={startGame}
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-[#00f3ff] rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,243,255,0.4)] w-full"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-[150%] group-hover:h-56 opacity-20"></span>
                            <span className="relative flex items-center gap-2 tracking-widest uppercase">
                                <Play className="w-5 h-5 fill-current" /> Initialize Breach
                            </span>
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL (PAUSED / DATA NODE) */}
            {gameState === 'paused' && activeModal && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 z-50">
                    <div 
                        className="w-full max-w-2xl bg-[#0a0a15] rounded-xl overflow-hidden border-2 shadow-2xl animate-in zoom-in-95 duration-200"
                        style={{ borderColor: activeModal.color, boxShadow: `0 0 50px ${activeModal.color}40` }}
                    >
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center" style={{ backgroundColor: `${activeModal.color}15` }}>
                            <h2 className="text-2xl font-black font-mono tracking-wider flex items-center gap-3" style={{ color: activeModal.color }}>
                                {activeModal.icon}
                                {activeModal.title}
                            </h2>
                        </div>
                        
                        {/* Content */}
                        <div className="p-8 min-h-[250px] bg-gradient-to-b from-transparent to-black/50">
                            {activeModal.content}
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-5 bg-black border-t border-white/10 flex justify-between items-center">
                            <span className="text-xs text-gray-500 font-mono tracking-widest">
                                VAULTS DECRYPTED: {unlockedNodes.length}/4
                            </span>
                            <button 
                                onClick={resumeGame}
                                className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-bold font-mono tracking-wider"
                            >
                                CONTINUE BREACH <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* GAME OVER SCREEN */}
            {gameState === 'gameover' && (
                <div className="absolute inset-0 bg-red-950/90 backdrop-blur-md flex items-center justify-center p-6 z-50">
                    <div className="text-center">
                        <ShieldAlert className="w-24 h-24 text-red-500 mx-auto mb-6 animate-pulse" />
                        <h2 className="text-5xl font-black text-white mb-4 tracking-widest">CONNECTION LOST</h2>
                        <p className="text-red-400 font-mono mb-8 text-lg">The firewall repelled your attack.</p>
                        <button 
                            onClick={startGame}
                            className="flex items-center mx-auto gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors font-bold font-mono tracking-widest"
                        >
                            <RotateCcw className="w-5 h-5" /> REBOOT SEQUENCE
                        </button>
                    </div>
                </div>
            )}

            {/* WIN SCREEN */}
            {gameState === 'win' && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 z-50">
                    <div className="text-center max-w-2xl w-full">
                        <Award className="w-24 h-24 text-[#00ff66] mx-auto mb-6 drop-shadow-[0_0_15px_rgba(0,255,102,0.8)]" />
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                            SYSTEM COMPROMISED
                        </h2>
                        <p className="text-[#00ff66] font-mono mb-10 text-xl tracking-widest">All portfolio data successfully extracted.</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-10 text-left">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                                <div className="text-xs text-gray-500 font-mono mb-1">FINAL SCORE</div>
                                <div className="text-4xl font-black text-white font-mono">{score}</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                                <div className="text-xs text-gray-500 font-mono mb-1">LIVES REMAINING</div>
                                <div className="text-4xl font-black text-[#00f3ff] font-mono">{lives}</div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={startGame}
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-bold font-mono"
                            >
                                <RotateCcw className="w-4 h-4" /> PLAY AGAIN
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
        
        {/* Node tracker indicator (Bottom) */}
        <div className="flex justify-center gap-3 mt-2">
            {PORTFOLIO_NODES.map((node) => {
                const isUnlocked = unlockedNodes.includes(node.id);
                return (
                    <div 
                        key={node.id} 
                        className={`w-12 h-12 rounded flex items-center justify-center border-2 transition-all duration-500 ${
                            isUnlocked ? 'bg-black text-white scale-100' : 'bg-transparent border-gray-800 text-gray-800 scale-90'
                        }`}
                        style={{ 
                            borderColor: isUnlocked ? node.color : '',
                            boxShadow: isUnlocked ? `0 0 15px ${node.color}40` : ''
                        }}
                    >
                        {node.icon}
                    </div>
                );
            })}
        </div>

      </div>
    </div>
  );
}