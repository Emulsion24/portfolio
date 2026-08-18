"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import {
  Terminal,
  User,
  Code,
  Mail,
  Play,
  RotateCcw,
  ChevronRight,
  ShieldAlert,
  Cpu,
  Award,
} from "lucide-react";

const PORTFOLIO_NODES = [
  {
    id: "origin",
    title: "SYS.ADMIN // ORIGIN",
    color: "#00f3ff",
    icon: <User className="w-5 h-5 sm:w-6 sm:h-6" />,
    content: (
      <div className="space-y-4 text-gray-300">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Full Stack Developer & Systems Architect
        </h3>

        <p className="text-sm sm:text-base">
          I build secure, scalable, and highly interactive digital
          experiences. I don't just write code; I engineer robust systems
          designed for high performance.
        </p>

        <p className="text-sm sm:text-base">
          My background bridges the gap between heavily optimized backend
          logic and fluid, engaging frontend user interfaces.
        </p>
      </div>
    ),
  },

  {
    id: "stack",
    title: "CORE // TECH_STACK",
    color: "#00ff66",
    icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
          <h4 className="text-[#00ff66] font-bold mb-3 text-xs sm:text-sm tracking-widest">
            FRONTEND
          </h4>

          <ul className="text-xs sm:text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
              React & Next.js
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
              TypeScript
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
              Tailwind CSS
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
              HTML5 Canvas/WebGL
            </li>
          </ul>
        </div>

        <div className="bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10">
          <h4 className="text-[#00ff66] font-bold mb-3 text-xs sm:text-sm tracking-widest">
            BACKEND
          </h4>

          <ul className="text-xs sm:text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
              Node.js & Python
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
              PostgreSQL / Redis
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
              AWS Infrastructure
            </li>

            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66]" />
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
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    content: (
      <div className="space-y-3 sm:space-y-4">
        <div className="group bg-black/40 p-4 sm:p-5 rounded-lg border border-[#b026ff]/30 hover:bg-[#b026ff]/10 hover:border-[#b026ff] transition-all">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h4 className="text-white font-bold text-base sm:text-lg">
              Vortex Trading Platform
            </h4>

            <span className="text-[10px] sm:text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded">
              2024
            </span>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-400 mb-3 font-mono">
            React • WebSockets • Go
          </p>

          <p className="text-xs sm:text-sm text-gray-300">
            A real-time cryptocurrency dashboard handling thousands of
            websocket updates per second with zero UI lag.
          </p>
        </div>

        <div className="group bg-black/40 p-4 sm:p-5 rounded-lg border border-[#b026ff]/30 hover:bg-[#b026ff]/10 hover:border-[#b026ff] transition-all">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h4 className="text-white font-bold text-base sm:text-lg">
              Nexus E-Commerce
            </h4>

            <span className="text-[10px] sm:text-xs bg-[#b026ff]/20 text-[#b026ff] px-2 py-1 rounded">
              2023
            </span>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-400 mb-3 font-mono">
            Next.js • Stripe • Three.js
          </p>

          <p className="text-xs sm:text-sm text-gray-300">
            Headless storefront featuring 3D product previews and ultra-fast
            page loads.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "contact",
    title: "UPLINK // CONTACT",
    color: "#ff9d00",
    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    content: (
      <div className="text-center space-y-5 sm:space-y-8 py-2 sm:py-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Open for Collaboration
          </h3>

          <p className="text-sm sm:text-base text-gray-400">
            Looking for a creative engineer to fortify your team? Let's open
            a secure channel.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a
            href="#"
            className="flex items-center justify-between gap-3 bg-[#ff9d00]/10 hover:bg-[#ff9d00]/20 text-[#ff9d00] py-3 sm:py-4 px-4 sm:px-6 rounded-lg border border-[#ff9d00]/50 transition-all font-bold tracking-wide text-xs sm:text-sm"
          >
            <span className="flex items-center gap-2 sm:gap-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              INITIATE EMAIL
            </span>

            <ChevronRight className="w-5 h-5" />
          </a>

          <a
            href="#"
            className="flex items-center justify-between gap-3 bg-white/5 hover:bg-white/10 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg border border-white/20 transition-all font-bold tracking-wide text-xs sm:text-sm"
          >
            <span className="flex items-center gap-2 sm:gap-3">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              GITHUB REPOSITORY
            </span>

            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    ),
  },
];

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 700;

