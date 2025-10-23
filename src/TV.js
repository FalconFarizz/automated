import React from 'react';
import { Box, MeshReflectorMaterial } from '@react-three/drei';

const TV = ({ position = [0, 0, 0], isOn }) => {
    const screenColor = isOn ? "#1E90FF" : "#222222"; // glowing blue when on
    const emissive = isOn ? "#1E90FF" : "#000000";

    return (
        <group position={position}>
            {/* TV Stand / Base */}
            <Box args={[1.5, 0.05, 0.5]} position={[0, -0.05, 0]}>
                <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.3} />
            </Box>

            {/* TV Screen */}
            <Box args={[1.2, 0.75, 0.02]} position={[0, 0.38, 0]}>
                <meshStandardMaterial
                    color={screenColor}
                    metalness={0.3}
                    roughness={0.1}
                    emissive={emissive}
                    emissiveIntensity={isOn ? 0.5 : 0}
                />
            </Box>

            {/* TV Frame / Bezel */}
            <Box args={[1.24, 0.79, 0.04]} position={[0, 0.38, 0.02]}>
                <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.2} />
            </Box>

            {/* Optional: subtle reflection / glass effect */}
            <Box args={[1.2, 0.75, 0.01]} position={[0, 0.38, 0.021]}>
                <MeshReflectorMaterial
                    blur={[100, 50]}
                    mixBlur={0.5}
                    mixStrength={1}
                    resolution={512}
                    mirror={0.3}
                    roughness={0.05}
                    color="#000000"
                />
            </Box>
        </group>
    );
};

export default TV;
