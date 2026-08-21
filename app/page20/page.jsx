"use client";

import React from "react";

const techStack = [
  "TypeScript",
  "JavaScript (ES6+)",
  "React.js",
  "Next.js",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Node.js & Express",
  "PostgreSQL",
  "Git & CI/CD",
];

const socials = [
  {
    name: "🐱 GitHub Repository",
    href: "https://github.com",
    color: "github",
  },
  {
    name: "💼 LinkedIn Profile",
    href: "https://linkedin.com",
    color: "linkedin",
  },
  {
    name: "📸 Instagram Feed",
    href: "https://instagram.com",
    color: "instagram",
  },
];

const reviews = [
  {
    quote:
      '"His B.Tech capstone OS project blew the engineering review board away. Absolute precision and architectural mastery."',
    author: "— Prof. Davis, University Panel",
  },
  {
    quote:
      '"Delivered clean, lightning-fast frontend code ahead of schedule. Highly recommended for complex apps."',
    author: "— Sarah Jenkins, Client",
  },
];

const projects = [
  {
    id: "01",
    category: "CAPSTONE",
    window: "PROJECT_01 // CAPSTONE",
    windowColor: "red",
    title: "Taskmaster Operating System",
    status: "LIVE",
    description:
      "Enterprise-grade browser OS environment mimicking native windowing. Built as the final B.Tech capstone with real-time state sync and custom memory management.",
    tech: ["React", "TypeScript", "Zustand"],
    large: true,
    demo: "DEMO ↗",
    code: "GITHUB",
  },
  {
    id: "02",
    category: "E-COMMERCE",
    window: "PROJECT_02 // E-COMMERCE",
    windowColor: "cyan",
    title: "Aura Storefront",
    status: "LIVE",
    description:
      "High-performance e-commerce web application engineered with custom cart state management, secure stripe checkout integration, and instant search.",
    tech: ["Next.js", "Stripe API", "Tailwind"],
    large: true,
    demo: "DEMO ↗",
    code: "GITHUB",
  },
  {
    id: "03",
    category: "DATA",
    window: "PROJECT_03 // DATA",
    windowColor: "black",
    title: "Metrics Pro Dashboard",
    description:
      "Complex analytics dashboard handling large SQL datasets with interactive charting algorithms and zero lag.",
    tech: ["Chart.js", "PostgreSQL"],
    demo: "DEMO ↗",
    code: "CODE",
  },
  {
    id: "04",
    category: "AI TOOL",
    window: "PROJECT_04 // AI TOOL",
    windowColor: "black",
    title: "Prompt Forge AI",
    description:
      "Low-latency interface connecting users directly to large language model APIs with prompt token counters.",
    tech: ["OpenAI API", "React"],
    demo: "DEMO ↗",
    code: "CODE",
  },
  {
    id: "05",
    category: "SOCKETS",
    window: "PROJECT_05 // SOCKETS",
    windowColor: "black",
    title: "Nexus Comm Chat",
    description:
      "Event-based live socket chat platform engineered for instantaneous zero-delay bi-directional messaging.",
    tech: ["Socket.io", "Node.js"],
    demo: "DEMO ↗",
    code: "CODE",
  },
  {
    id: "06",
    category: "CRYPTO FINTECH",
    window: "PROJECT_06 // CRYPTO FINTECH",
    title: "Coin Pulse Tracker",
    status: "DEPLOYED & ACTIVE",
    description:
      "Real-time cryptocurrency tracking web application consuming live REST market feeds, featuring interactive historical candlestick charts and customizable asset watchlists.",
    tech: ["JavaScript", "REST API", "Chart.js"],
    fullWidth: true,
    demo: "LIVE DEMO ↗",
    code: "GITHUB SOURCE",
  },
];

