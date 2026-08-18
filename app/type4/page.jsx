"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { User, Code, Server, Mail, Play, RotateCcw, ChevronRight, Zap, Crosshair, Sparkles } from 'lucide-react';

const PORTFOLIO_NODES = [
  {
    id: 'origin',
    title: 'SYS.ADMIN // ORIGIN',
    color: '#00f3ff', // Cyan
    icon: <User className="w-8 h-8" />,
    content: (
      <div className="space-y-4 text-gray-300">
        <h3 className="text-xl font-bold text-white">Full Stack Developer & Interactive Designer</h3>
        <p>I build web experiences that feel alive. I specialize in bridging the gap between heavy backend logic and breathtaking frontend interfaces.</p>
        <p>With a deep understanding of modern frameworks and rendering engines, I turn standard web applications into highly interactive, memorable digital journeys.</p>
      </div>
    )
  },
  {
    id: 'stack',
    title: 'CORE // TECH_STACK',
    color: '#ff0066', // Magenta
    icon: <Server className="w-8 h-8" />,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#ff0066]/50 transition-colors">
          <h4 className="text-[#ff0066] font-bold mb-3 text-sm tracking-widest">FRONTEND</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]"></div> React & Next.js</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]"></div> TypeScript / JavaScript</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]"></div> Tailwind CSS & Framer</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]"></div> HTML5 Canvas / WebGL</li>
          </ul>
        </div>
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#ff0066]/50 transition-colors">
          <h4 className="text-[#ff0066] font-bold mb-3 text-sm tracking-widest">BACKEND</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]"></div> Node.js & Express</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]"></div> Python & FastAPI</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]"></div> PostgreSQL / NoSQL</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]"></div> Docker & CI/CD</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'projects',
    title: 'DATABANKS // ARCHIVES',
    color: '#b026ff', // Purple
    icon: <Code className="w-8 h-8" />,
    content: (
      <div className="space-y-4">
        <div className="group bg-black/40 p-5 rounded-lg border border-[#b026ff]/30 hover:bg-[#b026ff]/10 hover:border-[#b026ff] transition-all cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b026ff]/10 rounded-full blur-3xl group-hover:bg-[#b026ff]/20 transition-all"></div>
          <div className="flex justify-between items-start mb-2 relative z-10">
            <h4 className="text-white font-bold text-lg group-hover:text-[#b026ff] transition-colors">Vortex Trading Platform</h4>
            <span className="text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded">2024</span>
          </div>
          <p className="text-xs text-gray-400 mb-3 font-mono relative z-10">React • WebSockets • Go</p>
          <p className="text-sm text-gray-300 relative z-10">A real-time cryptocurrency dashboard handling thousands of websocket updates per second with zero UI lag.</p>
        </div>
        <div className="group bg-black/40 p-5 rounded-lg border border-[#b026ff]/30 hover:bg-[#b026ff]/10 hover:border-[#b026ff] transition-all cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b026ff]/10 rounded-full blur-3xl group-hover:bg-[#b026ff]/20 transition-all"></div>
          <div className="flex justify-between items-start mb-2 relative z-10">
            <h4 className="text-white font-bold text-lg group-hover:text-[#b026ff] transition-colors">Data Drifter Engine</h4>
            <span className="text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded">2023</span>
          </div>
          <p className="text-xs text-gray-400 mb-3 font-mono relative z-10">HTML5 Canvas • Vanilla JS • Physics</p>
          <p className="text-sm text-gray-300 relative z-10">A custom-built 2D physics engine featuring elastic collisions, bullet-time dilation, and vector math.</p>
        </div>
      </div>
    )
  },
  {
    id: 'contact',
    title: 'UPLINK // CONTACT',
    color: '#00ff66', // Green
    icon: <Mail className="w-8 h-8" />,
    content: (
      <div className="text-center space-y-8 py-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Initialize Connection</h3>
          <p className="text-gray-400">Looking for a creative engineer to propel your next project? Let's initiate the handshake protocol.</p>
        </div>
        
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a href="#" className="flex items-center justify-between group bg-[#00ff66]/10 hover:bg-[#00ff66]/20 text-[#00ff66] py-4 px-6 rounded-lg border border-[#00ff66]/50 transition-all font-bold tracking-wide">
            <span className="flex items-center gap-3"><Mail className="w-5 h-5" /> SEND TRANSMISSION</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" className="flex items-center justify-between group bg-white/5 hover:bg-white/10 text-white py-4 px-6 rounded-lg border border-white/20 transition-all font-bold tracking-wide">
            <span className="flex items-center gap-3"><Code className="w-5 h-5" /> GITHUB REPOSITORY</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    )
  }
];

