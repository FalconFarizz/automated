import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

const Gate = ({ position = [0, 0, 0], isOpen }) => {
    const leftGateRef = useRef();
    const rightGateRef = useRef();

    // Animate gates opening/closing
    useFrame(() => {
        const targetAngle = isOpen ? Math.PI / 2 : 0; // 90° open
        if (leftGateRef.current) {
            leftGateRef.current.rotation.y = THREE.MathUtils.lerp(
                leftGateRef.current.rotation.y,
                -targetAngle,
                0.05
            );
        }
        if (rightGateRef.current) {
            rightGateRef.current.rotation.y = THREE.MathUtils.lerp(
                rightGateRef.current.rotation.y,
                targetAngle,
                0.05
            );
        }
    });

    return (
        <group position={position}>
            {/* Gate Posts */}
            <Cylinder args={[0.1, 0.1, 2, 16]} position={[-1.05, 1, 0]}>
                <meshStandardMaterial color="#800000" metalness={0.8} roughness={0.3} />
            </Cylinder>
            <Cylinder args={[0.1, 0.1, 2, 16]} position={[1.05, 1, 0]}>
                <meshStandardMaterial color="#800000" metalness={0.8} roughness={0.3} />
            </Cylinder>

            {/* Left Gate Door */}
            <group ref={leftGateRef} position={[-1, 0, 0]} rotation={[0, 0, 0]}>
                <Box args={[1, 1.5, 0.05]} position={[0.5, 0.75, 0]}>
                    <meshStandardMaterial color="#B22222" metalness={0.9} roughness={0.2} />
                </Box>
                {/* Decorative vertical bars */}
                {[...Array(4)].map((_, i) => (
                    <Cylinder
                        key={i}
                        args={[0.03, 0.03, 1.5, 16]}
                        position={[0.25 + i * 0.15, 0.75, 0.03]}
                    >
                        <meshStandardMaterial color="#FF4500" metalness={1} roughness={0.1} />
                    </Cylinder>
                ))}
            </group>

            {/* Right Gate Door */}
            <group ref={rightGateRef} position={[1, 0, 0]} rotation={[0, 0, 0]}>
                <Box args={[1, 1.5, 0.05]} position={[-0.5, 0.75, 0]}>
                    <meshStandardMaterial color="#B22222" metalness={0.9} roughness={0.2} />
                </Box>
                {/* Decorative vertical bars */}
                {[...Array(4)].map((_, i) => (
                    <Cylinder
                        key={i}
                        args={[0.03, 0.03, 1.5, 16]}
                        position={[-0.25 - i * 0.15, 0.75, 0.03]}
                    >
                        <meshStandardMaterial color="#FF4500" metalness={1} roughness={0.1} />
                    </Cylinder>
                ))}
            </group>
        </group>
    );
};

export default Gate;
