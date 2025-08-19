import React, { useMemo } from "react"
import "./AnimatedBackground.css";


const AnimatedBackground = ({ count = 30 }) => {
  const particles = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const size = Math.floor(Math.random() * 5) + 5;
      const opacity = Math.random();
      const hue = Math.floor(Math.random() * 360);
      const duration = 60;
      const delay = -i * 0.2;

      const sx = `${Math.floor(Math.random() * 90)}vw`;
      const sy = `${Math.floor(Math.random() * 90)}vh`;
      const sz = `${Math.floor(Math.random() * 100)}px`;
      const ex = `${Math.floor(Math.random() * 90)}vw`;
      const ey = `${Math.floor(Math.random() * 90)}vh`;
      const ez = `${Math.floor(Math.random() * 100)}px`;

      items.push({ size, opacity, hue, duration, delay, sx, sy, sz, ex, ey, ez });
    }
    return items;
  }, [count]);

  return (
    <div className="AnimatedBackground_container" aria-hidden="true">
      {particles.map((p, idx) => (
        <div
          key={idx}
          className="AnimatedBackground_particle"
          style={{
            "--sx": p.sx,
            "--sy": p.sy,
            "--sz": p.sz,
            "--ex": p.ex,
            "--ey": p.ey,
            "--ez": p.ez,
            "--hue": p.hue,
            "--opacity": p.opacity,
            "--size": `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
