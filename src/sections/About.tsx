import { useEffect, useRef, useState } from 'react';
import { Code, Users, Award, Coffee } from 'lucide-react';

const stats = [
  { icon: Code, value: 50, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 30, suffix: '+', label: 'Happy Clients' },
  { icon: Award, value: 5, suffix: '', label: 'Years Experience' },
  { icon: Coffee, value: 1000, suffix: '+', label: 'Cups of Coffee' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Passionate About Creating{' '}
              <span className="text-gradient">Digital Experiences</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm a full-stack web developer with a passion for building beautiful, 
              functional, and user-centered digital experiences.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                <img
                  src="/hero-image.jpg"
                  alt="About Me"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              
              {/* Experience Card */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gradient">5+</p>
                  <p className="text-gray-400 text-sm">Years of<br />Experience</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Transforming Ideas Into{' '}
                <span className="text-purple-400">Reality</span>
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                modern, responsive, and high-performance websites. My journey began with a 
                curiosity for how things work on the web, which evolved into a passion for 
                crafting digital solutions that make a difference.
              </p>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest technologies. Whether it's a simple landing page or a complex 
                web application, I approach each project with dedication and attention to detail.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'MongoDB'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-purple-400" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
