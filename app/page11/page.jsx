"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  
  Mail,
  Pause,
  Play,
  TrainFront,
  X,
} from "lucide-react";
import{FaGithub as Github, FaLinkedin as Linkedin} from "react-icons/fa";

/* ============================================================
   PROJECT / STATION DATA
============================================================ */

const stations = [
  {
    id: "dhenu",
    code: "DM",
    number: "01",
    name: "Dhenu Mahima",
    type: "Digital Platform",
    description:
      "A complete digital platform connecting content, people and administration into one digital experience.",
    stack: ["Next.js", "Supabase", "Payments"],
    url: "https://www.dhenumahima.com/",
  },
  {
    id: "gau",
    code: "GS",
    number: "02",
    name: "Gau Samman",
    type: "Organization System",
    description:
      "A structured digital system designed around information, participation and administration.",
    stack: ["Next.js", "Supabase", "Admin"],
    url: "https://www.gausamman.cloud/",
  },
  {
    id: "rezillion",
    code: "RZ",
    number: "03",
    name: "Rezillion",
    type: "Energy Platform",
    description:
      "A focused digital experience for an energy company built around clarity and trust.",
    stack: ["React", "Responsive", "UI"],
    url: "https://rezillion.energy/",
  },
  {
    id: "blink",
    code: "BC",
    number: "04",
    name: "BlinkCharts",
    type: "Data Product",
    description:
      "A data-focused interface where information needs to remain fast, readable and useful.",
    stack: ["React", "Charts", "Data"],
    url: "https://blinkcharts.com/",
  },
  {
    id: "greenzee",
    code: "GZ",
    number: "05",
    name: "Greenzee Jobs",
    type: "Job Platform",
    description:
      "A job platform designed around opportunity discovery and a straightforward user journey.",
    stack: ["React", "Node.js", "Database"],
    url: "https://www.greenzeejobs.com/",
  },
  {
    id: "vizion",
    code: "VB",
    number: "06",
    name: "Vizion Build",
    type: "Real Estate",
    description:
      "A visual landing experience created to communicate a real-estate concept clearly.",
    stack: ["UI", "Landing", "Motion"],
    url: "https://vizion-build.vercel.app/",
  },
];

/*
  The train travels through these 3D points.

  X = left / right
  Z = depth
  Y = height
*/

const route = [
  new THREE.Vector3(-22, 0, 8),
  new THREE.Vector3(-13, 0, -7),
  new THREE.Vector3(-3, 0, 5),
  new THREE.Vector3(8, 0, -7),
  new THREE.Vector3(19, 0, 6),
  new THREE.Vector3(27, 0, -2),
];

/* ============================================================
   PAGE
============================================================ */

