import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.fill();

        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />

      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-purple-300">Available for freelance work</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Ahmad</span>
                <br />
                <span className="text-gray-400">Web Developer</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                I craft beautiful, responsive, and user-friendly websites using modern technologies. 
                Let's build something amazing together!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white border-0 shadow-glow hover:shadow-glow-lg transition-all"
                >
                  Get In Touch
                </Button>
                <Button
                  onClick={() => scrollToSection('#projects')}
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  View My Work
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="/resume.pdf"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl blur-3xl" />
                
                {/* Image Container */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/hero-image.jpg"
                    alt="Ahmad - Web Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass rounded-2xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">5+</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Years</p>
                      <p className="text-gray-400 text-sm">Experience</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Badge */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white border-2 border-background">R</div>
                      <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-xs font-bold text-white border-2 border-background">TS</div>
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white border-2 border-background">TW</div>
                    </div>
                    <span className="text-white text-sm font-medium">Tech Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
