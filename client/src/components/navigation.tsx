import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glassmorphism' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gradient cursor-pointer" onClick={() => scrollToSection('home')}>
            Portfolio - Maximilian Paasch
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors duration-300">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors duration-300">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors duration-300">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-primary transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors duration-300">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors duration-300">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
