"use client";

import React, { useMemo, useState } from "react";

/*
  HALFCLUTCH — 30 LANDING EXPERIENCES
  10 LIGHT + 10 DARK + 10 NEON
  Native JavaScript / JSX only.

  Put this file at:
  app/all5/page.jsx
*/

const DATA = {
  developer: {
    name: "Shavandeb Kaiti",
    brand: "HALFCLUTCH",
    domain: "halfclutch.tech",
    role: "Software Developer · Product Builder · Fixer",
    bio:
      "I build pre-built software products, custom applications and practical fixes for businesses, creators, developers and individuals.",
    email: "hello@halfclutch.tech",
    location: "Remote / Global",
  },

  projects: [
    ["01", "Tint Scholar", "Education platform", "React · Node.js · MongoDB"],
    ["02", "Academic Management System", "School administration", "React · Node.js · JWT"],
    ["03", "Inventory & Billing", "Business operations", "Java · Spring Boot · MySQL"],
    ["04", "Favorite Movies", "Media application", "Node.js · Sequelize · MySQL"],
    ["05", "NGO Management Platform", "NGO operations", "Next.js · Node · MongoDB"],
    ["06", "Donation Management", "Donation workflow", "React · Node · PhonePe"],
    ["07", "AI Content Tool", "Creator productivity", "Next.js · AI APIs"],
    ["08", "Creator Analytics", "Social analytics", "React · Recharts · APIs"],
    ["09", "SaaS Admin Platform", "Business dashboard", "Next.js · Supabase"],
    ["10", "Portfolio Engine", "Developer portfolio", "Next.js · Framer Motion"],
  ],

  products: [
    ["P01", "Admin Dashboard Kit", "Dashboard", "$49"],
    ["P02", "Inventory Manager", "Business", "$79"],
    ["P03", "School Management System", "Education", "$129"],
    ["P04", "SaaS Starter", "Developer", "$89"],
    ["P05", "AI Application Starter", "AI", "$99"],
    ["P06", "Creator Analytics Kit", "Creator", "$69"],
    ["P07", "NGO Management Kit", "Non-profit", "$99"],
    ["P08", "Billing & Invoice Engine", "Finance", "$59"],
    ["P09", "Auth + Admin Starter", "Developer", "$39"],
    ["P10", "Portfolio Engine", "Portfolio", "$45"],
  ],

  reviews: [
    ["01", "Aarav Mehta", "Startup Founder", 5, "We had an idea and HalfClutch turned it into something our team could actually operate."],
    ["02", "Maya Fernandes", "Business Owner", 5, "The existing application was repaired instead of being unnecessarily rebuilt from zero."],
    ["03", "Daniel Brooks", "Indie Hacker", 5, "The pre-built software saved us weeks of development time."],
    ["04", "Sofia Martin", "Creator", 5, "The dashboard made our creator workflow much easier to understand."],
    ["05", "Rahul Sen", "Agency Owner", 4, "Fast communication and a practical approach to the technical problems."],
    ["06", "Emma Wilson", "Product Manager", 5, "The product was easy to customize after delivery."],
    ["07", "Kabir Roy", "Founder", 5, "A very useful combination of ready-made products and custom development."],
    ["08", "Lucas Chen", "Developer", 4, "Good architecture and the code was straightforward to extend."],
    ["09", "Nina Patel", "Operations Lead", 5, "Our old workflow became much more manageable."],
    ["10", "Oliver Stone", "Creator", 5, "The portfolio and product experience felt completely different from typical developer sites."],
  ],

  stack: [
    "React", "Next.js", "JavaScript", "TypeScript", "Node.js", "Express",
    "MongoDB", "Mongoose", "MySQL", "Sequelize", "Java", "Spring Boot",
    "Tailwind CSS", "Zustand", "Framer Motion", "Vite", "JWT", "Cloudinary",
    "Multer", "Supabase", "AWS S3", "Docker", "GitHub", "Vercel", "Railway",
    "Render", "Hostinger", "REST APIs", "Recharts", "Figma"
  ],

  services: [
    ["01", "CUSTOM BUILD", "New application from idea to deployment."],
    ["02", "APPLICATION FIX", "Debug and repair an existing application."],
    ["03", "FEATURE UPGRADE", "Add features without replacing the whole product."],
    ["04", "UI / UX REBUILD", "Modernize an outdated interface."],
    ["05", "API INTEGRATION", "Connect payments, AI, storage and external services."],
    ["06", "PERFORMANCE", "Find slow paths and improve application performance."],
  ],

  git: {
    repositories: 34,
    commits: 1268,
    contributions: 1842,
    pullRequests: 112,
    issues: 67,
    stars: 146,
    activeProjects: 8,
    streak: 27,
  }
};

const NAMES = [
  "EDITORIAL GRID",
  "SWISS POSTER",
  "ARCHITECT TABLE",
  "PRODUCT CATALOG",
  "NEWSPAPER",
  "MUSEUM WALL",
  "BLUEPRINT",
  "LUXURY INDEX",
  "BRUTALIST BOARD",
  "PAPER MAP",
  "NIGHT TERMINAL",
  "DARK ARCHIVE",
  "CONTROL ROOM",
  "CINEMA",
  "SYSTEM MONITOR",
  "SPACE STATION",
  "DATA VAULT",
  "COMMAND DECK",
  "BLACK BOOK",
  "NOIR STUDIO",
  "CYBER GRID",
  "NEON ARCADE",
  "HOLOGRAM",
  "SYNTHWAVE",
  "CYBERPUNK CITY",
  "NEON TERMINAL",
  "LASER SHOW",
  "FUTURE MARKET",
  "DIGITAL DREAM",
  "GLITCH PLAYGROUND"
];

function Projects({ mode = "normal" }) {
  return (
    <div className={"data-projects " + mode}>
      {DATA.projects.map((p) => (
        <article key={p[0]}>
          <span>{p[0]}</span>
          <div>
            <small>{p[2]}</small>
            <h3>{p[1]}</h3>
            <em>{p[3]}</em>
          </div>
        </article>
      ))}
    </div>
  );
}

function Products({ mode = "normal" }) {
  return (
    <div className={"data-products " + mode}>
      {DATA.products.map((p) => (
        <article key={p[0]}>
          <span>{p[0]}</span>
          <div>
            <small>{p[2]}</small>
            <h3>{p[1]}</h3>
          </div>
          <b>{p[3]}</b>
        </article>
      ))}
    </div>
  );
}

function Reviews({ mode = "normal" }) {
  return (
    <div className={"data-reviews " + mode}>
      {DATA.reviews.map((r) => (
        <article key={r[0]}>
          <small>{r[0]} / {r[2]}</small>
          <div className="stars">{"★".repeat(r[3])}</div>
          <p>“{r[4]}”</p>
          <strong>{r[1]}</strong>
        </article>
      ))}
    </div>
  );
}

function Stack() {
  return (
    <div className="data-stack">
      {DATA.stack.map((x) => <span key={x}>{x}</span>)}
    </div>
  );
}

function Services() {
  return (
    <div className="data-services">
      {DATA.services.map((x) => (
        <article key={x[0]}>
          <small>{x[0]}</small>
          <h3>{x[1]}</h3>
          <p>{x[2]}</p>
        </article>
      ))}
    </div>
  );
}

function Git({ compact = false }) {
  const stats = [
    ["REPOS", DATA.git.repositories],
    ["COMMITS", DATA.git.commits],
    ["CONTRIB", DATA.git.contributions],
    ["PULL REQUESTS", DATA.git.pullRequests],
    ["ISSUES", DATA.git.issues],
    ["STARS", DATA.git.stars],
    ["ACTIVE", DATA.git.activeProjects],
    ["STREAK", DATA.git.streak + "D"],
  ];

  return (
    <div className={"data-git " + (compact ? "compact" : "")}>
      {stats.map((x) => (
        <div key={x[0]}>
          <small>{x[0]}</small>
          <strong>{x[1]}</strong>
        </div>
      ))}
    </div>
  );
}

function Contact({ dark = false }) {
  return (
    <section className={"data-contact " + (dark ? "dark" : "")}>
      <small>HALFCLUTCH / CONTACT</small>
      <h2>BUILD. BUY. FIX.</h2>
      <p>{DATA.developer.bio}</p>
      <a href={"mailto:" + DATA.developer.email}>{DATA.developer.email} →</a>
    </section>
  );
}

/* =========================
   LIGHT 01 — EDITORIAL GRID
========================= */

function Light01() {
  return (
    <div className="experience light l01">
      <header className="l-header"><b>HALFCLUTCH</b><span>SOFTWARE / PRODUCTS / SERVICES</span><small>2026</small></header>
      <main className="editorial-grid">
        <section className="editorial-title"><small>01 — DEVELOPER / PRODUCT MAKER</small><h1>Software<br /><i>without</i><br />the template.</h1><p>{DATA.developer.bio}</p></section>
        <section className="editorial-projects"><small>SELECTED WORK / 10</small><Projects /></section>
        <section className="editorial-store"><small>SOFTWARE STORE / 10</small><Products /></section>
        <section className="editorial-stack"><small>TOOLS / 30+</small><Stack /></section>
        <section className="editorial-reviews"><small>CLIENT ARCHIVE / 10</small><Reviews /></section>
        <section className="editorial-git"><small>CODE SIGNAL</small><Git /></section>
      </main>
      <Contact />
    </div>
  );
}

/* LIGHT 02 — SWISS POSTER */

