import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import House from './House';
import Controller from './Controller';
import './App.css';

function App() {
  const [fanOn, setFanOn] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [tvOn, setTvOn] = useState(false);
  const [lightOn, setLightOn] = useState(false);

  const toggleFan = () => setFanOn((prev) => !prev);
  const toggleGate = () => setGateOpen((prev) => !prev);
  const toggleTv = () => setTvOn((prev) => !prev);
  const toggleLight = () => setLightOn((prev) => !prev);

  return (
    <div className="App" style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <House fanOn={fanOn} gateOpen={gateOpen} tvOn={tvOn} lightOn={lightOn} />
        <OrbitControls />
      </Canvas>
      <Controller
        onFan={toggleFan}
        onGate={toggleGate}
        onTV={toggleTv}
        onLight={toggleLight}
        fanOn={fanOn}
        gateOpen={gateOpen}
        tvOn={tvOn}
        lightOn={lightOn}
      />
    </div>
  );
}

export default App;
