import { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Database, 
  Globe, 
  Zap
} from 'lucide-react';

const expertise = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern frameworks like React, Next.js, and Vue.',
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive designs that provide exceptional user experiences.',
    skills: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Styled Components'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Developing robust server-side solutions and APIs to power your applications.',
    skills: ['Node.js', 'Express', 'Python', 'GraphQL', 'REST APIs'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications that work seamlessly on all devices.',
    skills: ['React Native', 'Flutter', 'PWA', 'Responsive Design'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Globe,
    title: 'Web Optimization',
    description: 'Optimizing websites for speed, SEO, and accessibility to reach wider audiences.',
    skills: ['SEO', 'Performance', 'Accessibility', 'Core Web Vitals'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Performance Tuning',
    description: 'Enhancing application performance for lightning-fast user experiences.',
    skills: ['Caching', 'CDN', 'Lazy Loading', 'Code Splitting'],
    color: 'from-yellow-500 to-orange-500',
  },
];

const technologies = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Next.js', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'MongoDB', level: 80 },
  { name: 'PostgreSQL', level: 78 },
  { name: 'GraphQL', level: 75 },
];

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="expertise" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              My Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Skills &{' '}
              <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I offer a wide range of services to help bring your digital vision to life.
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative glass rounded-2xl p-6 h-full transition-all duration-300 ${
                  hoveredIndex === index ? 'border-purple-500/30' : ''
                }`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{item.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity -z-10`} />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Proficiency */}
          <div className="glass rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Technology <span className="text-gradient">Proficiency</span>
              </h3>
              <p className="text-gray-400">My expertise level in various technologies</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-purple-400 text-sm">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
