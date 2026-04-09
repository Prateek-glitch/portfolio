"use client";
import { useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = memo(() => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      // ⚠️ THIS LINE FIXES THE INVISIBLE SHIELD:
      className="fixed inset-0 -z-50 pointer-events-none"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#c94b4b" },
          links: {
            color: "#c94b4b",
            distance: 180,
            enable: true,
            opacity: 0.2,
            width: 1,
            triangles: { enable: true, opacity: 0.05 },
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "out" },
          },
          number: { density: { enable: true, area: 800 }, value: 65 },
          opacity: { value: { min: 0.2, max: 0.5 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2 } },
        },
        interactivity: {
          events: {
            // We disable hover mode here so it doesn't try to capture mouse events globally
            onHover: { enable: false, mode: "grab" }, 
          },
        },
        detectRetina: true,
      }}
    />
  );
});

BackgroundParticles.displayName = "BackgroundParticles";
export default BackgroundParticles;