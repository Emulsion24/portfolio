"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  Text,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/* =========================================================
   TREE
========================================================= */

function Tree({ position = [0, 0, 0], scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.1, 8]} />
        <meshStandardMaterial color="#655341" roughness={1} />
      </mesh>

      <mesh position={[0, 1.25, 0]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial color="#718467" roughness={1} />
      </mesh>

      <mesh position={[0.25, 1.55, 0.05]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#7e906e" roughness={1} />
      </mesh>

      <mesh position={[-0.25, 1.45, 0.05]}>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshStandardMaterial color="#687b61" roughness={1} />
      </mesh>
    </group>
  );
}

/* =========================================================
   HOUSE
========================================================= */

function House({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* House */}
      <RoundedBox
        args={[2.2, 1.5, 1.8]}
        radius={0.08}
        smoothness={5}
        position={[0, 0.75, 0]}
      >
        <meshStandardMaterial
          color="#d5bb96"
          roughness={0.95}
        />
      </RoundedBox>

      {/* Roof */}
      <mesh
        position={[0, 1.75, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <coneGeometry args={[1.7, 1, 4]} />
        <meshStandardMaterial color="#655241" roughness={1} />
      </mesh>

      {/* Door */}
      <RoundedBox
        args={[0.42, 0.85, 0.04]}
        radius={0.03}
        smoothness={4}
        position={[0, 0.43, 0.92]}
      >
        <meshStandardMaterial color="#604c3d" />
      </RoundedBox>

      {/* Window */}
      <RoundedBox
        args={[0.48, 0.42, 0.04]}
        radius={0.02}
        smoothness={3}
        position={[-0.62, 0.95, 0.92]}
      >
        <meshStandardMaterial
          color="#9cb6b2"
          emissive="#7eaaa4"
          emissiveIntensity={0.2}
        />
      </RoundedBox>

      {/* Small lamp */}
      <pointLight
        position={[0.2, 0.8, 1]}
        intensity={0.6}
        color="#ffd88a"
      />
    </group>
  );
}

/* =========================================================
   LAPTOP
========================================================= */

function Laptop({ position = [0, 0, 0] }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.08;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
  });

  return (
    <group ref={group} position={position}>
      {/* screen */}
      <RoundedBox
        args={[2.5, 1.6, 0.12]}
        radius={0.08}
        smoothness={5}
        rotation={[-0.08, 0, 0]}
        position={[0, 1.3, 0]}
      >
        <meshStandardMaterial
          color="#151714"
          metalness={0.7}
          roughness={0.2}
        />
      </RoundedBox>

      {/* screen */}
      <mesh position={[0, 1.3, -0.07]}>
        <planeGeometry args={[2.2, 1.3]} />
        <meshStandardMaterial
          color="#25372e"
          emissive="#1f352c"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* code */}
      {[0, 1, 2, 3].map((line) => (
        <mesh
          key={line}
          position={[
            -0.7,
            1.7 - line * 0.22,
            -0.09,
          ]}
        >
          <planeGeometry
            args={[
              0.9 + (line % 2) * 0.25,
              0.035,
            ]}
          />

          <meshStandardMaterial color="#b6d5b8" />
        </mesh>
      ))}

      {/* base */}
      <RoundedBox
        args={[2.9, 0.2, 1.9]}
        radius={0.08}
        smoothness={4}
        position={[0, 0.2, 0.5]}
      >
        <meshStandardMaterial
          color="#272a25"
          metalness={0.65}
          roughness={0.3}
        />
      </RoundedBox>

      {/* keyboard */}
      <RoundedBox
        args={[2.25, 0.06, 1.25]}
        radius={0.02}
        smoothness={3}
        position={[0, 0.34, 0.48]}
      >
        <meshStandardMaterial color="#363933" />
      </RoundedBox>
    </group>
  );
}

/* =========================================================
   PROJECT SCREEN
========================================================= */

function ProjectScreen({
  position,
  rotation,
  title,
  number,
}) {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.15}
      floatIntensity={0.35}
    >
      <group position={position} rotation={rotation}>
        <RoundedBox
          args={[2.8, 1.8, 0.12]}
          radius={0.08}
          smoothness={5}
        >
          <meshStandardMaterial
            color="#1b1d19"
            metalness={0.5}
            roughness={0.3}
          />
        </RoundedBox>

        <mesh position={[0, 0, -0.08]}>
          <planeGeometry args={[2.45, 1.5]} />
          <meshStandardMaterial
            color="#37453b"
            emissive="#27352b"
            emissiveIntensity={0.35}
          />
        </mesh>

        <Text
          position={[-1, 0.5, -0.15]}
          fontSize={0.15}
          color="#e8e7dc"
          anchorX="left"
        >
          {number}
        </Text>

        <Text
          position={[-1, 0.15, -0.15]}
          fontSize={0.13}
          color="#d4dccd"
          anchorX="left"
          maxWidth={1.9}
        >
          {title}
        </Text>

        <mesh position={[-0.7, -0.35, -0.15]}>
          <planeGeometry args={[0.9, 0.04]} />
          <meshStandardMaterial color="#b7d0bc" />
        </mesh>

        <mesh position={[-0.7, -0.48, -0.15]}>
          <planeGeometry args={[1.25, 0.04]} />
          <meshStandardMaterial color="#879a8b" />
        </mesh>

        <mesh position={[-0.7, -0.61, -0.15]}>
          <planeGeometry args={[0.7, 0.04]} />
          <meshStandardMaterial color="#66776b" />
        </mesh>
      </group>
    </Float>
  );
}

