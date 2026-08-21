"use client";

import { useState } from "react";

const projects = [
  {
    name: "Tint Scholar",
    type: "Education Platform",
    tech: "React · Node · MongoDB",
  },
  {
    name: "Academic Management",
    type: "Business System",
    tech: "React · Node · JWT · MongoDB",
  },
  {
    name: "Inventory & Billing",
    type: "Enterprise Software",
    tech: "Java · Spring Boot · MySQL",
  },
  {
    name: "Favorite Movies",
    type: "Web Application",
    tech: "Node · Sequelize · MySQL",
  },
];

const products = [
  ["Admin Dashboard Kit", "$49"],
  ["Inventory Manager", "$79"],
  ["School Management System", "$129"],
  ["SaaS Starter", "$89"],
  ["AI Application Starter", "$99"],
];

const tech = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Java",
  "Spring Boot",
  "TypeScript",
  "Tailwind",
  "Docker",
  "AWS",
];

const services = [
  ["01", "CUSTOM BUILD", "I build your application from scratch."],
  ["02", "FIX EXISTING", "I diagnose and repair existing software."],
  ["03", "UPGRADE", "I add features, integrations and improvements."],
];

/* =========================================================
   MAIN
========================================================= */

export default function Page() {
  const [page, setPage] = useState(0);

  const next = () =>
    setPage((p) => (p + 1) % 30);

  const previous = () =>
    setPage((p) => (p - 1 + 30) % 30);

  const random = () =>
    setPage(Math.floor(Math.random() * 30));

  return (
    <main className={`site structure-${page}`}>
      <style jsx global>{styles}</style>

      <div className="switcher">
        <button onClick={previous}>←</button>

        <span>
          {String(page + 1).padStart(2, "0")} / 30
        </span>

        <button onClick={next}>→</button>

        <button onClick={random}>RANDOM</button>
      </div>

      <Structure
        page={page}
        next={next}
      />
    </main>
  );
}

/* =========================================================
   STRUCTURE ROUTER
========================================================= */

function Structure({ page, next }) {
  switch (page) {
    case 0:
      return <Workshop next={next} />;

    case 1:
      return <OperatingSystem next={next} />;

    case 2:
      return <Terminal next={next} />;

    case 3:
      return <Newspaper next={next} />;

    case 4:
      return <ProductWall next={next} />;

    case 5:
      return <InfiniteCanvas next={next} />;

    case 6:
      return <Timeline next={next} />;

    case 7:
      return <FileExplorer next={next} />;

    case 8:
      return <Factory next={next} />;

    case 9:
      return <ControlRoom next={next} />;

    case 10:
      return <Building next={next} />;

    case 11:
      return <GameWorld next={next} />;

    case 12:
      return <Map next={next} />;

    case 13:
      return <Conversation next={next} />;

    case 14:
      return <Manifesto next={next} />;

    case 15:
      return <Magazine next={next} />;

    case 16:
      return <DataStream next={next} />;

    case 17:
      return <Directory next={next} />;

    case 18:
      return <AssemblyLine next={next} />;

    case 19:
      return <QuestionAnswer next={next} />;

    case 20:
      return <PortfolioUniverse next={next} />;

    case 21:
      return <SoftwareMachine next={next} />;

    case 22:
      return <Marketplace next={next} />;

    case 23:
      return <CaseStudy next={next} />;

    case 24:
      return <Dashboard next={next} />;

    case 25:
      return <StoryBook next={next} />;

    case 26:
      return <CommandMission next={next} />;

    case 27:
      return <Gallery next={next} />;

    case 28:
      return <WorkshopFloor next={next} />;

    default:
      return <Experimental next={next} />;
  }
}

/* =========================================================
   01 — WORKSHOP
========================================================= */

function Workshop({ next }) {
  return (
    <>
      <div className="workshop">
        <aside className="workshop-side">
          <Logo />
          <div className="vertical">
            SOFTWARE WORKSHOP
          </div>
        </aside>

        <section className="workshop-center">
          <small>HALFCLUTCH.TECH</small>

          <h1>
            SOFTWARE
            <br />
            <em>WORKSHOP</em>
          </h1>

          <p>
            I build software.
            <br />
            I sell software.
            <br />
            I repair software.
          </p>

          <button onClick={next}>
            ENTER WORKSHOP →
          </button>
        </section>

        <aside className="workshop-right">
          <div>BUILD</div>
          <div>REPAIR</div>
          <div>SHIP</div>
          <div>SELL</div>
        </aside>
      </div>

      <section className="workbench">
        <div>
          <span>PROJECTS</span>
          <ProjectObjects />
        </div>

        <div>
          <span>SOFTWARE INVENTORY</span>
          <ProductObjects />
        </div>

        <div>
          <span>CAPABILITIES</span>
          <TechObjects />
        </div>
      </section>

      <FooterStrip />
    </>
  );
}

/* =========================================================
   02 — OPERATING SYSTEM
========================================================= */

