
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Command,
  
  Mail,
  MousePointer2,
  Move3d,
  X,
  ExternalLink,
} from "lucide-react";

import{FaGithub as Github, FaLinkedin as Linkedin} from "react-icons/fa";

const projects = [
  {
    id: "dhenu",
    number: "01",
    name: "DHENU MAHIMA",
    category: "Digital Platform",
    year: "2026",
    description:
      "A complete digital platform connecting an organization, its content, people and administration into one web experience.",
    stack: ["Next.js", "Supabase", "Payments"],
    url: "https://www.dhenumahima.com/",
    x: 20,
    y: 28,
    size: 150,
  },
  {
    id: "gau",
    number: "02",
    name: "GAU SAMMAN",
    category: "Web System",
    year: "2026",
    description:
      "A modern organization platform designed around information, participation and structured administration.",
    stack: ["Next.js", "Supabase", "Admin"],
    url: "https://www.gausamman.cloud/",
    x: 67,
    y: 20,
    size: 125,
  },
  {
    id: "rezillion",
    number: "03",
    name: "REZILLION",
    category: "Energy",
    year: "2026",
    description:
      "A focused digital presence for an energy company with an emphasis on clarity and trust.",
    stack: ["React", "UI", "Responsive"],
    url: "https://rezillion.energy/",
    x: 76,
    y: 66,
    size: 175,
  },
  {
    id: "greenzee",
    number: "04",
    name: "GREENZEE",
    category: "Job Platform",
    year: "2026",
    description:
      "A web platform created around employment opportunities and a straightforward discovery experience.",
    stack: ["React", "Node.js", "Database"],
    url: "https://www.greenzeejobs.com/",
    x: 34,
    y: 72,
    size: 135,
  },
  {
    id: "blink",
    number: "05",
    name: "BLINKCHARTS",
    category: "Data Product",
    year: "2026",
    description:
      "A data-focused product where information needs to be fast, readable and useful.",
    stack: ["React", "Charts", "Data"],
    url: "https://blinkcharts.com/",
    x: 52,
    y: 48,
    size: 105,
  },
  {
    id: "vizion",
    number: "06",
    name: "VIZION BUILD",
    category: "Real Estate",
    year: "2026",
    description:
      "A visual landing experience built to communicate a property concept with minimal friction.",
    stack: ["UI", "Landing", "Motion"],
    url: "https://vizion-build.vercel.app/",
    x: 13,
    y: 55,
    size: 110,
  },
];

const systems = [
  "FRONTEND",
  "BACKEND",
  "DATABASE",
  "AUTHENTICATION",
  "API",
  "DEPLOYMENT",
  "UI / UX",
  "MOTION",
];

