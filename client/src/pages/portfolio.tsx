import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import ProjectModal from "@/components/project-modal";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Alex Chen - Media Design Informatics Portfolio";
    
    // SEO meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Creative Developer & Digital Designer specializing in Media Design Informatics. AI-powered tools, immersive media projects, and innovative digital experiences.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Creative Developer & Digital Designer specializing in Media Design Informatics. AI-powered tools, immersive media projects, and innovative digital experiences.';
      document.head.appendChild(meta);
    }

    // Open Graph meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Alex Chen - Media Design Informatics Portfolio';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Passionate about blending technology with creativity to build innovative digital experiences. From AI-powered tools to immersive media projects.';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Max Paasch. Erstellt mit modernen Web-Technologien und bereitgestellt auf Replit.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
      <ProjectModal />
    </div>
  );
}
