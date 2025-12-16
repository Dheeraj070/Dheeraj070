import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const PhysicsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(isPaused);

  // Sync ref with state for the animation loop
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    // Physics constants
    const PARTICLE_COUNT = 200;
    const CONNECTION_DISTANCE = 100;
    const MOUSE_RADIUS = 200;
    const FORCE_FACTOR = 0.05;

    // Mouse state
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
        // Cyan/Blue tint
        const blue = Math.floor(Math.random() * 100 + 155);
        this.color = `rgba(100, 200, ${blue}, 0.6)`;
      }

      update() {
        // Mouse Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Repulsion force
        if (distance < MOUSE_RADIUS) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;
          
          this.vx -= directionX * FORCE_FACTOR;
          this.vy -= directionY * FORCE_FACTOR;
        }

        // Movement
        this.x += this.vx;
        this.y += this.vy;

        // Friction
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Boundary reflection
        if (this.x < 0 || this.x > width) {
            this.vx = -this.vx;
            this.x = Math.max(0, Math.min(this.x, width));
        }
        if (this.y < 0 || this.y > height) {
            this.vy = -this.vy;
            this.y = Math.max(0, Math.min(this.y, height));
        }
        
        // Random drift to keep scene alive
        this.vx += (Math.random() - 0.5) * 0.02;
        this.vy += (Math.random() - 0.5) * 0.02;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    const particles: Particle[] = [];
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();

    // Animation Loop
    const animate = () => {
      if (!isPausedRef.current) {
        if (ctx) {
          ctx.clearRect(0, 0, width, height);

          // Draw connections
          for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < CONNECTION_DISTANCE) {
                ctx.beginPath();
                const opacity = 1 - distance / CONNECTION_DISTANCE;
                ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.15})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }

          // Draw particles
          particles.forEach((particle) => {
            particle.update();
            particle.draw();
          });
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event Handlers
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom right, #020617, #0f172a, #0b1120)' }}
      />
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-800/50 backdrop-blur-md border border-white/10 text-cyan-400 hover:bg-slate-700/50 hover:scale-110 transition-all duration-300 shadow-lg group"
        aria-label={isPaused ? "Play Animation" : "Pause Animation"}
        title={isPaused ? "Resume Animation" : "Pause Animation"}
      >
        {isPaused ? 
          <Play size={24} className="fill-cyan-400/20" /> : 
          <Pause size={24} className="fill-cyan-400/20" />
        }
      </button>
    </>
  );
};

export default PhysicsBackground;