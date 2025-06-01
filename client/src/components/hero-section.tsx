import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    console.log('Scrolling to projects');
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToAbout = () => {
    console.log('Scrolling to about');
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center animate-fade-in">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, ich bin <span className="text-gradient">Max Paasch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Zwischen Code und Kreativität.
            </p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mein digitales Portfolio für eine Bewerbung auf ein Studium in Mediendesigninformatik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-glow"
            >
              Meine Projekte
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToAbout}
              className="px-8 py-4 glassmorphism hover:bg-white/10 border-white/10 text-foreground font-semibold"
            >
              Über mich
            </Button>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/bewerbungsfoto-max-paasch.jpeg" 
            alt="Max Paasch - Professional portrait" 
            className="rounded-2xl shadow-2xl animate-float w-full max-w-md mx-auto"
          />
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
