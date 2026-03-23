import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';

const milestones = [
  {
    year: '2019',
    title: 'Started My Journey',
    description: 'Began learning web development through online courses and self-study. Built my first HTML/CSS website.',
    icon: GraduationCap,
    type: 'education',
  },
  {
    year: '2020',
    title: 'First Freelance Project',
    description: 'Completed my first paid project for a local business. Learned the importance of client communication.',
    icon: Briefcase,
    type: 'work',
  },
  {
    year: '2021',
    title: 'Joined TechStart Inc.',
    description: 'Started as a Junior Frontend Developer. Worked on multiple React projects and improved my skills.',
    icon: Rocket,
    type: 'work',
  },
  {
    year: '2022',
    title: 'Full-Stack Certification',
    description: 'Earned certification in Full-Stack Development. Expanded my skills to include backend technologies.',
    icon: Award,
    type: 'education',
  },
  {
    year: '2023',
    title: 'Senior Developer Role',
    description: 'Promoted to Senior Developer. Started mentoring junior developers and leading project teams.',
    icon: Briefcase,
    type: 'work',
  },
  {
    year: '2024',
    title: 'Freelance Success',
    description: 'Transitioned to full-time freelancing. Completed 50+ projects for clients worldwide.',
    icon: Rocket,
    type: 'work',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              My Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Career{' '}
              <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A look at my professional journey and the milestones that shaped my career.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                      index !== 0 ? 'lg:mt-12' : ''
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`${
                        isEven ? 'lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'
                      }`}
                    >
                      <div
                        className={`glass rounded-2xl p-6 hover-lift ${
                          isEven ? 'lg:ml-auto' : ''
                        }`}
                      >
                        <div
                          className={`flex items-center gap-4 mb-4 ${
                            isEven ? 'lg:flex-row-reverse' : ''
                          }`}
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                            <milestone.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <span className="text-purple-400 font-semibold">
                              {milestone.year}
                            </span>
                            <h3 className="text-xl font-bold text-white">
                              {milestone.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div
                      className={`absolute left-1/2 top-6 -translate-x-1/2 hidden lg:block ${
                        isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-background shadow-glow" />
                    </div>

                    {/* Mobile Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-transparent lg:hidden" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
