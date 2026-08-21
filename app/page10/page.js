
"use client";
import{FaGithub as Github, FaLinkedin as Linkedin} from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CircleDot,

  Mail,
  MapPin,
  Radio,
  TrainFront,
  X,
  Zap,
} from "lucide-react";

const stations = [
  {
    id: "dhenu",
    name: "DHENU MAHIMA",
    code: "DM",
    type: "DIGITAL PLATFORM",
    year: "2026",
    description:
      "A complete digital platform connecting content, people and administration.",
    technologies: ["Next.js", "Supabase", "Payments"],
    url: "https://www.dhenumahima.com/",
    position: { left: "10%", top: "36%" },
  },
  {
    id: "gau",
    name: "GAU SAMMAN",
    code: "GS",
    type: "ORGANIZATION SYSTEM",
    year: "2026",
    description:
      "A structured digital system built around information, participation and administration.",
    technologies: ["Next.js", "Supabase", "Admin"],
    url: "https://www.gausamman.cloud/",
    position: { left: "31%", top: "22%" },
  },
  {
    id: "rezillion",
    name: "REZILLION",
    code: "RZ",
    type: "ENERGY",
    year: "2026",
    description:
      "A focused digital experience designed around clarity and trust for an energy business.",
    technologies: ["React", "UI", "Responsive"],
    url: "https://rezillion.energy/",
    position: { left: "54%", top: "36%" },
  },
  {
    id: "blink",
    name: "BLINKCHARTS",
    code: "BC",
    type: "DATA PRODUCT",
    year: "2026",
    description:
      "A data-focused experience where information needs to remain fast, readable and useful.",
    technologies: ["React", "Charts", "Data"],
    url: "https://blinkcharts.com/",
    position: { left: "76%", top: "22%" },
  },
  {
    id: "greenzee",
    name: "GREENZEE JOBS",
    code: "GZ",
    type: "JOB PLATFORM",
    year: "2026",
    description:
      "A platform focused on employment discovery and a straightforward user journey.",
    technologies: ["React", "Node.js", "Database"],
    url: "https://www.greenzeejobs.com/",
    position: { left: "74%", top: "64%" },
  },
  {
    id: "vizion",
    name: "VIZION BUILD",
    code: "VB",
    type: "REAL ESTATE",
    year: "2026",
    description:
      "A visual landing experience designed to communicate a property concept clearly.",
    technologies: ["UI", "Landing", "Motion"],
    url: "https://vizion-build.vercel.app/",
    position: { left: "43%", top: "70%" },
  },
];

