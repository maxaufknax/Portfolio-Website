import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    console.log('Scrolling to projects');
    const element = document.getElementById('projects');
    if (element) {
      console.log('Projects element found, scrolling...');
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error('Projects element not found!');
    }
  };

  const scrollToAbout = () => {
    console.log('Scrolling to about');
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
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
            <button 
              onClick={() => {
                console.log('Projects button clicked');
                scrollToProjects();
              }}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-glow rounded-md cursor-pointer relative z-10"
              style={{ pointerEvents: 'all' }}
            >
              Meine Projekte
            </button>
            <button 
              onClick={() => {
                console.log('About button clicked');
                scrollToAbout();
              }}
              className="px-8 py-4 glassmorphism hover:bg-white/10 border border-white/10 text-foreground font-semibold rounded-md cursor-pointer relative z-10"
              style={{ pointerEvents: 'all' }}
            >
              Über mich
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Hauptprofilbild */}
            <img 
              src="/bewerbungsfoto-max-paasch.jpeg" 
              alt="Max Paasch - Professional portrait" 
              className="rounded-2xl shadow-2xl animate-float w-full max-w-sm mx-auto relative z-10"
            />
            
            {/* Animierte Hintergrund-Elemente */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
            
            {/* Animierte Interesse-Icons um das Bild */}
            {/* KI & Machine Learning - oben rechts */}
            <div className="absolute -top-6 -right-6 w-16 h-16 animate-orbit-1">
              <div className="glassmorphism p-3 rounded-xl bg-primary/10 border border-primary/20 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1v6m0 10v6m11-7h-6M7 12H1" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
            </div>
            
            {/* Web Development - rechts */}
            <div className="absolute top-8 -right-8 w-14 h-14 animate-orbit-2">
              <div className="glassmorphism p-3 rounded-xl bg-secondary/10 border border-secondary/20 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8H20V18ZM7 10L5.5 11.5L7 13L6 14L3.5 11.5L6 9L7 10ZM17 10L18.5 11.5L17 13L18 14L20.5 11.5L18 9L17 10Z"/>
                </svg>
              </div>
            </div>
            
            {/* Medienproduktion - unten rechts */}
            <div className="absolute bottom-2 -right-6 w-15 h-15 animate-orbit-3">
              <div className="glassmorphism p-3 rounded-xl bg-accent/10 border border-accent/20 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-9 h-9 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM12 14.5V5.5L18 10L12 14.5Z"/>
                </svg>
              </div>
            </div>
            
            {/* E-Commerce & Marketing - unten links */}
            <div className="absolute bottom-4 -left-6 w-14 h-14 animate-orbit-4">
              <div className="glassmorphism p-3 rounded-xl bg-primary/10 border border-primary/20 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
                  <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
            </div>
            
            {/* Gaming & Digital - links */}
            <div className="absolute top-12 -left-8 w-13 h-13 animate-orbit-5">
              <div className="glassmorphism p-3 rounded-xl bg-secondary/10 border border-secondary/20 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6,9A1,1 0 0,1 7,8A1,1 0 0,1 8,9V10A1,1 0 0,1 7,11A1,1 0 0,1 6,10V9M16,9A1,1 0 0,1 17,8A1,1 0 0,1 18,9A1,1 0 0,1 17,10A1,1 0 0,1 16,9M8,12A1,1 0 0,1 9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12M16,11A1,1 0 0,1 17,10A1,1 0 0,1 18,11A1,1 0 0,1 17,12A1,1 0 0,1 16,11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
                </svg>
              </div>
            </div>
            
            {/* Design & Kreativität - oben links */}
            <div className="absolute -top-4 -left-6 w-14 h-14 animate-orbit-6">
              <div className="glassmorphism p-3 rounded-xl bg-accent/10 border border-accent/20 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M16.24,7.76C15.07,6.59 13.54,6 12,6V12L7.76,16.24C10.1,18.58 13.9,18.58 16.24,16.24C18.58,13.9 18.58,10.1 16.24,7.76Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
