import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Luxe Fashion E-Commerce',
    description: 'A premium e-commerce platform with modern UI, seamless checkout experience, and real-time inventory management.',
    image: '/project-1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'E-Commerce',
  },
  {
    id: 2,
    title: 'FinTrack Mobile App',
    description: 'A comprehensive financial tracking application with intuitive dashboards, expense categorization, and budget planning.',
    image: '/project-2.jpg',
    tags: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Mobile App',
  },
  {
    id: 3,
    title: 'Aurum Analytics Dashboard',
    description: 'Enterprise-grade analytics platform with data visualization, real-time metrics, and customizable reporting.',
    image: '/project-3.jpg',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'SaaS',
  },
  {
    id: 4,
    title: 'Creative Agency Portfolio',
    description: 'Bold and dynamic portfolio website for a creative agency featuring immersive animations and unique interactions.',
    image: '/project-4.jpg',
    tags: ['Vue.js', 'GSAP', 'Three.js', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Portfolio',
  },
];

const categories = ['All', 'E-Commerce', 'Mobile App', 'SaaS', 'Portfolio'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] -translate-y-1/2" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              My Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured{' '}
              <span className="text-gradient">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-glow'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative glass rounded-2xl overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/5">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/5">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-xl border-white/10">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/5">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
