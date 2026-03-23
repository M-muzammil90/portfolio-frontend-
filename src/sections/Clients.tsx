import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: '/client-1.jpg',
    content: 'Working with Ahmad was an absolute pleasure. He delivered our project on time and exceeded all our expectations. His attention to detail and technical expertise are truly remarkable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mohammed Ali',
    role: 'Founder, Digital Solutions',
    image: '/client-2.jpg',
    content: 'Ahmad transformed our outdated website into a modern, high-performing platform. Our conversion rates have increased by 40% since the launch. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Marketing Director, Global Brands',
    image: '/client-3.jpg',
    content: 'The level of professionalism and creativity Ahmad brings to every project is outstanding. He understood our vision perfectly and delivered a website that truly represents our brand.',
    rating: 5,
  },
];

const clients = [
  'TechStart Inc.',
  'Digital Solutions',
  'Global Brands',
  'Creative Studio',
  'Innovation Labs',
  'Future Tech',
];

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clients" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Happy{' '}
              <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="glass rounded-3xl p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Testimonial Content */}
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div className="text-left">
                    <p className="text-white font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'w-8 bg-purple-500'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider">
              Trusted by amazing companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="text-xl lg:text-2xl font-bold text-white/20 hover:text-white/40 transition-colors cursor-default"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