function Light02() {
  const [tab, setTab] = useState("projects");
  const content = { projects: <Projects />, store: <Products />, services: <Services />, stack: <Stack />, reviews: <Reviews />, git: <Git /> };

  return (
    <div className="experience light l02 swiss">
      <header><b>HC/01</b><span>HALFCLUTCH</span><small>INDEPENDENT SOFTWARE STUDIO</small></header>
      <div className="swiss-hero">
        <div className="swiss-red">+</div>
        <div><small>SHAVANDEB KAITI</small><h1>BUILD<br />BETTER.</h1><p>Pre-built software + custom development + application repair.</p></div>
      </div>
      <nav className="swiss-nav">{Object.keys(content).map((x) => <button className={tab === x ? "active" : ""} onClick={() => setTab(x)} key={x}>{x}</button>)}</nav>
      <section className="swiss-content"><small>MODULE / {tab}</small>{content[tab]}</section>
      <Contact />
    </div>
  );
}

/* LIGHT 03 — ARCHITECT TABLE */

function Light03() {
  const [selected, setSelected] = useState("01");
  const project = DATA.projects.find((x) => x[0] === selected) || DATA.projects[0];

  return (
    <div className="experience light l03 architect">
      <header><b>HALFCLUTCH / ARCHITECTURE</b><span>DRAWING 001–010</span></header>
      <div className="architect-board">
        <div className="architect-side"><small>PROJECT DRAWINGS</small>{DATA.projects.map((p) => <button key={p[0]} className={selected === p[0] ? "active" : ""} onClick={() => setSelected(p[0])}><span>{p[0]}</span>{p[1]}</button>)}</div>
        <div className="architect-main">
          <div className="architect-cross">+</div>
          <small>DRAWING / {project[0]}</small>
          <h1>{project[1]}</h1>
          <p>{project[2]}</p>
          <em>{project[3]}</em>
          <div className="architect-lines" />
          <h3>STORE / SERVICES / REVIEWS</h3>
          <Products mode="compact" />
        </div>
      </div>
      <div className="architect-lower"><Services /><Git /></div>
    </div>
  );
}

/* LIGHT 04 — CATALOG */

function Light04() {
  return (
    <div className="experience light l04 catalog">
      <header><div><small>VOLUME 04</small><h1>HALFCLUTCH</h1></div><span>SOFTWARE CATALOGUE</span></header>
      <div className="catalog-cover"><div>HC</div><h2>READY-MADE<br />SOFTWARE<br />FOR REAL WORK.</h2></div>
      <section><small>PRODUCT INDEX / 10</small><Products /></section>
      <section><small>PROJECT INDEX / 10</small><Projects /></section>
      <section><small>SERVICE INDEX / 06</small><Services /></section>
      <section><small>CLIENT INDEX / 10</small><Reviews /></section>
      <section><small>TECHNICAL INDEX</small><Stack /><Git /></section>
    </div>
  );
}

/* LIGHT 05 — NEWSPAPER */

function Light05() {
  return (
    <div className="experience light l05 newspaper">
      <header><span>THE</span><h1>HALFCLUTCH</h1><b>SOFTWARE DAILY</b></header>
      <div className="news-date">FRIDAY / GLOBAL SOFTWARE EDITION / 2026</div>
      <main className="news-layout">
        <article className="news-main"><small>BREAKING</small><h2>A DEVELOPER BUILDS A SOFTWARE BUSINESS.</h2><p>{DATA.developer.bio}</p></article>
        <article><small>PROJECTS</small><Projects mode="tiny" /></article>
        <article><small>MARKET</small><Products mode="tiny" /></article>
        <article><small>CLIENT VOICES</small><Reviews mode="tiny" /></article>
        <article><small>TECH</small><Stack /></article>
        <article><small>CODE SIGNAL</small><Git compact /></article>
      </main>
      <Contact />
    </div>
  );
}

/* LIGHT 06 — MUSEUM WALL */

function Light06() {
  const [room, setRoom] = useState(0);
  const rooms = ["PROJECTS", "STORE", "SERVICES", "REVIEWS", "STACK", "GIT"];
  const content = [<Projects />, <Products />, <Services />, <Reviews />, <Stack />, <Git />];

  return (
    <div className="experience light l06 museum">
      <header><small>THE HALFCLUTCH COLLECTION</small><b>PERMANENT / 2026</b></header>
      <div className="museum-room">
        <nav>{rooms.map((r, i) => <button className={room === i ? "active" : ""} onClick={() => setRoom(i)} key={r}>{String(i + 1).padStart(2, "0")} / {r}</button>)}</nav>
        <main>
          <div className="museum-art"><span>HC</span></div>
          <small>ROOM {String(room + 1).padStart(2, "0")}</small>
          <h1>{rooms[room]}</h1>
          {content[room]}
        </main>
      </div>
      <Contact />
    </div>
  );
}

/* LIGHT 07 — BLUEPRINT */

function Light07() {
  const [layer, setLayer] = useState("BUILD");
  const content = {
    BUILD: <Projects />,
    BUY: <Products />,
    FIX: <Services />,
    PEOPLE: <Reviews />,
    STACK: <Stack />,
    SIGNAL: <Git />
  };

  return (
    <div className="experience light l07 blueprint-light">
      <div className="blue-grid" />
      <header><b>HC-SYSTEM / 2026</b><span>SOFTWARE ENGINEERING BLUEPRINT</span></header>
      <section className="blue-title"><small>SYSTEM ARCHITECTURE</small><h1>BUILD<br />THE<br />USEFUL.</h1></section>
      <nav>{Object.keys(content).map((x) => <button className={layer === x ? "active" : ""} onClick={() => setLayer(x)} key={x}>{x}</button>)}</nav>
      <main><div className="cross">+</div><small>LAYER / {layer}</small><h2>{layer}</h2>{content[layer]}</main>
      <Contact />
    </div>
  );
}

/* LIGHT 08 — LUXURY INDEX */

function Light08() {
  return (
    <div className="experience light l08 luxury">
      <header><span>H</span><b>HALFCLUTCH</b><small>PRIVATE SOFTWARE STUDIO</small></header>
      <section className="luxury-hero"><small>SHAVANDEB KAITI / FOUNDER</small><h1>Digital<br /><i>objects</i><br />with purpose.</h1><p>{DATA.developer.bio}</p></section>
      <div className="luxury-ribbon">PROJECTS / STORE / CUSTOM / FIX / STACK / PEOPLE / SIGNAL</div>
      <section className="luxury-projects"><small>THE COLLECTION</small><Projects /></section>
      <section className="luxury-split"><div><small>THE STORE</small><Products /></div><div><small>THE SERVICE DESK</small><Services /></div></section>
      <section className="luxury-proof"><Reviews /></section>
      <section><Stack /><Git /></section>
      <Contact />
    </div>
  );
}

/* LIGHT 09 — BRUTALIST BOARD */

function Light09() {
  const [mode, setMode] = useState("PROJECTS");
  const content = {
    PROJECTS: <Projects />, STORE: <Products />, SERVICES: <Services />, REVIEWS: <Reviews />, STACK: <Stack />, GIT: <Git />
  };

  return (
    <div className="experience light l09 brutal">
      <header><b>HALFCLUTCH</b><span>NO POLISH / JUST SOFTWARE</span></header>
      <div className="brutal-title"><span>10</span><h1>PROJECTS</h1><span>10</span><h1>REVIEWS</h1><span>30+</span><h1>TOOLS</h1></div>
      <nav>{Object.keys(content).map((x) => <button onClick={() => setMode(x)} className={mode === x ? "active" : ""} key={x}>{mode === x ? "■" : "□"} {x}</button>)}</nav>
      <main><small>ACTIVE MODULE</small><h2>{mode}</h2>{content[mode]}</main>
      <Contact />
    </div>
  );
}

/* LIGHT 10 — PAPER MAP */

function Light10() {
  const [place, setPlace] = useState("CENTER");
  const places = {
    CENTER: <><h1>HALFCLUTCH</h1><p>{DATA.developer.bio}</p></>,
    BUILD: <Projects />, BUY: <Products />, FIX: <Services />, PEOPLE: <Reviews />, TECH: <Stack />, SIGNAL: <Git />
  };

  return (
    <div className="experience light l10 papermap">
      <header><b>HALFCLUTCH MAP</b><span>AN INTERACTIVE BUSINESS ATLAS</span></header>
      <main className="map-area">
        <div className="map-lines" />
        {Object.keys(places).map((x, i) => <button className={"map-pin pin" + i + (place === x ? " active" : "")} onClick={() => setPlace(x)} key={x}>{x}</button>)}
        <section className="map-card"><small>LOCATION / {place}</small>{places[place]}</section>
      </main>
      <div className="map-bottom"><Projects mode="compact" /><Products mode="compact" /></div>
    </div>
  );
}

/* =========================
   DARK 11 — TERMINAL
========================= */

