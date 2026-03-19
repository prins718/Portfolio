import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, Sparkles } from '@react-three/drei';

const AbstractShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} floatingRange={[-0.2, 0.2]}>
      <mesh ref={meshRef} position={[3, 0, 0]} scale={1.8}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial 
          color="#8b5cf6" 
          envMapIntensity={1} 
          clearcoat={0.8} 
          clearcoatRoughness={0} 
          metalness={0.9} 
          roughness={0.1}
          distort={0.4} 
          speed={2} 
        />
      </mesh>
    </Float>
  );
};

const LittlePrimitives = () => {
  return Array.from({ length: 15 }).map((_, i) => (
    <Float key={i} speed={1 + Math.random() * 2} rotationIntensity={2} floatIntensity={2}>
      <mesh 
        position={[
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5 - 2
        ]}
        scale={Math.random() * 0.4 + 0.1}
      >
        {Math.random() > 0.5 ? <boxGeometry args={[1, 1, 1]} /> : <octahedronGeometry args={[0.8]} />}
        <meshStandardMaterial 
          color={Math.random() > 0.5 ? "#3b82f6" : "#ec4899"} 
          wireframe={Math.random() > 0.3} 
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  ));
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
        
        {/* Animated stars and sparkles */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={15} size={2} speed={0.4} opacity={0.5} />
        
        <AbstractShape />
        <LittlePrimitives />
      </Canvas>
    </div>
  );
};

export default Hero3D;
