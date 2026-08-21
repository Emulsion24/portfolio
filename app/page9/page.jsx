"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  
  Mail,
  MousePointer2,
  Move,
  NotebookPen,
  PenTool,
  Ruler,
  X,
} from "lucide-react";
import{FaGithub as Github, FaLinkedin as Linkedin} from "react-icons/fa";

const projects = [
  {
    id: "dhenu",
    title: "Dhenu Mahima",
    category: "Digital Platform",
    year: "2026",
    number: "01",
    description:
      "A complete digital platform designed around an organization, its content, people and digital operations.",
    stack: ["Next.js", "Supabase", "Payments"],
    url: "https://www.dhenumahima.com/",
    paper: "cream",
    position: "top-left",
    rotation: "-2deg",
  },
  {
    id: "gau",
    title: "Gau Samman",
    category: "Organization System",
    year: "2026",
    number: "02",
    description:
      "A structured digital system connecting information, participation and administration.",
    stack: ["Next.js", "Supabase", "Admin"],
    url: "https://www.gausamman.cloud/",
    paper: "white",
    position: "top-right",
    rotation: "3deg",
  },
  {
    id: "rezillion",
    title: "Rezillion",
    category: "Energy",
    year: "2026",
    number: "03",
    description:
      "A focused digital experience for an energy company with an emphasis on trust and clarity.",
    stack: ["React", "Responsive", "UI"],
    url: "https://rezillion.energy/",
    paper: "blue",
    position: "bottom-left",
    rotation: "-4deg",
  },
  {
    id: "greenzee",
    title: "Greenzee Jobs",
    category: "Job Platform",
    year: "2026",
    number: "04",
    description:
      "A job platform designed around opportunity discovery and a straightforward user journey.",
    stack: ["React", "Node.js", "Database"],
    url: "https://www.greenzeejobs.com/",
    paper: "yellow",
    position: "bottom-right",
    rotation: "2deg",
  },
  {
    id: "blink",
    title: "BlinkCharts",
    category: "Data Product",
    year: "2026",
    number: "05",
    description:
      "A data-focused interface where information needs to remain fast, readable and useful.",
    stack: ["React", "Charts", "Data"],
    url: "https://blinkcharts.com/",
    paper: "cream",
    position: "center",
  },
  {
    id: "vizion",
    title: "Vizion Build",
    category: "Real Estate",
    year: "2026",
    number: "06",
    description:
      "A visual landing experience designed to communicate a real-estate concept without unnecessary complexity.",
    stack: ["UI", "Landing", "Motion"],
    url: "https://vizion-build.vercel.app/",
    paper: "white",
    position: "far-right",
  },
];

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express",
  "Supabase",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Git",
];

