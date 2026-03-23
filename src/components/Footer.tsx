import { Code2, Heart, ArrowUp } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
  ],
  services: [
    { name: 'Web Development', href: '#expertise' },
    { name: 'UI/UX Design', href: '#expertise' },
    { name: 'Mobile Apps', href: '#expertise' },
    { name: 'Consulting', href: '#contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#hero" onClick={() => scrollToSection('#hero')} className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Dev<span className="text-purple-400">Portfolio</span>
                </span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Crafting beautiful, responsive, and user-friendly websites that help businesses grow and succeed online.
              </p>
              
              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <ArrowUp className="w-4 h-4" />
                </div>
                <span className="text-sm">Back to Top</span>
              </button>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Ahmad. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
