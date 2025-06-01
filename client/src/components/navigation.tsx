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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glassmorphism-strong border-b border-white/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-2xl font-black text-gradient cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => scrollToSection('home')}>Portfolio - Max Paasch</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="glassmorphism px-6 py-3 rounded-full font-bold text-primary border border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
              Kontakt
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
                Startseite
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors duration-300">
                Über mich
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors duration-300">
                Projekte
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors duration-300">
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