export default function Page() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toolOpen, setToolOpen] = useState(null);
  const [notebookOpen, setNotebookOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [time, setTime] = useState("");
  const [deskPosition, setDeskPosition] = useState({ x: 0, y: 0 });

  const deskRef = useRef(null);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const originalPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setToolOpen(null);
        setNotebookOpen(false);
        setContactOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const startDragging = (event) => {
    if (window.innerWidth < 768) return;

    dragging.current = true;

    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
    };

    originalPosition.current = {
      ...deskPosition,
    };
  };

  const moveDesk = (event) => {
    if (!dragging.current) return;

    const dx = event.clientX - dragStart.current.x;
    const dy = event.clientY - dragStart.current.y;

    setDeskPosition({
      x: originalPosition.current.x + dx,
      y: originalPosition.current.y + dy,
    });
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const resetDesk = () => {
    setDeskPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#d8d0bf] text-[#191815]">
      {/* =========================================================
          TOP UI
      ========================================================== */}

      <header className="fixed left-0 top-0 z-[80] flex w-full items-center justify-between border-b border-black/15 bg-[#d8d0bf]/85 px-5 py-4 backdrop-blur-md md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center border border-black text-[9px] font-bold">
            SK
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em]">
              Shavandeb Kaiti
            </div>

            <div className="text-[8px] uppercase tracking-[0.16em] opacity-40">
              Digital workshop
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-[9px] uppercase tracking-[0.2em] md:flex">
          <span>Studio / 2026</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-700" />
            Available
          </span>

          <span>{time}</span>
        </div>

        <button
          onClick={resetDesk}
          className="text-[9px] uppercase tracking-[0.18em] opacity-50 transition-opacity hover:opacity-100"
        >
          Reset desk
        </button>
      </header>

      {/* =========================================================
          DESK AREA
      ========================================================== */}

      <section
        ref={deskRef}
        className="relative min-h-screen overflow-hidden pt-[61px]"
        onPointerMove={moveDesk}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
      >
        {/* DESK BACKGROUND */}

        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#b9ad96",
            backgroundImage: `
              radial-gradient(
                rgba(0,0,0,0.06) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "12px 12px",
          }}
        />

        {/* DESK LIGHT */}

        <div className="pointer-events-none absolute left-[-15%] top-[-25%] h-[70vw] w-[70vw] rounded-full bg-white/10 blur-3xl" />

        {/* DESK GRID */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.25) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* =====================================================
            DESK CONTENT
        ====================================================== */}

        <div
          className="relative mx-auto hidden h-[calc(100vh-61px)] min-h-[720px] w-[1400px] md:block"
          style={{
            transform: `translate(${deskPosition.x}px, ${deskPosition.y}px)`,
            transition: dragging.current ? "none" : "transform 300ms ease",
          }}
          onPointerDown={startDragging}
        >
          {/* DESK LABEL */}

          <div className="absolute left-[55px] top-[50px]">
            <div className="font-serif text-4xl italic opacity-70">
              studio notes
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.3em] opacity-40">
              selected work / things in progress
            </div>
          </div>

          {/* DATE */}

          <div className="absolute right-[70px] top-[50px] rotate-2 font-mono text-[9px] opacity-40">
            19 / 08 / 2026
          </div>

          {/* =================================================
              PROJECT BLUEPRINTS
          ================================================== */}

          {projects.map((project) => (
            <Blueprint
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}

          {/* =================================================
              NOTEBOOK
          ================================================== */}

          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setNotebookOpen(true)}
            className="absolute bottom-[80px] left-[90px] z-30 h-[210px] w-[270px] rotate-[-5deg] border border-black/40 bg-[#3e403d] p-5 text-left text-[#e6dfd0] shadow-[10px_15px_25px_rgba(0,0,0,.16)] transition-transform duration-300 hover:z-50 hover:rotate-[-2deg] hover:scale-105"
          >
            <div className="flex items-start justify-between">
              <NotebookPen size={18} strokeWidth={1.2} />

              <span className="font-mono text-[8px] opacity-40">
                NOTES_001
              </span>
            </div>

            <div className="mt-16 font-serif text-3xl italic">
              Field notes
            </div>

            <div className="mt-3 text-[8px] uppercase tracking-[0.2em] opacity-40">
              open notebook
            </div>
          </button>

          {/* =================================================
              PENCIL
          ================================================== */}

          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setToolOpen("pencil")}
            className="absolute right-[310px] top-[125px] z-30 h-[18px] w-[250px] rotate-[18deg] rounded-full border border-black/30 bg-[#c8b9a0] shadow-[5px_8px_12px_rgba(0,0,0,.14)] transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute right-[-19px] top-[-1px] h-0 w-0 border-b-[10px] border-l-[20px] border-t-[10px] border-b-transparent border-t-transparent border-l-[#c8b9a0]" />

            <div className="absolute left-5 top-[3px] h-[10px] w-[80px] bg-black/10" />

            <div className="absolute right-6 top-[3px] h-[10px] w-[24px] rounded-r-full bg-black/20" />
          </button>

          {/* =================================================
              RULER
          ================================================== */}

          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setToolOpen("ruler")}
            className="absolute bottom-[110px] right-[120px] z-30 h-[55px] w-[400px] rotate-[9deg] border border-black/25 bg-[#d7c7a5]/90 shadow-[8px_12px_20px_rgba(0,0,0,.15)] transition-transform duration-300 hover:rotate-[6deg]"
          >
            <div className="absolute left-5 right-5 top-[15px] flex justify-between">
              {Array.from({ length: 21 }).map((_, index) => (
                <span
                  key={index}
                  className={`block w-px bg-black/50 ${
                    index % 5 === 0 ? "h-5" : "h-3"
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-2 left-5 text-[7px] uppercase tracking-[0.2em] opacity-40">
              measure / refine / repeat
            </div>
          </button>

          {/* =================================================
              PHONE
          ================================================== */}

          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setContactOpen(true)}
            className="absolute bottom-[100px] right-[485px] z-40 h-[180px] w-[90px] rotate-[-8deg] rounded-[15px] border-[3px] border-black/70 bg-[#171716] p-2 shadow-[8px_15px_25px_rgba(0,0,0,.22)] transition-transform duration-300 hover:rotate-[-3deg] hover:scale-105"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[9px] bg-[#dad4c6]">
              <div className="mx-auto mt-2 h-1.5 w-7 rounded-full bg-black/30" />

              <div className="mt-8 px-3 text-left">
                <div className="text-[6px] uppercase tracking-[0.15em] opacity-40">
                  open channel
                </div>

                <div className="mt-2 font-serif text-[18px] italic">
                  hello.
                </div>

                <div className="mt-6 border-t border-black/10 pt-3 text-[6px] uppercase tracking-[0.1em]">
                  tap to contact
                </div>
              </div>
            </div>
          </button>

          {/* =================================================
              TECHNOLOGY TOOLBOX
          ================================================== */}

          <button
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setToolOpen("stack")}
            className="absolute bottom-[70px] right-[650px] z-30 h-[140px] w-[190px] rotate-[4deg] border border-black/20 bg-[#ded7c8] p-5 text-left shadow-[7px_12px_20px_rgba(0,0,0,.13)] transition-transform duration-300 hover:rotate-[1deg] hover:scale-105"
          >
            <PenTool size={18} strokeWidth={1.3} />

            <div className="mt-7 font-serif text-2xl italic">
              tools
            </div>

            <div className="mt-2 text-[7px] uppercase tracking-[0.18em] opacity-40">
              what's on the bench?
            </div>
          </button>

          {/* =================================================
              SMALL STICKY NOTES
          ================================================== */}

          <Sticky
            text="BUILD USEFUL"
            className="absolute left-[410px] top-[95px] z-20"
            rotate="-6deg"
          />

          <Sticky
            text="LESS NOISE"
            className="absolute right-[105px] top-[330px] z-20"
            rotate="5deg"
          />

          <Sticky
            text="SHIP IT"
            className="absolute left-[620px] bottom-[80px] z-20"
            rotate="-3deg"
          />

          {/* =================================================
              DESK DRAWING
          ================================================== */}

          <div className="pointer-events-none absolute left-[540px] top-[320px] opacity-[0.13]">
            <svg width="350" height="220" viewBox="0 0 350 220">
              <rect
                x="5"
                y="5"
                width="340"
                height="210"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />

              <path
                d="M20 170 L90 100 L150 150 L230 60 L330 170"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />

              <circle
                cx="230"
                cy="60"
                r="8"
                fill="none"
                stroke="currentColor"
              />

              <line
                x1="90"
                y1="100"
                x2="90"
                y2="200"
                stroke="currentColor"
              />

              <line
                x1="230"
                y1="60"
                x2="230"
                y2="200"
                stroke="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* =====================================================
            MOBILE WORKSPACE
        ====================================================== */}

        <div className="relative min-h-[calc(100vh-61px)] px-5 py-16 md:hidden">
          <div className="mb-14">
            <div className="font-serif text-4xl italic">
              studio notes
            </div>

            <div className="mt-2 text-[8px] uppercase tracking-[0.25em] opacity-40">
              drag is available on desktop
            </div>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <Blueprint
                key={project.id}
                project={project}
                mobile
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            <button
              onClick={() => setNotebookOpen(true)}
              className="border border-black/20 bg-[#3e403d] p-6 text-left text-[#e6dfd0]"
            >
              <NotebookPen size={18} />

              <div className="mt-10 font-serif text-2xl italic">
                Field notes
              </div>
            </button>

            <button
              onClick={() => setToolOpen("stack")}
              className="border border-black/20 bg-[#ded7c8] p-6 text-left"
            >
              <PenTool size={18} />

              <div className="mt-10 font-serif text-2xl italic">
                Tools
              </div>
            </button>
          </div>

          <button
            onClick={() => setContactOpen(true)}
            className="mt-4 flex w-full items-center justify-between border border-black/20 bg-[#171716] p-6 text-left text-[#e6dfd0]"
          >
            <span className="font-serif text-2xl italic">
              Open channel
            </span>

            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* DESK INSTRUCTIONS */}

        <div className="pointer-events-none absolute bottom-6 left-5 z-30 flex items-center gap-3 text-[8px] uppercase tracking-[0.18em] opacity-40 md:left-8">
          <Move size={13} />

          Drag the desk
        </div>
      </section>

      {/* =========================================================
          PROJECT MODAL
      ========================================================== */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* =========================================================
          NOTEBOOK
      ========================================================== */}

      {notebookOpen && (
        <Overlay onClose={() => setNotebookOpen(false)}>
          <div className="relative mx-auto w-full max-w-4xl rotate-[-1deg] bg-[#e6dfd0] p-8 text-[#191815] shadow-2xl md:p-14">
            <div className="absolute right-6 top-5 text-[8px] uppercase tracking-[0.2em] opacity-30">
              notebook / 001
            </div>

            <div className="mb-12 font-serif text-5xl italic md:text-7xl">
              Field notes
            </div>

            <div
              className="space-y-8 text-sm leading-8 opacity-70 md:text-base"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px)",
                backgroundSize: "100% 32px",
              }}
            >
              <p>
                I like the point where design stops being a picture and becomes
                something people can actually use.
              </p>

              <p>
                My work sits between frontend development, backend systems and
                product thinking.
              </p>

              <p>
                I enjoy taking an idea that is still unclear and turning it
                into a real interface, then connecting that interface to the
                systems behind it.
              </p>

              <p>
                Technology is a tool. The product is the thing that matters.
              </p>
            </div>

            <div className="mt-14 border-t border-black/15 pt-6 text-[8px] uppercase tracking-[0.2em] opacity-40">
              React / Next.js / Node / Supabase / databases / product thinking
            </div>
          </div>
        </Overlay>
      )}

      {/* =========================================================
          TOOLS
      ========================================================== */}

      {toolOpen && (
        <Overlay onClose={() => setToolOpen(null)}>
          <div className="mx-auto w-full max-w-3xl border border-black/20 bg-[#e6dfd0] p-7 md:p-12">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[8px] uppercase tracking-[0.25em] opacity-40">
                  Workshop equipment
                </div>

                <h2 className="mt-3 font-serif text-5xl italic">
                  Tools on the bench
                </h2>
              </div>

              <Ruler size={25} strokeWidth={1.2} />
            </div>

            <div className="mt-12 grid grid-cols-2 border-l border-t border-black/15 md:grid-cols-3">
              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="border-b border-r border-black/15 p-5"
                >
                  <div className="font-mono text-[8px] opacity-30">
                    0{index + 1}
                  </div>

                  <div className="mt-7 text-sm font-medium">
                    {technology}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-xl text-sm leading-relaxed opacity-50">
              I choose the stack based on what the project needs instead of
              forcing every project into exactly the same technology.
            </p>
          </div>
        </Overlay>
      )}

      {/* =========================================================
          CONTACT
      ========================================================== */}

      {contactOpen && (
        <Overlay onClose={() => setContactOpen(false)}>
          <div className="mx-auto w-full max-w-4xl bg-[#171716] p-7 text-[#e6dfd0] md:p-14">
            <div className="text-[8px] uppercase tracking-[0.25em] text-white/30">
              Communication device
            </div>

            <div className="mt-6 font-serif text-6xl italic md:text-8xl">
              Hello.
            </div>

            <p className="mt-8 max-w-lg text-sm leading-relaxed text-white/50">
              Have a website, digital product or software idea? Open a channel
              and let's see what can be built.
            </p>

            <div className="mt-14 grid gap-3 md:grid-cols-3">
              <ContactLink
                href="mailto:your@email.com"
                icon={<Mail size={17} />}
                label="Email"
              />

              <ContactLink
                href="https://github.com/"
                icon={<Github size={17} />}
                label="GitHub"
              />

              <ContactLink
                href="https://linkedin.com/"
                icon={<Linkedin size={17} />}
                label="LinkedIn"
              />
            </div>
          </div>
        </Overlay>
      )}
    </main>
  );
}

