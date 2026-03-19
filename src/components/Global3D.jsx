import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles, MeshDistortMaterial } from '@react-three/drei';

const WireframeNode = ({ position, color, speed, scale }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {Math.random() > 0.5 ? <icosahedronGeometry args={[1, 1]} /> : <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
};

const GlowingCore = () => {
  const coreRef = useRef();
  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.2;
      coreRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={1.5}>
      <mesh ref={coreRef} position={[5, 2, -3]} scale={2}>
        <octahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial 
          color="#3b82f6" 
          wireframe={false} 
          distort={0.4} 
          speed={2} 
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

const Global3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#3b82f6" />
        
        {/* Deep tech space background */}
        <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1.5} />
        
        {/* Floating tech energy particles */}
        <Sparkles count={150} scale={20} size={3} speed={0.4} opacity={0.6} color="#3b82f6" />

        {/* Big Morphing Node */}
        <GlowingCore />

        {/* Floating Wireframe Data Nodes creating a "Network" feel */}
        {Array.from({ length: 30 }).map((_, i) => (
          <WireframeNode 
            key={i}
            position={[
              (Math.random() - 0.5) * 25,
              (Math.random() - 0.5) * 25,
              (Math.random() - 0.5) * 10 - 2
            ]}
            color={Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6"}
            speed={Math.random() * 0.5 + 0.2}
            scale={Math.random() * 0.5 + 0.2}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default Global3D;