export default function Page() {
  const [activeProject, setActiveProject] = useState(null);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [mode, setMode] = useState("WORK");
  const [commandOpen, setCommandOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      setCursor({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = useMemo(() => {
    if (mode === "WORK") return projects;

    if (mode === "SYSTEM") {
      return projects.filter((project) =>
        project.stack.some((item) =>
          ["Next.js", "React", "Node.js", "Database"].includes(item)
        )
      );
    }

    return projects;
  }, [mode]);

  const goTo = (target) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
    });

    setCommandOpen(false);
  };

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#ebe8df] text-[#111]"
      onMouseMove={(event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;

        setCursor({ x, y });
      }}
    >
      {/* CURSOR FIELD */}

      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            circle 260px at ${cursor.x}% ${cursor.y}%,
            rgba(255,255,255,0.95),
            rgba(255,255,255,0.25) 45%,
            transparent 75%
          )`,
        }}
      />

      {/* TOP SYSTEM BAR */}

      <header className="fixed left-0 top-0 z-40 w-full border-b border-black/10 bg-[#ebe8df]/75 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-5 md:px-8">
          <button
            onClick={() => goTo("workspace")}
            className="flex items-center gap-3 text-xs font-medium tracking-[0.18em]"
          >
            <span className="flex h-6 w-6 items-center justify-center border border-black text-[9px] font-bold">
              SK
            </span>

            SHAVANDEB KAITI
          </button>

          <div className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.2em] md:flex">
            <button
              onClick={() => setMode("WORK")}
              className={mode === "WORK" ? "font-bold" : "opacity-40"}
            >
              Work
            </button>

            <button
              onClick={() => setMode("SYSTEM")}
              className={mode === "SYSTEM" ? "font-bold" : "opacity-40"}
            >
              System
            </button>

            <button
              onClick={() => goTo("contact")}
              className="opacity-50 hover:opacity-100"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setCommandOpen(true)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] opacity-50 transition-opacity hover:opacity-100"
          >
            <Command size={13} />

            <span className="hidden md:block">Command</span>

            <kbd className="hidden border border-black/20 px-1.5 py-0.5 md:block">
              K
            </kbd>
          </button>
        </div>
      </header>

      {/* WORKSPACE */}

      <section
        id="workspace"
        className="relative min-h-screen border-b border-black/10 pt-14"
      >
        {/* GRID */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.25) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* CROSSHAIR */}

        <div
          className="pointer-events-none fixed z-20 hidden md:block"
          style={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative">
            <div className="absolute left-1/2 top-[-18px] h-9 w-px bg-black/20" />
            <div className="absolute left-[-18px] top-1/2 h-px w-9 bg-black/20" />
            <div className="h-2 w-2 rounded-full border border-black bg-[#ebe8df]" />
          </div>
        </div>

        {/* INFORMATION CORNERS */}

        <div className="absolute left-5 top-20 z-10 md:left-8">
          <div className="text-[9px] uppercase tracking-[0.2em] opacity-40">
            Digital workspace
          </div>

          <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em]">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            System online
          </div>
        </div>

        <div className="absolute right-5 top-20 z-10 text-right md:right-8">
          <div className="text-[9px] uppercase tracking-[0.2em] opacity-40">
            Local time
          </div>

          <div className="mt-2 font-mono text-xs">{time}</div>
        </div>

        {/* CENTRAL IDENTITY */}

        <div className="pointer-events-none absolute left-1/2 top-[48%] z-10 w-[90%] -translate-x-1/2 -translate-y-1/2 text-center md:w-auto">
          <div
            className="transition-transform duration-700 ease-out"
            style={{
              transform: `translate(
                ${(cursor.x - 50) * -0.025}px,
                ${(cursor.y - 50) * -0.025}px
              )`,
            }}
          >
            <div className="mb-5 text-[9px] uppercase tracking-[0.3em] opacity-40">
              Independent developer / builder
            </div>

            <div className="text-[17vw] font-black leading-[0.75] tracking-[-0.1em] md:text-[11vw]">
              SHAVANDEB
            </div>

            <div className="mt-4 text-[8vw] font-black leading-[0.75] tracking-[-0.09em] md:text-[5.5vw]">
              KAÏTI
            </div>

            <div className="mx-auto mt-8 max-w-md text-xs leading-relaxed opacity-50 md:text-sm">
              I build digital products, web systems and interfaces that turn
              ideas into things people can actually use.
            </div>
          </div>
        </div>

        {/* PROJECT OBJECTS */}

        {filteredProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group absolute z-20 text-left outline-none"
            style={{
              left: `${project.x}%`,
              top: `${project.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="relative flex items-center justify-center rounded-full border border-black/40 bg-[#ebe8df]/70 backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.18] group-hover:bg-black group-hover:text-white"
              style={{
                width: project.size,
                height: project.size,
              }}
            >
              {/* ORBIT */}

              <div className="absolute inset-[-9px] rounded-full border border-dashed border-black/15 transition-transform duration-700 group-hover:rotate-90 group-hover:border-white/30" />

              <div className="text-center">
                <div className="text-[8px] tracking-[0.2em] opacity-40 group-hover:opacity-60">
                  {project.number}
                </div>

                <div className="mt-2 max-w-[90px] text-[11px] font-semibold leading-tight tracking-[-0.02em]">
                  {project.name}
                </div>

                <div className="mt-2 text-[7px] uppercase tracking-[0.18em] opacity-40">
                  {project.category}
                </div>
              </div>

              {/* ACTIVE DOT */}

              <span className="absolute right-[12%] top-[12%] h-1.5 w-1.5 rounded-full bg-black group-hover:bg-white" />
            </div>

            <div className="mt-3 hidden text-center text-[8px] uppercase tracking-[0.18em] opacity-30 group-hover:block">
              Open project
            </div>
          </button>
        ))}

        {/* INSTRUCTION */}

        <div className="absolute bottom-7 left-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] opacity-40 md:left-8">
          <MousePointer2 size={13} />

          Move through the workspace
        </div>

        <div className="absolute bottom-7 right-5 hidden items-center gap-3 text-[9px] uppercase tracking-[0.18em] opacity-40 md:flex">
          <Move3d size={13} />

          Select an object
        </div>
      </section>

      {/* SYSTEM MAP */}

      <section className="relative border-b border-black/10 bg-[#111] px-5 py-20 text-[#ebe8df] md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <div className="mb-4 text-[9px] uppercase tracking-[0.25em] text-white/40">
                Architecture / 01
              </div>

              <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.05em] md:text-7xl">
                How an idea
                <br />
                becomes a system.
              </h2>
            </div>

            <div className="hidden text-right text-[9px] uppercase tracking-[0.2em] text-white/30 md:block">
              Process
              <br />
              01 — 08
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

            <div className="grid md:grid-cols-2">
              {systems.map((system, index) => (
                <button
                  key={system}
                  className="group relative border-t border-white/10 px-0 py-8 text-left transition-all md:px-12"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[9px] text-white/25">
                      0{index + 1}
                    </span>

                    <span className="text-lg tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-3 md:text-2xl">
                      {system}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKING PHILOSOPHY */}

      <section className="relative border-b border-black/10 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="text-[9px] uppercase tracking-[0.25em] opacity-40">
              Field notes / 02
            </div>
          </div>

          <div className="md:col-span-8">
            <p className="text-4xl font-medium leading-[1.05] tracking-[-0.055em] md:text-7xl">
              Good software should disappear into the experience.
            </p>

            <div className="mt-14 grid gap-10 text-sm leading-relaxed opacity-50 md:grid-cols-2">
              <p>
                I enjoy working between design and development — taking an
                unclear idea and turning it into an interface, then turning
                that interface into a functioning system.
              </p>

              <p>
                The technology changes from project to project. The goal
                doesn't: make the result useful, understandable and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="relative min-h-[75vh] border-b border-black/10 px-5 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.25em] opacity-40">
            <span>Open channel / 03</span>
            <span>Available for selected work</span>
          </div>

          <div className="mt-28">
            <div className="text-[10vw] font-black leading-[0.78] tracking-[-0.09em] md:text-[9vw]">
              HAVE
            </div>

            <div className="ml-[10vw] text-[10vw] font-black leading-[0.78] tracking-[-0.09em] md:text-[9vw]">
              SOMETHING
            </div>

            <div className="ml-[20vw] text-[10vw] font-black leading-[0.78] tracking-[-0.09em] md:text-[9vw]">
              IN MIND?
            </div>
          </div>

          <div className="mt-24 flex flex-col justify-between gap-12 border-t border-black/15 pt-8 md:flex-row md:items-end">
            <div className="max-w-md text-sm leading-relaxed opacity-50">
              If you have a website, product or software idea that needs to
              become real, send me a message.
            </div>

            <div className="flex flex-wrap gap-3">
              <ContactButton
                icon={<Mail size={16} />}
                label="Email"
                href="mailto:your@email.com"
              />

              <ContactButton
                icon={<Github size={16} />}
                label="GitHub"
                href="https://github.com/"
              />

              <ContactButton
                icon={<Linkedin size={16} />}
                label="LinkedIn"
                href="https://linkedin.com/"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="flex flex-col justify-between gap-4 px-5 py-6 text-[9px] uppercase tracking-[0.2em] opacity-40 md:flex-row md:px-8">
        <span>Shavandeb Kaiti</span>
        <span>Built from scratch / 2026</span>
        <span>India</span>
      </footer>

      {/* PROJECT DETAIL OVERLAY */}

      {activeProject && (
        <div className="fixed inset-0 z-[100] bg-[#111] text-[#ebe8df]">
          <div className="absolute inset-0 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative flex h-full flex-col overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-8">
              <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.2em]">
                <span>{activeProject.number}</span>
                <span className="text-white/30">/</span>
                <span>{activeProject.category}</span>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
              >
                Close
                <X size={18} />
              </button>
            </div>

            <div className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center px-5 py-20 md:px-8">
              <div className="max-w-5xl">
                <div className="mb-8 text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Selected project / {activeProject.year}
                </div>

                <h2 className="text-[15vw] font-black leading-[0.75] tracking-[-0.09em] md:text-[10vw]">
                  {activeProject.name}
                </h2>

                <div className="mt-16 grid gap-12 md:grid-cols-12">
                  <div className="md:col-span-6">
                    <p className="text-xl leading-relaxed text-white/65 md:text-2xl">
                      {activeProject.description}
                    </p>
                  </div>

                  <div className="md:col-span-4 md:col-start-9">
                    <div className="mb-5 text-[9px] uppercase tracking-[0.2em] text-white/30">
                      Built with
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((item) => (
                        <span
                          key={item}
                          className="border border-white/15 px-3 py-2 text-[9px] uppercase tracking-[0.12em]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-10 flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-white"
                    >
                      Visit live project
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* COMMAND PANEL */}

      {commandOpen && (
        <div className="fixed inset-0 z-[110] flex items-start justify-center bg-black/30 px-5 pt-[15vh] backdrop-blur-sm">
          <div className="w-full max-w-lg border border-black bg-[#ebe8df]">
            <div className="flex items-center gap-3 border-b border-black/10 px-5 py-4">
              <Command size={16} />

              <input
                autoFocus
                placeholder="What are you looking for?"
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/30"
              />

              <button
                onClick={() => setCommandOpen(false)}
                className="opacity-40 hover:opacity-100"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-2">
              <CommandItem
                label="View selected work"
                shortcut="W"
                onClick={() => {
                  setMode("WORK");
                  setCommandOpen(false);
                }}
              />

              <CommandItem
                label="Explore system"
                shortcut="S"
                onClick={() => {
                  setMode("SYSTEM");
                  setCommandOpen(false);
                }}
              />

              <CommandItem
                label="Open contact"
                shortcut="C"
                onClick={() => goTo("contact")}
              />

              <CommandItem
                label="Close workspace"
                shortcut="ESC"
                onClick={() => setCommandOpen(false)}
              />
            </div>

            <div className="border-t border-black/10 px-5 py-3 text-[8px] uppercase tracking-[0.18em] opacity-30">
              Command interface
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ContactButton({ icon, label, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center gap-3 border border-black/20 px-5 py-3 text-[9px] uppercase tracking-[0.16em] transition-all hover:bg-black hover:text-white"
    >
      {icon}

      {label}

      <ArrowUpRight
        size={13}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  );
}

function CommandItem({ label, shortcut, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center justify-between px-4 py-4 text-left transition-colors hover:bg-black hover:text-white"
    >
      <span className="text-sm">{label}</span>

      <span className="border border-black/15 px-2 py-1 text-[8px] uppercase tracking-[0.15em] opacity-40 group-hover:border-white/20">
        {shortcut}
      </span>
    </button>
  );
}