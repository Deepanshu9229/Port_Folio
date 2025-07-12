import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
    
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// 2D Fallback Component
const Ball2D = ({ icon, name }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#915EFF] to-[#4c1d95] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
        <img 
          src={icon} 
          alt={name}
          className="w-12 h-12 object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const BallCanvas = ({ icon, name }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      const isMobileDevice = mediaQuery.matches;
      
      // Check for low performance indicators
      const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      const isSlowConnection = navigator.connection && navigator.connection.effectiveType === 'slow-2g';
      
      setIsMobile(isMobileDevice);
      setIsLowPerformance(isMobileDevice || isLowMemory || isSlowConnection);
    };

    checkDevice();
    
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", checkDevice);
    
    return () => mediaQuery.removeEventListener("change", checkDevice);
  }, []);

  // Use 2D fallback for mobile and low-performance devices
  if (isLowPerformance) {
    return <Ball2D icon={icon} name={name} />;
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: false, // Disable for better performance
        powerPreference: "high-performance"
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;