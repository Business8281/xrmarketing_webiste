import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

export function Hero3D() {
    const meshRef = useRef<THREE.Mesh>(null);
    const starsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (meshRef.current) {
            // Gentle rotation for main sphere
            meshRef.current.rotation.x = t * 0.2;
            meshRef.current.rotation.y = t * 0.3;

            // Mouse interaction (subtle follow)
            const mouseX = (state.mouse.x * Math.PI) / 10;
            const mouseY = (state.mouse.y * Math.PI) / 10;
            meshRef.current.rotation.x += mouseY * 0.05;
            meshRef.current.rotation.y += mouseX * 0.05;
        }

        if (starsRef.current) {
            // Moving stars animation
            starsRef.current.rotation.y += 0.0005;
            starsRef.current.rotation.x += 0.0002;
        }
    });

    return (
        <>
            <color attach="background" args={['#000000']} />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.0} color="#60a5fa" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c084fc" />
            <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} penumbra={1} />

            {/* Background Particles with Moving Animation */}
            <group ref={starsRef}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </group>

            {/* Main Abstract Object */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
                    <MeshDistortMaterial
                        color="#111"
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        metalness={0.9}
                        roughness={0.1}
                        distort={0.4} // Strength of distortion
                        speed={2} // Speed of distortion
                    />
                </Sphere>
            </Float>

            {/* Post Processing */}
            <EffectComposer>
                <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} radius={0.8} />
            </EffectComposer>
        </>
    );
}
