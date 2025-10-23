import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Box } from '@react-three/drei';

const Fan = ({ position = [0, 0, 0], isOn }) => {
    const fanRef = useRef();

    // Rotate the fan blades only when isOn is true
    useFrame((state, delta) => {
        if (fanRef.current && isOn) {
            fanRef.current.rotation.y += delta * 5; // Adjust speed
        }
    });

    return (
        <group position={position}>
            {/* Fan pole hanging from ceiling */}
            <Cylinder args={[0.05, 0.05, 0.5, 16]} position={[0, -0.25, 0]}>
                <meshStandardMaterial color="silver" />
            </Cylinder>

            {/* Fan base */}
            <Cylinder args={[0.4, 0.4, 0.05, 32]} position={[0, -0.5, 0]}>
                <meshStandardMaterial color="gray" />
            </Cylinder>

            {/* Fan blades */}
            <group ref={fanRef} position={[0, -0.5, 0]}>
                <Box args={[0.8, 0.05, 0.1]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="white" />
                </Box>
                <Box args={[0.8, 0.05, 0.1]} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <meshStandardMaterial color="white" />
                </Box>
                <Box args={[0.8, 0.05, 0.1]} position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>
                    <meshStandardMaterial color="white" />
                </Box>
                <Box args={[0.8, 0.05, 0.1]} position={[0, 0, 0]} rotation={[0, 3 * Math.PI / 2, 0]}>
                    <meshStandardMaterial color="white" />
                </Box>
            </group>
        </group>
    );
};

export default Fan;
