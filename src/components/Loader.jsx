import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 12,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 20,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;