"use client";

import React from "react";

export default function Page() {
  const techStack = [
    "TypeScript",
    "Python",
    "Go",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "AWS / ECS",
  ];

  return (
    <div className="page">
      <div className="container">
        {/* Navigation */}
        <nav className="top-nav">
          <h1>A. Wright</h1>

          <div className="nav-links">
            <a href="#projects">Work</a>
            <a href="#experience">Experience</a>

            <a
              href="mailto:hello@example.com"
              className="brutal-link nav-talk"
            >
              Let's Talk
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="bento-grid">
          {/* Hero */}
          <section className="brutal-card hero-card">
            <h2 className="hero-title">
              I engineer scalable digital infrastructure.
            </h2>

            <p className="hero-subtitle">
              Software Engineer & Systems Architect focusing on performance,
              systemic clarity, and removing unnecessary abstractions.
            </p>
          </section>

          {/* Tech Stack */}
          <section className="brutal-card skills-card">
            <div className="card-header">
              <h3 className="card-title">Tech Stack</h3>

              <span className="status-badge">CURRENTLY USING</span>
            </div>

            <p>
              <strong>Languages & Frameworks:</strong> The tools I use daily to
              build robust distributed systems and interfaces.
            </p>

            <div className="tag-cloud">
              {techStack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section
            className="brutal-card philosophy-card"
          >
            <div className="card-header">
              <h3 className="card-title">Philosophy</h3>
            </div>

            <p className="philosophy-text">
              Code should read like well-edited prose: concise and purposeful.
            </p>

            <a href="#" className="brutal-link">
              Read Full Manifesto
            </a>
          </section>

          {/* Featured Project */}
          <section
            className="brutal-card project-card featured"
            id="projects"
          >
            <div className="project-info">
              <div className="featured-label-wrapper">
                <span className="tag featured-label">
                  Featured Work
                </span>
              </div>

              <h3 className="project-title">Chronos Engine</h3>

              <p className="project-desc">
                An open-source, high-performance time-series data
                visualization engine built entirely in Rust and compiled to
                WebAssembly. Allows for 60fps rendering of datasets exceeding
                1 million points directly in the browser.
              </p>

              <div className="tag-cloud project-tags">
                <span className="tag">Rust</span>
                <span className="tag">WebAssembly</span>
                <span className="tag">Canvas API</span>
              </div>

              <a href="#" className="brutal-link">
                View Source Code →
              </a>
            </div>

            {/* Project Visual */}
            <div className="project-visual">
              <div className="visual-pattern" />

              <div className="visual-circle" />
            </div>
          </section>

          {/* Project 2 */}
          <section className="brutal-card project-card">
            <h3 className="project-title small">
              Syntax UI
            </h3>

            <p className="project-desc">
              A strictly typed, highly accessible React component library
              designed for financial applications. Adopted by three fintech
              startups.
            </p>

            <div className="tag-cloud project-bottom-tags">
              <span className="tag">React</span>
              <span className="tag">Tailwind</span>
            </div>

            <a href="#" className="brutal-link">
              Case Study
            </a>
          </section>

          {/* Project 3 */}
          <section className="brutal-card project-card">
            <h3 className="project-title small">
              Orbit CLI
            </h3>

            <p className="project-desc">
              A Go binary command-line utility that streamlines container
              deployment to AWS ECS with automatic rollback functionality.
            </p>

            <div className="tag-cloud project-bottom-tags">
              <span className="tag">Go</span>
              <span className="tag">Docker</span>
              <span className="tag">AWS SDK</span>
            </div>

            <a href="#" className="brutal-link">
              Repository
            </a>
          </section>

          {/* Experience */}
          <section
            className="brutal-card experience-card"
            id="experience"
          >
            <div className="card-header">
              <h3 className="card-title">
                Professional Experience
              </h3>

              <a href="#" className="brutal-link">
                Download CV (PDF)
              </a>
            </div>

            {/* Experience 1 */}
            <div className="job-row">
              <div className="job-meta">
                <span className="company-name">
                  Nexus Data
                </span>

                <span className="job-date">
                  2021 — PRESENT
                </span>
              </div>

              <div className="job-details">
                <h4>Staff Engineer</h4>

                <p>
                  Leading the core platform team for distributed data
                  processing pipelines.
                </p>

                <ul>
                  <li>
                    Architected migration from monolithic REST APIs to
                    highly-available GraphQL microservices, reducing payload
                    sizes by 40%.
                  </li>

                  <li>
                    Implemented Redis caching layers decreasing API latency
                    from 210ms to 45ms.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="job-row">
              <div className="job-meta">
                <span className="company-name">
                  Vercelion
                </span>

                <span className="job-date">
                  2018 — 2021
                </span>
              </div>

              <div className="job-details">
                <h4>Full-Stack Developer</h4>

                <p>
                  Developed enterprise dashboard applications used by 500+
                  daily active employees.
                </p>

                <ul>
                  <li>
                    Built complex, responsive data-grids using React and
                    custom WebGL charting.
                  </li>

                  <li>
                    Integrated legacy Oracle databases into modern Node.js
                    edge functions.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© 2026 Alexander Wright</p>

          <div className="footer-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </footer>
      </div>

      <style jsx>{`
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
          background: #f0f0f0;
        }

        .page {
          --bg-color: #f0f0f0;
          --text-main: #0f0f0f;
          --border-color: #0f0f0f;

          --accent-purple: #b088f9;
          --accent-green: #a3e635;
          --accent-pink: #f9a8d4;
          --accent-blue: #93c5fd;
          --accent-yellow: #fde047;

          --border-width: 3px;
          --shadow-offset: 6px;

          min-height: 100vh;

          background-color: var(--bg-color);
          color: var(--text-main);

          font-family:
            "Space Grotesk",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          line-height: 1.6;

          padding: 2rem;

          overflow-x: hidden;

          background-image:
            radial-gradient(
              #d1d1d1 1px,
              transparent 1px
            );

          background-size: 20px 20px;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        h1,
        h2,
        h3,
        h4 {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        a {
          color: var(--text-main);
          text-decoration: none;
          font-weight: bold;
        }

        /* =========================
           BUTTON
        ========================= */

        .brutal-link {
          display: inline-block;

          padding: 0.5rem 1rem;

          border:
            var(--border-width)
            solid
            var(--border-color);

          background: #fff;

          box-shadow:
            4px 4px 0
            var(--border-color);

          transition:
            all 0.15s ease;

          cursor: pointer;

          font-size: 0.9rem;

          text-transform: uppercase;
        }

        .brutal-link:hover {
          transform: translate(2px, 2px);

          box-shadow:
            2px 2px 0
            var(--border-color);

          background: var(--accent-yellow);
        }

        .brutal-link:active {
          transform: translate(4px, 4px);

          box-shadow: none;
        }

        /* =========================
           NAVIGATION
        ========================= */

        .top-nav {
          display: flex;

          justify-content: space-between;
          align-items: center;

          padding: 1rem 1.5rem;

          border:
            var(--border-width)
            solid
            var(--border-color);

          background: var(--accent-purple);

          box-shadow:
            var(--shadow-offset)
            var(--shadow-offset)
            0
            var(--border-color);

          margin-bottom: 3rem;

          border-radius: 8px;
        }

        .top-nav h1 {
          font-size: 1.5rem;
          margin: 0;
        }

        .nav-links {
          display: flex;

          align-items: center;

          gap: 1.5rem;
        }

        .nav-links a:not(.brutal-link) {
          border-bottom: 3px solid transparent;

          transition:
            border-color 0.15s ease;
        }

        .nav-links a:not(.brutal-link):hover {
          border-bottom-color: var(--border-color);
        }

        .nav-talk {
          margin-left: 1rem;
        }

        /* =========================
           BENTO GRID
        ========================= */

        .bento-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          grid-auto-rows:
            minmax(200px, auto);

          gap: 1.5rem;
        }

        /* =========================
           CARDS
        ========================= */

        .brutal-card {
          background: #fff;

          border:
            var(--border-width)
            solid
            var(--border-color);

          border-radius: 12px;

          padding: 2rem;

          box-shadow:
            var(--shadow-offset)
            var(--shadow-offset)
            0
            var(--border-color);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;

          display: flex;

          flex-direction: column;

          position: relative;

          overflow: hidden;
        }

        .brutal-card:hover {
          transform: translate(-2px, -2px);

          box-shadow:
            8px 8px 0
            var(--border-color);
        }

        /* =========================
           HERO
        ========================= */

        .hero-card {
          grid-column: span 4;

          background: var(--accent-green);

          align-items: center;

          text-align: center;

          padding: 4rem 2rem;
        }

        .hero-title {
          font-size:
            clamp(
              2.5rem,
              5vw,
              4.5rem
            );

          line-height: 1.1;

          margin-bottom: 1rem;

          text-shadow:
            2px 2px 0 #fff;
        }

        .hero-subtitle {
          font-size: 1.25rem;

          font-weight: 600;

          max-width: 600px;
        }

        /* =========================
           TECH STACK
        ========================= */

        .skills-card {
          grid-column: span 2;

          background: var(--accent-blue);
        }

        .tag-cloud {
          display: flex;

          flex-wrap: wrap;

          gap: 0.75rem;

          margin-top: 1.5rem;
        }

        .tag {
          background: #fff;

          border:
            2px
            solid
            var(--border-color);

          padding:
            0.4rem
            0.8rem;

          font-weight: 700;

          font-size: 0.85rem;

          border-radius: 4px;

          box-shadow:
            2px 2px 0
            var(--border-color);
        }

        /* =========================
           CARD HEADER
        ========================= */

        .card-header {
          display: flex;

          justify-content:
            space-between;

          align-items: center;

          gap: 1rem;

          margin-bottom: 1.5rem;

          border-bottom:
            3px
            solid
            var(--border-color);

          padding-bottom: 0.5rem;
        }

        .card-title {
          font-size: 1.25rem;
        }

        .status-badge {
          background: var(--accent-pink);

          border:
            2px
            solid
            var(--border-color);

          padding:
            0.2rem
            0.5rem;

          font-size: 0.7rem;

          font-weight: 900;

          border-radius: 999px;

          box-shadow:
            2px 2px 0
            var(--border-color);
        }

        /* =========================
           PHILOSOPHY
        ========================= */

        .philosophy-card {
          background: var(--accent-yellow);
        }

        .philosophy-text {
          font-size: 1.2rem;

          font-weight: 500;

          margin-bottom: 1rem;
        }

        /* =========================
           PROJECTS
        ========================= */

        .project-card {
          grid-column: span 2;
        }

        .project-card.featured {
          grid-column: span 4;

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 2rem;

          align-items: center;

          background: #fff;
        }

        .project-title {
          font-size: 2rem;

          margin-bottom: 0.5rem;
        }

        .project-title.small {
          font-size: 1.5rem;
        }

        .project-desc {
          font-size: 1.1rem;

          margin-bottom: 1.5rem;
        }

        .featured-label-wrapper {
          margin-bottom: 1rem;
        }

        .featured-label {
          background:
            var(--accent-green);

          display: inline-block;

          margin-bottom: 1rem;
        }

        .project-tags {
          margin-bottom: 1.5rem;
        }

        .project-bottom-tags {
          margin-top: auto;

          margin-bottom: 1.5rem;
        }

        /* =========================
           PROJECT VISUAL
        ========================= */

        .project-visual {
          background:
            var(--border-color);

          border-radius: 8px;

          width: 100%;

          height: 100%;

          min-height: 250px;

          display: flex;

          align-items: center;

          justify-content: center;

          position: relative;

          overflow: hidden;
        }

        .visual-pattern {
          position: absolute;

          width: 150%;

          height: 150%;

          background:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(
                255,
                255,
                255,
                0.1
              )
                10px,
              rgba(
                255,
                255,
                255,
                0.1
              )
                20px
            );
        }

        .visual-circle {
          width: 100px;

          height: 100px;

          border:
            4px
            solid
            var(--accent-green);

          border-radius: 50%;

          box-shadow:
            8px 8px 0
            var(--accent-purple);

          position: relative;

          z-index: 2;
        }

        /* =========================
           EXPERIENCE
        ========================= */

        .experience-card {
          grid-column: span 4;

          background: #fff;
        }

        .job-row {
          display: grid;

          grid-template-columns:
            200px 1fr;

          gap: 2rem;

          padding: 1.5rem 0;

          border-bottom:
            2px dashed
            var(--border-color);
        }

        .job-row:last-child {
          border-bottom: none;

          padding-bottom: 0;
        }

        .job-meta {
          font-weight: bold;

          display: flex;

          flex-direction: column;

          gap: 0.25rem;
        }

        .company-name {
          font-size: 1.2rem;
        }

        .job-date {
          font-family: monospace;

          background:
            var(--border-color);

          color: #fff;

          padding:
            0.2rem
            0.5rem;

          font-size: 0.8rem;

          display: inline-block;

          width: fit-content;
        }

        .job-details h4 {
          font-size: 1.2rem;

          margin-bottom: 0.5rem;
        }

        .job-details ul {
          padding-left: 1.5rem;

          margin-top: 0.5rem;

          line-height: 1.6;
        }

        /* =========================
           FOOTER
        ========================= */

        .footer {
          margin-top: 4rem;

          padding-top: 2rem;

          border-top:
            var(--border-width)
            solid
            var(--border-color);

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          font-weight: bold;
        }

        .footer-links {
          display: flex;

          gap: 1rem;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns:
              1fr 1fr;
          }

          .skills-card,
          .project-card,
          .hero-card,
          .experience-card,
          .project-card.featured {
            grid-column: span 2;
          }

          .project-card.featured {
            grid-template-columns: 1fr;
          }

          .job-row {
            grid-template-columns: 1fr;

            gap: 0.5rem;
          }

          .job-meta {
            flex-direction: row;

            align-items: center;

            justify-content:
              space-between;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .page {
            padding: 1rem;
          }

          .bento-grid {
            grid-template-columns: 1fr;
          }

          .skills-card,
          .project-card,
          .hero-card,
          .experience-card,
          .project-card.featured {
            grid-column: span 1;
          }

          .top-nav {
            flex-direction: column;

            gap: 1rem;

            align-items: stretch;
          }

          .nav-links {
            justify-content: center;

            flex-wrap: wrap;
          }

          .nav-talk {
            margin-left: 0;
          }

          .hero-card {
            padding: 3rem 1.5rem;
          }

          .card-header {
            align-items: flex-start;

            flex-direction: column;
          }

          .job-meta {
            flex-direction: column;

            align-items: flex-start;
          }

          .footer {
            flex-direction: column;

            gap: 1rem;

            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}