function Dark11() {
  const [command, setCommand] = useState("");
  const [lines, setLines] = useState(["HALFCLUTCH OS", "type help to inspect the system."]);

  function run() {
    const value = command.trim().toLowerCase();
    if (!value) return;
    let output = "$ " + value;
    if (value === "projects") output = "10 projects loaded.";
    else if (value === "store") output = "10 products loaded.";
    else if (value === "reviews") output = "10 client records loaded.";
    else if (value === "stack") output = DATA.stack.join(" · ");
    else if (value === "git") output = JSON.stringify(DATA.git);
    else if (value === "services") output = "6 service channels online.";
    else if (value === "help") output = "projects / store / reviews / stack / services / git";
    else output = "command not found: " + value;
    setLines((x) => [...x, "$ " + value, output]);
    setCommand("");
  }

  return (
    <div className="experience dark d11 terminal">
      <header><b>halfclutch://terminal</b><span>ONLINE</span></header>
      <main>
        {lines.map((x, i) => <div key={i}>{x}</div>)}
        <div className="term-input"><span>$</span><input value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={(e) => e.key === "Enter" && run()} autoFocus /></div>
      </main>
      <div className="term-projects"><Projects mode="tiny" /></div>
    </div>
  );
}

/* DARK 12 — ARCHIVE */

function Dark12() {
  const [section, setSection] = useState(0);
  const sections = [
    ["WORK ARCHIVE", <Projects />],
    ["SOFTWARE VAULT", <Products />],
    ["SERVICE FILES", <Services />],
    ["CLIENT FILES", <Reviews />],
    ["TECHNICAL FILES", <Stack />],
    ["SYSTEM SIGNAL", <Git />]
  ];

  return (
    <div className="experience dark d12 archive">
      <header><b>HALFCLUTCH / BLACK ARCHIVE</b><small>CLASSIFIED SOFTWARE RECORDS</small></header>
      <div className="archive-layout">
        <aside>{sections.map((x, i) => <button className={i === section ? "active" : ""} onClick={() => setSection(i)} key={x[0]}>{String(i + 1).padStart(2, "0")}<span>{x[0]}</span></button>)}</aside>
        <main><small>FILE / {String(section + 1).padStart(2, "0")}</small><h1>{sections[section][0]}</h1>{sections[section][1]}</main>
      </div>
      <Contact dark />
    </div>
  );
}

/* DARK 13 — CONTROL ROOM */

function Dark13() {
  return (
    <div className="experience dark d13 control-dark">
      <header><b>HALFCLUTCH CONTROL</b><span>ALL SYSTEMS / SIMULATED</span></header>
      <div className="dashboard-grid">
        <section className="dash-intro"><small>OPERATOR</small><h1>{DATA.developer.name}</h1><p>{DATA.developer.bio}</p></section>
        <section><small>PROJECT QUEUE / 10</small><Projects mode="tiny" /></section>
        <section><small>PRODUCT INVENTORY / 10</small><Products mode="tiny" /></section>
        <section><small>CLIENT SIGNAL / 10</small><Reviews mode="tiny" /></section>
        <section><small>TECH MATRIX</small><Stack /></section>
        <section><small>GIT TELEMETRY</small><Git /></section>
      </div>
    </div>
  );
}

/* DARK 14 — CINEMA */

function Dark14() {
  const [scene, setScene] = useState(0);
  const scenes = [
    ["ACT I", "THE BUILDER", <p>{DATA.developer.bio}</p>],
    ["ACT II", "THE WORK", <Projects />],
    ["ACT III", "THE MARKET", <Products />],
    ["ACT IV", "THE FIX", <Services />],
    ["ACT V", "THE PEOPLE", <Reviews />],
    ["ACT VI", "THE MACHINE", <Stack />],
    ["ACT VII", "THE SIGNAL", <Git />],
  ];

  return (
    <div className="experience dark d14 cinema">
      <div className="cinema-bar">HALFCLUTCH PICTURES / AN ORIGINAL SOFTWARE STORY</div>
      <main><small>{scenes[scene][0]}</small><h1>{scenes[scene][1]}</h1><div>{scenes[scene][2]}</div></main>
      <nav>{scenes.map((x, i) => <button className={scene === i ? "active" : ""} onClick={() => setScene(i)} key={x[0]}>{i + 1}</button>)}</nav>
    </div>
  );
}

/* DARK 15 — SYSTEM MONITOR */

function Dark15() {
  const bars = Array.from({ length: 35 }, (_, i) => 20 + ((i * 43) % 80));
  return (
    <div className="experience dark d15 monitor">
      <header><b>HC SYSTEM MONITOR</b><span>CPU / MEMORY / NETWORK / GIT</span></header>
      <div className="monitor-hero"><div><small>SYSTEM OWNER</small><h1>SHAVANDEB<br />KAITI</h1></div><Git /></div>
      <div className="monitor-chart">{bars.map((h, i) => <span key={i} style={{ height: h + "%" }} />)}</div>
      <div className="monitor-columns"><section><small>WORKLOAD</small><Projects /></section><section><small>MARKET</small><Products /></section><section><small>CLIENTS</small><Reviews /></section><section><small>STACK</small><Stack /></section></div>
    </div>
  );
}

/* DARK 16 — SPACE STATION */

function Dark16() {
  const [module, setModule] = useState("MISSION");
  const content = { MISSION: <Projects />, DOCK: <Products />, ENGINEERING: <Services />, CREW: <Reviews />, CORE: <Stack />, BLACKBOX: <Git /> };

  return (
    <div className="experience dark d16 space-dark">
      <header><b>HC-01</b><span>HALFCLUTCH ORBITAL SOFTWARE STATION</span><i>● LIFE SUPPORT</i></header>
      <div className="space-core"><div>HC</div>{Object.keys(content).map((x, i) => <button className={"orbit" + i + (module === x ? " active" : "")} onClick={() => setModule(x)} key={x}>{x}</button>)}</div>
      <section><small>MODULE / {module}</small><h1>{module}</h1>{content[module]}</section>
    </div>
  );
}

/* DARK 17 — DATA VAULT */

function Dark17() {
  const cards = [
    ["10", "PROJECTS", <Projects mode="tiny" />],
    ["10", "PRODUCTS", <Products mode="tiny" />],
    ["10", "REVIEWS", <Reviews mode="tiny" />],
    ["30+", "TECH", <Stack />],
    ["∞", "SERVICES", <Services />],
    ["LIVE", "GIT", <Git />],
  ];

  return (
    <div className="experience dark d17 vault">
      <header><b>HALFCLUTCH / DATA VAULT</b><small>DECRYPTED RECORDS</small></header>
      <main>{cards.map((x, i) => <section className={"vault-card vc" + i} key={x[1]}><strong>{x[0]}</strong><small>{x[1]}</small><div>{x[2]}</div></section>)}</main>
      <Contact dark />
    </div>
  );
}

/* DARK 18 — COMMAND DECK */

function Dark18() {
  const [active, setActive] = useState("HOME");
  const content = {
    HOME: <><small>COMMAND DECK</small><h1>BUILD.<br />BUY.<br />FIX.</h1><p>{DATA.developer.bio}</p></>,
    PROJECTS: <Projects />, STORE: <Products />, SERVICES: <Services />, PEOPLE: <Reviews />, STACK: <Stack />, GIT: <Git />
  };

  return (
    <div className="experience dark d18 deck">
      <aside><div className="deck-logo">HC</div>{Object.keys(content).map((x) => <button className={active === x ? "active" : ""} onClick={() => setActive(x)} key={x}>{x}</button>)}<Git compact /></aside>
      <main><header><span>HALFCLUTCH COMMAND DECK</span><b>CHANNEL / {active}</b></header><section>{content[active]}</section></main>
    </div>
  );
}

/* DARK 19 — BLACK BOOK */

function Dark19() {
  return (
    <div className="experience dark d19 blackbook">
      <header><span>THE BLACK BOOK</span><b>HALFCLUTCH</b></header>
      <div className="black-cover"><small>PRIVATE SOFTWARE STUDIO</small><h1>SHAVANDEB<br />KAITI</h1><p>{DATA.developer.role}</p></div>
      <section><small>CHAPTER I / WORK</small><Projects /></section>
      <section><small>CHAPTER II / MARKET</small><Products /></section>
      <section><small>CHAPTER III / SERVICE</small><Services /></section>
      <section><small>CHAPTER IV / PEOPLE</small><Reviews /></section>
      <section><small>CHAPTER V / MACHINE</small><Stack /><Git /></section>
    </div>
  );
}

/* DARK 20 — NOIR STUDIO */

function Dark20() {
  const [item, setItem] = useState(0);
  const all = [
    ...DATA.projects.map((x) => ["PROJECT", x[1]]),
    ...DATA.products.map((x) => ["PRODUCT", x[1]]),
  ];

  return (
    <div className="experience dark d20 noir">
      <header><b>HC / NOIR STUDIO</b><span>OBJECT {String(item + 1).padStart(2, "0")} / {all.length}</span></header>
      <div className="noir-main">
        <div className="noir-object"><span>{all[item][0]}</span><b>HC</b></div>
        <section><small>{all[item][0]}</small><h1>{all[item][1]}</h1><p>Software asset available to buy, customize, integrate or rebuild.</p></section>
      </div>
      <div className="noir-index">{all.map((x, i) => <button className={i === item ? "active" : ""} onClick={() => setItem(i)} key={i}><span>{String(i + 1).padStart(2, "0")}</span>{x[1]}</button>)}</div>
      <Reviews mode="tiny" />
    </div>
  );
}

/* =========================
   NEON 21 — CYBER GRID
========================= */

