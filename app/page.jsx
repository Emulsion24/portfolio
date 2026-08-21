"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "01",
    type: "CLIENT PRODUCT",
    title: "Dhenu Mahima",
    eyebrow: "Gaushala Digital Ecosystem",
    description:
      "A complete digital platform built around gaushala operations, donations, payments, digital products and administration.",
    tags: [
      "Admin Panel",
      "Payments",
      "Donations",
      "E-books",
      "Management",
    ],
    url: "https://www.dhenumahima.com/",
    featured: true,
    theme: "lime",
  },

  {
    id: "02",
    type: "CLIENT PRODUCT",
    title: "Gau Samman",
    eyebrow: "Management & Registration Platform",
    description:
      "A management-focused platform with registration workflows, geographic hierarchy, resources and administrative systems.",
    tags: [
      "Registration",
      "Admin",
      "State / District",
      "Resources",
      "Workflows",
    ],
    url: "https://www.gausamman.cloud/",
    featured: true,
    theme: "violet",
  },

  {
    id: "03",
    type: "PROFESSIONAL WORK",
    title: "Rezillion",
    eyebrow: "Solar Technology Platform",
    description:
      "A professional web product involving solar calculation, installer bidding, project tracking, documents, scoring and project workflows.",
    tags: [
      "Solar Calculator",
      "Bidding",
      "Project Management",
      "Documents",
    ],
    url: "https://rezillion.energy/",
    featured: true,
    theme: "blue",
  },

  {
    id: "04",
    type: "PROFESSIONAL WORK",
    title: "GreenzeeJobs",
    eyebrow: "Clean Energy Job Platform",
    description:
      "A recruitment-focused web application built around candidates, employers, job discovery, CV creation and career workflows.",
    tags: [
      "Job Portal",
      "Candidates",
      "Employers",
      "CV",
    ],
    url: "https://www.greenzeejobs.com/",
    featured: true,
    theme: "orange",
  },

  {
    id: "05",
    type: "PERSONAL PRODUCT",
    title: "BlinkCharts",
    eyebrow: "Financial Research Platform",
    description:
      "A data-heavy product combining charts, analysis, scoring, watchlists and research-oriented workflows.",
    tags: [
      "Charts",
      "Analytics",
      "Research",
      "Dashboard",
    ],
    url: "https://blinkcharts.com/",
    featured: true,
    theme: "cyan",
  },

  {
    id: "06",
    type: "PERSONAL / CLIENT",
    title: "Vizion",
    eyebrow: "Real Estate Experience",
    description:
      "A cinematic real-estate showcase built around visual presentation, motion and premium digital experience.",
    tags: [
      "Real Estate",
      "Landing Page",
      "Motion",
      "UI",
    ],
    url: "https://vizion-build-showcase.vercel.app/",
    featured: true,
    theme: "pink",
  },

  {
    id: "07",
    type: "PERSONAL PRODUCT",
    title: "Image Compressor",
    eyebrow: "Utility Product",
    description:
      "A simple browser-based utility focused on compressing images quickly while keeping the user experience clean.",
    tags: [
      "Image Processing",
      "Utility",
      "Performance",
    ],
    featured: false,
    theme: "green",
  },

  {
    id: "08",
    type: "PERSONAL PRODUCT",
    title: "PDF Compressor",
    eyebrow: "Utility Product",
    description:
      "A lightweight tool focused on making PDF compression simple and accessible.",
    tags: [
      "PDF",
      "File Processing",
      "Utility",
    ],
    featured: false,
    theme: "red",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    icon: Layers3,
    title: "Business Websites",
    description:
      "Modern websites designed to establish trust, communicate value and generate enquiries.",
  },

  {
    number: "02",
    icon: Code2,
    title: "Web Applications",
    description:
      "Custom dashboards, management systems, portals, authentication, APIs and database-driven applications.",
  },

  {
    number: "03",
    icon: Zap,
    title: "Digital Products",
    description:
      "MVPs and product ideas taken from rough concept to something real people can actually use.",
  },
];

/* =========================================================
   STACK
========================================================= */