export default function BreakoutPortfolio() {
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [unlockedNodes, setUnlockedNodes] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  const canvasRef = useRef(null);
  const requestRef = useRef(null);

  const engine = useRef({
    paddle: {
      x: GAME_WIDTH / 2 - 60,
      y: GAME_HEIGHT - 40,
      w: 120,
      h: 12,
      speed: 8,
      dx: 0,
      color: "#fff",
    },

    ball: {
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT - 60,
      radius: 8,
      speed: 6,
      dx: 0,
      dy: 0,
      active: false,
      trail: [],
    },

    bricks: [],
    particles: [],
    shakeTime: 0,

    keys: {
      ArrowLeft: false,
      ArrowRight: false,
      KeyA: false,
      KeyD: false,
      Space: false,
    },
  });

  const resetBall = useCallback(() => {
    const state = engine.current;

    state.ball.x =
      state.paddle.x + state.paddle.w / 2;

    state.ball.y =
      state.paddle.y - state.ball.radius - 2;

    state.ball.dx = 0;
    state.ball.dy = 0;
    state.ball.active = false;
    state.ball.trail = [];
  }, []);

  const launchBall = useCallback(() => {
    const state = engine.current;

    if (!state.ball.active) {
      state.ball.active = true;
      state.ball.dy = -state.ball.speed;

      state.ball.dx =
        (Math.random() > 0.5 ? 1 : -1) *
        (state.ball.speed * 0.5);
    }
  }, []);

  const initLevel = useCallback(() => {
    const state = engine.current;

    state.bricks = [];

    const rows = 6;
    const cols = 10;

    const brickWidth = 80;
    const brickHeight = 25;
    const padding = 12;

    const offsetX =
      (GAME_WIDTH -
        (cols * (brickWidth + padding) - padding)) /
      2;

    const offsetY = 80;

    const portfolioPositions = new Set();

    while (portfolioPositions.size < 4) {
      portfolioPositions.add(
        Math.floor(Math.random() * (rows * cols))
      );
    }

    const portfolioArray = Array.from(
      portfolioPositions
    );

    let brickIndex = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x =
          offsetX + c * (brickWidth + padding);

        const y =
          offsetY + r * (brickHeight + padding);

        let type = "normal";

        let color = `hsl(${200 + r * 15}, 80%, 60%)`;

        let nodeData = null;

        const pIndex =
          portfolioArray.indexOf(brickIndex);

        if (pIndex !== -1) {
          type = "vault";
          nodeData = PORTFOLIO_NODES[pIndex];
          color = nodeData.color;
        }

        if (
          type === "normal" ||
          (
            type === "vault" &&
            !unlockedNodes.includes(nodeData.id)
          )
        ) {
          state.bricks.push({
            x,
            y,
            w: brickWidth,
            h: brickHeight,
            status: 1,
            type,
            color,
            nodeData,
          });
        }

        brickIndex++;
      }
    }

    resetBall();
  }, [unlockedNodes, resetBall]);

  const spawnParticles = useCallback(
    (x, y, color, count) => {
      const state = engine.current;

      for (let i = 0; i < count; i++) {
        state.particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: 1,
          decay: Math.random() * 0.04 + 0.02,
          color,
          size: Math.random() * 4 + 2,
        });
      }
    },
    []
  );

  /*
   * Keyboard controls
   */
  useEffect(() => {
    const handleKeyDown = (e) => {
      const keys = engine.current.keys;

      if (Object.prototype.hasOwnProperty.call(keys, e.code)) {
        keys[e.code] = true;
      }

      if (
        Object.prototype.hasOwnProperty.call(
          keys,
          e.key
        )
      ) {
        keys[e.key] = true;
      }

      if (
        e.code === "Space" &&
        gameState === "playing"
      ) {
        e.preventDefault();
        launchBall();
      }
    };

    const handleKeyUp = (e) => {
      const keys = engine.current.keys;

      if (Object.prototype.hasOwnProperty.call(keys, e.code)) {
        keys[e.code] = false;
      }

      if (
        Object.prototype.hasOwnProperty.call(
          keys,
          e.key
        )
      ) {
        keys[e.key] = false;
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    window.addEventListener(
      "keyup",
      handleKeyUp
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "keyup",
        handleKeyUp
      );
    };
  }, [gameState, launchBall]);

  /*
   * Mouse controls
   */
  const movePaddle = useCallback(
    (clientX) => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const rect =
        canvas.getBoundingClientRect();

      const scaleX =
        GAME_WIDTH / rect.width;

      const mouseX =
        (clientX - rect.left) * scaleX;

      const state = engine.current;

      state.paddle.x =
        mouseX - state.paddle.w / 2;

      if (state.paddle.x < 0) {
        state.paddle.x = 0;
      }

      if (
        state.paddle.x + state.paddle.w >
        GAME_WIDTH
      ) {
        state.paddle.x =
          GAME_WIDTH - state.paddle.w;
      }
    },
    []
  );

  const handleMouseMove = (e) => {
    if (gameState !== "playing") return;

    movePaddle(e.clientX);
  };

  /*
   * Mobile pointer controls
   */
  const handlePointerMove = (e) => {
    if (
      gameState !== "playing" ||
      e.pointerType === "mouse"
    ) {
      return;
    }

    e.preventDefault();

    movePaddle(e.clientX);
  };

  const handleTouchStart = (e) => {
    if (gameState !== "playing") return;

    e.preventDefault();

    launchBall();
  };

  /*
   * Main game loop
   */
  const updateAndDraw = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const state = engine.current;

    /*
     * Physics
     */
    if (gameState === "playing") {
      /*
       * Keyboard paddle movement
       */
      if (
        state.keys.ArrowLeft ||
        state.keys.KeyA
      ) {
        state.paddle.x -=
          state.paddle.speed;
      }

      if (
        state.keys.ArrowRight ||
        state.keys.KeyD
      ) {
        state.paddle.x +=
          state.paddle.speed;
      }

      /*
       * Paddle boundaries
       */
      if (state.paddle.x < 0) {
        state.paddle.x = 0;
      }

      if (
        state.paddle.x + state.paddle.w >
        GAME_WIDTH
      ) {
        state.paddle.x =
          GAME_WIDTH - state.paddle.w;
      }

      /*
       * Ball
       */
      if (state.ball.active) {
        state.ball.x += state.ball.dx;
        state.ball.y += state.ball.dy;

        state.ball.trail.push({
          x: state.ball.x,
          y: state.ball.y,
        });

        if (state.ball.trail.length > 8) {
          state.ball.trail.shift();
        }

        /*
         * Left wall
         */
        if (
          state.ball.x -
            state.ball.radius <
          0
        ) {
          state.ball.x =
            state.ball.radius;

          state.ball.dx =
            -state.ball.dx;
        }

        /*
         * Right wall
         */
        if (
          state.ball.x +
            state.ball.radius >
          GAME_WIDTH
        ) {
          state.ball.x =
            GAME_WIDTH -
            state.ball.radius;

          state.ball.dx =
            -state.ball.dx;
        }

        /*
         * Top wall
         */
        if (
          state.ball.y -
            state.ball.radius <
          0
        ) {
          state.ball.y =
            state.ball.radius;

          state.ball.dy =
            -state.ball.dy;
        }

        /*
         * Bottom wall
         */
        if (
          state.ball.y +
            state.ball.radius >
          GAME_HEIGHT
        ) {
          setLives((currentLives) => {
            const newLives =
              currentLives - 1;

            if (newLives <= 0) {
              setGameState("gameover");
            }

            return newLives;
          });

          state.shakeTime = 15;

          resetBall();
        }

        /*
         * Paddle collision
         */
        if (
          state.ball.y +
            state.ball.radius >
            state.paddle.y &&
          state.ball.y -
            state.ball.radius <
            state.paddle.y +
              state.paddle.h &&
          state.ball.x >
            state.paddle.x &&
          state.ball.x <
            state.paddle.x +
              state.paddle.w
        ) {
          let hitPoint =
            state.ball.x -
            (
              state.paddle.x +
              state.paddle.w / 2
            );

          hitPoint =
            hitPoint /
            (state.paddle.w / 2);

          const maxAngle =
            Math.PI / 3;

          const angle =
            hitPoint * maxAngle;

          state.ball.speed =
            Math.min(
              state.ball.speed + 0.1,
              12
            );

          state.ball.dx =
            state.ball.speed *
            Math.sin(angle);

          state.ball.dy =
            -state.ball.speed *
            Math.cos(angle);

          state.ball.y =
            state.paddle.y -
            state.ball.radius;

          spawnParticles(
            state.ball.x,
            state.ball.y +
              state.ball.radius,
            "#fff",
            5
          );
        }

        /*
         * Brick collision
         */
        let allBricksCleared = true;

        for (
          let i = 0;
          i < state.bricks.length;
          i++
        ) {
          const brick =
            state.bricks[i];

          if (brick.status !== 1) {
            continue;
          }

          allBricksCleared = false;

          let testX =
            state.ball.x;

          let testY =
            state.ball.y;

          if (
            state.ball.x <
            brick.x
          ) {
            testX = brick.x;
          } else if (
            state.ball.x >
            brick.x + brick.w
          ) {
            testX =
              brick.x +
              brick.w;
          }

          if (
            state.ball.y <
            brick.y
          ) {
            testY = brick.y;
          } else if (
            state.ball.y >
            brick.y + brick.h
          ) {
            testY =
              brick.y +
              brick.h;
          }

          const distX =
            state.ball.x -
            testX;

          const distY =
            state.ball.y -
            testY;

          const distance =
            Math.sqrt(
              distX * distX +
              distY * distY
            );

          if (
            distance <=
            state.ball.radius
          ) {
            brick.status = 0;

            spawnParticles(
              brick.x +
                brick.w / 2,
              brick.y +
                brick.h / 2,
              brick.color,
              brick.type ===
                "vault"
                ? 30
                : 10
            );

            if (
              testX === brick.x ||
              testX ===
                brick.x +
                  brick.w
            ) {
              state.ball.dx =
                -state.ball.dx;
            } else {
              state.ball.dy =
                -state.ball.dy;
            }

            /*
             * Portfolio vault
             */
            if (
              brick.type ===
              "vault"
            ) {
              setScore(
                (currentScore) =>
                  currentScore + 500
              );

              setActiveModal(
                brick.nodeData
              );

              setUnlockedNodes(
                (previous) => {
                  const next = [
                    ...previous,
                    brick.nodeData.id,
                  ];

                  if (
                    next.length ===
                    PORTFOLIO_NODES.length
                  ) {
                    setTimeout(() => {
                      setGameState("win");
                    }, 1000);
                  }

                  return next;
                }
              );

              state.ball.active =
                false;

              setGameState("paused");
            } else {
              setScore(
                (currentScore) =>
                  currentScore + 50
              );
            }

            break;
          }
        }

        if (
          allBricksCleared &&
          unlockedNodes.length ===
            PORTFOLIO_NODES.length
        ) {
          setGameState("win");
        }
      } else {
        /*
         * Ball follows paddle
         */
        state.ball.x =
          state.paddle.x +
          state.paddle.w / 2;
      }
    }

    /*
     * Render background
     */
    ctx.fillStyle = "#050510";

    ctx.fillRect(
      0,
      0,
      GAME_WIDTH,
      GAME_HEIGHT
    );

    ctx.save();

    /*
     * Screen shake
     */
    if (state.shakeTime > 0) {
      const magnitude =
        (state.shakeTime / 15) * 10;

      const dx =
        (Math.random() - 0.5) *
        magnitude;

      const dy =
        (Math.random() - 0.5) *
        magnitude;

      ctx.translate(dx, dy);

      state.shakeTime--;
    }

    /*
     * Cyberpunk grid
     */
    ctx.strokeStyle =
      "rgba(0, 243, 255, 0.05)";

    ctx.lineWidth = 1;

    ctx.beginPath();

    for (
      let i = 0;
      i < GAME_WIDTH;
      i += 50
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
      i += 50
    ) {
      ctx.moveTo(0, i);
      ctx.lineTo(
        GAME_WIDTH,
        i
      );
    }

    ctx.stroke();

    /*
     * Bricks
     */
    const time =
      Date.now() / 200;

    for (
      const brick of state.bricks
    ) {
      if (
        brick.status !== 1
      ) {
        continue;
      }

      if (
        brick.type ===
        "vault"
      ) {
        const pulse =
          Math.sin(
            time + brick.x
          ) *
            0.2 +
          0.8;

        ctx.shadowBlur =
          20 * pulse;

        ctx.shadowColor =
          brick.color;

        ctx.fillStyle =
          `${brick.color}40`;

        ctx.strokeStyle =
          brick.color;

        ctx.lineWidth = 2;

        ctx.fillRect(
          brick.x,
          brick.y,
          brick.w,
          brick.h
        );

        ctx.strokeRect(
          brick.x,
          brick.y,
          brick.w,
          brick.h
        );

        ctx.beginPath();

        ctx.moveTo(
          brick.x,
          brick.y
        );

        ctx.lineTo(
          brick.x +
            brick.w,
          brick.y +
            brick.h
        );

        ctx.moveTo(
          brick.x +
            brick.w,
          brick.y
        );

        ctx.lineTo(
          brick.x,
          brick.y +
            brick.h
        );

        ctx.strokeStyle =
          `${brick.color}80`;

        ctx.stroke();

        ctx.shadowBlur = 0;
      } else {
        /*
         * Normal brick
         */
        ctx.fillStyle =
          "#111122";

        ctx.strokeStyle =
          brick.color;

        ctx.lineWidth = 1.5;

        ctx.fillRect(
          brick.x,
          brick.y,
          brick.w,
          brick.h
        );

        ctx.beginPath();

        ctx.moveTo(
          brick.x,
          brick.y
        );

        ctx.lineTo(
          brick.x +
            brick.w,
          brick.y
        );

        ctx.strokeStyle =
          "#fff";

        ctx.stroke();

        ctx.strokeStyle =
          brick.color;

        ctx.strokeRect(
          brick.x,
          brick.y,
          brick.w,
          brick.h
        );
      }
    }

    /*
     * Particles
     */
    for (
      let i =
        state.particles.length -
        1;
      i >= 0;
      i--
    ) {
      const particle =
        state.particles[i];

      particle.x +=
        particle.vx;

      particle.y +=
        particle.vy;

      particle.life -=
        particle.decay;

      if (
        particle.life <= 0
      ) {
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

    /*
     * Paddle
     */
    ctx.shadowBlur = 15;

    ctx.shadowColor =
      "#00f3ff";

    ctx.fillStyle =
      "#111";

    ctx.fillRect(
      state.paddle.x,
      state.paddle.y,
      state.paddle.w,
      state.paddle.h
    );

    ctx.fillStyle =
      "#00f3ff";

    ctx.fillRect(
      state.paddle.x + 10,
      state.paddle.y + 3,
      state.paddle.w - 20,
      state.paddle.h - 6
    );

    ctx.shadowBlur = 0;

    /*
     * Ball trail
     */
    if (
      state.ball.active
    ) {
      for (
        let i = 0;
        i < state.ball.trail.length;
        i++
      ) {
        const ratio =
          i /
          state.ball.trail.length;

        ctx.globalAlpha =
          ratio * 0.5;

        ctx.fillStyle =
          "#ff0055";

        const trail =
          state.ball.trail[i];

        const radius =
          state.ball.radius *
          ratio;

        ctx.beginPath();

        ctx.arc(
          trail.x,
          trail.y,
          radius,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    /*
     * Ball
     */
    ctx.shadowBlur = 20;

    ctx.shadowColor =
      "#ff0055";

    ctx.fillStyle =
      "#fff";

    ctx.beginPath();

    ctx.arc(
      state.ball.x,
      state.ball.y,
      state.ball.radius,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.shadowBlur = 0;

    /*
     * Launch prompt
     */
    if (
      !state.ball.active &&
      gameState === "playing"
    ) {
      ctx.fillStyle =
        "#fff";

      ctx.font =
        "bold 16px monospace";

      ctx.textAlign =
        "center";

      ctx.globalAlpha =
        Math.sin(
          Date.now() / 200
        ) *
          0.5 +
        0.5;

      ctx.fillText(
        "CLICK / TAP / SPACE TO LAUNCH",
        GAME_WIDTH / 2,
        state.paddle.y - 40
      );

      ctx.globalAlpha = 1;
    }

    ctx.restore();

    requestRef.current =
      requestAnimationFrame(
        updateAndDraw
      );
  }, [
    gameState,
    unlockedNodes,
    resetBall,
    spawnParticles,
  ]);

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

  /*
   * Start game
   */
  const startGame = () => {
    setScore(0);
    setLives(3);
    setUnlockedNodes([]);
    setActiveModal(null);

    engine.current.particles = [];
    engine.current.shakeTime = 0;

    initLevel();

    setGameState("playing");
  };

  /*
   * Resume after reading a portfolio node
   */
  const resumeGame = () => {
    setActiveModal(null);

    setGameState("playing");

    resetBall();
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#020205]
        flex
        items-center
        justify-center
        p-2
        sm:p-4
        font-sans
        select-none
        text-white
        overflow-x-hidden
        overflow-y-auto
      "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            top-[-20%]
            left-[-10%]
            w-[50%]
            h-[50%]
            bg-[#00f3ff]
            rounded-full
            mix-blend-screen
            blur-[150px]
            opacity-10
          "
        />

        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            w-[50%]
            h-[50%]
            bg-[#b026ff]
            rounded-full
            mix-blend-screen
            blur-[150px]
            opacity-10
          "
        />
      </div>

      <div
        className="
          relative
          w-full
          max-w-5xl
          flex
          flex-col
          gap-2
          sm:gap-4
          z-10
        "
      >
        {/* HUD */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:justify-between
            sm:items-end
            gap-2
            px-1
            sm:px-2
          "
        >
          <div>
            <h1
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-black
                tracking-[0.15em]
                sm:tracking-widest
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#00f3ff]
                to-[#b026ff]
                uppercase
                mb-1
              "
            >
              System_Breach
            </h1>

            <p className="text-[9px] sm:text-xs text-gray-500 font-mono">
              PORTFOLIO DECRYPTION PROTOCOL v1.0
            </p>
          </div>

          {/* Score / Lives */}
          <div
            className="
              self-stretch
              sm:self-auto
              flex
              justify-around
              sm:justify-start
              gap-4
              sm:gap-8
              items-center
              bg-white/5
              border
              border-white/10
              rounded-lg
              px-3
              sm:px-6
              py-2
              sm:py-3
            "
          >
            <div className="flex flex-col items-center">
              <span
                className="
                  text-[8px]
                  sm:text-[10px]
                  text-gray-400
                  font-mono
                  tracking-[0.08em]
                  sm:tracking-widest
                  text-center
                "
              >
                DATA EXTRACTED
              </span>

              <span
                className="
                  text-base
                  sm:text-xl
                  font-black
                  text-white
                  font-mono
                  leading-none
                "
              >
                {score
                  .toString()
                  .padStart(5, "0")}
              </span>
            </div>

            <div className="w-px h-8 bg-white/20" />

            <div className="flex flex-col items-center">
              <span
                className="
                  text-[8px]
                  sm:text-[10px]
                  text-gray-400
                  font-mono
                  tracking-[0.08em]
                  sm:tracking-widest
                  text-center
                "
              >
                CONNECTION LIVES
              </span>

              <div className="flex gap-1 mt-1">
                {[1, 2, 3].map(
                  (life) => (
                    <div
                      key={life}
                      className={`
                        w-2.5
                        h-2.5
                        sm:w-3
                        sm:h-3
                        rounded-full
                        ${
                          life <= lives
                            ? "bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]"
                            : "bg-gray-800"
                        }
                      `}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* GAME AREA */}
        <div
          className="
            relative
            w-full
            aspect-[10/7]
            bg-[#050510]
            rounded-lg
            sm:rounded-xl
            overflow-hidden
            border
            border-white/10
            shadow-2xl
            shadow-[#00f3ff]/5
            cursor-crosshair
            touch-none
          "
          onMouseMove={handleMouseMove}
          onPointerMove={handlePointerMove}
          onTouchStart={handleTouchStart}
          onClick={() => {
            if (gameState === "playing") {
              launchBall();
            }
          }}
        >
          <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="w-full h-full block"
          />

          {/* START SCREEN */}
          {gameState === "start" && (
            <div
              className="
                absolute
                inset-0
                bg-black/80
                backdrop-blur-sm
                flex
                items-center
                justify-center
                p-2
                sm:p-6
                overflow-y-auto
              "
            >
              <div
                className="
                  bg-[#0a0a15]
                  border
                  border-white/20
                  p-4
                  sm:p-10
                  rounded-xl
                  sm:rounded-2xl
                  max-w-lg
                  w-full
                  text-center
                  shadow-2xl
                  max-h-full
                  overflow-y-auto
                "
              >
                <ShieldAlert
                  className="
                    w-10
                    h-10
                    sm:w-16
                    sm:h-16
                    text-[#00f3ff]
                    mx-auto
                    mb-4
                    sm:mb-6
                  "
                />

                <h2
                  className="
                    text-xl
                    sm:text-3xl
                    font-black
                    mb-2
                    text-white
                    tracking-wider
                  "
                >
                  FIREWALL DETECTED
                </h2>

                <p
                  className="
                    text-gray-400
                    font-mono
                    text-xs
                    sm:text-sm
                    mb-4
                    sm:mb-8
                    leading-relaxed
                  "
                >
                  Access to portfolio databanks is restricted.
                  Use the decryption paddle to breach the firewall
                  and extract the 4 glowing Data Vaults.
                </p>

                <div
                  className="
                    bg-white/5
                    rounded-lg
                    p-3
                    sm:p-4
                    mb-4
                    sm:mb-8
                    text-left
                    border
                    border-white/5
                    text-xs
                    sm:text-sm
                    font-mono
                    text-gray-300
                  "
                >
                  <span className="text-[#00f3ff] block mb-2 font-bold">
                    CONTROLS:
                  </span>

                  • Mouse / touch drag to move paddle
                  <br />
                  • Click / tap / Space to launch
                  <br />
                  • Keyboard Left/Right arrows supported
                  <br />
                  • A / D keys supported
                </div>

                <button
                  onClick={startGame}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    px-6
                    sm:px-8
                    py-3
                    sm:py-4
                    font-bold
                    text-black
                    bg-[#00f3ff]
                    rounded-lg
                    overflow-hidden
                    transition-all
                    hover:scale-105
                    shadow-[0_0_20px_rgba(0,243,255,0.4)]
                    w-full
                  "
                >
                  <span
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                      gap-2
                      tracking-widest
                      uppercase
                      text-sm
                      sm:text-base
                    "
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Initialize Breach
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* DATA NODE MODAL */}
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
                  sm:p-6
                  z-50
                  overflow-y-auto
                "
              >
                <div
                  className="
                    w-full
                    max-w-2xl
                    max-h-full
                    bg-[#0a0a15]
                    rounded-lg
                    sm:rounded-xl
                    overflow-y-auto
                    border-2
                    shadow-2xl
                  "
                  style={{
                    borderColor:
                      activeModal.color,

                    boxShadow:
                      `0 0 50px ${activeModal.color}40`,
                  }}
                >
                  {/* Modal header */}
                  <div
                    className="
                      px-3
                      sm:px-6
                      py-3
                      sm:py-4
                      border-b
                      border-white/10
                      flex
                      justify-between
                      items-start
                      gap-3
                    "
                    style={{
                      backgroundColor:
                        `${activeModal.color}15`,
                    }}
                  >
                    <h2
                      className="
                        text-base
                        sm:text-2xl
                        font-black
                        font-mono
                        tracking-wider
                        flex
                        items-center
                        gap-2
                        sm:gap-3
                      "
                      style={{
                        color:
                          activeModal.color,
                      }}
                    >
                      {activeModal.icon}

                      <span className="break-words">
                        {activeModal.title}
                      </span>
                    </h2>
                  </div>

                  {/* Modal content */}
                  <div
                    className="
                      p-4
                      sm:p-8
                      min-h-[180px]
                      sm:min-h-[250px]
                      bg-gradient-to-b
                      from-transparent
                      to-black/50
                    "
                  >
                    {activeModal.content}
                  </div>

                  {/* Modal footer */}
                  <div
                    className="
                      px-3
                      sm:px-6
                      py-3
                      sm:py-5
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
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        sm:text-xs
                        text-gray-500
                        font-mono
                        tracking-widest
                      "
                    >
                      VAULTS DECRYPTED:{" "}
                      {unlockedNodes.length}/4
                    </span>

                    <button
                      onClick={resumeGame}
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        sm:px-6
                        py-2
                        bg-white/10
                        hover:bg-white/20
                        text-white
                        rounded-lg
                        transition-colors
                        font-bold
                        font-mono
                        tracking-wider
                        text-xs
                        sm:text-sm
                      "
                    >
                      CONTINUE BREACH

                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

          {/* GAME OVER */}
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
                overflow-y-auto
              "
            >
              <div className="text-center">
                <ShieldAlert
                  className="
                    w-16
                    h-16
                    sm:w-24
                    sm:h-24
                    text-red-500
                    mx-auto
                    mb-4
                    sm:mb-6
                    animate-pulse
                  "
                />

                <h2
                  className="
                    text-3xl
                    sm:text-5xl
                    font-black
                    text-white
                    mb-3
                    sm:mb-4
                    tracking-widest
                  "
                >
                  CONNECTION LOST
                </h2>

                <p
                  className="
                    text-red-400
                    font-mono
                    mb-5
                    sm:mb-8
                    text-sm
                    sm:text-lg
                  "
                >
                  The firewall repelled your attack.
                </p>

                <button
                  onClick={startGame}
                  className="
                    flex
                    items-center
                    mx-auto
                    gap-3
                    px-6
                    sm:px-8
                    py-3
                    sm:py-4
                    bg-red-600
                    hover:bg-red-500
                    text-white
                    rounded-lg
                    transition-colors
                    font-bold
                    font-mono
                    tracking-widest
                    text-sm
                    sm:text-base
                  "
                >
                  <RotateCcw className="w-5 h-5" />
                  REBOOT SEQUENCE
                </button>
              </div>
            </div>
          )}

          {/* WIN SCREEN */}
          {gameState === "win" && (
            <div
              className="
                absolute
                inset-0
                bg-black/90
                backdrop-blur-xl
                flex
                items-center
                justify-center
                p-3
                sm:p-6
                z-50
                overflow-y-auto
              "
            >
              <div className="text-center max-w-2xl w-full">
                <Award
                  className="
                    w-16
                    h-16
                    sm:w-24
                    sm:h-24
                    text-[#00ff66]
                    mx-auto
                    mb-4
                    sm:mb-6
                    drop-shadow-[0_0_15px_rgba(0,255,102,0.8)]
                  "
                />

                <h2
                  className="
                    text-3xl
                    sm:text-5xl
                    md:text-6xl
                    font-black
                    text-white
                    mb-3
                    sm:mb-4
                    tracking-tighter
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-white
                    to-gray-500
                  "
                >
                  SYSTEM COMPROMISED
                </h2>

                <p
                  className="
                    text-[#00ff66]
                    font-mono
                    mb-6
                    sm:mb-10
                    text-sm
                    sm:text-xl
                    tracking-widest
                  "
                >
                  All portfolio data successfully extracted.
                </p>

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-2
                    sm:gap-4
                    mb-6
                    sm:mb-10
                    text-left
                  "
                >
                  <div
                    className="
                      bg-white/5
                      border
                      border-white/10
                      p-3
                      sm:p-6
                      rounded-lg
                      sm:rounded-xl
                    "
                  >
                    <div
                      className="
                        text-[9px]
                        sm:text-xs
                        text-gray-500
                        font-mono
                        mb-1
                      "
                    >
                      FINAL SCORE
                    </div>

                    <div
                      className="
                        text-2xl
                        sm:text-4xl
                        font-black
                        text-white
                        font-mono
                      "
                    >
                      {score}
                    </div>
                  </div>

                  <div
                    className="
                      bg-white/5
                      border
                      border-white/10
                      p-3
                      sm:p-6
                      rounded-lg
                      sm:rounded-xl
                    "
                  >
                    <div
                      className="
                        text-[9px]
                        sm:text-xs
                        text-gray-500
                        font-mono
                        mb-1
                      "
                    >
                      LIVES REMAINING
                    </div>

                    <div
                      className="
                        text-2xl
                        sm:text-4xl
                        font-black
                        text-[#00f3ff]
                        font-mono
                      "
                    >
                      {lives}
                    </div>
                  </div>
                </div>

                <button
                  onClick={startGame}
                  className="
                    flex
                    items-center
                    mx-auto
                    gap-2
                    px-5
                    sm:px-6
                    py-3
                    bg-white/10
                    hover:bg-white/20
                    text-white
                    rounded-lg
                    transition-colors
                    font-bold
                    font-mono
                    text-sm
                  "
                >
                  <RotateCcw className="w-4 h-4" />
                  PLAY AGAIN
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile controls */}
        <div
          className="
            flex
            sm:hidden
            items-center
            justify-center
            gap-2
            text-[9px]
            text-gray-500
            font-mono
            tracking-wider
            uppercase
          "
        >
          <span>
            Drag on game area to move
          </span>

          <span className="text-gray-700">
            •
          </span>

          <span>
            Tap to launch
          </span>
        </div>

        {/* Portfolio node tracker */}
        <div
          className="
            flex
            justify-center
            gap-2
            sm:gap-3
            mt-1
            sm:mt-2
          "
        >
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
                    w-9
                    h-9
                    sm:w-12
                    sm:h-12
                    rounded
                    flex
                    items-center
                    justify-center
                    border-2
                    transition-all
                    duration-500
                    ${
                      isUnlocked
                        ? "bg-black text-white scale-100"
                        : "bg-transparent border-gray-800 text-gray-800 scale-90"
                    }
                  `}
                  style={{
                    borderColor:
                      isUnlocked
                        ? node.color
                        : "",

                    boxShadow:
                      isUnlocked
                        ? `0 0 15px ${node.color}40`
                        : "",
                  }}
                >
                  {node.icon}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}