function Neon21() {
  const [tab, setTab] = useState("PROJECTS");
  const content = { PROJECTS: <Projects />, STORE: <Products />, SERVICES: <Services />, REVIEWS: <Reviews />, STACK: <Stack />, GIT: <Git /> };

  return (
    <div className="experience neon n21 cyber">
      <header><b>HALFCLUTCH//NET</b><span>NODE 2077</span><i>CONNECTED</i></header>
      <div className="cyber-title"><small>DEVELOPER / PRODUCT BUILDER</small><h1>SOFTWARE<br /><span>FROM THE</span><br />OTHER SIDE.</h1></div>
      <nav>{Object.keys(content).map((x) => <button className={tab === x ? "active" : ""} onClick={() => setTab(x)} key={x}>{x}</button>)}</nav>
      <main><small>CHANNEL / {tab}</small>{content[tab]}</main>
    </div>
  );
}

/* NEON 22 — ARCADE */

function Neon22() {
  const [game, setGame] = useState(0);
  const modes = [
    ["LEVEL 01", "PROJECTS", <Projects />],
    ["LEVEL 02", "STORE", <Products />],
    ["LEVEL 03", "SERVICES", <Services />],
    ["LEVEL 04", "REVIEWS", <Reviews />],
    ["LEVEL 05", "STACK", <Stack />],
    ["LEVEL 06", "GIT", <Git />],
  ];

  return (
    <div className="experience neon n22 arcade-neon">
      <header><b>HC//ARCADE</b><span>PLAYER 01 / SHAVANDEB</span><strong>SCORE 1842</strong></header>
      <div className="arcade-neon-screen"><small>{modes[game][0]}</small><h1>{modes[game][1]}</h1>{modes[game][2]}</div>
      <nav>{modes.map((x, i) => <button className={game === i ? "active" : ""} onClick={() => setGame(i)} key={x[0]}>{x[0]}</button>)}</nav>
    </div>
  );
}

/* NEON 23 — HOLOGRAM */

function Neon23() {
  const [focus, setFocus] = useState("CORE");
  const content = {
    CORE: <><h1>HALFCLUTCH</h1><p>{DATA.developer.bio}</p></>,
    PROJECTS: <Projects />, STORE: <Products />, SERVICES: <Services />, REVIEWS: <Reviews />, STACK: <Stack />, GIT: <Git />
  };

  return (
    <div className="experience neon n23 hologram">
      <div className="holo-ring r1" /><div className="holo-ring r2" /><div className="holo-ring r3" />
      <header><b>HC HOLOGRAPHIC INTERFACE</b><span>INTERACTIVE MODEL / 01</span></header>
      <main><small>NODE / {focus}</small>{content[focus]}</main>
      <nav>{Object.keys(content).map((x) => <button className={focus === x ? "active" : ""} onClick={() => setFocus(x)} key={x}>{x}</button>)}</nav>
    </div>
  );
}

/* NEON 24 — SYNTHWAVE */

function Neon24() {
  return (
    <div className="experience neon n24 synth">
      <div className="sun" />
      <div className="mountains" />
      <header><b>HALFCLUTCH 198X</b><span>FUTURE SOFTWARE / PRESENT DAY</span></header>
      <main><small>SHAVANDEB KAITI</small><h1>BUILD<br />THE<br /><i>FUTURE.</i></h1><p>{DATA.developer.bio}</p></main>
      <section><Projects mode="tiny" /><Products mode="tiny" /></section>
      <div className="synth-stack"><Stack /></div>
      <Reviews mode="tiny" />
    </div>
  );
}

/* NEON 25 — CYBER CITY */

function Neon25() {
  const [district, setDistrict] = useState(0);
  const districts = [
    ["BUILDING DISTRICT", <Projects />],
    ["MARKET DISTRICT", <Products />],
    ["SERVICE DISTRICT", <Services />],
    ["PEOPLE DISTRICT", <Reviews />],
    ["TECH DISTRICT", <Stack />],
    ["SIGNAL DISTRICT", <Git />],
  ];

  return (
    <div className="experience neon n25 cybercity">
      <header><b>HC CITY</b><span>MEGACITY / NIGHT NETWORK</span></header>
      <div className="city-neon-map">{districts.map((x, i) => <button className={district === i ? "active" : ""} onClick={() => setDistrict(i)} key={x[0]}><span>{String(i + 1).padStart(2, "0")}</span>{x[0]}</button>)}</div>
      <main><small>DISTRICT / {districts[district][0]}</small><h1>{districts[district][0]}</h1>{districts[district][1]}</main>
    </div>
  );
}

/* NEON 26 — TERMINAL */

function Neon26() {
  return (
    <div className="experience neon n26 terminal-neon">
      <header><span>HALFCLUTCH://FUTURE</span><b>● ● ●</b></header>
      <div className="neon-terminal-grid">
        <section className="terminal-intro"><small>IDENTITY</small><h1>SHAVANDEB<br />KAITI</h1><p>{DATA.developer.bio}</p></section>
        <section><small>PROJECTS</small><Projects mode="tiny" /></section>
        <section><small>PRODUCTS</small><Products mode="tiny" /></section>
        <section><small>CLIENTS</small><Reviews mode="tiny" /></section>
        <section><small>TECH</small><Stack /></section>
        <section><small>SIGNAL</small><Git /></section>
      </div>
    </div>
  );
}

/* NEON 27 — LASER SHOW */

function Neon27() {
  const [section, setSection] = useState("BUILD");
  const content = {
    BUILD: <Projects />, BUY: <Products />, FIX: <Services />, PEOPLE: <Reviews />, TECH: <Stack />, DATA: <Git />
  };

  return (
    <div className="experience neon n27 laser">
      <div className="laser-beam b1" /><div className="laser-beam b2" /><div className="laser-beam b3" />
      <header><b>HALFCLUTCH</b><span>LASER INTERFACE</span></header>
      <main><small>SELECT CHANNEL</small><h1>{section}</h1>{content[section]}</main>
      <nav>{Object.keys(content).map((x) => <button className={section === x ? "active" : ""} onClick={() => setSection(x)} key={x}>{x}</button>)}</nav>
    </div>
  );
}

/* NEON 28 — FUTURE MARKET */

function Neon28() {
  const [product, setProduct] = useState(0);
  return (
    <div className="experience neon n28 futuremarket">
      <header><b>HC FUTURE MARKET</b><span>SOFTWARE / 24H MARKET</span><i>10 ASSETS</i></header>
      <div className="market-hero"><small>READY-MADE SOFTWARE</small><h1>BUY<br />THE<br />BUILD.</h1><p>Pre-built applications for people who want to move faster.</p></div>
      <div className="market-products">{DATA.products.map((p, i) => <button className={i === product ? "active" : ""} onClick={() => setProduct(i)} key={p[0]}><small>{p[0]}</small><b>{p[1]}</b><span>{p[3]}</span></button>)}</div>
      <section><Products /><Projects mode="tiny" /></section>
      <Reviews mode="tiny" />
    </div>
  );
}

/* NEON 29 — DIGITAL DREAM */

function Neon29() {
  const [phase, setPhase] = useState(0);
  const phases = [
    ["DREAM", <><h1>IMAGINE<br />SOFTWARE.</h1><p>{DATA.developer.bio}</p></>],
    ["BUILD", <Projects />],
    ["BUY", <Products />],
    ["FIX", <Services />],
    ["TRUST", <Reviews />],
    ["TECH", <Stack />],
    ["SIGNAL", <Git />],
  ];

  return (
    <div className="experience neon n29 dream">
      <div className="dream-bg">HALFCLUTCH</div>
      <header><b>HC DREAM ENGINE</b><span>PHASE {phase + 1} / 7</span></header>
      <main><small>{phases[phase][0]}</small>{phases[phase][1]}</main>
      <nav>{phases.map((x, i) => <button className={phase === i ? "active" : ""} onClick={() => setPhase(i)} key={x[0]}>{x[0]}</button>)}</nav>
    </div>
  );
}

/* NEON 30 — GLITCH PLAYGROUND */

function Neon30() {
  const [selected, setSelected] = useState(null);
  const items = [
    ["ABOUT", <><h1>NO NORMAL<br />PORTFOLIO.</h1><p>{DATA.developer.bio}</p></>],
    ["PROJECTS", <Projects mode="tiny" />],
    ["STORE", <Products mode="tiny" />],
    ["SERVICES", <Services />],
    ["REVIEWS", <Reviews mode="tiny" />],
    ["STACK", <Stack />],
    ["GIT", <Git />],
  ];

  return (
    <div className="experience neon n30 glitch">
      <div className="glitch-word">HALFCLUTCH</div>
      <header><b>HC//30</b><span>MOVE / CLICK / BREAK THE GRID</span></header>
      <main>
        {items.map((item, i) => <button key={item[0]} className={"glitch-card gc" + i + (selected === i ? " active" : "")} onClick={() => setSelected(selected === i ? null : i)}><small>{String(i + 1).padStart(2, "0")}</small><b>{item[0]}</b></button>)}
        <section className={"glitch-info " + (selected !== null ? "visible" : "")}>{selected === null ? <><small>HALFCLUTCH / 30</small><h1>BREAK<br />THE<br />PATTERN.</h1></> : items[selected][1]}</section>
      </main>
    </div>
  );
}