export default function Page() {
  const [currentStation, setCurrentStation] = useState(0);
  const [targetStation, setTargetStation] = useState(0);
  const [moving, setMoving] = useState(true);
  const [autoMode, setAutoMode] = useState(true);
  const [showInfo, setShowInfo] = useState(true);

  const station = stations[currentStation];

  /*
    Start the railway automatically.

    The train begins moving shortly after the page opens.
  */

  useEffect(() => {
    const timer = setTimeout(() => {
      goToStation(1);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  /*
    Automatically continue from station to station.
  */

  useEffect(() => {
    if (!autoMode || moving) return;

    const timer = setTimeout(() => {
      const next =
        currentStation >= stations.length - 1
          ? 0
          : currentStation + 1;

      goToStation(next);
    }, 4500);

    return () => clearTimeout(timer);
  }, [currentStation, moving, autoMode]);

  function goToStation(index) {
    if (index === currentStation && !moving) return;

    setTargetStation(index);
    setMoving(true);
    setShowInfo(false);
  }

  function onTrainArrive(index) {
    setCurrentStation(index);
    setMoving(false);
    setShowInfo(true);
  }

  function nextStation() {
    const next =
      currentStation >= stations.length - 1
        ? 0
        : currentStation + 1;

    setAutoMode(false);
    goToStation(next);
  }

  function previousStation() {
    const previous =
      currentStation <= 0
        ? stations.length - 1
        : currentStation - 1;

    setAutoMode(false);
    goToStation(previous);
  }

  return (
    <main className="min-h-screen bg-[#172019] text-[#e7e3d5]">
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <header className="fixed left-0 top-0 z-[100] flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#101510]/80 px-5 backdrop-blur-xl md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center border border-white/30">
            <TrainFront size={16} />
          </div>

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Shavandeb Kaiti
            </div>

            <div className="mt-1 text-[7px] uppercase tracking-[0.2em] text-white/30">
              Railway portfolio
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.18em]">
            <span
              className={`h-2 w-2 rounded-full ${
                moving
                  ? "animate-pulse bg-orange-400"
                  : "bg-green-500"
              }`}
            />

            {moving ? "Train moving" : "At station"}
          </div>

          <div className="text-[8px] uppercase tracking-[0.18em] text-white/30">
            Route 001
          </div>
        </div>

        <button
          onClick={() => setAutoMode((value) => !value)}
          className="flex items-center gap-2 border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.15em] transition hover:bg-white hover:text-black"
        >
          {autoMode ? (
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

      {/* =====================================================
          3D RAILWAY WORLD
      ====================================================== */}

      <section className="relative h-screen min-h-[650px] overflow-hidden">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: false,
          }}
        >
          <PerspectiveCamera
            makeDefault
            position={[0, 16, 28]}
            fov={45}
          />

          {/* LIGHTING */}

          <ambientLight intensity={1.2} />

          <directionalLight
            castShadow
            position={[10, 20, 10]}
            intensity={3}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          <directionalLight
            position={[-15, 8, -10]}
            intensity={1}
          />

          <Environment preset="sunset" />

          {/* WORLD */}

          <RailwayWorld
            route={route}
            stations={stations}
            currentStation={currentStation}
          />

          {/* TRAIN */}

          <SteamTrain
            route={route}
            targetStation={targetStation}
            moving={moving}
            onArrive={onTrainArrive}
          />

          {/* CAMERA */}

          <OrbitControls
            enablePan={false}
            minDistance={14}
            maxDistance={45}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2.15}
          />

          <ContactShadows
            position={[0, -0.05, 0]}
            opacity={0.45}
            scale={70}
            blur={2}
            far={30}
          />
        </Canvas>

        {/* =================================================
            HERO INFORMATION
        ================================================== */}

        <div className="pointer-events-none absolute left-5 top-24 z-20 md:left-8">
          <div className="text-[8px] uppercase tracking-[0.28em] text-white/30">
            Digital Railway
          </div>

          <h1 className="mt-3 max-w-lg text-4xl font-medium tracking-[-0.06em] md:text-6xl">
            Take the train
            <br />
            through my work.
          </h1>

          <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/35">
            Every station represents something I have built. The train
            automatically travels through the route.
          </p>
        </div>

        {/* =================================================
            STATION HUD
        ================================================== */}

        <div className="absolute bottom-24 left-5 z-30 md:left-8">
          <div className="mb-3 text-[7px] uppercase tracking-[0.22em] text-white/25">
            Current station
          </div>

          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-white/25">
              {station.number}
            </div>

            <div>
              <div className="text-lg font-medium">
                {station.name}
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[0.16em] text-white/25">
                {station.type}
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            MANUAL CONTROLS
        ================================================== */}

        <div className="absolute bottom-6 right-5 z-30 flex items-center gap-2 md:right-8">
          <button
            onClick={previousStation}
            disabled={moving}
            className="flex h-10 w-10 items-center justify-center border border-white/15 bg-[#101510]/70 backdrop-blur transition hover:bg-white hover:text-black disabled:opacity-20"
          >
            <ArrowLeft size={14} />
          </button>

          <button
            onClick={nextStation}
            disabled={moving}
            className="flex h-10 items-center gap-3 border border-white/15 bg-[#101510]/70 px-4 text-[8px] uppercase tracking-[0.18em] backdrop-blur transition hover:bg-white hover:text-black disabled:opacity-20"
          >
            Next station
            <ArrowRight size={13} />
          </button>
        </div>

        {/* =================================================
            STATION INFO
        ================================================== */}

        {showInfo && (
          <div className="absolute right-5 top-24 z-30 w-[290px] border border-white/10 bg-[#101510]/75 p-5 backdrop-blur-xl md:right-8 md:w-[340px]">
            <div className="flex items-center justify-between">
              <span className="text-[7px] uppercase tracking-[0.2em] text-white/25">
                Arrived
              </span>

              <button
                onClick={() => setShowInfo(false)}
                className="text-white/30 hover:text-white"
              >
                <X size={13} />
              </button>
            </div>

            <div className="mt-7">
              <div className="text-[8px] uppercase tracking-[0.2em] text-green-400">
                {station.code} / {station.number}
              </div>

              <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em]">
                {station.name}
              </h2>

              <p className="mt-4 text-xs leading-relaxed text-white/40">
                {station.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {station.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 px-2 py-1 text-[7px] uppercase tracking-[0.12em] text-white/40"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={station.url}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[8px] uppercase tracking-[0.18em]"
              >
                Visit project

                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        )}

        {/* =================================================
            STATION SELECTOR
        ================================================== */}

        <div className="absolute bottom-6 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-1 border border-white/10 bg-[#101510]/70 p-1 backdrop-blur-xl md:flex">
          {stations.map((item, index) => (
            <button
              key={item.id}
              disabled={moving}
              onClick={() => {
                setAutoMode(false);
                goToStation(index);
              }}
              className={`flex h-8 min-w-9 items-center justify-center px-2 text-[7px] transition ${
                index === currentStation
                  ? "bg-white text-black"
                  : "text-white/35 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.code}
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          MOBILE STATION CONTROL
      ====================================================== */}

      <section className="border-t border-white/10 bg-[#101510] px-5 py-10 md:hidden">
        <div className="mb-5 text-[8px] uppercase tracking-[0.2em] text-white/25">
          Choose destination
        </div>

        <div className="grid grid-cols-3 gap-2">
          {stations.map((item, index) => (
            <button
              key={item.id}
              disabled={moving}
              onClick={() => {
                setAutoMode(false);
                goToStation(index);
              }}
              className={`border p-4 text-left ${
                index === currentStation
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-white/40"
              }`}
            >
              <div className="font-mono text-[8px] opacity-30">
                {item.number}
              </div>

              <div className="mt-5 text-sm">
                {item.code}
              </div>

              <div className="mt-1 text-[6px] uppercase tracking-[0.12em] opacity-40">
                {item.name}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          SYSTEM SECTION
      ====================================================== */}

      <section className="border-t border-white/10 bg-[#0d100e] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1250px]">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                Engine room
              </div>

              <h2 className="mt-6 text-4xl font-medium tracking-[-0.06em] md:text-6xl">
                What powers
                <br />
                the journey.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <SystemRow
                number="01"
                title="Frontend"
                text="Interfaces, interactions and responsive experiences."
              />

              <SystemRow
                number="02"
                title="Backend"
                text="Application logic, APIs and services."
              />

              <SystemRow
                number="03"
                title="Database"
                text="Structured information and persistent data."
              />

              <SystemRow
                number="04"
                title="Deployment"
                text="Turning the finished application into a real production system."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section className="border-t border-white/10 bg-[#080a09] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1250px]">
          <div className="text-[8px] uppercase tracking-[0.25em] text-white/20">
            Final destination
          </div>

          <div className="mt-20 border-y border-white/10 py-14">
            <div className="text-[15vw] font-black uppercase leading-[0.7] tracking-[-0.1em] md:text-[9vw]">
              NEXT
            </div>

            <div className="ml-[15vw] mt-5 text-[15vw] font-black uppercase leading-[0.7] tracking-[-0.1em] md:text-[9vw]">
              STOP?
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <p className="max-w-md text-sm leading-relaxed text-white/30">
              Have a website, application or software idea? Let's build the
              next destination.
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
    </main>
  );
}

/* ============================================================
   3D RAILWAY WORLD
============================================================ */

function RailwayWorld({
  route,
  stations,
  currentStation,
}) {
  return (
    <>
      {/* GROUND */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        position={[0, -0.15, 0]}
      >
        <planeGeometry args={[100, 100]} />

        <meshStandardMaterial
          color="#3e5139"
          roughness={1}
        />
      </mesh>

      {/* GRAVEL BED */}

      <RailBed route={route} />

      {/* RAILS */}

      <Rails route={route} />

      {/* SLEEPERS */}

      <Sleepers route={route} />

      {/* STATIONS */}

      {stations.map((station, index) => (
        <Station3D
          key={station.id}
          station={station}
          position={route[index]}
          active={index === currentStation}
        />
      ))}

      {/* TREES */}

      <Trees />

      {/* DISTANT MOUNTAINS */}

      <Mountains />
    </>
  );
}

/* ============================================================
   RAIL BED
============================================================ */

function RailBed({ route }) {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        route,
        false,
        "catmullrom",
        0.35
      ),
    [route]
  );

  return (
    <mesh
      position={[0, -0.08, 0]}
      rotation={[0, 0, 0]}
      receiveShadow
    >
      <tubeGeometry
        args={[curve, 180, 1.35, 8, false]}
      />

      <meshStandardMaterial
        color="#34332d"
        roughness={1}
      />
    </mesh>
  );
}

/* ============================================================
   RAILS
============================================================ */

function Rails({ route }) {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        route,
        false,
        "catmullrom",
        0.35
      ),
    [route]
  );

  const railA = offsetCurve(curve, -0.62);
  const railB = offsetCurve(curve, 0.62);

  return (
    <>
      <RailMesh curve={railA} />
      <RailMesh curve={railB} />
    </>
  );
}

function RailMesh({ curve }) {
  return (
    <mesh castShadow receiveShadow>
      <tubeGeometry
        args={[curve, 220, 0.08, 8, false]}
      />

      <meshStandardMaterial
        color="#9a9a91"
        metalness={0.8}
        roughness={0.3}
      />
    </mesh>
  );
}

/* ============================================================
   SLEEPERS
============================================================ */

function Sleepers({ route }) {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        route,
        false,
        "catmullrom",
        0.35
      ),
    [route]
  );

  const sleepers = [];

  for (let i = 0; i < 130; i++) {
    const t = i / 129;

    const point = curve.getPointAt(t);

    const tangent = curve
      .getTangentAt(t)
      .normalize();

    const angle = Math.atan2(
      tangent.x,
      tangent.z
    );

    sleepers.push(
      <mesh
        key={i}
        position={[
          point.x,
          point.y - 0.12,
          point.z,
        ]}
        rotation={[
          0,
          angle,
          0,
        ]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.8, 0.18, 0.55]} />

        <meshStandardMaterial color="#65482f" />
      </mesh>
    );
  }

  return <>{sleepers}</>;
}

/* ============================================================
   3D STATION
============================================================ */

function Station3D({
  station,
  position,
  active,
}) {
  return (
    <group position={position}>
      {/* PLATFORM */}

      <mesh
        position={[0, 0.25, 2.1]}
        receiveShadow
      >
        <boxGeometry args={[6, 0.45, 3]} />

        <meshStandardMaterial
          color={active ? "#77776e" : "#575750"}
        />
      </mesh>

      {/* PLATFORM EDGE */}

      <mesh
        position={[0, 0.51, 0.65]}
      >
        <boxGeometry args={[6, 0.12, 0.15]} />

        <meshStandardMaterial color="#b7b6aa" />
      </mesh>

      {/* STATION ROOF */}

      <mesh
        position={[0, 3.1, 2.1]}
        castShadow
      >
        <boxGeometry args={[5.4, 0.18, 2.6]} />

        <meshStandardMaterial color="#292a27" />
      </mesh>

      {/* STATION POSTS */}

      {[-2.1, -0.7, 0.7, 2.1].map((x) => (
        <mesh
          key={x}
          position={[x, 1.6, 2.1]}
          castShadow
        >
          <boxGeometry args={[0.15, 2.7, 0.15]} />

          <meshStandardMaterial color="#5c5b51" />
        </mesh>
      ))}

      {/* SIGN */}

      <group position={[0, 3.8, 2.15]}>
        <mesh>
          <boxGeometry args={[3.8, 0.8, 0.1]} />

          <meshStandardMaterial
            color={active ? "#d5c27b" : "#33362f"}
          />
        </mesh>

        <Text
          position={[0, 0, 0.08]}
          fontSize={0.3}
          color={active ? "#141511" : "#d9dbce"}
          anchorX="center"
          anchorY="middle"
        >
          {station.code}
        </Text>
      </group>
    </group>
  );
}

/* ============================================================
   STEAM ENGINE
============================================================ */

function SteamTrain({
  route,
  targetStation,
  moving,
  onArrive,
}) {
  const group = useRef();
  const wheels = useRef([]);
  const steamTimer = useRef(0);

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        route,
        false,
        "catmullrom",
        0.35
      ),
    [route]
  );

  /*
    Station positions along the route.
  */

  const stationProgress = useMemo(() => {
    return route.map((_, index) => {
      return index / (route.length - 1);
    });
  }, [route]);

  const targetProgress =
    stationProgress[targetStation];

  const currentProgressRef = useRef(0);

  useFrame((state, delta) => {
    if (!group.current) return;

    if (moving) {
      const difference =
        targetProgress -
        currentProgressRef.current;

      const speed =
        Math.abs(difference) > 0.35
          ? 0.09
          : 0.045;

      currentProgressRef.current +=
        Math.sign(difference) *
        speed *
        delta;

      /*
        Arrived.
      */

      if (
        Math.abs(
          targetProgress -
            currentProgressRef.current
        ) < 0.006
      ) {
        currentProgressRef.current =
          targetProgress;

        onArrive(targetStation);
      }
    }

    const point = curve.getPointAt(
      Math.max(
        0,
        Math.min(
          1,
          currentProgressRef.current
        )
      )
    );

    const tangent = curve
      .getTangentAt(
        Math.max(
          0,
          Math.min(
            1,
            currentProgressRef.current
          )
        )
      )
      .normalize();

    group.current.position.set(
      point.x,
      point.y + 1.05,
      point.z
    );

    /*
      Make the train face the direction
      of the track.
    */

    const angle = Math.atan2(
      tangent.x,
      tangent.z
    );

    group.current.rotation.y = angle;

    /*
      Rotate wheels.
    */

    if (moving) {
      wheels.current.forEach((wheel) => {
        if (wheel) {
          wheel.rotation.x -= delta * 8;
        }
      });
    }

    /*
      Steam particles.
    */

    steamTimer.current += delta;
  });

  return (
    <group ref={group}>
      {/* =====================================================
          MAIN BOILER
      ====================================================== */}

      <mesh
        castShadow
        position={[0, 1.45, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry
          args={[0.85, 0.85, 3.4, 32]}
        />

        <meshStandardMaterial
          color="#202522"
          metalness={0.7}
          roughness={0.28}
        />
      </mesh>

      {/* BOILER FRONT */}

      <mesh
        castShadow
        position={[0, 1.45, 1.75]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry
          args={[0.87, 0.87, 0.22, 32]}
        />

        <meshStandardMaterial
          color="#111412"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* HEADLIGHT */}

      <group position={[0, 2.35, 1.95]}>
        <mesh castShadow>
          <cylinderGeometry
            args={[0.3, 0.25, 0.45, 20]}
          />

          <meshStandardMaterial
            color="#b49b55"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        <pointLight
          color="#ffd77a"
          intensity={12}
          distance={12}
        />
      </group>

      {/* =====================================================
          CAB
      ====================================================== */}

      <mesh
        castShadow
        position={[0, 2.1, -1.8]}
      >
        <boxGeometry args={[2.25, 2.8, 1.8]} />

        <meshStandardMaterial
          color="#191d1a"
          metalness={0.55}
          roughness={0.3}
        />
      </mesh>

      {/* CAB ROOF */}

      <mesh
        castShadow
        position={[0, 3.65, -1.8]}
      >
        <boxGeometry args={[2.7, 0.25, 2.2]} />

        <meshStandardMaterial
          color="#111311"
          metalness={0.5}
        />
      </mesh>

      {/* CAB WINDOWS */}

      {[-0.75, 0.75].map((x) => (
        <mesh
          key={x}
          position={[x, 2.55, -2.73]}
        >
          <boxGeometry args={[0.55, 0.65, 0.05]} />

          <meshStandardMaterial
            color="#101b19"
            metalness={0.2}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* =====================================================
          SMOKE STACK
      ====================================================== */}

      <group position={[0, 2.55, 0.85]}>
        <mesh castShadow>
          <cylinderGeometry
            args={[0.35, 0.28, 1.4, 24]}
          />

          <meshStandardMaterial
            color="#161a17"
            metalness={0.65}
            roughness={0.3}
          />
        </mesh>

        <mesh
          castShadow
          position={[0, 0.7, 0]}
        >
          <cylinderGeometry
            args={[0.55, 0.38, 0.35, 24]}
          />

          <meshStandardMaterial
            color="#121512"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* =====================================================
          DOME
      ====================================================== */}

      <mesh
        castShadow
        position={[0, 2.35, -0.15]}
      >
        <sphereGeometry args={[0.35, 24, 16]} />

        <meshStandardMaterial
          color="#242925"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      {/* =====================================================
          SIDE PIPES
      ====================================================== */}

      {[-1, 1].map((x) => (
        <mesh
          key={x}
          castShadow
          position={[x * 0.88, 0.9, 0.8]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry
            args={[0.13, 0.13, 1.7, 16]}
          />

          <meshStandardMaterial
            color="#756e59"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      ))}

      {/* =====================================================
          WHEELS
      ====================================================== */}

      {[-1, 1].map((x, sideIndex) => (
        <group key={x}>
          {[0.8, -0.7].map((z, wheelIndex) => (
            <mesh
              key={`${sideIndex}-${wheelIndex}`}
              ref={(node) => {
                wheels.current[
                  sideIndex * 2 + wheelIndex
                ] = node;
              }}
              castShadow
              position={[x * 0.96, 0.72, z]}
              rotation={[
                0,
                Math.PI / 2,
                0,
              ]}
            >
              <cylinderGeometry
                args={[0.65, 0.65, 0.18, 32]}
              />

              <meshStandardMaterial
                color="#171a18"
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>
          ))}
        </group>
      ))}

      {/* =====================================================
          CONNECTING ROD
      ====================================================== */}

      <mesh
        position={[1.04, 0.72, 0]}
        castShadow
      >
        <boxGeometry args={[0.08, 0.12, 2.5]} />

        <meshStandardMaterial
          color="#9b8b61"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      <mesh
        position={[-1.04, 0.72, 0]}
        castShadow
      >
        <boxGeometry args={[0.08, 0.12, 2.5]} />

        <meshStandardMaterial
          color="#9b8b61"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* =====================================================
          STEAM
      ====================================================== */}

      <SteamParticles moving={moving} />
    </group>
  );
}

/* ============================================================
   STEAM PARTICLES
============================================================ */

function SteamParticles({ moving }) {
  const particles = useRef([]);

  useFrame((_, delta) => {
    particles.current.forEach((particle, index) => {
      if (!particle) return;

      if (moving) {
        particle.position.y += delta * 0.8;

        particle.scale.addScalar(delta * 0.4);

        if (particle.position.y > 5) {
          particle.position.y = 3.1;

          particle.scale.set(
            0.15,
            0.15,
            0.15
          );
        }
      }
    });
  });

  return (
    <group position={[0, 3.1, 0.85]}>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <mesh
          key={index}
          ref={(node) => {
            particles.current[index] =
              node;
          }}
          position={[
            Math.sin(index) * 0.25,
            index * 0.35,
            Math.cos(index) * 0.2,
          ]}
        >
          <sphereGeometry args={[0.2, 12, 12]} />

          <meshStandardMaterial
            color="#d9ddd6"
            transparent
            opacity={0.22}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ============================================================
   CURVE OFFSET
============================================================ */

function offsetCurve(curve, offset) {
  const points = curve.getPoints(160);

  const result = points.map((point, index) => {
    const next =
      points[Math.min(index + 1, points.length - 1)];

    const tangent = new THREE.Vector3()
      .subVectors(next, point)
      .normalize();

    const side = new THREE.Vector3(
      tangent.z,
      0,
      -tangent.x
    ).normalize();

    return point
      .clone()
      .add(side.multiplyScalar(offset));
  });

  return new THREE.CatmullRomCurve3(
    result,
    false,
    "catmullrom",
    0.3
  );
}

/* ============================================================
   TREES
============================================================ */

function Trees() {
  const trees = [
    [-30, -10],
    [-25, 2],
    [-20, 14],
    [-10, 13],
    [1, 16],
    [12, 14],
    [25, 12],
    [32, 2],
    [28, -12],
    [15, -15],
    [2, -17],
    [-15, -15],
  ];

  return (
    <>
      {trees.map(([x, z], index) => (
        <group key={index} position={[x, 0, z]}>
          <mesh
            position={[0, 1.2, 0]}
            castShadow
          >
            <cylinderGeometry
              args={[0.18, 0.25, 2.4, 8]}
            />

            <meshStandardMaterial color="#59402c" />
          </mesh>

          <mesh
            position={[0, 2.7, 0]}
            castShadow
          >
            <sphereGeometry
              args={[
                1.3 + (index % 3) * 0.3,
                10,
                10,
              ]}
            />

            <meshStandardMaterial
              color={
                index % 2
                  ? "#263b27"
                  : "#30462d"
              }
            />
          </mesh>
        </group>
      ))}
    </>
  );
}

/* ============================================================
   MOUNTAINS
============================================================ */

function Mountains() {
  return (
    <group position={[0, -1, -25]}>
      {Array.from({ length: 9 }).map(
        (_, index) => (
          <mesh
            key={index}
            position={[
              (index - 4) * 9,
              Math.random() * 2,
              0,
            ]}
            rotation={[0, 0, 0]}
          >
            <coneGeometry
              args={[
                7 + Math.random() * 3,
                10 + Math.random() * 5,
                5,
              ]}
            />

            <meshStandardMaterial
              color="#28362b"
              roughness={1}
            />
          </mesh>
        )
      )}
    </group>
  );
}

/* ============================================================
   SYSTEM ROW
============================================================ */

function SystemRow({
  number,
  title,
  text,
}) {
  return (
    <div className="group grid grid-cols-[40px_1fr_auto] gap-5 border-t border-white/10 py-8">
      <span className="font-mono text-[8px] text-white/15">
        {number}
      </span>

      <div>
        <div className="text-xl tracking-[-0.03em]">
          {title}
        </div>

        <p className="mt-2 max-w-lg text-xs leading-relaxed text-white/25">
          {text}
        </p>
      </div>

      <ArrowRight
        size={15}
        className="mt-1 text-white/15 transition-transform group-hover:translate-x-2"
      />
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
      className="flex items-center gap-3 border border-white/10 px-5 py-3 text-[8px] uppercase tracking-[0.15em] text-white/40 transition hover:bg-white hover:text-black"
    >
      {icon}
      {text}
    </a>
  );
}