function WindowHeader({
  title,
  color = "black",
  mobileOnly = false,
}) {
  return (
    <div
      className={`window-header window-${color} ${
        mobileOnly ? "mobile-only-header" : ""
      }`}
    >
      <span>{title}</span>

      <div className="window-controls">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function TechTags({ items, large = false }) {
  return (
    <div
      className={`tech-tags ${
        large ? "tech-tags-large" : ""
      }`}
    >
      {items.map((item) => (
        <span className="tech-tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function RetroButton({
  children,
  href = "#",
  dark = false,
  yellow = false,
}) {
  return (
    <a
      href={href}
      className={`retro-button ${
        dark ? "button-dark" : ""
      } ${yellow ? "button-yellow" : ""}`}
    >
      {children}
    </a>
  );
}

function ProjectCard({ project }) {
  if (project.fullWidth) {
    return (
      <article className="retro-box project-full">
        <WindowHeader
          title={project.window}
          color="yellow"
          mobileOnly
        />

        <div className="project-full-content">
          <div>
            <div className="desktop-project-bar">
              <span>{project.window}</span>
              <span>
                STATUS: {project.status}
              </span>
            </div>

            <h3 className="project-full-title">
              {project.title}
            </h3>

            <p className="project-full-description">
              {project.description}
            </p>
          </div>

          <div className="project-full-bottom">
            <TechTags
              items={project.tech}
              large
            />

            <div className="project-actions">
              <RetroButton dark>
                {project.demo}
              </RetroButton>

              <RetroButton yellow>
                {project.code}
              </RetroButton>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`retro-box project-card ${
        project.large
          ? "project-large"
          : "project-small"
      }`}
    >
      <WindowHeader
        title={project.window}
        color={project.windowColor}
      />

      <div className="project-card-content">
        <div>
          <div className="project-title-row">
            <h3
              className={
                project.large
                  ? "project-title-large"
                  : "project-title"
              }
            >
              {project.title}
            </h3>

            {project.status && (
              <span className="live-badge">
                {project.status}
              </span>
            )}
          </div>

          <p
            className={
              project.large
                ? "project-description-large"
                : "project-description"
            }
          >
            {project.description}
          </p>
        </div>

        <div>
          <TechTags items={project.tech} />

          <div className="project-actions">
            <RetroButton dark>
              {project.demo}
            </RetroButton>

            <RetroButton>
              {project.code}
            </RetroButton>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <div className="retro-page">
      <div className="page-content">
        {/* =====================================
            TOP SYSTEM BAR
        ====================================== */}

        <header className="system-bar">
          <div className="system-left">
            <span className="status-dot" />

            <span className="mono system-version">
              SYS_OS v2.06 // PORTFOLIO
            </span>
          </div>

          <div className="mono system-status">
            STATUS: AVAILABLE FOR HIRE ✦ B.TECH
            GRADUATE
          </div>
        </header>

        {/* =====================================
            MARQUEE
        ====================================== */}

        <div className="retro-box marquee-box">
          <div className="marquee-container">
            <div className="marquee-content">
              ✦ ALEXANDER WRIGHT ✦ FULL STACK ARCHITECT
              ✦ B.TECH CS GRADUATE ✦ 6 LIVE PROJECTS
              DEPLOYED ✦ REACT // NODE // TYPESCRIPT ✦
              OPEN FOR OPPORTUNITIES ✦ &nbsp;&nbsp;&nbsp;&nbsp;
              ✦ ALEXANDER WRIGHT ✦ FULL STACK ARCHITECT
              ✦ B.TECH CS GRADUATE ✦ 6 LIVE PROJECTS
              DEPLOYED ✦ REACT // NODE // TYPESCRIPT ✦
              OPEN FOR OPPORTUNITIES ✦
            </div>
          </div>
        </div>

        {/* =====================================
            MAIN BENTO
        ====================================== */}

        <main className="bento-grid">
          {/* =================================
              HERO
          ================================= */}

          <section className="retro-box hero-card">
            <WindowHeader title="PROFILE_OVERVIEW.exe" />

            <div className="hero-content">
              <div>
                <div className="graduate-badge">
                  ✦ B.TECH GRADUATE
                </div>

                <h1 className="hero-title">
                  Alexander
                  <br />

                  <span className="hero-highlight">
                    Wright.
                  </span>
                </h1>

                <p className="hero-description">
                  I engineer high-performance web
                  applications and scalable systems.
                  Bridging the gap between raw backend
                  logic and retro-modern visual
                  interfaces.
                </p>
              </div>

              <div className="hero-actions">
                <RetroButton
                  href="mailto:hello@example.com"
                  dark
                >
                  <span>📧</span>
                  EMAIL ME
                </RetroButton>

                <RetroButton href="#projects" yellow>
                  <span>⚡</span>
                  VIEW 6 PROJECTS
                </RetroButton>
              </div>
            </div>
          </section>

          {/* =================================
              SOCIALS
          ================================= */}

          <section className="retro-box social-card">
            <WindowHeader
              title="NETWORK_LINKS.sys"
              color="purple"
            />

            <div className="social-content">
              <div>
                <h3 className="terminal-label">
                  Direct Terminal Access
                </h3>

                <h2 className="social-heading">
                  Connect & Collaborate
                </h2>
              </div>

              <div className="social-list">
                {socials.map((social) => (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    key={social.name}
                    className={`social-item social-${social.color}`}
                  >
                    <span>{social.name}</span>

                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* =================================
              TECH STACK
          ================================= */}

          <section className="retro-box tech-card">
            <WindowHeader
              title="TECH_STACK.dat"
              color="blue"
            />

            <div className="tech-content">
              <h3 className="section-small-title">
                Core Capabilities
              </h3>

              <div className="core-tags">
                {techStack.map((tech) => (
                  <span
                    className="core-tag"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* =================================
              REVIEWS
          ================================= */}

          <section
            className="retro-box reviews-card"
            id="reviews"
          >
            <WindowHeader
              title="CLIENT_FEEDBACK.log"
              color="emerald"
            />

            <div className="reviews-content">
              <h3 className="section-small-title">
                Verified Client & Panel Reviews
              </h3>

              <div className="review-grid">
                {reviews.map((review) => (
                  <div
                    className="review-item"
                    key={review.author}
                  >
                    <div className="stars">
                      ★★★★★
                    </div>

                    <p>{review.quote}</p>

                    <span className="review-author">
                      {review.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =================================
              PROJECT HEADER
          ================================= */}

          <div
            className="projects-heading"
            id="projects"
          >
            <div className="projects-heading-inner">
              <h2>
                Featured Projects [6/6 Live]
              </h2>

              <div className="heading-line" />
            </div>
          </div>

          {/* =================================
              PROJECTS
          ================================= */}

          {projects.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
            />
          ))}
        </main>

        {/* =====================================
            FOOTER
        ====================================== */}

        <footer className="footer">
          <div>
            © 2026 ALEXANDER WRIGHT ✦ ALL RIGHTS
            RESERVED.
          </div>

          <div className="footer-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>

            <a
              href="mailto:hello@example.com"
              className="contact-link"
            >
              CONTACT
            </a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap");

        :global(*) {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
        }

        :global(a) {
          color: inherit;
          text-decoration: none;
        }

        .retro-page {
          --bg-canvas: #f4f1ea;
          --card-bg: #ffffff;
          --border-retro: #111111;

          --accent-green: #00ff66;
          --accent-yellow: #ffe600;
          --accent-pink: #ff007f;
          --accent-cyan: #00f0ff;

          min-height: 100vh;

          background:
            var(--bg-canvas);

          color:
            var(--border-retro);

          font-family:
            "Inter",
            sans-serif;

          background-image:
            radial-gradient(
              #d1ccc0 1px,
              transparent 1px
            );

          background-size: 24px 24px;

          padding: 1rem;
        }

        .page-content {
          width: 100%;

          max-width: 1280px;

          margin: 0 auto;
        }

        .mono {
          font-family:
            "Space Mono",
            monospace;
        }

        /* =====================================
           RETRO BOX
        ====================================== */

        .retro-box {
          background:
            var(--card-bg);

          border:
            3px solid
            var(--border-retro);

          box-shadow:
            6px 6px 0
            #111111;

          transition:
            transform 0.15s ease,
            box-shadow 0.15s ease;
        }

        .retro-box:hover {
          transform:
            translate(-2px, -2px);

          box-shadow:
            8px 8px 0
            #111111;
        }

        /* =====================================
           SYSTEM BAR
        ====================================== */

        .system-bar {
          width: 100%;

          margin-bottom: 1.5rem;

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          gap: 1rem;

          background:
            #000;

          color:
            #fff;

          padding: 0.75rem;

          border:
            4px solid #000;

          box-shadow:
            4px 4px 0
            var(--accent-cyan);
        }

        .system-left {
          display: flex;

          align-items: center;

          gap: 0.75rem;
        }

        .status-dot {
          width: 12px;

          height: 12px;

          border-radius: 50%;

          background:
            #4ade80;

          animation:
            pulse 1.5s
            infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.35;
          }
        }

        .system-version {
          color:
            #22d3ee;

          font-size: 0.75rem;

          letter-spacing:
            0.1em;
        }

        .system-status {
          color:
            #fde047;

          font-size: 0.75rem;
        }

        /* =====================================
           WINDOW HEADER
        ====================================== */

        .window-header {
          background:
            #111;

          color:
            #fff;

          font-family:
            "Space Mono",
            monospace;

          padding:
            6px 10px;

          font-size: 12px;

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          border-bottom:
            3px solid #111;
        }

        .window-purple {
          background:
            #581c87;
        }

        .window-blue {
          background:
            #1e3a8a;
        }

        .window-emerald {
          background:
            #064e3b;
        }

        .window-red {
          background:
            #7f1d1d;
        }

        .window-cyan {
          background:
            #164e63;
        }

        .window-yellow {
          background:
            #eab308;

          color: #111;
        }

        .window-controls {
          display: flex;

          align-items: center;
        }

        .window-controls span {
          display: inline-block;

          width: 10px;

          height: 10px;

          background:
            #fff;

          border:
            1px solid #000;

          margin-left: 4px;
        }

        /* =====================================
           MARQUEE
        ====================================== */

        .marquee-box {
          margin-bottom: 2rem;

          overflow: hidden;
        }

        .marquee-container {
          overflow: hidden;

          white-space: nowrap;

          background:
            var(--accent-yellow);

          border-top:
            3px solid #111;

          border-bottom:
            3px solid #111;

          padding:
            8px 0;

          font-weight: 900;

          text-transform:
            uppercase;

          font-size: 14px;
        }

        .marquee-content {
          display: inline-block;

          animation:
            marquee
            20s linear infinite;

          width: max-content;
        }

        @keyframes marquee {
          0% {
            transform:
              translateX(0);
          }

          100% {
            transform:
              translateX(-50%);
          }
        }

        /* =====================================
           BENTO GRID
        ====================================== */

        .bento-grid {
          display: grid;

          grid-template-columns:
            repeat(12, minmax(0, 1fr));

          gap: 1.5rem;

          margin-bottom: 3rem;
        }

        /* =====================================
           HERO
        ====================================== */

        .hero-card {
          grid-column:
            span 7;

          display: flex;

          flex-direction: column;

          overflow: hidden;
        }

        .hero-content {
          padding:
            1.5rem;

          display: flex;

          flex-direction: column;

          justify-content:
            space-between;

          flex-grow: 1;

          background:
            #fff;
        }

        .graduate-badge {
          display: inline-block;

          background:
            var(--accent-green);

          color: #000;

          font-family:
            "Space Mono",
            monospace;

          font-size: 0.75rem;

          font-weight: 700;

          padding:
            0.25rem 0.5rem;

          margin-bottom: 1rem;

          border:
            1px solid #000;
        }

        .hero-title {
          font-size:
            clamp(
              2.5rem,
              5vw,
              4.5rem
            );

          line-height: 1;

          font-weight: 900;

          text-transform:
            uppercase;

          letter-spacing:
            -0.04em;

          margin-bottom: 1rem;
        }

        .hero-highlight {
          background:
            var(--accent-yellow);

          padding:
            0 0.5rem;
        }

        .hero-description {
          font-size:
            clamp(
              1rem,
              1.5vw,
              1.15rem
            );

          color:
            #1f2937;

          line-height: 1.7;

          font-weight: 500;

          max-width: 800px;
        }

        .hero-actions {
          display: flex;

          flex-wrap: wrap;

          gap: 0.75rem;

          padding-top: 1rem;

          margin-top: 2rem;

          border-top:
            2px solid #000;
        }

        /* =====================================
           BUTTONS
        ====================================== */

        .retro-button {
          border:
            2px solid
            var(--border-retro);

          box-shadow:
            3px 3px 0
            #111111;

          transition:
            all 0.1s ease;

          display: inline-flex;

          align-items: center;

          gap: 0.5rem;

          padding:
            0.4rem 1rem;

          font-family:
            "Space Mono",
            monospace;

          font-size: 0.75rem;

          font-weight: 700;

          background:
            #fff;

          color:
            #111;
        }

        .retro-button:hover {
          transform:
            translate(-1px, -1px);

          box-shadow:
            4px 4px 0
            #111111;
        }

        .retro-button:active {
          transform:
            translate(2px, 2px);

          box-shadow:
            1px 1px 0
            #111111;
        }

        .button-dark {
          background:
            #000;

          color:
            #fff;
        }

        .button-yellow {
          background:
            var(--accent-yellow);

          color:
            #111;
        }

        /* =====================================
           SOCIAL CARD
        ====================================== */

        .social-card {
          grid-column:
            span 5;

          display: flex;

          flex-direction: column;

          overflow: hidden;
        }

        .social-content {
          padding: 1.5rem;

          display: flex;

          flex-direction: column;

          justify-content:
            space-between;

          flex-grow: 1;

          background: #fff;
        }

        .terminal-label {
          font-family:
            "Space Mono",
            monospace;

          font-size: 0.8rem;

          text-transform:
            uppercase;

          color:
            #6b7280;

          margin-bottom: 0.5rem;
        }

        .social-heading {
          font-size: 1.5rem;

          font-weight: 900;

          margin-bottom: 1.5rem;
        }

        .social-list {
          display: flex;

          flex-direction: column;

          gap: 0.75rem;

          font-family:
            "Space Mono",
            monospace;

          font-size: 0.8rem;
        }

        .social-item {
          display: flex;

          justify-content:
            space-between;

          align-items: center;

          padding: 0.75rem;

          border:
            2px solid #000;

          background:
            #f9fafb;

          transition:
            all 0.2s ease;
        }

        .social-item:hover {
          background:
            #000;

          color:
            #fff;
        }

        .social-linkedin:hover {
          background:
            var(--accent-cyan);

          color:
            #000;
        }

        .social-instagram:hover {
          background:
            var(--accent-pink);

          color:
            #fff;
        }

        /* =====================================
           TECH STACK
        ====================================== */

        .tech-card {
          grid-column:
            span 4;

          display: flex;

          flex-direction: column;

          overflow: hidden;
        }

        .tech-content {
          padding: 1.5rem;

          flex-grow: 1;

          background: #fff;
        }

        .section-small-title {
          font-size: 1.1rem;

          font-weight: 900;

          text-transform:
            uppercase;

          margin-bottom: 1rem;
        }

        .core-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 0.5rem;

          font-family:
            "Space Mono",
            monospace;

          font-size: 0.7rem;
        }

        .core-tag {
          background:
            #f3f4f6;

          border:
            2px solid #000;

          padding:
            0.35rem 0.75rem;

          font-weight: 700;
        }

        /* =====================================
           REVIEWS
        ====================================== */

        .reviews-card {
          grid-column:
            span 8;

          display: flex;

          flex-direction: column;

          overflow: hidden;
        }

        .reviews-content {
          padding: 1.5rem;

          display: flex;

          flex-direction: column;

          justify-content:
            space-between;

          flex-grow: 1;

          background: #fff;
        }

        .review-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 1rem;
        }

        .review-item {
          padding: 1rem;

          border:
            2px solid #000;

          background:
            var(--bg-canvas);
        }

        .stars {
          color:
            #eab308;

          font-weight: 700;

          margin-bottom: 0.25rem;
        }

        .review-item p {
          font-size: 0.75rem;

          font-style: italic;

          line-height: 1.6;

          margin-bottom: 0.5rem;
        }

        .review-author {
          font-family:
            "Space Mono",
            monospace;

          font-size: 0.625rem;

          font-weight: 700;
        }

        /* =====================================
           PROJECT HEADER
        ====================================== */

        .projects-heading {
          grid-column:
            span 12;

          padding-top: 0.5rem;
        }

        .projects-heading-inner {
          display: flex;

          align-items: center;

          gap: 1rem;
        }

        .projects-heading h2 {
          font-size: 1.8rem;

          font-weight: 900;

          text-transform:
            uppercase;

          letter-spacing:
            -0.03em;

          white-space: nowrap;
        }

        .heading-line {
          flex-grow: 1;

          height: 4px;

          background:
            #000;
        }

        /* =====================================
           PROJECT CARDS
        ====================================== */

        .project-card {
          display: flex;

          flex-direction: column;

          overflow: hidden;
        }

        .project-large {
          grid-column:
            span 6;
        }

        .project-small {
          grid-column:
            span 4;
        }

        .project-card-content {
          padding: 1.5rem;

          display: flex;

          flex-direction: column;

          justify-content:
            space-between;

          flex-grow: 1;

          background: #fff;
        }

        .project-title-row {
          display: flex;

          justify-content:
            space-between;

          align-items: flex-start;

          gap: 1rem;

          margin-bottom: 0.75rem;
        }

        .project-title-large {
          font-size: 1.5rem;

          font-weight: 900;

          line-height: 1.15;
        }

        .project-title {
          font-size: 1.25rem;

          font-weight: 900;

          line-height: 1.2;

          margin-bottom: 0.5rem;
        }

        .live-badge {
          flex-shrink: 0;

          background:
            var(--accent-green);

          border:
            1px solid #000;

          font-family:
            "Space Mono",
            monospace;

          font-size: 0.65rem;

          font-weight: 700;

          padding:
            0.15rem 0.5rem;
        }

        .project-description-large {
          font-size: 0.9rem;

          color:
            #374151;

          line-height: 1.6;

          margin-bottom: 1rem;
        }

        .project-description {
          font-size: 0.75rem;

          color:
            #374151;

          line-height: 1.6;

          margin-bottom: 1rem;
        }

        .tech-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 0.5rem;

          font-family:
            "Space Mono",
            monospace;

          font-size: 0.65rem;

          margin-bottom: 1rem;
        }

        .tech-tag {
          background:
            #f3f4f6;

          border:
            1px solid #000;

          padding:
            0.15rem 0.5rem;
        }

        .tech-tags-large {
          font-size: 0.7rem;
        }

        .project-actions {
          display: flex;

          flex-wrap: wrap;

          gap: 0.75rem;
        }

        /* =====================================
           FULL WIDTH PROJECT
        ====================================== */

        .project-full {
          grid-column:
            span 12;

          display: flex;

          flex-direction: column;

          overflow: hidden;

          background: #fff;
        }

        .project-full-content {
          padding:
            1.5rem 1.5rem 2rem;

          display: flex;

          flex-direction: column;

          justify-content:
            space-between;

          flex-grow: 1;
        }

        .desktop-project-bar {
          display: flex;

          justify-content:
            space-between;

          align-items: center;

          background:
            #000;

          color:
            #fff;

          padding:
            0.3rem 0.75rem;

          margin-bottom: 1rem;

          font-family:
            "Space Mono",
            monospace;

          font-size: 0.65rem;
        }

        .project-full-title {
          font-size:
            clamp(
              1.5rem,
              3vw,
              2rem
            );

          font-weight: 900;

          margin-bottom: 0.75rem;
        }

        .project-full-description {
          font-size: 0.9rem;

          color:
            #374151;

          line-height: 1.7;

          max-width: 900px;

          margin-bottom: 1rem;
        }

        .project-full-bottom {
          display: flex;

          justify-content:
            space-between;

          align-items: center;

          gap: 1rem;

          padding-top: 1rem;

          border-top:
            2px solid #000;
        }

        .project-full-bottom .tech-tags {
          margin-bottom: 0;
        }

        .mobile-only-header {
          display: none;
        }

        /* =====================================
           FOOTER
        ====================================== */

        .footer {
          width: 100%;

          border-top:
            4px solid #000;

          padding:
            1.5rem 0 3rem;

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          gap: 1rem;

          font-family:
            "Space Mono",
            monospace;

          font-size: 0.75rem;
        }

        .footer-links {
          display: flex;

          gap: 1.5rem;
        }

        .footer-links a:hover {
          text-decoration:
            underline;
        }

        .contact-link {
          color:
            #db2777;
        }

        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 900px) {
          .retro-page {
            padding: 0.75rem;
          }

          .system-bar {
            flex-direction: column;

            align-items: flex-start;
          }

          .bento-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .hero-card,
          .social-card,
          .tech-card,
          .reviews-card,
          .projects-heading,
          .project-full {
            grid-column:
              span 2;
          }

          .project-large {
            grid-column:
              span 2;
          }

          .project-small {
            grid-column:
              span 1;
          }

          .mobile-only-header {
            display: flex;
          }

          .desktop-project-bar {
            display: none;
          }

          .project-full-bottom {
            flex-direction: column;

            align-items: flex-start;
          }

          .footer {
            flex-direction: column;

            align-items: flex-start;
          }
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 600px) {
          .retro-page {
            padding: 0.5rem;
          }

          .bento-grid {
            grid-template-columns: 1fr;

            gap: 1rem;
          }

          .hero-card,
          .social-card,
          .tech-card,
          .reviews-card,
          .projects-heading,
          .project-large,
          .project-small,
          .project-full {
            grid-column:
              span 1;
          }

          .hero-content,
          .social-content,
          .tech-content,
          .reviews-content,
          .project-card-content,
          .project-full-content {
            padding: 1rem;
          }

          .hero-title {
            font-size: 2.8rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-actions {
            flex-direction: column;
          }

          .retro-button {
            width: 100%;

            justify-content: center;
          }

          .review-grid {
            grid-template-columns: 1fr;
          }

          .projects-heading-inner {
            align-items: flex-start;
          }

          .projects-heading h2 {
            font-size: 1.35rem;

            white-space: normal;
          }

          .heading-line {
            display: none;
          }

          .project-title-large {
            font-size: 1.3rem;
          }

          .project-full-title {
            font-size: 1.5rem;
          }

          .project-full-description {
            font-size: 0.8rem;
          }

          .project-full-bottom {
            align-items: stretch;
          }

          .project-full-bottom .project-actions {
            width: 100%;

            flex-direction: column;
          }

          .footer {
            font-size: 0.65rem;
          }

          .footer-links {
            flex-wrap: wrap;

            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}