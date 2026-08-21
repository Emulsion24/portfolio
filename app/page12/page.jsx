"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Text,
} from "@react-three/drei";
import * as THREE from "three";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
 
  Mail,
  Pause,
  Play,
  Radio,
  Waves,
  X,
} from "lucide-react";
import{FaGithub as Github, FaLinkedin as Linkedin} from "react-icons/fa";

/* ============================================================
   DATA
============================================================ */

const destinations = [
  {
    id: "projects",
    code: "P-01",
    title: "PROJECTS",
    depth: 120,
    type: "RESEARCH STATION",
    description:
      "Explore digital products, websites and software systems built for real-world organizations and businesses.",
  },
  {
    id: "stack",
    code: "T-02",
    title: "TECH STACK",
    depth: 260,
    type: "TECHNOLOGY STATION",
    description:
      "The technologies, frameworks, databases and tools used to build the systems behind the work.",
  },
  {
    id: "about",
    code: "A-03",
    title: "ABOUT ME",
    depth: 410,
    type: "PERSONAL STATION",
    description:
      "The developer operating this submarine and building the digital systems discovered during the expedition.",
  },
  {
    id: "contact",
    code: "C-04",
    title: "CONTACT",
    depth: 580,
    type: "COMMUNICATION STATION",
    description:
      "Open a communication channel for your next website, application or software project.",
  },
];

const projects = [
  {
    name: "Dhenu Mahima",
    type: "Digital Platform",
    description:
      "A complete digital platform connecting content, people and administration.",
    stack: ["Next.js", "Supabase", "Payments"],
    url: "https://www.dhenumahima.com/",
  },
  {
    name: "Gau Samman",
    type: "Organization System",
    description:
      "A structured digital system designed around information and administration.",
    stack: ["Next.js", "Supabase", "Admin"],
    url: "https://www.gausamman.cloud/",
  },
  {
    name: "Rezillion",
    type: "Energy Platform",
    description:
      "A focused digital experience created for an energy business.",
    stack: ["React", "Responsive", "UI"],
    url: "https://rezillion.energy/",
  },
  {
    name: "BlinkCharts",
    type: "Data Product",
    description:
      "A data-focused interface where information remains fast, readable and useful.",
    stack: ["React", "Charts", "Data"],
    url: "https://blinkcharts.com/",
  },
  {
    name: "Greenzee Jobs",
    type: "Job Platform",
    description:
      "A platform focused on employment discovery and a straightforward user journey.",
    stack: ["React", "Node.js", "Database"],
    url: "https://www.greenzeejobs.com/",
  },
  {
    name: "Vizion Build",
    type: "Real Estate",
    description:
      "A visual landing experience created for a real-estate concept.",
    stack: ["UI", "Landing", "Motion"],
    url: "https://vizion-build.vercel.app/",
  },
];

const technologies = [
  ["Next.js", "Frontend"],
  ["React", "Frontend"],
  ["JavaScript", "Language"],
  ["Node.js", "Backend"],
  ["Express", "Backend"],
  ["Supabase", "Database"],
  ["MongoDB", "Database"],
  ["MySQL", "Database"],
  ["Tailwind CSS", "Frontend"],
  ["Git / GitHub", "Tools"],
];

