"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  PerspectiveCamera,
  Text,
  RoundedBox,
  ContactShadows,
} from "@react-three/drei";

import { useRef, useState } from "react";
import * as THREE from "three";

function Laptop({ mouse }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const targetX = mouse.current.y * 0.18;
    const targetY = mouse.current.x * 0.25;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.05
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.05
    );

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={group} rotation={[-0.12, 0.1, 0]}>
      {/* Screen */}
      <RoundedBox
        args={[3.8, 2.4, 0.12]}
        radius={0.12}
        smoothness={5}
        position={[0, 1.2, 0]}
      >
        <meshStandardMaterial
          color="#181916"
          metalness={0.7}
          roughness={0.25}
        />
      </RoundedBox>

      {/* Screen glass */}
      <mesh position={[0, 1.2, -0.07]}>
        <planeGeometry args={[3.45, 2.05]} />

        <meshStandardMaterial
          color="#91a89c"
          emissive="#26372d"
          emissiveIntensity={0.45}
          roughness={0.2}
          metalness={0.2}
        />
      </mesh>

      {/* Code lines */}
      {[0, 1, 2, 3, 4].map((item) => (
        <mesh
          key={item}
          position={[-1.25 + (item % 2) * 0.25, 1.65 - item * 0.28, -0.1]}
        >
          <planeGeometry args={[1.8 - item * 0.18, 0.035]} />

          <meshStandardMaterial color="#d8e8c9" />
        </mesh>
      ))}

      {/* Laptop base */}
      <RoundedBox
        args={[4.3, 0.25, 2.8]}
        radius={0.1}
        smoothness={5}
        position={[0, -0.15, 0.6]}
      >
        <meshStandardMaterial
          color="#242620"
          metalness={0.8}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Keyboard */}
      <RoundedBox
        args={[3.4, 0.08, 1.9]}
        radius={0.04}
        smoothness={4}
        position={[0, 0.02, 0.55]}
      >
        <meshStandardMaterial
          color="#35382f"
          roughness={0.45}
        />
      </RoundedBox>
    </group>
  );
}

function FloatingCode({ position, rotation = [0, 0, 0] }) {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.6}
    >
      <group position={position} rotation={rotation}>
        <RoundedBox
          args={[1.6, 1, 0.08]}
          radius={0.06}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#22241f"
            metalness={0.5}
            roughness={0.4}
          />
        </RoundedBox>

        <Text
          position={[0, 0.2, -0.06]}
          fontSize={0.13}
          color="#d6dfca"
          anchorX="center"
          anchorY="middle"
        >
          {"{ code: true }"}
        </Text>

        <Text
          position={[0, -0.05, -0.06]}
          fontSize={0.09}
          color="#788977"
          anchorX="center"
          anchorY="middle"
        >
          FULL STACK
        </Text>
      </group>
    </Float>
  );
}

function FloatingSphere({ position, color }) {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1}
    >
      <mesh position={position}>
        <sphereGeometry args={[0.25, 32, 32]} />

        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
}

function SceneContent({ mouse }) {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 1, 8]}
        fov={42}
      />

      <ambientLight intensity={1.2} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={3}
      />

      <pointLight
        position={[-5, 2, 3]}
        intensity={2}
        color="#a9c4ac"
      />

      <Environment preset="city" />

      <Float
        speed={1.2}
        rotationIntensity={0.08}
        floatIntensity={0.3}
      >
        <Laptop mouse={mouse} />
      </Float>

      <FloatingCode
        position={[-3.1, 1.7, -1]}
        rotation={[0, 0.15, -0.12]}
      />

      <FloatingCode
        position={[3, 0.1, -1.4]}
        rotation={[0, -0.2, 0.08]}
      />

      <FloatingSphere
        position={[-3, -1.4, 0]}
        color="#d0bc80"
      />

      <FloatingSphere
        position={[3, 1.8, -0.5]}
        color="#82947b"
      />

      <FloatingSphere
        position={[2.2, -1.6, 0.8]}
        color="#b7c5b0"
      />

      {/* Ground */}
      <mesh
        position={[0, -2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[20, 20]} />

        <meshStandardMaterial
          color="#d8d8c8"
          roughness={1}
        />
      </mesh>

      <ContactShadows
        position={[0, -1.95, 0]}
        opacity={0.35}
        scale={10}
        blur={2}
      />
    </>
  );
}

export default function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    mouse.current.x = event.clientX / window.innerWidth - 0.5;
    mouse.current.y = event.clientY / window.innerHeight - 0.5;
  };

  return (
    <div
      className="h-full w-full"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        dpr={[1, 1.8]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <SceneContent mouse={mouse} />
      </Canvas>
    </div>
  );
}