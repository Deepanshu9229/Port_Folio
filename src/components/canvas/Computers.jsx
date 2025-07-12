import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// 3D Computer Component
const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 1.2 : 1.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.8 : 1}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <pointLight intensity={isMobile ? 8 : 10} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2.5, -2.2] : [0, -3.2, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// 2D Computer Fallback
const Computer2D = ({ isMobile }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="computer-fallback">
        <svg
          width={isMobile ? "200" : "300"}
          height={isMobile ? "150" : "225"}
          viewBox="0 0 300 225"
          className="opacity-40"
        >
          {/* Monitor */}
          <rect
            x="50"
            y="30"
            width="200"
            height="120"
            rx="8"
            fill="#1a1a1a"
            stroke="#915EFF"
            strokeWidth="2"
          />
          {/* Screen */}
          <rect x="60" y="40" width="180" height="100" rx="4" fill="#0a0a0a" />
          {/* Stand */}
          <rect x="140" y="150" width="20" height="40" fill="#333" />
          {/* Base */}
          <rect x="120" y="190" width="60" height="10" rx="5" fill="#333" />
          {/* Screen glow */}
          <rect
            x="65"
            y="45"
            width="170"
            height="90"
            rx="2"
            fill="url(#screenGlow)"
          />
          {/* Screen Text */}
          <text
            x="150"
            y="85"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
            fontSize={isMobile ? "12" : "14"}
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            Open on laptop for
          </text>
          <text
            x="150"
            y="105"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
            fontSize={isMobile ? "12" : "14"}
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            better experience
          </text>
          <defs>
            <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#915EFF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#915EFF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#915EFF" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

// Main Canvas Component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // ✅ Show 2D computer on mobile
  if (isMobile) {
    return <Computer2D isMobile={true} />;
  }

  // ✅ Show 3D model on larger screens (desktop/laptop)
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