/* ============================================================
   PAGE
============================================================ */

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [target, setTarget] = useState(0);

  const [moving, setMoving] = useState(true);
  const [automatic, setAutomatic] = useState(true);

  const [details, setDetails] = useState(false);

  const destination = destinations[current];

  /*
   * Initial dive after opening.
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      goTo(0);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  /*
   * Automatically continue to the next station.
   */

  useEffect(() => {
    if (moving || !automatic) return;

    const timer = setTimeout(() => {
      const next =
        current >= destinations.length - 1
          ? 0
          : current + 1;

      goTo(next);
    }, 6500);

    return () => clearTimeout(timer);
  }, [current, moving, automatic]);

  function goTo(index) {
    setTarget(index);
    setMoving(true);
    setDetails(false);
  }

  function arrived(index) {
    setCurrent(index);
    setMoving(false);

    setTimeout(() => {
      setDetails(true);
    }, 700);
  }

  function nextStation() {
    setAutomatic(false);

    const next =
      current >= destinations.length - 1
        ? 0
        : current + 1;

    goTo(next);
  }

  function previousStation() {
    setAutomatic(false);

    const previous =
      current <= 0
        ? destinations.length - 1
        : current - 1;

    goTo(previous);
  }

  function openStation() {
    document
      .getElementById(destination.id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#010c11] text-[#dcebea]">

      {/* ======================================================
          TOP HUD
      ====================================================== */}

      <header className="fixed left-0 top-0 z-[100] flex h-16 w-full items-center justify-between border-b border-cyan-100/10 bg-[#010c11]/75 px-5 backdrop-blur-xl md:px-8">

        <div className="flex items-center gap-3">

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-100/20">
            <Waves size={15} />
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.2em]">
              Shavandeb Kaiti
            </div>

            <div className="mt-1 text-[7px] uppercase tracking-[0.2em] text-cyan-100/25">
              Deep Sea Network
            </div>
          </div>

        </div>

        <div className="hidden items-center gap-8 md:flex">

          <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-cyan-100/40">

            <span
              className={`h-1.5 w-1.5 rounded-full ${
                moving
                  ? "animate-pulse bg-cyan-300"
                  : "bg-emerald-400"
              }`}
            />

            {moving
              ? "Submarine in transit"
              : "Station reached"}

          </div>

          <div className="font-mono text-[9px] text-cyan-100/25">
            DEPTH {destination.depth}M
          </div>

        </div>

        <button
          onClick={() =>
            setAutomatic((value) => !value)
          }
          className="flex items-center gap-2 border border-cyan-100/10 px-3 py-2 text-[8px] uppercase tracking-[0.15em] transition hover:bg-cyan-100 hover:text-[#010c11]"
        >
          {automatic ? (
            <>
              <Pause size={11} />
              Auto
            </>
          ) : (
            <>
              <Play size={11} />
              Manual
            </>
          )}
        </button>

      </header>

      {/* ======================================================
          MAIN UNDERWATER WORLD
      ====================================================== */}

      <section className="relative h-screen min-h-[700px]">

        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{
            position: [0, 4, 24],
            fov: 45,
          }}
        >

          <OceanLighting
            depth={destination.depth}
          />

          <OceanWorld
            depth={destination.depth}
            activeStation={current}
          />

          <Submarine
            target={target}
            moving={moving}
            onArrive={arrived}
          />

          <OrbitControls
            enablePan={false}
            minDistance={11}
            maxDistance={32}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
          />

        </Canvas>

        {/* ====================================================
            INTRO HUD
        ===================================================== */}

        <div className="pointer-events-none absolute left-5 top-24 z-30 md:left-8">

          <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-cyan-100/25">

            <Radio size={12} />

            Deep sea exploration

          </div>

          <h1 className="mt-5 max-w-xl text-4xl font-medium tracking-[-0.06em] md:text-7xl">

            Explore
            <br />
            beneath the surface.

          </h1>

          <p className="mt-6 max-w-sm text-xs leading-relaxed text-cyan-100/30">

            A portfolio designed as an underwater expedition.
            Dive deeper to discover the work.

          </p>

        </div>

        {/* ====================================================
            DEPTH METER
        ===================================================== */}

        <div className="absolute right-5 top-24 z-30 text-right md:right-8">

          <div className="text-[7px] uppercase tracking-[0.2em] text-cyan-100/20">
            Current depth
          </div>

          <div className="mt-1 font-mono text-3xl">
            {destination.depth}
            <span className="ml-1 text-sm text-cyan-100/30">
              m
            </span>
          </div>

          <div className="mt-2 text-[7px] uppercase tracking-[0.18em] text-cyan-100/20">
            below surface
          </div>

        </div>

        {/* ====================================================
            CURRENT STATION
        ===================================================== */}

        <div className="absolute bottom-24 left-5 z-30 md:left-8">

          <div className="text-[7px] uppercase tracking-[0.2em] text-cyan-100/20">
            Current destination
          </div>

          <div className="mt-3 text-lg">
            {destination.title}
          </div>

          <div className="mt-1 text-[7px] uppercase tracking-[0.16em] text-cyan-100/25">
            {destination.type}
          </div>

        </div>

        {/* ====================================================
            SONAR
        ===================================================== */}

        <div className="absolute bottom-7 left-5 z-30 hidden items-center gap-3 md:flex">

          <Sonar />

          <div>

            <div className="text-[7px] uppercase tracking-[0.2em] text-cyan-100/20">
              Sonar
            </div>

            <div className="mt-1 text-[7px] uppercase tracking-[0.15em] text-cyan-100/30">
              Signal acquired
            </div>

          </div>

        </div>

        {/* ====================================================
            NAVIGATION BUTTONS
        ===================================================== */}

        <div className="absolute bottom-7 right-5 z-40 flex gap-2 md:right-8">

          <button
            onClick={previousStation}
            disabled={moving}
            className="flex h-10 w-10 items-center justify-center border border-cyan-100/15 bg-[#011018]/70 backdrop-blur transition hover:bg-cyan-100 hover:text-[#011018] disabled:opacity-20"
          >
            <ArrowLeft size={14} />
          </button>

          <button
            onClick={nextStation}
            disabled={moving}
            className="flex h-10 items-center gap-3 border border-cyan-100/15 bg-[#011018]/70 px-4 text-[8px] uppercase tracking-[0.16em] backdrop-blur transition hover:bg-cyan-100 hover:text-[#011018] disabled:opacity-20"
          >
            Dive
            <ArrowDown size={13} />
          </button>

        </div>

        {/* ====================================================
            DESTINATION LIST
        ===================================================== */}

        <div className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-4 md:flex">

          {destinations.map(
            (item, index) => (

              <button
                key={item.id}
                disabled={moving}
                onClick={() => {
                  setAutomatic(false);
                  goTo(index);
                }}
                className="group flex items-center gap-3"
              >

                <span
                  className={`text-[7px] font-mono ${
                    current === index
                      ? "text-cyan-300"
                      : "text-cyan-100/20"
                  }`}
                >
                  {item.depth}m
                </span>

                <span
                  className={`h-2 w-2 rounded-full border ${
                    current === index
                      ? "border-cyan-300 bg-cyan-300"
                      : "border-cyan-100/20"
                  }`}
                />

              </button>

            )
          )}

        </div>

        {/* ====================================================
            STATION DETAIL
        ===================================================== */}

        {details && (

          <div className="absolute right-5 top-1/2 z-50 w-[310px] -translate-y-1/2 border border-cyan-100/10 bg-[#03191e]/90 p-6 backdrop-blur-xl md:right-8 md:w-[370px]">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2 text-[7px] uppercase tracking-[0.2em] text-cyan-100/30">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                Station reached

              </div>

              <button
                onClick={() => setDetails(false)}
                className="text-cyan-100/25 hover:text-white"
              >
                <X size={14} />
              </button>

            </div>

            <div className="mt-7">

              <div className="font-mono text-[8px] text-cyan-300/50">
                {destination.code}
              </div>

              <h2 className="mt-3 text-2xl font-medium">
                {destination.title}
              </h2>

              <div className="mt-2 text-[7px] uppercase tracking-[0.18em] text-cyan-100/25">
                {destination.type}
              </div>

              <p className="mt-5 text-xs leading-relaxed text-cyan-100/40">
                {destination.description}
              </p>

              <button
                onClick={openStation}
                className="mt-7 flex w-full items-center justify-between border-t border-cyan-100/10 pt-4 text-[8px] uppercase tracking-[0.18em] transition hover:text-cyan-300"
              >
                Explore station

                <ArrowUpRight size={14} />
              </button>

            </div>

          </div>

        )}

      </section>

      {/* ======================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="border-t border-cyan-100/10 bg-[#031820] px-5 py-24 md:px-8 md:py-32"
      >

        <div className="mx-auto max-w-[1250px]">

          <SectionTitle
            code="P-01 / 120M"
            title="Projects"
            subtitle="Research station"
          />

          <div className="mt-16 grid gap-px border border-cyan-100/10 bg-cyan-100/10 md:grid-cols-2 lg:grid-cols-3">

            {projects.map(
              (project, index) => (

                <article
                  key={project.name}
                  className="group bg-[#031820] p-6 transition duration-500 hover:bg-[#05252d]"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[8px] text-cyan-100/20">
                      0{index + 1}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="text-cyan-100/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200"
                    />

                  </div>

                  <div className="mt-16">

                    <div className="text-[7px] uppercase tracking-[0.18em] text-cyan-300/40">
                      {project.type}
                    </div>

                    <h3 className="mt-3 text-xl tracking-[-0.03em]">
                      {project.name}
                    </h3>

                    <p className="mt-4 text-xs leading-relaxed text-cyan-100/35">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                      {project.stack.map(
                        (tech) => (

                          <span
                            key={tech}
                            className="border border-cyan-100/10 px-2 py-1 text-[7px] uppercase tracking-[0.1em] text-cyan-100/35"
                          >
                            {tech}
                          </span>

                        )
                      )}

                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 flex items-center gap-2 text-[8px] uppercase tracking-[0.15em] text-cyan-200/45 transition hover:text-white"
                    >
                      Visit project
                      <ArrowUpRight size={13} />
                    </a>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          TECH STACK
      ====================================================== */}

      <section
        id="stack"
        className="border-t border-cyan-100/10 bg-[#021117] px-5 py-24 md:px-8 md:py-32"
      >

        <div className="mx-auto max-w-[1250px]">

          <SectionTitle
            code="T-02 / 260M"
            title="Tech Stack"
            subtitle="Technology station"
          />

          <div className="mt-16 grid gap-px border border-cyan-100/10 bg-cyan-100/10 sm:grid-cols-2 lg:grid-cols-5">

            {technologies.map(
              ([name, category], index) => (

                <div
                  key={name}
                  className="group bg-[#021117] p-6 transition duration-500 hover:bg-[#05242b]"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[7px] text-cyan-100/20">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/20 transition group-hover:bg-cyan-300" />

                  </div>

                  <div className="mt-12 text-sm">
                    {name}
                  </div>

                  <div className="mt-2 text-[7px] uppercase tracking-[0.16em] text-cyan-100/25">
                    {category}
                  </div>

                  <div className="mt-8 h-px overflow-hidden bg-cyan-100/10">

                    <div className="h-full w-[75%] bg-cyan-300/40 transition-all duration-700 group-hover:w-full" />

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="border-t border-cyan-100/10 bg-[#031820] px-5 py-24 md:px-8 md:py-32"
      >

        <div className="mx-auto max-w-[1250px]">

          <SectionTitle
            code="A-03 / 410M"
            title="About Me"
            subtitle="Personal station"
          />

          <div className="mt-16 grid gap-16 md:grid-cols-12">

            <div className="md:col-span-7">

              <p className="text-3xl leading-tight tracking-[-0.05em] md:text-5xl">
                I build software for the real world — from interfaces and
                websites to the systems that make them work.
              </p>

            </div>

            <div className="md:col-span-4 md:col-start-9">

              <p className="text-sm leading-relaxed text-cyan-100/35">
                Computer science graduate working across frontend, backend,
                databases and deployment. I enjoy taking an idea and turning
                it into a functioning digital product.
              </p>

              <div className="mt-10 border-t border-cyan-100/10 pt-5">

                <div className="text-[7px] uppercase tracking-[0.2em] text-cyan-100/20">
                  Current mission
                </div>

                <div className="mt-3 text-sm">
                  Build useful software.
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="border-t border-cyan-100/10 bg-[#010b0f] px-5 py-24 md:px-8 md:py-32"
      >

        <div className="mx-auto max-w-[1250px]">

          <SectionTitle
            code="C-04 / 580M"
            title="Contact"
            subtitle="Communication station"
          />

          <div className="mt-20 border-y border-cyan-100/10 py-14">

            <div className="text-[15vw] font-black uppercase leading-[0.7] tracking-[-0.1em] md:text-[9vw]">
              SEND
            </div>

            <div className="ml-[15vw] mt-5 text-[15vw] font-black uppercase leading-[0.7] tracking-[-0.1em] md:text-[9vw]">
              SIGNAL
            </div>

          </div>

          <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <p className="max-w-md text-sm leading-relaxed text-cyan-100/30">
              Have a website, application or software idea?
              Open a communication channel.
            </p>

            <div className="flex flex-wrap gap-2">

              <ContactButton
                href="mailto:your@email.com"
                icon={<Mail size={14} />}
                text="Email"
              />

              <ContactButton
                href="https://github.com/"
                icon={<Github size={14} />}
                text="GitHub"
              />

              <ContactButton
                href="https://linkedin.com/"
                icon={<Linkedin size={14} />}
                text="LinkedIn"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="flex flex-col justify-between gap-3 border-t border-cyan-100/10 px-5 py-6 text-[7px] uppercase tracking-[0.18em] text-cyan-100/20 md:flex-row md:px-8">

        <span>
          Shavandeb Kaiti
        </span>

        <span>
          Deep Sea Network / 001
        </span>

        <span>
          Mission active / 2026
        </span>

      </footer>

    </main>
  );
}

/* ============================================================
   OCEAN LIGHTING
============================================================ */

function OceanLighting({ depth }) {
  const sunlight =
    Math.max(
      0.08,
      1.8 - depth / 350
    );

  return (
    <>
      <color
        attach="background"
        args={[
          depth < 180
            ? "#06303b"
            : depth < 320
              ? "#032832"
              : depth < 470
                ? "#021923"
                : "#010a12",
        ]}
      />

      <fog
        attach="fog"
        args={[
          depth < 180
            ? "#06303b"
            : depth < 320
              ? "#032832"
              : depth < 470
                ? "#021923"
                : "#010a12",
          12,
          Math.max(
            28,
            65 - depth / 8
          ),
        ]}
      />

      <ambientLight
        intensity={sunlight * 0.65}
        color="#58bfc8"
      />

      <directionalLight
        position={[0, 30, 5]}
        intensity={sunlight}
        color="#8beaf0"
      />

      <pointLight
        position={[0, 0, 5]}
        intensity={10}
        distance={20}
        color="#27d1db"
      />

      <Environment preset="night" />
    </>
  );
}

/* ============================================================
   OCEAN WORLD
============================================================ */

function OceanWorld({
  depth,
  activeStation,
}) {
  return (
    <>

      {/* SUN RAYS */}

      {depth < 300 && <SunRays />}

      {/* SEA FLOOR */}

      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        position={[0, -11, 0]}
        receiveShadow
      >

        <planeGeometry
          args={[120, 120]}
        />

        <meshStandardMaterial
          color={
            depth < 300
              ? "#124b50"
              : depth < 450
                ? "#092b34"
                : "#061821"
          }
          roughness={1}
        />

      </mesh>

      {/* ROCKS */}

      <DeepSeaRocks
        depth={depth}
      />

      {/* CORAL */}

      {depth < 320 && (
        <CoralForest />
      )}

      {/* FISH */}

      {depth < 350 && (
        <FishSchool />
      )}

      {/* DEEP SEA */}

      {depth >= 300 && (
        <BioluminescentLife />
      )}

      {/* WATER PARTICLES */}

      <OceanParticles
        depth={depth}
      />

      {/* STATIONS */}

      <UnderwaterStations
        active={activeStation}
      />

    </>
  );
}

/* ============================================================
   SUBMARINE
============================================================ */

function Submarine({
  target,
  moving,
  onArrive,
}) {
  const submarine = useRef(null);
  const propeller = useRef(null);

  /*
   * Four real underwater destinations.
   *
   * They progressively move down and forward.
   */

  const locations = useMemo(
    () => [
      new THREE.Vector3(
        0,
        3,
        7
      ),

      new THREE.Vector3(
        -4,
        0,
        -2
      ),

      new THREE.Vector3(
        4,
        -4,
        -8
      ),

      new THREE.Vector3(
        -3,
        -8,
        -15
      ),
    ],
    []
  );

  useFrame(
    (state, delta) => {
      if (!submarine.current)
        return;

      const current =
        submarine.current.position;

      const destination =
        locations[target];

      if (moving) {

        const distance =
          current.distanceTo(
            destination
          );

        /*
         * Faster when travelling far.
         * Slow when approaching station.
         */

        const speed =
          distance > 5
            ? 0.75
            : distance > 2
              ? 0.32
              : 0.11;

        current.lerp(
          destination,
          delta * speed
        );

        /*
         * Natural underwater movement.
         */

        current.y +=
          Math.sin(
            state.clock.elapsedTime * 1.2
          ) *
          0.008;

        current.x +=
          Math.sin(
            state.clock.elapsedTime * 0.7
          ) *
          0.002;

        /*
         * Face destination.
         */

        const direction =
          new THREE.Vector3()
            .subVectors(
              destination,
              current
            )
            .normalize();

        if (
          direction.length() > 0
        ) {

          const matrix =
            new THREE.Matrix4();

          matrix.lookAt(
            current,
            destination,
            new THREE.Vector3(
              0,
              1,
              0
            )
          );

          const quaternion =
            new THREE.Quaternion();

          quaternion.setFromRotationMatrix(
            matrix
          );

          submarine.current.quaternion.slerp(
            quaternion,
            delta * 1.5
          );
        }

        /*
         * Propeller.
         */

        if (propeller.current) {
          propeller.current.rotation.z -=
            delta * 20;
        }

        /*
         * Station reached.
         */

        if (distance < 0.16) {
          onArrive(target);
        }
      }
    }
  );

  return (
    <group
      ref={submarine}
      position={locations[0]}
    >

      {/* MAIN HULL */}

      <mesh castShadow>

        <capsuleGeometry
          args={[
            1,
            3.5,
            16,
            32,
          ]}
        />

        <meshStandardMaterial
          color="#455650"
          metalness={0.8}
          roughness={0.25}
        />

      </mesh>

      {/* FRONT NOSE */}

      <mesh
        position={[
          0,
          0,
          2.2,
        ]}
        castShadow
      >

        <sphereGeometry
          args={[
            1.02,
            32,
            20,
          ]}
        />

        <meshStandardMaterial
          color="#52635d"
          metalness={0.75}
          roughness={0.22}
        />

      </mesh>

      {/* FRONT WINDOWS */}

      {[-0.38, 0, 0.38].map(
        (x) => (

          <mesh
            key={x}
            position={[
              x,
              0.4,
              1.68,
            ]}
          >

            <sphereGeometry
              args={[
                0.16,
                16,
                16,
              ]}
            />

            <meshStandardMaterial
              color="#9bffff"
              emissive="#26d6de"
              emissiveIntensity={4}
            />

          </mesh>

        )
      )}

      {/* CONNING TOWER */}

      <mesh
        position={[
          0,
          1.1,
          -0.1,
        ]}
        castShadow
      >

        <boxGeometry
          args={[
            1,
            0.7,
            1.2,
          ]}
        />

        <meshStandardMaterial
          color="#27332f"
          metalness={0.7}
          roughness={0.25}
        />

      </mesh>

      {/* PERISCOPE */}

      <group
        position={[
          0,
          1.8,
          -0.1,
        ]}
      >

        <mesh>

          <cylinderGeometry
            args={[
              0.12,
              0.12,
              1.1,
              16,
            ]}
          />

          <meshStandardMaterial
            color="#78857e"
            metalness={0.8}
          />

        </mesh>

        <mesh
          position={[
            0,
            0.55,
            0.18,
          ]}
          rotation={[
            Math.PI / 2,
            0,
            0,
          ]}
        >

          <cylinderGeometry
            args={[
              0.12,
              0.12,
              0.4,
              16,
            ]}
          />

          <meshStandardMaterial
            color="#78857e"
            metalness={0.8}
          />

        </mesh>

      </group>

      {/* HEADLIGHT */}

      <group
        position={[
          0,
          -0.2,
          2.9,
        ]}
      >

        <mesh>

          <sphereGeometry
            args={[
              0.2,
              16,
              16,
            ]}
          />

          <meshStandardMaterial
            color="#ffffff"
            emissive="#72faff"
            emissiveIntensity={6}
          />

        </mesh>

        <pointLight
          color="#54ecff"
          intensity={18}
          distance={16}
        />

      </group>

      {/* SIDE FINS */}

      {[-1, 1].map(
        (side) => (

          <mesh
            key={side}
            position={[
              side * 1.25,
              -0.15,
              -0.2,
            ]}
            rotation={[
              0,
              0,
              side * 0.2,
            ]}
          >

            <boxGeometry
              args={[
                1.6,
                0.1,
                0.65,
              ]}
            />

            <meshStandardMaterial
              color="#27332f"
              metalness={0.6}
            />

          </mesh>

        )
      )}

      {/* REAR PROPELLER */}

      <group
        ref={propeller}
        position={[
          0,
          0,
          -2.4,
        ]}
      >

        <mesh
          rotation={[
            0,
            Math.PI / 2,
            0,
          ]}
        >

          <cylinderGeometry
            args={[
              0.25,
              0.25,
              0.2,
              16,
            ]}
          />

          <meshStandardMaterial
            color="#a7aca5"
            metalness={0.9}
          />

        </mesh>

        {[0, 1, 2, 3].map(
          (index) => (

            <mesh
              key={index}
              rotation={[
                0,
                0,
                (index * Math.PI) / 2,
              ]}
            >

              <boxGeometry
                args={[
                  1.2,
                  0.08,
                  0.08,
                ]}
              />

              <meshStandardMaterial
                color="#858c86"
                metalness={0.9}
              />

            </mesh>

          )
        )}

      </group>

      {/* BUBBLES */}

      <SubmarineBubbles
        moving={moving}
      />

    </group>
  );
}

/* ============================================================
   SUBMARINE BUBBLES
============================================================ */

function SubmarineBubbles({
  moving,
}) {
  const bubbles = useRef([]);

  useFrame(
    (state, delta) => {

      bubbles.current.forEach(
        (bubble, index) => {

          if (!bubble)
            return;

          if (moving) {

            bubble.position.y +=
              delta *
              (0.2 + index * 0.025);

            bubble.position.x +=
              Math.sin(
                state.clock.elapsedTime +
                  index
              ) *
              delta *
              0.04;

            if (
              bubble.position.y >
              2.8
            ) {
              bubble.position.y =
                -1;
            }

          }

        }
      );
    }
  );

  return (
    <group
      position={[
        0.4,
        0,
        -2,
      ]}
    >

      {Array.from({
        length: 15,
      }).map((_, index) => (

        <mesh
          key={index}
          ref={(node) => {
            bubbles.current[index] =
              node;
          }}
          position={[
            Math.sin(index) * 0.5,
            -index * 0.25,
            Math.cos(index) * 0.3,
          ]}
        >

          <sphereGeometry
            args={[
              0.025 +
                (index % 3) * 0.025,
              8,
              8,
            ]}
          />

          <meshStandardMaterial
            color="#a6f7ff"
            transparent
            opacity={0.5}
          />

        </mesh>

      ))}

    </group>
  );
}

/* ============================================================
   UNDERWATER STATIONS
============================================================ */

function UnderwaterStations({
  active,
}) {

  const positions = [
    [-8, -2, -5],
    [8, -5, -11],
    [-7, -8, -17],
    [7, -10, -24],
  ];

  return (
    <>
      {positions.map(
        (position, index) => (

          <group
            key={index}
            position={position}
          >

            {/* STATION BASE */}

            <mesh
              position={[
                0,
                -1.3,
                0,
              ]}
              receiveShadow
            >

              <cylinderGeometry
                args={[
                  3.2,
                  3.8,
                  0.5,
                  32,
                ]}
              />

              <meshStandardMaterial
                color={
                  active === index
                    ? "#1c626c"
                    : "#113840"
                }
                roughness={0.75}
              />

            </mesh>

            {/* DOME */}

            <mesh
              position={[
                0,
                0,
                0,
              ]}
            >

              <sphereGeometry
                args={[
                  2,
                  32,
                  18,
              ]}
              />

              <meshStandardMaterial
                color="#102a30"
                metalness={0.3}
                roughness={0.15}
                transparent
                opacity={0.9}
              />

            </mesh>

            {/* WINDOWS */}

            {[
              0,
              1,
              2,
              3,
            ].map(
              (window) => {

                const angle =
                  (window * Math.PI) /
                  2;

                return (
                  <mesh
                    key={window}
                    position={[
                      Math.cos(angle) *
                        1.65,
                      0,
                      Math.sin(angle) *
                        1.65,
                    ]}
                  >

                    <sphereGeometry
                      args={[
                        0.18,
                        12,
                        12,
                      ]}
                    />

                    <meshStandardMaterial
                      color="#7af5fb"
                      emissive="#25d7df"
                      emissiveIntensity={
                        active === index
                          ? 5
                          : 1
                      }
                    />

                  </mesh>
                );
              }
            )}

            {/* TOWER */}

            <mesh
              position={[
                0,
                2.5,
                0,
              ]}
            >

              <cylinderGeometry
                args={[
                  0.15,
                  0.15,
                  1.5,
                  12,
                ]}
              />

              <meshStandardMaterial
                color="#6d7b77"
                metalness={0.8}
              />

            </mesh>

            {/* LIGHT */}

            <pointLight
              position={[
                0,
                2.7,
                0,
              ]}
              color="#45e8f0"
              intensity={
                active === index
                  ? 16
                  : 2
              }
              distance={11}
            />

            <Text
              position={[
                0,
                3.5,
                0,
              ]}
              fontSize={0.35}
              color="#9af8ff"
              anchorX="center"
            >
              {destinations[index].code}
            </Text>

          </group>

        )
      )}
    </>
  );
}

/* ============================================================
   SUN RAYS
============================================================ */

function SunRays() {

  return (
    <group
      position={[
        0,
        15,
        -8,
      ]}
    >

      {Array.from({
        length: 11,
      }).map((_, index) => (

        <mesh
          key={index}
          position={[
            (index - 5) * 2.5,
            0,
            0,
          ]}
          rotation={[
            0,
            0,
            (index - 5) *
              0.02,
          ]}
        >

          <coneGeometry
            args={[
              0.7,
              20,
              4,
              1,
              true,
            ]}
          />

          <meshBasicMaterial
            color="#8deaf0"
            transparent
            opacity={0.025}
            depthWrite={false}
          />

        </mesh>

      ))}

    </group>
  );
}

/* ============================================================
   FISH SCHOOL
============================================================ */

function FishSchool() {

  return (
    <>
      {Array.from({
        length: 24,
      }).map((_, index) => (

        <Fish
          key={index}
          index={index}
        />

      ))}
    </>
  );
}

function Fish({ index }) {

  const ref = useRef();

  const start = useMemo(
    () => ({
      x:
        -25 +
        Math.random() * 50,

      y:
        -1 +
        Math.random() * 9,

      z:
        -25 +
        Math.random() * 40,
    }),
    []
  );

  useFrame(
    (state, delta) => {

      if (!ref.current)
        return;

      ref.current.position.x +=
        delta *
        (0.6 +
          (index % 4) * 0.12);

      ref.current.position.y +=
        Math.sin(
          state.clock.elapsedTime *
            1.5 +
            index
        ) *
        delta *
        0.15;

      if (
        ref.current.position.x >
        27
      ) {
        ref.current.position.x =
          -27;
      }

    }
  );

  return (
    <group
      ref={ref}
      position={[
        start.x,
        start.y,
        start.z,
      ]}
    >

      {/* BODY */}

      <mesh
        scale={[
          0.5,
          0.18,
          0.15,
        ]}
      >

        <sphereGeometry
          args={[
            1,
            12,
            8,
          ]}
        />

        <meshStandardMaterial
          color={
            index % 3 === 0
              ? "#a8c8b7"
              : "#638d8d"
          }
        />

      </mesh>

      {/* TAIL */}

      <mesh
        position={[
          -0.5,
          0,
          0,
        ]}
        rotation={[
          0,
          0,
          Math.PI / 2,
        ]}
      >

        <coneGeometry
          args={[
            0.25,
            0.5,
            4,
          ]}
        />

        <meshStandardMaterial
          color="#4c7373"
        />

      </mesh>

    </group>
  );
}

/* ============================================================
   CORAL
============================================================ */

function CoralForest() {

  const coral = [];

  for (let i = 0; i < 42; i++) {

    const x =
      Math.sin(i * 4.1) *
      22;

    const z =
      Math.cos(i * 3.3) *
      24;

    coral.push(
      <group
        key={i}
        position={[
          x,
          -8.8,
          z,
        ]}
      >

        {[0, 1, 2].map(
          (branch) => (

            <mesh
              key={branch}
              position={[
                (branch - 1) *
                  0.2,
                0.8,
                0,
              ]}
              rotation={[
                0,
                branch * 0.5,
                (branch - 1) *
                  0.2,
              ]}
            >

              <cylinderGeometry
                args={[
                  0.08,
                  0.14,
                  1.8 +
                    branch *
                      0.4,
                  8,
                ]}
              />

              <meshStandardMaterial
                color={
                  branch % 2
                    ? "#27695e"
                    : "#315f69"
                }
              />

            </mesh>

          )
        )}

      </group>
    );
  }

  return <>{coral}</>;
}

/* ============================================================
   DEEP SEA ROCKS
============================================================ */

function DeepSeaRocks({
  depth,
}) {

  const rocks = [];

  for (let i = 0; i < 55; i++) {

    const x =
      Math.sin(i * 4.2) *
      25;

    const z =
      Math.cos(i * 2.7) *
      28;

    const scale =
      0.3 +
      (i % 4) * 0.28;

    rocks.push(
      <mesh
        key={i}
        position={[
          x,
          -9.8 +
            scale * 0.2,
          z,
        ]}
        scale={scale}
        castShadow
      >

        <dodecahedronGeometry
          args={[
            1,
            0,
          ]}
        />

        <meshStandardMaterial
          color={
            depth > 400
              ? "#102a32"
              : i % 2
                ? "#153e42"
                : "#1c4647"
          }
          roughness={1}
        />

      </mesh>
    );
  }

  return <>{rocks}</>;
}

/* ============================================================
   BIOLUMINESCENT LIFE
============================================================ */

function BioluminescentLife() {

  const organisms = [];

  for (let i = 0; i < 50; i++) {

    organisms.push(
      <group
        key={i}
        position={[
          (Math.random() - 0.5) *
            50,

          -2 -
            Math.random() * 8,

          -5 -
            Math.random() * 35,
        ]}
      >

        <mesh>

          <sphereGeometry
            args={[
              0.025 +
                Math.random() *
                  0.08,
              8,
              8,
            ]}
          />

          <meshStandardMaterial
            color="#50e8ee"
            emissive="#20dce5"
            emissiveIntensity={5}
          />

        </mesh>

        {i % 6 === 0 && (
          <pointLight
            color="#1edce5"
            intensity={1}
            distance={2}
          />
        )}

      </group>
    );
  }

  return <>{organisms}</>;
}

/* ============================================================
   WATER PARTICLES
============================================================ */

function OceanParticles({
  depth,
}) {

  const amount =
    depth < 220
      ? 180
      : depth < 400
        ? 270
        : 380;

  const particles = [];

  for (
    let i = 0;
    i < amount;
    i++
  ) {

    particles.push(
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) *
            55,

          Math.random() *
              22 -
            12,

          (Math.random() - 0.5) *
            60,
        ]}
      >

        <sphereGeometry
          args={[
            0.01 +
              Math.random() *
                0.035,
            5,
            5,
          ]}
        />

        <meshBasicMaterial
          color={
            depth > 400
              ? "#61edf2"
              : "#9be2e5"
          }
          transparent
          opacity={
            depth > 400
              ? 0.42
              : 0.2
          }
        />

      </mesh>
    );
  }

  return <>{particles}</>;
}

