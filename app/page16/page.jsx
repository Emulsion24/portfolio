"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import {
  User,
  Code,
  Server,
  Mail,
  Play,
  RotateCcw,
  ChevronRight,
  Zap,
  Crosshair,
  Sparkles,
} from "lucide-react";

/* =========================================================
   PORTFOLIO DATA
========================================================= */

const PORTFOLIO_NODES = [
  {
    id: "origin",
    title: "SYS.ADMIN // ORIGIN",
    color: "#00f3ff",
    icon: <User className="w-8 h-8" />,
    content: (
      <div className="space-y-4 text-gray-300">
        <h3 className="text-xl font-bold text-white">
          Full Stack Developer & Interactive Designer
        </h3>

        <p>
          I build web experiences that feel alive. I specialize in
          bridging the gap between heavy backend logic and breathtaking
          frontend interfaces.
        </p>

        <p>
          With a deep understanding of modern frameworks and rendering
          engines, I turn standard web applications into highly
          interactive, memorable digital journeys.
        </p>
      </div>
    ),
  },

  {
    id: "stack",
    title: "CORE // TECH_STACK",
    color: "#ff0066",
    icon: <Server className="w-8 h-8" />,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#ff0066]/50 transition-colors">
          <h4 className="text-[#ff0066] font-bold mb-3 text-sm tracking-widest">
            FRONTEND
          </h4>

          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]" />
              React & Next.js
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]" />
              TypeScript / JavaScript
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]" />
              Tailwind CSS & Framer
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]" />
              HTML5 Canvas / WebGL
            </li>
          </ul>
        </div>

        <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#ff0066]/50 transition-colors">
          <h4 className="text-[#ff0066] font-bold mb-3 text-sm tracking-widest">
            BACKEND
          </h4>

          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]" />
              Node.js & Express
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]" />
              Python & FastAPI
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]" />
              PostgreSQL / NoSQL
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0066]" />
              Docker & CI/CD
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: "projects",
    title: "DATABANKS // ARCHIVES",
    color: "#b026ff",
    icon: <Code className="w-8 h-8" />,
    content: (
      <div className="space-y-4">
        <div className="group bg-black/40 p-5 rounded-lg border border-[#b026ff]/30 hover:bg-[#b026ff]/10 hover:border-[#b026ff] transition-all cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b026ff]/10 rounded-full blur-3xl group-hover:bg-[#b026ff]/20 transition-all" />

          <div className="flex justify-between items-start mb-2 relative z-10">
            <h4 className="text-white font-bold text-lg group-hover:text-[#b026ff] transition-colors">
              Vortex Trading Platform
            </h4>

            <span className="text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded">
              2024
            </span>
          </div>

          <p className="text-xs text-gray-400 mb-3 font-mono relative z-10">
            React • WebSockets • Go
          </p>

          <p className="text-sm text-gray-300 relative z-10">
            A real-time cryptocurrency dashboard handling thousands of
            websocket updates per second with zero UI lag.
          </p>
        </div>

        <div className="group bg-black/40 p-5 rounded-lg border border-[#b026ff]/30 hover:bg-[#b026ff]/10 hover:border-[#b026ff] transition-all cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#b026ff]/10 rounded-full blur-3xl group-hover:bg-[#b026ff]/20 transition-all" />

          <div className="flex justify-between items-start mb-2 relative z-10">
            <h4 className="text-white font-bold text-lg group-hover:text-[#b026ff] transition-colors">
              Data Drifter Engine
            </h4>

            <span className="text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded">
              2023
            </span>
          </div>

          <p className="text-xs text-gray-400 mb-3 font-mono relative z-10">
            HTML5 Canvas • Vanilla JS • Physics
          </p>

          <p className="text-sm text-gray-300 relative z-10">
            A custom-built 2D physics engine featuring elastic
            collisions, bullet-time dilation, and vector math.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "contact",
    title: "UPLINK // CONTACT",
    color: "#00ff66",
    icon: <Mail className="w-8 h-8" />,
    content: (
      <div className="text-center space-y-8 py-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Initialize Connection
          </h3>

          <p className="text-gray-400">
            Looking for a creative engineer to propel your next
            project? Let's initiate the handshake protocol.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a
            href="#"
            className="
              flex
              items-center
              justify-between
              group
              bg-[#00ff66]/10
              hover:bg-[#00ff66]/20
              active:bg-[#00ff66]/30
              text-[#00ff66]
              py-4
              px-6
              rounded-lg
              border
              border-[#00ff66]/50
              transition-all
              font-bold
              tracking-wide
              touch-manipulation
            "
          >
            <span className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              SEND TRANSMISSION
            </span>

            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#"
            className="
              flex
              items-center
              justify-between
              group
              bg-white/5
              hover:bg-white/10
              active:bg-white/20
              text-white
              py-4
              px-6
              rounded-lg
              border
              border-white/20
              transition-all
              font-bold
              tracking-wide
              touch-manipulation
            "
          >
            <span className="flex items-center gap-3">
              <Code className="w-5 h-5" />
              GITHUB REPOSITORY
            </span>

            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    ),
  },
];

/* =========================================================
   GAME CONSTANTS
========================================================= */

const GAME_WIDTH = 1200;
const GAME_HEIGHT = 800;

const MAX_POWER = 25;
const FRICTION = 0.985;
const BOUNCE_ELASTICITY = 0.8;
const MIN_SPEED = 0.1;

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DataDrifterPortfolio() {
  const [gameState, setGameState] = useState("start");

  const [shotsFired, setShotsFired] = useState(0);

  const [unlockedNodes, setUnlockedNodes] =
    useState([]);

  const [activeModal, setActiveModal] =
    useState(null);

  const canvasRef = useRef(null);

  const requestRef = useRef();

  const containerRef = useRef(null);

  /* =======================================================
     ENGINE
  ======================================================= */

  const engine = useRef({
    player: {
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2,
      vx: 0,
      vy: 0,
      radius: 15,
      trail: [],
    },

    drag: {
      active: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
    },

    timeScale: 1.0,

    targetTimeScale: 1.0,

    particles: [],

    shake: 0,

    nodes: [],

    bumpers: [],
  });

  /* =======================================================
     INITIALIZE LEVEL
  ======================================================= */

  const initLevel = useCallback(() => {
    const state = engine.current;

    state.player = {
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2,
      vx: 0,
      vy: 0,
      radius: 14,
      trail: [],
    };

    state.drag = {
      active: false,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
    };

    state.timeScale = 1;

    state.targetTimeScale = 1;

    state.particles = [];

    state.shake = 0;

    setShotsFired(0);

    /* =====================================================
       PORTFOLIO NODES
    ===================================================== */

    state.nodes = [
      {
        ...PORTFOLIO_NODES[0],
        x: 150,
        y: 150,
        radius: 45,
        pulse: 0,
      },

      {
        ...PORTFOLIO_NODES[1],
        x: GAME_WIDTH - 150,
        y: 150,
        radius: 45,
        pulse: 0,
      },

      {
        ...PORTFOLIO_NODES[2],
        x: 150,
        y: GAME_HEIGHT - 150,
        radius: 45,
        pulse: 0,
      },

      {
        ...PORTFOLIO_NODES[3],
        x: GAME_WIDTH - 150,
        y: GAME_HEIGHT - 150,
        radius: 45,
        pulse: 0,
      },
    ];

    /* =====================================================
       BUMPERS
    ===================================================== */

    state.bumpers = [
      {
        type: "circle",
        x: GAME_WIDTH / 2,
        y: 200,
        radius: 40,
      },

      {
        type: "circle",
        x: GAME_WIDTH / 2,
        y: GAME_HEIGHT - 200,
        radius: 40,
      },

      {
        type: "circle",
        x: 300,
        y: GAME_HEIGHT / 2,
        radius: 40,
      },

      {
        type: "circle",
        x: GAME_WIDTH - 300,
        y: GAME_HEIGHT / 2,
        radius: 40,
      },

      {
        type: "rect",
        x: GAME_WIDTH / 2 - 100,
        y: GAME_HEIGHT / 2 - 20,
        w: 200,
        h: 40,
      },
    ];
  }, []);

  /* =======================================================
     CANVAS COORDINATES
  ======================================================= */

  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return {
        x: 0,
        y: 0,
      };
    }

    const rect =
      canvas.getBoundingClientRect();

    const scaleX =
      canvas.width / rect.width;

    const scaleY =
      canvas.height / rect.height;

    let clientX = e.clientX;
    let clientY = e.clientY;

    if (
      e.touches &&
      e.touches.length > 0
    ) {
      clientX =
        e.touches[0].clientX;

      clientY =
        e.touches[0].clientY;
    }

    return {
      x:
        (clientX - rect.left) *
        scaleX,

      y:
        (clientY - rect.top) *
        scaleY,
    };
  };

  /* =======================================================
     POINTER DOWN
  ======================================================= */

  const handlePointerDown = (e) => {
    if (gameState !== "playing") {
      return;
    }

    e.preventDefault();

    try {
      e.currentTarget.setPointerCapture?.(
        e.pointerId
      );
    } catch {}

    const coords =
      getCanvasCoords(e);

    const state =
      engine.current;

    state.drag.active = true;

    state.drag.startX =
      coords.x;

    state.drag.startY =
      coords.y;

    state.drag.currentX =
      coords.x;

    state.drag.currentY =
      coords.y;

    state.targetTimeScale =
      0.05;
  };

  /* =======================================================
     POINTER MOVE
  ======================================================= */

  const handlePointerMove = (e) => {
    const state =
      engine.current;

    if (
      !state.drag.active ||
      gameState !== "playing"
    ) {
      return;
    }

    e.preventDefault();

    const coords =
      getCanvasCoords(e);

    state.drag.currentX =
      coords.x;

    state.drag.currentY =
      coords.y;
  };

  /* =======================================================
     POINTER UP
  ======================================================= */

  const handlePointerUp = (e) => {
    const state =
      engine.current;

    if (
      !state.drag.active ||
      gameState !== "playing"
    ) {
      return;
    }

    e.preventDefault();

    try {
      e.currentTarget.releasePointerCapture?.(
        e.pointerId
      );
    } catch {}

    state.drag.active = false;

    state.targetTimeScale = 1;

    const dx =
      state.drag.startX -
      state.drag.currentX;

    const dy =
      state.drag.startY -
      state.drag.currentY;

    let powerX = dx * 0.1;

    let powerY = dy * 0.1;

    const speed = Math.sqrt(
      powerX * powerX +
        powerY * powerY
    );

    if (speed > MAX_POWER) {
      const ratio =
        MAX_POWER / speed;

      powerX *= ratio;
      powerY *= ratio;
    }

    if (speed > 1) {
      state.player.vx += powerX;

      state.player.vy += powerY;

      setShotsFired(
        (current) => current + 1
      );

      spawnParticles(
        state.player.x,
        state.player.y,
        -powerX,
        -powerY,
        "#fff",
        15
      );
    }
  };

  /* =======================================================
     PARTICLES
  ======================================================= */

  const spawnParticles = (
    x,
    y,
    vx,
    vy,
    color,
    count
  ) => {
    const state =
      engine.current;

    for (let i = 0; i < count; i++) {
      const angle =
        Math.random() *
        Math.PI *
        2;

      const speed =
        Math.random() * 3 + 1;

      state.particles.push({
        x,
        y,

        vx:
          vx * 0.2 +
          Math.cos(angle) * speed,

        vy:
          vy * 0.2 +
          Math.sin(angle) * speed,

        life: 1,

        color,

        size:
          Math.random() * 4 + 2,
      });
    }
  };

  /* =======================================================
     GAME LOOP
  ======================================================= */

  const updateAndDraw =
    useCallback(
      (timestamp) => {
        if (
          gameState !==
          "playing"
        ) {
          requestRef.current =
            requestAnimationFrame(
              updateAndDraw
            );

          return;
        }

        const canvas =
          canvasRef.current;

        if (!canvas) {
          return;
        }

        const ctx =
          canvas.getContext("2d");

        if (!ctx) {
          return;
        }

        const state =
          engine.current;

        /* =================================================
           TIME SCALE
        ================================================= */

        state.timeScale +=
          (state.targetTimeScale -
            state.timeScale) *
          0.1;

        const dt =
          state.timeScale;

        /* =================================================
           PLAYER PHYSICS
        ================================================= */

        const p =
          state.player;

        p.x += p.vx * dt;

        p.y += p.vy * dt;

        const currentFriction =
          state.drag.active
            ? 1.0
            : FRICTION;

        p.vx *=
          currentFriction;

        p.vy *=
          currentFriction;

        if (
          Math.abs(p.vx) <
          MIN_SPEED
        ) {
          p.vx = 0;
        }

        if (
          Math.abs(p.vy) <
          MIN_SPEED
        ) {
          p.vy = 0;
        }

        /* =================================================
           TRAIL
        ================================================= */

        if (
          dt > 0.1 &&
          (Math.abs(p.vx) > 0 ||
            Math.abs(p.vy) > 0)
        ) {
          p.trail.unshift({
            x: p.x,
            y: p.y,
          });

          if (
            p.trail.length >
            20
          ) {
            p.trail.pop();
          }
        }

        /* =================================================
           OUTER WALLS
        ================================================= */

        if (
          p.x < p.radius
        ) {
          p.x = p.radius;

          p.vx *=
            -BOUNCE_ELASTICITY;

          spawnParticles(
            p.x,
            p.y,
            p.vx,
            p.vy,
            "#444",
            5
          );
        }

        if (
          p.x >
          GAME_WIDTH -
            p.radius
        ) {
          p.x =
            GAME_WIDTH -
            p.radius;

          p.vx *=
            -BOUNCE_ELASTICITY;

          spawnParticles(
            p.x,
            p.y,
            p.vx,
            p.vy,
            "#444",
            5
          );
        }

        if (
          p.y < p.radius
        ) {
          p.y = p.radius;

          p.vy *=
            -BOUNCE_ELASTICITY;

          spawnParticles(
            p.x,
            p.y,
            p.vx,
            p.vy,
            "#444",
            5
          );
        }

        if (
          p.y >
          GAME_HEIGHT -
            p.radius
        ) {
          p.y =
            GAME_HEIGHT -
            p.radius;

          p.vy *=
            -BOUNCE_ELASTICITY;

          spawnParticles(
            p.x,
            p.y,
            p.vx,
            p.vy,
            "#444",
            5
          );
        }

        /* =================================================
           BUMPER COLLISIONS
        ================================================= */

        state.bumpers.forEach(
          (b) => {
            if (
              b.type ===
              "circle"
            ) {
              const dx =
                p.x - b.x;

              const dy =
                p.y - b.y;

              const dist =
                Math.sqrt(
                  dx * dx +
                    dy * dy
                );

              const minDist =
                p.radius +
                b.radius;

              if (
                dist <
                minDist
              ) {
                const overlap =
                  minDist -
                  dist;

                const nx =
                  dist === 0
                    ? 1
                    : dx / dist;

                const ny =
                  dist === 0
                    ? 0
                    : dy / dist;

                p.x +=
                  nx *
                  overlap;

                p.y +=
                  ny *
                  overlap;

                const dotProduct =
                  p.vx * nx +
                  p.vy * ny;

                p.vx =
                  (p.vx -
                    2 *
                      dotProduct *
                      nx) *
                  BOUNCE_ELASTICITY;

                p.vy =
                  (p.vy -
                    2 *
                      dotProduct *
                      ny) *
                  BOUNCE_ELASTICITY;

                spawnParticles(
                  p.x -
                    nx *
                      p.radius,

                  p.y -
                    ny *
                      p.radius,

                  p.vx,
                  p.vy,
                  "#00f3ff",
                  10
                );

                state.shake = 5;
              }
            } else {
              let testX =
                p.x;

              let testY =
                p.y;

              if (
                p.x < b.x
              ) {
                testX = b.x;
              } else if (
                p.x >
                b.x + b.w
              ) {
                testX =
                  b.x +
                  b.w;
              }

              if (
                p.y < b.y
              ) {
                testY = b.y;
              } else if (
                p.y >
                b.y + b.h
              ) {
                testY =
                  b.y +
                  b.h;
              }

              const dx =
                p.x - testX;

              const dy =
                p.y - testY;

              const dist =
                Math.sqrt(
                  dx * dx +
                    dy * dy
                );

              if (
                dist <=
                p.radius
              ) {
                if (
                  Math.abs(dx) >
                  Math.abs(dy)
                ) {
                  p.vx *=
                    -BOUNCE_ELASTICITY;

                  p.x =
                    testX ===
                    b.x
                      ? b.x -
                        p.radius
                      : b.x +
                        b.w +
                        p.radius;
                } else {
                  p.vy *=
                    -BOUNCE_ELASTICITY;

                  p.y =
                    testY ===
                    b.y
                      ? b.y -
                        p.radius
                      : b.y +
                        b.h +
                        p.radius;
                }

                spawnParticles(
                  testX,
                  testY,
                  p.vx,
                  p.vy,
                  "#00f3ff",
                  10
                );

                state.shake = 5;
              }
            }
          }
        );

        /* =================================================
           NODE COLLISIONS
        ================================================= */

        for (
          let i =
            state.nodes.length -
            1;
          i >= 0;
          i--
        ) {
          const n =
            state.nodes[i];

          n.pulse +=
            0.05 * dt;

          const dx =
            p.x - n.x;

          const dy =
            p.y - n.y;

          const dist =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (
            dist <
            p.radius +
              n.radius
          ) {
            spawnParticles(
              n.x,
              n.y,
              0,
              0,
              n.color,
              40
            );

            state.shake = 15;

            setActiveModal(n);

            setUnlockedNodes(
              (previous) => {
                if (
                  previous.includes(
                    n.id
                  )
                ) {
                  return previous;
                }

                const next = [
                  ...previous,
                  n.id,
                ];

                if (
                  next.length ===
                  PORTFOLIO_NODES.length
                ) {
                  setTimeout(
                    () =>
                      setGameState(
                        "win"
                      ),
                    800
                  );
                }

                return next;
              }
            );

            state.nodes.splice(
              i,
              1
            );

            setGameState(
              "paused"
            );

            state.drag.active =
              false;

            state.targetTimeScale =
              1;

            state.timeScale = 1;

            p.vx = 0;

            p.vy = 0;

            break;
          }
        }

        /* =================================================
           RENDER BACKGROUND
        ================================================= */

        if (
          state.timeScale <
          0.9
        ) {
          const alpha =
            (1 -
              state.timeScale) *
            0.6;

          const gradient =
            ctx.createRadialGradient(
              GAME_WIDTH / 2,
              GAME_HEIGHT / 2,
              100,
              GAME_WIDTH / 2,
              GAME_HEIGHT / 2,
              GAME_WIDTH
            );

          gradient.addColorStop(
            0,
            "#0a0a1a"
          );

          gradient.addColorStop(
            1,
            `rgba(0,0,0,${
              alpha + 0.3
            })`
          );

          ctx.fillStyle =
            gradient;
        } else {
          ctx.fillStyle =
            "#0a0a1a";
        }

        ctx.fillRect(
          0,
          0,
          GAME_WIDTH,
          GAME_HEIGHT
        );

        ctx.save();

        /* =================================================
           SCREEN SHAKE
        ================================================= */

        if (
          state.shake > 0
        ) {
          const magnitude =
            state.shake;

          const dx =
            (Math.random() -
              0.5) *
            magnitude;

          const dy =
            (Math.random() -
              0.5) *
            magnitude;

          ctx.translate(
            dx,
            dy
          );

          state.shake *=
            0.9;

          if (
            state.shake <
            0.5
          ) {
            state.shake = 0;
          }
        }

        /* =================================================
           GRID
        ================================================= */

        ctx.strokeStyle =
          "#1a1a3a";

        ctx.lineWidth = 1;

        ctx.beginPath();

        for (
          let i = 0;
          i < GAME_WIDTH;
          i += 100
        ) {
          ctx.moveTo(i, 0);

          ctx.lineTo(
            i,
            GAME_HEIGHT
          );
        }

        for (
          let i = 0;
          i < GAME_HEIGHT;
          i += 100
        ) {
          ctx.moveTo(0, i);

          ctx.lineTo(
            GAME_WIDTH,
            i
          );
        }

        ctx.stroke();

        /* =================================================
           BUMPERS
        ================================================= */

        state.bumpers.forEach(
          (b) => {
            ctx.shadowBlur = 15;

            ctx.shadowColor =
              "#00f3ff40";

            ctx.strokeStyle =
              "#00f3ff80";

            ctx.lineWidth = 3;

            ctx.fillStyle =
              "#001122";

            ctx.beginPath();

            if (
              b.type ===
              "circle"
            ) {
              ctx.arc(
                b.x,
                b.y,
                b.radius,
                0,
                Math.PI * 2
              );
            } else {
              ctx.rect(
                b.x,
                b.y,
                b.w,
                b.h
              );
            }

            ctx.fill();

            ctx.stroke();
          }
        );

        /* =================================================
           NODES
        ================================================= */

        state.nodes.forEach(
          (n) => {
            const pulseAnim =
              Math.sin(
                n.pulse
              ) * 5;

            ctx.shadowBlur =
              30 +
              pulseAnim * 2;

            ctx.shadowColor =
              n.color;

            ctx.beginPath();

            ctx.arc(
              n.x,
              n.y,
              n.radius +
                pulseAnim +
                10,
              0,
              Math.PI * 2
            );

            ctx.fillStyle =
              `${n.color}20`;

            ctx.fill();

            ctx.beginPath();

            ctx.arc(
              n.x,
              n.y,
              n.radius,
              0,
              Math.PI * 2
            );

            ctx.fillStyle =
              "#000";

            ctx.fill();

            ctx.lineWidth = 4;

            ctx.strokeStyle =
              n.color;

            ctx.stroke();

            ctx.beginPath();

            ctx.arc(
              n.x,
              n.y,
              n.radius - 15,
              0,
              Math.PI * 2
            );

            ctx.strokeStyle =
              `${n.color}60`;

            ctx.lineWidth = 2;

            ctx.stroke();
          }
        );

        /* =================================================
           PARTICLES
        ================================================= */

        for (
          let i =
            state.particles.length -
            1;
          i >= 0;
          i--
        ) {
          const pt =
            state.particles[i];

          pt.x +=
            pt.vx *
            (dt === 1
              ? 1
              : 0.5);

          pt.y +=
            pt.vy *
            (dt === 1
              ? 1
              : 0.5);

          pt.life -= 0.02;

          if (
            pt.life <= 0
          ) {
            state.particles.splice(
              i,
              1
            );
          } else {
            ctx.globalAlpha =
              pt.life;

            ctx.fillStyle =
              pt.color;

            ctx.shadowBlur = 10;

            ctx.shadowColor =
              pt.color;

            ctx.beginPath();

            ctx.arc(
              pt.x,
              pt.y,
              pt.size,
              0,
              Math.PI * 2
            );

            ctx.fill();

            ctx.globalAlpha = 1;

            ctx.shadowBlur = 0;
          }
        }

        /* =================================================
           PLAYER TRAIL
        ================================================= */

        if (
          p.trail.length > 1
        ) {
          ctx.beginPath();

          ctx.moveTo(
            p.x,
            p.y
          );

          for (
            let i = 0;
            i <
            p.trail.length;
            i++
          ) {
            ctx.lineTo(
              p.trail[i].x,
              p.trail[i].y
            );
          }

          ctx.strokeStyle =
            "#ffffff60";

          ctx.lineWidth =
            p.radius;

          ctx.lineCap =
            "round";

          ctx.lineJoin =
            "round";

          ctx.stroke();
        }

        /* =================================================
           DRAG TRAJECTORY
        ================================================= */

        if (
          state.drag.active
        ) {
          const dx =
            state.drag.startX -
            state.drag.currentX;

          const dy =
            state.drag.startY -
            state.drag.currentY;

          const dist =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (dist > 10) {
            let pX =
              dx * 0.1;

            let pY =
              dy * 0.1;

            const speed =
              Math.sqrt(
                pX * pX +
                  pY * pY
              );

            if (
              speed >
              MAX_POWER
            ) {
              const ratio =
                MAX_POWER /
                speed;

              pX *= ratio;

              pY *= ratio;
            }

            ctx.beginPath();

            ctx.moveTo(
              p.x,
              p.y
            );

            ctx.lineTo(
              p.x +
                pX * 15,
              p.y +
                pY * 15
            );

            ctx.strokeStyle =
              "#ff0066";

            ctx.lineWidth = 3;

            ctx.setLineDash([
              10,
              10,
            ]);

            ctx.stroke();

            ctx.setLineDash(
              []
            );
          }
        }

        /* =================================================
           PLAYER
        ================================================= */

        ctx.shadowBlur = 20;

        ctx.shadowColor =
          "#fff";

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "#fff";

        ctx.fill();

        if (
          Math.abs(p.vx) >
            1 ||
          Math.abs(p.vy) >
            1
        ) {
          const angle =
            Math.atan2(
              p.vy,
              p.vx
            );

          ctx.beginPath();

          ctx.moveTo(
            p.x,
            p.y
          );

          ctx.lineTo(
            p.x +
              Math.cos(angle) *
                (p.radius + 8),

            p.y +
              Math.sin(angle) *
                (p.radius + 8)
          );

          ctx.strokeStyle =
            "#00f3ff";

          ctx.lineWidth = 4;

          ctx.stroke();
        }

        ctx.restore();

        requestRef.current =
          requestAnimationFrame(
            updateAndDraw
          );
      },
      [gameState]
    );

  /* =======================================================
     START LOOP
  ======================================================= */

  useEffect(() => {
    requestRef.current =
      requestAnimationFrame(
        updateAndDraw
      );

    return () => {
      if (
        requestRef.current
      ) {
        cancelAnimationFrame(
          requestRef.current
        );
      }
    };
  }, [updateAndDraw]);

  /* =======================================================
     LOCK DOCUMENT SCROLL
  ======================================================= */

  useEffect(() => {
    const html =
      document.documentElement;

    const body =
      document.body;

    const previous = {
      htmlOverflow:
        html.style.overflow,

      htmlHeight:
        html.style.height,

      bodyOverflow:
        body.style.overflow,

      bodyHeight:
        body.style.height,

      bodyWidth:
        body.style.width,

      bodyPosition:
        body.style.position,

      bodyTouchAction:
        body.style.touchAction,
    };

    html.style.overflow =
      "hidden";

    html.style.height =
      "100%";

    body.style.overflow =
      "hidden";

    body.style.height =
      "100%";

    body.style.width =
      "100%";

    body.style.position =
      "fixed";

    body.style.touchAction =
      "none";

    return () => {
      html.style.overflow =
        previous.htmlOverflow;

      html.style.height =
        previous.htmlHeight;

      body.style.overflow =
        previous.bodyOverflow;

      body.style.height =
        previous.bodyHeight;

      body.style.width =
        previous.bodyWidth;

      body.style.position =
        previous.bodyPosition;

      body.style.touchAction =
        previous.bodyTouchAction;
    };
  }, []);

  /* =======================================================
     RESET TOUCH WHEN TAB IS HIDDEN
  ======================================================= */

  useEffect(() => {
    const handleVisibility =
      () => {
        if (
          document.hidden
        ) {
          engine.current.drag.active =
            false;

          engine.current.targetTimeScale =
            1;
        }
      };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  /* =======================================================
     START GAME
  ======================================================= */

  const startGame = () => {
    initLevel();

    setUnlockedNodes([]);

    setActiveModal(null);

    setGameState(
      "playing"
    );
  };

  /* =======================================================
     RESUME
  ======================================================= */

  const resumeGame = () => {
    engine.current.drag.active =
      false;

    engine.current.targetTimeScale =
      1;

    engine.current.timeScale =
      1;

    setActiveModal(null);

    setGameState(
      "playing"
    );
  };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <main
      className="
        fixed
        inset-0
        w-full
        h-[100dvh]
        bg-[#020205]
        flex
        items-center
        justify-center
        p-0
        sm:p-2
        md:p-6
        font-sans
        select-none
        overflow-hidden
        touch-none
        text-white
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="
            absolute
            top-[-20%]
            left-[-10%]
            w-[60%]
            h-[50%]
            sm:w-[40%]
            sm:h-[40%]
            bg-[#b026ff]
            rounded-full
            mix-blend-screen
            blur-[120px]
            sm:blur-[150px]
            opacity-10
            animate-pulse
          "
        />

        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[60%]
            h-[50%]
            sm:w-[40%]
            sm:h-[40%]
            bg-[#00f3ff]
            rounded-full
            mix-blend-screen
            blur-[120px]
            sm:blur-[150px]
            opacity-10
          "
        />
      </div>

      {/* ===================================================
          MAIN WRAPPER
      =================================================== */}

      <div
        ref={containerRef}
        className="
          relative
          w-full
          max-w-6xl
          max-h-full
          flex
          flex-col
          gap-1.5
          sm:gap-3
          md:gap-4
          z-10
          overflow-hidden
        "
      >
        {/* =================================================
            HUD
        ================================================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-between
            items-center
            sm:items-end
            px-1
            sm:px-2
            gap-1.5
            sm:gap-3
            shrink-0
          "
        >
          <div className="text-center sm:text-left">
            <h1
              className="
                text-lg
                sm:text-2xl
                md:text-4xl
                font-black
                tracking-widest
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#00f3ff]
                to-[#ff0066]
                uppercase
                mb-1
                drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]
              "
            >
              DATA_DRIFTER
            </h1>

            <p
              className="
                text-[7px]
                sm:text-[10px]
                md:text-xs
                text-gray-400
                font-mono
                tracking-widest
              "
            >
              ORBITAL PORTFOLIO PROTOCOL
            </p>
          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div
            className="
              w-full
              sm:w-auto
              flex
              justify-around
              sm:justify-start
              gap-3
              sm:gap-6
              md:gap-8
              items-center
              bg-white/5
              border
              border-white/10
              rounded-lg
              sm:rounded-xl
              px-2.5
              sm:px-6
              py-1.5
              sm:py-3
              shadow-[0_0_20px_rgba(0,0,0,0.5)]
              backdrop-blur-md
              shrink-0
            "
          >
            {/* Shots */}

            <div className="flex flex-col items-center">
              <span
                className="
                  text-[7px]
                  sm:text-[10px]
                  text-gray-400
                  font-mono
                  tracking-widest
                  flex
                  items-center
                  gap-1
                "
              >
                <Crosshair className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ff0066]" />
                SHOTS
              </span>

              <span
                className="
                  text-sm
                  sm:text-xl
                  md:text-2xl
                  font-bold
                  text-white
                  font-mono
                  leading-none
                "
              >
                {shotsFired
                  .toString()
                  .padStart(
                    3,
                    "0"
                  )}
              </span>
            </div>

            <div className="w-px h-5 sm:h-8 bg-white/20" />

            {/* Vaults */}

            <div className="flex flex-col items-center">
              <span
                className="
                  text-[7px]
                  sm:text-[10px]
                  text-[#00f3ff]
                  font-mono
                  tracking-widest
                  text-center
                "
              >
                VAULTS DECRYPTED
              </span>

              <div
                className="
                  text-sm
                  sm:text-xl
                  md:text-2xl
                  font-black
                  text-white
                  font-mono
                  leading-none
                  flex
                  gap-1
                  items-baseline
                "
              >
                <span className="drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">
                  {unlockedNodes.length}
                </span>

                <span className="text-xs sm:text-sm text-gray-500">
                  / 4
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            GAME CANVAS
        ================================================= */}

        <div
          className="
            relative
            w-full
            aspect-[4/3]
            sm:aspect-[16/10]
            md:aspect-[16/9]
            lg:aspect-[21/9]
            max-h-[calc(100dvh-112px)]
            sm:max-h-[calc(100dvh-145px)]
            md:max-h-none
            bg-[#0a0a1a]
            rounded-lg
            sm:rounded-2xl
            overflow-hidden
            border
            border-white/10
            shadow-[0_20px_50px_rgba(0,0,0,0.8)]
            touch-none
            shrink
          "
        >
          <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="
              w-full
              h-full
              block
              cursor-crosshair
              touch-none
              select-none
            "
            onPointerDown={
              handlePointerDown
            }
            onPointerMove={
              handlePointerMove
            }
            onPointerUp={
              handlePointerUp
            }
            onPointerCancel={
              handlePointerUp
            }
            onPointerLeave={
              handlePointerUp
            }
            onContextMenu={(e) =>
              e.preventDefault()
            }
            style={{
              touchAction:
                "none",
            }}
          />

          {/* =================================================
              START SCREEN
          ================================================= */}

          {gameState ===
            "start" && (
            <div
              className="
                absolute
                inset-0
                bg-[#0a0a1a]/80
                backdrop-blur-sm
                flex
                items-center
                justify-center
                p-2
                sm:p-4
                overflow-hidden
              "
            >
              <div
                className="
                  bg-[#111122]/90
                  border
                  border-white/20
                  p-4
                  sm:p-6
                  md:p-12
                  rounded-xl
                  sm:rounded-3xl
                  max-w-xl
                  w-full
                  max-h-full
                  overflow-y-auto
                  overscroll-contain
                  touch-auto
                  text-center
                  shadow-[0_0_50px_rgba(0,243,255,0.15)]
                  relative
                "
              >
                <Sparkles
                  className="
                    w-9
                    h-9
                    sm:w-12
                    sm:h-12
                    md:w-16
                    md:h-16
                    text-[#00f3ff]
                    mx-auto
                    mb-3
                    sm:mb-6
                  "
                />

                <h2
                  className="
                    text-xl
                    sm:text-3xl
                    md:text-5xl
                    font-black
                    mb-2
                    text-white
                    tracking-widest
                    uppercase
                  "
                >
                  Orbital Link
                </h2>

                <p
                  className="
                    text-gray-400
                    font-mono
                    text-xs
                    sm:text-sm
                    md:text-base
                    mb-4
                    sm:mb-8
                    leading-relaxed
                  "
                >
                  Navigate the zero-g environment.
                  Slingshot your data packet into the
                  4 Core Vaults to extract the portfolio.
                </p>

                <div
                  className="
                    bg-black/40
                    rounded-lg
                    sm:rounded-xl
                    p-3
                    sm:p-5
                    mb-4
                    sm:mb-8
                    text-left
                    border
                    border-white/10
                    text-xs
                    sm:text-sm
                    font-mono
                    text-gray-300
                    shadow-inner
                  "
                >
                  <span
                    className="
                      text-[#ff0066]
                      block
                      mb-3
                      font-bold
                      tracking-widest
                      text-sm
                      sm:text-base
                    "
                  >
                    HOW TO PLAY:
                  </span>

                  <div className="space-y-2">
                    <p>
                      •{" "}
                      <strong className="text-white">
                        Touch and drag
                      </strong>{" "}
                      anywhere to pull back the
                      slingshot.
                    </p>

                    <p>
                      • Dragging engages{" "}
                      <strong className="text-[#00f3ff]">
                        Bullet-Time
                      </strong>
                      , slowing down physics so you can
                      aim mid-air.
                    </p>

                    <p>
                      • Release to shoot. Bounce off walls
                      to reach the Vaults.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={startGame}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    px-5
                    sm:px-8
                    py-3
                    sm:py-4
                    font-bold
                    text-white
                    bg-white/10
                    hover:bg-white/20
                    active:bg-white/30
                    rounded-xl
                    overflow-hidden
                    transition-all
                    active:scale-[0.98]
                    w-full
                    border
                    border-white/30
                    touch-manipulation
                  "
                >
                  <span
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                      gap-3
                      tracking-widest
                      uppercase
                      text-sm
                      sm:text-lg
                    "
                  >
                    <Play className="w-5 h-5" />

                    Launch Sequence
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* =================================================
              DATA NODE MODAL
          ================================================= */}

          {gameState ===
            "paused" &&
            activeModal && (
              <div
                className="
                  absolute
                  inset-0
                  bg-black/60
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  p-2
                  sm:p-4
                  md:p-6
                  z-50
                  overflow-hidden
                "
              >
                <div
                  className="
                    w-full
                    max-w-2xl
                    bg-[#0a0a15]/95
                    rounded-lg
                    sm:rounded-2xl
                    overflow-hidden
                    border
                    shadow-2xl
                    flex
                    flex-col
                    max-h-[calc(100%-8px)]
                    sm:max-h-[90%]
                  "
                  style={{
                    borderColor:
                      activeModal.color,

                    boxShadow:
                      `0 20px 60px ${activeModal.color}40`,
                  }}
                >
                  {/* Header */}

                  <div
                    className="
                      px-3
                      sm:px-6
                      py-3
                      sm:py-5
                      border-b
                      flex
                      justify-between
                      items-center
                      gap-2
                      shrink-0
                    "
                    style={{
                      borderColor:
                        `${activeModal.color}40`,

                      backgroundColor:
                        `${activeModal.color}10`,
                    }}
                  >
                    <h2
                      className="
                        text-xs
                        sm:text-xl
                        md:text-2xl
                        font-black
                        font-mono
                        tracking-wider
                        sm:tracking-widest
                        flex
                        items-center
                        gap-2
                        sm:gap-3
                        break-words
                      "
                      style={{
                        color:
                          activeModal.color,
                      }}
                    >
                      {React.cloneElement(
                        activeModal.icon,
                        {
                          className:
                            "w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 shrink-0",
                        }
                      )}

                      {activeModal.title}
                    </h2>
                  </div>

                  {/* Scrollable Content */}

                  <div
                    className="
                      p-3
                      sm:p-6
                      md:p-8
                      flex-1
                      min-h-0
                      overflow-y-auto
                      overscroll-contain
                      touch-auto
                      custom-scrollbar
                      text-sm
                      sm:text-base
                      md:text-lg
                    "
                  >
                    {activeModal.content}
                  </div>

                  {/* Footer */}

                  <div
                    className="
                      px-3
                      sm:px-6
                      py-3
                      sm:py-5
                      bg-black/50
                      border-t
                      border-white/10
                      flex
                      flex-col
                      sm:flex-row
                      gap-3
                      justify-between
                      items-stretch
                      sm:items-center
                      shrink-0
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        sm:text-xs
                        text-gray-500
                        font-mono
                        tracking-widest
                        uppercase
                        text-center
                        sm:text-left
                      "
                    >
                      Nodes Recovered:{" "}
                      <strong className="text-white">
                        {unlockedNodes.length} / 4
                      </strong>
                    </span>

                    <button
                      type="button"
                      onClick={
                        resumeGame
                      }
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-5
                        sm:px-6
                        py-3
                        bg-white/10
                        hover:bg-white/20
                        active:bg-white/30
                        text-white
                        rounded-lg
                        transition-colors
                        font-bold
                        font-mono
                        text-xs
                        sm:text-sm
                        tracking-widest
                        border
                        border-white/20
                        hover:border-white/50
                        touch-manipulation
                      "
                    >
                      RESUME

                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

          {/* =================================================
              WIN SCREEN
          ================================================= */}

          {gameState ===
            "win" && (
            <div
              className="
                absolute
                inset-0
                bg-[#0a0a1a]/90
                backdrop-blur-xl
                flex
                items-center
                justify-center
                p-3
                sm:p-6
                z-50
                overflow-hidden
              "
            >
              <div className="text-center max-w-2xl w-full">
                <Zap
                  className="
                    w-12
                    h-12
                    sm:w-20
                    sm:h-20
                    md:w-24
                    md:h-24
                    text-[#00f3ff]
                    mx-auto
                    mb-4
                    sm:mb-6
                    drop-shadow-[0_0_30px_rgba(0,243,255,0.8)]
                  "
                />

                <h2
                  className="
                    text-2xl
                    sm:text-4xl
                    md:text-6xl
                    font-black
                    text-white
                    mb-3
                    sm:mb-4
                    tracking-tighter
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#00f3ff]
                    to-white
                  "
                >
                  ALL DATA SECURED
                </h2>

                <p
                  className="
                    text-[#00f3ff]
                    font-mono
                    mb-5
                    sm:mb-10
                    text-xs
                    sm:text-base
                    md:text-xl
                    tracking-widest
                  "
                >
                  Portfolio extraction complete.
                </p>

                <div
                  className="
                    inline-block
                    bg-white/5
                    border
                    border-white/10
                    p-4
                    sm:p-8
                    rounded-xl
                    sm:rounded-2xl
                    mb-5
                    sm:mb-10
                    backdrop-blur-md
                  "
                >
                  <div
                    className="
                      text-[9px]
                      sm:text-sm
                      text-gray-400
                      font-mono
                      mb-2
                      uppercase
                      tracking-widest
                    "
                  >
                    Efficiency Rating (Shots)
                  </div>

                  <div
                    className="
                      text-4xl
                      sm:text-6xl
                      font-black
                      text-white
                      font-mono
                    "
                  >
                    {shotsFired}
                  </div>

                  <div className="text-xs text-gray-500 mt-2 font-mono">
                    LOWER IS BETTER
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={
                      startGame
                    }
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      sm:px-8
                      py-3
                      sm:py-4
                      bg-white/10
                      hover:bg-white/20
                      active:bg-white/30
                      text-white
                      rounded-xl
                      transition-colors
                      font-bold
                      font-mono
                      border
                      border-white/20
                      tracking-widest
                      text-xs
                      sm:text-sm
                      touch-manipulation
                    "
                  >
                    <RotateCcw className="w-5 h-5" />

                    PLAY AGAIN
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* =================================================
            BOTTOM NODE TRACKER
        ================================================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-between
            items-center
            mt-1
            sm:mt-2
            gap-1.5
            sm:gap-4
            shrink-0
          "
        >
          <div className="flex gap-1.5 sm:gap-3 md:gap-4">
            {PORTFOLIO_NODES.map(
              (node) => {
                const isUnlocked =
                  unlockedNodes.includes(
                    node.id
                  );

                return (
                  <div
                    key={node.id}
                    className={`
                      w-8
                      h-8
                      sm:w-12
                      sm:h-12
                      md:w-14
                      md:h-14
                      rounded-lg
                      sm:rounded-xl
                      flex
                      items-center
                      justify-center
                      border-2
                      transition-all
                      duration-500
                      ${
                        isUnlocked
                          ? "bg-black text-white scale-100 rotate-0 shadow-lg"
                          : "bg-transparent border-white/10 text-white/20 scale-90 -rotate-12"
                      }
                    `}
                    style={{
                      borderColor:
                        isUnlocked
                          ? node.color
                          : "",

                      boxShadow:
                        isUnlocked
                          ? `0 0 20px ${node.color}40`
                          : "",

                      backgroundColor:
                        isUnlocked
                          ? `${node.color}15`
                          : "",
                    }}
                  >
                    {React.cloneElement(
                      node.icon,
                      {
                        className:
                          "w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 drop-shadow-md",
                      }
                    )}
                  </div>
                );
              }
            )}
          </div>

          <div
            className="
              text-center
              sm:text-right
              text-gray-500
              font-mono
              text-[8px]
              sm:text-xs
              md:text-sm
              bg-white/5
              border
              border-white/10
              px-3
              sm:px-4
              py-1.5
              sm:py-2
              rounded-lg
            "
          >
            Drag anywhere on the grid to aim.
            <br className="sm:hidden" />
            {" "}
            Engage bullet-time mid-air.
          </div>
        </div>
      </div>

      {/* =================================================
          GLOBAL MOBILE CSS
      ================================================= */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            html,
            body {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              overflow: hidden !important;
              overscroll-behavior: none !important;
              touch-action: none;
            }

            body {
              position: fixed;
              inset: 0;
              -webkit-overflow-scrolling: none;
            }

            #__next {
              width: 100%;
              height: 100%;
              overflow: hidden !important;
            }

            canvas {
              touch-action: none !important;
              -webkit-user-select: none;
              user-select: none;
              -webkit-touch-callout: none;
            }

            button,
            a {
              -webkit-tap-highlight-color: transparent;
            }

            button {
              touch-action: manipulation;
            }

            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color:
                rgba(255, 255, 255, 0.2)
                transparent;
            }

            .custom-scrollbar::-webkit-scrollbar {
              width: 5px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.02);
              border-radius: 4px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.15);
              border-radius: 4px;
            }

            @supports (-webkit-touch-callout: none) {
              html,
              body {
                height: -webkit-fill-available;
              }
            }
          `,
        }}
      />
    </main>
  );
}