export default function Page() {
  const [active, setActive] = useState(null);
  const [trainPosition, setTrainPosition] = useState(0);
  const [signal, setSignal] = useState("GREEN");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setClock(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const openStation = (station, index) => {
    setTrainPosition(index);
    setSignal("YELLOW");

    setTimeout(() => {
      setActive(station);
      setSignal("GREEN");
    }, 650);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#101312] text-[#e9eadf]">
      {/* ======================================================
          CONTROL BAR
      ======================================================= */}

      <header className="relative z-50 flex h-16 items-center justify-between border-b border-white/10 px-5 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center border border-white/30">
            <TrainFront size={15} />
          </div>

          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em]">
              Shavandeb Kaiti
            </div>

            <div className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/30">
              Digital transit / 2026
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          <Status signal={signal} />

          <div className="font-mono text-[10px] text-white/40">
            {clock}
          </div>

          <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-white/30">
            <Radio size={12} />
            Network active
          </div>
        </div>

        <div className="text-[8px] uppercase tracking-[0.2em] text-white/30 md:hidden">
          {signal}
        </div>
      </header>

      {/* ======================================================
          CONTROL ROOM
      ======================================================= */}

      <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">
        {/* MAP GRID */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* HEADER INFORMATION */}

        <div className="absolute left-5 top-8 z-10 md:left-8">
          <div className="text-[8px] uppercase tracking-[0.25em] text-white/30">
            Network map
          </div>

          <div className="mt-3 text-xl font-medium tracking-[-0.04em]">
            Things I have built
          </div>
        </div>

        <div className="absolute right-5 top-8 z-10 text-right md:right-8">
          <div className="font-mono text-[8px] text-white/30">
            ROUTE / 001
          </div>

          <div className="mt-2 flex items-center justify-end gap-2 text-[8px] uppercase tracking-[0.15em]">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Service operational
          </div>
        </div>

        {/* ==================================================
            NETWORK SVG
        =================================================== */}

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          <path
            d="M100 250 L310 150 L540 250 L760 150"
            fill="none"
            stroke="rgba(255,255,255,.15)"
            strokeWidth="3"
          />

          <path
            d="M540 250 L740 450 L430 500"
            fill="none"
            stroke="rgba(255,255,255,.15)"
            strokeWidth="3"
          />

          <path
            d="M100 250 L310 150 L540 250 L760 150"
            fill="none"
            stroke="rgba(255,255,255,.55)"
            strokeWidth="1"
            strokeDasharray="8 8"
          />

          <path
            d="M540 250 L740 450 L430 500"
            fill="none"
            stroke="rgba(255,255,255,.55)"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
        </svg>

        {/* ==================================================
            TRAIN
        =================================================== */}

        <div
          className="pointer-events-none absolute z-20 hidden transition-all duration-700 ease-in-out md:block"
          style={{
            left: `${getTrainX(trainPosition)}%`,
            top: `${getTrainY(trainPosition)}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative flex h-12 w-20 items-center justify-center border border-white/50 bg-[#151918]">
            <TrainFront size={23} />

            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[7px] text-white/30">
              SK-01
            </span>
          </div>
        </div>

        {/* ==================================================
            STATIONS
        =================================================== */}

        {stations.map((station, index) => (
          <Station
            key={station.id}
            station={station}
            index={index}
            active={active?.id === station.id}
            onClick={() => openStation(station, index)}
          />
        ))}

        {/* ==================================================
            CENTRAL IDENTITY
        =================================================== */}

        <div className="pointer-events-none absolute left-1/2 top-[52%] z-10 hidden -translate-x-1/2 -translate-y-1/2 text-center md:block">
          <div className="mb-5 text-[8px] uppercase tracking-[0.35em] text-white/25">
            Operator
          </div>

          <div className="text-[5vw] font-black uppercase leading-[0.75] tracking-[-0.08em]">
            SHAVANDEB
          </div>

          <div className="mt-3 text-[2.8vw] font-medium uppercase tracking-[-0.05em] text-white/40">
            Kaiti
          </div>

          <div className="mx-auto mt-8 max-w-xs text-[9px] leading-relaxed text-white/25">
            Building digital products, interfaces and software systems.
          </div>
        </div>

        {/* ==================================================
            BOTTOM CONTROL PANEL
        =================================================== */}

        <div className="absolute bottom-5 left-5 right-5 z-30 flex flex-col gap-5 md:bottom-8 md:left-8 md:right-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-[7px] uppercase tracking-[0.2em] text-white/25">
              Instructions
            </div>

            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.14em] text-white/50">
              <MapPin size={12} />
              Select a station to inspect
            </div>
          </div>

          <div className="flex items-center gap-2 border border-white/10 bg-[#101312]/80 p-2 backdrop-blur">
            {stations.map((station, index) => (
              <button
                key={station.id}
                onClick={() => openStation(station, index)}
                className={`flex h-8 w-8 items-center justify-center text-[8px] transition-colors ${
                  active?.id === station.id
                    ? "bg-white text-black"
                    : "text-white/40 hover:bg-white/10 hover:text-white"
                }`}
              >
                {station.code}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          OPERATOR PANEL
      ======================================================= */}

      <section className="border-t border-white/10 bg-[#151918] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                Control system / 002
              </div>

              <h2 className="mt-6 text-4xl font-medium tracking-[-0.06em] md:text-6xl">
                What happens
                <br />
                behind the station.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-white/10">
                <SystemRow
                  number="01"
                  title="Interface"
                  description="Designing the part people actually interact with."
                />

                <SystemRow
                  number="02"
                  title="Logic"
                  description="Turning the interface into a functioning application."
                />

                <SystemRow
                  number="03"
                  title="Data"
                  description="Connecting databases, APIs and persistent information."
                />

                <SystemRow
                  number="04"
                  title="Deployment"
                  description="Taking the finished system from development to production."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CONTACT TERMINAL
      ======================================================= */}

      <section className="border-t border-white/10 bg-[#0c0e0d] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12 flex items-center justify-between">
            <div className="text-[8px] uppercase tracking-[0.25em] text-white/25">
              Final station / 003
            </div>

            <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-white/25">
              <Zap size={12} />
              Open
            </div>
          </div>

          <div className="border-y border-white/10 py-16">
            <div className="text-[13vw] font-black uppercase leading-[0.72] tracking-[-0.1em] md:text-[9vw]">
              NEXT
            </div>

            <div className="ml-[15vw] mt-4 text-[13vw] font-black uppercase leading-[0.72] tracking-[-0.1em] md:text-[9vw]">
              STOP?
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-relaxed text-white/35">
              Have a website, application or digital product that needs to be
              built? The next station is open.
            </p>

            <div className="flex gap-2">
              <ContactButton
                href="mailto:your@email.com"
                icon={<Mail size={15} />}
                text="Email"
              />

              <ContactButton
                href="https://github.com/"
                icon={<Github size={15} />}
                text="GitHub"
              />

              <ContactButton
                href="https://linkedin.com/"
                icon={<Linkedin size={15} />}
                text="LinkedIn"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROJECT DETAIL
      ======================================================= */}

      {active && (
        <ProjectPanel
          station={active}
          onClose={() => setActive(null)}
        />
      )}
    </main>
  );
}

/* ============================================================
   STATION
============================================================ */

function Station({ station, index, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group absolute z-30 -translate-x-1/2 -translate-y-1/2 text-left"
      style={{
        left: station.position.left,
        top: station.position.top,
      }}
    >
      <div className="relative">
        {/* OUTER RING */}

        <div
          className={`absolute -inset-5 rounded-full border transition-all duration-500 ${
            active
              ? "scale-125 border-white/50"
              : "border-white/10 group-hover:scale-125 group-hover:border-white/30"
          }`}
        />

        {/* STATION */}

        <div
          className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
            active
              ? "border-white bg-white text-black"
              : "border-white/50 bg-[#101312] text-white group-hover:bg-white group-hover:text-black"
          }`}
        >
          <CircleDot size={19} />
        </div>

        {/* LABEL */}

        <div className="absolute left-1/2 top-[65px] -translate-x-1/2 whitespace-nowrap text-center">
          <div className="text-[8px] font-medium tracking-[0.1em]">
            {station.name}
          </div>

          <div className="mt-1 text-[6px] uppercase tracking-[0.2em] text-white/25">
            {station.type}
          </div>
        </div>

        {/* INDEX */}

        <span className="absolute -left-8 top-1/2 -translate-y-1/2 font-mono text-[7px] text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </button>
  );
}

/* ============================================================
   STATUS
============================================================ */

function Status({ signal }) {
  const color =
    signal === "GREEN"
      ? "bg-green-500"
      : signal === "YELLOW"
        ? "bg-yellow-400"
        : "bg-red-500";

  return (
    <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-white/40">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {signal}
    </div>
  );
}

/* ============================================================
   SYSTEM ROW
============================================================ */

function SystemRow({ number, title, description }) {
  return (
    <div className="group grid grid-cols-[40px_1fr_auto] gap-5 border-b border-white/10 py-8">
      <div className="font-mono text-[8px] text-white/20">
        {number}
      </div>

      <div>
        <div className="text-xl font-medium tracking-[-0.03em]">
          {title}
        </div>

        <div className="mt-2 max-w-md text-xs leading-relaxed text-white/30">
          {description}
        </div>
      </div>

      <ArrowRight
        size={16}
        className="mt-1 text-white/20 transition-transform group-hover:translate-x-2"
      />
    </div>
  );
}

/* ============================================================
   PROJECT PANEL
============================================================ */

function ProjectPanel({ station, onClose }) {
  return (
    <div className="fixed inset-0 z-[200] bg-[#080a09]">
      <div className="flex h-full flex-col">
        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <TrainFront size={18} />

            <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
              Approaching station
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-3 text-[8px] uppercase tracking-[0.18em] text-white/40 hover:text-white"
          >
            Leave station
            <X size={17} />
          </button>
        </div>

        {/* CONTENT */}

        <div className="flex flex-1 items-center overflow-y-auto">
          <div className="mx-auto w-full max-w-[1300px] px-5 py-20 md:px-8">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="mb-8 flex items-center gap-4 text-[8px] uppercase tracking-[0.2em] text-white/30">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Station {station.code}
                  <span>/</span>
                  {station.year}
                </div>

                <h1 className="text-[14vw] font-black uppercase leading-[0.72] tracking-[-0.1em] md:text-[9vw]">
                  {station.name}
                </h1>

                <p className="mt-14 max-w-2xl text-xl leading-relaxed text-white/45 md:text-2xl">
                  {station.description}
                </p>
              </div>

              <div className="md:col-span-4 md:pt-20">
                <div className="border-t border-white/10 pt-6">
                  <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                    Station type
                  </div>

                  <div className="mt-3 text-sm">
                    {station.type}
                  </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                    Systems used
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {station.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.1em] text-white/50"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={station.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-12 flex items-center justify-between border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.18em]"
                >
                  Visit live station

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ROUTE FOOTER */}

        <div className="border-t border-white/10 px-5 py-4 md:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            {stations.map((item, index) => (
              <div
                key={item.id}
                className={`flex shrink-0 items-center gap-3 text-[7px] uppercase tracking-[0.15em] ${
                  item.id === station.id
                    ? "text-white"
                    : "text-white/20"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />

                {item.code}

                {index !== stations.length - 1 && (
                  <span className="ml-2 text-white/10">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CONTACT
============================================================ */

function ContactButton({ href, icon, text }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-3 border border-white/10 px-5 py-3 text-[8px] uppercase tracking-[0.15em] text-white/50 transition-colors hover:bg-white hover:text-black"
    >
      {icon}
      {text}
    </a>
  );
}

/* ============================================================
   TRAIN POSITION
============================================================ */

function getTrainX(index) {
  const positions = [10, 31, 54, 76, 74, 43];
  return positions[index] || 10;
}

function getTrainY(index) {
  const positions = [36, 22, 36, 22, 64, 70];
  return positions[index] || 36;
}