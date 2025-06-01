import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Code, Palette, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/8 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <span className="px-6 py-3 text-sm font-bold glassmorphism-strong rounded-full text-primary border border-primary/30 shadow-lg">
              Portfolio 2025 • Media Design Informatics
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
            <span className="block text-gradient mb-4">Max Paasch</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold text-muted-foreground">
              Zwischen Code & Kreativität
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Digitale Innovation durch die Fusion von Technologie und Design. 
            Mein Portfolio für das Studium der Mediendesigninformatik.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="glassmorphism-strong hover:scale-110 transition-all duration-300 px-12 py-6 text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent text-white border-0 shadow-2xl group"
            >
              Projekte entdecken
              <ArrowDown className="ml-3 h-6 w-6 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg"
              className="glassmorphism-strong hover:glassmorphism transition-all duration-300 border-white/30 px-12 py-6 text-xl font-bold hover:scale-110"
            >
              Über mich erfahren
            </Button>
          </div>
        </div>

        {/* Enhanced feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glassmorphism-strong p-10 rounded-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="mb-8 relative">
                <Code className="h-20 w-20 text-primary mx-auto group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-black mb-6 text-gradient">Full-Stack Development</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                React, TypeScript, Node.js, Express, PostgreSQL und moderne KI-APIs für skalbare Webanwendungen
              </p>
            </div>
          </div>
          
          <div className="glassmorphism-strong p-10 rounded-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden" style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="mb-8 relative">
                <Palette className="h-20 w-20 text-secondary mx-auto group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-black mb-6 text-gradient">UI/UX Design</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Benutzerzentrierte Gestaltung, Prototyping, Designsysteme und responsive Interfaces
              </p>
            </div>
          </div>
          
          <div className="glassmorphism-strong p-10 rounded-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden" style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="mb-8 relative">
                <Sparkles className="h-20 w-20 text-accent mx-auto group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-black mb-6 text-gradient">KI & Innovation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                OpenAI GPT-4, Claude, Discord Bots und intelligente Automatisierungslösungen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