/* ============================================================
   SONAR
============================================================ */

function Sonar() {

  return (
    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/20">

      <div className="absolute inset-2 rounded-full border border-cyan-200/10" />

      <div className="absolute inset-4 rounded-full border border-cyan-200/10" />

      <div className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_#7af5ff]" />

      <div className="absolute left-1/2 top-1/2 h-px w-6 origin-left -rotate-45 bg-cyan-300/50" />

    </div>
  );
}

/* ============================================================
   SECTION TITLE
============================================================ */

function SectionTitle({
  code,
  title,
  subtitle,
}) {

  return (
    <div>

      <div className="flex items-center gap-3 text-[8px] uppercase tracking-[0.24em] text-cyan-200/30">

        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

        {code}

      </div>

      <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] md:text-7xl">
        {title}
      </h2>

      <p className="mt-4 text-[8px] uppercase tracking-[0.18em] text-cyan-100/20">
        {subtitle}
      </p>

    </div>
  );
}

/* ============================================================
   CONTACT BUTTON
============================================================ */

function ContactButton({
  href,
  icon,
  text,
}) {

  return (
    <a
      href={href}
      target={
        href.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel={
        href.startsWith("http")
          ? "noreferrer"
          : undefined
      }
      className="flex items-center gap-3 border border-cyan-100/10 px-5 py-3 text-[8px] uppercase tracking-[0.15em] text-cyan-100/40 transition hover:bg-cyan-100 hover:text-[#021116]"
    >

      {icon}

      {text}

    </a>
  );
}