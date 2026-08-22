"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useVelocity,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Zap,
  ShoppingCart,
  Database,
  Activity,
  Cpu,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

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
    tags: ["Admin Panel", "Payments", "Donations", "E-books"],
    url: "https://www.dhenumahima.com/",
    featured: true,
    theme: "terracotta",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    type: "CLIENT PRODUCT",
    title: "Gau Samman",
    eyebrow: "Management & Registration Platform",
    description:
      "A management-focused platform with registration workflows, geographic hierarchy, resources and administrative systems.",
    tags: ["Registration", "Admin", "State / District", "Workflows"],
    url: "https://www.gausamman.cloud/",
    featured: true,
    theme: "amber",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    type: "PROFESSIONAL WORK",
    title: "Rezillion",
    eyebrow: "Solar Technology Platform",
    description:
      "A professional web product involving solar calculation, installer bidding, project tracking, documents, scoring and workflows.",
    tags: ["Solar Calculator", "Bidding", "Project Management"],
    url: "https://rezillion.energy/",
    featured: true,
    theme: "sand",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    type: "PROFESSIONAL WORK",
    title: "GreenzeeJobs",
    eyebrow: "Clean Energy Job Platform",
    description:
      "A recruitment-focused web application built around candidates, employers, job discovery, CV creation and career workflows.",
    tags: ["Job Portal", "Candidates", "Employers", "CV"],
    url: "https://www.greenzeejobs.com/",
    featured: true,
    theme: "peach",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  },
];

/* =========================================================
   SHELF PRODUCTS DATA
========================================================= */

const products = [
  { id: "PKG-A1", name: "Forge Auth", cat: "Security", price: 129, desc: "Drop-in authentication primitive. OAuth, Magic Links, and biometric passkeys.", stack: "Node, Redis", icon: "text-[#D25E3E]" },
  { id: "PKG-B2", name: "Syntax Engine", cat: "UI Core", price: 89, desc: "Strictly typed, headless React component library for complex dashboards.", stack: "React, Tailwind", icon: "text-[#B45309]" },
  { id: "PKG-C3", name: "Signal AI", cat: "AI / ML", price: 199, desc: "Streaming LLM wrapper with built-in rate limiting, caching, and prompt defense.", stack: "Next.js, OpenAI", icon: "text-[#D97706]" },
  { id: "PKG-D4", name: "Vault ORM", cat: "Database", price: 149, desc: "Type-safe query builder optimized for edge computing and serverless environments.", stack: "TypeScript, SQL", icon: "text-[#9A3412]" },
  { id: "PKG-E5", name: "Metric.sh", cat: "Telemetry", price: 99, desc: "Lightweight analytics script that bypasses ad-blockers for vital system telemetry.", stack: "Go, ClickHouse", icon: "text-[#D25E3E]" },
  { id: "PKG-F6", name: "Nexus Admin", cat: "UI Core", price: 159, desc: "Full-featured admin panel starter. Data grids, charts, and RBAC included.", stack: "Next.js, Tailwind", icon: "text-[#B45309]" },
];

/* =========================================================
   SERVICES & STACK
========================================================= */

const services = [
  { number: "01", icon: Layers3, title: "Business Websites", description: "Modern websites designed to establish trust, communicate value and generate enquiries." },
  { number: "02", icon: Code2, title: "Web Applications", description: "Custom dashboards, management systems, portals, authentication, APIs and database-driven applications." },
  { number: "03", icon: Zap, title: "Digital Products", description: "MVPs and product ideas taken from rough concept to something real people can actually use." },
];