/* =========================================================
   BLUEPRINT
========================================================= */

function Blueprint({ project, onClick, mobile = false }) {
  const paperStyles = {
    cream: "bg-[#e9e1d1]",
    white: "bg-[#e7e5de]",
    blue: "bg-[#cfd8d6]",
    yellow: "bg-[#e4d8a8]",
  };

  return (
    <button
      onPointerDown={(event) => event.stopPropagation()}
      onClick={onClick}
      className={`group text-left ${
        mobile
          ? "relative w-full"
          : `absolute z-20 ${getPosition(project.position)}`
      }`}
      style={
        mobile
          ? undefined
          : {
              transform: `rotate(${project.rotation})`,
            }
      }
    >
      <div
        className={`relative overflow-hidden border border-black/20 ${
          paperStyles[project.paper]
        } p-6 shadow-[8px_14px_20px_rgba(0,0,0,.14)] transition-all duration-500 group-hover:z-50 group-hover:rotate-0 group-hover:scale-105 ${
          mobile ? "min-h-[330px]" : "h-[300px] w-[390px]"
        }`}
      >
        {/* PAPER MARKS */}

        <div className="absolute right-4 top-4 font-mono text-[8px] opacity-30">
          {project.number} / {project.year}
        </div>

        <div className="absolute bottom-4 right-5 text-[7px] uppercase tracking-[0.2em] opacity-25">
          click to inspect
        </div>

        {/* BLUEPRINT DRAWING */}

        <div className="pointer-events-none absolute bottom-[55px] right-6 opacity-[0.18]">
          <svg width="145" height="95" viewBox="0 0 145 95">
            <rect
              x="2"
              y="2"
              width="141"
              height="91"
              fill="none"
              stroke="currentColor"
            />

            <rect
              x="16"
              y="18"
              width="45"
              height="27"
              fill="none"
              stroke="currentColor"
            />

            <rect
              x="72"
              y="18"
              width="55"
              height="50"
              fill="none"
              stroke="currentColor"
            />

            <line
              x1="16"
              y1="57"
              x2="61"
              y2="57"
              stroke="currentColor"
            />

            <line
              x1="72"
              y1="75"
              x2="127"
              y2="75"
              stroke="currentColor"
            />

            <circle
              cx="38"
              cy="72"
              r="8"
              fill="none"
              stroke="currentColor"
            />
          </svg>
        </div>

        {/* CONTENT */}

        <div className="relative">
          <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.22em] opacity-40">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />

            {project.category}
          </div>

          <h3 className="mt-8 max-w-[270px] font-serif text-4xl italic leading-[0.9] md:text-5xl">
            {project.title}
          </h3>

          <div className="mt-6 max-w-[270px] text-[9px] leading-relaxed opacity-50">
            {project.description}
          </div>

          <div className="absolute right-0 top-[115px] flex h-10 w-10 items-center justify-center rounded-full border border-black/20 opacity-40 transition-all group-hover:bg-black group-hover:text-white group-hover:opacity-100">
            <ArrowUpRight size={15} />
          </div>
        </div>

        {/* PAPER LINES */}

        <div className="absolute bottom-12 left-6 right-6 border-t border-black/10" />

        <div className="absolute bottom-5 left-6 flex gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="border border-black/10 px-2 py-1 text-[6px] uppercase tracking-[0.12em] opacity-40"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal({ project, onClose }) {
  return (
    <Overlay onClose={onClose}>
      <div className="relative mx-auto w-full max-w-5xl bg-[#e6dfd0] text-[#191815] shadow-2xl">
        <div className="grid md:grid-cols-[1.3fr_0.7fr]">
          <div className="relative min-h-[500px] overflow-hidden border-b border-black/15 p-7 md:border-b-0 md:border-r md:p-12">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,.12) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative">
              <div className="flex justify-between">
                <div className="text-[8px] uppercase tracking-[0.2em] opacity-40">
                  Drawing {project.number}
                </div>

                <div className="font-mono text-[8px] opacity-40">
                  {project.year}
                </div>
              </div>

              <h2 className="mt-24 max-w-3xl font-serif text-6xl italic leading-[0.8] md:text-8xl">
                {project.title}
              </h2>

              <div className="mt-12 max-w-lg text-sm leading-relaxed opacity-55">
                {project.description}
              </div>

              <div className="absolute bottom-0 right-0 opacity-20">
                <svg width="250" height="180" viewBox="0 0 250 180">
                  <rect
                    x="10"
                    y="10"
                    width="230"
                    height="160"
                    fill="none"
                    stroke="currentColor"
                  />

                  <path
                    d="M20 140 L80 60 L130 115 L190 35 L230 140"
                    fill="none"
                    stroke="currentColor"
                  />

                  <circle
                    cx="190"
                    cy="35"
                    r="15"
                    fill="none"
                    stroke="currentColor"
                  />

                  <line
                    x1="20"
                    y1="150"
                    x2="230"
                    y2="150"
                    stroke="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex min-h-[500px] flex-col p-7 md:p-10">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100"
              >
                Close
                <X size={15} />
              </button>
            </div>

            <div className="mt-16">
              <div className="text-[8px] uppercase tracking-[0.2em] opacity-40">
                Project type
              </div>

              <div className="mt-2 text-sm">
                {project.category}
              </div>
            </div>

            <div className="mt-10">
              <div className="text-[8px] uppercase tracking-[0.2em] opacity-40">
                Materials
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-black/15 px-3 py-2 text-[8px] uppercase tracking-[0.12em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-12">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-t border-black/15 pt-5 text-[9px] uppercase tracking-[0.18em]"
              >
                Open live project

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

/* =========================================================
   OVERLAY
========================================================= */

function Overlay({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/55 p-5 backdrop-blur-sm md:p-10">
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#e6dfd0] text-black"
        aria-label="Close"
      >
        <X size={17} />
      </button>

      <div className="w-full py-10">{children}</div>
    </div>
  );
}

/* =========================================================
   STICKY NOTE
========================================================= */

function Sticky({ text, className, rotate }) {
  return (
    <div
      className={`${className} h-[75px] w-[100px] bg-[#d9ca91] p-4 shadow-[4px_7px_10px_rgba(0,0,0,.12)]`}
      style={{
        transform: `rotate(${rotate})`,
      }}
    >
      <div className="font-mono text-[8px] leading-relaxed opacity-60">
        {text}
      </div>
    </div>
  );
}

/* =========================================================
   CONTACT LINK
========================================================= */

function ContactLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center justify-between border border-white/10 px-5 py-5 transition-colors hover:bg-white hover:text-black"
    >
      <span className="flex items-center gap-3">
        {icon}

        <span className="text-[9px] uppercase tracking-[0.15em]">
          {label}
        </span>
      </span>

      <ExternalLink
        size={14}
        className="opacity-30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  );
}

/* =========================================================
   POSITIONING
========================================================= */

function getPosition(position) {
  switch (position) {
    case "top-left":
      return "left-[110px] top-[170px]";

    case "top-right":
      return "right-[100px] top-[150px]";

    case "bottom-left":
      return "left-[360px] bottom-[80px]";

    case "bottom-right":
      return "right-[80px] bottom-[150px]";

    case "center":
      return "left-[500px] top-[380px]";

    case "far-right":
      return "right-[-80px] top-[440px]";

    default:
      return "left-0 top-0";
  }
}