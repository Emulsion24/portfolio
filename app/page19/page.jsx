"use client";

import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "AURA STORE",
    role: "E-Commerce App",
    tech: "React / Stripe / Node.js",
    image:
      "https://placehold.co/800x600/FF3300/FFFFFF/png?text=AURA+STORE",
  },
  {
    title: "METRICS PRO",
    role: "Data Dashboard",
    tech: "Next.js / Chart.js / SQL",
    image:
      "https://placehold.co/800x600/0b0b0b/FFFFFF/png?text=METRICS+PRO",
  },
  {
    title: "PROMPT FORGE",
    role: "AI Generator",
    tech: "OpenAI API / React",
    image:
      "https://placehold.co/800x600/e0e0e0/0b0b0b/png?text=PROMPT+FORGE",
  },
  {
    title: "NEXUS COMM",
    role: "Live Chat Platform",
    tech: "Socket.io / Express",
    image:
      "https://placehold.co/800x600/FF3300/FFFFFF/png?text=NEXUS+COMM",
  },
  {
    title: "COIN PULSE",
    role: "Crypto Tracker",
    tech: "REST APIs / Tailwind",
    image:
      "https://placehold.co/800x600/0b0b0b/FFFFFF/png?text=COIN+PULSE",
  },
  {
    title: "TASKMASTER",
    role: "Enterprise Kanban OS",
    tech: "React / Firebase / DnD",
    image:
      "https://placehold.co/800x600/FF3300/0b0b0b/png?text=TASKMASTER+OS",
    capstone: true,
  },
];

const reviews = [
  {
    quote:
      '"ELEVATED OUR WEB PRESENCE. DELIVERED AHEAD OF SCHEDULE."',
    author: "Sarah Jenkins, Horizon AI",
  },
  {
    quote:
      '"RARE TO SEE A GRAD WITH SUCH A STRONG GRASP OF DESIGN AND LOGIC."',
    author: "Marcus Vance, DataFlow",
  },
  {
    quote:
      '"HIS CAPSTONE PROJECT BLEW THE PANEL AWAY. HIGHLY RECOMMEND."',
    author: "Prof. Davis (B.Tech Advisor)",
  },
];

