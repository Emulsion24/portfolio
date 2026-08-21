"use client";

import React, { useEffect, useMemo, useState } from "react";

/*
  HALFCLUTCH.TECH — 10 EXPERIMENTAL WEBSITE STRUCTURES

  This is intentionally NOT:
  HERO -> CARDS -> STACK -> FOOTER.

  Every experience uses a different information hierarchy.

  Replace DATA later with:
  - real GitHub API telemetry
  - database products
  - real reviews
  - real contact form
*/

const DATA = {
  developer: {
    name: "Shavandeb Kaiti",
    brand: "HALFCLUTCH",
    domain: "halfclutch.tech",
    role: "Software Developer · Builder · Product Maker",
    bio:
      "I build software products, sell ready-made applications, and help businesses build, repair and upgrade software.",
    email: "hello@halfclutch.tech",
    github: "github.com/halfclutch",
    linkedin: "linkedin.com/in/shavandeb",
  },

  stack: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Java",
    "Spring Boot",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "Git",
  ],

  projects: [
    {
      id: "01",
      name: "Tint Scholar",
      type: "Education Platform",
      tech: "React · Node · MongoDB",
      description:
        "A multi-role education management application for students, teachers and administrators.",
    },
    {
      id: "02",
      name: "Academic Management System",
      type: "Business Software",
      tech: "React · Node · JWT · MongoDB",
      description:
        "A complete academic administration system with authentication and role-based workflows.",
    },
    {
      id: "03",
      name: "Inventory & Billing",
      type: "Enterprise Application",
      tech: "Java · Spring Boot · MySQL",
      description:
        "Inventory tracking and billing software designed around operational workflows.",
    },
    {
      id: "04",
      name: "Favorite Movies",
      type: "Web Application",
      tech: "Node · Sequelize · MySQL",
      description:
        "A database-backed movie application demonstrating API and relational data architecture.",
    },
  ],

  products: [
    {
      id: "P01",
      name: "Admin Dashboard Kit",
      category: "Dashboard",
      price: "$49",
      description: "Reusable admin interface and dashboard foundation.",
    },
    {
      id: "P02",
      name: "Inventory Manager",
      category: "Business",
      price: "$79",
      description: "Ready-to-customize inventory and operational management system.",
    },
    {
      id: "P03",
      name: "School Management System",
      category: "Education",
      price: "$129",
      description: "Pre-built education administration platform.",
    },
    {
      id: "P04",
      name: "SaaS Starter",
      category: "Developer",
      price: "$89",
      description: "Foundation for launching a modern SaaS application.",
    },
    {
      id: "P05",
      name: "AI Application Starter",
      category: "AI / Developer",
      price: "$99",
      description: "Starter architecture for AI-powered applications.",
    },
  ],

  services: [
    {
      id: "S01",
      title: "CUSTOM BUILD",
      text: "Turn your business idea into a working software product.",
    },
    {
      id: "S02",
      title: "FIX EXISTING",
      text: "Debug, repair and stabilize an existing application.",
    },
    {
      id: "S03",
      title: "UPGRADE",
      text: "Add features, integrations, performance improvements and redesigns.",
    },
  ],

  reviews: [
    {
      name: "Client One",
      role: "Startup Founder",
      quote:
        "The application went from an idea to something our team could actually use.",
    },
    {
      name: "Client Two",
      role: "Business Owner",
      quote:
        "The existing application was repaired without throwing away the original work.",
    },
    {
      name: "Client Three",
      role: "Creator",
      quote:
        "Practical development, clear communication and a useful final product.",
    },
  ],

  git: {
    repositories: 27,
    commits: 864,
    contributions: 1284,
    pullRequests: 76,
    issues: 41,
    stars: 93,
    activeProjects: 6,
    streak: 18,
  },
};

const EXPERIENCES = [
  "DEVELOPER DESK",
  "INFINITE MACHINE",
  "SOFTWARE SHELF",
  "TERMINAL OS",
  "SOFTWARE FACTORY",
  "EDITORIAL",
  "BROWSER WORLD",
  "PROJECT NETWORK",
  "DEVELOPER TIMELINE",
  "ANTI-PORTFOLIO",
];

function useKeyboardNavigation(next, previous) {
  useEffect(() => {
    const handler = (event) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, previous]);
}

