"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
}

export const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.5, // Slow drift velocity
          dy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((p, index) => {
        // Move particle
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Mouse interaction (gentle attraction)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (200 - distance) / 200;
            const directionMultiplier = 0.05; // Strength
            p.dx += forceDirectionX * force * directionMultiplier;
            p.dy += forceDirectionY * force * directionMultiplier;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fill();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
            if (dist < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 * (1 - dist / 150)})`;
                ctx.lineWidth = 1;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
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
    <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10 bg-white overflow-hidden">
      <canvas ref={canvasRef} className="block" />
      
      {/* Subtle Mesh Overlay for texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.08) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};
