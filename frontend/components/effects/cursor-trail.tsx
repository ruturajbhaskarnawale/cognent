"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  angle: number;
  distance: number;
}

export const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    // Google Antigravity colors - vibrant and playful
    const colors = [
      "#4285F4", // Google Blue
      "#EA4335", // Google Red
      "#FBBC04", // Google Yellow
      "#34A853", // Google Green
      "#9C27B0", // Purple
      "#FF6D00", // Orange
    ];

    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: Math.random() * 60 + 60,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
        angle: angle,
        distance: 0,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Check if mouse is inside the container
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const mouse = mouseRef.current;
        const dx = x - mouse.lastX;
        const dy = y - mouse.lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
        mouse.x = x;
        mouse.y = y;
        
        // Create particles based on movement
        if (distance > 5) {
          const particleCount = Math.min(Math.floor(distance / 10), 3);
          for (let i = 0; i < particleCount; i++) {
            createParticle(x, y);
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        // Radial movement - particles spiral outward
        p.distance += 1.2;
        p.angle += 0.05; // Spiral effect
        
        p.x += Math.cos(p.angle) * 1.5;
        p.y += Math.sin(p.angle) * 1.5;
        
        p.life++;
        p.rotation += p.rotationSpeed;
        
        // Gentle friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        const lifeRatio = 1 - p.life / p.maxLife;
        
        if (p.life >= p.maxLife) return false;

        // Draw confetti-style particle
        ctx.save();
        ctx.globalAlpha = lifeRatio * 0.9;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        // Draw as a small rectangle (confetti piece)
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        
        ctx.restore();

        return true;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    
    resizeCanvas();
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