const stackGroups = [
  {
    number: "01",
    title: "Frontend",
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    number: "02",
    title: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT Authentication",
    ],
  },

  {
    number: "03",
    title: "Data & Backend Services",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma",
      "Supabase",
    ],
  },

  {
    number: "04",
    title: "Infrastructure",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "AWS",
    ],
  },

  {
    number: "05",
    title: "Product & Integrations",
    technologies: [
      "Payment Integration",
      "Authentication",
      "File Processing",
      "Dashboards",
      "AI",
    ],
  },
];

/* =========================================================
   PAGES CONFIGURATION (FOR FLOATING BAR)
========================================================= */

const sitePages = [
  { id: "top", label: "Home" },
  { id: "work", label: "Work" },
  { id: "capabilities", label: "Capabilities" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/* =========================================================
   MAGNETIC BUTTON
========================================================= */

function MagneticButton({
  children,
  href = "#",
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 220,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 220,
    damping: 18,
  });

  function handleMouseMove(event) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const relativeX =
      event.clientX -
      rect.left -
      rect.width / 2;

    const relativeY =
      event.clientY -
      rect.top -
      rect.height / 2;

    x.set(relativeX * 0.14);
    y.set(relativeY * 0.14);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="group inline-flex items-center gap-3 rounded-full bg-[#d9ff4f] px-6 py-3.5 text-sm font-semibold text-[#090a0b]"
    >
      {children}

      <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </motion.a>
  );
}

/* =========================================================
   TECH BADGE
========================================================= */

function TechBadge({ name }) {
  return (
    <motion.span
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] text-white/45 transition-colors hover:border-[#d9ff4f]/30 hover:bg-[#d9ff4f]/[0.04] hover:text-[#d9ff4f]"
    >
      {name}
    </motion.span>
  );
}

/* =========================================================
   PROJECT PREVIEW
========================================================= */

