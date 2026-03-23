import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt: 'Learn how to build scalable and maintainable web applications using React and TypeScript best practices.',
    image: '/blog-1.jpg',
    author: 'Ahmad',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Mastering React Hooks: A Comprehensive Guide',
    excerpt: 'Deep dive into React Hooks and learn how to use them effectively in your projects.',
    image: '/blog-2.jpg',
    author: 'Ahmad',
    date: 'Mar 10, 2024',
    readTime: '12 min read',
    category: 'React',
  },
  {
    id: 3,
    title: 'UI/UX Design Principles for Developers',
    excerpt: 'Essential design principles every developer should know to create better user experiences.',
    image: '/blog-3.jpg',
    author: 'Ahmad',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    category: 'Design',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              My Blog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Latest{' '}
              <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sharing my knowledge and insights about web development, design, and technology.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group glass rounded-2xl overflow-hidden hover-lift"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/80 text-white text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{post.author}</span>
                    </div>
                    
                    <a
                      href="#"
                      className="flex items-center gap-1 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