function OperatingSystem({ next }) {
  return (
    <div className="os">
      <div className="os-desktop">
        <div className="os-brand">
          HALFCLUTCH
        </div>

        <div className="window intro-window">
          <div className="window-bar">
            ABOUT.EXE
          </div>

          <h1>
            Developer
            <br />
            + Software
            <br />
            Studio
          </h1>

          <p>
            A portfolio, software store and
            development workshop.
          </p>
        </div>

        <div className="window projects-window">
          <div className="window-bar">
            PROJECTS/
          </div>

          {projects.map((p) => (
            <div className="os-row" key={p.name}>
              <b>{p.name}</b>
              <span>{p.type}</span>
            </div>
          ))}
        </div>

        <div className="window store-window">
          <div className="window-bar">
            SOFTWARE_STORE/
          </div>

          {products.map(([name, price]) => (
            <div className="os-product" key={name}>
              <b>{name}</b>
              <strong>{price}</strong>
            </div>
          ))}
        </div>

        <div className="window service-window">
          <div className="window-bar">
            SERVICE_MANAGER
          </div>

          {services.map(([n, title, text]) => (
            <div key={n}>
              <small>{n}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="os-taskbar">
        <Logo />
        <button onClick={next}>
          NEXT EXPERIENCE →
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   03 — TERMINAL
========================================================= */

function Terminal({ next }) {
  return (
    <div className="terminal-page">
      <div className="terminal-head">
        halfclutch@developer:~$
      </div>

      <section className="terminal-command">
        <p>$ whoami</p>

        <h1>
          SHAVANDEB
          <br />
          <span>KAITI</span>
        </h1>

        <p>$ cat mission.txt</p>

        <h2>
          BUILD SOFTWARE THAT PEOPLE
          <br />
          CAN ACTUALLY USE.
        </h2>
      </section>

      <section className="terminal-stream">
        <p>$ ls projects/</p>

        {projects.map((p) => (
          <div className="terminal-entry" key={p.name}>
            <span>./</span>
            <b>{p.name}</b>
            <small>{p.tech}</small>
          </div>
        ))}

        <p>$ ls software-store/</p>

        {products.map(([name, price]) => (
          <div className="terminal-entry" key={name}>
            <span>$</span>
            <b>{name}</b>
            <small>{price}</small>
          </div>
        ))}
      </section>

      <section className="terminal-services">
        <p>$ ./services</p>

        {services.map(([n, title, text]) => (
          <article key={n}>
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <button className="terminal-next" onClick={next}>
        $ next-experience
      </button>
    </div>
  );
}

/* =========================================================
   04 — NEWSPAPER
========================================================= */

function Newspaper({ next }) {
  return (
    <div className="newspaper">
      <header>
        <small>THE HALFCLUTCH TIMES</small>

        <h1>
          THE
          <br />
          SOFTWARE
          <br />
          EDITION
        </h1>

        <span>VOL. 01 · 2026</span>
      </header>

      <section className="news-lead">
        <div>
          <small>MAIN STORY</small>

          <h2>
            ONE DEVELOPER.
            <br />
            THREE WAYS
            <br />
            TO BUILD.
          </h2>

          <p>
            HalfClutch is an independent software
            workshop where pre-built applications,
            custom development and software repair
            meet.
          </p>
        </div>

        <div className="news-art">
          HC
        </div>
      </section>

      <section className="news-columns">
        {projects.map((p) => (
          <article key={p.name}>
            <small>{p.type}</small>
            <h3>{p.name}</h3>
            <p>{p.tech}</p>
          </article>
        ))}
      </section>

      <section className="classifieds">
        <h2>SOFTWARE FOR SALE</h2>

        {products.map(([name, price]) => (
          <div key={name}>
            <b>{name}</b>
            <span>{price}</span>
          </div>
        ))}
      </section>

      <section className="classifieds services-news">
        <h2>NEED SOFTWARE?</h2>

        {services.map(([n, title, text]) => (
          <div key={n}>
            <b>{title}</b>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <button onClick={next}>
        TURN THE PAGE →
      </button>
    </div>
  );
}

/* =========================================================
   05 — PRODUCT WALL
========================================================= */

function ProductWall({ next }) {
  return (
    <div className="product-wall">
      <section className="wall-intro">
        <span>HALFCLUTCH / SOFTWARE STORE</span>

        <h1>
          SOFTWARE
          <br />
          IS THE
          <br />
          <strong>PRODUCT.</strong>
        </h1>

        <button onClick={next}>
          SEE THE WORKSHOP
        </button>
      </section>

      <section className="wall-products">
        {products.map(([name, price], i) => (
          <article
            key={name}
            className={`wall-product wall-${i}`}
          >
            <small>PRODUCT 0{i + 1}</small>

            <h2>{name}</h2>

            <div>
              <span>READY TO DEPLOY</span>
              <b>{price}</b>
            </div>
          </article>
        ))}
      </section>

      <section className="wall-projects">
        <div className="wall-label">
          BUILT SYSTEMS
        </div>

        {projects.map((p) => (
          <div key={p.name}>
            <b>{p.name}</b>
            <span>{p.type}</span>
            <small>{p.tech}</small>
          </div>
        ))}
      </section>

      <section className="wall-build">
        <h2>
          CAN'T FIND
          <br />
          WHAT YOU NEED?
        </h2>

        <p>
          Commission a completely custom application.
        </p>

        <button>START CUSTOM BUILD</button>
      </section>
    </div>
  );
}

/* =========================================================
   06 — INFINITE CANVAS
========================================================= */

function InfiniteCanvas({ next }) {
  return (
    <div className="canvas-page">
      <div className="canvas-title">
        HALFCLUTCH
      </div>

      <div className="canvas-note note-one">
        <small>HELLO</small>
        <h1>
          I BUILD
          <br />
          SOFTWARE.
        </h1>
      </div>

      <div className="canvas-note note-two">
        <small>PROJECTS</small>

        {projects.map((p) => (
          <div key={p.name}>
            {p.name}
          </div>
        ))}
      </div>

      <div className="canvas-note note-three">
        <small>FOR SALE</small>

        {products.slice(0, 3).map(([name, price]) => (
          <div key={name}>
            {name}
            <b>{price}</b>
          </div>
        ))}
      </div>

      <div className="canvas-note note-four">
        <small>TECH STACK</small>

        {tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="canvas-note note-five">
        <small>HIRE ME</small>

        <h2>
          BUILD
          <br />
          REPAIR
          <br />
          UPGRADE
        </h2>

        <button onClick={next}>
          NEXT CANVAS
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   07 — TIMELINE
========================================================= */

function Timeline({ next }) {
  return (
    <div className="timeline-page">
      <section className="timeline-start">
        <small>THE STORY OF A DEVELOPER</small>

        <h1>
          FROM
          <br />
          <span>CODE</span>
          <br />
          TO
          <br />
          <strong>COMPANY.</strong>
        </h1>
      </section>

      <section className="timeline-track">
        <div className="timeline-line" />

        <article>
          <span>01</span>
          <h2>LEARN</h2>
          <p>
            Computer science, programming and
            full-stack development.
          </p>
        </article>

        <article>
          <span>02</span>
          <h2>BUILD</h2>

          {projects.map((p) => (
            <div key={p.name}>
              <b>{p.name}</b>
              <small>{p.tech}</small>
            </div>
          ))}
        </article>

        <article>
          <span>03</span>
          <h2>PRODUCTIZE</h2>

          {products.map(([name, price]) => (
            <div key={name}>
              {name}
              <b>{price}</b>
            </div>
          ))}
        </article>

        <article>
          <span>04</span>
          <h2>WORK WITH YOU</h2>

          {services.map(([n, title, text]) => (
            <div key={n}>
              <b>{title}</b>
              <p>{text}</p>
            </div>
          ))}
        </article>
      </section>

      <button onClick={next}>
        CONTINUE →
      </button>
    </div>
  );
}

/* =========================================================
   08 — FILE EXPLORER
========================================================= */

function FileExplorer({ next }) {
  return (
    <div className="file-page">
      <aside>
        <Logo />

        <div>
          <span>ROOT</span>
          <b>/halfclutch</b>
        </div>

        <nav>
          <a>projects/</a>
          <a>products/</a>
          <a>services/</a>
          <a>developer/</a>
        </nav>
      </aside>

      <main>
        <div className="file-path">
          /halfclutch
        </div>

        <section className="file-hero">
          <h1>
            SOFTWARE
            <br />
            WORKSHOP
          </h1>

          <p>
            Open a directory to explore.
          </p>
        </section>

        <section className="file-directory">
          <h2>/projects</h2>

          {projects.map((p) => (
            <div key={p.name}>
              <span>📁</span>
              <b>{p.name}</b>
              <small>{p.tech}</small>
            </div>
          ))}
        </section>

        <section className="file-directory">
          <h2>/products</h2>

          {products.map(([name, price]) => (
            <div key={name}>
              <span>📦</span>
              <b>{name}</b>
              <small>{price}</small>
            </div>
          ))}
        </section>

        <section className="file-directory">
          <h2>/services</h2>

          {services.map(([n, title, text]) => (
            <div key={n}>
              <span>⚙</span>
              <b>{title}</b>
              <small>{text}</small>
            </div>
          ))}
        </section>

        <button onClick={next}>
          OPEN NEXT DIRECTORY →
        </button>
      </main>
    </div>
  );
}

/* =========================================================
   09 — FACTORY
========================================================= */

function Factory({ next }) {
  return (
    <div className="factory-page">
      <section className="factory-entry">
        <small>HALFCLUTCH FACTORY</small>

        <h1>
          RAW IDEA
          <br />
          <span>→ SOFTWARE</span>
        </h1>

        <div className="factory-machine">
          INPUT
          <span>→</span>
          CODE
          <span>→</span>
          TEST
          <span>→</span>
          DEPLOY
        </div>
      </section>

      <section className="factory-stations">
        <article>
          <small>STATION 01</small>
          <h2>PROJECTS</h2>

          {projects.map((p) => (
            <div key={p.name}>
              <b>{p.name}</b>
              <span>{p.tech}</span>
            </div>
          ))}
        </article>

        <article>
          <small>STATION 02</small>
          <h2>REPAIR</h2>

          <p>
            Existing application broken?
            Send it to the repair station.
          </p>

          <button>START REPAIR</button>
        </article>

        <article>
          <small>STATION 03</small>
          <h2>STORE</h2>

          {products.map(([name, price]) => (
            <div key={name}>
              {name}
              <b>{price}</b>
            </div>
          ))}
        </article>
      </section>

      <section className="factory-end">
        <h2>
          YOUR SOFTWARE
          <br />
          LEAVES HERE.
        </h2>

        <button onClick={next}>
          NEXT FACTORY →
        </button>
      </section>
    </div>
  );
}

/* =========================================================
   10 — CONTROL ROOM
========================================================= */

function ControlRoom({ next }) {
  return (
    <div className="control-page">
      <header>
        <Logo />
        <span>SYSTEM STATUS: ONLINE</span>
      </header>

      <section className="control-core">
        <div className="radar">
          HC
        </div>

        <div>
          <small>CENTRAL SOFTWARE UNIT</small>

          <h1>
            HALF
            <br />
            CLUTCH
          </h1>

          <p>
            Development · Products · Repairs
          </p>
        </div>
      </section>

      <section className="control-grid">
        <article>
          <small>PROJECT LOAD</small>
          <strong>04</strong>
          <ProjectMini />
        </article>

        <article>
          <small>PRODUCT INVENTORY</small>
          <strong>05</strong>

          {products.map(([name, price]) => (
            <div key={name}>
              {name}
              <b>{price}</b>
            </div>
          ))}
        </article>

        <article>
          <small>AVAILABLE OPERATIONS</small>

          {services.map(([n, title]) => (
            <div key={n}>
              <span>{n}</span>
              <b>{title}</b>
            </div>
          ))}
        </article>
      </section>

      <button onClick={next}>
        ACCESS NEXT SYSTEM →
      </button>
    </div>
  );
}

/* =========================================================
   11 — BUILDING
========================================================= */

function Building({ next }) {
  return (
    <div className="building">
      <section className="building-exterior">
        <small>HALFCLUTCH / 001</small>

        <h1>
          SOFTWARE
          <br />
          <span>BUILDING</span>
        </h1>

        <p>
          Enter the building.
        </p>
      </section>

      <section className="building-floor floor-one">
        <div className="floor-number">
          01
        </div>

        <div>
          <small>PROJECT FLOOR</small>

          <h2>
            THINGS
            <br />
            I HAVE
            <br />
            BUILT.
          </h2>
        </div>

        <ProjectMini />
      </section>

      <section className="building-floor floor-two">
        <div className="floor-number">
          02
        </div>

        <div>
          <small>SOFTWARE STORE</small>

          <h2>
            TAKE
            <br />
            SOMETHING
            <br />
            HOME.
          </h2>
        </div>

        <ProductMini />
      </section>

      <section className="building-floor floor-three">
        <div className="floor-number">
          03
        </div>

        <div>
          <small>SERVICE FLOOR</small>

          <h2>
            LET'S
            <br />
            BUILD
            <br />
            YOURS.
          </h2>
        </div>

        <ServiceMini />
      </section>

      <button onClick={next}>
        EXIT / NEXT BUILDING →
      </button>
    </div>
  );
}

/* =========================================================
   12 — GAME WORLD
========================================================= */

function GameWorld({ next }) {
  return (
    <div className="game-page">
      <section className="game-start">
        <div className="game-hud">
          <span>PLAYER 01</span>
          <span>LEVEL 01</span>
          <span>HALFCLUTCH</span>
        </div>

        <h1>
          ENTER
          <br />
          THE
          <br />
          <span>WORKSHOP.</span>
        </h1>

        <button onClick={next}>
          START MISSION
        </button>
      </section>

      <section className="game-world">
        <div className="game-zone projects-zone">
          <small>ZONE 01</small>
          <h2>PROJECTS</h2>
          <ProjectMini />
        </div>

        <div className="game-zone store-zone">
          <small>ZONE 02</small>
          <h2>STORE</h2>
          <ProductMini />
        </div>

        <div className="game-zone service-zone">
          <small>ZONE 03</small>
          <h2>BUILD LAB</h2>
          <ServiceMini />
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   13 — MAP
========================================================= */

function Map({ next }) {
  return (
    <div className="map-page">
      <section className="map-center">
        <div className="map-orbit orbit-a">
          <span>PROJECTS</span>
        </div>

        <div className="map-orbit orbit-b">
          <span>STORE</span>
        </div>

        <div className="map-orbit orbit-c">
          <span>SERVICES</span>
        </div>

        <div className="map-core">
          HALF
          <br />
          CLUTCH
        </div>
      </section>

      <section className="map-info">
        <h1>
          FIND YOUR
          <br />
          <span>SOFTWARE PATH.</span>
        </h1>

        <p>
          Explore projects, buy ready-made software
          or create something custom.
        </p>

        <button onClick={next}>
          EXPLORE →
        </button>
      </section>

      <section className="map-bottom">
        <ProjectMini />
        <ProductMini />
        <ServiceMini />
      </section>
    </div>
  );
}

/* =========================================================
   14 — CONVERSATION
========================================================= */

function Conversation({ next }) {
  return (
    <div className="conversation">
      <div className="conversation-head">
        HALFCLUTCH.TECH
      </div>

      <section>
        <div className="bubble user">
          Who are you?
        </div>

        <div className="bubble answer">
          I'm Shavandeb, a software developer.
        </div>

        <div className="bubble user">
          What do you build?
        </div>

        <div className="bubble answer">
          Web applications, business systems,
          dashboards, platforms and tools.
        </div>

        <div className="bubble user">
          Can I buy something already built?
        </div>

        <div className="bubble answer">
          Yes.
        </div>

        <div className="chat-products">
          {products.map(([name, price]) => (
            <div key={name}>
              <b>{name}</b>
              <span>{price}</span>
            </div>
          ))}
        </div>

        <div className="bubble user">
          What if I already have an application?
        </div>

        <div className="bubble answer">
          I can fix, upgrade or rebuild it.
        </div>

        <button onClick={next}>
          START NEW CONVERSATION →
        </button>
      </section>
    </div>
  );
}

/* =========================================================
   15 — MANIFESTO
========================================================= */

function Manifesto({ next }) {
  return (
    <div className="manifesto">
      <section>
        <small>HALFCLUTCH MANIFESTO</small>

        <h1>
          I DON'T
          <br />
          JUST MAKE
          <br />
          <span>WEBSITES.</span>
        </h1>
      </section>

      <section>
        <p>
          I make software.
        </p>

        <p>
          Software that can be bought.
        </p>

        <p>
          Software that can be customized.
        </p>

        <p>
          Software that can be repaired.
        </p>
      </section>

      <section className="manifesto-services">
        {services.map(([n, title, text]) => (
          <article key={n}>
            <span>{n}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section>
        <h2>
          THINGS
          <br />
          ALREADY
          <br />
          BUILT.
        </h2>

        <ProjectMini />
      </section>

      <button onClick={next}>
        KEEP READING →
      </button>
    </div>
  );
}

/* =========================================================
   16 — MAGAZINE
========================================================= */

function Magazine({ next }) {
  return (
    <div className="magazine">
      <header>
        <span>HALFCLUTCH</span>
        <span>SOFTWARE / CULTURE / CODE</span>
        <span>2026</span>
      </header>

      <section className="mag-cover">
        <div>
          <small>FEATURE</small>

          <h1>
            THE
            <br />
            <span>INDEPENDENT</span>
            <br />
            DEVELOPER.
          </h1>
        </div>

        <div className="mag-cover-image">
          HC
        </div>
      </section>

      <section className="mag-story">
        <article>
          <small>WORK</small>

          <h2>
            WHAT I'VE
            <br />
            BUILT.
          </h2>

          <ProjectMini />
        </article>

        <article>
          <small>PRODUCTS</small>

          <h2>
            WHAT YOU
            <br />
            CAN BUY.
          </h2>

          <ProductMini />
        </article>
      </section>

      <section className="mag-services">
        <h2>
          NEED
          <br />
          SOMETHING
          <br />
          <span>DIFFERENT?</span>
        </h2>

        <ServiceMini />
      </section>

      <button onClick={next}>
        NEXT ISSUE →
      </button>
    </div>
  );
}

/* =========================================================
   17 — DATA STREAM
========================================================= */

function DataStream({ next }) {
  return (
    <div className="stream-page">
      <div className="stream-hero">
        <small>
          STREAM_ID: HALFCLUTCH
        </small>

        <h1>
          SOFTWARE
          <br />
          <span>STREAM.</span>
        </h1>
      </div>

      <div className="stream-feed">
        <StreamBlock
          title="IDENTITY"
          content="Developer · Builder · Software Seller"
        />

        <StreamBlock
          title="PROJECTS"
          content={projects.map((p) => p.name).join(" / ")}
        />

        <StreamBlock
          title="PRODUCTS"
          content={products
            .map((p) => p[0])
            .join(" / ")}
        />

        <StreamBlock
          title="OPERATIONS"
          content="CUSTOM BUILD / REPAIR / UPGRADE"
        />

        <StreamBlock
          title="STACK"
          content={tech.join(" · ")}
        />

        <button onClick={next}>
          CONTINUE STREAM →
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   18 — DIRECTORY
========================================================= */

function Directory({ next }) {
  return (
    <div className="directory">
      <header>
        <h1>HALFCLUTCH DIRECTORY</h1>
        <span>EST. 2026</span>
      </header>

      <section className="directory-index">
        <div className="directory-letter">
          H
        </div>

        <div>
          <h2>
            HALFCLUTCH
          </h2>

          <p>
            Independent developer and software workshop.
          </p>
        </div>
      </section>

      <section>
        <h3>PROJECT INDEX</h3>

        {projects.map((p, i) => (
          <div className="directory-item" key={p.name}>
            <span>0{i + 1}</span>
            <b>{p.name}</b>
            <small>{p.type}</small>
          </div>
        ))}
      </section>

      <section>
        <h3>SOFTWARE INDEX</h3>

        {products.map(([name, price], i) => (
          <div className="directory-item" key={name}>
            <span>0{i + 1}</span>
            <b>{name}</b>
            <small>{price}</small>
          </div>
        ))}
      </section>

      <section>
        <h3>SERVICE INDEX</h3>

        {services.map(([n, title, text]) => (
          <div className="directory-item" key={n}>
            <span>{n}</span>
            <b>{title}</b>
            <small>{text}</small>
          </div>
        ))}
      </section>

      <button onClick={next}>
        NEXT DIRECTORY →
      </button>
    </div>
  );
}

/* =========================================================
   19 — ASSEMBLY LINE
========================================================= */

function AssemblyLine({ next }) {
  return (
    <div className="assembly">
      <section className="assembly-start">
        <small>RAW INPUT</small>

        <h1>
          YOUR
          <br />
          <span>IDEA.</span>
        </h1>
      </section>

      <section className="assembly-process">
        <div>
          <span>01</span>
          <h2>PLAN</h2>
        </div>

        <div>
          <span>02</span>
          <h2>BUILD</h2>
        </div>

        <div>
          <span>03</span>
          <h2>TEST</h2>
        </div>

        <div>
          <span>04</span>
          <h2>SHIP</h2>
        </div>
      </section>

      <section className="assembly-output">
        <h2>
          SOFTWARE
          <br />
          OUTPUT.
        </h2>

        <ProjectMini />
      </section>

      <section className="assembly-store">
        <h2>
          OR TAKE
          <br />
          SOMETHING
          <br />
          <span>OFF THE LINE.</span>
        </h2>

        <ProductMini />
      </section>

      <button onClick={next}>
        START NEW LINE →
      </button>
    </div>
  );
}

/* =========================================================
   20 — QUESTION / ANSWER
========================================================= */

function QuestionAnswer({ next }) {
  return (
    <div className="qa">
      <section className="qa-intro">
        <small>HALFCLUTCH.TECH</small>

        <h1>
          HAVE A
          <br />
          SOFTWARE
          <br />
          <span>PROBLEM?</span>
        </h1>
      </section>

      <section className="qa-list">
        <article>
          <h2>
            "I NEED AN APPLICATION."
          </h2>

          <p>
            Custom software development from idea
            through deployment.
          </p>

          <button>BUILD IT</button>
        </article>

        <article>
          <h2>
            "I ALREADY HAVE AN APPLICATION."
          </h2>

          <p>
            Existing application fixes,
            upgrades and integrations.
          </p>

          <button>FIX IT</button>
        </article>

        <article>
          <h2>
            "I NEED SOMETHING READY."
          </h2>

          <p>
            Buy one of the pre-built applications.
          </p>

          <ProductMini />
        </article>

        <article>
          <h2>
            "SHOW ME WHAT YOU CAN BUILD."
          </h2>

          <ProjectMini />
        </article>
      </section>

      <button onClick={next}>
        NEXT QUESTION →
      </button>
    </div>
  );
}

/* =========================================================
   21 — PORTFOLIO UNIVERSE
========================================================= */

function PortfolioUniverse({ next }) {
  return (
    <div className="universe">
      <section className="universe-core">
        <div className="universe-ring ring-one">
          PROJECTS
        </div>

        <div className="universe-ring ring-two">
          PRODUCTS
        </div>

        <div className="universe-ring ring-three">
          SERVICES
        </div>

        <div className="universe-center">
          <small>DEVELOPER</small>

          <h1>
            HALF
            <br />
            CLUTCH
          </h1>
        </div>
      </section>

      <section className="universe-info">
        <div>
          <small>PROJECT PLANETS</small>
          <ProjectMini />
        </div>

        <div>
          <small>PRODUCT PLANETS</small>
          <ProductMini />
        </div>

        <div>
          <small>BUILD STATION</small>
          <ServiceMini />
        </div>
      </section>

      <button onClick={next}>
        JUMP TO NEXT UNIVERSE →
      </button>
    </div>
  );
}

/* =========================================================
   22 — SOFTWARE MACHINE
========================================================= */

function SoftwareMachine({ next }) {
  return (
    <div className="machine">
      <section className="machine-header">
        <div className="machine-logo">
          HC
        </div>

        <div>
          <small>MACHINE TYPE</small>
          <h1>
            SOFTWARE
            <br />
            ENGINE
          </h1>
        </div>
      </section>

      <section className="machine-body">
        <div className="machine-input">
          <small>INPUT</small>

          <h2>
            IDEA
            <br />
            PROBLEM
            <br />
            BUSINESS
          </h2>
        </div>

        <div className="machine-core">
          <span>HC</span>
        </div>

        <div className="machine-output">
          <small>OUTPUT</small>

          <h2>
            APPLICATION
            <br />
            SYSTEM
            <br />
            PRODUCT
          </h2>
        </div>
      </section>

      <section className="machine-products">
        <h2>
          READY-MADE
          <br />
          OUTPUT
        </h2>

        <ProductMini />
      </section>

      <section className="machine-projects">
        <h2>
          PREVIOUS
          <br />
          OUTPUT
        </h2>

        <ProjectMini />
      </section>

      <button onClick={next}>
        RUN NEXT MACHINE →
      </button>
    </div>
  );
}

/* =========================================================
   23 — MARKETPLACE
========================================================= */

function Marketplace({ next }) {
  return (
    <div className="marketplace">
      <aside>
        <Logo />

        <small>
          SOFTWARE
          <br />
          MARKETPLACE
        </small>

        <nav>
          <a>All Software</a>
          <a>Business</a>
          <a>Education</a>
          <a>Developer</a>
          <a>AI</a>
        </nav>
      </aside>

      <main>
        <section className="market-top">
          <div>
            <small>HALFCLUTCH MARKET</small>

            <h1>
              FIND
              <br />
              YOUR
              <br />
              <span>SOFTWARE.</span>
            </h1>
          </div>

          <div className="market-search">
            Search software...
          </div>
        </section>

        <section className="market-grid">
          {products.map(([name, price], i) => (
            <article key={name}>
              <span>0{i + 1}</span>
              <h2>{name}</h2>
              <p>
                Ready-to-use application from
                HalfClutch.
              </p>
              <b>{price}</b>
              <button>VIEW</button>
            </article>
          ))}
        </section>

        <section className="market-custom">
          <h2>
            CAN'T FIND
            <br />
            IT?
          </h2>

          <p>
            Have HalfClutch build exactly what
            you need.
          </p>

          <button>REQUEST CUSTOM SOFTWARE</button>
        </section>

        <section className="market-work">
          <h2>SELLER / DEVELOPER</h2>

          <ProjectMini />
        </section>

        <button onClick={next}>
          NEXT MARKET →
        </button>
      </main>
    </div>
  );
}

/* =========================================================
   24 — CASE STUDY
========================================================= */

function CaseStudy({ next }) {
  return (
    <div className="case-study">
      <section className="case-cover">
        <small>SELECTED CASE STUDIES</small>

        <h1>
          SOFTWARE
          <br />
          THAT
          <br />
          <span>WORKS.</span>
        </h1>
      </section>

      {projects.map((p, i) => (
        <section className="case-block" key={p.name}>
          <div className="case-number">
            0{i + 1}
          </div>

          <div className="case-content">
            <small>{p.type}</small>

            <h2>{p.name}</h2>

            <p>
              A complete software project built
              using {p.tech}.
            </p>

            <div className="case-stack">
              {p.tech}
            </div>
          </div>

          <div className="case-visual">
            {i + 1}
          </div>
        </section>
      ))}

      <section className="case-products">
        <h2>
          SOME OF THE
          <br />
          SYSTEMS ARE
          <br />
          <span>ALREADY READY.</span>
        </h2>

        <ProductMini />
      </section>

      <section className="case-services">
        <ServiceMini />
      </section>

      <button onClick={next}>
        NEXT CASE STUDY →
      </button>
    </div>
  );
}

/* =========================================================
   25 — DASHBOARD
========================================================= */

function Dashboard({ next }) {
  return (
    <div className="dashboard">
      <aside>
        <Logo />

        <div className="dash-user">
          SHAVANDEB
          <small>DEVELOPER</small>
        </div>

        <nav>
          <a>Overview</a>
          <a>Projects</a>
          <a>Products</a>
          <a>Services</a>
          <a>Stack</a>
        </nav>
      </aside>

      <main>
        <header>
          <div>
            <small>DASHBOARD / OVERVIEW</small>

            <h1>
              SOFTWARE
              <br />
              CONTROL.
            </h1>
          </div>

          <span>ONLINE ●</span>
        </header>

        <section className="dash-metrics">
          <div>
            <small>PROJECTS</small>
            <strong>04</strong>
          </div>

          <div>
            <small>PRODUCTS</small>
            <strong>05</strong>
          </div>

          <div>
            <small>SERVICES</small>
            <strong>03</strong>
          </div>

          <div>
            <small>STACK</small>
            <strong>12+</strong>
          </div>
        </section>

        <section className="dash-projects">
          <h2>PROJECT ACTIVITY</h2>
          <ProjectMini />
        </section>

        <section className="dash-store">
          <h2>SOFTWARE INVENTORY</h2>
          <ProductMini />
        </section>

        <section className="dash-services">
          <h2>AVAILABLE OPERATIONS</h2>
          <ServiceMini />
        </section>

        <button onClick={next}>
          OPEN NEXT DASHBOARD →
        </button>
      </main>
    </div>
  );
}

/* =========================================================
   26 — STORY BOOK
========================================================= */

function StoryBook({ next }) {
  return (
    <div className="storybook">
      <section className="story-cover">
        <small>A SOFTWARE STORY</small>

        <h1>
          ONCE UPON
          <br />
          A TIME,
          <br />
          THERE WAS
          <br />
          <span>A DEVELOPER.</span>
        </h1>
      </section>

      <section className="story-page">
        <div className="story-page-number">
          CHAPTER I
        </div>

        <h2>
          HE LEARNED
          <br />
          TO BUILD.
        </h2>

        <ProjectMini />
      </section>

      <section className="story-page">
        <div className="story-page-number">
          CHAPTER II
        </div>

        <h2>
          THEN HE
          <br />
          BUILT THINGS
          <br />
          OTHER PEOPLE
          <br />
          COULD USE.
        </h2>

        <ProductMini />
      </section>

      <section className="story-page">
        <div className="story-page-number">
          CHAPTER III
        </div>

        <h2>
          THEN PEOPLE
          <br />
          STARTED ASKING
          <br />
          HIM TO BUILD
          <br />
          THEIRS.
        </h2>

        <ServiceMini />
      </section>

      <section className="story-end">
        <h2>
          YOUR CHAPTER
          <br />
          COULD BE NEXT.
        </h2>

        <button onClick={next}>
          NEXT STORY →
        </button>
      </section>
    </div>
  );
}

/* =========================================================
   27 — COMMAND MISSION
========================================================= */

function CommandMission({ next }) {
  return (
    <div className="mission">
      <section className="mission-brief">
        <small>MISSION CONTROL</small>

        <h1>
          MISSION:
          <br />
          <span>SOFTWARE.</span>
        </h1>

        <div className="mission-objective">
          OBJECTIVE:
          <br />
          TURN AN IDEA,
          <br />
          PROBLEM OR BUSINESS
          <br />
          INTO WORKING SOFTWARE.
        </div>
      </section>

      <section className="mission-options">
        <article>
          <span>MISSION A</span>
          <h2>BUILD</h2>
          <p>
            Start from zero.
          </p>
          <button>SELECT</button>
        </article>

        <article>
          <span>MISSION B</span>
          <h2>REPAIR</h2>
          <p>
            Something already exists.
          </p>
          <button>SELECT</button>
        </article>

        <article>
          <span>MISSION C</span>
          <h2>BUY</h2>
          <p>
            Start with ready-made software.
          </p>
          <button>SELECT</button>
        </article>
      </section>

      <section className="mission-history">
        <h2>PREVIOUS MISSIONS</h2>
        <ProjectMini />
      </section>

      <section className="mission-store">
        <h2>AVAILABLE EQUIPMENT</h2>
        <ProductMini />
      </section>

      <button onClick={next}>
        LAUNCH NEXT MISSION →
      </button>
    </div>
  );
}

/* =========================================================
   28 — GALLERY
========================================================= */

function Gallery({ next }) {
  return (
    <div className="gallery">
      <section className="gallery-opening">
        <div className="gallery-index">
          00 / 30
        </div>

        <h1>
          HALFCLUTCH
        </h1>

        <p>
          A collection of software,
          experiments and systems.
        </p>
      </section>

      {projects.map((p, i) => (
        <section
          className="gallery-piece"
          key={p.name}
        >
          <div className="gallery-art">
            {String(i + 1).padStart(2, "0")}
          </div>

          <div>
            <small>{p.type}</small>
            <h2>{p.name}</h2>
            <p>{p.tech}</p>
          </div>
        </section>
      ))}

      <section className="gallery-products">
        <h2>
          SOFTWARE
          <br />
          AVAILABLE
          <br />
          NOW.
        </h2>

        <ProductMini />
      </section>

      <section className="gallery-services">
        <h2>
          COMMISSION
          <br />
          A NEW
          <br />
          PIECE.
        </h2>

        <ServiceMini />
      </section>

      <button onClick={next}>
        NEXT EXHIBITION →
      </button>
    </div>
  );
}

/* =========================================================
   29 — WORKSHOP FLOOR
========================================================= */

function WorkshopFloor({ next }) {
  return (
    <div className="floor">
      <section className="floor-entry">
        <div className="floor-sign">
          HALFCLUTCH
          <br />
          SOFTWARE
          <br />
          WORKSHOP
        </div>

        <h1>
          WALK
          <br />
          THROUGH
          <br />
          <span>THE FLOOR.</span>
        </h1>
      </section>

      <section className="floor-area floor-build">
        <div className="floor-tag">
          BUILD AREA
        </div>

        <h2>
          CUSTOM
          <br />
          SOFTWARE
        </h2>

        <p>
          Applications made around your exact
          requirements.
        </p>

        <button>REQUEST BUILD</button>
      </section>

      <section className="floor-area floor-repair">
        <div className="floor-tag">
          REPAIR AREA
        </div>

        <h2>
          BROKEN
          <br />
          SOFTWARE?
        </h2>

        <p>
          Debugging, API problems, deployment,
          database and application fixes.
        </p>

        <button>REQUEST FIX</button>
      </section>

      <section className="floor-area floor-store">
        <div className="floor-tag">
          STORE AREA
        </div>

        <h2>
          READY
          <br />
          SOFTWARE
        </h2>

        <ProductMini />
      </section>

      <section className="floor-area floor-archive">
        <div className="floor-tag">
          ARCHIVE
        </div>

        <h2>
          THINGS
          <br />
          BUILT
        </h2>

        <ProjectMini />
      </section>

      <button onClick={next}>
        WALK TO NEXT FLOOR →
      </button>
    </div>
  );
}

/* =========================================================
   30 — EXPERIMENTAL
========================================================= */

function Experimental({ next }) {
  return (
    <div className="experimental">
      <div className="exp-number">
        HC
      </div>

      <section className="exp-one">
        <small>THIS IS NOT A NORMAL PORTFOLIO.</small>

        <h1>
          HALF
          <br />
          <span>CLUTCH</span>
        </h1>
      </section>

      <section className="exp-two">
        <div className="exp-question">
          WHAT
          <br />
          CAN
          <br />
          I BUILD?
        </div>

        <div className="exp-answer">
          <p>
            Web applications.
          </p>

          <p>
            Business systems.
          </p>

          <p>
            Developer tools.
          </p>

          <p>
            AI applications.
          </p>
        </div>
      </section>

      <section className="exp-three">
        <div>
          <small>THINGS THAT EXIST</small>

          <ProjectMini />
        </div>

        <div>
          <small>THINGS YOU CAN BUY</small>

          <ProductMini />
        </div>
      </section>

      <section className="exp-four">
        <div className="exp-circle">
          FIX
        </div>

        <div className="exp-circle">
          BUILD
        </div>

        <div className="exp-circle">
          UPGRADE
        </div>
      </section>

      <section className="exp-final">
        <h2>
          DON'T KNOW
          <br />
          WHAT YOU NEED?
        </h2>

        <p>
          Tell me the problem.
          <br />
          We'll figure out the software.
        </p>

        <button>
          START A PROJECT →
        </button>
      </section>

      <button
        className="exp-next"
        onClick={next}
      >
        01 → 30
      </button>
    </div>
  );
}

/* =========================================================
   MINI COMPONENTS
========================================================= */

function Logo() {
  return (
    <div className="logo">
      HALF<span>CLUTCH</span>
    </div>
  );
}

function ProjectMini() {
  return (
    <div className="mini-list">
      {projects.map((p) => (
        <div key={p.name}>
          <b>{p.name}</b>
          <small>{p.tech}</small>
        </div>
      ))}
    </div>
  );
}

function ProductMini() {
  return (
    <div className="mini-list">
      {products.map(([name, price]) => (
        <div key={name}>
          <b>{name}</b>
          <strong>{price}</strong>
        </div>
      ))}
    </div>
  );
}

function ServiceMini() {
  return (
    <div className="mini-list">
      {services.map(([n, title, text]) => (
        <div key={n}>
          <b>{title}</b>
          <small>{text}</small>
        </div>
      ))}
    </div>
  );
}

function ProjectObjects() {
  return (
    <div className="object-list">
      {projects.map((p, i) => (
        <div key={p.name}>
          <span>0{i + 1}</span>
          <b>{p.name}</b>
        </div>
      ))}
    </div>
  );
}

function ProductObjects() {
  return (
    <div className="object-list">
      {products.map(([name, price], i) => (
        <div key={name}>
          <span>0{i + 1}</span>
          <b>{name}</b>
          <strong>{price}</strong>
        </div>
      ))}
    </div>
  );
}

function TechObjects() {
  return (
    <div className="tech-object-list">
      {tech.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}

function FooterStrip() {
  return (
    <footer className="footer-strip">
      <span>HALFCLUTCH.TECH</span>
      <span>BUILD · SELL · REPAIR</span>
      <span>2026</span>
    </footer>
  );
}

function StreamBlock({ title, content }) {
  return (
    <article className="stream-block">
      <small>{title}</small>
      <div>{content}</div>
    </article>
  );
}

/* =========================================================
   CSS
========================================================= */

const styles = `
* {
  box-sizing:border-box;
}

html {
  scroll-behavior:smooth;
}

body {
  margin:0;
  background:#080808;
  color:#f4f4ed;
  font-family:Arial,Helvetica,sans-serif;
}

button {
  cursor:pointer;
  font:inherit;
}

button:hover {
  transform:translateY(-2px);
}

.site {
  min-height:100vh;
  background:#080808;
}

.site button {
  border:1px solid currentColor;
  background:transparent;
  color:inherit;
  padding:13px 18px;
  text-transform:uppercase;
  font-size:11px;
  letter-spacing:.08em;
}

.site button:hover {
  background:#c8ff00;
  color:#080808;
}

.switcher {
  position:fixed;
  z-index:9999;
  top:15px;
  right:15px;
  display:flex;
  gap:6px;
  align-items:center;
  padding:6px;
  background:rgba(0,0,0,.75);
  border:1px solid #333;
  backdrop-filter:blur(15px);
}

.switcher button {
  padding:8px 11px;
  font-size:10px;
}

.switcher span {
  min-width:60px;
  text-align:center;
  font:11px monospace;
}

/* =========================================================
   COMMON
========================================================= */

.logo {
  font-weight:900;
  letter-spacing:-.08em;
  font-size:20px;
}

.logo span {
  color:#c8ff00;
}

.mini-list {
  display:flex;
  flex-direction:column;
  gap:0;
}

.mini-list > div {
  padding:14px 0;
  border-bottom:1px solid rgba(255,255,255,.15);
  display:flex;
  justify-content:space-between;
  gap:20px;
}

.mini-list small {
  display:block;
  opacity:.5;
  font-size:10px;
  margin-top:5px;
}

.mini-list strong {
  color:#c8ff00;
}

.object-list {
  display:grid;
  gap:8px;
  margin-top:20px;
}

.object-list > div {
  display:grid;
  grid-template-columns:40px 1fr auto;
  gap:10px;
  padding:15px;
  border:1px solid #333;
}

.object-list span {
  color:#c8ff00;
}

.tech-object-list {
  display:flex;
  flex-wrap:wrap;
  gap:7px;
  margin-top:20px;
}

.tech-object-list span {
  padding:8px 10px;
  border:1px solid #333;
  font-size:10px;
}

.footer-strip {
  padding:30px;
  border-top:1px solid #222;
  display:flex;
  justify-content:space-between;
  font:10px monospace;
  opacity:.5;
}

/* =========================================================
   01 WORKSHOP
========================================================= */

.workshop {
  min-height:100vh;
  display:grid;
  grid-template-columns:100px 1fr 100px;
  border-bottom:1px solid #333;
}

.workshop-side,
.workshop-right {
  border-right:1px solid #333;
  padding:25px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.workshop-right {
  border-left:1px solid #333;
  border-right:0;
}

.vertical {
  writing-mode:vertical-rl;
  transform:rotate(180deg);
  font:10px monospace;
}

.workshop-right div {
  writing-mode:vertical-rl;
  font-size:10px;
}

.workshop-center {
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:8vw;
}

.workshop-center h1 {
  font-size:clamp(70px,13vw,200px);
  line-height:.75;
  letter-spacing:-.1em;
  margin:30px 0;
}

.workshop-center em {
  color:#c8ff00;
  font-style:normal;
}

.workshop-center p {
  font-size:22px;
  opacity:.55;
  line-height:1.5;
}

.workbench {
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  border-bottom:1px solid #333;
}

.workbench > div {
  min-height:600px;
  padding:35px;
  border-right:1px solid #333;
}

.workbench > div > span {
  color:#c8ff00;
  font:10px monospace;
}

/* =========================================================
   02 OS
========================================================= */

.os {
  min-height:100vh;
  background:
    linear-gradient(#101510,#070907);
  padding:70px 30px 30px;
}

.os-desktop {
  min-height:calc(100vh - 110px);
  position:relative;
  max-width:1500px;
  margin:auto;
}

.os-brand {
  position:absolute;
  top:20px;
  left:20px;
  font-weight:900;
  color:#c8ff00;
}

.window {
  position:absolute;
  border:1px solid #667;
  background:rgba(8,12,8,.92);
  box-shadow:10px 10px 0 rgba(0,0,0,.5);
}

.window-bar {
  padding:10px;
  background:#c8ff00;
  color:#080808;
  font:10px monospace;
  font-weight:bold;
}

.intro-window {
  width:40%;
  left:8%;
  top:15%;
  padding-bottom:30px;
}

.intro-window h1,
.intro-window p {
  padding:0 25px;
}

.projects-window {
  width:45%;
  right:3%;
  top:8%;
}

.store-window {
  width:48%;
  left:25%;
  bottom:5%;
}

.service-window {
  width:30%;
  right:10%;
  bottom:4%;
  padding-bottom:20px;
}

.service-window > div:not(.window-bar) {
  padding:10px 20px;
  border-bottom:1px solid #333;
}

.os-row,
.os-product {
  display:flex;
  justify-content:space-between;
  padding:13px;
  border-bottom:1px solid #333;
  font-size:11px;
}

.os-taskbar {
  position:fixed;
  left:15px;
  bottom:15px;
  right:15px;
  z-index:100;
  background:#101510;
  border:1px solid #444;
  padding:10px 15px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

/* =========================================================
   03 TERMINAL
========================================================= */

.terminal-page {
  max-width:1100px;
  margin:auto;
  padding:100px 30px;
  font-family:monospace;
  color:#c8ff00;
  background:#030403;
  min-height:100vh;
}

.terminal-head {
  border-bottom:1px solid #243;
  padding-bottom:15px;
  opacity:.5;
}

.terminal-command {
  padding:120px 0;
}

.terminal-command h1 {
  font-size:clamp(80px,14vw,180px);
  line-height:.78;
  letter-spacing:-.1em;
}

.terminal-command h1 span {
  color:#fff;
}

.terminal-command h2 {
  color:#fff;
  font-size:clamp(30px,5vw,70px);
}

.terminal-stream,
.terminal-services {
  border-top:1px solid #243;
  padding:60px 0;
}

.terminal-entry {
  display:grid;
  grid-template-columns:40px 1fr 300px;
  padding:16px 0;
  border-bottom:1px dashed #243;
}

.terminal-entry small {
  color:#788;
}

.terminal-services {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
}

.terminal-services > p {
  grid-column:1/-1;
}

.terminal-services article {
  border:1px solid #243;
  padding:25px;
}

.terminal-next {
  margin-top:50px;
}

/* =========================================================
   04 NEWSPAPER
========================================================= */

.newspaper {
  max-width:1400px;
  margin:auto;
  padding:100px 40px;
  background:#eee9db;
  color:#111;
  min-height:100vh;
  font-family:Georgia,serif;
}

.newspaper header {
  border-bottom:5px solid #111;
  padding-bottom:20px;
}

.newspaper header h1 {
  font-size:clamp(80px,13vw,190px);
  line-height:.75;
  margin:30px 0;
  letter-spacing:-.08em;
}

.news-lead {
  display:grid;
  grid-template-columns:1.5fr 1fr;
  gap:30px;
  padding:40px 0;
  border-bottom:1px solid #111;
}

.news-lead h2 {
  font-size:clamp(50px,7vw,110px);
  line-height:.8;
  margin:20px 0;
}

.news-lead p {
  max-width:650px;
  font-size:20px;
  line-height:1.5;
}

.news-art {
  min-height:500px;
  background:#111;
  color:#eee9db;
  display:grid;
  place-items:center;
  font-size:150px;
  font-weight:bold;
}

.news-columns {
  display:grid;
  grid-template-columns:repeat(4,1fr);
  border-bottom:1px solid #111;
}

.news-columns article {
  padding:25px;
  border-right:1px solid #111;
}

.news-columns h3 {
  font-size:35px;
}

.classifieds {
  padding:50px 0;
}

.classifieds h2 {
  font-size:55px;
}

.classifieds > div {
  display:flex;
  justify-content:space-between;
  padding:15px 0;
  border-top:1px solid #111;
}

.newspaper button {
  color:#111;
}

/* =========================================================
   05 PRODUCT WALL
========================================================= */

.product-wall {
  min-height:100vh;
  background:#e8e8e3;
  color:#111;
}

.wall-intro {
  min-height:100vh;
  padding:120px 7vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.wall-intro h1 {
  font-size:clamp(90px,17vw,250px);
  line-height:.7;
  letter-spacing:-.12em;
  margin:50px 0;
}

.wall-intro strong {
  color:#ff3b00;
}

.wall-products {
  display:grid;
  grid-template-columns:repeat(6,1fr);
  grid-auto-rows:400px;
  gap:8px;
  padding:8px;
}

.wall-product {
  padding:25px;
  background:#111;
  color:#fff;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.wall-product h2 {
  font-size:50px;
  line-height:.9;
}

.wall-product div {
  display:flex;
  justify-content:space-between;
  align-items:end;
}

.wall-product b {
  font-size:35px;
  color:#c8ff00;
}

.wall-0 {
  grid-column:span 3;
}

.wall-1 {
  grid-column:span 3;
}

.wall-2 {
  grid-column:span 2;
}

.wall-3 {
  grid-column:span 2;
}

.wall-4 {
  grid-column:span 2;
}

.wall-projects {
  padding:100px 7vw;
}

.wall-projects > div:not(.wall-label) {
  display:grid;
  grid-template-columns:2fr 1fr 1fr;
  padding:25px 0;
  border-bottom:1px solid #aaa;
}

.wall-label {
  font-size:11px;
  margin-bottom:30px;
}

.wall-build {
  padding:120px 7vw;
  background:#111;
  color:#fff;
}

.wall-build h2 {
  font-size:clamp(70px,11vw,160px);
  line-height:.75;
}

/* =========================================================
   06 CANVAS
========================================================= */

.canvas-page {
  min-height:1800px;
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(circle at center,#172200,#050505 45%);
}

.canvas-title {
  position:absolute;
  top:50px;
  left:50px;
  font-size:12px;
  color:#c8ff00;
}

.canvas-note {
  position:absolute;
  padding:25px;
  border:1px solid #444;
  background:rgba(10,10,10,.7);
  backdrop-filter:blur(10px);
}

.canvas-note h1 {
  font-size:80px;
  line-height:.75;
}

.note-one {
  top:200px;
  left:8%;
}

.note-two {
  top:550px;
  left:40%;
}

.note-three {
  top:280px;
  right:8%;
}

.note-four {
  top:900px;
  left:15%;
  max-width:350px;
}

.note-four span {
  display:inline-block;
  border:1px solid #333;
  padding:7px;
  margin:3px;
  font-size:10px;
}

.note-five {
  top:1050px;
  right:15%;
}

/* =========================================================
   07 TIMELINE
========================================================= */

.timeline-page {
  padding:120px 7vw;
  max-width:1300px;
  margin:auto;
}

.timeline-start h1 {
  font-size:clamp(90px,15vw,200px);
  line-height:.72;
  letter-spacing:-.1em;
}

.timeline-start span {
  color:#c8ff00;
}

.timeline-track {
  position:relative;
  margin-top:150px;
  padding-left:120px;
}

.timeline-line {
  position:absolute;
  left:40px;
  top:0;
  bottom:0;
  width:2px;
  background:#333;
}

.timeline-track article {
  padding:70px 0;
  border-bottom:1px solid #222;
}

.timeline-track article > span {
  color:#c8ff00;
  font-family:monospace;
}

.timeline-track h2 {
  font-size:70px;
}

.timeline-track article > div {
  padding:12px;
  border-top:1px solid #222;
  display:flex;
  justify-content:space-between;
}

/* =========================================================
   08 FILE
========================================================= */

.file-page {
  display:grid;
  grid-template-columns:250px 1fr;
  min-height:100vh;
  font-family:monospace;
}

.file-page aside {
  border-right:1px solid #333;
  padding:30px;
  background:#0d0f0d;
}

.file-page aside > div {
  margin-top:100px;
}

.file-page aside nav {
  margin-top:30px;
  display:grid;
  gap:15px;
}

.file-page main {
  padding:60px;
}

.file-path {
  color:#c8ff00;
  border-bottom:1px solid #333;
  padding-bottom:20px;
}

.file-hero {
  padding:120px 0;
}

.file-hero h1 {
  font-size:clamp(80px,14vw,200px);
  line-height:.75;
  letter-spacing:-.1em;
}

.file-directory {
  margin:100px 0;
}

.file-directory h2 {
  color:#c8ff00;
}

.file-directory > div {
  display:grid;
  grid-template-columns:40px 2fr 1fr;
  padding:18px;
  border-bottom:1px solid #222;
}

/* =========================================================
   09 FACTORY
========================================================= */

.factory-page {
  background:#10100d;
}

.factory-entry {
  min-height:100vh;
  padding:120px 7vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.factory-entry h1 {
  font-size:clamp(80px,15vw,210px);
  line-height:.72;
  letter-spacing:-.1em;
}

.factory-entry span {
  color:#c8ff00;
}

.factory-machine {
  display:flex;
  gap:30px;
  padding:30px;
  border:1px solid #444;
  width:max-content;
  max-width:100%;
  flex-wrap:wrap;
  font-family:monospace;
}

.factory-machine span {
  color:#c8ff00;
}

.factory-stations {
  display:grid;
  grid-template-columns:repeat(3,1fr);
}

.factory-stations article {
  min-height:650px;
  padding:35px;
  border:1px solid #333;
}

.factory-stations h2 {
  font-size:65px;
}

.factory-stations article > div {
  padding:15px 0;
  border-bottom:1px solid #333;
  display:flex;
  justify-content:space-between;
}

.factory-end {
  min-height:80vh;
  padding:100px 7vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.factory-end h2 {
  font-size:clamp(70px,12vw,180px);
  line-height:.75;
}

/* =========================================================
   10 CONTROL
========================================================= */

.control-page {
  min-height:100vh;
  padding:80px 5vw;
  background:
    radial-gradient(circle,#182000,#050505 60%);
}

.control-page header {
  display:flex;
  justify-content:space-between;
  border-bottom:1px solid #333;
  padding-bottom:20px;
}

.control-core {
  min-height:80vh;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  gap:60px;
}

.radar {
  width:400px;
  height:400px;
  max-width:80vw;
  border:1px solid #c8ff00;
  border-radius:50%;
  display:grid;
  place-items:center;
  font-size:100px;
  color:#c8ff00;
  margin:auto;
  box-shadow:
    0 0 100px rgba(200,255,0,.15);
}

.control-core h1 {
  font-size:clamp(80px,12vw,180px);
  line-height:.7;
  letter-spacing:-.1em;
}

.control-grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
}

.control-grid article {
  padding:25px;
  min-height:450px;
  border:1px solid #333;
}

.control-grid strong {
  display:block;
  font-size:100px;
  color:#c8ff00;
  margin:40px 0;
}

.control-grid article > div {
  padding:12px 0;
  border-top:1px solid #333;
  display:flex;
  justify-content:space-between;
}

/* =========================================================
   11 BUILDING
========================================================= */

.building-exterior {
  min-height:100vh;
  padding:120px 7vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  background:
    linear-gradient(
      90deg,
      #080808 50%,
      #111 50%
    );
}

.building-exterior h1 {
  font-size:clamp(80px,14vw,210px);
  line-height:.72;
}

.building-exterior span {
  color:#c8ff00;
}

.building-floor {
  min-height:100vh;
  display:grid;
  grid-template-columns:120px 1fr 1fr;
  align-items:center;
  gap:60px;
  padding:60px 7vw;
  border-top:1px solid #333;
}

.floor-number {
  font-size:100px;
  color:#c8ff00;
}

.building-floor h2 {
  font-size:clamp(60px,9vw,130px);
  line-height:.72;
}

/* =========================================================
   12 GAME
========================================================= */

.game-page {
  min-height:100vh;
  background:
    linear-gradient(
      180deg,
      #091400,
      #030500
    );
}

.game-start {
  min-height:100vh;
  padding:80px 7vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  position:relative;
}

.game-hud {
  position:absolute;
  top:30px;
  left:30px;
  right:30px;
  display:flex;
  justify-content:space-between;
  font:10px monospace;
}

.game-start h1 {
  font-size:clamp(90px,16vw,220px);
  line-height:.7;
}

.game-start span {
  color:#c8ff00;
}

.game-world {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  min-height:100vh;
}

.game-zone {
  padding:35px;
  border:1px solid #333;
  min-height:700px;
}

.game-zone h2 {
  font-size:70px;
}

/* =========================================================
   13 MAP
========================================================= */

.map-page {
  min-height:100vh;
  position:relative;
  overflow:hidden;
  padding:100px 7vw;
}

.map-center {
  position:absolute;
  width:700px;
  height:700px;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}

.map-core {
  position:absolute;
  width:180px;
  height:180px;
  border:1px solid #c8ff00;
  border-radius:50%;
  display:grid;
  place-items:center;
  text-align:center;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  color:#c8ff00;
  font-weight:bold;
}

.map-orbit {
  position:absolute;
  border:1px dashed #444;
  border-radius:50%;
  display:grid;
  place-items:end center;
  color:#c8ff00;
}

.orbit-a {
  inset:0;
}

.orbit-b {
  inset:80px;
}

.orbit-c {
  inset:160px;
}

.map-info {
  position:absolute;
  left:7vw;
  top:120px;
  max-width:600px;
}

.map-info h1 {
  font-size:100px;
  line-height:.75;
}

.map-info span {
  color:#c8ff00;
}

.map-bottom {
  position:absolute;
  left:7vw;
  right:7vw;
  bottom:50px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
}

/* =========================================================
   14 CONVERSATION
========================================================= */

.conversation {
  max-width:850px;
  margin:auto;
  padding:120px 20px;
}

.conversation-head {
  text-align:center;
  color:#c8ff00;
  font:12px monospace;
  margin-bottom:80px;
}

.bubble {
  max-width:70%;
  padding:20px;
  margin:25px 0;
  border:1px solid #333;
}

.bubble.user {
  margin-left:auto;
  background:#151515;
}

.bubble.answer {
  border-color:#c8ff00;
}

.chat-products {
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:10px;
  margin:30px 0 50px;
}

.chat-products div {
  border:1px solid #333;
  padding:20px;
  display:flex;
  justify-content:space-between;
}

/* =========================================================
   15 MANIFESTO
========================================================= */

.manifesto section {
  min-height:100vh;
  padding:100px 8vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.manifesto h1 {
  font-size:clamp(90px,16vw,230px);
  line-height:.68;
  letter-spacing:-.12em;
}

.manifesto h1 span {
  color:#c8ff00;
}

.manifesto section:nth-child(2) {
  font-size:clamp(50px,8vw,120px);
  line-height:.85;
  border-top:1px solid #333;
}

.manifesto-services {
  display:grid !important;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
}

.manifesto-services article {
  border:1px solid #333;
  padding:30px;
}

/* =========================================================
   16 MAGAZINE
========================================================= */

.magazine {
  max-width:1400px;
  margin:auto;
  padding:100px 40px;
}

.magazine header {
  display:flex;
  justify-content:space-between;
  border-bottom:3px solid #fff;
  padding-bottom:15px;
}

.mag-cover {
  min-height:90vh;
  display:grid;
  grid-template-columns:1.5fr 1fr;
  align-items:center;
  gap:40px;
}

.mag-cover h1 {
  font-size:clamp(80px,14vw,200px);
  line-height:.7;
  letter-spacing:-.1em;
}

.mag-cover span {
  color:#c8ff00;
}

.mag-cover-image {
  height:600px;
  background:#c8ff00;
  color:#080808;
  display:grid;
  place-items:center;
  font-size:150px;
  font-weight:bold;
}

.mag-story {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  border-top:1px solid #333;
  padding:100px 0;
}

.mag-story h2,
.mag-services h2 {
  font-size:80px;
  line-height:.75;
}

.mag-services {
  min-height:90vh;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
}

/* =========================================================
   17 DATA STREAM
========================================================= */

.stream-page {
  min-height:100vh;
  font-family:monospace;
}

.stream-hero {
  padding:150px 7vw;
  border-bottom:1px solid #333;
}

.stream-hero h1 {
  font-size:clamp(90px,16vw,220px);
  line-height:.7;
}

.stream-hero span {
  color:#c8ff00;
}

.stream-feed {
  max-width:1000px;
  margin:auto;
}

.stream-block {
  min-height:300px;
  padding:60px 20px;
  border-bottom:1px solid #333;
  display:grid;
  grid-template-columns:180px 1fr;
  gap:40px;
}

.stream-block small {
  color:#c8ff00;
}

.stream-block div {
  font-size:clamp(30px,5vw,70px);
  line-height:.9;
}

/* =========================================================
   18 DIRECTORY
========================================================= */

.directory {
  max-width:1200px;
  margin:auto;
  padding:100px 30px;
}

.directory header {
  display:flex;
  justify-content:space-between;
  border-bottom:4px solid #fff;
}

.directory-index {
  display:grid;
  grid-template-columns:300px 1fr;
  align-items:center;
  min-height:70vh;
}

.directory-letter {
  font-size:300px;
  color:#c8ff00;
}

.directory section:not(.directory-index) {
  margin:100px 0;
}

.directory-item {
  display:grid;
  grid-template-columns:80px 2fr 1fr;
  padding:20px;
  border-bottom:1px solid #333;
}

.directory-item span {
  color:#c8ff00;
}

/* =========================================================
   19 ASSEMBLY
========================================================= */

.assembly-start,
.assembly-output,
.assembly-store {
  min-height:90vh;
  padding:100px 7vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.assembly-start h1,
.assembly-output h2,
.assembly-store h2 {
  font-size:clamp(90px,15vw,220px);
  line-height:.7;
}

.assembly-start span,
.assembly-store span {
  color:#c8ff00;
}

.assembly-process {
  display:grid;
  grid-template-columns:repeat(4,1fr);
  border-top:1px solid #333;
  border-bottom:1px solid #333;
}

.assembly-process div {
  min-height:400px;
  padding:30px;
  border-right:1px solid #333;
}

.assembly-process span {
  color:#c8ff00;
}

/* =========================================================
   20 QA
========================================================= */

.qa {
  max-width:1200px;
  margin:auto;
}

.qa-intro {
  min-height:100vh;
  padding:100px 30px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.qa-intro h1 {
  font-size:clamp(90px,15vw,220px);
  line-height:.7;
}

.qa-intro span {
  color:#c8ff00;
}

.qa-list article {
  padding:100px 30px;
  border-top:1px solid #333;
}

.qa-list h2 {
  font-size:clamp(50px,8vw,110px);
  line-height:.8;
}

/* =========================================================
   21 UNIVERSE
========================================================= */

.universe {
  min-height:1500px;
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(circle,#172400,#030403 50%);
}

.universe-core {
  width:800px;
  height:800px;
  max-width:90vw;
  position:absolute;
  top:250px;
  left:50%;
  transform:translateX(-50%);
}

.universe-center {
  position:absolute;
  width:180px;
  height:180px;
  border-radius:50%;
  background:#c8ff00;
  color:#080808;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  display:grid;
  place-items:center;
  text-align:center;
  font-weight:bold;
}

.universe-ring {
  position:absolute;
  border:1px dashed #444;
  border-radius:50%;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  color:#c8ff00;
}

.ring-one {
  inset:0;
}

.ring-two {
  inset:100px;
}

.ring-three {
  inset:200px;
}

.universe-info {
  position:absolute;
  top:1150px;
  left:7vw;
  right:7vw;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
}

/* =========================================================
   22 MACHINE
========================================================= */

.machine {
  padding:100px 7vw;
}

.machine-header {
  min-height:80vh;
  display:flex;
  align-items:center;
  gap:80px;
}

.machine-logo {
  width:300px;
  height:300px;
  border:2px solid #c8ff00;
  border-radius:50%;
  display:grid;
  place-items:center;
  font-size:120px;
  color:#c8ff00;
}

.machine-header h1 {
  font-size:clamp(80px,14vw,190px);
  line-height:.7;
}

.machine-body {
  display:grid;
  grid-template-columns:1fr 300px 1fr;
  align-items:center;
  gap:50px;
  min-height:80vh;
}

.machine-core {
  width:300px;
  height:300px;
  border:10px double #c8ff00;
  border-radius:50%;
  display:grid;
  place-items:center;
  font-size:80px;
  color:#c8ff00;
}

.machine-output,
.machine-input {
  border-top:1px solid #333;
  border-bottom:1px solid #333;
  padding:50px 0;
}

.machine-output h2,
.machine-input h2 {
  font-size:60px;
}

/* =========================================================
   23 MARKETPLACE
========================================================= */

.marketplace {
  display:grid;
  grid-template-columns:230px 1fr;
  min-height:100vh;
}

.marketplace aside {
  padding:30px;
  border-right:1px solid #333;
  position:sticky;
  top:0;
  height:100vh;
}

.marketplace aside nav {
  display:grid;
  gap:15px;
  margin-top:100px;
}

.marketplace main {
  padding:80px 50px;
}

.market-top {
  display:flex;
  justify-content:space-between;
  align-items:end;
  min-height:70vh;
}

.market-top h1 {
  font-size:clamp(80px,13vw,180px);
  line-height:.7;
}

.market-top span {
  color:#c8ff00;
}

.market-search {
  border-bottom:1px solid #fff;
  padding:15px;
  width:300px;
  opacity:.5;
}

.market-grid {
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
}

.market-grid article {
  min-height:500px;
  border:1px solid #333;
  padding:25px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.market-grid h2 {
  font-size:40px;
}

.market-grid b {
  color:#c8ff00;
  font-size:35px;
}

.market-custom {
  min-height:70vh;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
}

.market-custom h2 {
  font-size:100px;
  line-height:.7;
}

/* =========================================================
   24 CASE STUDY
========================================================= */

.case-cover {
  min-height:100vh;
  padding:120px 7vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.case-cover h1 {
  font-size:clamp(100px,17vw,250px);
  line-height:.68;
}

.case-cover span {
  color:#c8ff00;
}

.case-block {
  min-height:100vh;
  display:grid;
  grid-template-columns:120px 1fr 1fr;
  align-items:center;
  padding:60px 7vw;
  border-top:1px solid #333;
}

.case-number {
  font-size:100px;
  color:#c8ff00;
}

.case-content h2 {
  font-size:80px;
  line-height:.75;
}

.case-visual {
  height:600px;
  border:1px solid #333;
  display:grid;
  place-items:center;
  font-size:150px;
}

.case-products {
  min-height:80vh;
  padding:100px 7vw;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
}

.case-products h2 {
  font-size:90px;
  line-height:.75;
}

/* =========================================================
   25 DASHBOARD
========================================================= */

.dashboard {
  display:grid;
  grid-template-columns:250px 1fr;
  min-height:100vh;
}

.dashboard aside {
  border-right:1px solid #333;
  padding:30px;
}

.dash-user {
  margin-top:100px;
  font-weight:bold;
}

.dash-user small {
  display:block;
  opacity:.4;
  margin-top:5px;
}

.dashboard aside nav {
  display:grid;
  gap:15px;
  margin-top:50px;
}

.dashboard main {
  padding:70px 50px;
}

.dashboard header {
  display:flex;
  justify-content:space-between;
  align-items:start;
}

.dashboard header h1 {
  font-size:100px;
  line-height:.7;
}

.dash-metrics {
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
  margin:60px 0;
}

.dash-metrics div {
  border:1px solid #333;
  padding:25px;
  min-height:200px;
}

.dash-metrics strong {
  display:block;
  font-size:80px;
  color:#c8ff00;
  margin-top:30px;
}

.dash-projects,
.dash-store,
.dash-services {
  border-top:1px solid #333;
  padding:60px 0;
}

/* =========================================================
   26 STORYBOOK
========================================================= */

.storybook {
  background:#efe8d6;
  color:#18140f;
}

.story-cover,
.story-page,
.story-end {
  min-height:100vh;
  padding:100px 10vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.story-cover {
  background:#18140f;
  color:#efe8d6;
}

.story-cover h1 {
  font-size:clamp(90px,15vw,220px);
  line-height:.68;
}

.story-cover span {
  color:#c8ff00;
}

.story-page {
  border-bottom:1px solid #aaa;
}

.story-page h2,
.story-end h2 {
  font-size:100px;
  line-height:.72;
}

.story-page-number {
  font:12px monospace;
}

.story-end {
  background:#c8ff00;
}

/* =========================================================
   27 MISSION
========================================================= */

.mission-brief {
  min-height:100vh;
  padding:100px 7vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.mission-brief h1 {
  font-size:clamp(90px,15vw,220px);
  line-height:.7;
}

.mission-brief span {
  color:#c8ff00;
}

.mission-objective {
  border-left:3px solid #c8ff00;
  padding-left:20px;
  font-family:monospace;
  line-height:1.8;
}

.mission-options {
  display:grid;
  grid-template-columns:repeat(3,1fr);
}

.mission-options article {
  min-height:600px;
  border:1px solid #333;
  padding:35px;
  display:flex;
  flex-direction:column;
  justify-content:end;
}

.mission-options h2 {
  font-size:90px;
  line-height:.7;
}

.mission-options span {
  color:#c8ff00;
}

.mission-history,
.mission-store {
  min-height:80vh;
  padding:100px 7vw;
  border-top:1px solid #333;
}

.mission-history h2,
.mission-store h2 {
  font-size:80px;
}

/* =========================================================
   28 GALLERY
========================================================= */

.gallery-opening {
  min-height:100vh;
  padding:100px 7vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.gallery-opening h1 {
  font-size:clamp(120px,20vw,300px);
  line-height:.7;
  letter-spacing:-.12em;
}

.gallery-piece {
  min-height:100vh;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:80px;
  align-items:center;
  padding:80px 7vw;
  border-top:1px solid #333;
}

.gallery-art {
  height:70vh;
  border:1px solid #333;
  display:grid;
  place-items:center;
  font-size:200px;
  color:#c8ff00;
}

.gallery-piece h2 {
  font-size:100px;
  line-height:.7;
}

.gallery-products,
.gallery-services {
  min-height:90vh;
  padding:100px 7vw;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
  gap:50px;
}

.gallery-products h2,
.gallery-services h2 {
  font-size:100px;
  line-height:.7;
}

/* =========================================================
   29 FLOOR
========================================================= */

.floor-entry {
  min-height:100vh;
  padding:100px 7vw;
  display:grid;
  grid-template-columns:300px 1fr;
  gap:80px;
  align-items:center;
}

.floor-sign {
  border:5px solid #c8ff00;
  padding:25px;
  color:#c8ff00;
  font-weight:bold;
}

.floor-entry h1 {
  font-size:clamp(90px,15vw,220px);
  line-height:.7;
}

.floor-entry span {
  color:#c8ff00;
}

.floor-area {
  min-height:100vh;
  padding:100px 7vw;
  display:grid;
  grid-template-columns:250px 1fr;
  gap:60px;
  align-items:center;
  border-top:1px solid #333;
}

.floor-tag {
  font:11px monospace;
  color:#c8ff00;
}

.floor-area h2 {
  font-size:100px;
  line-height:.7;
}

.floor-store,
.floor-archive {
  display:block;
}

/* =========================================================
   30 EXPERIMENTAL
========================================================= */

.experimental {
  min-height:2400px;
  position:relative;
  overflow:hidden;
}

.exp-number {
  position:fixed;
  right:30px;
  bottom:30px;
  z-index:10;
  color:#c8ff00;
  font-weight:bold;
}

.exp-one {
  min-height:100vh;
  padding:100px 8vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.exp-one h1 {
  font-size:clamp(100px,20vw,300px);
  line-height:.6;
  letter-spacing:-.15em;
}

.exp-one span {
  color:#c8ff00;
}

.exp-two {
  min-height:100vh;
  padding:100px 8vw;
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:center;
}

.exp-question {
  font-size:clamp(80px,12vw,180px);
  line-height:.65;
}

.exp-answer {
  font-size:40px;
  line-height:.9;
}

.exp-answer p {
  border-bottom:1px solid #333;
  padding:20px 0;
}

.exp-three {
  min-height:100vh;
  display:grid;
  grid-template-columns:1fr 1fr;
}

.exp-three > div {
  padding:70px;
  border:1px solid #333;
}

.exp-four {
  min-height:70vh;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:30px;
}

.exp-circle {
  width:200px;
  height:200px;
  border:1px solid #c8ff00;
  border-radius:50%;
  display:grid;
  place-items:center;
  color:#c8ff00;
}

.exp-final {
  min-height:100vh;
  padding:100px 8vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.exp-final h2 {
  font-size:clamp(80px,13vw,190px);
  line-height:.7;
}

/* =========================================================
   RESPONSIVE
========================================================= */

@media(max-width:800px) {

  .switcher {
    left:10px;
    right:10px;
    top:10px;
    justify-content:center;
  }

  .workshop {
    grid-template-columns:1fr;
  }

  .workshop-side,
  .workshop-right {
    display:none;
  }

  .workshop-center {
    min-height:100vh;
  }

  .workbench,
  .factory-stations,
  .control-grid,
  .game-world,
  .assembly-process,
  .mission-options,
  .news-columns,
  .mag-story,
  .mag-services,
  .market-grid,
  .dash-metrics,
  .exp-three {
    grid-template-columns:1fr;
  }

  .window {
    position:relative;
    width:100%;
    left:auto;
    right:auto;
    top:auto;
    bottom:auto;
    margin:20px 0;
  }

  .os-desktop {
    display:block;
  }

  .os-taskbar {
    position:relative;
    margin-top:20px;
  }

  .terminal-entry {
    grid-template-columns:30px 1fr;
  }

  .terminal-entry small {
    grid-column:2;
  }

  .terminal-services {
    grid-template-columns:1fr;
  }

  .news-lead,
  .market-top,
  .case-block,
  .building-floor,
  .machine-body,
  .directory-index,
  .gallery-piece,
  .qa-list,
  .exp-two,
  .case-products,
  .gallery-products,
  .gallery-services,
  .floor-entry,
  .floor-area {
    grid-template-columns:1fr;
  }

  .news-art {
    min-height:300px;
  }

  .wall-products {
    grid-template-columns:1fr;
    grid-auto-rows:auto;
  }

  .wall-product,
  .wall-0,
  .wall-1,
  .wall-2,
  .wall-3,
  .wall-4 {
    grid-column:span 1;
    min-height:400px;
  }

  .canvas-page {
    min-height:2400px;
  }

  .canvas-note {
    position:relative;
    top:auto;
    left:auto;
    right:auto;
    margin:30px 20px;
  }

  .timeline-track {
    padding-left:30px;
  }

  .timeline-line {
    left:0;
  }

  .file-page,
  .marketplace,
  .dashboard {
    grid-template-columns:1fr;
  }

  .file-page aside,
  .marketplace aside,
  .dashboard aside {
    position:relative;
    width:100%;
    height:auto;
    border-right:0;
    border-bottom:1px solid #333;
  }

  .file-page main,
  .marketplace main,
  .dashboard main {
    padding:50px 20px;
  }

  .machine-header {
    flex-direction:column;
    align-items:flex-start;
  }

  .machine-logo {
    width:180px;
    height:180px;
    font-size:70px;
  }

  .machine-core {
    width:180px;
    height:180px;
    font-size:50px;
    margin:auto;
  }

  .map-center {
    width:500px;
    height:500px;
    opacity:.35;
  }

  .map-info {
    position:relative;
    left:auto;
    top:auto;
  }

  .map-bottom {
    position:relative;
    left:auto;
    right:auto;
    bottom:auto;
    margin-top:700px;
    grid-template-columns:1fr;
  }

  .universe-core {
    opacity:.4;
  }

  .universe-info {
    position:relative;
    top:auto;
    padding-top:1000px;
    grid-template-columns:1fr;
  }

  .directory-item {
    grid-template-columns:40px 1fr;
  }

  .directory-item small {
    grid-column:2;
  }

  .story-page h2,
  .story-end h2,
  .mission-history h2,
  .mission-store h2,
  .gallery-piece h2,
  .gallery-products h2,
  .gallery-services h2 {
    font-size:60px;
  }

  .gallery-art {
    height:400px;
    font-size:100px;
  }

  .exp-three {
    min-height:auto;
  }

  .exp-four {
    flex-direction:column;
  }

  .footer-strip {
    flex-direction:column;
    gap:10px;
  }
}
`;