function GitStats({ compact = false }) {
  const stats = [
    ["REPOS", DATA.git.repositories],
    ["COMMITS", DATA.git.commits],
    ["CONTRIB", DATA.git.contributions],
    ["PR", DATA.git.pullRequests],
    ["ISSUES", DATA.git.issues],
    ["STARS", DATA.git.stars],
    ["ACTIVE", DATA.git.activeProjects],
    ["STREAK", `${DATA.git.streak}D`],
  ];

  return (
    <div className={`git-stats ${compact ? "compact" : ""}`}>
      {stats.map(([label, value]) => (
        <div key={label}>
          <small>{label}</small>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}

function StackStrip() {
  return (
    <div className="stack-strip">
      {DATA.stack.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ProjectList({ interactive = false }) {
  return (
    <div className={`project-list ${interactive ? "interactive" : ""}`}>
      {DATA.projects.map((project) => (
        <article key={project.id}>
          <span className="number">{project.id}</span>
          <div className="project-content">
            <small>{project.type}</small>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <em>{project.tech}</em>
          </div>
          {interactive && <span className="open">OPEN ↗</span>}
        </article>
      ))}
    </div>
  );
}

function ProductShelf({ selected, setSelected }) {
  const product = DATA.products[selected];

  return (
    <div className="product-experience">
      <div className="product-rail">
        {DATA.products.map((item, index) => (
          <button
            key={item.id}
            className={index === selected ? "active" : ""}
            onClick={() => setSelected(index)}
          >
            <span>{item.id}</span>
            <b>{item.name}</b>
            <small>{item.category}</small>
          </button>
        ))}
      </div>

      <div className="product-detail">
        <div className="product-object">
          <span>{product.id}</span>
          <strong>{product.price}</strong>
        </div>

        <div>
          <small>{product.category}</small>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button className="buy">BUY / REQUEST CUSTOMIZATION →</button>
        </div>
      </div>
    </div>
  );
}

function ReviewsTape() {
  return (
    <div className="review-tape">
      {DATA.reviews.concat(DATA.reviews).map((review, index) => (
        <article key={`${review.name}-${index}`}>
          <span>★★★★★</span>
          <p>“{review.quote}”</p>
          <b>{review.name}</b>
          <small>{review.role}</small>
        </article>
      ))}
    </div>
  );
}

function ServicesRail() {
  return (
    <div className="services-rail">
      {DATA.services.map((service) => (
        <article key={service.id}>
          <span>{service.id}</span>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <button>START →</button>
        </article>
      ))}
    </div>
  );
}

function ContactBlock({ inverted = false }) {
  return (
    <section className={`contact-block ${inverted ? "inverted" : ""}`}>
      <small>CONTACT / HALFCLUTCH.TECH</small>
      <h2>BUILD SOMETHING THAT SHOULD EXIST.</h2>
      <p>
        Need a custom application? Have a broken application? Or want a
        ready-made product?
      </p>
      <a href={`mailto:${DATA.developer.email}`}>
        {DATA.developer.email}
      </a>
    </section>
  );
}

function FloatingNav({ index, next, previous, random }) {
  return (
    <div className="floating-nav">
      <button onClick={previous}>←</button>
      <span>
        {String(index + 1).padStart(2, "0")} / 10
      </span>
      <button onClick={next}>→</button>
      <button onClick={random}>RND</button>
      <small>{EXPERIENCES[index]}</small>
    </div>
  );
}

/* ============================================================
   EXPERIENCE 01 — DEVELOPER DESK
============================================================ */

function DeveloperDesk() {
  const [active, setActive] = useState("projects");

  return (
    <div className="experience desk">
      <div className="desk-top">
        <div className="desk-brand">
          <span>HALFCLUTCH</span>
          <small>SOFTWARE WORKSHOP / 2026</small>
        </div>

        <div className="desk-clock">09:41:27</div>
      </div>

      <div className="desk-workspace">
        <div className="desk-monitor">
          <div className="monitor-bar">
            <span>● ● ●</span>
            <b>HALFCLUTCH_WORKSPACE</b>
          </div>

          {active === "projects" && (
            <div className="monitor-content">
              <small>SELECTED WORK</small>
              <h1>I BUILD SOFTWARE.</h1>
              <ProjectList interactive />
            </div>
          )}

          {active === "store" && (
            <div className="monitor-content">
              <small>SOFTWARE STORE</small>
              <h1>READY TO SHIP.</h1>
              <MiniProducts />
            </div>
          )}

          {active === "telemetry" && (
            <div className="monitor-content">
              <small>DEVELOPER TELEMETRY</small>
              <h1>CODE IN MOTION.</h1>
              <GitStats />
            </div>
          )}
        </div>

        <div className="desk-object laptop">
          <span>HC</span>
        </div>

        <div className="desk-object notebook">
          <small>IDEAS</small>
          <b>BUILD</b>
          <b>FIX</b>
          <b>SHIP</b>
        </div>

        <div className="desk-sticky">
          <span>WHAT DO YOU NEED?</span>
          <button onClick={() => setActive("projects")}>WORK</button>
          <button onClick={() => setActive("store")}>BUY</button>
          <button onClick={() => setActive("telemetry")}>DATA</button>
        </div>
      </div>

      <div className="desk-bottom">
        <div>
          <b>{DATA.developer.name}</b>
          <small>{DATA.developer.role}</small>
        </div>
        <div>
          <span>STATUS</span>
          <strong>● AVAILABLE FOR WORK</strong>
        </div>
      </div>

      <ContactBlock />
    </div>
  );
}

function MiniProducts() {
  return (
    <div className="mini-products">
      {DATA.products.map((product) => (
        <div key={product.id}>
          <small>{product.id}</small>
          <b>{product.name}</b>
          <strong>{product.price}</strong>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   EXPERIENCE 02 — INFINITE MACHINE
============================================================ */

function InfiniteMachine() {
  const [position, setPosition] = useState(0);

  const scenes = [
    {
      label: "IDEA",
      title: "YOU HAVE A PROBLEM.",
      text: "Maybe you need software.",
    },
    {
      label: "BUILD",
      title: "I TURN IT INTO A SYSTEM.",
      text: DATA.projects[0].name,
    },
    {
      label: "PRODUCT",
      title: "OR BUY SOMETHING READY.",
      text: DATA.products[0].name,
    },
    {
      label: "REPAIR",
      title: "OR FIX WHAT ALREADY EXISTS.",
      text: "Debug · Repair · Upgrade",
    },
    {
      label: "STACK",
      title: "BUILT WITH REAL TECHNOLOGY.",
      text: DATA.stack.slice(0, 6).join(" · "),
    },
    {
      label: "SIGNAL",
      title: "THE CODE KEEPS MOVING.",
      text: `${DATA.git.commits} simulated commits`,
    },
    {
      label: "PEOPLE",
      title: "CLIENTS LEAVE SIGNALS.",
      text: DATA.reviews[0].quote,
    },
  ];

  const scene = scenes[position];

  return (
    <div className="experience infinite">
      <div className="infinite-counter">
        {String(position + 1).padStart(2, "0")} / {scenes.length}
      </div>

      <div className="infinite-viewport">
        <div
          className="machine-wheel"
          style={{
            transform: `rotate(${position * -48}deg)`,
          }}
        >
          {scenes.map((item, index) => (
            <div
              className="wheel-label"
              key={item.label}
              style={{
                transform: `rotate(${index * 48}deg) translateY(-330px)`,
              }}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="infinite-core">
          <small>{scene.label}</small>
          <h1>{scene.title}</h1>
          <p>{scene.text}</p>
        </div>
      </div>

      <div className="infinite-controls">
        <button
          onClick={() =>
            setPosition((value) => (value - 1 + scenes.length) % scenes.length)
          }
        >
          PREVIOUS
        </button>

        <button
          onClick={() =>
            setPosition((value) => (value + 1) % scenes.length)
          }
        >
          NEXT TRANSFORMATION
        </button>
      </div>

      <section className="infinite-end">
        <StackStrip />
        <ServicesRail />
        <ContactBlock />
      </section>
    </div>
  );
}

/* ============================================================
   EXPERIENCE 03 — SOFTWARE SHELF
============================================================ */

function SoftwareShelf() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="experience shelf">
      <header className="shelf-header">
        <div>
          <b>HALFCLUTCH</b>
          <small>SOFTWARE SHOP / DEVELOPER STUDIO</small>
        </div>

        <div>
          <span>5 PRODUCTS</span>
          <span>4 PROJECTS</span>
        </div>
      </header>

      <div className="shelf-intro">
        <small>THE STORE IS THE PORTFOLIO.</small>
        <h1>SOFTWARE YOU CAN TAKE OFF THE SHELF.</h1>
      </div>

      <ProductShelf selected={selected} setSelected={setSelected} />

      <div className="shelf-drawer">
        <div>
          <span>CAN'T FIND WHAT YOU NEED?</span>
          <h2>REQUEST A CUSTOM VERSION.</h2>
        </div>
        <ServicesRail />
      </div>

      <section className="shelf-proof">
        <div>
          <small>BUILT BEFORE</small>
          <ProjectList />
        </div>

        <div>
          <small>BUILT WITH</small>
          <StackStrip />
        </div>

        <div>
          <small>CLIENT SIGNAL</small>
          <ReviewsTape />
        </div>
      </section>

      <ContactBlock />
    </div>
  );
}

/* ============================================================
   EXPERIENCE 04 — TERMINAL OS
============================================================ */

function TerminalOS() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    "HALFCLUTCH TERMINAL v1.0",
    "Type: help",
  ]);

  const execute = () => {
    const value = command.trim().toLowerCase();

    if (!value) return;

    const output = [`$ ${command}`];

    if (value === "help") {
      output.push(
        "about · projects · store · stack · services · reviews · git · contact · clear"
      );
    } else if (value === "about") {
      output.push(DATA.developer.bio);
    } else if (value === "projects") {
      DATA.projects.forEach((project) =>
        output.push(`${project.id}  ${project.name} — ${project.type}`)
      );
    } else if (value === "store") {
      DATA.products.forEach((product) =>
        output.push(`${product.id}  ${product.name} — ${product.price}`)
      );
    } else if (value === "stack") {
      output.push(DATA.stack.join(" · "));
    } else if (value === "services") {
      DATA.services.forEach((service) =>
        output.push(`${service.id}  ${service.title}`)
      );
    } else if (value === "reviews") {
      DATA.reviews.forEach((review) =>
        output.push(`${review.name}: "${review.quote}"`)
      );
    } else if (value === "git") {
      output.push(
        `repos=${DATA.git.repositories} commits=${DATA.git.commits} contributions=${DATA.git.contributions}`
      );
    } else if (value === "contact") {
      output.push(DATA.developer.email);
    } else if (value === "clear") {
      setHistory([]);
      setCommand("");
      return;
    } else {
      output.push(`command not found: ${value}`);
    }

    setHistory((items) => [...items, ...output]);
    setCommand("");
  };

  return (
    <div className="experience terminal-os">
      <div className="terminal-side">
        <span>HC</span>
        <small>01</small>
        <small>02</small>
        <small>03</small>
        <small>04</small>
      </div>

      <div className="terminal-main">
        <div className="terminal-titlebar">
          <b>root@halfclutch:~</b>
          <span>● ONLINE</span>
        </div>

        <div className="terminal-output">
          {history.map((line, index) => (
            <p key={`${line}-${index}`}>{line}</p>
          ))}

          <div className="terminal-input">
            <span>$</span>
            <input
              autoFocus
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") execute();
              }}
              placeholder="type a command..."
            />
          </div>
        </div>

        <div className="terminal-shortcuts">
          {["help", "about", "projects", "store", "stack", "services", "git"].map(
            (item) => (
              <button
                key={item}
                onClick={() => {
                  setCommand(item);
                  setTimeout(execute, 0);
                }}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   EXPERIENCE 05 — SOFTWARE FACTORY
============================================================ */

function SoftwareFactory() {
  const [station, setStation] = useState(0);

  const stations = [
    {
      name: "INPUT",
      title: "BRING THE PROBLEM.",
      content: (
        <div className="factory-input">
          <div>BUSINESS IDEA</div>
          <div>BROKEN APP</div>
          <div>NEW FEATURE</div>
          <div>READY-MADE SOFTWARE</div>
        </div>
      ),
    },
    {
      name: "ARCHITECT",
      title: "DESIGN THE SYSTEM.",
      content: <StackStrip />,
    },
    {
      name: "BUILD",
      title: "MAKE IT REAL.",
      content: <ProjectList />,
    },
    {
      name: "PRODUCT",
      title: "PUT IT ON THE SHELF.",
      content: <MiniProducts />,
    },
    {
      name: "TEST",
      title: "SEE WHAT PEOPLE SAY.",
      content: <ReviewsTape />,
    },
    {
      name: "SHIP",
      title: "WATCH THE SIGNAL.",
      content: <GitStats />,
    },
  ];

  const current = stations[station];

  return (
    <div className="experience factory">
      <div className="factory-header">
        <div>
          <b>HALFCLUTCH FACTORY</b>
          <small>SOFTWARE PRODUCTION LINE</small>
        </div>

        <div>
          STATION {String(station + 1).padStart(2, "0")} /{" "}
          {stations.length}
        </div>
      </div>

      <div className="factory-track">
        {stations.map((item, index) => (
          <button
            key={item.name}
            className={index === station ? "active" : ""}
            onClick={() => setStation(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{item.name}</b>
          </button>
        ))}
      </div>

      <div className="factory-stage">
        <div className="factory-machine">
          <div className="gear">HC</div>
        </div>

        <div className="factory-display">
          <small>{current.name}</small>
          <h1>{current.title}</h1>
          <div>{current.content}</div>
        </div>
      </div>

      <div className="factory-action">
        <button
          onClick={() =>
            setStation((value) => (value + 1) % stations.length)
          }
        >
          MOVE TO NEXT STATION →
        </button>
      </div>

      <ContactBlock />
    </div>
  );
}

/* ============================================================
   EXPERIENCE 06 — EDITORIAL
============================================================ */

function Editorial() {
  return (
    <div className="experience editorial">
      <header className="editorial-masthead">
        <span>THE</span>
        <h1>HALFCLUTCH</h1>
        <span>SOFTWARE EDITION · 2026</span>
      </header>

      <section className="editorial-cover">
        <div className="cover-index">VOL. 01</div>

        <div className="cover-main">
          <small>FEATURE STORY</small>
          <h2>THE DEVELOPER WHO BUILDS, SELLS AND REPAIRS SOFTWARE.</h2>
          <p>{DATA.developer.bio}</p>
        </div>

        <div className="cover-side">
          <span>READ</span>
          <span>BUILD</span>
          <span>BUY</span>
          <span>REPAIR</span>
        </div>
      </section>

      <section className="editorial-projects">
        <div className="editorial-label">01 / SELECTED WORK</div>
        <ProjectList interactive />
      </section>

      <section className="editorial-store">
        <div className="editorial-label">02 / THE SHOP</div>
        <MiniProducts />
      </section>

      <section className="editorial-stack">
        <div className="editorial-label">03 / TECHNOLOGY</div>
        <StackStrip />
      </section>

      <section className="editorial-reviews">
        <div className="editorial-label">04 / FIELD NOTES</div>
        <ReviewsTape />
      </section>

      <section className="editorial-data">
        <div className="editorial-label">05 / DEVELOPER SIGNAL</div>
        <GitStats />
      </section>

      <ContactBlock inverted />
    </div>
  );
}

/* ============================================================
   EXPERIENCE 07 — BROWSER WORLD
============================================================ */

function BrowserWorld() {
  const [tab, setTab] = useState("home");

  const tabs = [
    ["home", "HOME"],
    ["work", "WORK"],
    ["shop", "SHOP"],
    ["stack", "STACK"],
    ["services", "SERVICES"],
    ["git", "GIT"],
  ];

  return (
    <div className="experience browser-world">
      <div className="browser-shell">
        <div className="browser-chrome">
          <div className="browser-dots">● ● ●</div>

          <div className="address">
            <span>⌕</span>
            <b>https://halfclutch.tech/{tab}</b>
          </div>

          <span>⌁</span>
        </div>

        <div className="browser-tabs">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              className={tab === id ? "active" : ""}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="browser-page">
          {tab === "home" && (
            <div className="browser-home">
              <small>HALFCLUTCH.TECH</small>
              <h1>
                SOFTWARE
                <br />
                WITHOUT
                <br />
                THE TEMPLATE.
              </h1>
              <p>{DATA.developer.bio}</p>
            </div>
          )}

          {tab === "work" && (
            <div className="browser-page-content">
              <h2>SELECTED WORK</h2>
              <ProjectList interactive />
            </div>
          )}

          {tab === "shop" && (
            <div className="browser-page-content">
              <h2>SOFTWARE SHOP</h2>
              <MiniProducts />
            </div>
          )}

          {tab === "stack" && (
            <div className="browser-page-content">
              <h2>STACK</h2>
              <StackStrip />
            </div>
          )}

          {tab === "services" && (
            <div className="browser-page-content">
              <h2>WORK WITH ME</h2>
              <ServicesRail />
            </div>
          )}

          {tab === "git" && (
            <div className="browser-page-content">
              <h2>TELEMETRY</h2>
              <GitStats />
            </div>
          )}
        </div>
      </div>

      <ContactBlock />
    </div>
  );
}

/* ============================================================
   EXPERIENCE 08 — PROJECT NETWORK
============================================================ */

function ProjectNetwork() {
  const [selected, setSelected] = useState(0);

  const nodes = useMemo(
    () => [
      ...DATA.projects.map((project, index) => ({
        id: `project-${project.id}`,
        label: project.name,
        type: "PROJECT",
        x: [22, 48, 72, 38][index],
        y: [25, 16, 32, 52][index],
      })),
      ...DATA.products.map((product, index) => ({
        id: `product-${product.id}`,
        label: product.name,
        type: "PRODUCT",
        x: [18, 60, 80, 35, 67][index],
        y: [72, 67, 54, 82, 88][index],
      })),
    ],
    []
  );

  return (
    <div className="experience network">
      <div className="network-header">
        <div>
          <small>HALFCLUTCH / NETWORK</small>
          <h1>EVERYTHING CONNECTS.</h1>
        </div>

        <div className="network-legend">
          <span>● PROJECT</span>
          <span>● PRODUCT</span>
          <span>● SERVICE</span>
        </div>
      </div>

      <div className="network-canvas">
        <svg className="network-lines">
          {nodes.slice(0, -1).map((node, index) => {
            const next = nodes[index + 1];

            return (
              <line
                key={node.id}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
              />
            );
          })}
        </svg>

        <div className="network-center">
          <span>HC</span>
          <small>SOFTWARE</small>
        </div>

        {nodes.map((node, index) => (
          <button
            key={node.id}
            className={`network-node ${
              index === selected ? "selected" : ""
            }`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
            onClick={() => setSelected(index)}
          >
            <span>{node.type}</span>
            <b>{node.label}</b>
          </button>
        ))}
      </div>

      <div className="network-detail">
        <small>{nodes[selected]?.type}</small>
        <h2>{nodes[selected]?.label}</h2>
        <p>
          Connected to the HalfClutch ecosystem of projects, products,
          technology and software services.
        </p>
      </div>

      <div className="network-bottom">
        <StackStrip />
        <GitStats compact />
      </div>

      <ContactBlock />
    </div>
  );
}

/* ============================================================
   EXPERIENCE 09 — DEVELOPER TIMELINE
============================================================ */

function DeveloperTimeline() {
  const [active, setActive] = useState(0);

  const timeline = [
    {
      year: "01",
      title: "LEARN",
      text: "Computer science, systems and software development.",
      visual: <StackStrip />,
    },
    {
      year: "02",
      title: "BUILD",
      text: "Turn ideas into actual applications.",
      visual: <ProjectList />,
    },
    {
      year: "03",
      title: "PRODUCTIZE",
      text: "Turn useful software into products people can buy.",
      visual: <MiniProducts />,
    },
    {
      year: "04",
      title: "REPAIR",
      text: "Existing applications don't always need rebuilding.",
      visual: <ServicesRail />,
    },
    {
      year: "05",
      title: "SHIP",
      text: "Software gets better when it gets used.",
      visual: <GitStats />,
    },
    {
      year: "06",
      title: "KEEP BUILDING",
      text: "The next system starts with a conversation.",
      visual: (
        <a className="timeline-contact" href={`mailto:${DATA.developer.email}`}>
          {DATA.developer.email} →
        </a>
      ),
    },
  ];

  return (
    <div className="experience developer-timeline">
      <div className="timeline-heading">
        <small>HALFCLUTCH / THE STORY</small>
        <h1>FROM CODE TO SOFTWARE BUSINESS.</h1>
      </div>

      <div className="timeline-layout">
        <nav className="timeline-nav">
          {timeline.map((item, index) => (
            <button
              key={item.title}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{item.year}</span>
              <b>{item.title}</b>
            </button>
          ))}
        </nav>

        <div className="timeline-scene">
          <div className="timeline-year">{timeline[active].year}</div>

          <div>
            <small>CHAPTER</small>
            <h2>{timeline[active].title}</h2>
            <p>{timeline[active].text}</p>
          </div>

          <div className="timeline-visual">
            {timeline[active].visual}
          </div>
        </div>
      </div>

      <ReviewsTape />

      <ContactBlock />
    </div>
  );
}

/* ============================================================
   EXPERIENCE 10 — ANTI PORTFOLIO
============================================================ */

function AntiPortfolio() {
  const [active, setActive] = useState(null);

  const blocks = [
    {
      id: "identity",
      className: "anti-identity",
      content: (
        <>
          <small>THIS IS NOT A PORTFOLIO.</small>
          <h1>HALF<br />CLUTCH</h1>
          <p>{DATA.developer.role}</p>
        </>
      ),
    },
    {
      id: "work",
      className: "anti-work",
      content: (
        <>
          <span>THINGS I BUILT</span>
          <ProjectList interactive />
        </>
      ),
    },
    {
      id: "shop",
      className: "anti-shop",
      content: (
        <>
          <span>THINGS YOU CAN BUY</span>
          <MiniProducts />
        </>
      ),
    },
    {
      id: "stack",
      className: "anti-stack",
      content: (
        <>
          <span>THINGS I USE</span>
          <StackStrip />
        </>
      ),
    },
    {
      id: "signal",
      className: "anti-signal",
      content: (
        <>
          <span>THINGS THE CODE SAYS</span>
          <GitStats />
        </>
      ),
    },
    {
      id: "people",
      className: "anti-people",
      content: (
        <>
          <span>THINGS PEOPLE SAY</span>
          <ReviewsTape />
        </>
      ),
    },
    {
      id: "services",
      className: "anti-services",
      content: (
        <>
          <span>THINGS I CAN DO</span>
          <ServicesRail />
        </>
      ),
    },
  ];

  return (
    <div className="experience anti">
      <div className="anti-background">
        <span>BUILD</span>
        <span>SELL</span>
        <span>FIX</span>
        <span>SHIP</span>
      </div>

      <header className="anti-header">
        <b>HC</b>
        <span>HALFCLUTCH.TECH</span>
        <small>NO TEMPLATE / 2026</small>
      </header>

      <div className="anti-grid">
        {blocks.map((block) => (
          <button
            key={block.id}
            className={`anti-block ${block.className} ${
              active === block.id ? "selected" : ""
            }`}
            onClick={() =>
              setActive(active === block.id ? null : block.id)
            }
          >
            <div>{block.content}</div>
          </button>
        ))}
      </div>

      <div className="anti-hover">
        {active ? (
          <span>ACTIVE / {active.toUpperCase()}</span>
        ) : (
          <span>CLICK ANYTHING</span>
        )}
      </div>

      <ContactBlock inverted />
    </div>
  );
}

/* ============================================================
   ROOT
============================================================ */

export default function Page() {
  const [experience, setExperience] = useState(0);

  const next = () =>
    setExperience((value) => (value + 1) % EXPERIENCES.length);

  const previous = () =>
    setExperience(
      (value) => (value - 1 + EXPERIENCES.length) % EXPERIENCES.length
    );

  const random = () =>
    setExperience(Math.floor(Math.random() * EXPERIENCES.length));

  useKeyboardNavigation(next, previous);

  const screens = [
    <DeveloperDesk key="desk" />,
    <InfiniteMachine key="machine" />,
    <SoftwareShelf key="shelf" />,
    <TerminalOS key="terminal" />,
    <SoftwareFactory key="factory" />,
    <Editorial key="editorial" />,
    <BrowserWorld key="browser" />,
    <ProjectNetwork key="network" />,
    <DeveloperTimeline key="timeline" />,
    <AntiPortfolio key="anti" />,
  ];

  return (
    <main
      className={`halfclutch-app experience-${experience + 1}`}
    >
      <FloatingNav
        index={experience}
        next={next}
        previous={previous}
        random={random}
      />

      {screens[experience]}

      <style jsx global>{STYLES}</style>
    </main>
  );
}

/* ============================================================
   CSS
============================================================ */

const STYLES = `
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #080808;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.halfclutch-app {
  min-height: 100vh;
  overflow-x: hidden;
  color: #111;
}

.halfclutch-app button {
  color: inherit;
}

.floating-nav {
  position: fixed;
  z-index: 9999;
  right: 18px;
  top: 18px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border: 1px solid rgba(255,255,255,.18);
  background: rgba(8,8,8,.82);
  color: white;
  backdrop-filter: blur(20px);
  font: 10px monospace;
}

.floating-nav button {
  border: 1px solid rgba(255,255,255,.18);
  background: transparent;
  color: white;
  padding: 8px 11px;
}

.floating-nav button:hover {
  background: #dfff00;
  color: #050505;
}

.floating-nav span {
  min-width: 55px;
  text-align: center;
}

.floating-nav small {
  padding: 0 9px;
  opacity: .5;
}

/* ---------- Shared ---------- */

.project-list {
  display: flex;
  flex-direction: column;
}

.project-list article {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 20px;
  padding: 28px 0;
  border-bottom: 1px solid currentColor;
  border-color: color-mix(in srgb, currentColor 16%, transparent);
}

.project-list.interactive article {
  transition: transform .4s cubic-bezier(.2,.8,.2,1);
}

.project-list.interactive article:hover {
  transform: translateX(20px);
}

.project-list .number {
  color: #dfff00;
  font: 11px monospace;
}

.project-list small {
  display: block;
  opacity: .5;
  font: 10px monospace;
}

.project-list h3 {
  margin: 8px 0;
  font-size: 34px;
  letter-spacing: -.05em;
}

.project-list p {
  max-width: 600px;
  opacity: .6;
  line-height: 1.5;
}

.project-list em {
  color: #dfff00;
  font: 10px monospace;
  font-style: normal;
}

.project-list .open {
  align-self: center;
  font: 10px monospace;
}

.stack-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.stack-strip span {
  padding: 10px 13px;
  border: 1px solid currentColor;
  font: 10px monospace;
  transition:
    transform .25s ease,
    background .25s ease;
}

.stack-strip span:hover {
  transform: translateY(-5px) rotate(-2deg);
  background: #dfff00;
  color: #050505;
}

.git-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.git-stats div {
  min-height: 130px;
  padding: 18px;
  border: 1px solid currentColor;
  border-color: color-mix(in srgb, currentColor 18%, transparent);
}

.git-stats small,
.git-stats strong {
  display: block;
}

.git-stats small {
  font: 9px monospace;
  opacity: .45;
}

.git-stats strong {
  margin-top: 18px;
  font-size: 34px;
}

.git-stats.compact {
  grid-template-columns: repeat(4, 1fr);
}

.mini-products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}

.mini-products > div {
  min-height: 230px;
  padding: 20px;
  border: 1px solid currentColor;
  border-color: color-mix(in srgb, currentColor 18%, transparent);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform .35s cubic-bezier(.2,.8,.2,1),
    background .35s ease;
}

.mini-products > div:hover {
  transform: translateY(-14px) rotate(1deg);
  background: #dfff00;
  color: #050505;
}

.mini-products small {
  font: 9px monospace;
}

.mini-products b {
  font-size: 20px;
  letter-spacing: -.05em;
}

.mini-products strong {
  font-size: 30px;
}

.services-rail {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.services-rail article {
  min-height: 260px;
  padding: 25px;
  border: 1px solid currentColor;
  border-color: color-mix(in srgb, currentColor 18%, transparent);
}

.services-rail span {
  color: #dfff00;
  font: 10px monospace;
}

.services-rail h3 {
  font-size: 28px;
  letter-spacing: -.05em;
}

.services-rail p {
  opacity: .6;
  line-height: 1.5;
}

.services-rail button {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid currentColor;
  background: transparent;
}

.review-tape {
  display: flex;
  gap: 10px;
  width: max-content;
  animation: reviewMove 35s linear infinite;
}

.review-tape:hover {
  animation-play-state: paused;
}

.review-tape article {
  width: 350px;
  min-height: 210px;
  padding: 25px;
  border: 1px solid currentColor;
  border-color: color-mix(in srgb, currentColor 18%, transparent);
}

.review-tape article > span {
  color: #dfff00;
}

.review-tape p {
  line-height: 1.5;
}

.review-tape b,
.review-tape small {
  display: block;
}

.review-tape small {
  opacity: .45;
  margin-top: 4px;
}

.contact-block {
  padding: 130px 7vw;
  background: #dfff00;
  color: #080808;
}

.contact-block.inverted {
  background: #080808;
  color: #f7f7f7;
}

.contact-block small {
  font: 10px monospace;
}

.contact-block h2 {
  max-width: 1200px;
  margin: 35px 0;
  font-size: clamp(60px, 11vw, 170px);
  line-height: .7;
  letter-spacing: -.09em;
}

.contact-block p {
  max-width: 600px;
  line-height: 1.5;
}

.contact-block a {
  display: inline-block;
  margin-top: 20px;
  color: inherit;
  font-weight: bold;
}

/* ============================================================
   01 DESK
============================================================ */

.desk {
  min-height: 100vh;
  background:
    radial-gradient(circle at 30% 20%, #263328 0, transparent 28%),
    #151713;
  color: #eee;
  padding: 25px;
}

.desk-top,
.desk-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: monospace;
}

.desk-brand span,
.desk-brand small {
  display: block;
}

.desk-brand span {
  font-size: 22px;
  letter-spacing: -.08em;
}

.desk-brand small {
  opacity: .45;
  font-size: 9px;
  margin-top: 4px;
}

.desk-clock {
  color: #dfff00;
}

.desk-workspace {
  min-height: 850px;
  max-width: 1500px;
  margin: 40px auto;
  position: relative;
  perspective: 1000px;
}

.desk-monitor {
  position: absolute;
  left: 12%;
  top: 6%;
  width: 62%;
  min-height: 650px;
  background: #111;
  border: 12px solid #292b28;
  border-radius: 15px;
  box-shadow: 30px 40px 0 rgba(0,0,0,.35);
  transform: rotateX(2deg);
  overflow: hidden;
}

.monitor-bar {
  height: 36px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #292b28;
  font: 9px monospace;
}

.monitor-bar span {
  color: #dfff00;
}

.monitor-content {
  padding: 55px;
}

.monitor-content > small {
  color: #dfff00;
  font: 10px monospace;
}

.monitor-content > h1 {
  max-width: 700px;
  font-size: clamp(50px, 7vw, 100px);
  line-height: .75;
  letter-spacing: -.08em;
}

.desk-object {
  position: absolute;
  border-radius: 8px;
  box-shadow: 20px 25px 30px rgba(0,0,0,.35);
}

.laptop {
  right: 4%;
  bottom: 7%;
  width: 300px;
  height: 210px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg,#777,#202020);
  transform: rotate(-5deg);
  font-size: 50px;
}

.laptop span {
  border: 2px solid #dfff00;
  padding: 30px;
  color: #dfff00;
}

.notebook {
  left: 2%;
  bottom: 3%;
  width: 230px;
  height: 280px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #d4b05e;
  color: #241a0b;
  transform: rotate(5deg);
}

.notebook small {
  font: 9px monospace;
}

.desk-sticky {
  position: absolute;
  right: 7%;
  top: 8%;
  width: 180px;
  padding: 25px;
  background: #dfff00;
  color: #050505;
  transform: rotate(4deg);
  box-shadow: 15px 20px 30px rgba(0,0,0,.3);
}

.desk-sticky span,
.desk-sticky button {
  display: block;
  margin-bottom: 15px;
}

.desk-sticky button {
  width: 100%;
  padding: 8px;
  border: 1px solid #111;
  background: transparent;
  text-align: left;
}

/* ============================================================
   02 INFINITE
============================================================ */

.infinite {
  min-height: 1800px;
  background:
    radial-gradient(circle at 50% 35%, #283b2d, #050706 50%);
  color: #edffe2;
}

.infinite-counter {
  padding: 30px;
  color: #dfff00;
  font: 10px monospace;
}

.infinite-viewport {
  min-height: 1000px;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
}

.machine-wheel {
  position: absolute;
  width: 700px;
  height: 700px;
  border: 1px dashed rgba(223,255,0,.4);
  border-radius: 50%;
  transition: transform 1s cubic-bezier(.2,.8,.2,1);
}

.wheel-label {
  position: absolute;
  left: 50%;
  top: 50%;
  color: #dfff00;
  font: 10px monospace;
  transform-origin: 0 330px;
}

.infinite-core {
  position: relative;
  z-index: 2;
  width: min(700px,80vw);
  text-align: center;
}

.infinite-core small {
  color: #dfff00;
  font: 10px monospace;
}

.infinite-core h1 {
  margin: 30px 0;
  font-size: clamp(55px, 9vw, 130px);
  line-height: .72;
  letter-spacing: -.09em;
}

.infinite-core p {
  color: #93a08e;
}

.infinite-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.infinite-controls button {
  padding: 14px 20px;
  border: 1px solid #dfff00;
  background: transparent;
  color: #dfff00;
}

.infinite-end {
  padding-top: 250px;
}

.infinite-end > .stack-strip {
  padding: 80px 7vw;
}

/* ============================================================
   03 SHELF
============================================================ */

.shelf {
  background: #ece7dc;
  color: #171717;
}

.shelf-header {
  padding: 25px 5vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #171717;
  font: 10px monospace;
}

.shelf-header b,
.shelf-header small {
  display: block;
}

.shelf-header small {
  opacity: .5;
}

.shelf-header > div:last-child {
  display: flex;
  gap: 30px;
}

.shelf-intro {
  padding: 120px 7vw 80px;
}

.shelf-intro small {
  font: 10px monospace;
}

.shelf-intro h1 {
  max-width: 1100px;
  margin: 25px 0;
  font-size: clamp(65px, 11vw, 160px);
  line-height: .7;
  letter-spacing: -.09em;
}

.product-experience {
  min-height: 800px;
  display: grid;
  grid-template-columns: 30% 70%;
  border-top: 1px solid #171717;
  border-bottom: 1px solid #171717;
}

.product-rail {
  border-right: 1px solid #171717;
}

.product-rail button {
  width: 100%;
  min-height: 140px;
  padding: 25px;
  display: grid;
  grid-template-columns: 50px 1fr;
  text-align: left;
  border: 0;
  border-bottom: 1px solid #171717;
  background: transparent;
}

.product-rail button span {
  grid-row: span 2;
  font: 10px monospace;
}

.product-rail button small {
  opacity: .5;
}

.product-rail button.active {
  background: #171717;
  color: #ece7dc;
}

.product-detail {
  padding: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: center;
}

.product-object {
  height: 500px;
  background:
    linear-gradient(135deg,#dfff00,#6c7510);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px;
  box-shadow: 30px 30px 0 #171717;
  transform: rotate(-3deg);
  transition: transform .7s cubic-bezier(.2,.8,.2,1);
}

.product-object:hover {
  transform: rotate(3deg) translateY(-15px);
}

.product-object span {
  font: 12px monospace;
}

.product-object strong {
  font-size: 80px;
}

.product-detail h2 {
  font-size: 75px;
  line-height: .75;
  letter-spacing: -.08em;
}

.product-detail p {
  opacity: .6;
  line-height: 1.5;
}

.buy {
  padding: 15px;
  border: 1px solid #171717;
  background: transparent;
}

.shelf-drawer {
  padding: 100px 7vw;
  background: #171717;
  color: #eee;
}

.shelf-drawer h2 {
  font-size: 70px;
  line-height: .75;
}

.shelf-proof {
  padding: 100px 7vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.shelf-proof > div:last-child {
  grid-column: span 2;
  overflow: hidden;
}

/* ============================================================
   04 TERMINAL
============================================================ */

.terminal-os {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 80px 1fr;
  background: #020402;
  color: #b9ff76;
  font-family: monospace;
}

.terminal-side {
  border-right: 1px solid #163d16;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding-top: 30px;
}

.terminal-side span {
  font-size: 30px;
  color: #dfff00;
}

.terminal-side small {
  opacity: .4;
}

.terminal-main {
  max-width: 1200px;
  width: 90%;
  margin: auto;
  border: 1px solid #1e571e;
  box-shadow: 0 0 80px rgba(80,255,40,.08);
}

.terminal-titlebar {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1e571e;
}

.terminal-titlebar span {
  color: #dfff00;
}

.terminal-output {
  min-height: 600px;
  padding: 35px;
  font-size: 13px;
  line-height: 1.8;
}

.terminal-output p {
  margin: 0;
}

.terminal-input {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.terminal-input input {
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  color: #dfff00;
}

.terminal-shortcuts {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 10px;
  border-top: 1px solid #1e571e;
}

.terminal-shortcuts button {
  border: 1px solid #1e571e;
  background: transparent;
  color: #83c86b;
  padding: 8px;
}

/* ============================================================
   05 FACTORY
============================================================ */

.factory {
  min-height: 100vh;
  background:
    repeating-linear-gradient(
      135deg,
      #ddd8c8,
      #ddd8c8 35px,
      #d2cdbd 35px,
      #d2cdbd 70px
    );
  color: #171717;
}

.factory-header {
  padding: 25px 5vw;
  display: flex;
  justify-content: space-between;
  font: 10px monospace;
}

.factory-header b,
.factory-header small {
  display: block;
}

.factory-header small {
  opacity: .5;
}

.factory-track {
  display: grid;
  grid-template-columns: repeat(6,1fr);
  margin: 30px 5vw;
  border: 1px solid #171717;
}

.factory-track button {
  min-height: 100px;
  padding: 15px;
  border: 0;
  border-right: 1px solid #171717;
  background: #eee9db;
  text-align: left;
}

.factory-track button.active {
  background: #171717;
  color: #dfff00;
}

.factory-track span,
.factory-track b {
  display: block;
}

.factory-track span {
  font: 9px monospace;
}

.factory-stage {
  min-height: 800px;
  padding: 80px 7vw;
  display: grid;
  grid-template-columns: 35% 65%;
  gap: 70px;
  align-items: center;
}

.factory-machine {
  height: 500px;
  display: grid;
  place-items: center;
  border: 1px solid #171717;
  background:
    radial-gradient(circle,#333 0 4px,transparent 5px),
    #c6c1b2;
  background-size: 20px 20px;
}

.gear {
  width: 250px;
  height: 250px;
  display: grid;
  place-items: center;
  border: 20px dotted #171717;
  border-radius: 50%;
  font-size: 55px;
  animation: spin 12s linear infinite;
}

.factory-display small {
  font: 10px monospace;
}

.factory-display h1 {
  max-width: 800px;
  font-size: clamp(60px, 9vw, 130px);
  line-height: .7;
  letter-spacing: -.09em;
}

.factory-action {
  padding: 0 7vw 100px;
}

.factory-action button {
  padding: 15px 20px;
  border: 1px solid #171717;
  background: #dfff00;
}

/* ============================================================
   06 EDITORIAL
============================================================ */

.editorial {
  background: #efe6d5;
  color: #17120f;
  font-family: Georgia, "Times New Roman", serif;
}

.editorial-masthead {
  padding: 25px 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #17120f;
}

.editorial-masthead h1 {
  margin: 0;
  font-size: clamp(45px, 8vw, 110px);
  line-height: .7;
  letter-spacing: -.08em;
}

.editorial-masthead span {
  font: 9px monospace;
}

.editorial-cover {
  min-height: 90vh;
  display: grid;
  grid-template-columns: 100px 1fr 160px;
  padding: 80px 7vw;
  gap: 50px;
  border-bottom: 2px solid #17120f;
}

.cover-index {
  font: 10px monospace;
}

.cover-main small,
.editorial-label {
  font: 10px monospace;
}

.cover-main h2 {
  max-width: 1100px;
  margin: 40px 0;
  font-size: clamp(60px, 10vw, 150px);
  line-height: .68;
  letter-spacing: -.08em;
}

.cover-main p {
  max-width: 600px;
  font: 18px Arial,sans-serif;
  opacity: .65;
  line-height: 1.5;
}

.cover-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 40px;
}

.editorial-projects,
.editorial-store,
.editorial-stack,
.editorial-reviews,
.editorial-data {
  padding: 100px 7vw;
  border-bottom: 2px solid #17120f;
}

.editorial-projects .project-list h3 {
  font-size: 50px;
}

.editorial-store .mini-products {
  margin-top: 50px;
}

.editorial-stack .stack-strip {
  margin-top: 50px;
}

.editorial-reviews {
  overflow: hidden;
}

.editorial-data .git-stats {
  margin-top: 50px;
}

/* ============================================================
   07 BROWSER
============================================================ */

.browser-world {
  min-height: 100vh;
  padding: 70px 4vw;
  background:
    radial-gradient(circle at 30% 20%,#9dc8ff,transparent 25%),
    #c8d4df;
}

.browser-shell {
  min-height: 850px;
  border: 3px solid #151515;
  border-radius: 18px;
  overflow: hidden;
  background: #f6f7f8;
  box-shadow: 30px 40px 0 rgba(0,0,0,.15);
}

.browser-chrome {
  height: 60px;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 100px 1fr 40px;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #bbb;
  background: #dedfe1;
}

.browser-dots {
  color: #d33;
  font-size: 9px;
  letter-spacing: 3px;
}

.address {
  height: 35px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 15px;
  border-radius: 20px;
  background: #fff;
  font: 10px monospace;
}

.browser-tabs {
  display: flex;
  padding: 0 20px;
  border-bottom: 1px solid #bbb;
  background: #e6e7e9;
}

.browser-tabs button {
  padding: 15px 20px;
  border: 0;
  background: transparent;
  font: 10px monospace;
}

.browser-tabs button.active {
  background: #f6f7f8;
  border-bottom: 2px solid #2877e8;
}

.browser-page {
  min-height: 730px;
  padding: 70px;
}

.browser-home small {
  font: 10px monospace;
  color: #2877e8;
}

.browser-home h1 {
  max-width: 1000px;
  font-size: clamp(70px, 12vw, 180px);
  line-height: .7;
  letter-spacing: -.09em;
}

.browser-home p {
  max-width: 650px;
  color: #777;
}

.browser-page-content h2 {
  font-size: 80px;
  line-height: .7;
  letter-spacing: -.08em;
}

.browser-page-content .services-rail {
  margin-top: 50px;
}

/* ============================================================
   08 NETWORK
============================================================ */

.network {
  min-height: 100vh;
  background: #05060a;
  color: #e9ecff;
}

.network-header {
  min-height: 40vh;
  padding: 80px 7vw;
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.network-header small {
  color: #7e8cff;
  font: 10px monospace;
}

.network-header h1 {
  max-width: 900px;
  font-size: clamp(70px, 12vw, 170px);
  line-height: .68;
  letter-spacing: -.1em;
}

.network-legend {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font: 10px monospace;
}

.network-legend span:first-child {
  color: #7e8cff;
}

.network-legend span:nth-child(2) {
  color: #dfff00;
}

.network-legend span:last-child {
  color: #ff6eaa;
}

.network-canvas {
  position: relative;
  height: 800px;
  border-top: 1px solid #20243c;
  border-bottom: 1px solid #20243c;
  overflow: hidden;
}

.network-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.network-lines line {
  stroke: #343c68;
  stroke-width: 1;
  stroke-dasharray: 6 10;
  animation: dash 8s linear infinite;
}

.network-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 170px;
  height: 170px;
  transform: translate(-50%,-50%);
  display: grid;
  place-items: center;
  align-content: center;
  border: 1px solid #7e8cff;
  border-radius: 50%;
  box-shadow: 0 0 80px rgba(126,140,255,.25);
}

.network-center span {
  font-size: 40px;
}

.network-center small {
  color: #7e8cff;
  font: 9px monospace;
}

.network-node {
  position: absolute;
  width: 150px;
  min-height: 80px;
  transform: translate(-50%,-50%);
  padding: 15px;
  text-align: left;
  border: 1px solid #303655;
  background: rgba(7,8,15,.8);
  color: white;
  backdrop-filter: blur(10px);
  transition: .35s cubic-bezier(.2,.8,.2,1);
}

.network-node:hover,
.network-node.selected {
  transform: translate(-50%,-50%) scale(1.15);
  border-color: #dfff00;
  box-shadow: 0 0 30px rgba(223,255,0,.12);
}

.network-node span,
.network-node b {
  display: block;
}

.network-node span {
  color: #7e8cff;
  font: 8px monospace;
}

.network-node b {
  margin-top: 8px;
  font-size: 13px;
}

.network-detail {
  padding: 80px 7vw;
}

.network-detail small {
  color: #dfff00;
  font: 10px monospace;
}

.network-detail h2 {
  font-size: 90px;
  line-height: .7;
  letter-spacing: -.08em;
}

.network-detail p {
  max-width: 600px;
  color: #777;
}

.network-bottom {
  padding: 70px 7vw;
  display: grid;
  gap: 40px;
}

/* ============================================================
   09 TIMELINE
============================================================ */

.developer-timeline {
  background: #f0eee7;
  color: #171717;
}

.timeline-heading {
  min-height: 70vh;
  padding: 120px 7vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #171717;
}

.timeline-heading small {
  font: 10px monospace;
}

.timeline-heading h1 {
  max-width: 1200px;
  margin: 40px 0 0;
  font-size: clamp(70px, 13vw, 190px);
  line-height: .68;
  letter-spacing: -.1em;
}

.timeline-layout {
  display: grid;
  grid-template-columns: 30% 70%;
  min-height: 900px;
}

.timeline-nav {
  border-right: 1px solid #171717;
}

.timeline-nav button {
  width: 100%;
  padding: 28px;
  display: grid;
  grid-template-columns: 50px 1fr;
  text-align: left;
  border: 0;
  border-bottom: 1px solid #171717;
  background: transparent;
}

.timeline-nav button span {
  font: 10px monospace;
}

.timeline-nav button.active {
  background: #171717;
  color: #dfff00;
}

.timeline-scene {
  min-height: 900px;
  padding: 80px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-content: center;
}

.timeline-year {
  font-size: 180px;
  color: #d3d0c6;
  line-height: .5;
}

.timeline-scene h2 {
  margin: 50px 0 15px;
  font-size: 90px;
  line-height: .7;
  letter-spacing: -.08em;
}

.timeline-scene p {
  max-width: 600px;
  color: #777;
}

.timeline-visual {
  margin-top: 70px;
}

.timeline-contact {
  display: inline-block;
  color: inherit;
  font-size: 35px;
}

/* ============================================================
   10 ANTI PORTFOLIO
============================================================ */

.anti {
  position: relative;
  min-height: 100vh;
  background: #f8f4e9;
  color: #121212;
  padding-bottom: 100px;
}

.anti-background {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  pointer-events: none;
  overflow: hidden;
}

.anti-background span {
  font-size: 15vw;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0,0,0,.08);
  transform: rotate(-30deg);
}

.anti-header {
  position: relative;
  z-index: 2;
  padding: 25px 5vw;
  display: flex;
  justify-content: space-between;
  font: 10px monospace;
  border-bottom: 1px solid #121212;
}

.anti-header b {
  font-size: 25px;
}

.anti-grid {
  position: relative;
  z-index: 2;
  min-height: 1400px;
  margin: 70px 5vw;
}

.anti-block {
  position: absolute;
  padding: 30px;
  text-align: left;
  border: 1px solid #121212;
  background: rgba(248,244,233,.86);
  backdrop-filter: blur(8px);
  overflow: hidden;
  transition:
    transform .5s cubic-bezier(.2,.8,.2,1),
    width .5s ease,
    height .5s ease,
    z-index .1s;
}

.anti-block:hover,
.anti-block.selected {
  z-index: 20;
  background: #dfff00;
  transform: rotate(0deg) scale(1.03);
}

.anti-block > div > span {
  font: 10px monospace;
}

.anti-identity {
  left: 2%;
  top: 3%;
  width: 48%;
  min-height: 500px;
  transform: rotate(-3deg);
}

.anti-identity h1 {
  margin: 40px 0;
  font-size: clamp(70px, 10vw, 150px);
  line-height: .62;
  letter-spacing: -.1em;
}

.anti-work {
  right: 2%;
  top: 8%;
  width: 45%;
  min-height: 550px;
  transform: rotate(4deg);
}

.anti-shop {
  left: 12%;
  top: 43%;
  width: 42%;
  min-height: 500px;
  transform: rotate(2deg);
}

.anti-stack {
  right: 8%;
  top: 47%;
  width: 38%;
  min-height: 300px;
  transform: rotate(-4deg);
}

.anti-signal {
  left: 35%;
  top: 64%;
  width: 40%;
  min-height: 300px;
  transform: rotate(1deg);
}

.anti-people {
  left: 2%;
  top: 76%;
  width: 48%;
  min-height: 350px;
  transform: rotate(-4deg);
}

.anti-services {
  right: 3%;
  top: 79%;
  width: 45%;
  min-height: 400px;
  transform: rotate(3deg);
}

.anti-hover {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  padding: 10px 15px;
  background: #121212;
  color: #dfff00;
  font: 9px monospace;
}

/* ---------- animations ---------- */

@keyframes reviewMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: -100;
  }
}

/* ---------- Responsive ---------- */

@media (max-width: 850px) {
  .floating-nav {
    left: 8px;
    right: 8px;
    justify-content: center;
  }

  .floating-nav small {
    display: none;
  }

  .desk {
    padding: 15px;
  }

  .desk-workspace {
    min-height: 950px;
  }

  .desk-monitor {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 650px;
  }

  .desk-object {
    display: none;
  }

  .desk-sticky {
    right: 10px;
    top: 680px;
  }

  .git-stats,
  .git-stats.compact,
  .mini-products,
  .services-rail {
    grid-template-columns: 1fr 1fr;
  }

  .product-experience {
    grid-template-columns: 1fr;
  }

  .product-rail {
    border-right: 0;
    border-bottom: 1px solid #171717;
  }

  .product-detail {
    grid-template-columns: 1fr;
    padding: 40px 25px;
  }

  .product-object {
    height: 350px;
  }

  .shelf-proof {
    grid-template-columns: 1fr;
  }

  .shelf-proof > div:last-child {
    grid-column: auto;
  }

  .terminal-os {
    grid-template-columns: 50px 1fr;
  }

  .factory-track {
    grid-template-columns: repeat(2,1fr);
  }

  .factory-stage {
    grid-template-columns: 1fr;
  }

  .factory-machine {
    height: 300px;
  }

  .editorial-cover {
    grid-template-columns: 1fr;
  }

  .cover-side {
    flex-direction: row;
  }

  .browser-world {
    padding: 50px 10px;
  }

  .browser-chrome {
    grid-template-columns: 60px 1fr;
  }

  .browser-chrome > span:last-child {
    display: none;
  }

  .browser-tabs {
    overflow-x: auto;
  }

  .browser-tabs button {
    white-space: nowrap;
  }

  .browser-page {
    padding: 40px 25px;
  }

  .network-header {
    display: block;
    padding: 100px 25px 50px;
  }

  .network-legend {
    margin-top: 40px;
  }

  .network-canvas {
    height: 600px;
  }

  .network-node {
    width: 110px;
  }

  .network-center {
    width: 120px;
    height: 120px;
  }

  .timeline-layout {
    grid-template-columns: 1fr;
  }

  .timeline-nav {
    border-right: 0;
  }

  .timeline-scene {
    min-height: 700px;
    padding: 50px 25px;
  }

  .timeline-year {
    font-size: 120px;
  }

  .anti-grid {
    min-height: auto;
    margin: 40px 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .anti-block,
  .anti-block:hover,
  .anti-block.selected {
    position: relative;
    inset: auto;
    width: 100%;
    min-height: auto;
    transform: none;
  }

  .anti-identity {
    min-height: 450px;
  }

  .anti-block .mini-products,
  .anti-block .services-rail,
  .anti-block .git-stats {
    grid-template-columns: 1fr;
  }

  .contact-block {
    padding: 90px 25px;
  }
}

@media (max-width: 550px) {
  .git-stats,
  .git-stats.compact,
  .mini-products,
  .services-rail {
    grid-template-columns: 1fr;
  }

  .desk-monitor {
    min-height: 750px;
  }

  .monitor-content {
    padding: 30px 20px;
  }

  .monitor-content > h1 {
    font-size: 55px;
  }

  .machine-wheel {
    width: 500px;
    height: 500px;
  }

  .wheel-label {
    transform-origin: 0 230px !important;
  }

  .infinite-core h1 {
    font-size: 55px;
  }

  .factory-track {
    grid-template-columns: 1fr 1fr;
  }

  .factory-track button {
    min-height: 75px;
  }

  .cover-main h2 {
    font-size: 60px;
  }

  .browser-home h1 {
    font-size: 65px;
  }

  .network-node {
    width: 90px;
    padding: 8px;
  }

  .network-node b {
    font-size: 10px;
  }

  .network-node span {
    font-size: 7px;
  }

  .network-detail h2 {
    font-size: 65px;
  }

  .timeline-heading h1 {
    font-size: 65px;
  }

  .timeline-scene h2 {
    font-size: 65px;
  }

  .contact-block h2 {
    font-size: 60px;
  }
}
`;
