"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import {
  User,
  Cpu,
  Code,
  Mail,
  Play,
  RotateCcw,
  ChevronRight,
  ShieldAlert,
  Trophy,
  Shield,
  Zap,
  Terminal,
} from "lucide-react";

/* =========================================================
   PORTFOLIO DATA
========================================================= */

const PORTFOLIO_NODES = [
  {
    id: "origin",
    title: "SYS.ADMIN // ORIGIN",
    color: "#00f3ff",
    icon: <User className="w-7 h-7 sm:w-8 sm:h-8" />,
    content: (
      <div className="space-y-4 text-gray-300">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Full Stack Developer & Interactive Designer
        </h3>

        <p className="text-sm sm:text-base leading-relaxed">
          I build experiences that captivate. I specialize in turning
          standard web applications into highly interactive, memorable
          digital journeys.
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          With a deep understanding of modern frameworks and rendering
          engines, I bridge the gap between heavy backend logic and
          breathtaking frontend interfaces.
        </p>
      </div>
    ),
  },

  {
    id: "stack",
    title: "CORE // TECH_STACK",
    color: "#00ff66",
    icon: <Cpu className="w-7 h-7 sm:w-8 sm:h-8" />,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
          <h4 className="text-[#00ff66] font-bold mb-3 text-xs sm:text-sm tracking-widest">
            FRONTEND
          </h4>

          <ul className="text-xs sm:text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] shrink-0" />
              React & Next.js
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] shrink-0" />
              TypeScript / JavaScript
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] shrink-0" />
              Tailwind CSS & Framer Motion
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] shrink-0" />
              HTML5 Canvas / Three.js
            </li>
          </ul>
        </div>

        <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
          <h4 className="text-[#00ff66] font-bold mb-3 text-xs sm:text-sm tracking-widest">
            BACKEND
          </h4>

          <ul className="text-xs sm:text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] shrink-0" />
              Node.js & Express
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] shrink-0" />
              Python & FastAPI
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] shrink-0" />
              PostgreSQL & MongoDB
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] shrink-0" />
              Docker, CI/CD, AWS
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
    icon: <Code className="w-7 h-7 sm:w-8 sm:h-8" />,
    content: (
      <div className="space-y-3 sm:space-y-4">
        <div className="group bg-black/40 p-3 sm:p-5 rounded-lg border border-[#b026ff]/30">
          <div className="flex justify-between items-start gap-3 mb-2">
            <h4 className="text-white font-bold text-base sm:text-lg">
              Vortex Trading Platform
            </h4>

            <span className="text-[10px] sm:text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded shrink-0">
              2024
            </span>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-400 mb-3 font-mono">
            React • WebSockets • Go
          </p>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            A real-time cryptocurrency dashboard handling thousands of
            websocket updates per second with zero UI lag.
          </p>
        </div>

        <div className="group bg-black/40 p-3 sm:p-5 rounded-lg border border-[#b026ff]/30">
          <div className="flex justify-between items-start gap-3 mb-2">
            <h4 className="text-white font-bold text-base sm:text-lg">
              Neon Runner Engine
            </h4>

            <span className="text-[10px] sm:text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded shrink-0">
              2023
            </span>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-400 mb-3 font-mono">
            HTML5 Canvas • Vanilla JS • Physics
          </p>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            A custom-built 2D physics engine for endless runner games,
            optimized to run at 60fps on mobile browsers.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "contact",
    title: "UPLINK // CONTACT",
    color: "#ff9d00",
    icon: <Mail className="w-7 h-7 sm:w-8 sm:h-8" />,
    content: (
      <div className="text-center space-y-5 sm:space-y-8 py-2 sm:py-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Ready for Lift-Off?
          </h3>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Looking for a creative engineer to propel your next project?
            Let's initiate the launch sequence.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a
            href="#"
            className="
              flex items-center justify-between gap-3
              bg-[#ff9d00]/10
              hover:bg-[#ff9d00]/20
              active:bg-[#ff9d00]/30
              text-[#ff9d00]
              py-3 sm:py-4
              px-4 sm:px-6
              rounded-lg
              border border-[#ff9d00]/50
              transition-all
              font-bold
              tracking-wide
              text-xs sm:text-sm
              touch-manipulation
            "
          >
            <span className="flex items-center gap-2 sm:gap-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              INITIATE EMAIL
            </span>

            <ChevronRight className="w-5 h-5 shrink-0" />
          </a>

          <a
            href="#"
            className="
              flex items-center justify-between gap-3
              bg-white/5
              hover:bg-white/10
              active:bg-white/20
              text-white
              py-3 sm:py-4
              px-4 sm:px-6
              rounded-lg
              border border-white/20
              transition-all
              font-bold
              tracking-wide
              text-xs sm:text-sm
              touch-manipulation
            "
          >
            <span className="flex items-center gap-2 sm:gap-3">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              GITHUB REPOSITORY
            </span>

            <ChevronRight className="w-5 h-5 shrink-0" />
          </a>
        </div>
      </div>
    ),
  },
];

/* =========================================================
   GAME CONFIGURATION
========================================================= */

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 600;

const GRAVITY = 0.5;
const THRUST = 0.9;
const TERMINAL_VELOCITY = 12;

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function NeonRunPortfolio() {
  const [gameState, setGameState] = useState("start");

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const [shields, setShields] = useState(3);

  const [unlockedNodes, setUnlockedNodes] = useState([]);

  const [activeModal, setActiveModal] = useState(null);

  const canvasRef = useRef(null);

  const requestRef = useRef(null);

  const isThrusting = useRef(false);

  const activePointerId = useRef(null);

  /* =======================================================
     GAME ENGINE
  ======================================================= */

  const engine = useRef({
    player: {
      x: 150,
      y: GAME_HEIGHT / 2,
      vy: 0,
      width: 40,
      height: 30,
      invincibleTime: 0,
    },

    scrollSpeed: 6,

    distanceTraveled: 0,

    particles: [],

    lasers: [],

    coins: [],

    vaults: [],

    shakeTime: 0,

    framesSinceLastSpawn: 0,

    bgOffset: 0,
  });

  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.code === "Space" ||
        event.code === "ArrowUp" ||
        event.code === "KeyW"
      ) {
        if (gameState === "playing") {
          event.preventDefault();
          isThrusting.current = true;
        }
      }
    };

    const handleKeyUp = (event) => {
      if (
        event.code === "Space" ||
        event.code === "ArrowUp" ||
        event.code === "KeyW"
      ) {
        event.preventDefault();
        isThrusting.current = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown, {
      passive: false,
    });

    window.addEventListener("keyup", handleKeyUp, {
      passive: false,
    });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState]);

  /* =======================================================
     MOBILE / POINTER CONTROL
  ======================================================= */

  const startThrust = useCallback(
    (event) => {
      if (gameState !== "playing") {
        return;
      }

      if (event) {
        event.preventDefault();

        if (event.pointerId !== undefined) {
          activePointerId.current = event.pointerId;
        }
      }

      isThrusting.current = true;
    },
    [gameState]
  );

  const stopThrust = useCallback((event) => {
    if (event) {
      event.preventDefault();

      if (
        event.pointerId !== undefined &&
        activePointerId.current !== null &&
        event.pointerId !== activePointerId.current
      ) {
        return;
      }
    }

    activePointerId.current = null;
    isThrusting.current = false;
  }, []);

  /* =======================================================
     PARTICLES
  ======================================================= */

  const spawnParticles = useCallback(
    (x, y, color, count, speedFactor = 1) => {
      const state = engine.current;

      for (let i = 0; i < count; i++) {
        state.particles.push({
          x,
          y,

          vx:
            (Math.random() - 0.5) *
              10 *
              speedFactor -
            state.scrollSpeed * 0.5,

          vy:
            (Math.random() - 0.5) *
            10 *
            speedFactor,

          life: 1,

          decay: Math.random() * 0.02 + 0.02,

          color,

          size: Math.random() * 4 + 2,
        });
      }
    },
    []
  );

  /* =======================================================
     SPAWN ENTITIES
  ======================================================= */

  const spawnEntities = useCallback(() => {
    const state = engine.current;

    state.framesSinceLastSpawn++;

    if (
      state.distanceTraveled % 1000 === 0 &&
      state.scrollSpeed < 15
    ) {
      state.scrollSpeed += 0.5;
    }

    /* Lasers */

    if (
      state.framesSinceLastSpawn >
      Math.max(40, 100 - state.scrollSpeed * 2)
    ) {
      if (Math.random() > 0.3) {
        const h = Math.random() * 150 + 100;

        const y =
          Math.random() * (GAME_HEIGHT - h);

        state.lasers.push({
          x: GAME_WIDTH + 50,
          y,
          width: 20,
          height: h,
          passed: false,
        });

        state.framesSinceLastSpawn = 0;
      }
    }

    /* Coins */

    if (Math.random() < 0.05) {
      state.coins.push({
        x: GAME_WIDTH + 50,

        y:
          Math.random() *
            (GAME_HEIGHT - 100) +
          50,

        size: 15,

        sinOffset:
          Math.random() *
          Math.PI *
          2,
      });
    }

    /* Vaults */

    const unlockedCount = unlockedNodes.length;

    if (
      unlockedCount < PORTFOLIO_NODES.length &&
      state.vaults.length === 0
    ) {
      const nextNode =
        PORTFOLIO_NODES[unlockedCount];

      const targetDistance =
        (unlockedCount + 1) * 1500;

      if (
        state.distanceTraveled >
        targetDistance
      ) {
        state.vaults.push({
          x: GAME_WIDTH + 100,

          y:
            GAME_HEIGHT / 2 -
            40,

          width: 80,

          height: 80,

          nodeData: nextNode,

          color: nextNode.color,

          pulse: 0,
        });
      }
    }
  }, [unlockedNodes]);

  /* =======================================================
     GAME LOOP
  ======================================================= */

  const updateAndDraw = useCallback(
    (timestamp) => {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return;
      }

      const state = engine.current;

      /* ===================================================
         UPDATE
      =================================================== */

      if (gameState === "playing") {
        state.distanceTraveled += state.scrollSpeed;

        /* PLAYER PHYSICS */

        if (isThrusting.current) {
          state.player.vy -= THRUST;

          if (Math.random() > 0.5) {
            spawnParticles(
              state.player.x,
              state.player.y + state.player.height,
              "#ff9d00",
              1,
              0.5
            );
          }
        } else {
          state.player.vy += GRAVITY;
        }

        state.player.vy = Math.max(
          -TERMINAL_VELOCITY,
          Math.min(
            TERMINAL_VELOCITY,
            state.player.vy
          )
        );

        state.player.y += state.player.vy;

        /* INVINCIBILITY */

        if (state.player.invincibleTime > 0) {
          state.player.invincibleTime--;
        }

        /* SCREEN BOUNDS */

        if (state.player.y < 0) {
          state.player.y = 0;
          state.player.vy = 0;
        }

        if (
          state.player.y >
          GAME_HEIGHT - state.player.height
        ) {
          state.player.y =
            GAME_HEIGHT -
            state.player.height;

          state.player.vy = 0;
        }

        spawnEntities();

        /* COLLISION HELPER */

        const checkCollision = (r1, r2) => {
          const r2Width =
            r2.width ||
            r2.size * 2;

          const r2Height =
            r2.height ||
            r2.size * 2;

          return (
            r1.x <
              r2.x + r2Width &&
            r1.x + r1.width >
              r2.x &&
            r1.y <
              r2.y + r2Height &&
            r1.y + r1.height >
              r2.y
          );
        };

        /* LASERS */

        for (
          let i = state.lasers.length - 1;
          i >= 0;
          i--
        ) {
          const laser = state.lasers[i];

          laser.x -= state.scrollSpeed;

          if (
            checkCollision(
              state.player,
              laser
            ) &&
            state.player.invincibleTime <= 0
          ) {
            spawnParticles(
              state.player.x + 20,
              state.player.y + 15,
              "#ff0055",
              30,
              2
            );

            state.shakeTime = 15;

            setShields((previous) => {
              const next = previous - 1;

              if (next <= 0) {
                setGameState("gameover");

                const finalScore =
                  Math.floor(
                    state.distanceTraveled / 10 +
                      score
                  );

                setHighScore((current) =>
                  Math.max(
                    current,
                    finalScore
                  )
                );

                isThrusting.current = false;
              } else {
                state.player.invincibleTime = 90;
              }

              return next;
            });
          }

          if (
            !laser.passed &&
            laser.x + laser.width <
              state.player.x
          ) {
            laser.passed = true;

            setScore(
              (current) => current + 50
            );
          }

          if (
            laser.x + laser.width <
            0
          ) {
            state.lasers.splice(i, 1);
          }
        }

        /* COINS */

        for (
          let i = state.coins.length - 1;
          i >= 0;
          i--
        ) {
          const coin = state.coins[i];

          coin.x -= state.scrollSpeed;

          coin.y +=
            Math.sin(
              state.distanceTraveled * 0.05 +
                coin.sinOffset
            ) * 2;

          const coinRect = {
            x: coin.x - coin.size,
            y: coin.y - coin.size,
            width: coin.size * 2,
            height: coin.size * 2,
          };

          if (
            checkCollision(
              state.player,
              coinRect
            )
          ) {
            setScore(
              (current) => current + 100
            );

            spawnParticles(
              coin.x,
              coin.y,
              "#ffff00",
              10
            );

            state.coins.splice(i, 1);

            continue;
          }

          if (
            coin.x + coin.size <
            0
          ) {
            state.coins.splice(i, 1);
          }
        }

        /* VAULTS */

        for (
          let i = state.vaults.length - 1;
          i >= 0;
          i--
        ) {
          const vault = state.vaults[i];

          vault.x -= state.scrollSpeed;

          vault.pulse += 0.1;

          if (
            checkCollision(
              state.player,
              vault
            )
          ) {
            setScore(
              (current) => current + 1000
            );

            spawnParticles(
              vault.x + vault.width / 2,
              vault.y + vault.height / 2,
              vault.color,
              50,
              3
            );

            const node =
              vault.nodeData;

            setActiveModal(node);

            setUnlockedNodes(
              (previous) => {
                if (
                  previous.includes(
                    node.id
                  )
                ) {
                  return previous;
                }

                const next = [
                  ...previous,
                  node.id,
                ];

                if (
                  next.length ===
                  PORTFOLIO_NODES.length
                ) {
                  setTimeout(() => {
                    setGameState("win");
                  }, 800);
                }

                return next;
              }
            );

            state.vaults.splice(i, 1);

            setGameState("paused");

            isThrusting.current = false;

            continue;
          }

          if (
            vault.x + vault.width <
            0
          ) {
            state.vaults.splice(i, 1);
          }
        }
      }

      /* ===================================================
         BACKGROUND
      =================================================== */

      const gradient =
        ctx.createLinearGradient(
          0,
          0,
          0,
          GAME_HEIGHT
        );

      gradient.addColorStop(
        0,
        "#0a001a"
      );

      gradient.addColorStop(
        1,
        "#1a0033"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        GAME_WIDTH,
        GAME_HEIGHT
      );

      ctx.save();

      /* SCREEN SHAKE */

      if (state.shakeTime > 0) {
        const magnitude =
          (state.shakeTime / 15) *
          10;

        const dx =
          (Math.random() - 0.5) *
          magnitude;

        const dy =
          (Math.random() - 0.5) *
          magnitude;

        ctx.translate(dx, dy);

        state.shakeTime--;
      }

      /* ===================================================
         GRID
      =================================================== */

      state.bgOffset =
        (state.bgOffset +
          state.scrollSpeed * 0.5) %
        50;

      ctx.strokeStyle =
        "#b026ff40";

      ctx.lineWidth = 2;

      ctx.beginPath();

      for (
        let i = -state.bgOffset;
        i < GAME_WIDTH;
        i += 50
      ) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 100);

        ctx.moveTo(
          i,
          GAME_HEIGHT - 100
        );

        ctx.lineTo(
          i,
          GAME_HEIGHT
        );
      }

      for (
        let i = 0;
        i <= 100;
        i += 25
      ) {
        ctx.moveTo(0, i);

        ctx.lineTo(
          GAME_WIDTH,
          i
        );

        ctx.moveTo(
          0,
          GAME_HEIGHT - i
        );

        ctx.lineTo(
          GAME_WIDTH,
          GAME_HEIGHT - i
        );
      }

      ctx.stroke();

      /* ===================================================
         PARTICLES
      =================================================== */

      for (
        let i = state.particles.length - 1;
        i >= 0;
        i--
      ) {
        const particle =
          state.particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.life -=
          particle.decay;

        if (particle.life <= 0) {
          state.particles.splice(
            i,
            1
          );
        } else {
          ctx.globalAlpha =
            particle.life;

          ctx.fillStyle =
            particle.color;

          ctx.shadowBlur = 10;

          ctx.shadowColor =
            particle.color;

          ctx.fillRect(
            particle.x,
            particle.y,
            particle.size,
            particle.size
          );

          ctx.globalAlpha = 1;
          ctx.shadowBlur = 0;
        }
      }

      /* ===================================================
         LASERS
      =================================================== */

      state.lasers.forEach(
        (laser) => {
          ctx.shadowBlur = 15;

          ctx.shadowColor =
            "#ff0055";

          ctx.fillStyle =
            "#ff005580";

          ctx.fillRect(
            laser.x,
            laser.y,
            laser.width,
            laser.height
          );

          ctx.fillStyle = "#fff";

          ctx.fillRect(
            laser.x +
              laser.width / 2 -
              2,
            laser.y,
            4,
            laser.height
          );

          ctx.shadowBlur = 0;
        }
      );

      /* ===================================================
         COINS
      =================================================== */

      state.coins.forEach(
        (coin) => {
          ctx.shadowBlur = 10;

          ctx.shadowColor =
            "#ffff00";

          ctx.fillStyle =
            "#ffff00";

          ctx.beginPath();

          ctx.moveTo(
            coin.x,
            coin.y - coin.size
          );

          ctx.lineTo(
            coin.x + coin.size,
            coin.y
          );

          ctx.lineTo(
            coin.x,
            coin.y + coin.size
          );

          ctx.lineTo(
            coin.x - coin.size,
            coin.y
          );

          ctx.closePath();

          ctx.fill();

          ctx.shadowBlur = 0;
        }
      );

      /* ===================================================
         VAULTS
      =================================================== */

      state.vaults.forEach(
        (vault) => {
          const pulseAnim =
            Math.sin(
              vault.pulse
            ) * 5;

          ctx.shadowBlur =
            30 + pulseAnim;

          ctx.shadowColor =
            vault.color;

          ctx.strokeStyle =
            vault.color;

          ctx.lineWidth = 3;

          ctx.strokeRect(
            vault.x -
              pulseAnim / 2,
            vault.y -
              pulseAnim / 2,
            vault.width +
              pulseAnim,
            vault.height +
              pulseAnim
          );

          ctx.fillStyle =
            `${vault.color}40`;

          ctx.fillRect(
            vault.x,
            vault.y,
            vault.width,
            vault.height
          );

          ctx.fillStyle = "#fff";

          ctx.fillRect(
            vault.x + 20,
            vault.y + 20,
            vault.width - 40,
            vault.height - 40
          );

          ctx.shadowBlur = 0;
        }
      );

      /* ===================================================
         PLAYER
      =================================================== */

      if (
        state.player.invincibleTime <=
          0 ||
        Math.floor(
          state.player.invincibleTime / 5
        ) %
          2 ===
          0
      ) {
        const player =
          state.player;

        ctx.save();

        ctx.translate(
          player.x +
            player.width / 2,
          player.y +
            player.height / 2
        );

        const tilt =
          Math.max(
            -0.5,
            Math.min(
              0.5,
              player.vy * 0.05
            )
          );

        ctx.rotate(tilt);

        ctx.shadowBlur = 20;

        ctx.shadowColor =
          "#00f3ff";

        /* Ship */

        ctx.fillStyle =
          "#00f3ff";

        ctx.beginPath();

        ctx.moveTo(
          player.width / 2,
          0
        );

        ctx.lineTo(
          -player.width / 2,
          -player.height / 2
        );

        ctx.lineTo(
          -player.width / 3,
          0
        );

        ctx.lineTo(
          -player.width / 2,
          player.height / 2
        );

        ctx.closePath();

        ctx.fill();

        /* Engine */

        ctx.fillStyle = "#fff";

        ctx.beginPath();

        ctx.arc(
          -player.width / 3,
          0,
          4,
          0,
          Math.PI * 2
        );

        ctx.fill();

        /* Flame */

        if (isThrusting.current) {
          ctx.fillStyle =
            "#ff9d00";

          ctx.shadowColor =
            "#ff9d00";

          ctx.beginPath();

          ctx.moveTo(
            -player.width / 3,
            -5
          );

          ctx.lineTo(
            -player.width / 2 -
              Math.random() * 15,
            0
          );

          ctx.lineTo(
            -player.width / 3,
            5
          );

          ctx.closePath();

          ctx.fill();
        }

        ctx.restore();
      }

      ctx.restore();

      requestRef.current =
        requestAnimationFrame(
          updateAndDraw
        );
    },
    [
      gameState,
      unlockedNodes,
      spawnEntities,
      spawnParticles,
      score,
    ]
  );

  /* =======================================================
     START GAME LOOP
  ======================================================= */

  useEffect(() => {
    requestRef.current =
      requestAnimationFrame(
        updateAndDraw
      );

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(
          requestRef.current
        );
      }
    };
  }, [updateAndDraw]);

  /* =======================================================
     LOCK PAGE SCROLL
  ======================================================= */

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow =
      html.style.overflow;

    const previousBodyOverflow =
      body.style.overflow;

    const previousBodyPosition =
      body.style.position;

    const previousBodyWidth =
      body.style.width;

    const previousBodyHeight =
      body.style.height;

    const previousBodyTouchAction =
      body.style.touchAction;

    html.style.overflow = "hidden";

    body.style.overflow = "hidden";

    body.style.position = "fixed";

    body.style.width = "100%";

    body.style.height = "100%";

    body.style.touchAction = "none";

    return () => {
      html.style.overflow =
        previousHtmlOverflow;

      body.style.overflow =
        previousBodyOverflow;

      body.style.position =
        previousBodyPosition;

      body.style.width =
        previousBodyWidth;

      body.style.height =
        previousBodyHeight;

      body.style.touchAction =
        previousBodyTouchAction;
    };
  }, []);

  /* =======================================================
     STOP THRUST WHEN PAGE HIDDEN
  ======================================================= */

  useEffect(() => {
    const handleVisibility =
      () => {
        if (
          document.hidden
        ) {
          isThrusting.current =
            false;
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
    const state =
      engine.current;

    state.player = {
      x: 150,

      y:
        GAME_HEIGHT / 2,

      vy: 0,

      width: 40,

      height: 30,

      invincibleTime: 60,
    };

    state.scrollSpeed = 6;

    state.distanceTraveled = 0;

    state.particles = [];

    state.lasers = [];

    state.coins = [];

    state.vaults = [];

    state.framesSinceLastSpawn = 0;

    state.bgOffset = 0;

    state.shakeTime = 0;

    isThrusting.current = false;

    activePointerId.current = null;

    setScore(0);

    setShields(3);

    setUnlockedNodes([]);

    setActiveModal(null);

    setGameState("playing");
  };

  /* =======================================================
     RESUME GAME
  ======================================================= */

  const resumeGame = () => {
    setActiveModal(null);

    engine.current.player.invincibleTime =
      60;

    isThrusting.current = false;

    activePointerId.current = null;

    setGameState("playing");
  };

  /* =======================================================
     FINAL SCORE
  ======================================================= */

  const finalScore =
    Math.floor(
      (engine.current?.distanceTraveled ||
        0) /
        10 +
        score
    );

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main
      className="
        fixed
        inset-0
        w-full
        h-[100dvh]
        bg-[#05000a]
        flex
        items-center
        justify-center
        p-0
        sm:p-3
        md:p-6
        font-sans
        select-none
        overflow-hidden
        touch-none
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="
            absolute
            top-[-20%]
            left-[-10%]
            w-[60%]
            h-[50%]
            bg-[#b026ff]
            rounded-full
            mix-blend-screen
            blur-[150px]
            opacity-20
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
            bg-[#00f3ff]
            rounded-full
            mix-blend-screen
            blur-[150px]
            opacity-20
          "
        />
      </div>

      {/* =================================================
          MAIN GAME WRAPPER
      ================================================= */}

      <div
        className="
          relative
          w-full
          max-w-5xl
          max-h-full
          flex
          flex-col
          gap-1
          sm:gap-3
          md:gap-4
          z-10
          overflow-hidden
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-1.5
            sm:flex-row
            sm:justify-between
            sm:items-end
            px-1
            sm:px-2
            shrink-0
          "
        >
          <div>
            <h1
              className="
                text-lg
                sm:text-2xl
                md:text-4xl
                font-black
                tracking-[0.12em]
                sm:tracking-widest
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#b026ff]
                to-[#00f3ff]
                uppercase
                mb-1
              "
            >
              NEON_RUN
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
              PORTFOLIO PROTOCOL // V3.0
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
              gap-2
              sm:gap-4
              md:gap-8
              items-center
              bg-white/5
              border
              border-[#b026ff]/30
              rounded-lg
              px-2
              sm:px-4
              md:px-6
              py-1.5
              sm:py-3
              shrink-0
            "
          >
            {/* Integrity */}

            <div className="flex flex-col items-center">
              <span
                className="
                  text-[6px]
                  sm:text-[8px]
                  md:text-[10px]
                  text-gray-400
                  font-mono
                  tracking-widest
                  mb-0.5
                "
              >
                INTEGRITY
              </span>

              <div className="flex gap-0.5 sm:gap-1">
                {[1, 2, 3].map(
                  (i) => (
                    <Shield
                      key={i}
                      className={`
                        w-3
                        h-3
                        sm:w-4
                        sm:h-4
                        md:w-5
                        md:h-5
                        ${
                          i <= shields
                            ? "text-[#00ff66] drop-shadow-[0_0_5px_#00ff66]"
                            : "text-gray-700"
                        }
                      `}
                      fill={
                        i <= shields
                          ? "currentColor"
                          : "none"
                      }
                    />
                  )
                )}
              </div>
            </div>

            <div className="w-px h-5 sm:h-8 bg-white/20" />

            {/* Max */}

            <div className="flex flex-col items-center">
              <span
                className="
                  text-[6px]
                  sm:text-[8px]
                  md:text-[10px]
                  text-gray-400
                  font-mono
                  tracking-widest
                  flex
                  items-center
                  gap-1
                "
              >
                <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ff9d00]" />
                MAX
              </span>

              <span
                className="
                  text-xs
                  sm:text-base
                  md:text-xl
                  font-bold
                  text-gray-400
                  font-mono
                  leading-none
                "
              >
                {highScore
                  .toString()
                  .padStart(6, "0")}
              </span>
            </div>

            <div className="w-px h-5 sm:h-8 bg-white/20" />

            {/* Data */}

            <div className="flex flex-col items-center">
              <span
                className="
                  text-[6px]
                  sm:text-[8px]
                  md:text-[10px]
                  text-[#00f3ff]
                  font-mono
                  tracking-widest
                "
              >
                DATA
              </span>

              <span
                className="
                  text-sm
                  sm:text-lg
                  md:text-2xl
                  font-black
                  text-white
                  font-mono
                  leading-none
                "
              >
                {Math.floor(
                  (engine.current
                    ?.distanceTraveled ||
                    0) /
                    10 +
                    score
                )
                  .toString()
                  .padStart(6, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            GAME CONTAINER
        ================================================= */}

        <div
          className="
            relative
            w-full
            aspect-[16/10]
            sm:aspect-[16/9]
            md:aspect-[10/6]
            max-h-[calc(100dvh-115px)]
            sm:max-h-[calc(100dvh-150px)]
            md:max-h-none
            bg-[#05000a]
            rounded-lg
            sm:rounded-xl
            overflow-hidden
            border-2
            border-[#b026ff]/40
            shadow-[0_0_30px_rgba(176,38,255,0.2)]
            touch-none
            shrink
          "
          onPointerDown={(event) => {
            if (
              event.target ===
              canvasRef.current
            ) {
              startThrust(event);
            }
          }}
          onPointerUp={stopThrust}
          onPointerCancel={stopThrust}
        >
          <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="
              block
              w-full
              h-full
              cursor-pointer
              touch-none
              select-none
            "
            onContextMenu={(event) =>
              event.preventDefault()
            }
          />

          {/* =================================================
              MOBILE THRUST BUTTON
          ================================================= */}

          {gameState === "playing" && (
            <button
              type="button"
              aria-label="Hold to thrust"
              onPointerDown={(event) => {
                event.stopPropagation();
                startThrust(event);
              }}
              onPointerUp={(event) => {
                event.stopPropagation();
                stopThrust(event);
              }}
              onPointerCancel={(event) => {
                event.stopPropagation();
                stopThrust(event);
              }}
              onPointerLeave={(event) => {
                if (
                  event.pointerType !==
                  "touch"
                ) {
                  event.stopPropagation();
                  stopThrust(event);
                }
              }}
              className="
                md:hidden
                absolute
                bottom-2
                right-2
                sm:bottom-5
                sm:right-5
                w-16
                h-16
                sm:w-24
                sm:h-24
                rounded-full
                border-2
                border-[#00f3ff]
                bg-[#00f3ff]/10
                active:bg-[#00f3ff]/30
                active:scale-95
                text-[#00f3ff]
                flex
                flex-col
                items-center
                justify-center
                gap-0.5
                sm:gap-1
                shadow-[0_0_25px_rgba(0,243,255,0.3)]
                touch-none
                touch-manipulation
                z-30
                transition-transform
              "
            >
              <Zap
                className="
                  w-5
                  h-5
                  sm:w-8
                  sm:h-8
                  fill-current
                "
              />

              <span
                className="
                  text-[7px]
                  sm:text-[9px]
                  font-black
                  tracking-widest
                "
              >
                THRUST
              </span>
            </button>
          )}

          {/* =================================================
              MOBILE HINT
          ================================================= */}

          {gameState === "playing" && (
            <div
              className="
                md:hidden
                absolute
                bottom-2
                left-2
                sm:bottom-4
                sm:left-4
                px-2
                py-1
                rounded
                bg-black/60
                border
                border-white/10
                text-[7px]
                sm:text-[8px]
                text-gray-400
                font-mono
                pointer-events-none
                z-20
              "
            >
              HOLD TO FLY
            </div>
          )}

          {/* =================================================
              START SCREEN
          ================================================= */}

          {gameState === "start" && (
            <div
              className="
                absolute
                inset-0
                bg-[#0a001a]/90
                backdrop-blur-md
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
                  bg-[#1a0033]/90
                  border-2
                  border-[#b026ff]
                  p-4
                  sm:p-6
                  md:p-10
                  rounded-xl
                  sm:rounded-2xl
                  max-w-lg
                  w-full
                  text-center
                  shadow-[0_0_50px_rgba(176,38,255,0.3)]
                  relative
                  max-h-full
                  overflow-y-auto
                  overscroll-contain
                  touch-auto
                "
              >
                <Zap
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
                    sm:mb-4
                    md:mb-6
                  "
                />

                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-4xl
                    font-black
                    mb-2
                    text-white
                    tracking-widest
                    uppercase
                  "
                >
                  SYSTEM ONLINE
                </h2>

                <p
                  className="
                    text-gray-300
                    font-mono
                    text-[9px]
                    sm:text-xs
                    md:text-sm
                    mb-4
                    sm:mb-6
                    md:mb-8
                    leading-relaxed
                  "
                >
                  Welcome to the Neon Protocol.
                  Navigate the data stream to extract
                  portfolio records.
                </p>

                <div
                  className="
                    bg-black/50
                    rounded-lg
                    p-3
                    sm:p-4
                    mb-4
                    sm:mb-6
                    md:mb-8
                    text-left
                    border
                    border-[#b026ff]/30
                    text-[9px]
                    sm:text-xs
                    md:text-sm
                    font-mono
                    text-gray-300
                  "
                >
                  <span
                    className="
                      text-[#ff9d00]
                      block
                      mb-2
                      font-bold
                      tracking-widest
                    "
                  >
                    HOW TO FLY:
                  </span>

                  • Desktop: Hold{" "}
                  <strong className="text-white">
                    SPACE
                  </strong>
                  ,{" "}
                  <strong className="text-white">
                    W
                  </strong>{" "}
                  or{" "}
                  <strong className="text-white">
                    CLICK
                  </strong>
                  .
                  <br />

                  • Mobile: Hold the{" "}
                  <strong className="text-[#00f3ff]">
                    THRUST
                  </strong>{" "}
                  button.
                  <br />

                  • Release to descend.
                  <br />

                  • Dodge red lasers.
                  <br />

                  • Collect yellow data shards.
                  <br />

                  • Hit Data Vaults to unlock portfolio
                  nodes.
                </div>

                <button
                  type="button"
                  onClick={startGame}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    px-6
                    sm:px-8
                    py-3
                    sm:py-4
                    font-bold
                    text-white
                    bg-gradient-to-r
                    from-[#b026ff]
                    to-[#00f3ff]
                    rounded-lg
                    transition-all
                    hover:scale-105
                    active:scale-[0.98]
                    shadow-[0_0_20px_rgba(0,243,255,0.5)]
                    border
                    border-white/20
                    touch-manipulation
                  "
                >
                  <Play className="w-5 h-5 fill-current" />

                  <span className="tracking-widest uppercase text-sm sm:text-base">
                    Ignite Thrusters
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* =================================================
              PORTFOLIO MODAL
          ================================================= */}

          {gameState === "paused" &&
            activeModal && (
              <div
                className="
                  absolute
                  inset-0
                  bg-black/80
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
                    bg-[#0a0a15]
                    rounded-lg
                    sm:rounded-xl
                    overflow-hidden
                    border-2
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
                      `0 0 50px ${activeModal.color}40`,
                  }}
                >
                  {/* Header */}

                  <div
                    className="
                      px-3
                      sm:px-4
                      md:px-6
                      py-3
                      sm:py-4
                      border-b
                      border-white/10
                      flex
                      items-center
                      gap-2
                      sm:gap-3
                      shrink-0
                    "
                    style={{
                      backgroundColor:
                        `${activeModal.color}15`,
                    }}
                  >
                    <div className="shrink-0">
                      {activeModal.icon}
                    </div>

                    <h2
                      className="
                        text-xs
                        sm:text-lg
                        md:text-2xl
                        font-black
                        font-mono
                        tracking-wider
                        break-words
                        leading-tight
                      "
                      style={{
                        color:
                          activeModal.color,
                      }}
                    >
                      {activeModal.title}
                    </h2>
                  </div>

                  {/* Scrollable Content */}

                  <div
                    className="
                      p-3
                      sm:p-5
                      md:p-8
                      flex-1
                      min-h-0
                      overflow-y-auto
                      overscroll-contain
                      touch-auto
                      bg-gradient-to-b
                      from-transparent
                      to-black/80
                      custom-scrollbar
                    "
                  >
                    {activeModal.content}
                  </div>

                  {/* Footer */}

                  <div
                    className="
                      px-3
                      sm:px-4
                      md:px-6
                      py-3
                      sm:py-4
                      bg-black
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
                        text-[8px]
                        sm:text-[10px]
                        md:text-xs
                        text-gray-500
                        font-mono
                        tracking-widest
                        text-center
                        sm:text-left
                      "
                    >
                      NODES UNLOCKED:{" "}
                      <span className="text-white">
                        {unlockedNodes.length} / 4
                      </span>
                    </span>

                    <button
                      type="button"
                      onClick={resumeGame}
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        sm:px-6
                        py-2.5
                        sm:py-3
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
                        touch-manipulation
                      "
                    >
                      RESUME FLIGHT

                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

          {/* =================================================
              GAME OVER
          ================================================= */}

          {gameState === "gameover" && (
            <div
              className="
                absolute
                inset-0
                bg-red-950/90
                backdrop-blur-md
                flex
                items-center
                justify-center
                p-3
                sm:p-6
                z-50
                overflow-hidden
              "
            >
              <div
                className="
                  text-center
                  bg-black/50
                  p-5
                  sm:p-8
                  rounded-xl
                  sm:rounded-2xl
                  border
                  border-red-500/50
                  shadow-[0_0_50px_rgba(255,0,0,0.2)]
                  w-full
                  max-w-md
                "
              >
                <ShieldAlert
                  className="
                    w-12
                    h-12
                    sm:w-16
                    sm:h-16
                    md:w-20
                    md:h-20
                    text-red-500
                    mx-auto
                    mb-4
                    animate-pulse
                  "
                />

                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-5xl
                    font-black
                    text-white
                    mb-2
                    tracking-widest
                  "
                >
                  HULL BREACH
                </h2>

                <p
                  className="
                    text-red-400
                    font-mono
                    mb-5
                    sm:mb-8
                    text-xs
                    sm:text-sm
                    md:text-lg
                  "
                >
                  Integrity critical. Ship destroyed.
                </p>

                <div
                  className="
                    bg-red-500/10
                    border
                    border-red-500/30
                    rounded-lg
                    p-3
                    sm:p-4
                    mb-5
                    sm:mb-8
                    inline-block
                  "
                >
                  <p className="text-[9px] sm:text-xs text-gray-400 font-mono mb-1">
                    FINAL SCORE
                  </p>

                  <p
                    className="
                      text-2xl
                      sm:text-3xl
                      font-black
                      text-white
                      font-mono
                    "
                  >
                    {finalScore}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={startGame}
                  className="
                    flex
                    items-center
                    justify-center
                    mx-auto
                    gap-3
                    px-6
                    sm:px-8
                    py-3
                    sm:py-4
                    bg-red-600
                    hover:bg-red-500
                    active:bg-red-700
                    text-white
                    rounded-lg
                    transition-colors
                    font-bold
                    font-mono
                    tracking-widest
                    text-xs
                    sm:text-sm
                    shadow-[0_0_15px_rgba(255,0,0,0.5)]
                    touch-manipulation
                  "
                >
                  <RotateCcw className="w-5 h-5" />

                  REBOOT SYSTEM
                </button>
              </div>
            </div>
          )}

          {/* =================================================
              WIN SCREEN
          ================================================= */}

          {gameState === "win" && (
            <div
              className="
                absolute
                inset-0
                bg-[#0a001a]/95
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
                <Terminal
                  className="
                    w-14
                    h-14
                    sm:w-20
                    sm:h-20
                    md:w-24
                    md:h-24
                    text-[#00ff66]
                    mx-auto
                    mb-4
                    sm:mb-6
                    drop-shadow-[0_0_20px_rgba(0,255,102,0.8)]
                  "
                />

                <h2
                  className="
                    text-2xl
                    sm:text-4xl
                    md:text-6xl
                    font-black
                    text-white
                    mb-2
                    sm:mb-4
                    tracking-tighter
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#00ff66]
                    to-white
                  "
                >
                  DOWNLOAD COMPLETE
                </h2>

                <p
                  className="
                    text-[#00ff66]
                    font-mono
                    mb-6
                    sm:mb-8
                    md:mb-10
                    text-xs
                    sm:text-sm
                    md:text-xl
                    tracking-widest
                  "
                >
                  All portfolio data securely extracted.
                </p>

                <div
                  className="
                    inline-block
                    bg-white/5
                    border
                    border-white/10
                    p-4
                    sm:p-6
                    md:p-8
                    rounded-xl
                    mb-6
                    sm:mb-8
                    md:mb-10
                  "
                >
                  <div className="text-[9px] sm:text-xs md:text-sm text-gray-400 font-mono mb-1">
                    FINAL SCORE
                  </div>

                  <div
                    className="
                      text-4xl
                      sm:text-5xl
                      md:text-6xl
                      font-black
                      text-[#00ff66]
                      font-mono
                    "
                  >
                    {finalScore}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={startGame}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    mx-auto
                    px-6
                    sm:px-8
                    py-3
                    sm:py-4
                    bg-white/10
                    hover:bg-white/20
                    active:bg-white/30
                    text-white
                    rounded-lg
                    transition-colors
                    font-bold
                    font-mono
                    border
                    border-white/20
                    text-xs
                    sm:text-sm
                    touch-manipulation
                  "
                >
                  <RotateCcw className="w-5 h-5" />

                  FLY AGAIN
                </button>
              </div>
            </div>
          )}
        </div>

        {/* =================================================
            NODE TRACKER
        ================================================= */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-center
            md:justify-between
            items-center
            gap-1.5
            sm:gap-3
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
                      sm:w-11
                      sm:h-11
                      md:w-14
                      md:h-14
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      border-2
                      transition-all
                      duration-500
                      ${
                        isUnlocked
                          ? "bg-black text-white scale-100"
                          : "bg-transparent border-[#b026ff]/30 text-[#b026ff]/30 scale-90"
                      }
                    `}
                    style={{
                      borderColor:
                        isUnlocked
                          ? node.color
                          : "",

                      boxShadow:
                        isUnlocked
                          ? `0 0 20px ${node.color}60`
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
                          "w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-7 md:h-7",
                      }
                    )}
                  </div>
                );
              }
            )}
          </div>

          {/* Desktop hint */}

          <div
            className="
              hidden
              md:block
              text-right
              text-gray-500
              font-mono
              text-sm
              border
              border-gray-800
              bg-black/50
              px-4
              py-2
              rounded-lg
            "
          >
            Hold{" "}
            <kbd className="bg-gray-800 px-2 py-1 rounded text-[#00f3ff] font-bold mx-1">
              SPACE
            </kbd>{" "}
            or{" "}
            <kbd className="bg-gray-800 px-2 py-1 rounded text-[#00f3ff] font-bold mx-1">
              CLICK
            </kbd>{" "}
            to Thrust
          </div>

          {/* Mobile hint */}

          <div
            className="
              md:hidden
              text-[7px]
              sm:text-[9px]
              text-gray-600
              font-mono
              tracking-widest
              uppercase
              text-center
            "
          >
            Hold THRUST to fly
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
              touch-action: none;
            }

            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(255,255,255,0.2) transparent;
            }

            .custom-scrollbar::-webkit-scrollbar {
              width: 5px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255,255,255,0.05);
              border-radius: 5px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255,255,255,0.2);
              border-radius: 5px;
            }

            @supports (-webkit-touch-callout: none) {
              html,
              body {
                height: -webkit-fill-available;
              }

              body {
                min-height: -webkit-fill-available;
              }
            }
          `,
        }}
      />
    </main>
  );
}