'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const Blob = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Animamos una rotación lenta para aportar movimiento extra
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          color="#7346A1"
          speed={4}
          distort={0.45}
          roughness={0.1}
          metalness={0.8}
          emissive="#5491FF"
          emissiveIntensity={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
};

export default function HeroBlob() {
  return (
    <div className="w-full h-[600px] relative pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#5491FF" />
        <pointLight position={[5, 10, 5]} intensity={1.5} color="#7346A1" />
        <Blob />
      </Canvas>
      {/* Glow extra en el fondo del blob */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] -z-10 scale-75"></div>
    </div>
  );
}