export default function Page() {
  const [index, setIndex] = useState(0);

  const screens = useMemo(() => [
    <Light01 key="l01" />, <Light02 key="l02" />, <Light03 key="l03" />, <Light04 key="l04" />, <Light05 key="l05" />,
    <Light06 key="l06" />, <Light07 key="l07" />, <Light08 key="l08" />, <Light09 key="l09" />, <Light10 key="l10" />,
    <Dark11 key="d11" />, <Dark12 key="d12" />, <Dark13 key="d13" />, <Dark14 key="d14" />, <Dark15 key="d15" />,
    <Dark16 key="d16" />, <Dark17 key="d17" />, <Dark18 key="d18" />, <Dark19 key="d19" />, <Dark20 key="d20" />,
    <Neon21 key="n21" />, <Neon22 key="n22" />, <Neon23 key="n23" />, <Neon24 key="n24" />, <Neon25 key="n25" />,
    <Neon26 key="n26" />, <Neon27 key="n27" />, <Neon28 key="n28" />, <Neon29 key="n29" />, <Neon30 key="n30" />
  ], []);

  const next = () => setIndex((x) => (x + 1) % 30);
  const prev = () => setIndex((x) => (x + 29) % 30);
  const random = () => setIndex(Math.floor(Math.random() * 30));

  return (
    <main className="hc30">
      <div className="experience-switcher">
        <button onClick={prev}>←</button>
        <span>{String(index + 1).padStart(2, "0")} / 30</span>
        <button onClick={next}>→</button>
        <button onClick={random}>RND</button>
        <small>{NAMES[index]}</small>
      </div>
      {screens[index]}
      <style jsx global>{STYLES}</style>
    </main>
  );
}

