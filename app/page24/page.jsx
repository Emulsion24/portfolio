"use client";

import React, { useMemo, useState } from "react";

const DATA = {
  developer: {
    name: "Shavandeb Kaiti",
    brand: "HALFCLUTCH",
    domain: "halfclutch.tech",
    role: "Software Developer · Builder · Product Maker",
    bio:
      "I build software products, sell ready-made applications, and help businesses build, repair and upgrade software.",
    email: "hello@halfclutch.tech",
  },

  projects: [
    {
      id: "01",
      name: "Tint Scholar",
      type: "Education Platform",
      tech: "React · Node · MongoDB",
    },
    {
      id: "02",
      name: "Academic Management System",
      type: "Business Software",
      tech: "React · Node · JWT · MongoDB",
    },
    {
      id: "03",
      name: "Inventory & Billing",
      type: "Enterprise Application",
      tech: "Java · Spring Boot · MySQL",
    },
    {
      id: "04",
      name: "Favorite Movies",
      type: "Web Application",
      tech: "Node · Sequelize · MySQL",
    },
  ],

  products: [
    { id: "P01", name: "Admin Dashboard Kit", category: "Dashboard", price: "$49" },
    { id: "P02", name: "Inventory Manager", category: "Business", price: "$79" },
    { id: "P03", name: "School Management System", category: "Education", price: "$129" },
    { id: "P04", name: "SaaS Starter", category: "Developer", price: "$89" },
    { id: "P05", name: "AI Application Starter", category: "AI / Developer", price: "$99" },
  ],

  services: [
    { id: "S01", name: "CUSTOM BUILD", text: "Turn an idea into a working software product." },
    { id: "S02", name: "FIX EXISTING", text: "Debug, repair and stabilize an existing application." },
    { id: "S03", name: "UPGRADE", text: "Add features, integrations and performance improvements." },
  ],

  stack: [
    "React", "Next.js", "JavaScript", "TypeScript", "Node.js", "Express",
    "MongoDB", "MySQL", "Java", "Spring Boot", "Docker", "AWS", "Git"
  ],

  reviews: [
    ["Client One", "Startup Founder", "The application went from an idea to something our team could actually use."],
    ["Client Two", "Business Owner", "The existing application was repaired without throwing away the original work."],
    ["Client Three", "Creator", "Practical development, clear communication and a useful final product."]
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

const NAMES = [
  "CONTROL ROOM",
  "CITY GRID",
  "TRAIN STATION",
  "MUSEUM",
  "ARCADE",
  "SPACE STATION",
  "BLUEPRINT",
  "COMMAND CENTER",
  "NEWSPAPER",
  "FILM CREDITS",
  "MUSIC PLAYER",
  "OPERATING SYSTEM",
  "DATA OBSERVATORY",
  "CONSTRUCTION SITE",
  "WAREHOUSE",
  "AUCTION HOUSE",
  "FLIGHT CONTROL",
  "MECHANICAL CLOCK",
  "COMIC BOOK",
  "DIGITAL PLAYGROUND",
];

function Git({ small }) {
  const values = [
    ["REPOS", DATA.git.repositories],
    ["COMMITS", DATA.git.commits],
    ["CONTRIB", DATA.git.contributions],
    ["PR", DATA.git.pullRequests],
    ["ISSUES", DATA.git.issues],
    ["STARS", DATA.git.stars],
    ["ACTIVE", DATA.git.activeProjects],
    ["STREAK", DATA.git.streak + "D"],
  ];

  return (
    <div className={"git " + (small ? "git-small" : "")}>
      {values.map(function (item) {
        return (
          <div key={item[0]}>
            <small>{item[0]}</small>
            <strong>{item[1]}</strong>
          </div>
        );
      })}
    </div>
  );
}

function Projects({ compact }) {
  return (
    <div className={"projects " + (compact ? "projects-compact" : "")}>
      {DATA.projects.map(function (project) {
        return (
          <article key={project.id}>
            <span>{project.id}</span>
            <div>
              <small>{project.type}</small>
              <h3>{project.name}</h3>
              <em>{project.tech}</em>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Products() {
  return (
    <div className="products">
      {DATA.products.map(function (product) {
        return (
          <article key={product.id}>
            <span>{product.id}</span>
            <div>
              <small>{product.category}</small>
              <h3>{product.name}</h3>
            </div>
            <strong>{product.price}</strong>
          </article>
        );
      })}
    </div>
  );
}

function Services() {
  return (
    <div className="services">
      {DATA.services.map(function (service) {
        return (
          <article key={service.id}>
            <small>{service.id}</small>
            <h3>{service.name}</h3>
            <p>{service.text}</p>
          </article>
        );
      })}
    </div>
  );
}

function Stack() {
  return (
    <div className="stack">
      {DATA.stack.map(function (item) {
        return <span key={item}>{item}</span>;
      })}
    </div>
  );
}

function Reviews() {
  return (
    <div className="reviews">
      {DATA.reviews.map(function (review) {
        return (
          <article key={review[0]}>
            <b>★★★★★</b>
            <p>“{review[2]}”</p>
            <strong>{review[0]}</strong>
            <small>{review[1]}</small>
          </article>
        );
      })}
    </div>
  );
}

function Contact({ dark }) {
  return (
    <section className={"contact " + (dark ? "contact-dark" : "")}>
      <small>HALFCLUTCH / CONTACT</small>
      <h2>BUILD IT. BUY IT. FIX IT.</h2>
      <p>{DATA.developer.bio}</p>
      <a href={"mailto:" + DATA.developer.email}>{DATA.developer.email} →</a>
    </section>
  );
}

/* 01 CONTROL ROOM */

function ControlRoom() {
  const [panel, setPanel] = useState("work");

  return (
    <div className="site s01 control">
      <header className="control-header">
        <div><b>HALFCLUTCH</b><small>SOFTWARE CONTROL ROOM</small></div>
        <span>STATUS / <i>ONLINE</i></span>
      </header>

      <div className="control-grid">
        <aside className="control-console">
          <small>SYSTEM NAVIGATION</small>
          {["work", "shop", "services", "stack", "git"].map(function (x) {
            return <button className={panel === x ? "active" : ""} onClick={() => setPanel(x)} key={x}>{x.toUpperCase()}</button>;
          })}
          <div className="control-mini">
            <span>OPERATOR</span>
            <b>{DATA.developer.name}</b>
          </div>
        </aside>

        <main className="control-screen">
          {panel === "work" && <><small>WORKSTREAM / 01</small><h1>SOFTWARE<br />UNDER<br />CONTROL.</h1><Projects /></>}
          {panel === "shop" && <><small>PRODUCT DEPOT</small><h1>READY<br />TO SHIP.</h1><Products /></>}
          {panel === "services" && <><small>SERVICE CHANNEL</small><h1>NEED<br />A BUILD?</h1><Services /></>}
          {panel === "stack" && <><small>TECHNOLOGY</small><h1>THE<br />MACHINE.</h1><Stack /></>}
          {panel === "git" && <><small>TELEMETRY</small><h1>CODE<br />SIGNAL.</h1><Git /></>}
        </main>
      </div>
      <Contact />
    </div>
  );
}

/* 02 CITY GRID */

function CityGrid() {
  const [selected, setSelected] = useState("HQ");

  const buildings = [
    ["HQ", "HALFCLUTCH", "studio"],
    ["01", "PROJECT DISTRICT", "projects"],
    ["02", "SOFTWARE MARKET", "products"],
    ["03", "REPAIR YARD", "services"],
    ["04", "TECH LAB", "stack"],
    ["05", "SIGNAL TOWER", "git"],
  ];

  return (
    <div className="site s02 city">
      <div className="city-sky">
        <span>HALFCLUTCH CITY / 2026</span>
        <b>BUILDING SOFTWARE SINCE DAY ONE</b>
      </div>

      <div className="city-map">
        {buildings.map(function (building, index) {
          return (
            <button
              key={building[0]}
              className={"building b" + index + (selected === building[0] ? " selected" : "")}
              onClick={() => setSelected(building[0])}
            >
              <small>{building[0]}</small>
              <strong>{building[1]}</strong>
              <i>{building[2]}</i>
              <span className="windows">▦ ▦ ▦<br />▦ ▦ ▦<br />▦ ▦ ▦</span>
            </button>
          );
        })}
      </div>

      <div className="city-info">
        {selected === "HQ" && <><small>HQ</small><h1>SHAVANDEB<br />KAITI</h1><p>{DATA.developer.bio}</p></>}
        {selected === "01" && <><small>PROJECT DISTRICT</small><h1>WHAT I<br />BUILT.</h1><Projects compact /></>}
        {selected === "02" && <><small>SOFTWARE MARKET</small><h1>TAKE ONE<br />HOME.</h1><Products /></>}
        {selected === "03" && <><small>REPAIR YARD</small><h1>FIX.<br />UPGRADE.</h1><Services /></>}
        {selected === "04" && <><small>TECH LAB</small><h1>TOOLS<br />OF TRADE.</h1><Stack /></>}
        {selected === "05" && <><small>SIGNAL TOWER</small><h1>LIVE<br />TELEMETRY.</h1><Git /></>}
      </div>
    </div>
  );
}

/* 03 TRAIN STATION */

function TrainStation() {
  const [station, setStation] = useState(0);
  const stations = [
    ["PLATFORM 01", "PROJECTS", <Projects />],
    ["PLATFORM 02", "STORE", <Products />],
    ["PLATFORM 03", "SERVICES", <Services />],
    ["PLATFORM 04", "TECH STACK", <Stack />],
    ["PLATFORM 05", "CLIENT VOICES", <Reviews />],
    ["PLATFORM 06", "GIT SIGNAL", <Git />],
  ];

  return (
    <div className="site s03 train">
      <header><b>HC CENTRAL</b><span>HALFCLUTCH RAIL / DEPARTURES</span><strong>NOW BOARDING</strong></header>
      <div className="train-title"><small>DESTINATION</small><h1>{stations[station][1]}</h1><span>TRAIN HC-{String(station + 1).padStart(2, "0")}</span></div>
      <div className="train-platform">
        <div className="train-line">
          {stations.map(function (item, index) {
            return <button key={item[0]} className={index === station ? "active" : ""} onClick={() => setStation(index)}><span>{item[0]}</span><b>{item[1]}</b></button>;
          })}
        </div>
        <div className="train-car">
          <div className="train-front">HC</div>
          <div className="train-window">● ● ● ● ● ●</div>
          <div className="train-body">{stations[station][2]}</div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

/* 04 MUSEUM */

function Museum() {
  const [room, setRoom] = useState(0);
  const rooms = [
    ["ROOM 01", "THE WORK", <Projects />],
    ["ROOM 02", "THE STORE", <Products />],
    ["ROOM 03", "THE SERVICE DESK", <Services />],
    ["ROOM 04", "THE LAB", <Stack />],
    ["ROOM 05", "THE VISITORS", <Reviews />],
  ];

  return (
    <div className="site s04 museum">
      <header><small>THE HALFCLUTCH MUSEUM</small><b>PERMANENT COLLECTION / 2026</b></header>
      <div className="museum-hall">
        <nav>
          {rooms.map(function (roomItem, index) {
            return <button onClick={() => setRoom(index)} className={room === index ? "active" : ""} key={roomItem[0]}><span>{roomItem[0]}</span><b>{roomItem[1]}</b></button>;
          })}
        </nav>
        <main>
          <div className="museum-art"><span>HC</span></div>
          <small>{rooms[room][0]}</small>
          <h1>{rooms[room][1]}</h1>
          <div>{rooms[room][2]}</div>
        </main>
      </div>
      <Contact dark />
    </div>
  );
}

/* 05 ARCADE */

function Arcade() {
  const [game, setGame] = useState("BUILD");
  const games = {
    BUILD: <Projects />,
    BUY: <Products />,
    FIX: <Services />,
    STACK: <Stack />,
    SIGNAL: <Git />,
  };

  return (
    <div className="site s05 arcade">
      <header><b>HALFCLUTCH ARCADE</b><span>INSERT IDEA / PRESS START</span><strong>HI-SCORE: 1284</strong></header>
      <div className="arcade-machine">
        <div className="arcade-screen">
          <small>PLAYER 01 / SHAVANDEB</small>
          <h1>{game}</h1>
          <div>{games[game]}</div>
        </div>
        <div className="arcade-controls">
          {Object.keys(games).map(function (x) {
            return <button key={x} className={game === x ? "active" : ""} onClick={() => setGame(x)}>{x}</button>;
          })}
        </div>
      </div>
      <Reviews />
      <Contact />
    </div>
  );
}

/* 06 SPACE STATION */

function SpaceStation() {
  const [module, setModule] = useState(0);
  const modules = [
    ["MISSION", "PROJECTS", <Projects />],
    ["DOCK", "STORE", <Products />],
    ["ENGINEERING", "SERVICES", <Services />],
    ["CORE", "STACK", <Stack />],
    ["BLACK BOX", "TELEMETRY", <Git />],
  ];

  return (
    <div className="site s06 space">
      <div className="space-stars">✦ · ✧ · · ✦ · ✧ · · ✦ · ✧ ·</div>
      <header><b>HC-01</b><span>HALFCLUTCH ORBITAL</span><i>● LIFE SUPPORT ONLINE</i></header>
      <div className="space-orbit">
        <div className="planet"><b>HC</b><small>SOFTWARE</small></div>
        {modules.map(function (m, index) {
          return <button key={m[0]} className={"satellite sat" + index + (module === index ? " active" : "")} onClick={() => setModule(index)}><small>{m[0]}</small><b>{m[1]}</b></button>;
        })}
      </div>
      <section className="space-module"><small>{modules[module][0]}</small><h1>{modules[module][1]}</h1>{modules[module][2]}</section>
      <Contact dark />
    </div>
  );
}

/* 07 BLUEPRINT */

function Blueprint() {
  const [layer, setLayer] = useState("PROJECTS");
  const layers = {
    PROJECTS: <Projects />,
    PRODUCTS: <Products />,
    SERVICES: <Services />,
    STACK: <Stack />,
    GIT: <Git />,
  };

  return (
    <div className="site s07 blueprint">
      <div className="blueprint-grid" />
      <header><b>HALFCLUTCH / SYSTEM BLUEPRINT</b><span>DRAWING NO. HC-2026</span></header>
      <div className="blueprint-title"><small>ENGINEERING DOCUMENT</small><h1>SOFTWARE<br />SYSTEM.</h1></div>
      <nav className="blueprint-tabs">
        {Object.keys(layers).map(function (x) {
          return <button key={x} className={layer === x ? "active" : ""} onClick={() => setLayer(x)}>{x}</button>;
        })}
      </nav>
      <main className="blueprint-sheet"><div className="blueprint-cross">+</div><small>LAYER / {layer}</small><h2>{layer}</h2>{layers[layer]}</main>
      <Contact />
    </div>
  );
}

/* 08 COMMAND CENTER */

function CommandCenter() {
  const [command, setCommand] = useState("home");
  const screens = {
    home: <><small>MAIN CONSOLE</small><h1>WHAT SHOULD<br />WE BUILD?</h1><p>{DATA.developer.bio}</p></>,
    work: <><small>WORK DATABASE</small><h1>PROJECTS</h1><Projects /></>,
    shop: <><small>PRODUCT DATABASE</small><h1>STORE</h1><Products /></>,
    services: <><small>REQUEST CENTER</small><h1>SERVICES</h1><Services /></>,
    stack: <><small>TECH MATRIX</small><h1>STACK</h1><Stack /></>,
    git: <><small>SYSTEM SIGNAL</small><h1>TELEMETRY</h1><Git /></>,
  };

  return (
    <div className="site s08 command">
      <aside><div className="command-logo">HC</div><small>COMMAND</small>{Object.keys(screens).map(function (x) { return <button key={x} className={command === x ? "active" : ""} onClick={() => setCommand(x)}>{x}</button>; })}<div className="command-radar">◉</div></aside>
      <main><header><span>HALFCLUTCH COMMAND CENTER</span><b>CHANNEL / {command.toUpperCase()}</b></header><section className="command-console">{screens[command]}</section></main>
      <Contact dark />
    </div>
  );
}

/* 09 NEWSPAPER */

function Newspaper() {
  return (
    <div className="site s09 newspaper">
      <header><span>THE</span><h1>HALFCLUTCH</h1><b>SOFTWARE DAILY</b></header>
      <div className="newspaper-date">FRIDAY / 21 AUGUST 2026 / GLOBAL SOFTWARE EDITION</div>
      <main className="newspaper-grid">
        <article className="news-lead"><small>BREAKING</small><h2>A DEVELOPER<br />BUILDS A<br />SOFTWARE<br />BUSINESS.</h2><p>{DATA.developer.bio}</p></article>
        <article><small>WORK</small><Projects compact /></article>
        <article><small>MARKET</small><Products /></article>
        <article><small>OPINION</small><h3>WHY BUY SOFTWARE FROM SCRATCH?</h3><p>Sometimes the fastest route is a ready-made product. Sometimes the right move is to repair what you already have.</p></article>
        <article><small>TECH</small><Stack /></article>
        <article><small>SIGNAL</small><Git small /></article>
        <article className="news-reviews"><small>VOICES</small><Reviews /></article>
      </main>
      <Contact />
    </div>
  );
}

/* 10 FILM CREDITS */

function FilmCredits() {
  const [scene, setScene] = useState(0);
  const scenes = [
    ["SCENE 01", "THE DEVELOPER", <p>{DATA.developer.bio}</p>],
    ["SCENE 02", "THE PROJECTS", <Projects />],
    ["SCENE 03", "THE STORE", <Products />],
    ["SCENE 04", "THE FIX", <Services />],
    ["SCENE 05", "THE STACK", <Stack />],
    ["SCENE 06", "THE SIGNAL", <Git />],
    ["SCENE 07", "THE PEOPLE", <Reviews />],
  ];

  return (
    <div className="site s10 film">
      <div className="film-grain" />
      <header><span>HALFCLUTCH PICTURES</span><b>AN ORIGINAL SOFTWARE STORY</b></header>
      <main>
        <small>{scenes[scene][0]}</small>
        <h1>{scenes[scene][1]}</h1>
        <div>{scenes[scene][2]}</div>
      </main>
      <div className="film-controls">{scenes.map(function (x, index) { return <button key={x[0]} className={scene === index ? "active" : ""} onClick={() => setScene(index)}>{String(index + 1).padStart(2, "0")}</button>; })}</div>
      <div className="film-credits">DIRECTED BY SHAVANDEB KAITI / DEVELOPED AT HALFCLUTCH / 2026</div>
    </div>
  );
}

/* 11 MUSIC PLAYER */

function MusicPlayer() {
  const [track, setTrack] = useState(0);
  const tracks = [
    ["01", "TINT SCHOLAR", "BUILD"],
    ["02", "ACADEMIC MANAGEMENT", "BUILD"],
    ["03", "INVENTORY & BILLING", "BUILD"],
    ["04", "ADMIN DASHBOARD KIT", "BUY"],
    ["05", "INVENTORY MANAGER", "BUY"],
    ["06", "CUSTOM BUILD", "SERVICE"],
    ["07", "FIX EXISTING", "SERVICE"],
    ["08", "GIT SIGNAL", "DATA"],
  ];

  const current = tracks[track];

  return (
    <div className="site s11 music">
      <header><b>HALFCLUTCH FM</b><span>SOFTWARE / 24HR BROADCAST</span><i>● LIVE</i></header>
      <main>
        <div className="record"><div>HC</div></div>
        <section><small>NOW PLAYING / {current[2]}</small><h1>{current[1]}</h1><div className="wave">▁▃▆█▆▃▁ ▂▅█▇▃▁ ▃▆█▅▂</div><p>{DATA.developer.bio}</p></section>
      </main>
      <div className="tracklist">{tracks.map(function (x, index) { return <button key={x[0]} className={index === track ? "active" : ""} onClick={() => setTrack(index)}><span>{x[0]}</span><b>{x[1]}</b><small>{x[2]}</small></button>; })}</div>
      <Contact dark />
    </div>
  );
}

/* 12 OPERATING SYSTEM */

function OperatingSystem() {
  const [windowName, setWindowName] = useState("about");
  const apps = {
    about: ["ABOUT", <><h1>HALFCLUTCH OS</h1><p>{DATA.developer.bio}</p></>],
    projects: ["PROJECTS", <Projects />],
    store: ["STORE", <Products />],
    services: ["SERVICES", <Services />],
    stack: ["STACK", <Stack />],
    telemetry: ["TELEMETRY", <Git />],
  };

  return (
    <div className="site s12 os">
      <div className="os-wallpaper"><div className="os-logo">HC</div><span>HALFCLUTCH OS / 1.0</span></div>
      <div className="os-dock">{Object.keys(apps).map(function (x) { return <button key={x} onClick={() => setWindowName(x)}>{x}</button>; })}</div>
      <div className="os-window">
        <header><span>● ● ●</span><b>{apps[windowName][0]}</b></header>
        <main>{apps[windowName][1]}</main>
      </div>
    </div>
  );
}

/* 13 DATA OBSERVATORY */

function DataObservatory() {
  const bars = Array.from({ length: 28 }, (_, i) => 20 + ((i * 37) % 80));

  return (
    <div className="site s13 observatory">
      <header><small>HALFCLUTCH DATA OBSERVATORY</small><b>LIVE / SIMULATED TELEMETRY</b></header>
      <div className="observatory-hero"><h1>SOFTWARE<br />LEAVES<br />SIGNALS.</h1><Git /></div>
      <div className="signal-chart">{bars.map(function (height, i) { return <span key={i} style={{ height: height + "%" }} />; })}</div>
      <section className="observatory-panels"><div><small>PROJECT STREAM</small><Projects /></div><div><small>PRODUCT STREAM</small><Products /></div><div><small>STACK MATRIX</small><Stack /></div></section>
      <Contact />
    </div>
  );
}

/* 14 CONSTRUCTION SITE */

function ConstructionSite() {
  const [step, setStep] = useState(0);
  const steps = [
    ["01", "IDEA", "Bring the business problem."],
    ["02", "ARCHITECTURE", "Choose the technology."],
    ["03", "BUILD", "Turn the system into software."],
    ["04", "TEST", "Put it under pressure."],
    ["05", "SHIP", "Release the product."],
  ];

  return (
    <div className="site s14 construction">
      <header><b>HALFCLUTCH CONSTRUCTION</b><span>SITE STATUS / BUILDING</span></header>
      <div className="construction-sky">BUILD<br />IN<br />PROGRESS</div>
      <div className="construction-crane"><span>HC</span></div>
      <div className="construction-floor">
        {steps.map(function (item, index) { return <button key={item[0]} className={step === index ? "active" : ""} onClick={() => setStep(index)}><small>{item[0]}</small><b>{item[1]}</b><p>{item[2]}</p></button>; })}
      </div>
      <div className="construction-load">{step === 2 ? <Projects /> : step === 4 ? <Git /> : step === 1 ? <Stack /> : step === 3 ? <Reviews /> : <Services />}</div>
      <Contact dark />
    </div>
  );
}

/* 15 WAREHOUSE */

function Warehouse() {
  const [item, setItem] = useState(0);
  const product = DATA.products[item];

  return (
    <div className="site s15 warehouse">
      <header><b>HC WAREHOUSE 04</b><span>SOFTWARE INVENTORY / {DATA.products.length} ITEMS</span><strong>OPEN</strong></header>
      <div className="warehouse-floor">
        {DATA.products.map(function (x, index) {
          return <button key={x.id} className={index === item ? "active" : ""} onClick={() => setItem(index)}><span>{x.id}</span><div className="crate"><b>{x.name}</b><small>{x.category}</small></div></button>;
        })}
      </div>
      <div className="warehouse-pick"><small>SELECTED INVENTORY</small><h1>{product.name}</h1><strong>{product.price}</strong><p>Ready-made software. Customization available.</p><button>REQUEST THIS PRODUCT →</button></div>
      <div className="warehouse-bottom"><Projects /><Services /></div>
    </div>
  );
}

/* 16 AUCTION HOUSE */

function AuctionHouse() {
  const [lot, setLot] = useState(0);
  const lots = [...DATA.projects.map(x => [x.id, x.name, "PROJECT"]), ...DATA.products.map(x => [x.id, x.name, "PRODUCT"])];
  const current = lots[lot];

  return (
    <div className="site s16 auction">
      <header><span>THE HALFCLUTCH AUCTION</span><b>LOT {current[0]}</b><i>ACCEPTING OFFERS</i></header>
      <main><div className="auction-object"><span>{current[0]}</span><strong>HC</strong><small>{current[2]}</small></div><section><small>LOT {current[0]} / {current[2]}</small><h1>{current[1]}</h1><p>Software asset available for purchase, customization or integration.</p><button>MAKE AN ENQUIRY →</button></section></main>
      <div className="auction-lots">{lots.map(function (x, index) { return <button key={x[0] + x[1]} className={index === lot ? "active" : ""} onClick={() => setLot(index)}><span>{x[0]}</span><b>{x[1]}</b><small>{x[2]}</small></button>; })}</div>
      <Reviews />
    </div>
  );
}

/* 17 FLIGHT CONTROL */

function FlightControl() {
  const [route, setRoute] = useState("BUILD");
  const routes = {
    BUILD: <Projects />,
    BUY: <Products />,
    FIX: <Services />,
    TECH: <Stack />,
    SIGNAL: <Git />,
  };

  return (
    <div className="site s17 flight">
      <header><b>HC AIR / FLIGHT CONTROL</b><span>GLOBAL SOFTWARE ROUTES</span><strong>RADAR ACTIVE</strong></header>
      <div className="flight-radar"><div className="radar-sweep" /><div className="radar-center">HC</div>{Object.keys(routes).map(function (x, i) { return <button key={x} style={{ transform: "rotate(" + (i * 72) + "deg) translateY(-190px) rotate(" + (-i * 72) + "deg)" }} className={route === x ? "active" : ""} onClick={() => setRoute(x)}>{x}</button>; })}</div>
      <main className="flight-panel"><small>ROUTE / {route}</small><h1>{route}</h1>{routes[route]}</main>
      <Contact dark />
    </div>
  );
}

/* 18 MECHANICAL CLOCK */

function MechanicalClock() {
  const [mode, setMode] = useState("WORK");
  const modes = {
    WORK: <Projects />,
    BUY: <Products />,
    FIX: <Services />,
    TECH: <Stack />,
    DATA: <Git />,
  };

  return (
    <div className="site s18 clock">
      <header><b>HALFCLUTCH TIMEKEEPING</b><span>SOFTWARE / ALWAYS MOVING</span></header>
      <div className="clock-face"><div className="clock-hand" /><div className="clock-center">HC</div>{Object.keys(modes).map(function (x, i) { return <button key={x} style={{ transform: "rotate(" + (i * 72) + "deg) translateY(-300px) rotate(" + (-i * 72) + "deg)" }} className={mode === x ? "active" : ""} onClick={() => setMode(x)}>{x}</button>; })}</div>
      <section className="clock-content"><small>TIME / {mode}</small><h1>{mode}</h1>{modes[mode]}</section>
    </div>
  );
}

/* 19 COMIC BOOK */

function ComicBook() {
  const [page, setPage] = useState(0);
  const pages = [
    ["PAGE 01", "THE IDEA", "Every software story starts with a problem.", <Services />],
    ["PAGE 02", "THE BUILD", "Then someone has to build it.", <Projects />],
    ["PAGE 03", "THE PRODUCT", "Some software is already waiting.", <Products />],
    ["PAGE 04", "THE TOOLS", "This is what I use to make it.", <Stack />],
    ["PAGE 05", "THE SIGNAL", "And this is the trail the code leaves.", <Git />],
    ["PAGE 06", "THE PEOPLE", "The final chapter belongs to the users.", <Reviews />],
  ];

  return (
    <div className="site s19 comic">
      <header><b>HALFCLUTCH COMICS</b><span>ISSUE #001</span></header>
      <main className="comic-page">
        <div className="comic-number">{pages[page][0]}</div>
        <div className="comic-art"><span>HC</span><i>!</i></div>
        <small>{pages[page][1]}</small>
        <h1>{pages[page][1]}</h1>
        <p>{pages[page][2]}</p>
        <div>{pages[page][3]}</div>
      </main>
      <nav>{pages.map(function (x, i) { return <button key={x[0]} className={i === page ? "active" : ""} onClick={() => setPage(i)}>{i + 1}</button>; })}</nav>
      <Contact />
    </div>
  );
}

/* 20 DIGITAL PLAYGROUND */

function DigitalPlayground() {
  const [active, setActive] = useState(null);
  const blocks = [
    ["ABOUT", "A", "about"], ["PROJECTS", "P", "projects"], ["STORE", "S", "store"],
    ["SERVICES", "F", "services"], ["STACK", "T", "stack"], ["GIT", "G", "git"], ["REVIEWS", "R", "reviews"]
  ];

  const content = {
    about: <><h1>{DATA.developer.name}</h1><p>{DATA.developer.bio}</p></>,
    projects: <Projects compact />,
    store: <Products />,
    services: <Services />,
    stack: <Stack />,
    git: <Git />,
    reviews: <Reviews />,
  };

  return (
    <div className="site s20 playground">
      <div className="playground-bg"><span>HALF</span><span>CLUTCH</span></div>
      <header><b>HC</b><span>MOVE AROUND / CLICK ANYTHING</span><small>20 / 20</small></header>
      <main>
        {blocks.map(function (block, index) {
          return <button key={block[0]} className={"play-block pb" + index + (active === block[2] ? " selected" : "")} onClick={() => setActive(active === block[2] ? null : block[2])}><small>{block[1]}</small><b>{block[0]}</b></button>;
        })}
        <div className={"play-info " + (active ? "visible" : "")}>{active ? content[active] : <><small>HALFCLUTCH</small><h1>NO TEMPLATE.</h1><p>Explore the pieces.</p></>}</div>
      </main>
      <div className="play-footer">BUILD / BUY / FIX / UPGRADE / SHIP</div>
    </div>
  );
}

export default function Page() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((value) => (value + 1) % NAMES.length);
  const previous = () => setIndex((value) => (value - 1 + NAMES.length) % NAMES.length);
  const random = () => setIndex(Math.floor(Math.random() * NAMES.length));

  const screens = useMemo(() => [
    <ControlRoom key="control" />,
    <CityGrid key="city" />,
    <TrainStation key="train" />,
    <Museum key="museum" />,
    <Arcade key="arcade" />,
    <SpaceStation key="space" />,
    <Blueprint key="blueprint" />,
    <CommandCenter key="command" />,
    <Newspaper key="newspaper" />,
    <FilmCredits key="film" />,
    <MusicPlayer key="music" />,
    <OperatingSystem key="os" />,
    <DataObservatory key="observatory" />,
    <ConstructionSite key="construction" />,
    <Warehouse key="warehouse" />,
    <AuctionHouse key="auction" />,
    <FlightControl key="flight" />,
    <MechanicalClock key="clock" />,
    <ComicBook key="comic" />,
    <DigitalPlayground key="playground" />,
  ], []);

  return (
    <main className="halfclutch20">
      <div className="switcher">
        <button onClick={previous}>←</button>
        <span>{String(index + 1).padStart(2, "0")} / 20</span>
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
html{scroll-behavior:smooth}
body{margin:0;background:#080808}
button,input{font:inherit}
button{cursor:pointer}
.halfclutch20{min-height:100vh}
.switcher{position:fixed;z-index:9999;right:15px;top:15px;display:flex;align-items:center;gap:5px;padding:5px;background:rgba(0,0,0,.82);border:1px solid rgba(255,255,255,.2);color:#fff;backdrop-filter:blur(15px);font:10px monospace}
.switcher button{border:1px solid rgba(255,255,255,.2);background:transparent;color:#fff;padding:8px 11px}
.switcher button:hover{background:#dfff00;color:#000}
.switcher span{min-width:55px;text-align:center}
.switcher small{padding:0 8px;opacity:.55}
.site{min-height:100vh;overflow:hidden}
.site small{font:10px monospace}
.site h1,.site h2,.site h3{letter-spacing:-.07em}
.site button{transition:.3s cubic-bezier(.2,.8,.2,1)}
.projects{display:flex;flex-direction:column;gap:0}
.projects article{display:grid;grid-template-columns:45px 1fr;gap:15px;padding:22px 0;border-bottom:1px solid currentColor;border-color:color-mix(in srgb,currentColor 18%,transparent)}
.projects article>span{color:#dfff00;font:10px monospace}
.projects h3{margin:5px 0;font-size:28px}
.projects small{opacity:.5}
.projects em{font:9px monospace;color:#dfff00;font-style:normal}
.projects-compact h3{font-size:18px}
.products{display:flex;flex-direction:column}
.products article{display:grid;grid-template-columns:50px 1fr auto;gap:15px;align-items:center;padding:20px 0;border-bottom:1px solid currentColor;border-color:color-mix(in srgb,currentColor 15%,transparent)}
.products article>span{font:9px monospace;opacity:.5}
.products h3{margin:4px 0;font-size:20px}
.products small{opacity:.45}
.products strong{font-size:25px;color:#dfff00}
.services{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.services article{padding:22px;border:1px solid currentColor;border-color:color-mix(in srgb,currentColor 18%,transparent);min-height:200px}
.services article small{color:#dfff00}
.services h3{font-size:24px}
.services p{opacity:.6;line-height:1.5}
.stack{display:flex;flex-wrap:wrap;gap:7px}
.stack span{padding:10px 12px;border:1px solid currentColor;font:10px monospace}
.stack span:hover{background:#dfff00;color:#000;transform:translateY(-5px)}
.git{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}
.git div{padding:20px;border:1px solid currentColor;border-color:color-mix(in srgb,currentColor 16%,transparent);min-height:110px}
.git small,.git strong{display:block}
.git small{opacity:.45}
.git strong{font-size:30px;margin-top:15px;color:#dfff00}
.git-small{grid-template-columns:repeat(2,1fr)}
.reviews{display:flex;gap:8px;overflow:auto}
.reviews article{min-width:300px;padding:25px;border:1px solid currentColor;border-color:color-mix(in srgb,currentColor 18%,transparent)}
.reviews b{color:#dfff00}
.reviews p{line-height:1.5}
.reviews strong,.reviews small{display:block}
.reviews small{opacity:.45}
.contact{padding:120px 7vw;background:#dfff00;color:#080808}
.contact-dark{background:#080808;color:#f4f4f4}
.contact h2{max-width:1100px;font-size:clamp(55px,10vw,150px);line-height:.7;margin:35px 0;letter-spacing:-.09em}
.contact p{max-width:600px;line-height:1.5}
.contact a{color:inherit;font-weight:bold}

/* 01 */
.control{background:#10120f;color:#e9eee5}
.control-header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #343b31;font:10px monospace}
.control-header b,.control-header small{display:block}.control-header small{opacity:.4;margin-top:4px}.control-header i{color:#dfff00;font-style:normal}
.control-grid{min-height:900px;display:grid;grid-template-columns:260px 1fr}
.control-console{padding:40px 25px;border-right:1px solid #343b31;display:flex;flex-direction:column;gap:8px}
.control-console small{opacity:.4;margin-bottom:20px}
.control-console button{padding:14px;text-align:left;border:1px solid #343b31;background:transparent;color:#aaa;font:10px monospace}
.control-console button.active,.control-console button:hover{background:#dfff00;color:#080808}
.control-mini{margin-top:auto;padding:15px;border:1px solid #343b31}
.control-mini span,.control-mini b{display:block}.control-mini span{font:9px monospace;opacity:.4}
.control-screen{padding:80px 7vw}
.control-screen>small{color:#dfff00}.control-screen>h1{font-size:clamp(60px,9vw,140px);line-height:.68}

/* 02 */
.city{background:#111;color:#f3f0e8;min-height:1600px}
.city-sky{height:300px;padding:100px 7vw;display:flex;justify-content:space-between;align-items:start;background:linear-gradient(#111827,#27384c)}
.city-sky span{font:10px monospace}.city-sky b{font-size:20px}
.city-map{height:650px;position:relative;background:repeating-linear-gradient(0deg,#20221f,#20221f 70px,#181a17 71px),repeating-linear-gradient(90deg,transparent,transparent 70px,#2b2d28 71px)}
.building{position:absolute;padding:18px;text-align:left;border:1px solid #555;background:#292b27;color:#eee;box-shadow:0 18px 30px #0008}
.building small,.building strong,.building i{display:block}.building i{font:9px monospace;color:#dfff00;font-style:normal}.building strong{font-size:14px}.building .windows{display:block;margin-top:20px;line-height:1.8;color:#dfff00}
.building:hover,.building.selected{background:#dfff00;color:#111;transform:translateY(-12px)}
.b0{left:8%;top:20%;width:230px;height:230px}.b1{left:38%;top:10%;width:300px;height:280px}.b2{right:8%;top:18%;width:260px;height:250px}.b3{left:18%;bottom:7%;width:250px;height:230px}.b4{left:52%;bottom:8%;width:220px;height:250px}.b5{right:8%;bottom:6%;width:230px;height:240px}
.city-info{padding:100px 7vw}.city-info h1{font-size:clamp(60px,10vw,150px);line-height:.68}.city-info p{max-width:600px;opacity:.6}

/* 03 */
.train{background:#d9d3c5;color:#161616}
.train header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:2px solid #161616;font:10px monospace}.train header strong{color:#0a7d3b}
.train-title{padding:100px 7vw 60px}.train-title h1{font-size:clamp(70px,12vw,180px);line-height:.65;margin:30px 0}.train-title span{font:10px monospace}
.train-platform{border-top:2px solid #161616;background:#bbb6a9;padding:70px 7vw 120px}
.train-line{display:flex;gap:0;border-bottom:8px solid #161616}
.train-line button{flex:1;padding:20px;text-align:left;border:0;border-right:1px solid #555;background:#d9d3c5}.train-line button.active{background:#161616;color:#dfff00}.train-line span,.train-line b{display:block}.train-line span{font:9px monospace}.train-car{margin-top:70px;border:5px solid #161616;background:#e8e3d8;padding:30px;box-shadow:20px 20px #161616}
.train-front{font-size:70px;font-weight:900}.train-window{padding:25px;background:#171717;color:#dfff00;letter-spacing:20px;margin:20px 0}.train-body{padding:20px}

/* 04 */
.museum{background:#111;color:#eee}
.museum header{padding:30px 7vw;display:flex;justify-content:space-between;border-bottom:1px solid #444;font:10px monospace}
.museum-hall{display:grid;grid-template-columns:280px 1fr;min-height:1000px}
.museum-hall nav{border-right:1px solid #444}
.museum-hall nav button{width:100%;padding:30px;text-align:left;border:0;border-bottom:1px solid #333;background:transparent;color:#999}.museum-hall nav button.active{background:#dfff00;color:#111}
.museum-hall nav span,.museum-hall nav b{display:block}.museum-hall nav span{font:9px monospace}
.museum-hall main{padding:70px 7vw}.museum-art{height:260px;display:grid;place-items:center;background:radial-gradient(circle,#dfff00,#252525);margin-bottom:60px}.museum-art span{font-size:80px;color:#111}.museum-hall h1{font-size:90px;line-height:.7}

/* 05 */
.arcade{background:#14051d;color:#f7e8ff;padding-bottom:100px}
.arcade header{padding:25px 5vw;display:flex;justify-content:space-between;font:10px monospace}
.arcade-machine{max-width:1100px;margin:80px auto;padding:40px;background:#54236c;border:15px solid #e3a5ff;border-radius:40px;box-shadow:0 30px 0 #09030c}
.arcade-screen{min-height:650px;padding:45px;background:#08050b;border:8px solid #111;box-shadow:inset 0 0 80px #ff27db33}.arcade-screen small{color:#dfff00}.arcade-screen h1{font-size:100px;color:#ff7be8;line-height:.7}
.arcade-controls{display:flex;justify-content:center;gap:10px;margin-top:35px;flex-wrap:wrap}.arcade-controls button{padding:15px 25px;border:2px solid #ff7be8;background:#220d2d;color:#fff}.arcade-controls button.active{background:#dfff00;color:#111}
.arcade>.reviews{padding:80px 7vw}

/* 06 */
.space{background:#02040d;color:#e9efff;min-height:1700px;position:relative}
.space-stars{position:absolute;inset:0;opacity:.3;font-size:30px;word-spacing:50px;line-height:4}
.space header{position:relative;padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #29314b;font:10px monospace}.space header i{color:#dfff00;font-style:normal}
.space-orbit{position:relative;height:800px;display:grid;place-items:center}
.planet{width:220px;height:220px;border-radius:50%;display:grid;place-items:center;align-content:center;background:radial-gradient(circle at 30% 25%,#b8ff00,#293c0a 60%,#070a03);box-shadow:0 0 100px #dfff0040}.planet b{font-size:70px}.planet small{font:9px monospace}
.satellite{position:absolute;left:50%;top:50%;width:180px;padding:18px;transform-origin:0 0;border:1px solid #3c4a77;background:#0a0e1c;color:#fff}.satellite.active,.satellite:hover{background:#dfff00;color:#111}.sat0{transform:rotate(0deg) translateY(-320px)}.sat1{transform:rotate(72deg) translateY(-320px)}.sat2{transform:rotate(144deg) translateY(-320px)}.sat3{transform:rotate(216deg) translateY(-320px)}.sat4{transform:rotate(288deg) translateY(-320px)}
.satellite small,.satellite b{display:block}.satellite small{font:9px monospace}.space-module{padding:80px 7vw;border-top:1px solid #29314b}.space-module h1{font-size:110px;line-height:.65}

/* 07 */
.blueprint{background:#07356b;color:#d8edff;min-height:1600px;position:relative}
.blueprint-grid{position:absolute;inset:0;background-image:linear-gradient(#ffffff12 1px,transparent 1px),linear-gradient(90deg,#ffffff12 1px,transparent 1px);background-size:40px 40px}
.blueprint>*:not(.blueprint-grid){position:relative}
.blueprint header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #6aa5dc;font:10px monospace}.blueprint-title{padding:120px 7vw}.blueprint-title h1{font-size:clamp(80px,13vw,190px);line-height:.62}
.blueprint-tabs{padding:0 7vw;display:flex;flex-wrap:wrap}.blueprint-tabs button{padding:13px 20px;border:1px solid #6aa5dc;background:transparent;color:#d8edff}.blueprint-tabs button.active{background:#dfff00;color:#111}
.blueprint-sheet{margin:40px 7vw;padding:60px;border:1px solid #6aa5dc;background:#08417f80}.blueprint-cross{font-size:60px;color:#dfff00}.blueprint-sheet h2{font-size:90px}

/* 08 */
.command{background:#050608;color:#e8ebf0;display:grid;grid-template-columns:250px 1fr}
.command>aside{padding:30px 20px;border-right:1px solid #272b33;display:flex;flex-direction:column;gap:7px;min-height:100vh}.command-logo{font-size:60px;color:#dfff00;margin-bottom:50px}.command aside button{padding:13px;text-align:left;border:1px solid #272b33;background:transparent;color:#777;font:10px monospace}.command aside button.active{background:#dfff00;color:#111}.command-radar{margin-top:auto;height:150px;border:1px solid #315d35;border-radius:50%;display:grid;place-items:center;color:#dfff00;font-size:50px}
.command>main{padding:25px}.command main>header{display:flex;justify-content:space-between;border-bottom:1px solid #272b33;padding-bottom:20px;font:10px monospace}.command-console{padding:80px 5vw}.command-console>h1{font-size:clamp(70px,11vw,170px);line-height:.65}.command-console>small{color:#dfff00}.command-console>p{max-width:600px;opacity:.5}

/* 09 */
.newspaper{background:#eee9de;color:#171717;padding:30px 5vw}
.newspaper header{display:grid;grid-template-columns:1fr 4fr 1fr;align-items:end;border-bottom:4px solid #171717}.newspaper header h1{font-size:clamp(70px,12vw,180px);margin:0;line-height:.7;text-align:center;letter-spacing:-.1em}.newspaper header span,.newspaper header b{font:10px monospace;padding-bottom:15px}.newspaper-date{padding:15px 0;border-bottom:1px solid #171717;font:9px monospace}
.newspaper-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:12px;padding-top:12px}.newspaper-grid>article{padding:25px;border:1px solid #171717}.newspaper-grid small{font:9px monospace}.news-lead{grid-row:span 2}.news-lead h2{font-size:clamp(70px,9vw,130px);line-height:.62}.news-lead p{max-width:600px}.news-reviews{grid-column:span 3;overflow:hidden}

/* 10 */
.film{background:#080808;color:#eee;min-height:1500px;position:relative;text-align:center}
.film-grain{position:fixed;inset:0;pointer-events:none;opacity:.08;background-image:radial-gradient(#fff 1px,transparent 1px);background-size:4px 4px;z-index:1}
.film header{position:relative;z-index:2;padding:30px;display:flex;justify-content:space-between;font:10px monospace}.film main{position:relative;z-index:2;min-height:900px;padding:160px 7vw;display:flex;flex-direction:column;align-items:center;justify-content:center}.film main h1{font-size:clamp(80px,13vw,190px);line-height:.62;max-width:1200px}.film main>div{width:100%;text-align:left}.film main>small{color:#dfff00}.film-controls{position:relative;z-index:2;display:flex;justify-content:center;gap:5px}.film-controls button{width:40px;height:40px;border:1px solid #555;background:transparent;color:#fff}.film-controls button.active{background:#dfff00;color:#111}.film-credits{padding:80px;font:10px monospace;opacity:.5}

/* 11 */
.music{background:#121212;color:#eee;min-height:1600px}
.music header{padding:25px 5vw;display:flex;justify-content:space-between;font:10px monospace}.music header i{color:#dfff00;font-style:normal}
.music main{display:grid;grid-template-columns:45% 55%;align-items:center;padding:100px 8vw;min-height:800px}.record{width:min(500px,70vw);aspect-ratio:1;border-radius:50%;background:repeating-radial-gradient(circle,#050505 0 4px,#202020 5px 7px);display:grid;place-items:center;box-shadow:0 0 80px #000}.record>div{width:160px;height:160px;border-radius:50%;display:grid;place-items:center;background:#dfff00;color:#111;font-size:50px;animation:spin 8s linear infinite}.music main h1{font-size:clamp(60px,10vw,140px);line-height:.65}.wave{color:#dfff00;letter-spacing:10px;font-size:25px}.tracklist{margin:0 8vw;border-top:1px solid #444}.tracklist button{width:100%;padding:20px;display:grid;grid-template-columns:50px 1fr 100px;text-align:left;border:0;border-bottom:1px solid #333;background:transparent;color:#aaa}.tracklist button.active{background:#dfff00;color:#111}.tracklist button span,.tracklist button small{font:10px monospace}

/* 12 */
.os{background:#c9d3d9;min-height:100vh;position:relative;padding:50px}
.os-wallpaper{min-height:100vh;padding:60px;background:linear-gradient(135deg,#315e6c,#a8c5b0);color:#fff}.os-logo{font-size:30vw;font-weight:900;line-height:.7;opacity:.2}.os-wallpaper span{font:10px monospace}
.os-window{position:absolute;z-index:3;left:15%;top:13%;width:65%;min-height:650px;background:#f4f5f5;color:#151515;box-shadow:30px 30px 60px #0005}.os-window header{height:45px;padding:12px 15px;display:flex;justify-content:space-between;background:#ddd;border-bottom:1px solid #bbb;font:10px monospace}.os-window main{padding:50px}.os-window h1{font-size:90px;line-height:.65}.os-dock{position:fixed;z-index:10;bottom:20px;left:50%;transform:translateX(-50%);padding:8px;border-radius:15px;background:#ffffffb8;backdrop-filter:blur(20px);display:flex;gap:5px}.os-dock button{padding:12px;border:0;background:#fff}

/* 13 */
.observatory{background:#03080a;color:#bceaff}
.observatory header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #19404b;font:10px monospace}.observatory header b{color:#dfff00}
.observatory-hero{padding:100px 7vw;display:grid;grid-template-columns:1fr 1fr;gap:80px}.observatory-hero h1{font-size:clamp(80px,12vw,180px);line-height:.62;color:#dfff00}.signal-chart{height:400px;padding:50px 7vw;display:flex;align-items:end;gap:5px;border-top:1px solid #19404b;border-bottom:1px solid #19404b}.signal-chart span{flex:1;background:#37d7ff;opacity:.6;animation:pulse 2s ease-in-out infinite alternate}.observatory-panels{display:grid;grid-template-columns:1fr 1fr;gap:60px;padding:100px 7vw}.observatory-panels>div{padding:25px;border:1px solid #19404b}.observatory-panels>div:last-child{grid-column:span 2}

/* 14 */
.construction{background:#ded8c8;color:#171717;min-height:1700px;position:relative}.construction header{padding:25px 5vw;display:flex;justify-content:space-between;font:10px monospace;border-bottom:2px solid #171717}.construction-sky{padding:100px 7vw;font-size:clamp(90px,14vw,200px);font-weight:900;line-height:.58;background:#8ab6cf}.construction-crane{height:400px;border-bottom:20px solid #171717;border-top:20px solid #171717;display:grid;place-items:center;background:repeating-linear-gradient(135deg,#dfff00,#dfff00 40px,#171717 41px,#171717 80px)}.construction-crane span{width:220px;height:220px;border-radius:50%;display:grid;place-items:center;background:#171717;color:#dfff00;font-size:60px}.construction-floor{display:grid;grid-template-columns:repeat(5,1fr);padding:50px 5vw;gap:8px}.construction-floor button{min-height:260px;padding:20px;text-align:left;border:1px solid #171717;background:#eee8d9}.construction-floor button.active{background:#171717;color:#dfff00}.construction-floor small,.construction-floor b{display:block}.construction-floor b{font-size:25px}.construction-load{padding:80px 7vw}

/* 15 */
.warehouse{background:#20231f;color:#eee;min-height:1600px}.warehouse header{padding:25px 5vw;display:flex;justify-content:space-between;font:10px monospace;border-bottom:1px solid #3d433b}.warehouse header strong{color:#dfff00}
.warehouse-floor{padding:100px 7vw;display:grid;grid-template-columns:repeat(5,1fr);gap:15px}.warehouse-floor button{height:300px;border:0;background:transparent;color:#eee;position:relative}.warehouse-floor button.active{transform:translateY(-15px)}.crate{height:230px;padding:25px;display:flex;flex-direction:column;justify-content:space-between;text-align:left;background:linear-gradient(135deg,#75512f,#3f2b1b);border:7px solid #261b11;box-shadow:10px 15px 0 #0c0d0b}.crate b{font-size:20px}.crate small{font:9px monospace;color:#dfff00}.warehouse-pick{margin:0 7vw;padding:70px;border:1px solid #3d433b;background:#171a16}.warehouse-pick h1{font-size:90px;line-height:.65}.warehouse-pick>strong{font-size:50px;color:#dfff00}.warehouse-pick button{padding:15px;border:1px solid #dfff00;background:#dfff00;color:#111}.warehouse-bottom{padding:100px 7vw;display:grid;grid-template-columns:1fr 1fr;gap:70px}

/* 16 */
.auction{background:#17100a;color:#f5e7d0;min-height:1600px}.auction header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #604c34;font:10px monospace}.auction header i{color:#dfff00;font-style:normal}.auction main{display:grid;grid-template-columns:45% 55%;padding:100px 7vw;gap:80px;align-items:center}.auction-object{height:550px;padding:35px;display:flex;flex-direction:column;justify-content:space-between;background:linear-gradient(145deg,#c6a15b,#5e431d);color:#111;box-shadow:25px 30px #000;transform:rotate(-2deg)}.auction-object strong{font-size:160px;align-self:center}.auction main h1{font-size:100px;line-height:.65}.auction main button{padding:15px;background:#dfff00;border:0}.auction-lots{display:flex;overflow:auto;border-top:1px solid #604c34;border-bottom:1px solid #604c34}.auction-lots button{min-width:220px;padding:25px;text-align:left;border:0;border-right:1px solid #604c34;background:transparent;color:#aaa}.auction-lots button.active{background:#dfff00;color:#111}.auction-lots span,.auction-lots b,.auction-lots small{display:block}.auction-lots small{font:9px monospace}.auction>.reviews{padding:100px 7vw}

/* 17 */
.flight{background:#061014;color:#d9ffff;min-height:1600px}.flight header{padding:25px 5vw;display:flex;justify-content:space-between;font:10px monospace;border-bottom:1px solid #17424a}.flight header strong{color:#dfff00}
.flight-radar{height:700px;width:700px;max-width:80vw;max-height:80vw;margin:80px auto;position:relative;border:1px solid #2c6570;border-radius:50%;background:repeating-radial-gradient(circle,transparent 0 90px,#19414a 91px 92px)}.radar-sweep{position:absolute;left:50%;top:50%;width:50%;height:2px;background:#dfff00;transform-origin:left;animation:radar 4s linear infinite}.radar-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100px;height:100px;border-radius:50%;display:grid;place-items:center;background:#dfff00;color:#111;font-weight:900}.flight-radar button{position:absolute;left:50%;top:50%;width:130px;padding:12px;border:1px solid #2c6570;background:#061014;color:#d9ffff;transform-origin:0 0}.flight-radar button.active{background:#dfff00;color:#111}.flight-panel{padding:80px 7vw;border-top:1px solid #17424a}.flight-panel h1{font-size:110px;line-height:.65}

/* 18 */
.clock{background:#e6e0d3;color:#171717;min-height:1600px;padding-bottom:100px}.clock header{padding:25px 5vw;display:flex;justify-content:space-between;font:10px monospace;border-bottom:1px solid #171717}.clock-face{width:650px;height:650px;max-width:80vw;max-height:80vw;margin:100px auto;position:relative;border:15px solid #292929;border-radius:50%;background:#d8d1c1;box-shadow:inset 0 0 50px #0003}.clock-hand{position:absolute;left:50%;top:50%;width:6px;height:45%;background:#171717;transform-origin:bottom;animation:clockhand 8s linear infinite}.clock-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:90px;height:90px;border-radius:50%;display:grid;place-items:center;background:#dfff00;border:5px solid #171717}.clock-face button{position:absolute;left:50%;top:50%;width:120px;padding:10px;background:#eee8db;border:1px solid #171717;transform-origin:0 0}.clock-face button.active{background:#171717;color:#dfff00}.clock-face button:nth-of-type(1){transform:rotate(0deg) translateY(-300px)}.clock-face button:nth-of-type(2){transform:rotate(72deg) translateY(-300px)}.clock-face button:nth-of-type(3){transform:rotate(144deg) translateY(-300px)}.clock-face button:nth-of-type(4){transform:rotate(216deg) translateY(-300px)}.clock-face button:nth-of-type(5){transform:rotate(288deg) translateY(-300px)}.clock-content{padding:80px 7vw}.clock-content h1{font-size:110px;line-height:.65}

/* 19 */
.comic{background:#f5efdd;color:#171717;min-height:1700px;padding-bottom:100px}.comic header{padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:5px solid #171717;font:10px monospace}.comic-page{max-width:1200px;margin:70px auto;padding:60px;border:8px solid #171717;box-shadow:20px 25px #171717;background:#fff}.comic-number{font:12px monospace}.comic-art{height:300px;margin:30px 0;background:#dfff00;border:5px solid #171717;display:grid;place-items:center;position:relative}.comic-art span{font-size:100px;font-weight:900}.comic-art i{position:absolute;right:20%;top:20%;font-size:100px;font-style:normal}.comic-page h1{font-size:100px;line-height:.65}.comic-page p{font-size:20px;max-width:700px}.comic nav{display:flex;justify-content:center;gap:8px}.comic nav button{width:50px;height:50px;border:3px solid #171717;background:#fff}.comic nav button.active{background:#dfff00}

/* 20 */
.playground{background:#f3efe3;color:#111;min-height:1600px;position:relative}.playground-bg{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;pointer-events:none;overflow:hidden}.playground-bg span{font-size:22vw;font-weight:900;line-height:.65;color:transparent;-webkit-text-stroke:1px #0002}.playground header{position:relative;z-index:4;padding:25px 5vw;display:flex;justify-content:space-between;border-bottom:1px solid #171717;font:10px monospace}.playground header b{font-size:30px}.playground main{position:relative;z-index:3;min-height:1200px;margin:50px 5vw}.play-block{position:absolute;width:180px;height:150px;padding:20px;text-align:left;border:2px solid #111;background:#f3efe3;box-shadow:10px 10px #111;transform:rotate(-4deg);transition:.45s cubic-bezier(.2,.8,.2,1)}.play-block:hover,.play-block.selected{z-index:10;transform:scale(1.15) rotate(0);background:#dfff00}.play-block small,.play-block b{display:block}.play-block b{font-size:22px;margin-top:20px}.pb0{left:3%;top:5%}.pb1{left:30%;top:12%;transform:rotate(5deg)}.pb2{right:8%;top:7%;transform:rotate(-3deg)}.pb3{left:15%;top:35%;transform:rotate(3deg)}.pb4{right:20%;top:38%;transform:rotate(-6deg)}.pb5{left:42%;top:58%;transform:rotate(4deg)}.pb6{right:4%;top:65%;transform:rotate(-2deg)}.play-info{position:absolute;left:27%;top:25%;width:48%;min-height:500px;padding:50px;border:2px solid #111;background:#fff;box-shadow:20px 20px #111;opacity:.92;transition:.5s}.play-info h1{font-size:90px;line-height:.65}.play-info.visible{animation:pop .5s ease}.play-footer{position:relative;z-index:4;padding:25px 5vw;border-top:1px solid #111;font:10px monospace}

/* animations */
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{from{opacity:.25;transform:scaleY(.7)}to{opacity:1;transform:scaleY(1)}}
@keyframes radar{to{transform:rotate(360deg)}}
@keyframes clockhand{to{transform:rotate(360deg)}}
@keyframes pop{from{opacity:0;transform:scale(.8) rotate(-3deg)}to{opacity:.92;transform:scale(1) rotate(0)}}

/* responsive */
@media(max-width:850px){
.switcher{left:8px;right:8px;justify-content:center}.switcher small{display:none}
.services{grid-template-columns:1fr}.git{grid-template-columns:1fr 1fr}
.control-grid,.command{grid-template-columns:1fr}.control-console{border-right:0;border-bottom:1px solid #343b31}.control-screen{padding:60px 25px}
.city-map{height:850px}.city-sky{display:block;height:220px}.building{transform:none!important;width:150px!important;height:170px!important}.b0{left:5%;top:10%}.b1{left:43%;top:7%}.b2{right:5%;top:30%}.b3{left:8%;bottom:10%}.b4{left:43%;bottom:8%}.b5{right:5%;bottom:30%}
.train-line{overflow:auto}.train-line button{min-width:150px}.train-title{padding:80px 25px 40px}
.museum-hall{grid-template-columns:1fr}.museum-hall nav{border-right:0;display:flex;overflow:auto}.museum-hall nav button{min-width:180px}.museum-hall main{padding:50px 25px}.museum-hall h1{font-size:65px}
.arcade-machine{margin:60px 15px;padding:15px;border-width:8px}.arcade-screen{padding:25px;min-height:600px}.arcade-screen h1{font-size:65px}
.space-orbit{height:650px}.satellite{width:120px}.sat0{transform:rotate(0deg) translateY(-240px)}.sat1{transform:rotate(72deg) translateY(-240px)}.sat2{transform:rotate(144deg) translateY(-240px)}.sat3{transform:rotate(216deg) translateY(-240px)}.sat4{transform:rotate(288deg) translateY(-240px)}.space-module{padding:50px 25px}
.blueprint-title{padding:90px 25px}.blueprint-sheet{margin:30px 15px;padding:30px}.blueprint-sheet h2{font-size:65px}
.command>aside{min-height:auto}.command-console{padding:60px 15px}
.newspaper{padding:15px}.newspaper header{grid-template-columns:1fr}.newspaper header h1{text-align:left;font-size:75px}.newspaper-grid{grid-template-columns:1fr}.news-lead,.news-reviews{grid-row:auto;grid-column:auto}
.film main{padding:100px 25px}.film main h1{font-size:70px}
.music main{grid-template-columns:1fr;padding:70px 25px;gap:60px}.record{margin:auto}.tracklist{margin:0 25px}
.os{padding:15px}.os-window{left:5%;top:12%;width:90%;min-height:600px}.os-window main{padding:30px}.os-window h1{font-size:60px}.os-dock{max-width:95vw;overflow:auto}
.observatory-hero{grid-template-columns:1fr;padding:70px 25px}.observatory-panels{grid-template-columns:1fr;padding:60px 25px}.observatory-panels>div:last-child{grid-column:auto}
.construction-floor{grid-template-columns:1fr 1fr;padding:30px 15px}.construction-sky{padding:80px 25px}.construction-load{padding:50px 25px}
.warehouse-floor{grid-template-columns:1fr 1fr;padding:60px 15px}.warehouse-pick{margin:0 15px;padding:40px}.warehouse-bottom{grid-template-columns:1fr;padding:60px 25px}
.auction main{grid-template-columns:1fr;padding:70px 25px}.auction-object{height:400px}.auction main h1{font-size:65px}
.flight-radar{margin:70px auto}.flight-panel{padding:60px 25px}.flight-panel h1{font-size:70px}
.clock-face{margin:70px auto}.clock-content{padding:50px 25px}.clock-content h1{font-size:75px}
.comic-page{margin:40px 15px;padding:25px}.comic-page h1{font-size:65px}
.playground main{margin:30px 15px;min-height:1450px}.play-block{position:relative!important;left:auto!important;right:auto!important;top:auto!important;width:100%;height:130px;margin:15px 0;transform:none!important}.play-info{position:relative;left:auto;top:auto;width:100%;margin:30px 0;min-height:500px}.play-info h1{font-size:65px}
}
@media(max-width:550px){
.git{grid-template-columns:1fr}.products article{grid-template-columns:35px 1fr auto}.services article{min-height:160px}.contact{padding:90px 25px}.contact h2{font-size:60px}
.city-map{height:900px}.building{width:120px!important;height:150px!important}.b0{left:3%;top:8%}.b1{left:38%;top:6%}.b2{right:2%;top:30%}.b3{left:5%;bottom:8%}.b4{left:38%;bottom:6%}.b5{right:2%;bottom:29%}
.newspaper header b{display:none}.newspaper-grid article{padding:18px}.news-lead h2{font-size:65px}
}
`;
