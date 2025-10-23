import React from 'react';
import { Sphere, Cylinder } from '@react-three/drei';

const Light = ({ position = [0, 0, 0], isOn }) => {
    const intensity = isOn ? 1.5 : 0.1; // Bright when on, dim when off
    const lightColor = isOn ? "yellow" : "darkgray";

    return (
        <group position={position}>
            {/* Hanging rod */}
            <Cylinder args={[0.02, 0.02, 0.2, 16]} position={[0, 0.1, 0]}>
                <meshStandardMaterial color="silver" />
            </Cylinder>

            {/* Light bulb */}
            <Sphere args={[0.15, 16, 16]} position={[0, -0.05, 0]}>
                <meshStandardMaterial color={lightColor} emissive={lightColor} emissiveIntensity={intensity} />
            </Sphere>

            {/* Optional fixture base */}
            <Cylinder args={[0.1, 0.1, 0.02, 16]} position={[0, 0.2, 0]}>
                <meshStandardMaterial color="silver" />
            </Cylinder>
        </group>
    );
};

export default Light;
