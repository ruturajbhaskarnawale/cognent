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

    // Set initial mouse position to center so it doesn't start at 0,0
    mouseRef.current = {
        x: container.offsetWidth / 2,
        y: container.offsetHeight / 2
    };

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 100);
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.3, // Even slower drift
          dy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Draw Gradient Spotlight (Mouse Follower)
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 600);
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.08)"); // Brand Primary Blue (Very faint)
      gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.05)"); // Brand Secondary Purple
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Fade to transparent
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles within the logic
      particles.forEach((p, index) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Attraction logic
        if (distance < 300) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (300 - distance) / 300;
            const directionMultiplier = 0.05; 
            p.dx += forceDirectionX * force * directionMultiplier;
            p.dy += forceDirectionY * force * directionMultiplier;
        }

        // Draw particle (darker if closer to mouse)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Particles are darker near mouse, lighter further away
        const opacity = distance < 300 ? 0.3 : 0.05;
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.fill();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
            // Only connect if close enough AND within mouse radius (intelligent connection)
            if (dist < 120 && (distance < 400 || Math.random() > 0.95)) {
                ctx.beginPath();
                // Lines fade out with distance and are stronger near mouse
                const lineOpacity = (1 - dist / 120) * (distance < 300 ? 0.2 : 0.02);
                ctx.strokeStyle = `rgba(0, 0, 0, ${lineOpacity})`;
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
    <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10 bg-brand-muted/30 overflow-hidden">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};