/* =========================================================
   FLOATING ORBS
========================================================= */

function Orb({ position, color, size = 0.18 }) {
  return (
    <Float
      speed={2}
      rotationIntensity={0.7}
      floatIntensity={0.8}
    >
      <mesh position={position}>
        <sphereGeometry args={[size, 24, 24]} />

        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

/* =========================================================
   WORLD
========================================================= */

function World({ scrollRef }) {
  const world = useRef();
  const camera = useRef();

  useFrame((state) => {
    const scroll = scrollRef.current;

    /* camera journey */

    const targetCamera = new THREE.Vector3();

    if (scroll < 0.22) {
      targetCamera.set(0, 3.4, 10);
    } else if (scroll < 0.45) {
      targetCamera.set(0.5, 3.1, 7);
    } else if (scroll < 0.7) {
      targetCamera.set(2.2, 2.6, 6);
    } else {
      targetCamera.set(0, 2, 8);
    }

    camera.current.position.lerp(
      targetCamera,
      0.045
    );

    camera.current.lookAt(0, 1.1, 0);

    /* world motion */

    if (world.current) {
      world.current.rotation.y =
        THREE.MathUtils.lerp(
          world.current.rotation.y,
          scroll * 0.55,
          0.05
        );

      world.current.position.y =
        THREE.MathUtils.lerp(
          world.current.position.y,
          -scroll * 1.1,
          0.04
        );
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[0, 3.4, 10]}
        fov={42}
      />

      <ambientLight intensity={1.2} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={3}
      />

      <pointLight
        position={[-4, 3, 3]}
        intensity={1.6}
        color="#b8d5b9"
      />

      <Environment preset="city" />

      <group ref={world}>

        {/* ground */}

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.15, 0]}
        >
          <planeGeometry args={[30, 30]} />

          <meshStandardMaterial
            color="#c2c3af"
            roughness={1}
          />
        </mesh>

        {/* village */}

        <group position={[0, 0, 0]}>
          <House position={[0, 0, 0]} />

          <Tree
            position={[-3, 0, -1]}
            scale={1.1}
          />

          <Tree
            position={[3, 0, -0.5]}
            scale={0.85}
          />

          <Tree
            position={[-3.5, 0, 1]}
            scale={0.75}
          />

          <Tree
            position={[3.5, 0, 1.3]}
            scale={1}
          />

          {/* path */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 2]}
          >
            <planeGeometry args={[1.1, 7]} />
            <meshStandardMaterial
              color="#ad9d76"
              roughness={1}
            />
          </mesh>
        </group>

        {/* workstation */}

        <group position={[0, -0.1, -2]}>
          <RoundedBox
            args={[5.2, 0.25, 3.2]}
            radius={0.08}
            smoothness={4}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial
              color="#6b604f"
              roughness={0.9}
            />
          </RoundedBox>

          <Laptop position={[0, 0, 0]} />
        </group>

        {/* project gallery */}

        <ProjectScreen
          position={[-3, 1.9, -2]}
          rotation={[0, 0.16, -0.06]}
          title="Business Platform"
          number="01"
        />

        <ProjectScreen
          position={[3.1, 2.8, -2.5]}
          rotation={[0, -0.18, 0.06]}
          title="Client Application"
          number="02"
        />

        <ProjectScreen
          position={[0, 4.1, -1.5]}
          rotation={[0, 0, 0]}
          title="Real Estate"
          number="03"
        />

        {/* orbs */}

        <Orb
          position={[-4, 3, -1]}
          color="#d1bb79"
          size={0.2}
        />

        <Orb
          position={[4, 4, -1]}
          color="#77917a"
          size={0.24}
        />

        <Orb
          position={[4, 0.8, 0]}
          color="#aab9a7"
          size={0.15}
        />

      </group>

      <ContactShadows
        position={[0, -0.14, 0]}
        scale={15}
        blur={2}
        opacity={0.3}
      />
    </>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PortfolioWorld() {
  const scrollRef = useRef(0);

  useFrame(() => {});

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <World scrollRef={scrollRef} />
    </Canvas>
  );
}