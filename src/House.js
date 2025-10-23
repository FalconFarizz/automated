// House.jsx
import React from 'react';
import { Box, Cylinder, Plane, MeshReflectorMaterial } from '@react-three/drei';
import Fan from './Fan';
import Gate from './Gate';
import TV from './TV';
import Light from './Light';

const House = ({ fanOn, gateOpen, tvOn, lightOn }) => {
    return (
        <group>
            {/* Ground / Floor */}
            <Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <MeshReflectorMaterial
                    blur={[400, 100]}
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={0.6}
                    color="#a0a0a0"
                    metalness={0.5}
                    roughness={0.5}
                />
            </Plane>

            {/* Main house base */}
            <Box args={[6, 3, 6]} position={[0, 1.5, 0]}>
                <meshStandardMaterial
                    color="#00bfff"
                    transparent
                    opacity={0.25}
                    metalness={0.3}
                    roughness={0.1}
                />
            </Box>

            {/* Front door */}
            <Box args={[1, 2, 0.15]} position={[0, 1, 3.05]}>
                <meshStandardMaterial color="#8B4513" metalness={0.1} roughness={0.3} />
            </Box>

            {/* Windows */}
            <Box args={[1, 1, 0.1]} position={[-2.2, 2, 3.05]}>
                <meshStandardMaterial color="#ffffff" transparent opacity={0.5} emissive="#87CEEB" />
            </Box>
            <Box args={[1, 1, 0.1]} position={[2.2, 2, 3.05]}>
                <meshStandardMaterial color="#ffffff" transparent opacity={0.5} emissive="#87CEEB" />
            </Box>

            {/* Side pillars */}
            <Cylinder args={[0.1, 0.1, 3, 16]} position={[-3, 1.5, 3]}>
                <meshStandardMaterial color="#d9d9d9" metalness={0.8} roughness={0.2} />
            </Cylinder>
            <Cylinder args={[0.1, 0.1, 3, 16]} position={[3, 1.5, 3]}>
                <meshStandardMaterial color="#d9d9d9" metalness={0.8} roughness={0.2} />
            </Cylinder>

            {/* Balcony / Overhang */}
            <Box args={[6.5, 0.1, 1.5]} position={[0, 2.8, 3.75]}>
                <meshStandardMaterial color="#cccccc" metalness={0.3} roughness={0.3} />
            </Box>

            {/* ===== Interior Setup ===== */}

            {/* Fan: hanging from ceiling, center of the room */}
            <Fan position={[0, 2.5, 0]} isOn={fanOn} />

            {/* Lights: only corner lights, center light removed */}
            <Light position={[-2, 2.8, 2]} isOn={lightOn} />
            <Light position={[2, 2.8, 2]} isOn={lightOn} />
            <Light position={[-2, 2.8, -2]} isOn={lightOn} />
            <Light position={[2, 2.8, -2]} isOn={lightOn} />

            {/* Gate outside */}
            <Gate position={[0, 0, -5]} isOpen={gateOpen} />

            {/* TV inside */}
            <TV position={[-2, 1, 1]} isOn={tvOn} />
        </group>
    );
};

export default House;