const GAME_WIDTH = 1200;
const GAME_HEIGHT = 800;
const MAX_POWER = 25;
const FRICTION = 0.985;
const BOUNCE_ELASTICITY = 0.8;
const MIN_SPEED = 0.1;

export default function DataDrifterPortfolio() {
  const [gameState, setGameState] = useState('start'); // start, playing, paused, win
  const [shotsFired, setShotsFired] = useState(0);
  const [unlockedNodes, setUnlockedNodes] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const containerRef = useRef(null);

  // Engine State
  const engine = useRef({
    player: { x: GAME_WIDTH / 2, y: GAME_HEIGHT / 2, vx: 0, vy: 0, radius: 15, trail: [] },
    drag: { active: false, startX: 0, startY: 0, currentX: 0, currentY: 0 },
    timeScale: 1.0,
    targetTimeScale: 1.0,
    particles: [],
    shake: 0,
    nodes: [], // The 4 portfolio items
    bumpers: [] // Obstacles
  });

  const initLevel = useCallback(() => {
    const state = engine.current;
    
    // Reset Player
    state.player = { 
        x: GAME_WIDTH / 2, 
        y: GAME_HEIGHT / 2, 
        vx: 0, vy: 0, 
        radius: 14, 
        trail: [] 
    };
    
    setShotsFired(0);
    state.particles = [];
    
    // Position the 4 Portfolio Nodes in corners
    state.nodes = [
        { ...PORTFOLIO_NODES[0], x: 150, y: 150, radius: 45, pulse: 0 },
        { ...PORTFOLIO_NODES[1], x: GAME_WIDTH - 150, y: 150, radius: 45, pulse: 0 },
        { ...PORTFOLIO_NODES[2], x: 150, y: GAME_HEIGHT - 150, radius: 45, pulse: 0 },
        { ...PORTFOLIO_NODES[3], x: GAME_WIDTH - 150, y: GAME_HEIGHT - 150, radius: 45, pulse: 0 }
    ];

    // Create symmetrical geometric bumpers (obstacles)
    state.bumpers = [
        // Center Diamond
        { type: 'circle', x: GAME_WIDTH/2, y: 200, radius: 40 },
        { type: 'circle', x: GAME_WIDTH/2, y: GAME_HEIGHT - 200, radius: 40 },
        { type: 'circle', x: 300, y: GAME_HEIGHT/2, radius: 40 },
        { type: 'circle', x: GAME_WIDTH - 300, y: GAME_HEIGHT/2, radius: 40 },
        // Side walls
        { type: 'rect', x: GAME_WIDTH/2 - 100, y: GAME_HEIGHT/2 - 20, w: 200, h: 40 },
    ];
  }, []);

  // Coordinate helper to map screen pointer to internal canvas logical size
  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    // Handle both mouse and touch events
    let clientX = e.clientX;
    let clientY = e.clientY;
    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const handlePointerDown = (e) => {
    if (gameState !== 'playing') return;
    const coords = getCanvasCoords(e);
    
    // Start drag
    const state = engine.current;
    state.drag.active = true;
    state.drag.startX = coords.x;
    state.drag.startY = coords.y;
    state.drag.currentX = coords.x;
    state.drag.currentY = coords.y;
    
    // Bullet-time engage!
    state.targetTimeScale = 0.05; 
  };

  const handlePointerMove = (e) => {
    const state = engine.current;
    if (!state.drag.active || gameState !== 'playing') return;
    const coords = getCanvasCoords(e);
    state.drag.currentX = coords.x;
    state.drag.currentY = coords.y;
  };

  const handlePointerUp = (e) => {
    const state = engine.current;
    if (!state.drag.active || gameState !== 'playing') return;
    
    state.drag.active = false;
    state.targetTimeScale = 1.0; // Resume normal time

    // Calculate vector from drag start to current (Slingshot pulls opposite direction)
    const dx = state.drag.startX - state.drag.currentX;
    const dy = state.drag.startY - state.drag.currentY;
    
    // Apply power multiplier
    let powerX = dx * 0.1;
    let powerY = dy * 0.1;

    // Cap maximum power
    const speed = Math.sqrt(powerX * powerX + powerY * powerY);
    if (speed > MAX_POWER) {
        const ratio = MAX_POWER / speed;
        powerX *= ratio;
        powerY *= ratio;
    }

    // Only fire if there was a meaningful drag
    if (speed > 1) {
        state.player.vx += powerX;
        state.player.vy += powerY;
        setShotsFired(s => s + 1);
        
        // Spawn thruster burst
        spawnParticles(state.player.x, state.player.y, -powerX, -powerY, '#fff', 15);
    }
  };

  const spawnParticles = (x, y, vx, vy, color, count) => {
    const state = engine.current;
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        state.particles.push({
            x, y,
            vx: vx * 0.2 + Math.cos(angle) * speed,
            vy: vy * 0.2 + Math.sin(angle) * speed,
            life: 1.0,
            color,
            size: Math.random() * 4 + 2
        });
    }
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

    // Smoothly transition time scale (Bullet-time effect)
    state.timeScale += (state.targetTimeScale - state.timeScale) * 0.1;
    const dt = state.timeScale;

    // --- PHYSICS UPDATE ---
    const p = state.player;
    
    // Apply velocity * timeScale
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    // Apply friction (less friction in bullet time to prevent freezing mid-air)
    const currentFriction = state.drag.active ? 1.0 : FRICTION; 
    p.vx *= currentFriction;
    p.vy *= currentFriction;

    // Stop completely if very slow
    if (Math.abs(p.vx) < MIN_SPEED) p.vx = 0;
    if (Math.abs(p.vy) < MIN_SPEED) p.vy = 0;

    // Trail logic
    if (dt > 0.1 && (Math.abs(p.vx) > 0 || Math.abs(p.vy) > 0)) {
        p.trail.unshift({ x: p.x, y: p.y });
        if (p.trail.length > 20) p.trail.pop();
    }

    // Outer Wall Collisions
    if (p.x < p.radius) { p.x = p.radius; p.vx *= -BOUNCE_ELASTICITY; spawnParticles(p.x, p.y, p.vx, p.vy, '#444', 5); }
    if (p.x > GAME_WIDTH - p.radius) { p.x = GAME_WIDTH - p.radius; p.vx *= -BOUNCE_ELASTICITY; spawnParticles(p.x, p.y, p.vx, p.vy, '#444', 5); }
    if (p.y < p.radius) { p.y = p.radius; p.vy *= -BOUNCE_ELASTICITY; spawnParticles(p.x, p.y, p.vx, p.vy, '#444', 5); }
    if (p.y > GAME_HEIGHT - p.radius) { p.y = GAME_HEIGHT - p.radius; p.vy *= -BOUNCE_ELASTICITY; spawnParticles(p.x, p.y, p.vx, p.vy, '#444', 5); }

    // Bumper Collisions
    state.bumpers.forEach(b => {
        if (b.type === 'circle') {
            const dx = p.x - b.x;
            const dy = p.y - b.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            const minDist = p.radius + b.radius;
            
            if (dist < minDist) {
                // Resolve overlap
                const overlap = minDist - dist;
                const nx = dx / dist;
                const ny = dy / dist;
                p.x += nx * overlap;
                p.y += ny * overlap;

                // Reflect velocity
                const dotProduct = (p.vx * nx + p.vy * ny);
                p.vx = (p.vx - 2 * dotProduct * nx) * BOUNCE_ELASTICITY;
                p.vy = (p.vy - 2 * dotProduct * ny) * BOUNCE_ELASTICITY;
                
                spawnParticles(p.x - nx*p.radius, p.y - ny*p.radius, p.vx, p.vy, '#00f3ff', 10);
                state.shake = 5;
            }
        } else if (b.type === 'rect') {
            // Simple AABB collision for rect bumper
            let testX = p.x;
            let testY = p.y;
            
            if (p.x < b.x) testX = b.x; else if (p.x > b.x + b.w) testX = b.x + b.w;
            if (p.y < b.y) testY = b.y; else if (p.y > b.y + b.h) testY = b.y + b.h;

            const dx = p.x - testX;
            const dy = p.y - testY;
            const dist = Math.sqrt(dx*dx + dy*dy);

            if (dist <= p.radius) {
                // Bounce based on which side was hit
                if (Math.abs(dx) > Math.abs(dy)) {
                    p.vx *= -BOUNCE_ELASTICITY;
                    p.x = testX === b.x ? b.x - p.radius : b.x + b.w + p.radius;
                } else {
                    p.vy *= -BOUNCE_ELASTICITY;
                    p.y = testY === b.y ? b.y - p.radius : b.y + b.h + p.radius;
                }
                spawnParticles(testX, testY, p.vx, p.vy, '#00f3ff', 10);
                state.shake = 5;
            }
        }
    });

    // Node Collisions (Win Condition)
    for (let i = state.nodes.length - 1; i >= 0; i--) {
        let n = state.nodes[i];
        n.pulse += 0.05 * dt;

        const dx = p.x - n.x;
        const dy = p.y - n.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist < p.radius + n.radius) {
            // HIT NODE!
            spawnParticles(n.x, n.y, 0, 0, n.color, 40);
            state.shake = 15;
            
            setActiveModal(n);
            setUnlockedNodes(prev => {
                const next = [...prev, n.id];
                if (next.length === PORTFOLIO_NODES.length) {
                    setTimeout(() => setGameState('win'), 800);
                }
                return next;
            });
            
            // Remove node & pause
            state.nodes.splice(i, 1);
            setGameState('paused');
            state.drag.active = false;
            state.targetTimeScale = 1.0;
            state.timeScale = 1.0;
            
            // Reset player velocity slightly for safety
            p.vx = 0; p.vy = 0;
            break; // Stop checking this frame
        }
    }

    // --- RENDERING ---
    
    // Background based on time scale (Vignette during bullet time)
    if (state.timeScale < 0.9) {
        const alpha = (1 - state.timeScale) * 0.6;
        const gradient = ctx.createRadialGradient(GAME_WIDTH/2, GAME_HEIGHT/2, 100, GAME_WIDTH/2, GAME_HEIGHT/2, GAME_WIDTH);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(1, `rgba(0, 0, 0, ${alpha + 0.3})`);
        ctx.fillStyle = gradient;
    } else {
        ctx.fillStyle = '#0a0a1a';
    }
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    ctx.save();
    
    // Screen Shake
    if (state.shake > 0) {
        const magnitude = state.shake;
        const dx = (Math.random() - 0.5) * magnitude;
        const dy = (Math.random() - 0.5) * magnitude;
        ctx.translate(dx, dy);
        state.shake *= 0.9;
        if (state.shake < 0.5) state.shake = 0;
    }

    // Grid Lines
    ctx.strokeStyle = '#1a1a3a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(let i = 0; i < GAME_WIDTH; i += 100) { ctx.moveTo(i, 0); ctx.lineTo(i, GAME_HEIGHT); }
    for(let i = 0; i < GAME_HEIGHT; i += 100) { ctx.moveTo(0, i); ctx.lineTo(GAME_WIDTH, i); }
    ctx.stroke();

    // Draw Bumpers
    state.bumpers.forEach(b => {
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00f3ff40';
        ctx.strokeStyle = '#00f3ff80';
        ctx.lineWidth = 3;
        ctx.fillStyle = '#001122';
        
        ctx.beginPath();
        if (b.type === 'circle') {
            ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        } else {
            ctx.rect(b.x, b.y, b.w, b.h);
        }
        ctx.fill();
        ctx.stroke();
    });

    // Draw Nodes
    state.nodes.forEach(n => {
        const pulseAnim = Math.sin(n.pulse) * 5;
        ctx.shadowBlur = 30 + pulseAnim * 2;
        ctx.shadowColor = n.color;
        
        // Outer aura
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + pulseAnim + 10, 0, Math.PI * 2);
        ctx.fillStyle = `${n.color}20`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = n.color;
        ctx.stroke();

        // Inner detail
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius - 15, 0, Math.PI * 2);
        ctx.strokeStyle = `${n.color}60`;
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    // Draw Particles
    for (let i = state.particles.length - 1; i >= 0; i--) {
        let pt = state.particles[i];
        pt.x += pt.vx * (dt === 1 ? 1 : 0.5); // Particles always move a bit even in bullet time
        pt.y += pt.vy * (dt === 1 ? 1 : 0.5);
        pt.life -= 0.02;
        
        if (pt.life <= 0) {
            state.particles.splice(i, 1);
        } else {
            ctx.globalAlpha = pt.life;
            ctx.fillStyle = pt.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = pt.color;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI*2);
            ctx.fill();
            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        }
    }

    // Draw Player Trail
    if (p.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        for (let i = 0; i < p.trail.length; i++) {
            ctx.lineTo(p.trail[i].x, p.trail[i].y);
        }
        ctx.strokeStyle = '#ffffff60';
        ctx.lineWidth = p.radius;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
    }

    // Draw Drag Trajectory Line
    if (state.drag.active) {
        const dx = state.drag.startX - state.drag.currentX;
        const dy = state.drag.startY - state.drag.currentY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist > 10) {
            let pX = dx * 0.1;
            let pY = dy * 0.1;
            const speed = Math.sqrt(pX*pX + pY*pY);
            if (speed > MAX_POWER) {
                const ratio = MAX_POWER / speed;
                pX *= ratio; pY *= ratio;
            }

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            // Draw predictive dotted line
            ctx.lineTo(p.x + pX * 15, p.y + pY * 15); 
            ctx.strokeStyle = '#ff0066';
            ctx.lineWidth = 3;
            ctx.setLineDash([10, 10]);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    }

    // Draw Player Core
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#fff';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    // Player Direction Indicator
    if (Math.abs(p.vx) > 1 || Math.abs(p.vy) > 1) {
        const angle = Math.atan2(p.vy, p.vx);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + Math.cos(angle) * (p.radius + 8), p.y + Math.sin(angle) * (p.radius + 8));
        ctx.strokeStyle = '#00f3ff';
        ctx.lineWidth = 4;
        ctx.stroke();
    }

    ctx.restore();
    requestRef.current = requestAnimationFrame(updateAndDraw);
  }, [gameState]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateAndDraw);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updateAndDraw]);

  const startGame = () => {
    initLevel();
    setUnlockedNodes([]);
    setActiveModal(null);
    setGameState('playing');
  };

  const resumeGame = () => {
    setActiveModal(null);
    setGameState('playing');
  };

  return (
    <div className="min-h-screen bg-[#020205] flex items-center justify-center p-2 md:p-6 font-sans select-none overflow-hidden touch-none text-white">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-[#b026ff] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#00f3ff] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>

      <div className="relative w-full max-w-6xl flex flex-col gap-4 z-10" ref={containerRef}>
        
        {/* --- HUD --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end px-2 gap-4">
            <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#ff0066] uppercase mb-1 drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                    DATA_DRIFTER
                </h1>
                <p className="text-[10px] md:text-xs text-gray-400 font-mono tracking-widest">ORBITAL PORTFOLIO PROTOCOL</p>
            </div>

            <div className="flex gap-6 md:gap-8 items-center bg-white/5 border border-white/10 rounded-xl px-6 py-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
                
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 font-mono tracking-widest flex items-center gap-1">
                        <Crosshair className="w-3 h-3 text-[#ff0066]"/> SHOTS
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-white font-mono leading-none">
                        {shotsFired.toString().padStart(3, '0')}
                    </span>
                </div>

                <div className="w-px h-8 bg-white/20"></div>
                
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-[#00f3ff] font-mono tracking-widest">VAULTS DECRYPTED</span>
                    <div className="text-xl md:text-2xl font-black text-white font-mono leading-none flex gap-1 items-baseline">
                        <span className="drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">{unlockedNodes.length}</span>
                        <span className="text-sm text-gray-500">/ 4</span>
                    </div>
                </div>
            </div>
        </div>

        {/* --- GAME CANVAS CONTAINER --- */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-[#0a0a1a] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <canvas 
                ref={canvasRef} 
                width={GAME_WIDTH} 
                height={GAME_HEIGHT}
                className="w-full h-full block cursor-crosshair"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp} // Safety catch
                onContextMenu={(e) => e.preventDefault()}
                style={{ touchAction: 'none' }} // Critical for preventing scroll on mobile swipe
            />

            {/* --- OVERLAYS --- */}
            
            {/* START SCREEN */}
            {gameState === 'start' && (
                <div className="absolute inset-0 bg-[#0a0a1a]/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-[#111122]/90 border border-white/20 p-8 md:p-12 rounded-3xl max-w-xl w-full text-center shadow-[0_0_50px_rgba(0,243,255,0.15)] relative overflow-hidden">
                        <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-[#00f3ff] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-black mb-2 text-white tracking-widest uppercase">Orbital Link</h2>
                        <p className="text-gray-400 font-mono text-sm md:text-base mb-8 leading-relaxed">
                            Navigate the zero-g environment. Slingshot your data packet into the 4 Core Vaults to extract the portfolio.
                        </p>
                        
                        <div className="bg-black/40 rounded-xl p-5 mb-8 text-left border border-white/10 text-sm font-mono text-gray-300 shadow-inner">
                            <span className="text-[#ff0066] block mb-3 font-bold tracking-widest text-base">HOW TO PLAY:</span>
                            <div className="space-y-2">
                                <p>• <strong className="text-white">Click and drag</strong> anywhere to pull back the slingshot.</p>
                                <p>• Dragging engages <strong className="text-[#00f3ff]">Bullet-Time</strong>, slowing down physics so you can aim mid-air.</p>
                                <p>• Release to shoot. Bounce off walls to reach the Vaults.</p>
                            </div>
                        </div>

                        <button 
                            onClick={startGame}
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl overflow-hidden transition-all hover:scale-105 w-full border border-white/30"
                        >
                            <span className="relative flex items-center gap-3 tracking-widest uppercase text-lg">
                                <Play className="w-5 h-5" /> Launch Sequence
                            </span>
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL (PAUSED / DATA NODE) */}
            {gameState === 'paused' && activeModal && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6 z-50">
                    <div 
                        className="w-full max-w-2xl bg-[#0a0a15]/95 rounded-2xl overflow-hidden border shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90%]"
                        style={{ borderColor: activeModal.color, boxShadow: `0 20px 60px ${activeModal.color}40` }}
                    >
                        {/* Header */}
                        <div className="px-6 py-5 border-b flex justify-between items-center shrink-0" style={{ borderColor: `${activeModal.color}40`, backgroundColor: `${activeModal.color}10` }}>
                            <h2 className="text-xl md:text-2xl font-black font-mono tracking-widest flex items-center gap-3" style={{ color: activeModal.color }}>
                                {activeModal.icon}
                                {activeModal.title}
                            </h2>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 md:p-8 flex-1 overflow-y-auto custom-scrollbar text-base md:text-lg">
                            {activeModal.content}
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-5 bg-black/50 border-t border-white/10 flex justify-between items-center shrink-0">
                            <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">
                                Nodes Recovered: <strong className="text-white">{unlockedNodes.length} / 4</strong>
                            </span>
                            <button 
                                onClick={resumeGame}
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-bold font-mono text-sm tracking-widest border border-white/20 hover:border-white/50"
                            >
                                RESUME <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* WIN SCREEN */}
            {gameState === 'win' && (
                <div className="absolute inset-0 bg-[#0a0a1a]/90 backdrop-blur-xl flex items-center justify-center p-6 z-50">
                    <div className="text-center max-w-2xl w-full">
                        <Zap className="w-20 h-20 md:w-24 md:h-24 text-[#00f3ff] mx-auto mb-6 drop-shadow-[0_0_30px_rgba(0,243,255,0.8)]" />
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#00f3ff] to-white">
                            ALL DATA SECURED
                        </h2>
                        <p className="text-[#00f3ff] font-mono mb-10 text-base md:text-xl tracking-widest">Portfolio extraction complete.</p>
                        
                        <div className="inline-block bg-white/5 border border-white/10 p-8 rounded-2xl mb-10 backdrop-blur-md">
                            <div className="text-sm text-gray-400 font-mono mb-2 uppercase tracking-widest">Efficiency Rating (Shots)</div>
                            <div className="text-6xl font-black text-white font-mono">
                                {shotsFired}
                            </div>
                            <div className="text-xs text-gray-500 mt-2 font-mono">LOWER IS BETTER</div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={startGame}
                                className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-bold font-mono border border-white/20 tracking-widest"
                            >
                                <RotateCcw className="w-5 h-5" /> PLAY AGAIN
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
        {/* --- BOTTOM SECTION: Node Tracker & Help --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-2 gap-4">
            <div className="flex gap-3 md:gap-4">
                {PORTFOLIO_NODES.map((node) => {
                    const isUnlocked = unlockedNodes.includes(node.id);
                    return (
                        <div 
                            key={node.id} 
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center border-2 transition-all duration-500 ${
                                isUnlocked ? 'bg-black text-white scale-100 rotate-0 shadow-lg' : 'bg-transparent border-white/10 text-white/20 scale-90 -rotate-12'
                            }`}
                            style={{ 
                                borderColor: isUnlocked ? node.color : '',
                                boxShadow: isUnlocked ? `0 0 20px ${node.color}40` : '',
                                backgroundColor: isUnlocked ? `${node.color}15` : ''
                            }}
                        >
                            {React.cloneElement(node.icon, { className: 'w-6 h-6 md:w-7 md:h-7 drop-shadow-md' })}
                        </div>
                    );
                })}
            </div>
            
            <div className="text-center sm:text-right text-gray-500 font-mono text-xs md:text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                Drag anywhere on the grid to aim. <br className="sm:hidden"/> Engage bullet-time mid-air.
            </div>
        </div>

      </div>

        {/* Global style for custom scrollbar in modal */}
        <style dangerouslySetInnerHTML={{__html: `
            .custom-scrollbar::-webkit-scrollbar { width: 8px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 4px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
        `}} />
    </div>
  );
}