export default function Page() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const imageRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const follower = useRef({
    x: 0,
    y: 0,
  });

  const [clicking, setClicking] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [mobile, setMobile] = useState(false);

  /*
   * ============================
   * Mouse / Cursor
   * ============================
   */

  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth <= 900);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    const handleMouseDown = () => {
      setClicking(true);
    };

    const handleMouseUp = () => {
      setClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener(
        "resize",
        checkMobile
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );
    };
  }, []);

  /*
   * ============================
   * Smooth Image Follower
   * ============================
   */

  useEffect(() => {
    let animationFrame;

    const renderPhysics = () => {
      follower.current.x +=
        (mouse.current.x - follower.current.x) *
        0.1;

      follower.current.y +=
        (mouse.current.y - follower.current.y) *
        0.1;

      if (followerRef.current) {
        followerRef.current.style.transform = `
          translate(
            ${follower.current.x}px,
            ${follower.current.y}px
          )
        `;
      }

      animationFrame =
        requestAnimationFrame(renderPhysics);
    };

    animationFrame =
      requestAnimationFrame(renderPhysics);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  /*
   * ============================
   * Project Hover
   * ============================
   */

  const handleProjectEnter = (image) => {
    if (mobile) return;

    setActiveImage(image);

    if (imageRef.current) {
      imageRef.current.style.backgroundImage =
        `url(${image})`;

      imageRef.current.classList.add("active");
    }
  };

  const handleProjectLeave = () => {
    if (imageRef.current) {
      imageRef.current.classList.remove("active");
    }

    setActiveImage(null);
  };

  return (
    <div
      className={`kinetic-page ${
        clicking ? "clicking" : ""
      }`}
    >
      {/* ============================
          CUSTOM CURSOR
      ============================ */}

      {!mobile && (
        <div
          ref={cursorRef}
          className="custom-cursor"
        />
      )}

      {/* ============================
          IMAGE FOLLOWER
      ============================ */}

      {!mobile && (
        <div
          ref={followerRef}
          className="follower-container"
        >
          <div
            ref={imageRef}
            className="image-follower"
          />
        </div>
      )}

      {/* ============================
          HERO
      ============================ */}

      <section className="hero">
        <svg
          viewBox="0 0 100 100"
          className="spinning-badge"
          aria-hidden="true"
        >
          <path
            id="circlePath"
            fill="none"
            d="
              M 50, 50
              m -40, 0
              a 40,40 0 1,1 80,0
              a 40,40 0 1,1 -80,0
            "
          />

          <text>
            <textPath
              href="#circlePath"
              fill="currentColor"
              fontSize="11"
              fontFamily="Inter"
              fontWeight="900"
              letterSpacing="2"
            >
              B.TECH GRADUATE • FRONTEND DEV •
            </textPath>
          </text>
        </svg>

        <h1 className="huge-text">
          ALEXANDER
        </h1>

        <h1 className="huge-text accent-text">
          WRIGHT.
        </h1>

        <p className="hero-subtitle">
          I am a B.Tech Graduate and Frontend
          Engineer. I bridge the gap between complex
          logic and highly interactive, avant-garde web
          experiences.
        </p>
      </section>

      {/* ============================
          MARQUEE 1
      ============================ */}

      <section className="marquee-section">
        <div className="marquee-content">
          REACT.JS • NEXT.JS • TAILWIND • TYPESCRIPT •
          NODE.JS • FRAMER MOTION • WEBGL • REACT.JS •
          NEXT.JS • TAILWIND • TYPESCRIPT • NODE.JS •
          FRAMER MOTION • WEBGL •
        </div>
      </section>

      {/* ============================
          MARQUEE 2
      ============================ */}

      <section className="marquee-section marquee-second">
        <div className="marquee-content solid">
          FRONTEND • ARCHITECTURE • UX/UI • API DESIGN •
          DEPLOYMENT • DATABASE • FRONTEND • ARCHITECTURE
          • UX/UI • API DESIGN • DEPLOYMENT • DATABASE •
        </div>
      </section>

      {/* ============================
          PROJECTS
      ============================ */}

      <section className="projects-wrapper">
        {projects.map((project, index) => (
          <div
            className="project-row"
            key={project.title}
            onMouseEnter={() =>
              handleProjectEnter(project.image)
            }
            onMouseLeave={handleProjectLeave}
          >
            <div className="project-title-wrapper">
              <h2>{project.title}</h2>
            </div>

            <div className="project-meta">
              {project.capstone && (
                <span className="capstone-badge">
                  B.TECH CAPSTONE
                </span>
              )}

              <div className="project-role">
                {project.role}
              </div>

              <div className="project-tech">
                {project.tech}
              </div>
            </div>

            {/* Mobile image */}
            <img
              src={project.image}
              className="mobile-image"
              alt={`${project.title} project`}
            />
          </div>
        ))}
      </section>

      {/* ============================
          REVIEWS
      ============================ */}

      <section className="reviews-section">
        {reviews.map((review) => (
          <div
            className="review-card"
            key={review.author}
          >
            <h3 className="review-quote">
              {review.quote}
            </h3>

            <p className="review-author">
              {review.author}
            </p>
          </div>
        ))}
      </section>

      {/* ============================
          FOOTER
      ============================ */}

      <footer className="footer">
        <h2 className="footer-title">
          INITIALIZE CONTACT
        </h2>

        <div className="social-links">
          <a href="#" className="social-link">
            LINKEDIN
          </a>

          <a href="#" className="social-link">
            GITHUB
          </a>

          <a href="#" className="social-link">
            INSTAGRAM
          </a>
        </div>
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;900&display=swap");

        :global(*) {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #fff;
        }

        .kinetic-page {
          --bg: #ffffff;
          --text: #0b0b0b;
          --accent: #ff3300;

          min-height: 100vh;

          background:
            var(--bg);

          color:
            var(--text);

          font-family:
            "Inter",
            sans-serif;

          overflow-x: hidden;

          -webkit-font-smoothing:
            antialiased;

          cursor: none;
        }

        /* ============================
           CURSOR
        ============================ */

        .custom-cursor {
          position: fixed;

          top: 0;
          left: 0;

          width: 15px;
          height: 15px;

          background:
            var(--accent);

          border-radius: 50%;

          pointer-events: none;

          z-index: 9999;

          transform:
            translate(-50%, -50%);

          mix-blend-mode:
            difference;

          transition:
            width 0.2s,
            height 0.2s;
        }

        .clicking .custom-cursor {
          width: 30px;
          height: 30px;
        }

        /* ============================
           IMAGE FOLLOWER
        ============================ */

        .follower-container {
          position: fixed;

          top: 0;
          left: 0;

          pointer-events: none;

          z-index: 100;

          will-change: transform;
        }

        .image-follower {
          width: 450px;
          height: 300px;

          background-size: cover;

          background-position: center;

          transform:
            translate(-50%, -50%)
            scale(0.5)
            rotate(-5deg);

          opacity: 0;

          transition:
            opacity 0.4s
              cubic-bezier(
                0.16,
                1,
                0.3,
                1
              ),
            transform 0.6s
              cubic-bezier(
                0.16,
                1,
                0.3,
                1
              );

          box-shadow:
            0 20px 40px
            rgba(0, 0, 0, 0.3);
        }

        .image-follower.active {
          opacity: 1;

          transform:
            translate(-50%, -50%)
            scale(1)
            rotate(0deg);
        }

        /* ============================
           HERO
        ============================ */

        .hero {
          min-height: 100vh;

          display: flex;

          flex-direction: column;

          justify-content: center;

          padding: 2rem;

          position: relative;
        }

        .huge-text {
          font-family:
            "Anton",
            sans-serif;

          font-size:
            clamp(
              4rem,
              15vw,
              15rem
            );

          line-height: 0.85;

          text-transform:
            uppercase;

          letter-spacing:
            -0.02em;

          margin: 0;
        }

        .accent-text {
          color:
            var(--accent);
        }

        .hero-subtitle {
          font-size:
            clamp(
              1rem,
              2vw,
              1.5rem
            );

          font-weight: 600;

          margin-top: 2rem;

          max-width: 600px;

          line-height: 1.5;
        }

        /* ============================
           SPINNING BADGE
        ============================ */

        .spinning-badge {
          position: absolute;

          top: 2rem;

          right: 2rem;

          width: 150px;

          height: 150px;

          animation:
            spin 10s linear infinite;
        }

        @keyframes spin {
          100% {
            transform:
              rotate(360deg);
          }
        }

        /* ============================
           MARQUEE
        ============================ */

        .marquee-section {
          border-top:
            2px solid var(--text);

          border-bottom:
            2px solid var(--text);

          padding: 2rem 0;

          overflow: hidden;

          white-space: nowrap;

          background:
            var(--bg);

          position: relative;

          z-index: 10;
        }

        .marquee-second {
          border-top: none;
        }

        .marquee-content {
          display: inline-block;

          font-family:
            "Anton",
            sans-serif;

          font-size:
            clamp(
              3rem,
              8vw,
              8rem
            );

          -webkit-text-stroke:
            2px var(--text);

          color: transparent;

          text-transform:
            uppercase;

          animation:
            scroll-left
            25s linear infinite;

          width: max-content;
        }

        .marquee-content.solid {
          color:
            var(--text);

          -webkit-text-stroke:
            0;

          animation:
            scroll-right
            30s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform:
              translateX(0);
          }

          100% {
            transform:
              translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform:
              translateX(-50%);
          }

          100% {
            transform:
              translateX(0);
          }
        }

        /* ============================
           PROJECTS
        ============================ */

        .projects-wrapper {
          position: relative;

          border-bottom:
            2px solid var(--text);
        }

        .project-row {
          padding: 4rem 2rem;

          border-top:
            2px solid var(--text);

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          transition:
            background 0.3s;

          position: relative;

          min-height: 180px;
        }

        .project-row:hover {
          background:
            #f4f4f4;
        }

        .project-row h2 {
          font-family:
            "Anton",
            sans-serif;

          font-size:
            clamp(
              3rem,
              10vw,
              8rem
            );

          line-height: 1;

          margin: 0;

          transition:
            color 0.3s,
            -webkit-text-stroke 0.3s,
            transform 0.3s;

          pointer-events: none;
        }

        .project-row:hover h2 {
          color: transparent;

          -webkit-text-stroke:
            3px var(--text);

          transform:
            translateX(20px);
        }

        .project-meta {
          text-align: right;

          pointer-events: none;

          min-width: 250px;
        }

        .project-role {
          font-weight: 900;

          font-size: 1.5rem;

          text-transform:
            uppercase;
        }

        .project-tech {
          font-size: 1rem;

          color: #666;

          margin-top: 0.5rem;
        }

        .capstone-badge {
          display: inline-block;

          background:
            var(--accent);

          color: #fff;

          padding:
            0.5rem 1rem;

          font-weight: 900;

          font-size: 1rem;

          border-radius: 50px;

          margin-bottom: 1rem;
        }

        .mobile-image {
          display: none;

          width: 100%;

          height: 250px;

          object-fit: cover;

          margin-top: 2rem;

          border:
            2px solid var(--text);
        }

        /* ============================
           REVIEWS
        ============================ */

        .reviews-section {
          padding: 8rem 2rem;

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(300px, 1fr)
            );

          gap: 4rem;
        }

        .review-card {
          position: relative;
        }

        .review-quote {
          font-family:
            "Anton",
            sans-serif;

          font-size: 2.5rem;

          line-height: 1.1;

          margin-bottom: 1.5rem;
        }

        .review-author {
          font-weight: 900;

          text-transform:
            uppercase;

          color:
            var(--accent);
        }

        /* ============================
           FOOTER
        ============================ */

        .footer {
          padding: 4rem 2rem;

          background:
            var(--text);

          color:
            var(--bg);

          text-align: center;
        }

        .footer-title {
          font-family:
            "Anton",
            sans-serif;

          font-size:
            clamp(
              2rem,
              8vw,
              6rem
            );

          line-height: 0.9;
        }

        .social-links {
          display: flex;

          justify-content:
            center;

          gap: 3rem;

          margin-top: 3rem;

          flex-wrap: wrap;
        }

        .social-link {
          font-family:
            "Anton",
            sans-serif;

          font-size: 3rem;

          color:
            var(--bg);

          text-decoration: none;

          transition:
            color 0.3s;

          cursor: none;
        }

        .social-link:hover {
          color:
            var(--accent);
        }

        /* ============================
           TABLET / MOBILE
        ============================ */

        @media (max-width: 900px) {
          .kinetic-page {
            cursor: auto;
          }

          .spinning-badge {
            position: relative;

            top: 0;

            right: auto;

            margin-bottom: 2rem;
          }

          .hero {
            min-height: 90vh;
          }

          .project-row {
            flex-direction: column;

            align-items: flex-start;

            padding: 3rem 1rem;
          }

          .project-row:hover h2 {
            color:
              var(--text);

            -webkit-text-stroke: 0;

            transform:
              translateX(0);
          }

          .project-meta {
            text-align: left;

            margin-top: 1rem;

            min-width: 0;
          }

          .mobile-image {
            display: block;
          }

          .reviews-section {
            padding:
              5rem 1rem;
          }

          .social-link {
            cursor: pointer;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 1rem;
          }

          .hero-subtitle {
            max-width: 100%;

            font-size: 1rem;
          }

          .marquee-section {
            padding:
              1.25rem 0;
          }

          .project-row {
            padding:
              3rem 1rem;
          }

          .project-row h2 {
            font-size: 4rem;
          }

          .project-role {
            font-size: 1.1rem;
          }

          .project-tech {
            font-size: 0.9rem;
          }

          .review-quote {
            font-size: 2rem;
          }

          .footer {
            padding:
              4rem 1rem;
          }

          .social-links {
            gap: 1.5rem;
          }

          .social-link {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}