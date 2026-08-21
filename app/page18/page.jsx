"use client";

import React from "react";

export default function Page() {
  const projects = [
    {
      title: "Aura Store",
      description:
        "Full-stack React ecommerce site with Stripe integration and dynamic cart state management.",
      caption: "Dep-01: Live App",
      image:
        "https://placehold.co/400x300/1a1a1a/ffffff?text=E-Commerce+App",
      alt: "Aura Store",
      badges: ["React", "Stripe"],
      tape: "top",
    },
    {
      title: "Metrics Pro",
      description:
        "Real-time data visualization dashboard using Next.js and Chart.js integration for analytics.",
      caption: "Dep-02: Analytics",
      image:
        "https://placehold.co/400x300/1a1a1a/ffffff?text=Data+Dashboard",
      alt: "Metrics Pro",
      badges: ["Next.js", "Chart.js"],
    },
    {
      title: "Prompt Forge",
      description:
        "Frontend interface connected to OpenAI API for advanced image generation.",
      caption: "Dep-03: AI App",
      image:
        "https://placehold.co/400x300/1a1a1a/ffffff?text=AI+Image+Gen",
      alt: "Prompt Forge",
      badges: ["React", "OpenAI"],
      tape: "corner",
    },
    {
      title: "Nexus Comm",
      description:
        "Live messaging application with custom rooms and instant event socket updates.",
      caption: "Dep-04: Websockets",
      image:
        "https://placehold.co/400x300/1a1a1a/ffffff?text=Live+Chat",
      alt: "Nexus Comm",
      badges: ["Socket.io", "Node"],
    },
    {
      title: "Coin Pulse",
      description:
        "Live cryptocurrency price tracker pulling from public financial APIs.",
      caption: "Dep-05: Finance",
      image:
        "https://placehold.co/400x300/1a1a1a/ffffff?text=Crypto+Tracker",
      alt: "Coin Pulse",
      badges: ["REST API", "JS"],
      tape: "small",
    },
    {
      title: "Taskmaster OS (Capstone)",
      description:
        "B.Tech Final Year Project. Enterprise-grade Kanban system with drag-and-drop & live database sync.",
      caption: "My Masterpiece 🌟",
      image:
        "https://placehold.co/400x300/d32f2f/ffffff?text=Final+Capstone",
      alt: "Taskmaster OS",
      badges: ["React", "Firebase", "DnD"],
      capstone: true,
    },
  ];

  const reviews = [
    {
      type: "yellow",
      quote:
        '"Alexander completely elevated our web presence. Delivered ahead of schedule!"',
      author: "- Sarah Jenkins, Horizon AI",
      decoration: "tape",
    },
    {
      type: "pink",
      quote:
        '"Rare to see a grad with such a strong grasp of both design and logic. Brilliant work."',
      author: "- Marcus Vance, DataFlow",
      decoration: "pin",
    },
    {
      type: "blue",
      quote:
        '"His capstone project blew the panel away. Highly recommend him for any frontend team."',
      author: "- Prof. Davis (B.Tech Advisor)",
      decoration: "corner",
    },
  ];

  const techStack = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js & Next.js",
    "Node.js & Express",
    "Tailwind CSS",
    "Git & GitHub",
    "Figma UI/UX",
  ];

  return (
    <div className="scrapbook-page">
      <div className="container">
        {/* =========================
            HERO
        ========================= */}

        <section className="hero-section">
          {/* Torn Paper Bio */}
          <div className="torn-paper">
            <div className="tape tape-top" />

            <div className="degree-stamp">
              APPROVED: B.TECH GRADUATE
            </div>

            <h1 className="hero-heading">
              Hi, I'm
              <br />
              Alexander Wright.
            </h1>

            <p className="typewriter hero-description">
              &gt; ROLE: Frontend Web Engineer
              <br />
              &gt; STATUS: Actively Building
              <br />
              &gt; MOTIVATION: I build highly interactive, performant, and
              structurally sound web applications. I bridge the gap between
              complex engineering and beautiful, tactile user experiences.
            </p>

            <div className="social-links">
              <a
                href="#"
                className="social-link rotate-negative"
              >
                github.com/alexw
              </a>

              <a
                href="#"
                className="social-link rotate-positive"
              >
                linkedin/in/awright
              </a>

              <a
                href="#"
                className="social-link rotate-small-negative"
              >
                @alex.codes
              </a>
            </div>

            <p className="handwriting hero-signoff">
              Let's build something amazing together! →
            </p>
          </div>

          {/* Notebook */}
          <div className="notebook-paper">
            <div className="pin" />

            <h3 className="notebook-title">
              Tech Stack Checklist:
            </h3>

            <div className="handwriting checklist">
              {techStack.map((tech) => (
                <div className="checklist-item" key={tech}>
                  ✓ {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            PROJECTS
        ========================= */}

        <h2 className="section-title">
          Deployment Manifest
        </h2>

        <div className="polaroid-grid">
          {projects.map((project, index) => (
            <div
              className={`polaroid ${
                project.capstone ? "capstone" : ""
              }`}
              key={project.title}
            >
              {project.tape === "top" && (
                <div className="tape tape-top" />
              )}

              {project.tape === "corner" && (
                <div className="tape tape-corner" />
              )}

              {project.tape === "small" && (
                <div className="tape tape-small" />
              )}

              {project.capstone && (
                <div className="pin capstone-pin" />
              )}

              <div className="polaroid-img">
                <img
                  src={project.image}
                  alt={project.alt}
                />

                <div className="tech-badges">
                  {project.badges.map((badge) => (
                    <span className="badge" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <h3
                className={
                  project.capstone
                    ? "project-heading capstone-heading"
                    : "project-heading"
                }
              >
                {project.title}
              </h3>

              <p className="typewriter project-description">
                {project.description}
              </p>

              <div
                className={
                  project.capstone
                    ? "polaroid-caption capstone-caption"
                    : "polaroid-caption"
                }
              >
                {project.caption}
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            REVIEWS
        ========================= */}

        <h2 className="section-title reviews-title">
          Client Feedback
        </h2>

        <p className="handwriting reviews-subtitle">
          (What people are saying...)
        </p>

        <div className="reviews-container">
          {reviews.map((review) => (
            <div
              className={`post-it post-${review.type}`}
              key={review.author}
            >
              {review.decoration === "tape" && (
                <div className="tape tape-top review-tape" />
              )}

              {review.decoration === "pin" && (
                <div className="pin review-pin" />
              )}

              {review.decoration === "corner" && (
                <div className="tape tape-corner" />
              )}

              <p className="handwriting review-quote">
                {review.quote}
              </p>

              <p className="typewriter review-author">
                {review.author}
              </p>

              <p className="stars">★★★★★</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;500;800&display=swap");

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

        .scrapbook-page {
          --bg-canvas: #f0ede6;
          --text-main: #1a1a1a;
          --text-ink: #003366;
          --paper: #ffffff;
          --tape-color: rgba(255, 255, 255, 0.6);

          --postit-yellow: #fdfd96;
          --postit-pink: #ffb6c1;
          --postit-blue: #aec6cf;

          min-height: 100vh;

          background-color:
            var(--bg-canvas);

          color:
            var(--text-main);

          font-family:
            "Outfit",
            sans-serif;

          overflow-x: hidden;

          background-image:
            radial-gradient(
              #d5d1c8 1px,
              transparent 1px
            );

          background-size: 20px 20px;

          padding: 2rem;

          line-height: 1.6;
        }

        :global(h1),
        :global(h2),
        :global(h3) {
          font-weight: 800;
        }

        :global(a) {
          color: inherit;
        }

        .container {
          max-width: 1200px;

          margin: 0 auto;

          position: relative;
        }

        /* =========================
           TYPOGRAPHY
        ========================= */

        .handwriting {
          font-family: "Caveat", cursive;

          color: var(--text-ink);

          font-size: 1.5rem;

          line-height: 1.2;
        }

        .typewriter {
          font-family:
            "Courier Prime",
            monospace;

          font-size: 0.9rem;
        }

        /* =========================
           TAPE
        ========================= */

        .tape {
          position: absolute;

          background:
            var(--tape-color);

          box-shadow:
            0 1px 3px
            rgba(0, 0, 0, 0.1);

          backdrop-filter:
            blur(2px);

          z-index: 5;

          opacity: 0.8;
        }

        .tape-top {
          width: 100px;

          height: 30px;

          top: -15px;

          left: 50%;

          transform:
            translateX(-50%)
            rotate(-3deg);
        }

        .tape-corner {
          width: 80px;

          height: 25px;

          top: -10px;

          left: -20px;

          transform:
            rotate(-45deg);
        }

        .tape-small {
          width: 60px;

          height: 30px;

          top: -15px;

          left: 50%;

          transform:
            translateX(-50%)
            rotate(-3deg);
        }

        /* =========================
           PIN
        ========================= */

        .pin {
          position: absolute;

          width: 15px;

          height: 15px;

          background: #ff4500;

          border-radius: 50%;

          top: 10px;

          left: 50%;

          transform:
            translateX(-50%);

          box-shadow:
            -2px 5px 5px
              rgba(0, 0, 0, 0.3),
            inset -2px -2px 4px
              rgba(0, 0, 0, 0.3);

          z-index: 5;
        }

        .pin::before {
          content: "";

          position: absolute;

          width: 4px;

          height: 4px;

          background: white;

          border-radius: 50%;

          top: 3px;

          left: 3px;
        }

        /* =========================
           HERO
        ========================= */

        .hero-section {
          display: grid;

          grid-template-columns:
            1fr 300px;

          gap: 4rem;

          margin-bottom: 5rem;

          margin-top: 3rem;
        }

        .torn-paper {
          background:
            var(--paper);

          padding: 3rem;

          position: relative;

          box-shadow:
            2px 4px 15px
            rgba(0, 0, 0, 0.05);

          clip-path:
            polygon(
              0% 0%,
              100% 0%,
              100% 98%,
              98% 100%,
              95% 98%,
              92% 100%,
              89% 98%,
              86% 100%,
              83% 98%,
              80% 100%,
              77% 98%,
              74% 100%,
              71% 98%,
              68% 100%,
              65% 98%,
              62% 100%,
              59% 98%,
              56% 100%,
              53% 98%,
              50% 100%,
              47% 98%,
              44% 100%,
              41% 98%,
              38% 100%,
              35% 98%,
              32% 100%,
              29% 98%,
              26% 100%,
              23% 98%,
              20% 100%,
              17% 98%,
              14% 100%,
              11% 98%,
              8% 100%,
              5% 98%,
              2% 100%,
              0% 98%
            );
        }

        .degree-stamp {
          display: inline-block;

          border:
            3px solid #d32f2f;

          color: #d32f2f;

          font-family:
            "Courier Prime",
            monospace;

          font-weight: bold;

          padding:
            0.5rem 1rem;

          transform:
            rotate(-5deg);

          margin-bottom: 1rem;

          border-radius: 4px;

          opacity: 0.8;
        }

        .hero-heading {
          font-size: 3.5rem;

          line-height: 1.1;

          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.1rem;

          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;

          gap: 1rem;

          flex-wrap: wrap;
        }

        .social-link {
          display: inline-block;

          background: #111;

          color: #fff;

          padding:
            0.5rem 1rem;

          font-family:
            "Courier Prime",
            monospace;

          text-decoration: none;

          font-size: 0.85rem;

          box-shadow:
            2px 2px 0 #aaa;

          transition:
            transform 0.1s,
            box-shadow 0.1s;
        }

        .social-link:hover {
          transform:
            translateY(-3px);
        }

        .social-link:active {
          transform:
            translate(2px, 2px);

          box-shadow: none;
        }

        .rotate-negative {
          transform: rotate(-2deg);
        }

        .rotate-positive {
          transform: rotate(1deg);
        }

        .rotate-small-negative {
          transform: rotate(-1deg);
        }

        .hero-signoff {
          margin-top: 2rem;

          font-size: 1.8rem;
        }

        /* =========================
           NOTEBOOK
        ========================= */

        .notebook-paper {
          background: #fff;

          padding:
            2rem 2rem 2rem 3rem;

          position: relative;

          box-shadow:
            3px 5px 15px
            rgba(0, 0, 0, 0.1);

          transform:
            rotate(2deg);

          background-image:
            linear-gradient(
              #f0b3b3 1px,
              transparent 1px
            ),
            linear-gradient(
              transparent 29px,
              #e0e0e0 30px
            );

          background-size:
            100% 100%,
            100% 30px;

          background-position:
            2rem 0,
            0 40px;
        }

        .notebook-paper::before {
          content: "";

          position: absolute;

          top: 0;

          bottom: 0;

          left: 2.2rem;

          width: 2px;

          background: #f0b3b3;
        }

        .notebook-title {
          font-family: "Caveat", cursive;

          font-size: 2rem;

          margin-bottom: 1rem;

          margin-top: 1.5rem;
        }

        .checklist {
          padding-top: 10px;
        }

        .checklist-item {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 5px;

          height: 30px;
        }

        /* =========================
           SECTION TITLES
        ========================= */

        .section-title {
          text-align: center;

          font-size: 3rem;

          margin-bottom: 3rem;

          position: relative;

          display: inline-block;

          left: 50%;

          transform:
            translateX(-50%);
        }

        .section-title::after {
          content: "My best work!";

          position: absolute;

          right: -80px;

          bottom: 0;

          font-family:
            "Caveat",
            cursive;

          color: #d32f2f;

          font-size: 1.5rem;

          transform:
            rotate(-10deg);
        }

        /* =========================
           POLAROIDS
        ========================= */

        .polaroid-grid {
          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(300px, 1fr)
            );

          gap: 3rem;

          margin-bottom: 6rem;
        }

        .polaroid {
          background: #fff;

          padding:
            1rem
            1rem
            3rem
            1rem;

          box-shadow:
            2px 4px 10px
            rgba(0, 0, 0, 0.15);

          position: relative;

          transition:
            all 0.4s
            cubic-bezier(
              0.175,
              0.885,
              0.32,
              1.275
            );

          cursor: pointer;

          z-index: 1;
        }

        .polaroid:nth-child(1) {
          transform: rotate(-3deg);
        }

        .polaroid:nth-child(2) {
          transform:
            rotate(4deg)
            translateY(20px);
        }

        .polaroid:nth-child(3) {
          transform: rotate(-2deg);
        }

        .polaroid:nth-child(4) {
          transform: rotate(5deg);
        }

        .polaroid:nth-child(5) {
          transform:
            rotate(-4deg)
            translateY(-10px);
        }

        .polaroid:nth-child(6) {
          transform: rotate(2deg);
        }

        .polaroid:hover {
          transform:
            scale(1.05)
            rotate(0deg)
            translateY(-10px);

          box-shadow:
            5px 15px 30px
            rgba(0, 0, 0, 0.2);

          z-index: 10;
        }

        .polaroid-img {
          width: 100%;

          height: 200px;

          background: #333;

          margin-bottom: 1rem;

          display: flex;

          align-items: center;

          justify-content: center;

          overflow: hidden;

          position: relative;
        }

        .polaroid-img img {
          width: 100%;

          height: 100%;

          object-fit: cover;

          display: block;
        }

        .polaroid-caption {
          text-align: center;

          font-family:
            "Caveat",
            cursive;

          font-size: 1.5rem;

          color: var(--text-ink);
        }

        .project-heading {
          margin-bottom: 0.5rem;
        }

        .project-description {
          font-size: 0.8rem;

          margin-bottom: 1rem;
        }

        .tech-badges {
          position: absolute;

          top: 1.5rem;

          right: 1.5rem;

          display: flex;

          gap: 0.5rem;

          flex-wrap: wrap;

          justify-content: flex-end;
        }

        .badge {
          background:
            rgba(255, 255, 255, 0.9);

          padding:
            0.2rem 0.5rem;

          font-family:
            "Courier Prime",
            monospace;

          font-size: 0.7rem;

          font-weight: bold;

          box-shadow:
            1px 2px 4px
            rgba(0, 0, 0, 0.2);
        }

        .capstone {
          border:
            4px solid #d32f2f;
        }

        .capstone-pin {
          background: #111;
        }

        .capstone-heading {
          color: #d32f2f;
        }

        .capstone-caption {
          color: #d32f2f;
        }

        /* =========================
           REVIEWS
        ========================= */

        .reviews-title {
          margin-bottom: 2rem;
        }

        .reviews-subtitle {
          text-align: center;

          margin-bottom: 3rem;

          font-size: 1.5rem;
        }

        .reviews-container {
          display: flex;

          justify-content: center;

          gap: 2rem;

          flex-wrap: wrap;

          margin-bottom: 4rem;
        }

        .post-it {
          width: 300px;

          padding: 2rem;

          position: relative;

          box-shadow:
            3px 5px 10px
            rgba(0, 0, 0, 0.1);

          transition:
            transform 0.3s ease;
        }

        .post-it::after {
          content: "";

          position: absolute;

          z-index: -1;

          right: 10px;

          bottom: 15px;

          width: 50%;

          height: 20%;

          box-shadow:
            0 15px 15px
            rgba(0, 0, 0, 0.2);

          transform:
            rotate(4deg);
        }

        .post-it:hover {
          transform:
            scale(1.05);

          z-index: 10;
        }

        .post-yellow {
          background:
            var(--postit-yellow);

          transform:
            rotate(-2deg);
        }

        .post-pink {
          background:
            var(--postit-pink);

          transform:
            rotate(3deg)
            translateY(10px);
        }

        .post-blue {
          background:
            var(--postit-blue);

          transform:
            rotate(-1deg);
        }

        .review-quote {
          font-size: 1.4rem;

          margin-bottom: 1rem;
        }

        .review-author {
          font-weight: bold;

          font-size: 0.8rem;
        }

        .stars {
          color: #d32f2f;

          margin-top: 5px;
        }

        .review-tape {
          width: 50px;
        }

        .review-pin {
          left: 50%;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 900px) {
          .scrapbook-page {
            padding: 1rem;
          }

          .hero-section {
            grid-template-columns: 1fr;

            gap: 2rem;
          }

          .notebook-paper {
            max-width: 500px;

            width: 100%;

            margin:
              0 auto;
          }
        }

        @media (max-width: 600px) {
          .scrapbook-page {
            padding: 0.75rem;
          }

          .hero-section {
            margin-top: 1.5rem;

            margin-bottom: 3rem;
          }

          .torn-paper {
            padding: 2rem 1.5rem;
          }

          .hero-heading {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 0.95rem;
          }

          .notebook-paper {
            padding:
              1.5rem
              1.5rem
              1.5rem
              2.5rem;
          }

          .section-title {
            font-size: 2.2rem;

            max-width: 90%;
          }

          .section-title::after {
            right: -25px;

            bottom: -25px;

            font-size: 1.1rem;
          }

          .polaroid-grid {
            grid-template-columns: 1fr;

            gap: 2rem;
          }

          .polaroid:nth-child(n) {
            transform: rotate(-1deg);
          }

          .polaroid:hover {
            transform:
              scale(1.03)
              rotate(0deg)
              translateY(-5px);
          }

          .social-links {
            flex-direction: column;

            align-items: flex-start;
          }

          .reviews-container {
            flex-direction: column;

            align-items: center;
          }

          .post-it {
            width: min(
              100%,
              320px
            );
          }
        }
      `}</style>
    </div>
  );
}