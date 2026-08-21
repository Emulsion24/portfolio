 "use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Download,


  Mail,
  PackageSearch,
  Terminal,
} from "lucide-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "Tint Scholar",
    desc: "Academic management platform connecting teachers, students and administrators with role-based workflows.",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    color: "lime",
    featured: true,
  },
  {
    id: "02",
    title: "Academic Management System",
    desc: "Full-stack platform with authentication, dashboards, student management and database-backed workflows.",
    stack: ["React", "Node", "MongoDB", "Express"],
    color: "purple",
  },
  {
    id: "03",
    title: "Inventory & Billing",
    desc: "Business-focused inventory and billing application designed around reliable data management.",
    stack: ["Java", "Spring Boot", "MySQL"],
    color: "yellow",
  },
  {
    id: "04",
    title: "Favorite Movies",
    desc: "Backend-driven movie application with relational data modelling and REST APIs.",
    stack: ["Node.js", "Sequelize", "MySQL"],
    color: "blue",
  },
  {
    id: "05",
    title: "PhonePe Donation Flow",
    desc: "Payment and webhook workflow for a donation platform, including sandbox integration and transaction handling.",
    stack: ["Next.js", "PhonePe", "Webhooks"],
    color: "pink",
  },
  {
    id: "06",
    title: "AI Portfolio Experiments",
    desc: "Interactive portfolio and AI-oriented interface experiments focused on motion, usability and strong visual systems.",
    stack: ["Next.js", "React", "Framer Motion"],
    color: "white",
  },
];

const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Java",
  "Spring Boot",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Zustand",
  "Framer Motion",
  "Git",
  "GitHub",
  "AWS",
  "Vercel",
];

const products = [
  ["NEXUS ADMIN", "Dashboard starter with charts, tables and RBAC.", "Next.js / Tailwind"],
  ["PROMPT FORGE", "AI-ready interface shell for creative workflows.", "React / OpenAI"],
  ["METRIC LAB", "Analytics dashboard pattern for real-time data.", "Next.js / Recharts"],
  ["AUTH KIT", "Reusable authentication architecture for web apps.", "Node / JWT / MongoDB"],
];

const reviews = [
  {
    type: "yellow",
    quote: "Strong combination of engineering thinking and visual experimentation.",
    author: "Portfolio / Project Feedback",
  },
  {
    type: "pink",
    quote: "The work focuses on interaction instead of simply making another static website.",
    author: "Design Review",
  },
  {
    type: "blue",
    quote: "A developer who enjoys building complete systems from interface to backend.",
    author: "Project Perspective",
  },
];

function SectionTitle({ kicker, title, note }) {
  return (
    <div className="section-heading">
      <div>
        {kicker && <div className="mono kicker">{kicker}</div>}
        <h2>{title}</h2>
      </div>
      {note && <p className="handwriting">{note}</p>}
    </div>
  );
}

function Tape({ className = "" }) {
  return <span className={`tape ${className}`} aria-hidden="true" />;
}

