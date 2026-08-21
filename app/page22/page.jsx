// app/page.jsx
"use client";

import { useState } from "react";

/* ============================================================
   HALFCLUTCH.TECH — 60 LAYOUT DESIGN LAB
   Fake Git telemetry for now.
   Replace the values in DATA when you connect real APIs.
============================================================ */

const DATA = {
  developer: {
    name: "Shavandeb Kaiti",
    brand: "HALFCLUTCH",
    domain: "halfclutch.tech",
    role: "Software Developer · Builder · Product Maker",
    intro:
      "I build software, sell ready-made applications, and fix or upgrade existing products.",
  },

  stack: [
    "React","Next.js","JavaScript","TypeScript","Node.js","Express",
    "MongoDB","MySQL","Java","Spring Boot","Tailwind CSS","Docker","AWS","Git"
  ],

  projects: [
    ["01","Tint Scholar","Education Platform","React · Node · MongoDB"],
    ["02","Academic Management System","Business Software","React · Node · JWT · MongoDB"],
    ["03","Inventory & Billing","Enterprise Application","Java · Spring Boot · MySQL"],
    ["04","Favorite Movies","Web Application","Node · Sequelize · MySQL"],
  ],

  products: [
    ["Admin Dashboard Kit","Dashboard","$49"],
    ["Inventory Manager","Business","$79"],
    ["School Management System","Education","$129"],
    ["SaaS Starter","Developer","$89"],
    ["AI Application Starter","AI / Developer","$99"],
  ],

  services: [
    ["01","CUSTOM BUILD","Build a complete application around your requirements."],
    ["02","FIX EXISTING","Debug and repair an existing application."],
    ["03","UPGRADE","Add features, integrations and improvements."],
  ],

  reviews: [
    ["Client One","Startup Founder","★★★★★","The application went from idea to something we could actually use."],
    ["Client Two","Business Owner","★★★★★","The existing application was repaired without rebuilding everything."],
    ["Client Three","Creator","★★★★★","Practical development, clear communication and a useful result."],
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

  contact: {
    email: "hello@halfclutch.tech",
    github: "github.com/halfclutch",
    linkedin: "linkedin.com/in/shavandeb",
  },
};

/*
  60 DIFFERENT STRUCTURES.
  Each entry changes information hierarchy, composition and visual metaphor.
*/
const STRUCTURES = [
  ["Workshop","warm","#f2eadc","#17130e","#c6532d"],
  ["Operating System","dark","#050805","#eaffd4","#71ff00"],
  ["Terminal","dark","#030603","#b8ff52","#71ff00"],
  ["Newspaper","light","#f4eee2","#17130e","#c62d2d"],
  ["Product Wall","light","#f4f4ef","#101010","#ff6a00"],
  ["Infinite Canvas","light","#eaf8ff","#102d3f","#0d9bd7"],
  ["Timeline","light","#f4f0e6","#161412","#b06b2a"],
  ["File Explorer","light","#edf3f8","#0b1720","#2679c9"],
  ["Factory","dark","#120e08","#f0e2c4","#e59b20"],
  ["Mission Control","dark","#100b20","#eeeaff","#a98bff"],
  ["Building","light","#e4e4df","#171717","#8d8d86"],
  ["Game World","dark","#070812","#c7ff00","#ff4dd8"],
  ["Map","light","#efe0bc","#123447","#008cb8"],
  ["Conversation","light","#f5fff5","#122016","#31b85b"],
  ["Manifesto","dark","#070707","#fff","#f4ff00"],
  ["Magazine","light","#f4eee2","#162a52","#315ddc"],
  ["Data Stream","dark","#041012","#8affff","#20d9ff"],
  ["Directory","light","#efe6d0","#181511","#d69b43"],
  ["Assembly Line","light","#f4df35","#111","#111"],
  ["Question Answer","light","#fff9f5","#2b1010","#e03c3c"],
  ["Portfolio Universe","dark","#050513","#d8d5ff","#7e75ff"],
  ["Software Machine","light","#e4e7e9","#111","#7a8791"],
  ["Marketplace","light","#f4f8ff","#0a2345","#2877e8"],
  ["Case Study","light","#eee3d1","#17130e","#6e5439"],
  ["Dashboard","dark","#090c09","#d8ff89","#8fff00"],
  ["Story Book","light","#f2e6c9","#24160e","#a94f2e"],
  ["Mission Brief","dark","#11150f","#c5d4b2","#9ab86b"],
  ["Art Gallery","light","#f8f8f5","#151515","#111"],
  ["Workshop Floor","light","#ece4d7","#17120e","#d76519"],
  ["Experimental","dark","#0a0a0a","#f4ff00","#f4ff00"],
  ["Train Station","light","#f4eee2","#092640","#168bd2"],
  ["Airport","light","#effbff","#072b36","#00a9c7"],
  ["Museum","light","#eee8df","#201616","#a63a38"],
  ["Library","light","#eadbc1","#20160f","#9a6035"],
  ["Record Store","dark","#160b12","#f7d8e8","#ff4f9a"],
  ["Blueprint","dark","#07386b","#d8edff","#e7f4ff"],
  ["Archive","light","#eee7b7","#18160c","#b99c19"],
  ["Stock Exchange","light","#eef7ef","#062015","#1e9d59"],
  ["Space Station","dark","#050513","#d8d5ff","#7e75ff"],
  ["Ocean Lab","dark","#03202d","#b8f5ff","#00b9d9"],
  ["Circuit Board","dark","#061006","#b8ff9e","#5cff38"],
  ["Construction Site","light","#ffe36e","#141414","#ff9d00"],
  ["Restaurant Menu","light","#f8eee2","#3b1713","#a82f28"],
  ["Product Catalog","light","#f6f8fb","#0c2040","#3a7ce0"],
  ["Legal File","light","#f0e8dc","#28100f","#bd3931"],
  ["Cinema","dark","#090807","#efe1ad","#e7b93f"],
  ["Music Player","dark","#100818","#ead8ff","#bd65ff"],
  ["Camera Contact Sheet","light","#f0f0ee","#222","#555"],
  ["Periodic Table","light","#edf7ff","#082c4a","#43a9e8"],
  ["Command Center","dark","#170706","#ffe1dc","#ff503f"],
  ["Web Browser","light","#eef1f4","#0c1723","#4b91d1"],
  ["Mobile UI","light","#f4edff","#21143a","#a35cff"],
  ["Kanban Wall","light","#f1f4e8","#15251b","#5b9d6b"],
  ["Conveyor Belt","light","#f3e1cf","#26150c","#e56a21"],
  ["Digital Garden","light","#edf4df","#17351f","#65ad4a"],
  ["Metro Map","light","#f4f7f8","#15283c","#e84b43"],
  ["Pink Magazine","light","#ffeef5","#43182d","#ed5795"],
  ["Portfolio Table","light","#e9d2b7","#2a1b12","#d87939"],
  ["Interactive Puzzle","light","#fff1a8","#102a51","#ffcb27"],
  ["Final Experimental","dark","#080808","#f4ff00","#f4ff00"],
];

function Projects({mode=""}) {
  return (
    <div className={`projects ${mode}`}>
      {DATA.projects.map(([n,name,cat,stack]) => (
        <article key={name}>
          <span>{n}</span>
          <div><b>{name}</b><small>{cat}</small><em>{stack}</em></div>
        </article>
      ))}
    </div>
  );
}

function Store({mode=""}) {
  return (
    <div className={`store ${mode}`}>
      {DATA.products.map(([name,cat,price]) => (
        <article key={name}>
          <div><b>{name}</b><small>{cat}</small></div>
          <strong>{price}</strong>
        </article>
      ))}
    </div>
  );
}

function Stack() {
  return <div className="stack">{DATA.stack.map(x=><span key={x}>{x}</span>)}</div>;
}

function Reviews() {
  return (
    <div className="reviews">
      {DATA.reviews.map(([name,role,rating,text])=>(
        <article key={name}>
          <strong>{rating}</strong>
          <p>“{text}”</p>
          <b>{name}</b>
          <small>{role}</small>
        </article>
      ))}
    </div>
  );
}

function Git({mode=""}) {
  const g=DATA.git;
  const values=[
    ["REPOSITORIES",g.repositories],
    ["COMMITS",g.commits],
    ["CONTRIBUTIONS",g.contributions],
    ["PULL REQUESTS",g.pullRequests],
    ["ISSUES",g.issues],
    ["STARS",g.stars],
    ["ACTIVE",g.activeProjects],
    ["STREAK",`${g.streak}D`],
  ];

  if(mode==="terminal") {
    return <div className="git-terminal">
      <p>$ git telemetry --simulated</p>
      {values.map(([a,b])=><p key={a}>{a.toLowerCase().padEnd(18,".")} {b}</p>)}
    </div>
  }

  return <div className={`git ${mode}`}>
    {values.map(([a,b])=><div key={a}><small>{a}</small><b>{b}</b></div>)}
  </div>;
}

function Services() {
  return <div className="services">
    {DATA.services.map(([n,title,text])=>(
      <article key={n}>
        <span>{n}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
    ))}
  </div>;
}

function Contact() {
  return <section className="contact">
    <small>CONTACT / START A PROJECT</small>
    <h2>HAVE A SOFTWARE PROBLEM?</h2>
    <p>Need something custom, something ready, or something repaired?</p>
    <a href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a>
    <div className="links">{DATA.contact.github} · {DATA.contact.linkedin}</div>
  </section>;
}

function Next({next,label="NEXT EXPERIENCE →"}) {
  return <button className="next" onClick={next}>{label}</button>;
}

function Layout({id,next}) {
  const [name,theme,bg,fg,accent]=STRUCTURES[id];

  /*
    These 60 cases intentionally reorder the same business data.
    The CSS also changes the visual metaphor.
  */
  const common = {
    Projects:<Projects/>,
    Store:<Store/>,
    Stack:<Stack/>,
    Reviews:<Reviews/>,
    Git:<Git/>,
    Services:<Services/>,
    Contact:<Contact/>,
  };

  switch(id+1) {
    case 1: return <div className="layout workshop"><Hero title="SOFTWARE WORKSHOP" sub="RAW IDEA → SOFTWARE"/><Split title="WORKBENCH"><Projects/></Split><Split title="WAREHOUSE"><Store/></Split><Split title="TOOLS"><Stack/></Split><Band title="QUALITY CONTROL"><Reviews/></Band><Band title="MACHINE TELEMETRY"><Git mode="bars"/></Band><Band title="AVAILABLE OPERATIONS"><Services/></Band><Contact/><Next next={next}/></div>;

    case 2: return <div className="layout os"><Header/><Window title="ABOUT.EXE"><Hero title="DEVELOPER + SOFTWARE STUDIO" sub={DATA.developer.name}/></Window><Window title="PROJECTS/"><Projects mode="compact"/></Window><Window title="STORE/"><Store mode="compact"/></Window><Window title="STACK/"><Stack/></Window><Window title="REVIEWS/"><Reviews/></Window><Window title="GIT_TELEMETRY/"><Git/></Window><Window title="SERVICE_MANAGER/"><Services/></Window><Contact/><Next next={next}/></div>;

    case 3: return <div className="layout terminal"><p>$ whoami</p><h1>{DATA.developer.name}</h1><p>$ cat mission.txt</p><h2>BUILD SOFTWARE PEOPLE CAN USE.</h2><TerminalBlock cmd="ls projects"><Projects/></TerminalBlock><TerminalBlock cmd="ls store"><Store/></TerminalBlock><TerminalBlock cmd="git telemetry"><Git mode="terminal"/></TerminalBlock><TerminalBlock cmd="cat reviews"><Reviews/></TerminalBlock><TerminalBlock cmd="./services"><Services/></TerminalBlock><Contact/><Next next={next} label="$ next-experience"/></div>;

    case 4: return <div className="layout newspaper"><Header title="THE HALFCLUTCH TIMES"/><Hero title="THE SOFTWARE EDITION" sub="ONE DEVELOPER. THREE WAYS TO BUILD."/><Split title="MAIN STORY"><Projects/></Split><Split title="SOFTWARE FOR SALE"><Store/></Split><Band title="TOOLS OF THE TRADE"><Stack/></Band><Band title="READER NOTES"><Reviews/></Band><Band title="TECH DESK"><Git/></Band><Services/><Contact/><Next next={next} label="TURN THE PAGE →"/></div>;

    case 5: return <div className="layout product-wall"><Hero title="SOFTWARE IS THE PRODUCT." sub="Buy ready-made software or commission something new."/><Store/><Band title="BUILT SYSTEMS"><Projects/></Band><Band title="ENGINEERING STACK"><Stack/></Band><Band title="CLIENT SIGNAL"><Reviews/></Band><Band title="MAKER TELEMETRY"><Git mode="bars"/></Band><Services/><Contact/><Next next={next}/></div>;

    case 6: return <div className="layout canvas"><Floating x="one"><Hero title="I BUILD SOFTWARE." sub={DATA.developer.name}/></Floating><Floating x="two"><Projects/></Floating><Floating x="three"><Store/></Floating><Floating x="four"><Stack/></Floating><Floating x="five"><Reviews/></Floating><Floating x="six"><Git/></Floating><Floating x="seven"><Services/></Floating><Contact/><Next next={next} label="MOVE TO NEXT CANVAS →"/></div>;

    case 7: return <div className="layout timeline"><Hero title="FROM CODE TO COMPANY." sub="A developer journey"/><TimelineStep n="01" title="LEARN"><Stack/></TimelineStep><TimelineStep n="02" title="BUILD"><Projects/></TimelineStep><TimelineStep n="03" title="PRODUCTIZE"><Store/></TimelineStep><TimelineStep n="04" title="SHIP"><Git mode="bars"/></TimelineStep><TimelineStep n="05" title="CLIENTS"><Reviews/></TimelineStep><TimelineStep n="06" title="WORK WITH ME"><Services/></TimelineStep><Contact/><Next next={next}/></div>;

    case 8: return <div className="layout explorer"><aside><Header/><p className="tree">/halfclutch<br/>├── projects/<br/>├── products/<br/>├── stack/<br/>├── reviews/<br/>├── git/<br/>└── services/</p></aside><main><Hero title="SOFTWARE WORKSHOP" sub="/halfclutch"/><Band title="/projects"><Projects/></Band><Band title="/products"><Store/></Band><Band title="/stack"><Stack/></Band><Band title="/reviews"><Reviews/></Band><Band title="/git"><Git/></Band><Band title="/services"><Services/></Band><Contact/><Next next={next}/></main></div>;

    case 9: return <div className="layout factory"><Hero title="RAW IDEA → SOFTWARE" sub="HALFCLUTCH FACTORY"/><Triptych a={["STATION 01","PROJECTS",<Projects/>]} b={["STATION 02","STORE",<Store/>]} c={["STATION 03","TOOLS",<Stack/>]}/><Band title="QUALITY CONTROL"><Reviews/></Band><Band title="MACHINE TELEMETRY"><Git mode="bars"/></Band><Band title="SERVICE LINE"><Services/></Band><Contact/><Next next={next}/></div>;

    case 10: return <div className="layout control"><Header/><section className="control-core"><div className="radar">HC</div><Hero title="CENTRAL SOFTWARE UNIT" sub={DATA.developer.role}/></section><Triptych a={["PROJECT LOAD","",<Projects/>]} b={["PRODUCT INVENTORY","",<Store/>]} c={["TECH LOADOUT","",<Stack/>]}/><Band title="FEEDBACK CHANNEL"><Reviews/></Band><Band title="SYSTEM TELEMETRY"><Git/></Band><Services/><Contact/><Next next={next}/></div>;

    case 11: return <div className="layout building"><Hero title="HALFCLUTCH SOFTWARE BUILDING" sub="Enter the building."/><Floor n="01" title="PROJECT FLOOR"><Projects/></Floor><Floor n="02" title="STORE FLOOR"><Store/></Floor><Floor n="03" title="TECH LAB"><Stack/></Floor><Floor n="04" title="CLIENT LOUNGE"><Reviews/></Floor><Floor n="05" title="SERVICE DESK"><Services/></Floor><Floor n="06" title="GIT CONTROL"><Git/></Floor><Contact/><Next next={next}/></div>;

    case 12: return <div className="layout game"><Hero title="ENTER THE WORKSHOP" sub="LEVEL 01 / CHOOSE YOUR MISSION"/><Triptych a={["ZONE 01","BUILD",<Projects/>]} b={["ZONE 02","SHOP",<Store/>]} c={["ZONE 03","LOADOUT",<Stack/>]}/><Triptych a={["ZONE 04","REVIEWS",<Reviews/>]} b={["ZONE 05","GIT",<Git/>]} c={["ZONE 06","QUEST",<Services/>]}/><Contact/><Next next={next}/></div>;

    case 13: return <div className="layout map"><Hero title="FIND YOUR SOFTWARE PATH." sub="Projects · Store · Stack · Services"/><Orbit title="PROJECT ORBIT"><Projects mode="compact"/></Orbit><Orbit title="PRODUCT ORBIT"><Store mode="compact"/></Orbit><Orbit title="TECH ORBIT"><Stack/></Orbit><Band title="CLIENT SIGNALS"><Reviews/></Band><Band title="GIT SIGNAL"><Git/></Band><Services/><Contact/><Next next={next}/></div>;

    case 14: return <div className="layout conversation"><Header/><Chat q="Who are you?" a={`${DATA.developer.name}, the developer behind HalfClutch.`}/><Chat q="What do you build?" a="Web applications, business software, dashboards, tools and custom systems."/><Chat q="Can I buy something ready?" a={<Store/>}/><Chat q="Can you fix my application?" a={<Services/>}/><Chat q="What have you built?" a={<Projects/>}/><Chat q="What do you use?" a={<Stack/>}/><Chat q="How active are you?" a={<Git/>}/><Chat q="What do clients say?" a={<Reviews/>}/><Contact/><Next next={next}/></div>;

    case 15: return <div className="layout manifesto"><Hero title="I DON'T JUST MAKE WEBSITES." sub="I make software."/><Statement text="Software people can buy."/><Statement text="Software people can customize."/><Statement text="Software people can repair."/><Band title="THINGS I BUILT"><Projects/></Band><Band title="THINGS YOU CAN BUY"><Store/></Band><Band title="TOOLS"><Stack/></Band><Band title="CLIENTS"><Reviews/></Band><Band title="OPEN DEVELOPMENT SIGNAL"><Git mode="bars"/></Band><Services/><Contact/><Next next={next}/></div>;

    case 16: return <div className="layout magazine"><Header title="HALFCLUTCH MAGAZINE"/><Hero title="THE INDEPENDENT DEVELOPER." sub="Software · Code · Products"/><Split title="WHAT I'VE BUILT"><Projects/></Split><Split title="WHAT YOU CAN BUY"><Store/></Split><Band title="THE TOOLBOX"><Stack/></Band><Band title="THE READERS SPEAK"><Reviews/></Band><Band title="DEVELOPER STATS"><Git/></Band><Band title="COMMISSION"><Services/></Band><Contact/><Next next={next}/></div>;

    case 17: return <div className="layout stream"><Hero title="SOFTWARE STREAM." sub="STREAM_ID: HALFCLUTCH"/><Stream label="IDENTITY">{DATA.developer.name} · {DATA.developer.role}</Stream><Stream label="PROJECTS">{DATA.projects.map(x=>x[1]).join(" / ")}</Stream><Stream label="PRODUCTS">{DATA.products.map(x=>x[0]).join(" / ")}</Stream><Stream label="STACK">{DATA.stack.join(" · ")}</Stream><Stream label="REVIEWS"><Reviews/></Stream><Stream label="GIT TELEMETRY"><Git mode="terminal"/></Stream><Stream label="OPERATIONS"><Services/></Stream><Contact/><Next next={next}/></div>;

    case 18: return <div className="layout directory"><Header title="HALFCLUTCH DIRECTORY"/><section className="directory-index"><b>H</b><div><h2>HALFCLUTCH</h2><p>Independent developer and software workshop.</p></div></section><Band title="PROJECT INDEX"><Projects/></Band><Band title="SOFTWARE INDEX"><Store/></Band><Band title="TECH INDEX"><Stack/></Band><Band title="CLIENT INDEX"><Reviews/></Band><Band title="ACTIVITY INDEX"><Git/></Band><Band title="SERVICE INDEX"><Services/></Band><Contact/><Next next={next}/></div>;

    case 19: return <div className="layout assembly"><Hero title="YOUR IDEA → SOFTWARE." sub="Raw input"/><Process/><Band title="PREVIOUS OUTPUT"><Projects/></Band><Band title="READY OUTPUT"><Store/></Band><Band title="TOOLS"><Stack/></Band><Band title="QUALITY FEEDBACK"><Reviews/></Band><Band title="FACTORY TELEMETRY"><Git mode="bars"/></Band><Services/><Contact/><Next next={next}/></div>;

    case 20: return <div className="layout qa"><Hero title="HAVE A SOFTWARE PROBLEM?" sub="Choose the answer that describes you."/><Question title="I NEED AN APPLICATION."><Services/></Question><Question title="I NEED SOMETHING READY."><Store/></Question><Question title="I ALREADY HAVE AN APPLICATION."><Services/></Question><Question title="SHOW ME YOUR WORK."><Projects/></Question><Question title="WHAT DO YOU USE?"><Stack/></Question><Question title="HOW ACTIVE ARE YOU?"><Git/></Question><Question title="WHAT DO CLIENTS SAY?"><Reviews/></Question><Contact/><Next next={next}/></div>;

    case 21: return <div className="layout universe"><Hero title="HALFCLUTCH UNIVERSE" sub="Projects orbit products. Technology connects everything."/><Triptych a={["PROJECT PLANETS","",<Projects/>]} b={["PRODUCT PLANETS","",<Store/>]} c={["TECH ORBIT","",<Stack/>]}/><Triptych a={["CLIENT SIGNAL","",<Reviews/>]} b={["GIT SIGNAL","",<Git/>]} c={["BUILD STATION","",<Services/>]}/><Contact/><Next next={next}/></div>;

    case 22: return <div className="layout machine"><Hero title="SOFTWARE ENGINE" sub="Input: idea / problem / business"/><section className="machine-core"><div>INPUT</div><b>HC</b><div>OUTPUT</div></section><Band title="PREVIOUS OUTPUT"><Projects/></Band><Band title="READY OUTPUT"><Store/></Band><Band title="ENGINEERING MATERIALS"><Stack/></Band><Band title="FIELD TESTS"><Reviews/></Band><Band title="ENGINE TELEMETRY"><Git mode="bars"/></Band><Services/><Contact/><Next next={next}/></div>;

    case 23: return <div className="layout marketplace"><aside><Header/><p>SOFTWARE MARKET<br/>Business<br/>Education<br/>Developer<br/>AI<br/>Custom</p></aside><main><Hero title="FIND YOUR SOFTWARE." sub="Ready-made products by HalfClutch"/><Store/><Band title="SELLER / DEVELOPER"><Projects/></Band><Band title="BUILT WITH"><Stack/></Band><Band title="BUYER NOTES"><Reviews/></Band><Band title="MAKER ACTIVITY"><Git/></Band><Band title="CAN'T FIND IT?"><Services/></Band><Contact/><Next next={next}/></main></div>;

    case 24: return <div className="layout case"><Hero title="SOFTWARE THAT WORKS." sub="Selected case studies"/>{DATA.projects.map(p=><section className="case-item" key={p[1]}><span>{p[0]}</span><div><small>{p[2]}</small><h2>{p[1]}</h2><p>{p[3]}</p></div><b>CASE</b></section>)}<Band title="READY SYSTEMS"><Store/></Band><Band title="ENGINEERING STACK"><Stack/></Band><Band title="CLIENT OUTCOMES"><Reviews/></Band><Band title="BUILD ACTIVITY"><Git mode="bars"/></Band><Services/><Contact/><Next next={next}/></div>;

    case 25: return <div className="layout dashboard"><aside><Header/><p>Overview<br/>Projects<br/>Products<br/>Services<br/>Stack<br/>Git</p></aside><main><Hero title="SOFTWARE CONTROL." sub="Dashboard / Overview"/><div className="metrics">{[["PROJECTS",4],["PRODUCTS",5],["SERVICES",3],["STACK",14],["REPOS",27],["COMMITS",864]].map(x=><div key={x[0]}><small>{x[0]}</small><b>{x[1]}</b></div>)}</div><Band title="PROJECT ACTIVITY"><Projects/></Band><Band title="SOFTWARE INVENTORY"><Store/></Band><Band title="TECH STACK"><Stack/></Band><Band title="CLIENT FEEDBACK"><Reviews/></Band><Band title="GIT TELEMETRY"><Git mode="bars"/></Band><Band title="AVAILABLE OPERATIONS"><Services/></Band><Contact/><Next next={next}/></main></div>;

    case 26: return <div className="layout story"><Hero title="ONCE UPON A TIME, THERE WAS A DEVELOPER." sub="A software story"/><StoryChapter n="I" title="HE LEARNED TO BUILD."><Stack/></StoryChapter><StoryChapter n="II" title="THEN HE BUILT THINGS."><Projects/></StoryChapter><StoryChapter n="III" title="THEN PEOPLE COULD BUY THEM."><Store/></StoryChapter><StoryChapter n="IV" title="THEN PEOPLE ASKED HIM TO BUILD THEIRS."><Services/></StoryChapter><StoryChapter n="V" title="THE WORK KEPT MOVING."><Git/></StoryChapter><StoryChapter n="VI" title="CLIENTS LEFT NOTES."><Reviews/></StoryChapter><Contact/><Next next={next}/></div>;

    case 27: return <div className="layout mission"><Hero title="MISSION: SOFTWARE." sub="Turn an idea, problem or business into working software."/><Triptych a={["MISSION A","BUILD",<Services/>]} b={["MISSION B","REPAIR",<Services/>]} c={["MISSION C","BUY",<Store/>]}/><Band title="PREVIOUS MISSIONS"><Projects/></Band><Band title="MISSION EQUIPMENT"><Stack/></Band><Band title="MISSION FEEDBACK"><Reviews/></Band><Band title="MISSION TELEMETRY"><Git/></Band><Contact/><Next next={next}/></div>;

    case 28: return <div className="layout gallery"><Hero title="HALFCLUTCH" sub="A collection of software, experiments and systems"/>{DATA.projects.map(p=><section className="gallery-piece" key={p[1]}><div className="art">{p[0]}</div><div><small>{p[2]}</small><h2>{p[1]}</h2><p>{p[3]}</p></div></section>)}<Band title="SOFTWARE AVAILABLE NOW"><Store/></Band><Band title="TOOLS"><Stack/></Band><Band title="VISITOR NOTES"><Reviews/></Band><Band title="ARCHIVE TELEMETRY"><Git mode="bars"/></Band><Band title="COMMISSION A NEW PIECE"><Services/></Band><Contact/><Next next={next}/></div>;

    case 29: return <div className="layout floor"><Hero title="WALK THROUGH THE FLOOR." sub="HalfClutch Software Workshop"/><Floor n="BUILD AREA" title="CUSTOM SOFTWARE"><Services/></Floor><Floor n="REPAIR AREA" title="BROKEN SOFTWARE?"><Git/></Floor><Floor n="STORE AREA" title="READY SOFTWARE"><Store/></Floor><Floor n="ARCHIVE" title="THINGS BUILT"><Projects/></Floor><Floor n="TOOL ROOM" title="STACK"><Stack/></Floor><Floor n="CLIENT LOUNGE" title="REVIEWS"><Reviews/></Floor><Contact/><Next next={next}/></div>;

    case 30: return <div className="layout experimental"><Hero title="THIS IS NOT A NORMAL PORTFOLIO." sub="HALFCLUTCH"/><Split title="THINGS THAT EXIST"><Projects/></Split><Split title="THINGS YOU CAN BUY"><Store/></Split><Split title="THINGS I USE"><Stack/></Split><Split title="THINGS CLIENTS SAY"><Reviews/></Split><Split title="THINGS I SHIP"><Git/></Split><Split title="THINGS I CAN BUILD"><Services/></Split><Contact/><Next next={next}/></div>;

    case 31: return <div className="layout station"><Hero title="SOFTWARE STATION." sub="Platform 01 / HalfClutch"/><Band title="DEPARTURES / PROJECTS"><Projects/></Band><Band title="DEPARTURES / PRODUCTS"><Store/></Band><Band title="NETWORK MAP / STACK"><Stack/></Band><Band title="PASSENGER NOTES"><Reviews/></Band><Band title="ARRIVALS / GIT"><Git/></Band><Band title="TICKET OFFICE"><Services/></Band><Contact/><Next next={next}/></div>;

    case 32: return <div className="layout airport"><Hero title="YOUR SOFTWARE IS BOARDING." sub="HC-2026 / Developer Airport"/><Triptych a={["PROJECTS","",<Projects/>]} b={["STORE","",<Store/>]} c={["STACK","",<Stack/>]}/><Band title="LOUNGE REVIEWS"><Reviews/></Band><Band title="FLIGHT TELEMETRY"><Git mode="bars"/></Band><Band title="BOOK A FLIGHT"><Services/></Band><Contact/><Next next={next}/></div>;

    case 33: return <div className="layout museum"><Hero title="SOFTWARE ARCHIVE." sub="The HalfClutch Museum"/><Floor n="HALL I" title="WORK"><Projects/></Floor><Floor n="HALL II" title="PRODUCTS"><Store/></Floor><Floor n="HALL III" title="TECHNOLOGY"><Stack/></Floor><Floor n="HALL IV" title="VISITOR NOTES"><Reviews/></Floor><Floor n="HALL V" title="ACTIVITY"><Git/></Floor><Floor n="HALL VI" title="COMMISSION DESK"><Services/></Floor><Contact/><Next next={next}/></div>;

    case 34: return <div className="layout library"><aside><Header/><p>CATALOGUE<br/>H / C / 2026</p></aside><main><Hero title="THE SOFTWARE LIBRARY" sub="Open a volume."/><Band title="BOOKS / PROJECTS"><Projects/></Band><Band title="BOOKS / PRODUCTS"><Store/></Band><Band title="REFERENCE / STACK"><Stack/></Band><Band title="READER REVIEWS"><Reviews/></Band><Band title="LIBRARY ACTIVITY"><Git mode="bars"/></Band><Band title="RESEARCH SERVICES"><Services/></Band><Contact/><Next next={next}/></main></div>;

    case 35: return <div className="layout record"><Hero title="SOFTWARE SESSIONS." sub="HalfClutch Records"/><Band title="TRACKS / PROJECTS"><Projects/></Band><Band title="RELEASES / PRODUCTS"><Store/></Band><Band title="INSTRUMENTS / STACK"><Stack/></Band><Band title="LISTENER REVIEWS"><Reviews/></Band><Band title="STREAM TELEMETRY"><Git mode="bars"/></Band><Band title="BOOKING / SERVICES"><Services/></Band><Contact/><Next next={next}/></div>;

    case 36: return <div className="layout blueprint"><Hero title="SOFTWARE ARCHITECTURE." sub="Blueprint / HC-001"/><Process/><Band title="ENGINEERING MATERIALS"><Stack/></Band><Band title="FIELD TESTS"><Reviews/></Band><Band title="BUILD TELEMETRY"><Git mode="bars"/></Band><Band title="ARCHITECT SERVICES"><Services/></Band><Band title="PREVIOUS BLUEPRINTS"><Projects/></Band><Band title="READY COMPONENTS"><Store/></Band><Contact/><Next next={next}/></div>;

    case 37: return <div className="layout archive"><Header title="ARCHIVE 1968—2026"/><Hero title="THE SOFTWARE MAKER." sub="Featured file / Box 060"/><Triptych a={["PROJECT FILES","",<Projects/>]} b={["PRODUCT BOX","",<Store/>]} c={["TOOLS BOX","",<Stack/>]}/><Band title="WITNESS STATEMENTS"><Reviews/></Band><Band title="DIGITAL RECORD"><Git/></Band><Band title="SERVICE BOX"><Services/></Band><Contact/><Next next={next}/></div>;

    case 38: return <div className="layout stock"><Hero title="SOFTWARE EXCHANGE." sub="MARKET OPEN"/><div className="ticker">{DATA.products.map(x=><span key={x[0]}>{x[0]} {x[2]}</span>)}</div><Triptych a={["PROJECT PERFORMANCE","",<Projects/>]} b={["PRODUCT INVENTORY","",<Store/>]} c={["STACK INDEX","",<Stack/>]}/><Triptych a={["CLIENT SENTIMENT","",<Reviews/>]} b={["DEVELOPER ACTIVITY","",<Git mode="bars"/>]} c={["TRADE DESK","",<Services/>]}/><Contact/><Next next={next}/></div>;

    case 39: return <div className="layout space"><Hero title="MISSION SOFTWARE." sub="Space Station HalfClutch"/><Triptych a={["DOCK 01","PROJECTS",<Projects/>]} b={["DOCK 02","STORE",<Store/>]} c={["DOCK 03","TECH",<Stack/>]}/><Band title="CLIENT SIGNALS"><Reviews/></Band><Band title="SHIP TELEMETRY"><Git/></Band><Band title="MISSION CONTROL"><Services/></Band><Contact/><Next next={next}/></div>;

    case 40: return <div className="layout ocean"><Hero title="DIVING INTO SOFTWARE." sub="Depth 00m"/><Floor n="DEPTH 100M" title="PROJECTS"><Projects/></Floor><Floor n="DEPTH 300M" title="STORE"><Store/></Floor><Floor n="DEPTH 500M" title="STACK"><Stack/></Floor><Floor n="DEPTH 700M" title="CLIENT REVIEWS"><Reviews/></Floor><Floor n="DEPTH 900M" title="GIT TELEMETRY"><Git mode="bars"/></Floor><Floor n="DEPTH 1000M" title="SERVICE LAB"><Services/></Floor><Contact/><Next next={next}/></div>;

    case 41: return <div className="layout circuit"><Hero title="HALFCLUTCH ENGINEERING." sub="Circuit / 01"/><Triptych a={["PROJECTS","",<Projects/>]} b={["PRODUCTS","",<Store/>]} c={["STACK","",<Stack/>]}/><Triptych a={["REVIEWS","",<Reviews/>]} b={["GIT","",<Git/>]} c={["SERVICES","",<Services/>]}/><Contact/><Next next={next}/></div>;

    case 42: return <div className="layout construction"><Hero title="SOFTWARE UNDER CONSTRUCTION." sub="Caution / active development"/><Triptych a={["FOUNDATION","",<Projects/>]} b={["MATERIALS","",<Stack/>]} c={["READY BUILDING","",<Store/>]}/><Band title="INSPECTION REPORT"><Reviews/></Band><Band title="BUILD PROGRESS"><Git mode="bars"/></Band><Band title="HIRE THE CREW"><Services/></Band><Contact/><Next next={next}/></div>;

    case 43: return <div className="layout restaurant"><Hero title="THE SOFTWARE MENU." sub="Choose what you need."/><Band title="CHEF'S SPECIAL / PROJECTS"><Projects/></Band><Band title="READY TO SERVE / PRODUCTS"><Store/></Band><Band title="INGREDIENTS / STACK"><Stack/></Band><Band title="DINER REVIEWS"><Reviews/></Band><Band title="KITCHEN TELEMETRY"><Git/></Band><Band title="CUSTOM ORDER"><Services/></Band><Contact/><Next next={next}/></div>;

    case 44: return <div className="layout catalog"><Hero title="SOFTWARE CATALOG." sub="Catalogue / 2026"/><Band title="PRODUCT RANGE"><Store/></Band><Band title="CASE RANGE"><Projects/></Band><Band title="TECHNICAL SPECIFICATION"><Stack/></Band><Band title="FIELD REVIEWS"><Reviews/></Band><Band title="MAKER SPECIFICATION"><Git mode="bars"/></Band><Band title="ORDER CUSTOM"><Services/></Band><Contact/><Next next={next}/></div>;

    case 45: return <div className="layout legal"><Hero title="SOFTWARE MATTERS." sub="HalfClutch / Case File"/><Band title="FACTS / PROJECTS"><Projects/></Band><Band title="EXHIBITS / PRODUCTS"><Store/></Band><Band title="TECHNICAL EVIDENCE"><Stack/></Band><Band title="WITNESS STATEMENTS"><Reviews/></Band><Band title="DIGITAL RECORD"><Git/></Band><Band title="ENGAGEMENT TERMS"><Services/></Band><Contact/><Next next={next}/></div>;

    case 46: return <div className="layout cinema"><Hero title="HALFCLUTCH PICTURES." sub="Now showing"/><Band title="FEATURED WORK"><Projects/></Band><Band title="COMING SOON / STORE"><Store/></Band><Band title="PRODUCTION TOOLS"><Stack/></Band><Band title="AUDIENCE REVIEWS"><Reviews/></Band><Band title="PRODUCTION TELEMETRY"><Git/></Band><Band title="HIRE THE PRODUCTION TEAM"><Services/></Band><Contact/><Next next={next}/></div>;

    case 47: return <div className="layout music"><Hero title="BUILD SOFTWARE." sub="Now playing / HalfClutch"/><Band title="TRACKLIST / PROJECTS"><Projects/></Band><Band title="RELEASES / PRODUCTS"><Store/></Band><Band title="INSTRUMENTS / STACK"><Stack/></Band><Band title="LISTENER REVIEWS"><Reviews/></Band><Band title="STREAM TELEMETRY"><Git mode="bars"/></Band><Band title="BOOKING / SERVICES"><Services/></Band><Contact/><Next next={next}/></div>;

    case 48: return <div className="layout camera"><Hero title="SOFTWARE IN FRAME." sub="Contact sheet / 2026"/><section className="photo-grid">{DATA.projects.map(x=><article key={x[1]}><div className="photo">{x[0]}</div><h2>{x[1]}</h2><small>{x[2]}</small></article>)}</section><Band title="PRODUCT CONTACT SHEET"><Store/></Band><Band title="TECH STICKERS"><Stack/></Band><Band title="CLIENT PORTRAITS"><Reviews/></Band><Band title="ACTIVITY EXPOSURE"><Git/></Band><Band title="SHOOT / BUILD / REPAIR"><Services/></Band><Contact/><Next next={next}/></div>;

    case 49: return <div className="layout periodic"><Hero title="ELEMENTS OF SOFTWARE." sub="Periodic table / HalfClutch"/><section className="elements">{DATA.stack.map((x,i)=><div key={x}><small>{String(i+1).padStart(2,"0")}</small><b>{x}</b></div>)}</section><Triptych a={["WORK","",<Projects/>]} b={["PRODUCTS","",<Store/>]} c={["CLIENTS","",<Reviews/>]}/><Triptych a={["TELEMETRY","",<Git/>]} b={["SERVICES","",<Services/>]} c={["IDENTITY","",<Hero title="SHAVANDEB KAITI" sub={DATA.developer.role}/>]}/><Contact/><Next next={next}/></div>;

    case 50: return <div className="layout command"><Hero title="SOFTWARE COMMAND." sub="All systems operational"/><section className="command-core"><div className="radar">HC</div><div><h2>ACTIVE PROJECTS</h2><Projects/></div></section><Triptych a={["STORE","",<Store/>]} b={["STACK","",<Stack/>]} c={["REVIEWS","",<Reviews/>]}/><Band title="TELEMETRY"><Git mode="bars"/></Band><Band title="ORDERS"><Services/></Band><Contact/><Next next={next}/></div>;

    case 51: return <div className="layout browser"><div className="browser-bar">● ● ● <span>https://halfclutch.tech</span>⌕</div><Hero title="SOFTWARE YOU CAN USE." sub="Search / HalfClutch"/><Triptych a={["RESULT 01 / WORK","",<Projects/>]} b={["RESULT 02 / STORE","",<Store/>]} c={["RESULT 03 / STACK","",<Stack/>]}/><Triptych a={["RESULT 04 / REVIEWS","",<Reviews/>]} b={["RESULT 05 / GIT","",<Git/>]} c={["RESULT 06 / SERVICES","",<Services/>]}/><Contact/><Next next={next}/></div>;

    case 52: return <div className="layout mobile"><div className="phone"><div className="notch">HALFCLUTCH</div><Hero title="BUILD BETTER." sub="Portfolio / Store / Studio"/><Band title="PROJECTS"><Projects/></Band><Band title="STORE"><Store/></Band><Band title="STACK"><Stack/></Band><Band title="REVIEWS"><Reviews/></Band><Band title="GIT ACTIVITY"><Git/></Band><Band title="WORK WITH ME"><Services/></Band><Contact/></div><Next next={next} label="SWIPE NEXT →"/></div>;

    case 53: return <div className="layout kanban"><Hero title="SOFTWARE IN PROGRESS." sub="Kanban / HalfClutch"/><Triptych a={["BUILT","",<Projects/>]} b={["READY","",<Store/>]} c={["TOOLS","",<Stack/>]}/><Triptych a={["FEEDBACK","",<Reviews/>]} b={["TELEMETRY","",<Git/>]} c={["AVAILABLE","",<Services/>]}/><Contact/><Next next={next}/></div>;

    case 54: return <div className="layout conveyor"><Hero title="IDEA IN MOTION." sub="Conveyor / HalfClutch"/><Band title="CONVEYOR 01 / PROJECTS"><Projects/></Band><Band title="CONVEYOR 02 / PRODUCTS"><Store/></Band><Band title="CONVEYOR 03 / STACK"><Stack/></Band><Band title="CONVEYOR 04 / REVIEWS"><Reviews/></Band><Band title="CONVEYOR 05 / GIT"><Git mode="bars"/></Band><Band title="CONVEYOR 06 / SERVICES"><Services/></Band><Contact/><Next next={next}/></div>;

    case 55: return <div className="layout garden"><Hero title="GROWING SOFTWARE." sub="Ideas become systems. Systems become products."/><Triptych a={["PLANT 01","PROJECTS",<Projects/>]} b={["PLANT 02","PRODUCTS",<Store/>]} c={["PLANT 03","TOOLS",<Stack/>]}/><Triptych a={["PLANT 04","REVIEWS",<Reviews/>]} b={["PLANT 05","ACTIVITY",<Git/>]} c={["PLANT 06","CARE",<Services/>]}/><Contact/><Next next={next}/></div>;

    case 56: return <div className="layout metro"><Hero title="CHOOSE A ROUTE." sub="HalfClutch Metro"/><div className="metro-map"><i>PROJECTS</i><i>STORE</i><i>STACK</i><i>REVIEWS</i><i>GIT</i><i>SERVICES</i></div><Triptych a={["PROJECT STATION","",<Projects/>]} b={["STORE STATION","",<Store/>]} c={["TECH STATION","",<Stack/>]}/><Triptych a={["CLIENT STATION","",<Reviews/>]} b={["TELEMETRY STATION","",<Git/>]} c={["BUILD STATION","",<Services/>]}/><Contact/><Next next={next}/></div>;

    case 57: return <div className="layout pinkmag"><Hero title="BUILD · SELL · REPAIR." sub="HalfClutch Magazine"/><Split title="FEATURED WORK"><Projects/></Split><Split title="SHOP"><Store/></Split><Split title="THE TOOLBOX"><Stack/></Split><Split title="THE PEOPLE"><Reviews/></Split><Split title="THE DATA"><Git mode="bars"/></Split><Split title="THE OFFER"><Services/></Split><Contact/><Next next={next}/></div>;

    case 58: return <div className="layout table"><Hero title="SOFTWARE ON THE TABLE." sub="Portfolio / products / people / data"/><Triptych a={["PROJECT NOTES","",<Projects/>]} b={["PRODUCT CATALOG","",<Store/>]} c={["TECH STICKERS","",<Stack/>]}/><Triptych a={["CLIENT NOTES","",<Reviews/>]} b={["GIT RECEIPT","",<Git mode="terminal"/>]} c={["ORDER FORM","",<Services/>]}/><Contact/><Next next={next}/></div>;

    case 59: return <div className="layout puzzle"><Hero title="PUT THE PIECES TOGETHER." sub="Interactive puzzle / HalfClutch"/><Triptych a={["PROJECT PIECE","",<Projects/>]} b={["PRODUCT PIECE","",<Store/>]} c={["STACK PIECE","",<Stack/>]}/><Triptych a={["REVIEW PIECE","",<Reviews/>]} b={["TELEMETRY PIECE","",<Git/>]} c={["SERVICE PIECE","",<Services/>]}/><Contact/><Next next={next} label="SOLVE NEXT PUZZLE →"/></div>;

    case 60: return <div className="layout final"><Hero title="THIS IS SOFTWARE." sub="HALFCLUTCH.TECH / 60"/><section className="fragments"><div><Projects/></div><div><Store/></div><div><Stack/></div><div><Reviews/></div><div><Git/></div><div><Services/></div></section><Contact/><Next next={next} label="RESTART / 01"/></div>;
  }
}

/* ---------- small composition primitives ---------- */

function Header({title}) {
  return <header className="header"><b>HALFCLUTCH</b><span>{title || "HALFCLUTCH.TECH"}</span><small>2026</small></header>;
}

function Hero({title,sub}) {
  return <section className="hero"><small>{DATA.developer.domain}</small><h1>{title}</h1><p>{sub}</p></section>;
}

function Band({title,children}) {
  return <section className="band"><small>{title}</small>{children}</section>;
}

function Split({title,children}) {
  return <section className="split"><small>{title}</small>{children}</section>;
}

function Window({title,children}) {
  return <section className="window"><label>{title}</label>{children}</section>;
}

function Floating({x,children}) {
  return <section className={`floating ${x}`}>{children}</section>;
}

function TimelineStep({n,title,children}) {
  return <article className="timeline-step"><span>{n}</span><h2>{title}</h2>{children}</article>;
}

function Floor({n,title,children}) {
  return <section className="floor-step"><span>{n}</span><div><h2>{title}</h2>{children}</div></section>;
}

function Orbit({title,children}) {
  return <section className="orbit"><small>{title}</small>{children}</section>;
}

function Chat({q,a}) {
  return <section className="chat-block"><div className="bubble user">{q}</div><div className="bubble answer">{a}</div></section>;
}

function Statement({text}) {
  return <section className="statement">{text}</section>;
}

function Stream({label,children}) {
  return <article className="stream-item"><small>{label}</small><div>{children}</div></article>;
}

function Process() {
  return <section className="process">{["PLAN","BUILD","TEST","SHIP"].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</section>;
}

function Question({title,children}) {
  return <article className="question"><h2>“{title}”</h2>{children}</article>;
}

function StoryChapter({n,title,children}) {
  return <section className="story-chapter"><small>CHAPTER {n}</small><h2>{title}</h2>{children}</section>;
}

function Triptych({a,b,c}) {
  return <section className="triptych">
    {[a,b,c].map(([label,title,node])=><article key={label}><small>{label}</small>{title && <h2>{title}</h2>}{node}</article>)}
  </section>;
}

export default function Page() {
  const [index,setIndex]=useState(0);

  const next=()=>setIndex(v=>(v+1)%60);
  const prev=()=>setIndex(v=>(v-1+60)%60);
  const random=()=>setIndex(Math.floor(Math.random()*60));

  const [,theme,bg,fg,accent]=STRUCTURES[index];

  return (
    <main
      className={`hc-app theme-${theme} structure-${index+1}`}
      style={{
        "--bg":bg,
        "--fg":fg,
        "--accent":accent,
      }}
    >
      <style jsx global>{CSS}</style>

      <div className="controller">
        <button onClick={prev}>←</button>
        <b>{String(index+1).padStart(2,"0")} / 60</b>
        <button onClick={next}>→</button>
        <button onClick={random}>RANDOM</button>
        <small>{STRUCTURES[index][0]}</small>
      </div>

      <Layout id={index} next={next}/>
    </main>
  );
}

const CSS = `
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#080808}
button{cursor:pointer;font:inherit}
.hc-app{min-height:100vh;background:var(--bg);color:var(--fg);font-family:Arial,Helvetica,sans-serif;overflow-x:hidden}
.hc-app *::selection{background:var(--accent);color:var(--bg)}
.controller{position:fixed;z-index:99999;right:14px;top:14px;display:flex;align-items:center;gap:5px;padding:6px;background:color-mix(in srgb,var(--bg) 88%,transparent);border:1px solid color-mix(in srgb,var(--fg) 25%,transparent);backdrop-filter:blur(18px);font:10px monospace}
.controller button{border:1px solid color-mix(in srgb,var(--fg) 25%,transparent);background:transparent;color:var(--fg);padding:8px 10px}
.controller button:hover,.next:hover{background:var(--accent);color:var(--bg)}
.controller b{min-width:58px;text-align:center}
.controller small{opacity:.55;padding:0 7px}
.header{display:flex;justify-content:space-between;gap:20px;padding:22px 7vw;border-bottom:1px solid color-mix(in srgb,var(--fg) 20%,transparent);font:10px monospace}
.header b{font-size:16px;letter-spacing:-.08em}
.header b:after{content:"";display:inline-block;width:7px;height:7px;background:var(--accent);margin-left:3px}
.hero{min-height:90vh;padding:100px 7vw;display:flex;flex-direction:column;justify-content:center}
.hero small{color:var(--accent);font:10px monospace}
.hero h1{font-size:clamp(75px,14vw,210px);line-height:.68;letter-spacing:-.1em;margin:30px 0}
.hero p{font-size:20px;opacity:.6;max-width:650px}
.band,.split{padding:100px 7vw;border-top:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.band>small,.split>small{display:block;color:var(--accent);font:10px monospace;margin-bottom:30px}
.next{margin:70px 7vw;border:1px solid currentColor;background:transparent;color:inherit;padding:15px 20px;text-transform:uppercase;font-size:10px;letter-spacing:.1em}
.projects{display:flex;flex-direction:column}
.projects article{display:grid;grid-template-columns:60px 1fr;gap:20px;padding:22px 0;border-bottom:1px solid color-mix(in srgb,var(--fg) 18%,transparent)}
.projects article>span{color:var(--accent);font:11px monospace}
.projects b,.projects small,.projects em{display:block}
.projects small,.projects em{font-size:11px;opacity:.5;margin-top:5px}
.projects em{color:var(--accent);font-style:normal;opacity:.8}
.projects.compact article{padding:12px 0}
.store{display:flex;flex-direction:column}
.store article{display:flex;justify-content:space-between;gap:20px;padding:20px 0;border-bottom:1px solid color-mix(in srgb,var(--fg) 18%,transparent)}
.store b,.store small{display:block}
.store small{opacity:.5;font-size:10px;margin-top:5px}
.store strong{color:var(--accent);font-size:24px}
.stack{display:flex;flex-wrap:wrap;gap:8px}
.stack span{padding:10px 12px;border:1px solid color-mix(in srgb,var(--fg) 22%,transparent);font:10px monospace;transition:.25s}
.stack span:hover{background:var(--accent);color:var(--bg);transform:translateY(-4px)}
.reviews{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.reviews article{padding:25px;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.reviews strong{color:var(--accent)}
.reviews p{line-height:1.55}
.reviews b,.reviews small{display:block}
.reviews small{opacity:.5;margin-top:5px}
.services{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.services article{padding:28px;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent);min-height:240px}
.services span{color:var(--accent);font:11px monospace}
.services h3{font-size:24px}
.services p{opacity:.6;line-height:1.5}
.git{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.git>div{padding:20px;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.git small,.git b{display:block}
.git small{font:9px monospace;opacity:.5}
.git b{font-size:30px;color:var(--accent);margin-top:10px}
.git.bars{display:block}
.git.bars>div{border:0;padding:10px 0}
.git.bars>div:after{content:"";display:block;height:7px;margin-top:7px;background:linear-gradient(90deg,var(--accent) 0 70%,color-mix(in srgb,var(--fg) 10%,transparent) 70%)}
.git-terminal{font:12px monospace;line-height:1.9;color:var(--accent)}
.contact{margin-top:80px;padding:110px 7vw;background:var(--accent);color:var(--bg)}
.contact h2{font-size:clamp(60px,10vw,150px);line-height:.7;letter-spacing:-.08em;max-width:1000px}
.contact p{max-width:600px;line-height:1.5}
.contact a{color:inherit;font-weight:bold;text-decoration:none;border-bottom:1px solid}
.contact .links{margin-top:20px;font:11px monospace;opacity:.7}
.triptych{display:grid;grid-template-columns:repeat(3,1fr)}
.triptych>article{min-height:600px;padding:30px;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.triptych h2{font-size:55px;line-height:.75}
.workshop .hero h1{font-size:clamp(80px,16vw,240px)}
.workshop .hero{background:linear-gradient(90deg,var(--bg) 50%,color-mix(in srgb,var(--fg) 6%,var(--bg)) 50%)}
.os{padding:70px 3vw 30px}
.os .window{position:relative;min-height:400px;border:1px solid color-mix(in srgb,var(--fg) 25%,transparent);background:color-mix(in srgb,var(--bg) 92%,transparent);padding-bottom:25px}
.os .window label{display:block;background:var(--accent);color:var(--bg);padding:10px;font:10px monospace}
.os .window:nth-of-type(2){width:55%;margin:-250px 0 20px 8%}
.os .window:nth-of-type(3){width:50%;margin:20px 8% 20px auto}
.os .window:nth-of-type(4){width:45%;margin:20px 0 20px 18%}
.os .window:nth-of-type(5){width:55%;margin:20px auto 20px 5%}
.os .window:nth-of-type(6){width:45%;margin:20px 5% 20px auto}
.os .window:nth-of-type(7){width:55%;margin:20px auto}
.terminal{padding:100px 7vw;font-family:monospace}
.terminal>p{color:var(--accent)}
.terminal>h1{font-size:clamp(80px,15vw,200px);line-height:.7}
.terminal>h2{font-size:clamp(30px,5vw,70px)}
.terminal-block{padding:70px 0;border-top:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.terminal-block>p{color:var(--accent)}
.newspaper{max-width:1400px;margin:auto;padding:90px 40px;font-family:Georgia,serif}
.newspaper .hero h1{font-family:Georgia,serif}
.newspaper .split{display:grid;grid-template-columns:1fr 1fr;gap:50px}
.newspaper .split .store,.newspaper .split .projects{font-family:Arial,sans-serif}
.product-wall{background:var(--fg);color:var(--bg)}
.product-wall>.hero{min-height:100vh}
.product-wall>.store{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;padding:8px}
.product-wall>.store article{min-height:430px;padding:25px;background:var(--bg);color:var(--fg);display:flex;flex-direction:column;justify-content:space-between;border:0}
.product-wall>.store strong{font-size:40px}
.canvas{min-height:2300px;position:relative;background:radial-gradient(circle at center,color-mix(in srgb,var(--accent) 18%,var(--bg)),var(--bg) 45%)}
.canvas .floating{position:absolute;padding:25px;border:1px solid color-mix(in srgb,var(--fg) 25%,transparent);background:color-mix(in srgb,var(--bg) 75%,transparent);backdrop-filter:blur(15px);max-width:500px}
.canvas .one{top:160px;left:7%}.canvas .two{top:620px;left:42%}.canvas .three{top:300px;right:7%}.canvas .four{top:1050px;left:10%}.canvas .five{top:1200px;right:7%}.canvas .six{top:1550px;left:38%}.canvas .seven{top:1800px;right:10%}
.canvas .contact{position:absolute;top:2050px;left:0;right:0}
.timeline{max-width:1200px;margin:auto;padding-bottom:80px}
.timeline-step{padding:100px 0 100px 80px;border-left:2px solid var(--accent);border-bottom:1px solid color-mix(in srgb,var(--fg) 18%,transparent)}
.timeline-step>span{color:var(--accent);font:11px monospace}
.timeline-step h2{font-size:75px}
.explorer{display:grid;grid-template-columns:240px 1fr;min-height:100vh}
.explorer>aside{padding:30px;border-right:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.tree{margin-top:100px;color:var(--accent);line-height:2;font:11px monospace}
.explorer main{padding:0 40px}
.factory{background:repeating-linear-gradient(135deg,var(--bg),var(--bg) 25px,color-mix(in srgb,var(--fg) 4%,var(--bg)) 26px)}
.factory .triptych article{background:color-mix(in srgb,var(--bg) 88%,transparent)}
.control{background:radial-gradient(circle at 70% 20%,color-mix(in srgb,var(--accent) 18%,var(--bg)),var(--bg) 45%)}
.control-core{min-height:80vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding:70px 7vw}
.radar{width:400px;height:400px;max-width:80vw;border:1px solid var(--accent);border-radius:50%;display:grid;place-items:center;font-size:100px;color:var(--accent);box-shadow:0 0 100px color-mix(in srgb,var(--accent) 25%,transparent);margin:auto}
.building .floor-step{min-height:90vh;display:grid;grid-template-columns:180px 1fr;gap:50px;align-items:center;padding:80px 7vw;border-top:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.floor-step>span{color:var(--accent);font:11px monospace}
.floor-step h2{font-size:95px;line-height:.7}
.game{background:linear-gradient(180deg,var(--bg),color-mix(in srgb,var(--accent) 10%,var(--bg)))}
.map{min-height:1500px}
.map .orbit{min-height:500px;padding:40px;border:1px dashed color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;margin:30px auto;max-width:800px}
.map .orbit:nth-of-type(2){max-width:650px}
.map .orbit:nth-of-type(3){max-width:500px}
.conversation{max-width:900px;margin:auto;padding:80px 20px}
.chat-block{padding:30px 0}
.bubble{max-width:75%;padding:20px;margin:20px 0;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent);border-radius:20px}
.bubble.user{margin-left:auto;background:color-mix(in srgb,var(--accent) 12%,var(--bg))}
.bubble.answer{border-color:var(--accent)}
.manifesto .statement{min-height:80vh;padding:100px 8vw;display:flex;align-items:center;font-size:clamp(60px,9vw,130px);line-height:.8;border-top:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.manifesto .hero h1{font-size:clamp(90px,16vw,230px)}
.stream{font-family:monospace}
.stream-item{min-height:300px;padding:60px 7vw;border-bottom:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.stream-item>small{color:var(--accent)}
.stream-item>div{font-size:clamp(30px,5vw,70px);line-height:.9;margin-top:25px}
.directory{max-width:1200px;margin:auto}
.directory-index{min-height:70vh;display:grid;grid-template-columns:300px 1fr;align-items:center;padding:50px 7vw}
.directory-index>b{font-size:300px;color:var(--accent)}
.assembly .process{display:grid;grid-template-columns:repeat(4,1fr)}
.process>div{min-height:400px;padding:30px;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent);display:flex;flex-direction:column;justify-content:space-between}
.process span{color:var(--accent)}
.process b{font-size:70px}
.qa .question{padding:100px 7vw;border-top:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.qa .question h2{font-size:clamp(50px,8vw,110px);line-height:.8}
.universe{background:radial-gradient(circle,var(--accent),var(--bg) 35%)}
.machine .machine-core{min-height:70vh;display:grid;grid-template-columns:1fr 300px 1fr;align-items:center;gap:50px;padding:80px 7vw}
.machine-core>div{padding:50px;border-top:1px solid color-mix(in srgb,var(--fg) 20%,transparent);border-bottom:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.machine-core>b{width:300px;height:300px;border:10px double var(--accent);border-radius:50%;display:grid;place-items:center;color:var(--accent);font-size:80px}
.marketplace{display:grid;grid-template-columns:230px 1fr}
.marketplace>aside{padding:30px;border-right:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.marketplace main{padding:0 40px}
.case-item{min-height:80vh;display:grid;grid-template-columns:100px 1fr 250px;align-items:center;gap:40px;padding:70px 7vw;border-top:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.case-item>span{font-size:80px;color:var(--accent)}
.case-item h2{font-size:70px;line-height:.75}
.case-item>b{height:250px;border:1px solid var(--accent);display:grid;place-items:center;color:var(--accent)}
.dashboard{display:grid;grid-template-columns:240px 1fr}
.dashboard>aside{padding:30px;border-right:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.dashboard main{padding:0 40px}
.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:50px 0}
.metrics div{min-height:180px;padding:20px;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.metrics b{display:block;font-size:65px;color:var(--accent);margin-top:25px}
.story-chapter{min-height:90vh;padding:100px 8vw;display:flex;flex-direction:column;justify-content:center;border-top:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.story-chapter h2{font-size:95px;line-height:.7}
.mission{background:radial-gradient(circle at 50% 20%,color-mix(in srgb,var(--accent) 18%,var(--bg)),var(--bg) 45%)}
.gallery-piece{min-height:90vh;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;padding:80px 7vw;border-top:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.gallery-piece .art{height:65vh;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent);display:grid;place-items:center;font-size:180px;color:var(--accent)}
.gallery-piece h2{font-size:90px;line-height:.7}
.legal{font-family:Georgia,serif}
.cinema{background:radial-gradient(circle,var(--accent),var(--bg) 30%)}
.record{background:radial-gradient(circle at 80% 20%,var(--accent),var(--bg) 25%)}
.blueprint{background-image:linear-gradient(color-mix(in srgb,var(--fg) 10%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--fg) 10%,transparent) 1px,transparent 1px);background-size:40px 40px}
.stock .ticker{display:flex;gap:50px;overflow:hidden;white-space:nowrap;background:var(--accent);color:var(--bg);padding:15px;font:11px monospace}
.stock .ticker span{min-width:250px}
.space{background:radial-gradient(circle at 75% 20%,var(--accent),transparent 15%),var(--bg)}
.ocean{background:linear-gradient(180deg,var(--bg),color-mix(in srgb,var(--accent) 18%,var(--bg)))}
.circuit{background-image:radial-gradient(var(--accent) 1px,transparent 1px);background-size:30px 30px}
.construction .hero{background:repeating-linear-gradient(135deg,var(--accent),var(--accent) 30px,var(--bg) 30px,var(--bg) 60px);color:var(--fg)}
.restaurant{font-family:Georgia,serif}
.catalog .band{padding-top:120px;padding-bottom:120px}
.legal .band{border-bottom:1px double var(--accent)}
.music{background:radial-gradient(circle at 70% 20%,var(--accent),var(--bg) 20%)}
.camera .photo-grid{display:grid;grid-template-columns:repeat(2,1fr)}
.camera .photo-grid article{padding:20px;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
.camera .photo{height:500px;background:linear-gradient(135deg,var(--accent),var(--bg));display:grid;place-items:center;font-size:120px}
.periodic .elements{display:grid;grid-template-columns:repeat(4,1fr)}
.periodic .elements>div{min-height:220px;padding:20px;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent);display:flex;flex-direction:column;justify-content:space-between}
.periodic .elements b{font-size:25px}
.command{background:radial-gradient(circle at 70% 20%,color-mix(in srgb,var(--accent) 20%,transparent),var(--bg) 40%)}
.command-core{min-height:80vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding:70px 7vw}
.browser .browser-bar{position:sticky;top:0;z-index:3;padding:12px;background:var(--bg);border-bottom:1px solid color-mix(in srgb,var(--fg) 20%,transparent);font:11px monospace}
.mobile{display:flex;justify-content:center;padding:90px 20px}
.phone{width:390px;max-width:100%;border:7px solid var(--fg);border-radius:40px;overflow:hidden;background:var(--bg)}
.phone:before{content:"HALFCLUTCH";display:block;width:140px;margin:auto;text-align:center;background:var(--fg);color:var(--bg);padding:6px;border-radius:0 0 15px 15px;font:8px monospace}
.kanban .triptych>article{min-height:700px}
.conveyor .band{border-top:20px solid var(--accent)}
.garden{background:radial-gradient(circle at 70% 20%,var(--accent),transparent 15%),var(--bg)}
.metro .metro-map{height:500px;margin:50px 7vw;border:1px solid color-mix(in srgb,var(--fg) 20%,transparent);display:flex;flex-direction:column;justify-content:space-around;padding:30px}
.metro .metro-map i{display:block;background:var(--accent);color:var(--bg);padding:10px;font:10px monospace;font-style:normal}
.table{background:radial-gradient(circle at 20% 20%,color-mix(in srgb,var(--accent) 20%,transparent),transparent 20%),var(--bg)}
.puzzle{background:linear-gradient(135deg,var(--accent),var(--bg) 55%)}
.final{background:radial-gradient(circle at 20% 30%,color-mix(in srgb,var(--accent) 20%,transparent),transparent 18%),radial-gradient(circle at 80% 70%,color-mix(in srgb,var(--accent) 15%,transparent),transparent 18%),var(--bg)}
.final .triptych{transform:rotate(-1deg)}
@media(max-width:850px){
  .controller{left:8px;right:8px;justify-content:center}
  .controller small{display:none}
  .triptych,.services,.reviews,.git,.periodic .elements,.camera .photo-grid,.assembly .process,.machine .machine-core,.control-core,.case-item,.gallery-piece,.newspaper .split,.l23,.dashboard,.explorer{grid-template-columns:1fr}
  .os .window,.os .window:nth-of-type(n){width:100%;margin:20px 0}
  .os .window{position:relative}
  .hero h1{font-size:clamp(60px,16vw,110px)}
  .triptych>article{min-height:420px}
  .contact h2{font-size:55px}
  .l01 .workshop-floor{grid-template-columns:1fr}
  .canvas{min-height:auto;padding:70px 15px}
  .canvas .floating{position:relative;top:auto!important;left:auto!important;right:auto!important;margin:20px 0}
  .canvas .contact{position:relative;top:auto}
  .timeline-step{padding-left:30px}
  .explorer,.marketplace,.dashboard{display:block}
  .explorer>aside,.marketplace>aside,.dashboard>aside{border-right:0;border-bottom:1px solid color-mix(in srgb,var(--fg) 20%,transparent)}
  .control-core,.command-core{grid-template-columns:1fr}
  .radar{margin:30px auto}
  .building .floor-step{grid-template-columns:1fr}
  .floor-step h2{font-size:65px}
  .gallery-piece{min-height:auto;padding:50px 20px}
  .gallery-piece .art{height:350px}
  .machine .machine-core{min-height:auto}
  .machine-core>b{width:200px;height:200px;margin:auto}
  .l23 main,.dashboard main,.explorer main{padding:0 20px}
  .case-item{min-height:auto;padding:60px 20px}
  .case-item>b{height:180px}
  .metrics{grid-template-columns:repeat(2,1fr)}
  .story-chapter h2{font-size:65px}
  .phone{width:100%}
}
`;

