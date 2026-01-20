"use client";

import { useEffect, useRef } from "react";

export const FluidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const pointsRef = useRef<{ x: number, y: number, ox: number, oy: number, vx: number, vy: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const spacing = 40;
    const mouseRadius = 150;
    const spring = 0.03;
    const friction = 0.95;

    const resizeCanvas = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      
      pointsRef.current = [];
      for (let x = 0; x <= width + spacing; x += spacing) {
        for (let y = 0; y <= height + spacing; y += spacing) {
          pointsRef.current.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const mouse = mouseRef.current;
      const points = pointsRef.current;

      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
      ctx.lineWidth = 0.5;

      points.forEach((p) => {
        // Distance to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - dist) / mouseRadius;
          const tx = p.x - Math.cos(angle) * force * 40;
          const ty = p.y - Math.sin(angle) * force * 40;
          p.vx += (tx - p.x) * 0.1;
          p.vy += (ty - p.y) * 0.1;
        }

        // Return to origin
        p.vx += (p.ox - p.x) * spring;
        p.vy += (p.oy - p.y) * spring;
        
        p.vx *= friction;
        p.vy *= friction;
        
        p.x += p.vx;
        p.y += p.vy;

        // Draw interactive mesh point
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + 1, p.y + 1);
      });
      ctx.stroke();

      // Connect lines for a digital fabric feel
      ctx.beginPath();
      ctx.strokeStyle = "rgba(109, 40, 217, 0.03)"; // Subtle brand primary
      for (let i = 0; i < points.length; i++) {
          const p = points[i];
          // Simple grid connection logic
          if (i % (Math.floor(height / spacing) + 1) !== 0) {
              const pNext = points[i - 1];
              if (pNext) {
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(pNext.x, pNext.y);
              }
          }
      }
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20 opacity-40" />
    </div>
  );
};
