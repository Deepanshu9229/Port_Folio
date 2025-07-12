import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

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

// Fallback 2D Computer Component
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
          <rect
            x="60"
            y="40"
            width="180"
            height="100"
            rx="4"
            fill="#0a0a0a"
          />
          {/* Stand */}
          <rect
            x="140"
            y="150"
            width="20"
            height="40"
            fill="#333"
          />
          {/* Base */}
          <rect
            x="120"
            y="190"
            width="60"
            height="10"
            rx="5"
            fill="#333"
          />
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

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    // Check for mobile and low-performance devices
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // Performance detection
    const checkPerformance = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        setIsLowPerformance(true);
        return;
      }

      // Check for mobile GPU indicators
      const renderer = gl.getParameter(gl.RENDERER);
      const vendor = gl.getParameter(gl.VENDOR);
      
      const isMobileGPU = /mobile|android|arm|mali|adreno|powervr|tegra/i.test(renderer + vendor);
      const hasLimitedMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      
      setIsLowPerformance(isMobileGPU || hasLimitedMemory || mediaQuery.matches);
    };

    checkPerformance();
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      setIsLowPerformance(event.matches || isLowPerformance);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Show 2D fallback for low-performance devices
  if (isLowPerformance) {
    return <Computer2D isMobile={isMobile} />;
  }

  return (
    <Canvas
      frameloop='demand'
      shadows={!isMobile}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: !isMobile,
        powerPreference: "high-performance"
      }}
      onCreated={() => setModelLoaded(true)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={!isMobile}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;