function ProjectPreview({ project }) {
  const glowMap = {
    lime:
      "bg-[radial-gradient(circle_at_72%_25%,rgba(217,255,79,.18),transparent_34%)]",

    violet:
      "bg-[radial-gradient(circle_at_72%_25%,rgba(124,108,255,.2),transparent_34%)]",

    blue:
      "bg-[radial-gradient(circle_at_72%_25%,rgba(68,145,255,.18),transparent_34%)]",

    orange:
      "bg-[radial-gradient(circle_at_72%_25%,rgba(255,145,70,.17),transparent_34%)]",

    cyan:
      "bg-[radial-gradient(circle_at_72%_25%,rgba(63,215,220,.18),transparent_34%)]",

    pink:
      "bg-[radial-gradient(circle_at_72%_25%,rgba(255,100,177,.16),transparent_34%)]",

    green:
      "bg-[radial-gradient(circle_at_72%_25%,rgba(100,220,130,.15),transparent_34%)]",

    red:
      "bg-[radial-gradient(circle_at_72%_25%,rgba(255,80,80,.14),transparent_34%)]",
  };

  return (
    <div
      className={`relative aspect-[1.2/.82] overflow-hidden rounded-[28px] bg-[#0d0f10] ${glowMap[project.theme]}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.028)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <motion.div
        whileHover={{
          scale: 1.025,
          rotateX: 1,
          rotateY: -1,
        }}
        transition={{
          duration: 0.55,
        }}
        className="absolute left-[9%] right-[9%] top-[10%] bottom-[8%] overflow-hidden rounded-[17px] border border-white/10 bg-[#0b0d0e] shadow-[0_35px_100px_rgba(0,0,0,.5)] [transform-style:preserve-3d]"
      >
        <div className="flex h-9 items-center border-b border-white/10 px-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/60" />
            <span className="h-2 w-2 rounded-full bg-yellow-300/60" />
            <span className="h-2 w-2 rounded-full bg-green-400/60" />
          </div>
          <div className="mx-auto rounded-full border border-white/10 px-6 py-1 text-[7px] text-white/20">
            live-product-preview
          </div>
        </div>

        <div className="grid h-full grid-cols-[.2fr_1fr]">
          <div className="border-r border-white/10 p-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className={`mb-3 h-3 rounded ${
                  item === 1
                    ? "bg-[#d9ff4f]"
                    : "bg-white/[.055]"
                }`}
              />
            ))}
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="h-3 w-28 rounded bg-white/15" />
                <div className="mt-2 h-2 w-20 rounded bg-white/8" />
              </div>
              <div className="h-7 w-20 rounded-full bg-white/[.035]" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="h-14 rounded-xl border border-white/5 bg-white/[.025]" />
              <div className="h-14 rounded-xl border border-white/5 bg-white/[.025]" />
              <div className="h-14 rounded-xl border border-white/5 bg-white/[.025]" />
            </div>

            <div className="mt-3 h-24 rounded-xl border border-white/5 bg-white/[.018]" />

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="h-14 rounded-xl border border-white/5 bg-white/[.018]" />
              <div className="h-14 rounded-xl border border-white/5 bg-white/[.018]" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[.2em] text-white/45 backdrop-blur-xl">
        {project.id}
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <span className="text-[9px] uppercase tracking-[.2em] text-white/25">
          {project.type}
        </span>
        <ExternalLink size={14} className="text-white/25" />
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
      }}
      className="group"
    >
      <div className="overflow-hidden rounded-[31px] border border-white/10 bg-[#111315]">
        <ProjectPreview project={project} />

        <div className="p-6 md:p-8">
          <p className="text-[8px] font-bold uppercase tracking-[.22em] text-[#d9ff4f]">
            {project.eyebrow}
          </p>

          <h3 className="mt-4 text-3xl font-medium tracking-[-.045em] md:text-[2.7rem]">
            {project.title}
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/35">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] uppercase tracking-[.12em] text-white/35"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-white/65 transition hover:text-[#d9ff4f]"
          >
            Open live project
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: Track scroll to dynamically highlight/update current section page index
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sitePages.forEach((page, index) => {
        const element = document.getElementById(page.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      const nextIdx = currentIndex - 1;
      setCurrentIndex(nextIdx);
      const target = document.getElementById(sitePages[nextIdx].id);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentIndex < sitePages.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      const target = document.getElementById(sitePages[nextIdx].id);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#090a0b] text-[#f4f4ef] relative pb-20">

      {/* =====================================================
          FLOATING PAGINATION BAR
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-[#090a0b]/80 px-4 py-2.5 backdrop-blur-xl shadow-2xl"
      >
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/70 cursor-pointer disabled:cursor-not-allowed"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <div className="h-4 w-[1px] bg-white/10" />

        <div className="text-[11px] font-semibold tracking-wider text-[#d9ff4f] px-1">
          <span>0{currentIndex + 1}</span>
          <span className="text-white/30 font-normal"> / 0{sitePages.length}</span>
          <span className="hidden md:inline ml-2 text-white/50 text-[10px] uppercase">
            ({sitePages[currentIndex].label})
          </span>
        </div>

        <div className="h-4 w-[1px] bg-white/10" />

        <button
          onClick={handleNext}
          disabled={currentIndex === sitePages.length - 1}
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/70 cursor-pointer disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Next</span>
          <ArrowRight size={14} />
        </button>
      </motion.div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#090a0b]/70 px-4 py-3 backdrop-blur-xl md:px-5">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d9ff4f] text-[10px] font-black text-[#090a0b]">
              SK
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] font-bold tracking-[.15em]">
                SHAVANDEB KAITI
              </p>
              <p className="mt-0.5 text-[8px] tracking-[.18em] text-white/25">
                DIGITAL PRODUCT DEVELOPER
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-xs text-white/45 md:flex">
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
            <a href="#stack" className="transition hover:text-white">Stack</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/10 px-4 py-2.5 text-xs transition hover:border-[#d9ff4f]/40 hover:bg-[#d9ff4f] hover:text-[#090a0b]"
          >
            Let's talk
          </a>
        </div>
      </header>


      {/* =====================================================
          HERO (Page 1)
      ====================================================== */}

      <section
        id="top"
        className="relative px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[3%] top-[14%] h-[360px] w-[360px] rounded-full bg-[#d9ff4f]/[.05] blur-[130px]" />
          <div className="absolute right-[4%] top-[25%] h-[430px] w-[430px] rounded-full bg-[#6e5cff]/[.055] blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.46fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-8 flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#d9ff4f] opacity-50" />
                  <span className="relative h-2 w-2 rounded-full bg-[#d9ff4f]" />
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[.24em] text-white/30">
                  Available for selected projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="max-w-6xl text-[clamp(4.3rem,9vw,9.7rem)] font-medium leading-[.78] tracking-[-.085em]"
              >
                I build
                <br />
                <span className="text-[#d9ff4f]">products.</span>
                <br />
                <span className="text-white/20">not just</span>
                <br />
                websites.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-10 max-w-xl text-base leading-7 text-white/40 md:text-lg"
              >
                Full-stack developer turning complicated ideas into useful
                business software, web applications and digital experiences.
              </motion.p>

              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton href="#work">
                  See what I've built
                </MagneticButton>
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm text-white/70 transition hover:bg-white/[.04]"
                >
                  Start a project
                  <ArrowRight size={15} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[9px] uppercase tracking-[.18em] text-white/20">
                <span>8+ builds</span>
                <span>2 client platforms</span>
                <span>2 professional products</span>
                <span>B.Tech graduate</span>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative hidden h-[520px] lg:block">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateX: [0, 2, 0],
                  rotateY: [0, -4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[310px] w-[300px] -translate-x-1/2 -translate-y-1/2 [perspective:1200px]"
              >
                <div className="relative h-full w-full [transform-style:preserve-3d]">
                  <div className="absolute left-1/2 top-1/2 h-[245px] w-[290px] -translate-x-1/2 -translate-y-1/2 -rotate-[5deg] rounded-[24px] border border-white/10 bg-[#111315] p-3 shadow-[0_45px_110px_rgba(0,0,0,.55)]">
                    <div className="h-full rounded-[17px] border border-white/5 bg-[#0a0c0d] p-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-400/50" />
                        <span className="h-2 w-2 rounded-full bg-yellow-300/50" />
                        <span className="h-2 w-2 rounded-full bg-green-400/50" />
                      </div>
                      <div className="mt-6 grid grid-cols-[.38fr_1fr] gap-3">
                        <div>
                          {[1, 2, 3, 4, 5].map((item) => (
                            <div
                              key={item}
                              className={`mb-2 h-3 rounded ${
                                item === 1
                                  ? "bg-[#d9ff4f]"
                                  : "bg-white/[.05]"
                              }`}
                            />
                          ))}
                        </div>
                        <div>
                          <div className="h-3 w-28 rounded bg-white/15" />
                          <div className="mt-2 h-2 w-20 rounded bg-white/8" />
                          <div className="mt-6 grid grid-cols-3 gap-2">
                            <div className="h-12 rounded-lg bg-white/[.03]" />
                            <div className="h-12 rounded-lg bg-white/[.03]" />
                            <div className="h-12 rounded-lg bg-white/[.03]" />
                          </div>
                          <div className="mt-3 h-20 rounded-lg bg-white/[.025]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.08]"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9ff4f]/10"
                  />
                  <div className="absolute left-[-10px] top-[40%] h-3 w-3 rounded-full bg-[#d9ff4f] shadow-[0_0_25px_rgba(217,255,79,.7)]" />
                  <div className="absolute right-[5px] top-[22%] h-2.5 w-2.5 rounded-full bg-[#7d6cff] shadow-[0_0_25px_rgba(125,108,255,.7)]" />
                  <div className="absolute bottom-[20px] right-[55px] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(103,232,249,.7)]" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute left-0 top-[18%] rounded-2xl border border-white/10 bg-[#111315]/85 px-4 py-3 backdrop-blur-xl"
              >
                <p className="text-[8px] uppercase tracking-[.2em] text-white/20">Featured</p>
                <p className="mt-1 text-xs text-white/70">Dhenu Mahima</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-[15%] right-0 rounded-2xl border border-white/10 bg-[#111315]/85 px-4 py-3 backdrop-blur-xl"
              >
                <p className="text-[8px] uppercase tracking-[.2em] text-white/20">Currently</p>
                <p className="mt-1 text-xs text-[#d9ff4f]">Building AI</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          MARQUEE & PROOF
      ====================================================== */}

      <section className="overflow-hidden border-y border-white/10 bg-[#0d0f10] py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
          className="flex min-w-max gap-10"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-10 text-[9px] font-bold uppercase tracking-[.25em] text-white/20"
            >
              <span>Business Software</span>
              <span className="text-[#d9ff4f]">✦</span>
              <span>Web Applications</span>
              <span className="text-[#7d6cff]">✦</span>
              <span>Digital Products</span>
              <span className="text-[#d9ff4f]">✦</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-2 overflow-hidden rounded-[26px] border border-white/10 md:grid-cols-4">
          {[
            ["08+", "Projects & builds"],
            ["02", "Client platforms"],
            ["02", "Professional products"],
            ["01", "AI product in progress"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="border-b border-r border-white/10 bg-[#090a0b] px-6 py-8 last:border-r-0 md:border-b-0 md:px-8 md:py-10"
            >
              <p className="text-3xl font-medium tracking-[-.05em] md:text-5xl">{number}</p>
              <p className="mt-2 text-[8px] uppercase tracking-[.18em] text-white/20">{label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* =====================================================
          WORK (Page 2)
      ====================================================== */}

      <section
        id="work"
        className="px-5 py-24 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.45fr_.55fr]">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#d9ff4f]">
                01 / Selected work
              </p>
              <h2 className="mt-6 text-6xl font-medium leading-[.84] tracking-[-.07em] md:text-8xl">
                Real<br />products.<br />
                <span className="text-white/20">Real work.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="max-w-md text-sm leading-7 text-white/35">
                Business platforms, management systems, job portals,
                data-heavy products, utilities and premium landing experiences.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
          </div>

          <div className="mt-20 border-t border-white/10">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  key={project.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group grid gap-5 border-b border-white/10 py-8 md:grid-cols-[70px_.2fr_.65fr_30px] md:items-center"
                >
                  <span className="text-[9px] font-bold text-white/20">{project.id}</span>
                  <span className="text-[8px] font-bold uppercase tracking-[.18em] text-[#d9ff4f]">
                    {project.type}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-.035em]">{project.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-white/30">{project.description}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-white/25 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d9ff4f]"
                  />
                </motion.a>
              ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-6xl">
          <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#7d6cff]">
            Built with a product mindset
          </p>
          <h2 className="mt-8 text-5xl font-medium leading-[.9] tracking-[-.065em] md:text-8xl">
            You don't need<span className="text-white/20"> another template.</span>
            <br />
            You need<span className="text-[#d9ff4f]"> software built around your problem.</span>
          </h2>
        </div>
      </section>


      {/* =====================================================
          CAPABILITIES (Page 3)
      ====================================================== */}

      <section
        id="capabilities"
        className="border-y border-white/10 bg-[#0d0f10] px-5 py-28 md:px-10 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[.32fr_.68fr]">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#d9ff4f]">
                02 / Capabilities
              </p>
              <h2 className="mt-6 text-5xl font-medium leading-[.88] tracking-[-.06em] md:text-7xl">
                What I<br />build.
              </h2>
            </div>
            <div>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.number}
                    whileHover={{ x: 8 }}
                    className="group flex gap-5 border-t border-white/10 py-9"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[.02] transition group-hover:border-[#d9ff4f]/30 group-hover:bg-[#d9ff4f] group-hover:text-[#090a0b]">
                      <Icon size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-medium tracking-[-.035em] md:text-4xl">
                          {service.title}
                        </h3>
                        <span className="text-[8px] font-bold text-white/20">{service.number}</span>
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          THE STACK (Page 4)
      ====================================================== */}

      <section
        id="stack"
        className="border-b border-white/10 px-5 py-28 md:px-10 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.32fr_.68fr]">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#d9ff4f]">
                03 / The Stack
              </p>
              <h2 className="mt-6 text-5xl font-medium leading-[.88] tracking-[-.06em] md:text-7xl">
                Tools<br />I use<br />to build.
              </h2>
              <p className="mt-7 max-w-xs text-sm leading-6 text-white/30">
                I work across the product stack — from interfaces and APIs to
                databases, authentication, deployment and integrations.
              </p>
            </div>
            <div>
              {stackGroups.map((group) => (
                <div key={group.number} className="border-t border-white/10 py-8 last:border-b">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white/70">{group.title}</h3>
                    <span className="text-[8px] font-bold uppercase tracking-[.18em] text-white/20">
                      {group.number}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.technologies.map((technology) => (
                      <TechBadge key={technology} name={technology} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT (Page 5)
      ====================================================== */}

      <section
        id="about"
        className="px-5 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[.3fr_.7fr]">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#7d6cff]">
                04 / About
              </p>
              <div className="mt-6 space-y-1 text-[10px] leading-5 text-white/20">
                <p>B.Tech Graduate</p>
                <p>Computer Science</p>
                <p>Full-stack Developer</p>
                <p>Digital Product Builder</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-medium leading-[.95] tracking-[-.055em] md:text-6xl">
                I enjoy working<span className="text-white/20"> where business problems meet technology.</span>
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <p className="text-sm leading-7 text-white/40">
                  My work spans business management platforms, payment flows,
                  geographic systems, job platforms, dashboards, data-heavy
                  products, utility tools and animated interfaces.
                </p>
                <p className="text-sm leading-7 text-white/40">
                  I like understanding the complete product — the user,
                  workflow, interface, backend and the system underneath it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-cyan-400/10 bg-[#0c1417]">
          <div className="relative p-7 md:p-12">
            <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-300/[.05] blur-[90px]" />
            <div className="relative grid gap-12 lg:grid-cols-[.4fr_.6fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/10 bg-cyan-300/[.03] px-3 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                  <span className="text-[8px] font-bold uppercase tracking-[.2em] text-cyan-200/60">
                    Currently building
                  </span>
                </div>
                <h2 className="mt-8 text-5xl font-medium leading-[.88] tracking-[-.06em] md:text-7xl">
                  Living<br />Avatar.
                </h2>
              </div>
              <div>
                <p className="max-w-xl text-base leading-7 text-white/40">
                  An experimental product exploring how a person's face can
                  become an animated avatar that can perform recorded actions
                  together with audio.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Face processing", "Avatar animation", "Audio", "Recording"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[.02] px-4 py-4 text-xs text-white/40"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT / CTA (Page 6)
      ====================================================== */}

      <section
        id="contact"
        className="px-5 pb-10 md:px-10"
      >
        <div className="mx-auto max-w-7xl rounded-[38px] bg-[#d9ff4f] px-7 py-20 text-[#090a0b] md:px-14 md:py-28">
          <div className="max-w-5xl">
            <p className="text-[9px] font-black uppercase tracking-[.25em]">
              06 / Start a project
            </p>
            <h2 className="mt-7 text-5xl font-medium leading-[.87] tracking-[-.07em] md:text-8xl">
              Have a problem<br />worth solving?
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-6 text-black/50">
              Tell me what you're trying to build, what problem you're
              solving and what a successful outcome looks like.
            </p>
            <a
              href="mailto:hello@example.com"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#090a0b] px-6 py-3.5 text-sm font-semibold text-[#d9ff4f]"
            >
              Start a conversation
              <Mail size={15} />
            </a>
          </div>
        </div>

        <footer className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-7 border-t border-white/10 py-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold">SHAVANDEB KAITI</p>
            <p className="mt-1 text-[9px] text-white/20">Full-stack developer · Digital product builder</p>
          </div>
          <div className="flex gap-2">
            <a href="#" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/35 transition hover:border-[#d9ff4f]/30 hover:text-[#d9ff4f]">
              <FaGithub size={13} />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/35 transition hover:border-[#d9ff4f]/30 hover:text-[#d9ff4f]">
              <FaLinkedin size={13} />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/35 transition hover:border-[#d9ff4f]/30 hover:text-[#d9ff4f]">
              <FaInstagram size={13} />
            </a>
          </div>
          <p className="text-[9px] text-white/20">© {new Date().getFullYear()} Shavandeb Kaiti</p>
        </footer>
      </section>

    </main>
  );
}