export default function Page() {
  const [running] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const items = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    items.forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="portfolio">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=JetBrains+Mono:wght@400;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap");

        :root {
          --paper: #f0ede6;
          --paper-dark: #ded9ce;
          --ink: #0a0a0a;
          --white: #fff;
          --lime: #a3e635;
          --purple: #b088f9;
          --yellow: #fde047;
          --pink: #f9a8d4;
          --blue: #93c5fd;
          --red: #ef4444;
          --border: 4px;
          --shadow: 8px 8px 0 var(--ink);
          --shadow-sm: 4px 4px 0 var(--ink);
          --sans: "Space Grotesk", system-ui, sans-serif;
          --mono: "JetBrains Mono", monospace;
          --hand: "Caveat", cursive;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: var(--paper);
          color: var(--ink);
          font-family: var(--sans);
          overflow-x: hidden;
        }
        button, a { font: inherit; }
        a { color: inherit; text-decoration: none; }
        button { border: 0; }

        .portfolio {
          min-height: 100vh;
          background-color: var(--paper);
          background-image:
            linear-gradient(rgba(10,10,10,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,10,10,.055) 1px, transparent 1px),
            radial-gradient(#cfc9bc 1px, transparent 1px);
          background-size: 40px 40px, 40px 40px, 20px 20px;
          background-position: -1px -1px, -1px -1px, 0 0;
        }

        .container {
          width: min(1240px, calc(100% - 40px));
          margin: 0 auto;
        }

        .mono {
          font-family: var(--mono);
          text-transform: uppercase;
          letter-spacing: .05em;
        }

        .handwriting {
          font-family: var(--hand);
          font-weight: 600;
          color: #003b66;
        }

        .topbar {
          position: sticky;
          top: 14px;
          z-index: 100;
          padding-top: 18px;
          transition: transform .2s ease;
        }

        .nav {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 12px 18px;
          background: var(--purple);
          border: var(--border) solid var(--ink);
          box-shadow: var(--shadow);
          border-radius: 8px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .brand-mark {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          background: var(--lime);
          border: 3px solid var(--ink);
          box-shadow: 3px 3px 0 var(--ink);
        }

        .navlinks {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .navlinks button {
          background: transparent;
          cursor: pointer;
          font-weight: 800;
          text-transform: uppercase;
          border-bottom: 3px solid transparent;
        }

        .navlinks button:hover { border-bottom-color: var(--ink); }

        .brutal-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 18px;
          background: var(--white);
          color: var(--ink);
          border: var(--border) solid var(--ink);
          box-shadow: 6px 6px 0 var(--ink);
          font-family: var(--mono);
          font-size: .78rem;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
        }

        .brutal-btn:hover {
          transform: translate(3px, 3px);
          box-shadow: 3px 3px 0 var(--ink);
          background: var(--lime);
        }

        .brutal-btn:active {
          transform: translate(6px, 6px);
          box-shadow: none;
        }

        .brutal-btn.purple {
          background: var(--purple);
          color: var(--ink);
        }

        .hero {
          min-height: 850px;
          position: relative;
          display: grid;
          align-items: center;
          overflow: hidden;
          padding: 110px 0 90px;
        }

        .hero-track {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .track {
          fill: none;
          stroke: rgba(10,10,10,.11);
          stroke-width: 4;
          stroke-dasharray: 20 12;
        }

        .trail {
          fill: none;
          stroke: var(--purple);
          stroke-width: 9;
          stroke-dasharray: 4000;
          stroke-dashoffset: 4000;
          filter: drop-shadow(0 0 10px rgba(176,136,249,.8));
        }

        .trail.running { animation: draw 2.5s cubic-bezier(.65,0,.35,1) forwards; }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        .packet {
          opacity: 0;
        }

        .packet.running { opacity: 1; }

        .hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.6fr) minmax(280px, .7fr);
          gap: 50px;
          align-items: center;
        }

        .hero-copy {
          position: relative;
          background: var(--white);
          padding: 48px;
          border: var(--border) solid var(--ink);
          box-shadow: var(--shadow);
          clip-path: polygon(
            0 0,100% 0,100% 96%,98% 100%,95% 97%,92% 100%,89% 97%,
            86% 100%,83% 97%,80% 100%,77% 97%,74% 100%,71% 97%,68% 100%,
            65% 97%,62% 100%,59% 97%,56% 100%,53% 97%,50% 100%,47% 97%,
            44% 100%,41% 97%,38% 100%,35% 97%,32% 100%,29% 97%,26% 100%,
            23% 97%,20% 100%,17% 97%,14% 100%,11% 97%,8% 100%,5% 97%,2% 100%,0 97%
          );
        }

        .tape {
          position: absolute;
          width: 100px;
          height: 28px;
          background: rgba(255,255,255,.65);
          box-shadow: 0 2px 5px rgba(0,0,0,.13);
          backdrop-filter: blur(2px);
          z-index: 5;
        }

        .tape.hero-tape {
          top: -14px;
          left: 50%;
          transform: translateX(-50%) rotate(-3deg);
        }

        .status {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 12px;
          background: var(--lime);
          border: 3px solid var(--ink);
          box-shadow: var(--shadow-sm);
          font-family: var(--mono);
          font-size: .7rem;
          font-weight: 800;
          margin-bottom: 25px;
        }

        .status-dot {
          width: 9px;
          height: 9px;
          background: var(--red);
          border: 2px solid var(--ink);
          border-radius: 50%;
          animation: pulse 1.2s infinite;
        }

        @keyframes pulse {
          50% { transform: scale(.65); opacity: .5; }
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(4.4rem, 10vw, 9.5rem);
          line-height: .78;
          letter-spacing: -.075em;
          font-weight: 900;
          text-transform: uppercase;
          text-shadow: 7px 7px 0 var(--blue);
        }

        .hero h1 .outline {
          display: inline-block;
          color: var(--white);
          text-shadow:
            -4px -4px 0 var(--ink),
            4px -4px 0 var(--ink),
            -4px 4px 0 var(--ink),
            4px 4px 0 var(--ink),
            9px 9px 0 var(--pink);
        }

        .hero-role {
          margin: 28px 0 0;
          max-width: 740px;
          padding: 12px 15px;
          background: var(--yellow);
          border: 3px solid var(--ink);
          box-shadow: var(--shadow-sm);
          font-size: clamp(1.1rem, 2vw, 1.55rem);
          font-weight: 700;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 28px;
        }

        .hero-signoff {
          margin: 25px 0 0;
          font-size: 1.65rem;
          transform: rotate(-2deg);
        }

        .notebook {
          position: relative;
          background: #fff;
          padding: 45px 28px 30px 52px;
          min-height: 470px;
          transform: rotate(2deg);
          border: 3px solid var(--ink);
          box-shadow: 5px 8px 20px rgba(0,0,0,.14);
          background-image:
            linear-gradient(#f1aaaa 1px, transparent 1px),
            linear-gradient(transparent 29px, #e3e3e3 30px);
          background-size: 100% 100%, 100% 30px;
          background-position: 2rem 0, 0 40px;
        }

        .notebook:before {
          content: "";
          position: absolute;
          left: 31px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #f1aaaa;
        }

        .pin {
          position: absolute;
          top: 14px;
          left: 50%;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--red);
          transform: translateX(-50%);
          box-shadow: -2px 4px 5px rgba(0,0,0,.3), inset -2px -2px 4px rgba(0,0,0,.25);
        }

        .notebook h3 {
          margin: 0 0 18px;
          font-family: var(--hand);
          font-size: 2.2rem;
        }

        .check {
          font-family: var(--hand);
          font-size: 1.5rem;
          color: #003b66;
          margin: 8px 0;
        }

        .check:before {
          content: "✓";
          display: inline-block;
          margin-right: 10px;
          font-family: var(--mono);
          font-weight: 900;
        }

        .marquee {
          border-top: var(--border) solid var(--ink);
          border-bottom: var(--border) solid var(--ink);
          background: var(--yellow);
          overflow: hidden;
          white-space: nowrap;
          padding: 14px 0;
        }

        .marquee-inner {
          width: max-content;
          display: flex;
          animation: marquee 20s linear infinite;
        }

        .marquee span {
          font-family: var(--mono);
          font-weight: 800;
          font-size: 1.05rem;
        }

        @keyframes marquee {
          to { transform: translateX(-50%); }
        }

        .section {
          padding: 105px 0;
        }

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 42px;
        }

        .section-heading h2 {
          margin: 7px 0 0;
          font-size: clamp(3rem, 7vw, 6.5rem);
          line-height: .85;
          letter-spacing: -.065em;
          text-transform: uppercase;
          text-shadow: 5px 5px 0 var(--lime);
        }

        .kicker {
          font-size: .8rem;
          font-weight: 800;
        }

        .workshop-note {
          max-width: 430px;
          font-size: 1.7rem;
          line-height: 1;
          transform: rotate(-2deg);
        }

        .bento {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 22px;
        }

        .project {
          grid-column: span 6;
          min-height: 360px;
          position: relative;
          padding: 27px;
          background: var(--white);
          border: var(--border) solid var(--ink);
          box-shadow: var(--shadow);
          transition: transform .2s ease, box-shadow .2s ease;
          cursor: pointer;
          overflow: hidden;
        }

        .project:first-child { grid-column: span 8; }
        .project:nth-child(2) { grid-column: span 4; }
        .project:nth-child(3) { grid-column: span 5; }
        .project:nth-child(4) { grid-column: span 7; }
        .project:nth-child(5) { grid-column: span 7; }
        .project:nth-child(6) { grid-column: span 5; }

        .project:hover {
          transform: translate(5px, 5px) rotate(-.4deg);
          box-shadow: 3px 3px 0 var(--ink);
        }

        .project.lime { background: var(--lime); }
        .project.purple { background: var(--purple); }
        .project.yellow { background: var(--yellow); }
        .project.blue { background: var(--blue); }
        .project.pink { background: var(--pink); }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: start;
        }

        .id {
          padding: 6px 9px;
          background: var(--white);
          border: 2px solid var(--ink);
          box-shadow: 2px 2px 0 var(--ink);
          font-size: .7rem;
          font-weight: 800;
        }

        .project-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          background: var(--white);
          border: 3px solid var(--ink);
          box-shadow: 2px 2px 0 var(--ink);
        }

        .project-body {
          margin-top: 65px;
        }

        .project h3 {
          display: inline-block;
          margin: 0 0 14px;
          padding: 5px 8px;
          background: var(--white);
          border: 3px solid var(--ink);
          font-size: clamp(1.8rem, 3vw, 3rem);
          line-height: .95;
        }

        .project p {
          max-width: 680px;
          margin: 0 0 18px;
          padding: 9px;
          background: rgba(255,255,255,.88);
          border: 3px solid var(--ink);
          font-size: 1rem;
          font-weight: 650;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .tag {
          padding: 5px 8px;
          background: var(--ink);
          color: var(--white);
          font-family: var(--mono);
          font-size: .66rem;
          font-weight: 700;
        }

        .scrapbook {
          position: relative;
          padding: 35px;
          background: var(--white);
          border: 3px solid var(--ink);
          box-shadow: 7px 7px 0 var(--ink);
        }

        .scrapbook:after {
          content: "FIELD NOTES";
          position: absolute;
          right: -17px;
          top: 20px;
          padding: 7px 12px;
          background: var(--pink);
          border: 3px solid var(--ink);
          transform: rotate(5deg);
          font-family: var(--mono);
          font-size: .7rem;
          font-weight: 800;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 25px;
        }

        .about-copy {
          font-size: 1.2rem;
          line-height: 1.7;
        }

        .about-copy strong { font-weight: 900; }

        .metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .metric {
          padding: 20px;
          border: 3px solid var(--ink);
          box-shadow: 4px 4px 0 var(--ink);
          background: var(--yellow);
        }

        .metric:nth-child(2) { background: var(--blue); }
        .metric:nth-child(3) { background: var(--lime); }
        .metric:nth-child(4) { background: var(--purple); }

        .metric strong {
          display: block;
          font-size: 2.5rem;
          line-height: 1;
        }

        .metric span {
          display: block;
          margin-top: 7px;
          font-family: var(--mono);
          font-size: .68rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .experience {
          background: var(--white);
          border: 3px solid var(--ink);
          box-shadow: var(--shadow);
          padding: 32px;
        }

        .job {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 35px;
          padding: 28px 0;
          border-bottom: 2px dashed var(--ink);
        }

        .job:last-child { border-bottom: 0; }

        .job-meta strong {
          display: block;
          font-size: 1.05rem;
        }

        .job-meta span {
          display: block;
          margin-top: 6px;
          font-family: var(--mono);
          font-size: .7rem;
        }

        .job h3 {
          margin: 0 0 8px;
          font-size: 1.7rem;
        }

        .job p { margin: 0; line-height: 1.65; }

        .job ul {
          margin: 15px 0 0;
          padding-left: 20px;
        }

        .job li { margin: 7px 0; }

        .stack-card {
          background: var(--blue);
          border: 3px solid var(--ink);
          box-shadow: var(--shadow);
          padding: 30px;
        }

        .stack-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .stack-pill {
          padding: 10px 13px;
          background: var(--white);
          border: 3px solid var(--ink);
          box-shadow: 3px 3px 0 var(--ink);
          font-family: var(--mono);
          font-size: .72rem;
          font-weight: 800;
          transition: transform .15s ease;
        }

        .stack-pill:hover { transform: rotate(-3deg) translateY(-3px); }

        .reviews {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .review {
          min-height: 270px;
          position: relative;
          padding: 35px 28px 28px;
          border: 3px solid var(--ink);
          box-shadow: 5px 7px 0 rgba(10,10,10,.35);
          transition: transform .2s ease;
        }

        .review:hover { transform: translateY(-8px) rotate(1deg); }
        .review.yellow { background: #fdfd96; transform: rotate(-2deg); }
        .review.pink { background: var(--pink); transform: rotate(2deg) translateY(10px); }
        .review.blue { background: var(--blue); transform: rotate(-1deg); }

        .review p {
          margin: 0;
          font-family: var(--hand);
          color: #003b66;
          font-size: 1.8rem;
          line-height: 1.08;
        }

        .review-author {
          margin-top: 24px !important;
          font-family: var(--mono) !important;
          color: var(--ink) !important;
          font-size: .67rem !important;
          font-weight: 800;
        }

        .stars {
          margin-top: 12px !important;
          color: var(--red) !important;
          font-family: var(--sans) !important;
          font-size: 1rem !important;
        }

        .shelf {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .package {
          position: relative;
          padding: 25px;
          background: var(--white);
          border: 3px solid var(--ink);
          box-shadow: 6px 6px 0 var(--ink);
          min-height: 245px;
          transition: transform .2s ease;
        }

        .package:hover { transform: translate(4px, 4px); }

        .package:nth-child(1) { background: var(--lime); }
        .package:nth-child(2) { background: var(--purple); }
        .package:nth-child(3) { background: var(--yellow); }
        .package:nth-child(4) { background: var(--pink); }

        .package .pkg-id {
          font-family: var(--mono);
          font-size: .65rem;
          font-weight: 800;
        }

        .package h3 {
          margin: 45px 0 10px;
          font-size: 1.45rem;
        }

        .package p {
          margin: 0 0 16px;
          line-height: 1.5;
          font-size: .92rem;
        }

        .footer {
          padding: 70px 0 40px;
        }

        .footer-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 28px;
          background: var(--ink);
          color: var(--white);
          border: 4px solid var(--ink);
          box-shadow: 8px 8px 0 var(--purple);
        }

        .footer-card h2 {
          margin: 0;
          font-size: clamp(2.5rem, 6vw, 6rem);
          line-height: .85;
          letter-spacing: -.06em;
        }

        .footer-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .footer-links a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 12px;
          background: var(--white);
          color: var(--ink);
          border: 3px solid var(--white);
          font-family: var(--mono);
          font-size: .7rem;
          font-weight: 800;
        }

        .copyright {
          padding-top: 25px;
          text-align: center;
          font-family: var(--mono);
          font-size: .65rem;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(10,10,10,.65);
          backdrop-filter: blur(5px);
        }

        .modal {
          width: min(720px, 100%);
          background: var(--white);
          border: 4px solid var(--ink);
          box-shadow: 10px 10px 0 var(--purple);
          padding: 30px;
          position: relative;
        }

        .modal h2 {
          margin: 0 0 15px;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: .85;
        }

        .modal-close {
          position: absolute;
          right: 15px;
          top: 15px;
          width: 42px;
          height: 42px;
          background: var(--red);
          color: var(--white);
          border: 3px solid var(--ink);
          cursor: pointer;
          font-weight: 900;
        }

        .modal p { line-height: 1.7; }
        .modal .tags { margin-top: 20px; }


        /* =========================
           POLISH + AUTOMATIC MOTION
        ========================= */
        .nav { transition: transform .25s ease, box-shadow .25s ease; }
        .nav-scrolled { transform: translateY(-3px); box-shadow: 5px 5px 0 var(--ink); }

        .trail {
          stroke-dashoffset: 4000;
          animation: drawForever 4.8s cubic-bezier(.65,0,.35,1) infinite,
                     trailGlow 1.8s ease-in-out infinite alternate;
        }
        @keyframes drawForever {
          0% { stroke-dashoffset: 4000; opacity: .15; }
          10% { opacity: 1; }
          70% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -4000; opacity: .12; }
        }
        @keyframes trailGlow {
          from { filter: drop-shadow(0 0 6px rgba(176,136,249,.45)); }
          to { filter: drop-shadow(0 0 22px rgba(176,136,249,1)); }
        }
        .packet { opacity: 1; animation: packetPulse 1.5s ease-in-out infinite; }
        @keyframes packetPulse { 0%,100%{opacity:.55} 50%{opacity:1} }

        .hero-arrow {
          display: inline-flex; align-items: center; gap: 10px; margin-top: 24px;
          padding: 8px 11px; background: var(--lime); border: 3px solid var(--ink);
          box-shadow: 4px 4px 0 var(--ink); font-family: var(--mono);
          font-size: .66rem; font-weight: 800; text-transform: uppercase;
          animation: arrowAttention 2.2s ease-in-out infinite;
        }
        .hero-arrow svg { animation: arrowMove 1.1s ease-in-out infinite; }
        @keyframes arrowMove { 0%,100%{transform:translateX(0)} 50%{transform:translateX(8px)} }
        @keyframes arrowAttention { 0%,100%{transform:rotate(-1deg)} 50%{transform:rotate(1deg) translateY(-2px)} }

        .reveal,.reveal-left,.reveal-right,.reveal-scale {
          opacity: 0; will-change: transform,opacity;
          transition: opacity .75s cubic-bezier(.16,1,.3,1), transform .85s cubic-bezier(.16,1,.3,1);
        }
        .reveal { transform: translateY(55px); }
        .reveal-left { transform: translateX(-60px) rotate(-2deg); }
        .reveal-right { transform: translateX(60px) rotate(2deg); }
        .reveal-scale { transform: scale(.9) rotate(-1deg); }
        .reveal.is-visible,.reveal-left.is-visible,.reveal-right.is-visible,.reveal-scale.is-visible { opacity:1; transform:none; }
        .reveal-delay-1{transition-delay:.08s}.reveal-delay-2{transition-delay:.16s}.reveal-delay-3{transition-delay:.24s}.reveal-delay-4{transition-delay:.32s}

        .section { scroll-margin-top: 105px; padding-top: 95px; padding-bottom: 95px; }
        .section-heading { margin-bottom: 44px; }
        .bento { row-gap: 28px; }
        .project-body { margin-top: 70px; }
        .about-grid { gap: 30px; }
        .experience { padding: 34px; }
        .job { padding: 30px 0; }
        .footer { padding-top: 90px; }

        @media (max-width: 1000px) {
          .hero-grid,.about-grid { grid-template-columns: 1fr; }
          .hero { min-height:auto; padding:80px 0 70px; }
          .hero-grid { gap:38px; }
          .notebook { width:min(600px,100%); margin:0 auto; }
          .project,.project:first-child,.project:nth-child(2),.project:nth-child(3),.project:nth-child(4),.project:nth-child(5),.project:nth-child(6) { grid-column: span 6; }
          .reviews { grid-template-columns:1fr; }
          .review { max-width:540px; width:100%; margin:0 auto; }
          .shelf { grid-template-columns:repeat(2,1fr); }
        }

        @media (max-width: 720px) {
          .container { width:calc(100% - 24px); }
          .topbar { top:7px; padding-top:8px; }
          .nav { min-height:60px; padding:9px 11px; border-width:3px; box-shadow:4px 4px 0 var(--ink); border-radius:6px; }
          .brand { gap:8px; font-size:.75rem; }
          .brand-mark { width:31px; height:31px; border-width:2px; box-shadow:2px 2px 0 var(--ink); }
          .navlinks { gap:6px; }
          .navlinks button:not(.nav-talk-mobile) { display:none; }
          .nav-talk-mobile { width:auto; padding:8px 10px; font-size:.58rem; box-shadow:3px 3px 0 var(--ink); }

          .hero { padding:55px 0 55px; }
          .hero-copy { padding:28px 19px 30px; box-shadow:5px 5px 0 var(--ink); }
          .hero h1 { font-size:clamp(3.15rem,16.5vw,5.4rem); line-height:.83; text-shadow:4px 4px 0 var(--blue); }
          .hero h1 .outline { text-shadow:-2px -2px 0 var(--ink),2px -2px 0 var(--ink),-2px 2px 0 var(--ink),2px 2px 0 var(--ink),5px 5px 0 var(--pink); }
          .status { font-size:.58rem; padding:7px 9px; margin-bottom:19px; }
          .hero-role { font-size:.9rem; line-height:1.42; margin-top:19px; padding:9px 10px; }
          .hero-actions { margin-top:18px; }
          .brutal-btn { width:100%; min-height:48px; padding:11px 12px; border-width:3px; box-shadow:4px 4px 0 var(--ink); font-size:.64rem; }
          .hero-arrow { margin-top:18px; border-width:2px; box-shadow:3px 3px 0 var(--ink); font-size:.53rem; padding:7px 9px; }
          .hero-arrow svg { width:17px; height:17px; }
          .hero-signoff { margin-top:19px; font-size:1.23rem; line-height:1.05; }

          .notebook { min-height:345px; padding:40px 19px 24px 43px; transform:rotate(1deg); }
          .notebook:before { left:27px; }
          .notebook h3 { font-size:1.8rem; }
          .check { font-size:1.2rem; margin:6px 0; }

          .section { padding:64px 0; scroll-margin-top:75px; }
          .section-heading { display:block; margin-bottom:28px; }
          .section-heading h2 { font-size:clamp(2.65rem,13.5vw,4rem); line-height:.88; text-shadow:4px 4px 0 var(--lime); }
          .workshop-note { margin-top:16px; font-size:1.28rem; }

          .bento { grid-template-columns:1fr; gap:18px; }
          .project,.project:first-child,.project:nth-child(2),.project:nth-child(3),.project:nth-child(4),.project:nth-child(5),.project:nth-child(6) { grid-column:auto; min-height:310px; padding:19px; box-shadow:5px 5px 0 var(--ink); }
          .project-body { margin-top:48px; }
          .project h3 { font-size:clamp(1.55rem,8vw,2.3rem); margin-bottom:10px; }
          .project p { font-size:.83rem; line-height:1.46; padding:7px; }
          .tag { padding:4px 6px; font-size:.57rem; }

          .scrapbook { padding:23px 19px; box-shadow:5px 5px 0 var(--ink); }
          .about-copy { font-size:1rem; line-height:1.62; }
          .metrics { grid-template-columns:1fr 1fr; gap:12px; margin-top:20px; }
          .metric { padding:14px 11px; box-shadow:3px 3px 0 var(--ink); }
          .metric strong { font-size:1.75rem; }
          .metric span { font-size:.55rem; line-height:1.3; }

          .experience { padding:19px 17px; box-shadow:5px 5px 0 var(--ink); }
          .job { grid-template-columns:1fr; gap:12px; padding:22px 0; }
          .job h3 { font-size:1.32rem; }
          .job p,.job li { font-size:.86rem; line-height:1.55; }

          .reviews { gap:18px; }
          .review { min-height:225px; padding:27px 19px 21px; }
          .review p { font-size:1.43rem; }

          .shelf { grid-template-columns:1fr; gap:17px; }
          .package { min-height:215px; padding:21px; }

          .footer { padding:55px 0 25px; }
          .footer-card { padding:22px 18px; gap:24px; box-shadow:5px 5px 0 var(--purple); }
          .footer-card h2 { font-size:clamp(3.2rem,17vw,5rem); }
          .footer-links { display:grid; grid-template-columns:1fr 1fr; }
          .footer-links a { justify-content:center; padding:9px 6px; font-size:.57rem; }
          .copyright { padding-top:17px; font-size:.52rem; line-height:1.5; }

          .modal-backdrop { padding:12px; }
          .modal { padding:22px 18px; box-shadow:6px 6px 0 var(--purple); }
          .modal h2 { font-size:2.8rem; padding-right:30px; }
          .hero-track { opacity:.55; }
        }

        @media (max-width: 420px) {
          .container { width:calc(100% - 18px); }
          .brand { font-size:.67rem; }
          .brand-mark { width:29px; height:29px; }
          .hero { padding-top:45px; }
          .hero-copy { padding:23px 15px 25px; }
          .hero h1 { font-size:3.05rem; }
          .hero-role { font-size:.82rem; }
          .hero-arrow { max-width:100%; }
          .notebook { min-height:325px; padding-left:38px; }
          .notebook:before { left:24px; }
          .notebook h3 { font-size:1.55rem; }
          .check { font-size:1.08rem; }
          .section { padding:53px 0; }
          .section-heading h2 { font-size:2.6rem; }
          .project,.project:first-child,.project:nth-child(2),.project:nth-child(3),.project:nth-child(4),.project:nth-child(5),.project:nth-child(6) { min-height:295px; padding:16px; }
          .metrics { grid-template-columns:1fr; }
          .footer-links { grid-template-columns:1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          *,*::before,*::after { scroll-behavior:auto !important; animation-duration:.01ms !important; transition-duration:.01ms !important; }
          .reveal,.reveal-left,.reveal-right,.reveal-scale { opacity:1 !important; transform:none !important; }
        }
      `}</style>

      <div className="topbar">
        <div className="container">
          <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
            <a className="brand" href="#">
              <span className="brand-mark"><Code2 size={20} /></span>
              Shavandeb.dev
            </a>

            <div className="navlinks">
              <button onClick={() => scrollTo("work")}>Work</button>
              <button onClick={() => scrollTo("about")}>About</button>
              <button onClick={() => scrollTo("experience")}>Experience</button>
              <button className="brutal-btn nav-talk-mobile" onClick={() => scrollTo("contact")}>
                Let's Talk
              </button>
            </div>
          </nav>
        </div>
      </div>

      

      <section className="hero">
        <svg className="hero-track" viewBox="0 0 1440 850" preserveAspectRatio="xMidYMid slice">
          <path className="track" d="M-100 650 L180 650 L180 220 L720 220 L720 520 L1110 520 L1110 120 L1540 120" />
          <path
            className="trail"
            d="M-100 650 L180 650 L180 220 L720 220 L720 520 L1110 520 L1110 120 L1540 120"
          />
          <g className="packet">
            <animateMotion
              dur="4.8s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.65 0 0.35 1"
              path="M-100 650 L180 650 L180 220 L720 220 L720 520 L1110 520 L1110 120 L1540 120"
            />
            <polygon points="-25,-15 35,0 -25,15 -10,0" fill="var(--lime)" stroke="var(--ink)" strokeWidth="3" />
            <circle cx="-10" cy="0" r="4" fill="var(--pink)" />
          </g>
        </svg>

        <div className="container hero-grid">
          <div className="hero-copy">
            <Tape className="hero-tape" />
            <div className="status">
              <span className="status-dot" />
              SYSTEM ONLINE // READY TO BUILD
            </div>

            <h1>
              CODE<br />
              <span className="outline">DESIGNED.</span><br />
              SHIPPED.
            </h1>

            <p className="hero-role">
              B.Tech Computer Science & Business Systems graduate building interactive,
              scalable web applications across frontend, backend and product experiences.
            </p>

            <div className="hero-actions">
              <button className="brutal-btn purple" onClick={() => scrollTo("work")}>
                <PackageSearch size={18} />
                Browse My Work
              </button>
            </div>

           

            <p className="handwriting hero-signoff">
              I like turning complicated ideas into interfaces people actually enjoy using. →
            </p>
          </div>

          <aside className="notebook">
            <span className="pin" />
            <h3>Tech Stack Checklist:</h3>
            {techStack.slice(0, 9).map((tech) => (
              <div className="check" key={tech}>{tech}</div>
            ))}
          </aside>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-inner">
          <span>
            {" // FULL STACK // REACT ARCHITECTURE // NEXT.JS // NODE.JS // JAVA // DATABASES // UI/UX // PERFORMANCE // "}
            {" // FULL STACK // REACT ARCHITECTURE // NEXT.JS // NODE.JS // JAVA // DATABASES // UI/UX // PERFORMANCE // "}
          </span>
        </div>
      </div>

      <section id="work" className="section">
        <div className="container">
          <div className="reveal section-heading-wrap"><SectionTitle
            kicker="01 // DEPLOYMENT MANIFEST"
            title="The Workshop"
            note="A scrapbook of systems, interfaces and experiments I've built."
          /></div>

          <div className="bento">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`project ${project.color} reveal reveal-delay-${(Number(project.id) % 4) + 1}`}
                onClick={() => setActiveProject(project)}
              >
                <div className="project-top">
                  <span className="id mono">SYS-{project.id}</span>
                  <span className="project-icon"><ArrowUpRight size={20} /></span>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tags">
                    {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="reveal section-heading-wrap"><SectionTitle
            kicker="02 // FIELD NOTES"
            title="About Me"
            note="Engineering brain. Product curiosity. Slight obsession with good UI."
          /></div>

          <div className="about-grid reveal-scale">
            <div className="scrapbook">
              <div className="about-copy">
                <p>
                  I’m <strong>Shavandeb Kaiti</strong>, a Computer Science & Business Systems
                  graduate focused on building practical digital products.
                </p>
                <p>
                  My work sits between <strong>frontend engineering, backend systems,
                  databases and interaction design</strong>. I enjoy taking an idea from
                  a rough concept to a working application with authentication, APIs,
                  data models and a polished interface.
                </p>
                <p>
                  I’m especially interested in modern web architecture, AI-enabled products,
                  dashboards, developer tools and business software.
                </p>
              </div>
            </div>

            <div className="metrics">
              <div className="metric"><strong>B.Tech</strong><span>CS & Business Systems</span></div>
              <div className="metric"><strong>2025</strong><span>Graduation Year</span></div>
              <div className="metric"><strong>MERN</strong><span>Full-stack foundation</span></div>
              <div className="metric"><strong>AI</strong><span>Current direction</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <div className="reveal section-heading-wrap"><SectionTitle
            kicker="03 // BUILD LOG"
            title="Experience"
            note="What I know comes from building, shipping, debugging and iterating."
          /></div>

          <div className="experience reveal-right">
            <div className="job">
              <div className="job-meta">
                <strong>Outlier AI</strong>
                <span>REMOTE // 3 MONTHS</span>
              </div>
              <div>
                <h3>AI / ML Trainer</h3>
                <p>Worked remotely on AI and machine-learning training workflows, focusing on technical reasoning and evaluation.</p>
              </div>
            </div>

            <div className="job">
              <div className="job-meta">
                <strong>PROJECT WORK</strong>
                <span>2024 — PRESENT</span>
              </div>
              <div>
                <h3>Full-Stack Developer</h3>
                <p>Built academic systems, inventory applications, dashboards, payment workflows and interactive portfolio experiments.</p>
                <ul>
                  <li>Designed React and Next.js interfaces with responsive layouts and motion.</li>
                  <li>Built Node.js / Express APIs, JWT authentication and MongoDB / MySQL data flows.</li>
                  <li>Worked with deployment platforms including Vercel, Render, Railway, Supabase and AWS-oriented workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      <section className="section">
        <div className="container">
          <div className="reveal section-heading-wrap"><SectionTitle
            kicker="05 // NOTES FROM THE BOARD"
            title="Feedback"
            note="Pinned thoughts from the people reviewing the work."
          /></div>

          <div className="reviews">
            {reviews.map((review) => (
              <article className={`review ${review.type} reveal reveal-delay-${(reviews.indexOf(review) % 3) + 1}`} key={review.author}>
                <Tape className="hero-tape" />
                <p>“{review.quote}”</p>
                <p className="review-author">{review.author}</p>
                <p className="stars">★★★★★</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal section-heading-wrap"><SectionTitle
            kicker="06 // THE SHELF"
            title="Reusable Ideas"
            note="Small product concepts and reusable modules that can become real software."
          /></div>

          <div className="shelf">
            {products.map(([name, desc, stack], index) => (
              <article className="package" key={name}>
                <span className="pkg-id">PKG-{String(index + 1).padStart(2, "0")}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
                <span className="tag">{stack}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-card">
            <div>
              <div className="mono" style={{ marginBottom: 14 }}>07 // OPEN CHANNEL</div>
              <h2>LET'S<br />BUILD.</h2>
            </div>

            <div className="footer-links">
              <a href="mailto:your-email@example.com"><Mail size={16} /> Email</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub size={16} /> GitHub</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin size={16} /> LinkedIn</a>
              <a href="#" onClick={(e) => e.preventDefault()}><Download size={16} /> CV</a>
            </div>
          </div>

          <div className="copyright">
            © {new Date().getFullYear()} SHAVANDEB KAITI // BUILT WITH NEXT.JS + REACT
          </div>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>×</button>
            <div className="mono">SYSTEM {activeProject.id}</div>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.desc}</p>
            <div className="tags">
              {activeProject.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
            <div style={{ marginTop: 25 }}>
              <button className="brutal-btn" onClick={() => setActiveProject(null)}>
                <Terminal size={17} /> Close Manifest
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
