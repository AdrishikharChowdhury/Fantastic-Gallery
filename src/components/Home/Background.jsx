
import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const Background = ({ children }) => {
  const canvasRef = useRef(null);
  const neatRef = useRef(null);

  useEffect(() => {
    const config = {
      colors: [
        { color: "#FFFFFF", enabled: true },
        { color: "#EFE2CE", enabled: true },
        { color: "#D5ECEB", enabled: true },
        { color: "#E4E4E4", enabled: true },
        { color: "#F6FFFF", enabled: true },
      ],
      speed: 2,
      horizontalPressure: 4,
      verticalPressure: 5,
      waveFrequencyX: 4,
      waveFrequencyY: 3,
      waveAmplitude: 2,
      shadows: 4,
      highlights: 7,
      colorBrightness: 1,
      colorSaturation: 0,
      wireframe: false,
      colorBlending: 7,
      backgroundColor: "#00A2FF",
      backgroundAlpha: 1,
      grainScale: 100,
      grainSparsity: 0,
      grainIntensity: 0.05,
      grainSpeed: 0.3,
      resolution: 0.5,
      yOffset: 0,
    };

    if (canvasRef.current) {
      neatRef.current = new NeatGradient({
        ref: canvasRef.current,
        ...config,
      });
    }

    return () => {
      neatRef.current?.destroy();
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default Background;
