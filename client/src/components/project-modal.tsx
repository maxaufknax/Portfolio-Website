import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/project-data";

export default function ProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      const projectId = event.detail;
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('openProjectModal', handleOpenModal as EventListener);
    
    return () => {
      window.removeEventListener('openProjectModal', handleOpenModal as EventListener);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const openGitHub = () => {
    if (selectedProject?.githubUrl) {
      window.open(selectedProject.githubUrl, '_blank');
    } else {
      alert('GitHub repository will be available soon');
    }
  };

  const openDemo = () => {
    if (selectedProject?.demoUrl) {
      window.open(selectedProject.demoUrl, '_blank');
    } else {
      alert('Live demo will be available soon');
    }
  };

  const openCaseStudy = () => {
    if (selectedProject?.caseStudyUrl) {
      window.open(selectedProject.caseStudyUrl, '_blank');
    } else {
      alert('Detailed case study coming soon');
    }
  };

  if (!isOpen || !selectedProject) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="glassmorphism max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-bold text-gradient">{selectedProject.title}</h3>
          <Button variant="ghost" size="icon" onClick={closeModal}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        
        <div className="space-y-6">
          <img 
            src={selectedProject.image} 
            alt={selectedProject.imageAlt}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Überblick</h4>
              <p className="text-muted-foreground mb-4">
                {selectedProject.id === 'medical-spytool' 
                  ? "Das Medical Spytool ist eine innovative, benutzerfreundliche Plattform, die speziell für die effiziente Recherche wissenschaftlicher und medizinischer Publikationen entwickelt wurde. Mit fortschrittlichen Suchalgorithmen und intelligenten Filterfunktionen ermöglicht es Forschern, Ärzten und Studenten, gezielt nach relevanten Studien, Artikeln und Fachpublikationen zu suchen. Die Plattform kombiniert modernste Technologie mit einer intuitiven Benutzeroberfläche, um den Rechercheprozess zu revolutionieren und wertvolle Zeit bei der Literatursuche zu sparen."
                  : selectedProject.overview
                }
              </p>
              
              <h4 className="text-xl font-semibold mb-3 text-secondary">Key Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-accent">Technical Stack</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 text-sm rounded font-mono ${
                      index % 3 === 0 ? 'bg-primary/20 text-primary' :
                      index % 3 === 1 ? 'bg-secondary/20 text-secondary' :
                      'bg-accent/20 text-accent'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <h4 className="text-xl font-semibold mb-3 text-primary">Impact</h4>
              <p className="text-muted-foreground mb-4">
                {selectedProject.id === 'medical-spytool' 
                  ? selectedProject.impact.replace('um 60%', 'enorm')
                  : selectedProject.impact
                }
              </p>
              
              {/* Video Showcase - nur für Medical Spytool */}
              {selectedProject.id === 'medical-spytool' && (
                <div className="space-y-4">
                  <h5 className="text-lg font-medium text-secondary">Video Demos</h5>
                  
                  {/* Web Version */}
                  <div className="space-y-2">
                    <h6 className="text-sm font-medium text-primary">Web Version</h6>
                    <div className="relative rounded-lg overflow-hidden bg-black/20">
                      <video 
                        controls 
                        className="w-full h-40 object-contain rounded-lg"
                      >
                        <source src="/medical-spytool-showcase.mp4" type="video/mp4" />
                        Browser unterstützt das Video nicht.
                      </video>
                    </div>
                  </div>
                  
                  {/* Desktop Version */}
                  <div className="space-y-2">
                    <h6 className="text-sm font-medium text-accent">Desktop Version</h6>
                    <div className="relative rounded-lg overflow-hidden bg-black/20">
                      <video 
                        controls 
                        className="w-full h-40 object-contain rounded-lg"
                      >
                        <source src="/medical-spytool-local-showcase.mp4" type="video/mp4" />
                        Browser unterstützt das Video nicht.
                      </video>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    🎥 Live-Demos beider Versionen des Medical Spytool
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <Button onClick={openGitHub} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Github className="w-4 h-4 mr-2" />
            View on GitHub
          </Button>
          <Button variant="outline" onClick={openDemo} className="glassmorphism hover:bg-white/10 border-white/10">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button variant="outline" onClick={openCaseStudy} className="glassmorphism hover:bg-white/10 border-white/10">
            Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