const stackGroups = [
  { number: "01", title: "Frontend", technologies: ["JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { number: "02", title: "Backend", technologies: ["Node.js", "Express", "REST APIs", "JWT Authentication"] },
  { number: "03", title: "Data & Backend Services", technologies: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Supabase"] },
  { number: "04", title: "Infrastructure", technologies: ["Git", "GitHub", "Docker", "Vercel", "AWS"] },
];

const sitePages = [
  { id: "top", label: "Home" },
  { id: "work", label: "Work" },
  { id: "shelf", label: "The Shelf" },
  { id: "capabilities", label: "Capabilities" },
  { id: "stack", label: "Stack" },
  { id: "about", label: "About" },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const easeOut = [0.16, 1, 0.3, 1];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};

const slideFromVariant = (dir = 1) => ({
  hidden: { opacity: 0, x: 48 * dir, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
});

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* =========================================================
   SCROLL PROGRESS BAR
========================================================= */

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2.5px] w-full origin-left bg-gradient-to-r from-[#D25E3E] via-[#E07A5F] to-[#D25E3E]"
    />
  );
}

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function AnimatedCounter({ value, className }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const controls = animate(0, value, {
            duration: 1.4,
            ease: easeOut,
            onUpdate: (v) => setDisplay(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* =========================================================
   MAGNETIC BUTTON
========================================================= */

function MagneticButton({ children, href = "#" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.14);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.14);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#362926] px-6 py-3.5 text-sm font-semibold text-[#FAF5F0] shadow-md transition-colors duration-300 hover:bg-[#D25E3E] sm:gap-3 sm:px-7"
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight
        size={15}
        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
      <motion.span
        aria-hidden
        className="absolute inset-0 -z-0 bg-gradient-to-r from-[#D25E3E] to-[#E07A5F] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="rounded-full border border-[#E8D9D3] bg-[#FFFFFF] px-3.5 py-2 text-[10px] font-semibold text-[#6B5C58] shadow-[0_4px_12px_rgba(54,41,38,0.08)] transition-all hover:border-[#D25E3E]/30 hover:bg-[#FDF8F5] hover:text-[#D25E3E] hover:shadow-[0_8px_20px_rgba(54,41,38,0.15)] sm:px-4"
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
    amber: "bg-[radial-gradient(circle_at_72%_25%,rgba(217,119,6,.15),transparent_34%)]",
    terracotta: "bg-[radial-gradient(circle_at_72%_25%,rgba(210,94,62,.15),transparent_34%)]",
    sand: "bg-[radial-gradient(circle_at_72%_25%,rgba(180,83,9,.15),transparent_34%)]",
    peach: "bg-[radial-gradient(circle_at_72%_25%,rgba(234,88,12,.15),transparent_34%)]",
  };

  return (
    <div className={`relative aspect-[1.25/.9] overflow-hidden rounded-[22px] bg-[#F5EBE6] sm:aspect-[1.2/.82] sm:rounded-[28px] ${glowMap[project.theme]}`}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
        whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
        className="absolute left-[5%] right-[5%] top-[7%] bottom-[5%] overflow-hidden rounded-[12px] border border-[#E8D9D3] bg-[#FFFFFF] shadow-[0_25px_50px_rgba(54,41,38,.25)] [transform-style:preserve-3d] sm:left-[6%] sm:right-[6%] sm:top-[8%] sm:bottom-[6%] sm:rounded-[14px]"
      >
        <div className="absolute top-0 z-10 flex h-7 w-full items-center border-b border-[#E8D9D3] bg-[#FAF5F0] px-3 sm:h-8">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#E07A5F] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#F2CC8F] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#81B29A] sm:h-2.5 sm:w-2.5" />
          </div>
        </div>

        <div className="relative h-full w-full overflow-hidden bg-[#FAF5F0] pt-7 sm:pt-8">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#362926]/5 transition-colors duration-300 hover:bg-transparent" />
        </div>
      </motion.div>

      <div className="absolute left-4 top-4 rounded-full border border-[#E8D9D3] bg-[#FFFFFF]/90 px-2.5 py-1 text-[7px] font-bold uppercase tracking-[.2em] text-[#6B5C58] shadow-sm backdrop-blur-md sm:left-5 sm:top-5 sm:px-3 sm:py-1.5 sm:text-[8px]">
        {project.id}
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={slideFromVariant(index % 2 === 0 ? -1 : 1)}
      transition={{ delay: (index % 2) * 0.08 }}
      className="group"
    >
      <div className="overflow-hidden rounded-[24px] border border-[#E8D9D3] bg-[#FFFFFF] shadow-[0_15px_40px_rgba(54,41,38,0.12)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(54,41,38,0.22)] sm:rounded-[31px]">
        <ProjectPreview project={project} />

        <div className="p-5 sm:p-6 md:p-8">
          <p className="text-[8px] font-bold uppercase tracking-[.22em] text-[#D25E3E]">{project.eyebrow}</p>

          <h3 className="mt-3 text-2xl font-bold tracking-[-.04em] text-[#362926] sm:mt-4 sm:text-3xl md:text-[2.6rem]">
            {project.title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#6B5C58] sm:mt-4">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#E8D9D3] bg-[#FAF5F0] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[.12em] text-[#8C7A77]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#8C7A77] transition-colors hover:text-[#D25E3E] sm:mt-8"
          >
            Open live project
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN PAGE COMPONENT
========================================================= */

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const heroRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroContentY = useTransform(heroProgress, [0, 1], [0, 80]);
  const heroContentOpacity = useTransform(heroProgress, [0, 0.85], [1, 0]);
  const orbOneY = useTransform(heroProgress, [0, 1], [0, -60]);
  const orbTwoY = useTransform(heroProgress, [0, 1], [0, 60]);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const marqueeSkew = useSpring(useTransform(scrollVelocity, [-2000, 0, 2000], [-6, 0, 6]), {
    stiffness: 300,
    damping: 40,
  });

  const footerRef = useRef(null);
  const { scrollYProgress: footerProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const footerIconY = useTransform(footerProgress, [0, 1], [40, -20]);
  const footerIconRotate = useTransform(footerProgress, [0, 1], [0, 12]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    document.documentElement.style.scrollBehavior = "smooth";

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      document.getElementById(sitePages[currentIndex - 1].id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentIndex < sitePages.length - 1) {
      document.getElementById(sitePages[currentIndex + 1].id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHeroMouseMove = (event) => {
    if (reducedMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setSpotlight({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const goTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 150);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF5F0] pb-16 font-sans text-[#362926] selection:bg-[#D25E3E] selection:text-white sm:pb-20">
      <ScrollProgressBar />

      {/* =====================================================
          FLOATING PAGINATION BAR
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
        className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#E8D9D3] bg-[#FFFFFF]/95 px-3 py-2 shadow-[0_15px_40px_rgba(54,41,38,0.18)] backdrop-blur-xl sm:bottom-6 sm:gap-3 sm:px-4 sm:py-2.5"
      >
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous section"
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-[#8C7A77] transition hover:bg-[#F5EBE6] hover:text-[#362926] disabled:opacity-40 sm:px-3"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Prev</span>
        </button>
        <div className="h-4 w-[1px] bg-[#E8D9D3]" />
        <div className="px-0.5 text-[10px] font-bold tracking-wider text-[#D25E3E] sm:text-[11px]">
          <span>0{currentIndex + 1}</span>
          <span className="font-medium text-[#B09F9B]"> / 0{sitePages.length}</span>
          <span className="ml-2 hidden text-[10px] font-semibold uppercase text-[#B09F9B] md:inline">
            ({sitePages[currentIndex].label})
          </span>
        </div>
        <div className="h-4 w-[1px] bg-[#E8D9D3]" />
        <button
          onClick={handleNext}
          disabled={currentIndex === sitePages.length - 1}
          aria-label="Next section"
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-[#8C7A77] transition hover:bg-[#F5EBE6] hover:text-[#362926] disabled:opacity-40 sm:px-3"
        >
          <span className="hidden sm:inline">Next</span>
          <ArrowRight size={14} />
        </button>
      </motion.div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#E8D9D3] bg-[#FFFFFF]/95 px-3 py-2.5 shadow-[0_10px_30px_rgba(54,41,38,0.15)] backdrop-blur-xl sm:px-4 sm:py-3 md:px-5"
        >
          <a href="#top" className="group flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D25E3E] text-[9px] font-black text-white shadow-md transition-transform group-hover:rotate-12 group-hover:scale-110 sm:h-9 sm:w-9 sm:text-[10px]">
              SK
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] font-bold tracking-[.15em] text-[#362926]">SHAVANDEB KAITI</p>
              <p className="mt-0.5 text-[8px] font-semibold tracking-[.18em] text-[#8C7A77]">DIGITAL PRODUCT DEVELOPER</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-bold text-[#8C7A77] md:flex">
            {sitePages.slice(1).map((page) => (
              <a key={page.id} href={`#${page.id}`} className="group relative transition-colors hover:text-[#D25E3E]">
                {page.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#D25E3E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full border border-[#E8D9D3] px-5 py-2.5 text-xs font-bold text-[#362926] shadow-sm transition-colors hover:bg-[#362926] hover:text-white sm:inline-block"
            >
              Let's talk
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8D9D3] text-[#362926] transition-colors hover:bg-[#362926] hover:text-white md:hidden"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mx-auto mt-2 max-w-7xl rounded-[24px] border border-[#E8D9D3] bg-[#FFFFFF]/95 p-2 shadow-[0_20px_50px_rgba(54,41,38,.2)] backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col">
                {sitePages.slice(1).map((page, i) => (
                  <motion.button
                    key={page.id}
                    onClick={() => goTo(page.id)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-bold text-[#362926] transition-colors hover:bg-[#F5EBE6] hover:text-[#D25E3E]"
                  >
                    {page.label}
                    <ArrowUpRight size={14} className="text-[#B09F9B]" />
                  </motion.button>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 rounded-2xl bg-[#362926] px-4 py-3.5 text-center text-sm font-bold text-[#FAF5F0] transition-colors hover:bg-[#D25E3E]"
                >
                  Let's talk
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="top"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative border-b border-[#E8D9D3] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-10 md:pb-32 md:pt-48"
      >
        {/* Cursor-reactive spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden transition-[background] duration-300 md:block"
          style={{
            background: `radial-gradient(500px circle at ${spotlight.x}% ${spotlight.y}%, rgba(210,94,62,0.06), transparent 60%)`,
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <motion.div
            style={{ y: reducedMotion ? 0 : orbOneY }}
            animate={reducedMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[3%] top-[14%] h-[260px] w-[260px] rounded-full bg-[#D25E3E]/10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[130px]"
          />
          <motion.div
            style={{ y: reducedMotion ? 0 : orbTwoY }}
            animate={reducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-[4%] top-[25%] h-[280px] w-[280px] rounded-full bg-[#E07A5F]/10 blur-[110px] sm:h-[450px] sm:w-[450px] sm:blur-[150px]"
          />
        </div>

        {/* CONTINUOUS SVG DATA TRACK */}
        <div className="absolute inset-0 z-0 hidden h-full w-full pointer-events-none opacity-40 sm:block">
          <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <path
              d="M -100 600 L 200 600 L 200 200 L 800 200 L 800 500 L 1200 500 L 1200 100 L 1600 100"
              fill="none"
              stroke="#E8D9D3"
              strokeWidth="2"
              strokeDasharray="12 12"
            />
            {!reducedMotion && (
              <>
                <path
                  d="M -100 600 L 200 600 L 200 200 L 800 200 L 800 500 L 1200 500 L 1200 100 L 1600 100"
                  fill="none"
                  stroke="#D25E3E"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: "4000",
                    strokeDashoffset: "4000",
                    filter: "drop-shadow(0 0 8px rgba(210, 94, 62, 0.4))",
                    animation: "draw-trail 6s cubic-bezier(0.65, 0, 0.35, 1) infinite",
                  }}
                />
                <style>{`@keyframes draw-trail { 0% { stroke-dashoffset: 4000; opacity: 0; } 10% { opacity: 1; } 80% { stroke-dashoffset: 0; opacity: 1; } 90% { stroke-dashoffset: 0; opacity: 0; } 100% { stroke-dashoffset: 0; opacity: 0; } }`}</style>
                <g>
                  <animateMotion
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.65 0 0.35 1"
                    path="M -100 600 L 200 600 L 200 200 L 800 200 L 800 500 L 1200 500 L 1200 100 L 1600 100"
                  />
                  <circle cx="0" cy="0" r="5" fill="#D25E3E" />
                  <circle cx="0" cy="0" r="12" fill="#E07A5F" className="animate-ping" opacity="0.3" />
                </g>
                <style>{`@keyframes fade-packet { 0% { opacity: 0; } 10% { opacity: 1; } 80% { opacity: 1; } 90% { opacity: 0; } 100% { opacity: 0; } }`}</style>
              </>
            )}
          </svg>
        </div>

        <motion.div
          style={{ y: reducedMotion ? 0 : heroContentY, opacity: reducedMotion ? 1 : heroContentOpacity }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.46fr] lg:gap-14">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div
                variants={fadeUpVariant}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8D9D3] bg-[#FFFFFF] px-3.5 py-2 shadow-[0_10px_30px_rgba(54,41,38,0.12)] sm:mb-8 sm:px-4"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#10B981] opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-[#10B981]" />
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#6B5C58] sm:text-[10px]">
                  System online // ready to compile
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUpVariant}
                className="max-w-6xl text-[clamp(2.9rem,13vw,9.7rem)] font-bold leading-[0.88] tracking-[-.05em] text-[#362926] sm:leading-[0.85] sm:tracking-[-.065em]"
              >
                Code <br />
                <span
                  className="text-[#FAF5F0]"
                  style={{
                    textShadow:
                      "-2px -2px 0 #D25E3E, 2px -2px 0 #D25E3E, -2px 2px 0 #D25E3E, 2px 2px 0 #D25E3E, 6px 6px 0px rgba(210,94,62,0.15)",
                  }}
                >
                  designed.
                </span>
                <br />
                <span className="text-[#8C7A77]">Shipped.</span>
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="mt-7 max-w-xl text-base leading-7 text-[#6B5C58] sm:mt-10 sm:text-lg"
              >
                Engineering scalable web architecture without the bloat. We build high-performance
                logic engines and robust user interfaces that clients love.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="mt-8 flex flex-wrap gap-4 sm:mt-9">
                <MagneticButton href="#work">Browse Workshop</MagneticButton>
              </motion.div>
            </motion.div>

            {/* Premium 3D Abstract Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden h-[520px] lg:block"
            >
              <motion.div
                animate={reducedMotion ? {} : { y: [0, -15, 0], rotateX: [2, -2, 2], rotateY: [-4, 4, -4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 h-[310px] w-[300px] -translate-x-1/2 -translate-y-1/2 [perspective:1200px]"
              >
                <div className="relative h-full w-full [transform-style:preserve-3d]">
                  <div className="absolute left-1/2 top-1/2 h-[245px] w-[290px] -translate-x-1/2 -translate-y-1/2 -rotate-[5deg] rounded-[24px] border border-[#E8D9D3] bg-[#FFFFFF] p-3 shadow-[0_35px_80px_rgba(54,41,38,.18)]">
                    <div className="relative h-full overflow-hidden rounded-[17px] border border-[#E8D9D3] bg-[#FDFBF7] p-3">
                      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#D25E3E]/5" />
                      <div className="relative z-10 mb-6 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#E07A5F]" />
                        <span className="h-2 w-2 rounded-full bg-[#F2CC8F]" />
                        <span className="h-2 w-2 rounded-full bg-[#81B29A]" />
                      </div>
                      <div className="relative z-10 space-y-3">
                        <div className="h-3 w-[80%] rounded bg-[#D25E3E]/20" />
                        <div className="h-3 w-[60%] rounded bg-[#E8D9D3]" />
                        <div className="h-3 w-[90%] rounded bg-[#E8D9D3]" />
                        <div className="mt-8 flex gap-2">
                          <div className="h-10 w-10 rounded bg-[#F5EBE6]" />
                          <div className="h-10 flex-1 rounded bg-[#F5EBE6]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={reducedMotion ? {} : { rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#E8D9D3]/80"
                  />
                  <motion.div
                    animate={reducedMotion ? {} : { rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D25E3E]/20"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          MARQUEE
      ====================================================== */}
      <section className="overflow-hidden border-b border-[#E8D9D3] bg-[#F5EBE6] py-3 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] sm:py-4">
        <motion.div
          style={{ skewX: reducedMotion ? 0 : marqueeSkew }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex min-w-max gap-8 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#8C7A77] sm:gap-12 sm:text-sm"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex items-center gap-8 sm:gap-12">
              <span>No abstractions</span>
              <span className="text-[#D25E3E]">✦</span>
              <span>Pure logic</span>
              <span className="text-[#D25E3E]">✦</span>
              <span>Zero bloat</span>
              <span className="text-[#D25E3E]">✦</span>
              <span>High performance</span>
              <span className="text-[#D25E3E]">✦</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          WORK
      ====================================================== */}
      <section id="work" className="bg-[#FAF5F0] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="mb-10 flex flex-col justify-between gap-6 border-b border-[#E8D9D3] pb-6 sm:mb-16 sm:gap-8 sm:pb-8 md:flex-row md:items-end"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#D25E3E]">01 / The Workshop</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-.045em] text-[#362926] sm:mt-4 sm:text-5xl md:text-7xl">
                Real <span className="text-[#B09F9B]">products.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <p className="rounded-full border border-[#F2D7CE] bg-[#FDF8F5] px-4 py-2 text-sm font-semibold text-[#D25E3E] shadow-sm">
                Custom systems engineered for scale.
              </p>
              <p className="font-mono text-[10px] font-bold text-[#8C7A77]">
                TOTAL BUILDS: <AnimatedCounter value={projects.length} className="text-sm text-[#D25E3E]" />
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          THE SHELF
      ====================================================== */}
      <section id="shelf" className="border-y border-[#E8D9D3] bg-[#F5EBE6] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="mb-10 flex flex-col justify-between gap-6 sm:mb-16 sm:gap-8 md:flex-row md:items-end"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#D25E3E]">02 / Modular Code</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-.045em] text-[#362926] sm:mt-4 sm:text-5xl md:text-7xl">
                The <span className="text-[#D25E3E]">Shelf.</span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#6B5C58] sm:mt-4">
                Ready-made software modules. Drop them into your stack and accelerate your development cycle.
              </p>
            </div>
            <div className="flex items-center gap-3 self-start rounded-full border border-[#E8D9D3] bg-[#FFFFFF] px-4 py-2 font-mono text-xs font-bold text-[#6B5C58] shadow-sm md:self-auto">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#10B981]" />
              API status: Nominal
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#E8D9D3] bg-[#FFFFFF] shadow-[0_15px_40px_rgba(54,41,38,0.12)] transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(54,41,38,0.22)]"
              >
                <div className="relative h-36 overflow-hidden border-b border-[#E8D9D3] bg-gradient-to-br from-[#F5EBE6] to-[#E8D9D3] p-5 sm:h-40 sm:p-6">
                  <div className="absolute right-3 top-3 rounded-full border border-[#E8D9D3] bg-[#FFFFFF]/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#6B5C58] shadow-sm backdrop-blur-md sm:right-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px]">
                    {product.cat}
                  </div>
                  <Database
                    size={90}
                    className={`absolute -bottom-6 -right-6 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 ${product.icon}`}
                  />
                  <div className="relative z-10 mt-7 sm:mt-8">
                    <span className="rounded bg-[#FFFFFF]/90 px-2 py-1 font-mono text-[10px] font-bold text-[#8C7A77] shadow-sm">
                      {product.id}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-[#362926] sm:text-2xl">{product.name}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-[#6B5C58] sm:mb-6">{product.desc}</p>
                  <div className="mb-5 flex items-center gap-2 rounded-lg border border-[#E8D9D3] bg-[#FAF5F0] p-2 font-mono text-[11px] font-bold text-[#8C7A77] sm:mb-6">
                    <Code2 size={14} className={product.icon} /> Stack: {product.stack}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-[#E8D9D3] pt-5 sm:pt-6">
                    <div className="text-2xl font-bold tracking-tight text-[#362926] sm:text-3xl">${product.price}</div>
                    <button className="flex items-center gap-2 rounded-full border border-[#E8D9D3] bg-[#FFFFFF] px-4 py-2.5 text-xs font-bold text-[#362926] shadow-[0_8px_20px_rgba(54,41,38,0.08)] transition-colors hover:bg-[#362926] hover:text-[#FAF5F0] sm:px-5">
                      <ShoppingCart size={14} /> Get
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}
      <section id="capabilities" className="bg-[#FAF5F0] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[.32fr_.68fr] lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#D25E3E]">03 / Capabilities</p>
              <h2 className="mt-4 text-4xl font-bold leading-[.9] tracking-[-.05em] text-[#362926] sm:mt-6 sm:text-5xl md:text-7xl">
                What I<br />build.
              </h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-6 sm:space-y-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.number}
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
                    whileHover={{ y: -6 }}
                    className="group flex gap-4 rounded-3xl border border-[#E8D9D3] bg-[#FFFFFF] p-6 shadow-[0_15px_35px_rgba(54,41,38,0.12)] transition-all hover:shadow-[0_25px_50px_rgba(54,41,38,0.22)] sm:gap-6 sm:p-8"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E8D9D3] bg-[#FAF5F0] text-[#6B5C58] shadow-sm transition-colors duration-300 group-hover:border-[#D25E3E] group-hover:bg-[#D25E3E] group-hover:text-white sm:h-14 sm:w-14">
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold tracking-[-.03em] text-[#362926] sm:text-2xl md:text-3xl">
                          {service.title}
                        </h3>
                        <span className="font-mono text-[10px] font-bold text-[#B09F9B]">{service.number}</span>
                      </div>
                      <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#6B5C58] sm:mt-3">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STACK
      ====================================================== */}
      <section id="stack" className="border-t border-[#E8D9D3] bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[.32fr_.68fr] lg:gap-14">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#D25E3E]">04 / The Stack</p>
              <h2 className="mt-4 text-4xl font-bold leading-[.9] tracking-[-.05em] text-[#362926] sm:mt-6 sm:text-5xl md:text-7xl">
                Tools<br />I use<br />to build.
              </h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-6 sm:space-y-8">
              {stackGroups.map((group) => (
                <motion.div
                  key={group.number}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  className="rounded-3xl border border-[#E8D9D3] bg-[#FFFFFF] p-6 shadow-[0_15px_35px_rgba(54,41,38,0.12)] transition-all hover:shadow-[0_25px_50px_rgba(54,41,38,0.22)] sm:p-8"
                >
                  <div className="mb-5 flex items-center justify-between sm:mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B5C58] sm:text-sm">{group.title}</h3>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-[#B09F9B]">
                      {group.number}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section id="about" className="border-t border-[#E8D9D3] bg-[#F5EBE6] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[.3fr_.7fr] lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
              <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#D25E3E]">05 / About</p>
              <div className="mt-5 flex flex-col gap-3 text-[10px] font-bold uppercase leading-5 tracking-wider text-[#8C7A77] sm:mt-6">
                <p className="inline-flex w-fit items-center gap-3 rounded-xl border border-[#E8D9D3] bg-[#FFFFFF] px-4 py-2.5 shadow-[0_8px_20px_rgba(54,41,38,0.1)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D25E3E]" /> B.Tech Graduate
                </p>
                <p className="inline-flex w-fit items-center gap-3 rounded-xl border border-[#E8D9D3] bg-[#FFFFFF] px-4 py-2.5 shadow-[0_8px_20px_rgba(54,41,38,0.1)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D25E3E]" /> Computer Science
                </p>
                <p className="inline-flex w-fit items-center gap-3 rounded-xl border border-[#E8D9D3] bg-[#FFFFFF] px-4 py-2.5 shadow-[0_8px_20px_rgba(54,41,38,0.1)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D25E3E]" /> Full-stack Developer
                </p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-[-.035em] text-[#362926] sm:text-4xl md:text-6xl">
                I enjoy working{" "}
                <span className="font-medium text-[#B09F9B]">where business problems meet clean technology.</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer
        id="contact"
        ref={footerRef}
        className="relative overflow-hidden border-t border-[#E8D9D3] bg-white pb-10 pt-16 sm:pb-12 sm:pt-24"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-14 grid grid-cols-1 gap-10 sm:mb-20 sm:gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[.25em] text-[#D25E3E] sm:mb-4">
                06 / Initiate Connection
              </p>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#362926] sm:mb-8 sm:text-5xl md:text-7xl">
                Ready to
                <br />
                scale up?
              </h2>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-3 rounded-full bg-[#362926] px-7 py-3.5 text-sm font-bold text-[#FAF5F0] shadow-[0_10px_20px_rgba(54,41,38,.15)] transition-all hover:-translate-y-1 hover:bg-[#D25E3E] hover:shadow-[0_15px_30px_rgba(54,41,38,.2)] sm:px-8 sm:py-4"
              >
                Open Communications <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="flex flex-col justify-end space-y-3 font-mono text-sm font-bold text-[#6B5C58] sm:space-y-4 md:items-end"
            >
              <a
                href="#"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#E8D9D3] bg-[#FFFFFF] px-5 py-3 shadow-[0_10px_25px_rgba(54,41,38,0.1)] transition-all hover:border-[#D25E3E] hover:text-[#D25E3E] hover:shadow-[0_20px_40px_rgba(54,41,38,0.18)] md:w-auto md:justify-end"
              >
               <FaGithub /> GitHub // Repos
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#E8D9D3] bg-[#FFFFFF] px-5 py-3 shadow-[0_10px_25px_rgba(54,41,38,0.1)] transition-all hover:border-[#D25E3E] hover:text-[#D25E3E] hover:shadow-[0_20px_40px_rgba(54,41,38,0.18)] md:w-auto md:justify-end"
              >
                <FaLinkedin /> LinkedIn // Pro
              </a>
              <a
                href="mailto:hello@example.com"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#E8D9D3] bg-[#FFFFFF] px-5 py-3 shadow-[0_10px_25px_rgba(54,41,38,0.1)] transition-all hover:border-[#D25E3E] hover:text-[#D25E3E] hover:shadow-[0_20px_40px_rgba(54,41,38,0.18)] md:w-auto md:justify-end"
              >
                <Mail size={15} /> Email // Direct
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E8D9D3] pt-7 font-mono text-[10px] font-bold text-[#8C7A77] sm:pt-8 md:flex-row">
            <div>© {new Date().getFullYear()} Kaiti Developments.</div>
            <div className="flex items-center gap-2 rounded-full border border-[#E8D9D3] bg-[#FFFFFF] px-3 py-1.5 shadow-[0_4px_12px_rgba(54,41,38,0.06)]">
              <Activity size={14} className="text-[#10B981]" /> Sys health: Optimal
            </div>
          </div>
        </div>

        <motion.div
          style={{ y: reducedMotion ? 0 : footerIconY, rotate: reducedMotion ? 0 : footerIconRotate }}
          className="pointer-events-none absolute -bottom-16 -right-8 z-0 text-[#FAF5F0] opacity-80 sm:-bottom-24 sm:-right-12"
        >
          <Cpu size={220} strokeWidth={0.5} className="sm:hidden" />
          <Cpu size={350} strokeWidth={0.5} className="hidden sm:block" />
        </motion.div>
      </footer>
    </main>
  );
}