const STYLES = `
*{box-sizing:border-box}
body{margin:0;background:#080808}
button,input{font:inherit}
button{cursor:pointer}
.hc30{min-height:100vh}
.experience-switcher{position:fixed;z-index:99999;right:14px;top:14px;display:flex;gap:5px;align-items:center;padding:5px;background:#090909e8;color:#fff;border:1px solid #ffffff22;backdrop-filter:blur(14px);font:10px monospace}
.experience-switcher button{border:1px solid #ffffff25;background:transparent;color:#fff;padding:8px 11px}
.experience-switcher button:hover{background:#dfff00;color:#000}
.experience-switcher span{min-width:58px;text-align:center}.experience-switcher small{padding:0 8px;opacity:.6}
.experience{min-height:100vh;overflow:hidden}
.experience h1,.experience h2,.experience h3{letter-spacing:-.07em}
.experience small{font:10px monospace}
.data-projects{display:flex;flex-direction:column}
.data-projects article{display:grid;grid-template-columns:45px 1fr;gap:16px;padding:21px 0;border-bottom:1px solid currentColor;border-color:color-mix(in srgb,currentColor 15%,transparent)}
.data-projects article>span{font:10px monospace;opacity:.5}.data-projects h3{font-size:25px;margin:5px 0}.data-projects small{opacity:.45}.data-projects em{font:9px monospace;font-style:normal;opacity:.6}
.data-projects.tiny article{padding:10px 0;grid-template-columns:28px 1fr}.data-projects.tiny h3{font-size:15px;margin:2px 0}.data-projects.tiny em{display:none}
.data-projects.compact article{padding:13px 0}.data-projects.compact h3{font-size:17px}
.data-products{display:flex;flex-direction:column}.data-products article{display:grid;grid-template-columns:50px 1fr auto;gap:12px;align-items:center;padding:18px 0;border-bottom:1px solid currentColor;border-color:color-mix(in srgb,currentColor 15%,transparent)}.data-products article>span{font:9px monospace;opacity:.45}.data-products h3{font-size:19px;margin:4px 0}.data-products small{opacity:.45}.data-products b{font-size:22px}.data-products.tiny article{padding:8px 0}.data-products.tiny h3{font-size:14px}.data-products.tiny b{font-size:14px}
.data-services{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.data-services article{padding:22px;border:1px solid currentColor;border-color:color-mix(in srgb,currentColor 16%,transparent);min-height:170px}.data-services h3{font-size:21px}.data-services p{opacity:.6;line-height:1.45}
.data-stack{display:flex;flex-wrap:wrap;gap:7px}.data-stack span{padding:9px 11px;border:1px solid currentColor;font:9px monospace}.data-stack span:hover{background:#dfff00;color:#000;transform:translateY(-4px)}
.data-git{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}.data-git div{padding:18px;border:1px solid currentColor;border-color:color-mix(in srgb,currentColor 15%,transparent);min-height:100px}.data-git small,.data-git strong{display:block}.data-git small{opacity:.45}.data-git strong{font-size:27px;margin-top:12px}.data-git.compact{grid-template-columns:repeat(2,1fr)}
.data-reviews{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.data-reviews article{padding:22px;border:1px solid currentColor;border-color:color-mix(in srgb,currentColor 15%,transparent)}.data-reviews .stars{color:#dfff00;margin:15px 0}.data-reviews p{line-height:1.5}.data-reviews strong,.data-reviews small{display:block}.data-reviews small{opacity:.5}.data-reviews.tiny{grid-template-columns:repeat(2,1fr)}.data-reviews.tiny article{padding:12px}.data-reviews.tiny p{font-size:12px}
.data-contact{padding:120px 7vw;background:#dfff00;color:#111}.data-contact.dark{background:#080808;color:#eee}.data-contact h2{font-size:clamp(60px,11vw,160px);line-height:.65;margin:35px 0}.data-contact p{max-width:650px;line-height:1.5}.data-contact a{color:inherit;font-weight:bold}

/* LIGHT BASE */
.light{background:#f1eee6;color:#171717}.l-header{padding:25px 5vw;border-bottom:1px solid #222;display:flex;justify-content:space-between;font:10px monospace}.l-header small{opacity:.5}

/* LIGHT 01 */
.editorial-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:0}.editorial-grid>section{padding:65px;border-right:1px solid #bbb;border-bottom:1px solid #bbb}.editorial-title{min-height:700px;background:#e6e0d2}.editorial-title h1{font-size:clamp(75px,10vw,150px);line-height:.62;margin:70px 0 35px}.editorial-title i{font-family:Georgia,serif;font-weight:normal}.editorial-title p{max-width:450px}.editorial-projects{background:#f5f3ed}.editorial-store{grid-column:span 2}.editorial-stack{background:#ded9ce}.editorial-reviews{grid-column:span 2}.editorial-git{grid-column:span 2}

/* LIGHT 02 */
.swiss{background:#f5f5f2}.swiss>header{padding:25px 5vw;display:grid;grid-template-columns:1fr 1fr 1fr;border-bottom:1px solid #111;font:10px monospace}.swiss-hero{min-height:680px;display:grid;grid-template-columns:180px 1fr;padding:90px 7vw}.swiss-red{width:130px;height:130px;display:grid;place-items:center;background:#ff3b20;color:#fff;font-size:90px}.swiss-hero h1{font-size:clamp(90px,13vw,190px);line-height:.62;margin:35px 0}.swiss-hero p{max-width:500px}.swiss-nav{display:flex;border-top:1px solid #111;border-bottom:1px solid #111;overflow:auto}.swiss-nav button{padding:18px 30px;border:0;border-right:1px solid #111;background:transparent}.swiss-nav button.active{background:#111;color:#fff}.swiss-content{padding:80px 7vw}.swiss-content>small{display:block;margin-bottom:40px}

/* LIGHT 03 */
.architect{background:#e5e0d2}.architect>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #111;font:10px monospace}.architect-board{display:grid;grid-template-columns:280px 1fr;min-height:900px}.architect-side{border-right:1px solid #111}.architect-side>small{display:block;padding:25px}.architect-side button{width:100%;display:flex;gap:15px;text-align:left;padding:16px;border:0;border-bottom:1px solid #aaa;background:transparent}.architect-side button.active{background:#111;color:#fff}.architect-main{padding:70px;position:relative}.architect-cross{font-size:70px;color:#c43b25}.architect-main h1{font-size:clamp(65px,9vw,130px);line-height:.65}.architect-lines{height:180px;margin:50px 0;background:repeating-linear-gradient(0deg,transparent 0 28px,#111 29px 30px)}.architect-lower{padding:80px 7vw;display:grid;grid-template-columns:1fr 1fr;gap:70px}

/* LIGHT 04 */
.catalog{padding:30px 5vw}.catalog header{display:flex;justify-content:space-between;align-items:end;border-bottom:4px solid #111}.catalog header h1{font-size:90px;line-height:.7;margin:10px 0}.catalog-cover{min-height:700px;padding:70px 0;display:grid;grid-template-columns:1fr 2fr;align-items:center}.catalog-cover>div{width:280px;height:280px;background:#111;color:#dfff00;display:grid;place-items:center;font-size:100px}.catalog-cover h2{font-size:clamp(70px,10vw,150px);line-height:.62}.catalog>section{padding:80px 0;border-top:1px solid #111}

/* LIGHT 05 */
.newspaper{padding:25px 5vw}.newspaper header{display:grid;grid-template-columns:1fr 5fr 1fr;align-items:end;border-bottom:5px solid #111}.newspaper header h1{font-size:clamp(75px,12vw,180px);text-align:center;line-height:.65;margin:0}.newspaper header span,.newspaper header b{font:10px monospace;padding-bottom:15px}.news-date{padding:15px 0;border-bottom:1px solid #111;font:9px monospace}.news-layout{display:grid;grid-template-columns:2fr 1fr 1fr;gap:10px;padding-top:10px}.news-layout>article{padding:25px;border:1px solid #111}.news-main{grid-row:span 2}.news-main h2{font-size:clamp(65px,9vw,130px);line-height:.63}.news-layout>article:nth-child(4){grid-column:span 2}.news-layout>article:nth-child(5){grid-column:span 2}

/* LIGHT 06 */
.museum header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #111;font:10px monospace}.museum-room{display:grid;grid-template-columns:250px 1fr;min-height:1000px}.museum-room nav{border-right:1px solid #111}.museum-room nav button{width:100%;padding:25px;text-align:left;border:0;border-bottom:1px solid #aaa;background:transparent}.museum-room nav button.active{background:#111;color:#dfff00}.museum-room main{padding:70px 7vw}.museum-art{height:270px;background:#dfff00;display:grid;place-items:center;margin-bottom:60px}.museum-art span{font-size:100px;font-weight:900}.museum-room h1{font-size:100px;line-height:.65}

/* LIGHT 07 */
.blueprint-light{position:relative;min-height:1600px;background:#e9f0ec}.blue-grid{position:absolute;inset:0;background-image:linear-gradient(#263b3522 1px,transparent 1px),linear-gradient(90deg,#263b3522 1px,transparent 1px);background-size:35px 35px}.blueprint-light>header,.blue-title,.blueprint-light>nav,.blueprint-light>main,.blueprint-light>.data-contact{position:relative}.blueprint-light>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #263b35;font:10px monospace}.blue-title{padding:100px 7vw}.blue-title h1{font-size:clamp(90px,14vw,200px);line-height:.6}.blueprint-light>nav{display:flex;padding:0 7vw;overflow:auto}.blueprint-light>nav button{padding:15px 25px;border:1px solid #263b35;background:transparent}.blueprint-light>nav button.active{background:#263b35;color:#fff}.blueprint-light>main{margin:35px 7vw;padding:50px;border:1px solid #263b35;background:#eef5f0d9}.blueprint-light>main h2{font-size:90px}

/* LIGHT 08 */
.luxury{background:#f4f0e7}.luxury>header{padding:30px 5vw;display:grid;grid-template-columns:1fr 2fr 1fr;align-items:center;border-bottom:1px solid #9e957f;font:10px monospace}.luxury>header span{font-family:Georgia;font-size:40px}.luxury>header b{text-align:center;font-size:22px}.luxury>header small{text-align:right}.luxury-hero{padding:150px 9vw;min-height:850px}.luxury-hero h1{font-family:Georgia,serif;font-size:clamp(80px,12vw,180px);line-height:.62;font-weight:400}.luxury-hero i{color:#7c6947}.luxury-hero p{max-width:500px}.luxury-ribbon{padding:15px;background:#111;color:#fff;word-spacing:30px;text-align:center;font:9px monospace}.luxury-projects,.luxury>section:not(.luxury-hero){padding:100px 9vw}.luxury-split{display:grid;grid-template-columns:1fr 1fr;gap:100px}.luxury-proof{background:#ddd4c1}

/* LIGHT 09 */
.brutal{background:#e7e3d8;color:#111}.brutal>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:8px solid #111;font:10px monospace}.brutal-title{padding:70px 5vw;display:grid;grid-template-columns:120px 1fr;align-items:center}.brutal-title span{font-size:60px;font-weight:900}.brutal-title h1{font-size:clamp(75px,11vw,160px);line-height:.55;margin:15px 0}.brutal nav{display:flex;flex-wrap:wrap;padding:20px 5vw;border-top:8px solid #111;border-bottom:8px solid #111}.brutal nav button{padding:15px 20px;border:0;background:transparent}.brutal nav button.active{background:#111;color:#fff}.brutal main{padding:80px 7vw}.brutal main h2{font-size:100px;line-height:.65}

/* LIGHT 10 */
.papermap{background:#e8dfcb;min-height:1600px}.papermap header{padding:25px 5vw;display:flex;justify-content:space-between;font:10px monospace;border-bottom:1px solid #111}.map-area{min-height:900px;margin:40px 5vw;position:relative;border:1px solid #766b56;background:#e9dfc8;overflow:hidden}.map-lines{position:absolute;inset:0;background:repeating-linear-gradient(25deg,transparent 0 70px,#766b5620 71px 73px),repeating-linear-gradient(-20deg,transparent 0 100px,#766b5620 101px 103px)}.map-pin{position:absolute;padding:13px 20px;border-radius:50px;border:1px solid #111;background:#f7efdf;z-index:2}.map-pin.active{background:#111;color:#dfff00}.pin0{left:45%;top:40%}.pin1{left:12%;top:20%}.pin2{right:15%;top:18%}.pin3{left:20%;bottom:20%}.pin4{right:22%;bottom:18%}.pin5{left:55%;bottom:10%}.pin6{right:5%;top:50%}.map-card{position:absolute;right:5%;bottom:5%;width:45%;padding:35px;background:#f7efdf;border:1px solid #111;z-index:3}.map-card h1{font-size:65px;line-height:.65}.map-bottom{padding:60px 7vw;display:grid;grid-template-columns:1fr 1fr;gap:70px}

/* DARK BASE */
.dark{background:#08090b;color:#e9edf1}.dark header{font:10px monospace}.dark .data-contact{background:#08090b;color:#fff}

/* DARK 11 */
.terminal{background:#050706;color:#baffba;min-height:1600px;font-family:monospace}.terminal header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #173317}.terminal header span{color:#dfff00}.terminal main{padding:80px 8vw;min-height:800px;line-height:2}.term-input{display:flex;gap:10px}.term-input input{background:transparent;border:0;outline:0;color:#dfff00;width:80%}.term-projects{padding:60px 8vw}

/* DARK 12 */
.archive>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #30343b}.archive-layout{display:grid;grid-template-columns:300px 1fr;min-height:1000px}.archive-layout aside{border-right:1px solid #30343b}.archive-layout aside button{width:100%;padding:20px;text-align:left;border:0;border-bottom:1px solid #30343b;background:transparent;color:#777}.archive-layout aside button.active{background:#dfff00;color:#111}.archive-layout aside span{margin-left:20px}.archive-layout main{padding:70px 7vw}.archive-layout main h1{font-size:clamp(70px,10vw,150px);line-height:.62}

/* DARK 13 */
.control-dark{background:#080b0e}.control-dark>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #242a31}.dashboard-grid{display:grid;grid-template-columns:repeat(2,1fr)}.dashboard-grid>section{padding:45px;border-right:1px solid #242a31;border-bottom:1px solid #242a31;min-height:350px}.dashboard-grid .dash-intro{grid-column:span 2;background:linear-gradient(135deg,#0e1319,#080b0e)}.dash-intro h1{font-size:100px;line-height:.62}.dashboard-grid>section>small{color:#dfff00}

/* DARK 14 */
.cinema{background:#050505;color:#eee;min-height:1500px;text-align:center}.cinema-bar{padding:25px;border-bottom:1px solid #333;font:10px monospace}.cinema main{min-height:1000px;padding:160px 7vw;display:flex;flex-direction:column;justify-content:center;align-items:center}.cinema main h1{font-size:clamp(80px,13vw,190px);line-height:.62}.cinema main>div{width:100%;text-align:left}.cinema nav{display:flex;justify-content:center;gap:5px}.cinema nav button{width:42px;height:42px;border:1px solid #555;background:#111;color:#fff}.cinema nav button.active{background:#dfff00;color:#111}

/* DARK 15 */
.monitor{background:#030609}.monitor>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #20303b}.monitor-hero{display:grid;grid-template-columns:1fr 1fr;gap:60px;padding:100px 7vw}.monitor-hero h1{font-size:110px;line-height:.62;color:#dfff00}.monitor-chart{height:330px;margin:0 7vw;border:1px solid #20303b;display:flex;align-items:end;gap:4px;padding:30px}.monitor-chart span{flex:1;background:#24e3ff;opacity:.45;animation:barPulse 2s ease-in-out infinite alternate}.monitor-columns{display:grid;grid-template-columns:1fr 1fr;gap:70px;padding:100px 7vw}.monitor-columns>section{padding:25px;border:1px solid #20303b}

/* DARK 16 */
.space-dark{background:#01040a;min-height:1700px}.space-dark>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #273752}.space-dark header i{color:#dfff00}.space-core{height:850px;position:relative;display:grid;place-items:center}.space-core>div{width:230px;height:230px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle,#dfff00,#152000);color:#111;font-size:75px;box-shadow:0 0 120px #dfff0040}.space-core button{position:absolute;left:50%;top:50%;width:150px;padding:13px;border:1px solid #314765;background:#070d18;color:#fff}.space-core button.active{background:#dfff00;color:#111}.orbit0{transform:rotate(0deg) translateY(-330px)}.orbit1{transform:rotate(60deg) translateY(-330px)}.orbit2{transform:rotate(120deg) translateY(-330px)}.orbit3{transform:rotate(180deg) translateY(-330px)}.orbit4{transform:rotate(240deg) translateY(-330px)}.orbit5{transform:rotate(300deg) translateY(-330px)}.space-dark>section{padding:80px 7vw;border-top:1px solid #273752}.space-dark>section h1{font-size:110px;line-height:.62}

/* DARK 17 */
.vault{background:#070707}.vault>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #333}.vault main{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:70px 5vw}.vault-card{padding:25px;border:1px solid #333;min-height:400px}.vault-card>strong{display:block;font-size:80px;color:#dfff00}.vault-card>small{display:block;margin-bottom:40px}.vc0{grid-column:span 2}.vc3{grid-row:span 2}

/* DARK 18 */
.deck{display:grid;grid-template-columns:240px 1fr;min-height:1500px}.deck aside{padding:25px;border-right:1px solid #333;display:flex;flex-direction:column;gap:6px}.deck-logo{font-size:70px;color:#dfff00;margin-bottom:50px}.deck aside button{padding:13px;text-align:left;border:1px solid #333;background:transparent;color:#777}.deck aside button.active{background:#dfff00;color:#111}.deck aside .data-git{margin-top:auto}.deck main>header{padding:25px;border-bottom:1px solid #333;display:flex;justify-content:space-between}.deck main>section{padding:80px 7vw}.deck main h1{font-size:120px;line-height:.6}

/* DARK 19 */
.blackbook{background:#0a0a0a;color:#eee}.blackbook>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #333}.black-cover{min-height:800px;padding:100px 9vw;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(120deg,#0b0b0b,#1b1b1b)}.black-cover h1{font-family:Georgia,serif;font-size:clamp(80px,13vw,190px);line-height:.62}.blackbook>section{padding:100px 9vw;border-top:1px solid #333}.blackbook>section>small{color:#dfff00}.blackbook>section .data-git{margin-top:50px}

/* DARK 20 */
.noir{background:#090909}.noir>header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #333}.noir-main{display:grid;grid-template-columns:45% 55%;padding:100px 7vw;gap:80px;align-items:center}.noir-object{height:600px;background:linear-gradient(145deg,#252525,#080808);border:1px solid #444;display:flex;flex-direction:column;justify-content:space-between;padding:35px;box-shadow:20px 25px #000}.noir-object b{font-size:180px;align-self:center;color:#dfff00}.noir-main h1{font-size:100px;line-height:.62}.noir-index{display:flex;overflow:auto;border-top:1px solid #333;border-bottom:1px solid #333}.noir-index button{min-width:250px;padding:22px;text-align:left;border:0;border-right:1px solid #333;background:transparent;color:#777}.noir-index button.active{background:#dfff00;color:#111}.noir>.data-reviews{padding:80px 7vw}

/* NEON BASE */
.neon{color:#efffff;background:#04000b;min-height:1500px;position:relative;overflow:hidden}.neon header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #ff21d833;font:10px monospace}.neon header i,.neon header strong{color:#dfff00}.neon button{font:10px monospace}.neon .data-projects article,.neon .data-products article,.neon .data-reviews article,.neon .data-git div{border-color:#ff21d844}.neon .data-stack span{border-color:#21efff}.neon .data-projects em,.neon .data-products b,.neon .data-reviews .stars,.neon .data-git strong{color:#ff21d0}

/* NEON 21 */
.cyber{background:linear-gradient(180deg,#03000b,#0b0014);background-image:linear-gradient(#ff21d00c 1px,transparent 1px),linear-gradient(90deg,#21efff0b 1px,transparent 1px);background-size:45px 45px}.cyber-title{padding:130px 7vw}.cyber-title h1{font-size:clamp(80px,13vw,190px);line-height:.6;text-shadow:7px 0 #ff21d0,-7px 0 #21efff}.cyber-title span{color:#21efff}.cyber>nav{display:flex;padding:20px 7vw;border-block:1px solid #ff21d844;overflow:auto}.cyber>nav button{padding:15px 25px;border:1px solid #ff21d844;background:#08000d;color:#fff}.cyber>nav button.active{background:#ff21d0;color:#111}.cyber>main{padding:70px 7vw}.cyber>main>small{color:#21efff}

/* NEON 22 */
.arcade-neon{background:#090011}.arcade-neon-screen{margin:80px auto;padding:60px;max-width:1200px;min-height:850px;border:5px solid #ff21d0;box-shadow:0 0 50px #ff21d088,inset 0 0 80px #21efff22;background:#020006}.arcade-neon-screen h1{font-size:120px;line-height:.6;color:#dfff00;text-shadow:4px 4px #ff21d0}.arcade-neon>nav{display:flex;justify-content:center;gap:8px;flex-wrap:wrap}.arcade-neon>nav button{padding:15px;border:1px solid #21efff;background:#05000c;color:#fff}.arcade-neon>nav button.active{background:#21efff;color:#111}

/* NEON 23 */
.hologram{display:grid;place-items:center;background:radial-gradient(circle,#071e24,#020007 55%)}.holo-ring{position:absolute;border:1px solid #21efff;border-radius:50%;box-shadow:0 0 30px #21efff66}.r1{width:600px;height:600px;animation:spin 18s linear infinite}.r2{width:850px;height:400px;transform:rotate(40deg);animation:spin 11s linear infinite reverse}.r3{width:400px;height:850px;transform:rotate(70deg);animation:spin 15s linear infinite}.hologram header{position:absolute;top:0;left:0;right:0}.hologram main{z-index:2;width:min(1100px,90%);padding:70px;background:#03151ac9;border:1px solid #21efff;box-shadow:0 0 60px #21efff33}.hologram main h1{font-size:120px;color:#21efff;text-shadow:0 0 30px #21efff}.hologram nav{z-index:3;position:absolute;bottom:40px;display:flex;gap:5px;flex-wrap:wrap;justify-content:center}.hologram nav button{padding:13px;border:1px solid #ff21d0;background:#05000c;color:#fff}.hologram nav button.active{background:#ff21d0;color:#111}

/* NEON 24 */
.synth{background:linear-gradient(#0b001c,#150027 60%,#030008);min-height:1800px}.sun{position:absolute;top:250px;left:50%;transform:translateX(-50%);width:380px;height:380px;border-radius:50%;background:linear-gradient(#ffe900,#ff21d0);box-shadow:0 0 80px #ff21d088}.mountains{position:absolute;top:480px;left:0;right:0;height:400px;background:linear-gradient(135deg,transparent 45%,#090011 46% 60%,transparent 61%),linear-gradient(45deg,transparent 40%,#090011 41% 58%,transparent 59%)}.synth header,.synth main,.synth>section,.synth-stack,.synth>.data-reviews{position:relative}.synth main{padding:170px 7vw 100px}.synth main h1{font-size:clamp(90px,15vw,220px);line-height:.58;color:#fff;text-shadow:5px 5px #ff21d0}.synth main i{color:#21efff}.synth>section{padding:80px 7vw;display:grid;grid-template-columns:1fr 1fr;gap:70px}.synth-stack{padding:70px 7vw;background:#07000f}

/* NEON 25 */
.cybercity{background:#050009;background-image:linear-gradient(#ff21d011 1px,transparent 1px),linear-gradient(90deg,#21efff11 1px,transparent 1px);background-size:50px 50px}.city-neon-map{min-height:700px;margin:70px 7vw;position:relative;border:1px solid #21efff66;background:radial-gradient(circle,#160026,#050009)}.city-neon-map button{position:absolute;padding:20px 25px;border:1px solid #ff21d0;background:#08000e;color:#fff;box-shadow:0 0 25px #ff21d033}.city-neon-map button.active{background:#dfff00;color:#111}.city-neon-map button:nth-child(1){left:8%;top:15%}.city-neon-map button:nth-child(2){right:12%;top:12%}.city-neon-map button:nth-child(3){left:40%;top:38%}.city-neon-map button:nth-child(4){left:10%;bottom:15%}.city-neon-map button:nth-child(5){right:12%;bottom:20%}.city-neon-map button:nth-child(6){left:50%;bottom:8%}.city-neon-map span{display:block;color:#21efff}.cybercity>main{padding:70px 7vw}.cybercity>main h1{font-size:100px;color:#ff21d0}

/* NEON 26 */
.terminal-neon{background:#020307;font-family:monospace}.terminal-neon header{padding:25px 5vw;border-bottom:1px solid #21efff44}.neon-terminal-grid{display:grid;grid-template-columns:repeat(2,1fr);padding:50px 5vw;gap:10px}.neon-terminal-grid>section{padding:30px;border:1px solid #21efff33;min-height:350px}.terminal-intro{grid-column:span 2;background:linear-gradient(120deg,#070016,#00161a)}.terminal-intro h1{font-size:110px;line-height:.62;color:#dfff00;text-shadow:3px 0 #ff21d0}.neon-terminal-grid section>small{color:#21efff}

/* NEON 27 */
.laser{background:#030007}.laser-beam{position:absolute;height:2px;width:130%;left:-15%;background:#21efff;box-shadow:0 0 25px #21efff;transform-origin:center}.laser .b1{top:30%;transform:rotate(8deg);animation:laserMove 4s ease-in-out infinite}.laser .b2{top:55%;background:#ff21d0;box-shadow:0 0 25px #ff21d0;transform:rotate(-13deg);animation:laserMove 5s ease-in-out infinite reverse}.laser .b3{top:75%;transform:rotate(4deg);animation:laserMove 3s ease-in-out infinite}.laser main{position:relative;z-index:2;padding:130px 7vw}.laser main h1{font-size:140px;color:#dfff00;text-shadow:0 0 25px #dfff00}.laser nav{position:relative;z-index:2;padding:20px 7vw;display:flex;gap:5px;flex-wrap:wrap}.laser nav button{padding:14px 22px;border:1px solid #21efff;background:#05000c;color:#fff}.laser nav button.active{background:#21efff;color:#111}

/* NEON 28 */
.futuremarket{background:radial-gradient(circle at 70% 20%,#21004d,#050009 55%)}.market-hero{padding:120px 7vw 80px}.market-hero h1{font-size:clamp(100px,16vw,230px);line-height:.55;color:#fff;text-shadow:5px 5px #ff21d0,-5px -5px #21efff}.market-products{display:grid;grid-template-columns:repeat(5,1fr);border-block:1px solid #21efff55}.market-products button{min-height:250px;padding:20px;text-align:left;border:0;border-right:1px solid #21efff55;background:#08000e;color:#fff}.market-products button.active{background:#dfff00;color:#111;box-shadow:0 0 40px #dfff0088}.market-products b,.market-products span{display:block;margin-top:20px}.futuremarket>section{padding:80px 7vw;display:grid;grid-template-columns:1fr 1fr;gap:70px}

/* NEON 29 */
.dream{background:#05000c;display:grid;place-items:center;min-height:1700px}.dream-bg{position:absolute;font-size:30vw;font-weight:900;color:transparent;-webkit-text-stroke:1px #21efff11;white-space:nowrap;animation:drift 10s linear infinite}.dream main{position:relative;z-index:2;width:min(1100px,90%);padding:70px;background:#07000dc9;border:1px solid #ff21d0;box-shadow:0 0 80px #ff21d033}.dream main h1{font-size:clamp(80px,13vw,180px);line-height:.58;color:#dfff00;text-shadow:4px 0 #ff21d0}.dream nav{position:absolute;z-index:4;bottom:30px;display:flex;gap:5px;flex-wrap:wrap;justify-content:center}.dream nav button{padding:13px 18px;border:1px solid #21efff;background:#06000c;color:#fff}.dream nav button.active{background:#ff21d0;color:#111}

/* NEON 30 */
.glitch{background:#050006}.glitch-word{position:absolute;inset:20% 0;font-size:25vw;font-weight:900;color:#ff21d008;text-align:center;line-height:.7}.glitch header{position:relative;z-index:5;padding:25px 5vw;border-bottom:1px solid #ff21d044;display:flex;justify-content:space-between}.glitch main{position:relative;z-index:4;min-height:1300px;margin:40px 5vw}.glitch-card{position:absolute;width:210px;height:150px;padding:20px;text-align:left;border:1px solid #21efff;background:#07000dd9;color:#fff;box-shadow:8px 8px #ff21d0;transition:.4s}.glitch-card:hover,.glitch-card.active{background:#dfff00;color:#111;transform:scale(1.12) rotate(0)!important;z-index:20}.glitch-card b{display:block;font-size:24px;margin-top:20px}.gc0{left:5%;top:5%;transform:rotate(-5deg)}.gc1{left:35%;top:13%;transform:rotate(4deg)}.gc2{right:5%;top:7%;transform:rotate(-3deg)}.gc3{left:12%;top:38%;transform:rotate(5deg)}.gc4{right:20%;top:35%;transform:rotate(-6deg)}.gc5{left:42%;top:62%;transform:rotate(3deg)}.gc6{right:3%;top:70%;transform:rotate(-2deg)}.glitch-info{position:absolute;left:26%;top:27%;width:50%;min-height:500px;padding:50px;border:1px solid #21efff;background:#08000ee8;box-shadow:0 0 50px #21efff22;opacity:.95}.glitch-info h1{font-size:90px;line-height:.6;color:#dfff00}.glitch-info.visible{animation:glitchIn .4s ease}

/* animations */
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes barPulse{from{transform:scaleY(.45);opacity:.25}to{transform:scaleY(1);opacity:.8}}
@keyframes laserMove{0%,100%{margin-left:-5%;opacity:.3}50%{margin-left:5%;opacity:1}}
@keyframes drift{to{transform:translateX(-25%)}}
@keyframes glitchIn{0%{opacity:0;transform:translate(10px,-8px)}50%{transform:translate(-7px,5px)}100%{opacity:.95;transform:none}}

/* responsive */
@media(max-width:850px){
.experience-switcher{left:7px;right:7px;justify-content:center}.experience-switcher small{display:none}
.data-services{grid-template-columns:1fr}.data-git{grid-template-columns:1fr 1fr}.data-reviews{grid-template-columns:1fr}
.editorial-grid{grid-template-columns:1fr}.editorial-grid>section{grid-column:auto!important;padding:35px}.editorial-title{min-height:600px}.editorial-title h1{font-size:75px}
.swiss>header{grid-template-columns:1fr 1fr}.swiss>header small{display:none}.swiss-hero{grid-template-columns:80px 1fr;padding:70px 25px}.swiss-red{width:65px;height:65px;font-size:45px}.swiss-hero h1{font-size:75px}
.architect-board{grid-template-columns:1fr}.architect-side{border-right:0;border-bottom:1px solid #111;display:flex;overflow:auto}.architect-side button{min-width:190px}.architect-main{padding:45px 25px}.architect-lower{grid-template-columns:1fr;padding:50px 25px}
.catalog{padding:15px}.catalog-cover{grid-template-columns:1fr;padding:70px 0}.catalog-cover>div{width:170px;height:170px}.catalog-cover h2{font-size:70px}
.newspaper{padding:15px}.newspaper header{grid-template-columns:1fr}.newspaper header h1{text-align:left;font-size:75px}.newspaper header b{display:none}.news-layout{grid-template-columns:1fr}.news-main{grid-row:auto}.news-layout>article:nth-child(4),.news-layout>article:nth-child(5){grid-column:auto}
.museum-room{grid-template-columns:1fr}.museum-room nav{display:flex;overflow:auto;border-right:0}.museum-room nav button{min-width:170px}.museum-room main{padding:50px 25px}.museum-room h1{font-size:70px}
.blue-title{padding:80px 25px}.blueprint-light>nav{padding:0 25px}.blueprint-light>main{margin:25px;padding:25px}.blueprint-light>main h2{font-size:65px}
.luxury>header{grid-template-columns:1fr 1fr}.luxury>header small{display:none}.luxury-hero,.luxury-projects,.luxury>section:not(.luxury-hero){padding:80px 25px}.luxury-split{grid-template-columns:1fr;gap:60px}.luxury-hero h1{font-size:75px}
.brutal-title{grid-template-columns:70px 1fr;padding:50px 20px}.brutal-title span{font-size:35px}.brutal-title h1{font-size:70px}
.map-area{margin:20px 15px}.map-card{position:absolute;left:5%;right:5%;width:90%;bottom:5%}.map-bottom{grid-template-columns:1fr;padding:50px 25px}
.archive-layout{grid-template-columns:1fr}.archive-layout aside{display:flex;overflow:auto}.archive-layout aside button{min-width:190px}.archive-layout main{padding:50px 25px}.archive-layout main h1{font-size:70px}
.dashboard-grid{grid-template-columns:1fr}.dashboard-grid .dash-intro{grid-column:auto}.dashboard-grid>section{padding:30px 20px}
.monitor-hero{grid-template-columns:1fr;padding:70px 25px}.monitor-hero h1{font-size:75px}.monitor-chart{margin:0 25px}.monitor-columns{grid-template-columns:1fr;padding:60px 25px}
.space-core{height:700px}.space-core button{width:110px}.orbit0{transform:rotate(0deg) translateY(-260px)}.orbit1{transform:rotate(60deg) translateY(-260px)}.orbit2{transform:rotate(120deg) translateY(-260px)}.orbit3{transform:rotate(180deg) translateY(-260px)}.orbit4{transform:rotate(240deg) translateY(-260px)}.orbit5{transform:rotate(300deg) translateY(-260px)}.space-dark>section{padding:60px 25px}.space-dark>section h1{font-size:75px}
.vault main{grid-template-columns:1fr;padding:40px 20px}.vault-card,.vc0,.vc3{grid-column:auto;grid-row:auto}
.deck{grid-template-columns:1fr}.deck aside{min-height:auto}.deck main>section{padding:60px 25px}.deck main h1{font-size:80px}
.black-cover{padding:80px 25px}.black-cover h1{font-size:80px}.blackbook>section{padding:70px 25px}
.noir-main{grid-template-columns:1fr;padding:70px 25px}.noir-object{height:420px}.noir-object b{font-size:120px}.noir-main h1{font-size:70px}
.arcade-neon-screen{margin:50px 15px;padding:30px;min-height:700px}.arcade-neon-screen h1{font-size:70px}
.r1{width:350px;height:350px}.r2{width:500px;height:250px}.r3{width:250px;height:500px}.hologram main{padding:35px}.hologram main h1{font-size:70px}
.synth main{padding:150px 25px 70px}.synth main h1{font-size:85px}.synth>section{grid-template-columns:1fr;padding:60px 25px}
.city-neon-map{margin:40px 15px;min-height:750px}.cybercity>main{padding:60px 25px}.cybercity>main h1{font-size:70px}
.neon-terminal-grid{grid-template-columns:1fr;padding:30px 15px}.neon-terminal-grid>section,.terminal-intro{grid-column:auto}.terminal-intro h1{font-size:75px}
.laser main{padding:100px 25px}.laser main h1{font-size:90px}
.market-products{grid-template-columns:1fr 1fr}.market-products button{min-height:180px}.market-hero{padding:100px 25px 60px}.market-hero h1{font-size:90px}.futuremarket>section{grid-template-columns:1fr;padding:60px 25px}
.dream main{padding:40px}.dream main h1{font-size:75px}
.glitch main{margin:20px 15px}.glitch-card{position:relative!important;left:auto!important;right:auto!important;top:auto!important;width:100%;height:110px;margin:12px 0;transform:none!important}.glitch-info{position:relative;left:auto;top:auto;width:100%;margin-top:30px;min-height:500px}.glitch-info h1{font-size:65px}
}
@media(max-width:550px){
.data-git{grid-template-columns:1fr}.data-contact{padding:90px 25px}.data-contact h2{font-size:60px}
}
`;

