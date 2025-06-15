import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github, Download, FileText, GitBranch } from "lucide-react";
import { projects, Project } from "@/lib/project-data";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    if (selectedProject?.liveDemoUrl) { // Geändert von demoUrl zu liveDemoUrl
      window.open(selectedProject.liveDemoUrl, '_blank');
    } else {
      alert('Live demo will be available soon');
    }
  };

  const openCaseStudy = () => {
    // Diese Funktion wird vorerst beibehalten, falls sie später benötigt wird,
    // aber der Button dafür wird nur angezeigt, wenn kein pdfUrl vorhanden ist.
    if (selectedProject?.pdfUrl) { // Logik vereinfacht, da caseStudyUrl nicht mehr primär genutzt wird
      window.open(selectedProject.pdfUrl, '_blank');
    } else {
      alert('Detaillierte Fallstudie kommt bald');
    }
  };

  const openPdf = () => {
    if (selectedProject?.pdfUrl) {
      window.open(selectedProject.pdfUrl, '_blank');
    } else {
      alert('Projektbeschreibung als PDF wird bald verfügbar sein.');
    }
  };

  if (!isOpen || !selectedProject) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-background/90 backdrop-blur-md shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 text-foreground border border-border">
        <div className="flex justify-between items-start mb-4 md:mb-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">{selectedProject.title}</h3>
            {selectedProject.subheadline && (
              <p className="text-sm md:text-md text-muted-foreground mt-1">{selectedProject.subheadline}</p>
            )}
          </div>
          <Button variant="ghost" size="icon" onClick={closeModal} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </Button>
        </div>
        
        <div className="space-y-4 md:space-y-6">
          <img 
            src={selectedProject.image} 
            alt={selectedProject.imageAlt}
            className="w-full h-48 md:h-64 object-cover rounded-lg border border-border shadow-md"
          />
          
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-2 text-primary">Projektübersicht</h4>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              {selectedProject.overview}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 text-secondary">{selectedProject.technologiesTitle || "Technologie-Stack"}</h4>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                {selectedProject.technologies.map((tech, index) => {
                  // Elegante, gedämpfte Farben passend zum dunklen Design
                  const styles = [
                    "glassmorphism border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/30",
                    "glassmorphism border-secondary/20 text-secondary hover:bg-secondary/10 hover:border-secondary/30",
                    "glassmorphism border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/30",
                    "glassmorphism border-muted-foreground/20 text-muted-foreground hover:bg-muted-foreground/10 hover:border-muted-foreground/30",
                  ];
                  const styleClass = styles[index % styles.length];
                  return (
                    <span
                      key={index} 
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${styleClass}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              {selectedProject.versions && (
                <div className="mb-3 md:mb-4">
                  <h5 className="text-base md:text-lg font-semibold mb-1.5 text-accent">Aktuelle Versionen</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.versions.stable.map(v => 
                      <span key={v.name} className="glassmorphism border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/40 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center">
                        <GitBranch className="w-3 h-3 mr-1.5" />{v.name} (stable)
                      </span>
                    )}
                    {selectedProject.versions.beta.map(v => 
                      <span key={v.name} className="glassmorphism border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/40 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center">
                        <GitBranch className="w-3 h-3 mr-1.5" />{v.name} (beta)
                      </span>
                    )}
                    {selectedProject.versions.experimental.map(v => 
                      <span key={v.name} className="glassmorphism border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/40 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center">
                        <GitBranch className="w-3 h-3 mr-1.5" />{v.name} (experimental)
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              {selectedProject.prerequisites && selectedProject.prerequisites.length > 0 && (
                <div className="mb-3 md:mb-4">
                  <h5 className="text-base md:text-lg font-semibold mb-1.5 text-accent">Voraussetzungen</h5>
                  <ul className="space-y-1 text-sm md:text-base text-muted-foreground list-disc list-inside pl-2">
                    {selectedProject.prerequisites.map((prerequisite, index) => (
                      <li key={index}>{prerequisite}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <h4 className="text-lg md:text-xl font-semibold mb-2 text-primary">Hauptnutzen</h4>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                {selectedProject.impact}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-2 text-accent">Kernfunktionen</h4>
              <ul className="space-y-1.5 text-sm md:text-base text-muted-foreground list-disc list-inside pl-2">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bildergalerie für spezielle Projekte */}
          {selectedProject.gallery && selectedProject.gallery.length > 0 && (
            <div className="space-y-3 md:space-y-4 pt-3 md:pt-4 border-t border-border">
              <h4 className="text-lg md:text-xl font-semibold text-secondary">
                {selectedProject.id === 'bfd-mhh' ? 'Erstellte Materialien' : 'Projekt Gallery'}
              </h4>
              <div className="grid gap-6 md:gap-8">
                {selectedProject.gallery.map((item, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
                    {/* Bild oder Video */}
                    <div className="relative rounded-lg overflow-hidden border border-border bg-muted/30 shadow-md group">
                      {item.isVideo ? (
                        <video 
                          controls 
                          className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain"
                          preload="metadata"
                        >
                          <source src={item.src} type="video/mp4" />
                          Ihr Browser unterstützt das Video-Tag nicht.
                        </video>
                      ) : (
                        <>
                          <img 
                            src={item.src} 
                            alt={item.alt}
                            className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => window.open(item.src, '_blank')}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                              Vergrößern 🔍
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Beschreibung */}
                    <div className="space-y-3 flex flex-col justify-center">
                      <div>
                        <h5 className="text-lg md:text-xl font-semibold text-foreground mb-2">{item.title}</h5>
                        {item.description && (
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      
                      {/* Zusätzliche Info-Box */}
                      <div className="glassmorphism p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          <span>
                            {selectedProject.id === 'bfd-mhh' && index === selectedProject.gallery!.length - 1 ? 'Office Automatisierungsprozesse und Benutzerfreundliche Anleitungen' : 
                             selectedProject.id === 'bfd-mhh' ? 'Professionelles Design für MHH Events' :
                             item.isVideo ? 'Social Media Werbeanzeige' : 'E-Commerce Sales Performance May 2024'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="glassmorphism p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground/80">
                  {selectedProject.id === 'bfd-mhh' ? (
                    <>
                      <span className="text-xs">Klicken Sie auf ein Bild, um es in voller Größe zu öffnen.</span>
                    </>
                  ) : (
                    <>
                      🎥 <span className="font-medium">E-Commerce Projekt Portfolio</span> - Store Design, Marketing Visuals und Social Media Ads
                      <br />
                      <span className="text-xs">Videos zeigen Live-Kampagnen und Produktvisualisierungen.</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Allgemeiner Video Showcase */}
          {selectedProject.videoUrl && selectedProject.id !== 'media-portfolio' && (
            <div className="space-y-3 md:space-y-4 pt-3 md:pt-4 border-t border-border">
              <h4 className="text-lg md:text-xl font-semibold text-secondary">Video Showcase</h4>
              <div className="relative rounded-lg overflow-hidden border border-border bg-muted/30 aspect-video shadow-md">
                <video controls className="w-full h-full object-contain">
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          )}

          {/* Spezifische Video Demos für Medical Spytool, falls kein allgemeines videoUrl vorhanden ist */}
          {selectedProject.id === 'medical-spytool' && !selectedProject.videoUrl && (
            <div className="space-y-3 md:space-y-4 pt-3 md:pt-4 border-t border-border">
              <h4 className="text-lg md:text-xl font-semibold text-secondary">Video Demos</h4>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1.5">
                  <h5 className="text-sm md:text-base font-medium text-muted-foreground">Web Version</h5>
                  <div className="relative rounded-lg overflow-hidden border border-border bg-muted/30 aspect-video">
                    <video controls className="w-full h-full object-contain">
                      <source src="/medical-spytool-showcase.mp4" type="video/mp4" />
                      Ihr Browser unterstützt das Video-Tag nicht.
                    </video>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h5 className="text-sm md:text-base font-medium text-muted-foreground">Desktop Version</h5>
                  <div className="relative rounded-lg overflow-hidden border border-border bg-muted/30 aspect-video">
                    <video controls className="w-full h-full object-contain">
                      <source src="/medical-spytool-local-showcase.mp4" type="video/mp4" />
                      Ihr Browser unterstützt das Video-Tag nicht.
                    </video>
                  </div>
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground/80 text-center pt-1">
                🎥 Live-Demos der Web- und Desktop-Versionen des Medical Spytool.
              </p>
            </div>
          )}

          {/* Release Notes / Changelog - nur für Projekte mit Versionsinformationen */}
          {selectedProject.versions && 
            (selectedProject.versions.stable.length > 0 || 
             selectedProject.versions.beta.length > 0 || 
             selectedProject.versions.experimental.length > 0) && (
            <div className="pt-3 md:pt-4 border-t border-border">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary hover:no-underline">
                    <GitBranch className="w-5 h-5 mr-2 text-muted-foreground" /> Release Notes / Changelog
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 text-sm md:text-base text-muted-foreground">
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Stable Releases:</h6>
                        <ul className="list-disc list-inside pl-2 space-y-1">
                          {selectedProject.versions.stable.map(v => <li key={v.name}><span className="font-medium">{v.name}:</span> {v.description}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Beta Releases:</h6>
                        <ul className="list-disc list-inside pl-2 space-y-1">
                          {selectedProject.versions.beta.map(v => <li key={v.name}><span className="font-medium">{v.name}:</span> {v.description}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Experimental Releases:</h6>
                        <ul className="list-disc list-inside pl-2 space-y-1">
                          {selectedProject.versions.experimental.map(v => <li key={v.name}><span className="font-medium">{v.name}:</span> {v.description}</li>)}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border">
          {/* Spezielle Behandlung für Medical Spytool - deaktivierter Demo Button */}
          {selectedProject.id === 'medical-spytool' && (
            <Button 
              disabled 
              className="bg-muted text-muted-foreground cursor-not-allowed flex-grow sm:flex-grow-0 relative group"
              title="Live Demo ab Portfolio Version 2.5 verfügbar"
            >
              <ExternalLink className="w-4 h-4 mr-2 opacity-50" />
              Live Demo (ab v2.5 verfügbar)
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Verfügbar ab Portfolio 2.5
              </span>
            </Button>
          )}
          {/* Normale Live Demo Buttons für andere Projekte */}
          {selectedProject.liveDemoUrl && selectedProject.id !== 'medical-spytool' && (
            <Button onClick={openDemo} className="bg-primary hover:bg-primary/90 text-primary-foreground flex-grow sm:flex-grow-0">
              <ExternalLink className="w-4 h-4 mr-2" />
              {selectedProject.id === 'bfd-mhh' ? 'Offizielle Abteilungsseite besuchen' : 'Live Demo starten'}
            </Button>
          )}
          {selectedProject.githubUrl && (
            <Button variant="outline" onClick={openGitHub} className="border-border hover:bg-muted/50 flex-grow sm:flex-grow-0">
              <Github className="w-4 h-4 mr-2" />
              Quellcode auf GitHub
            </Button>
          )}
          {selectedProject.pdfUrl && (
            <Button variant="outline" onClick={openPdf} className="border-border hover:bg-muted/50 flex-grow sm:flex-grow-0">
              <FileText className="w-4 h-4 mr-2" />
              Projektbeschreibung als PDF
            </Button>
          )}
           {/* Fallback Button, falls weder pdfUrl noch caseStudyUrl existiert, aber als Beispiel beibehalten */}
          {!selectedProject.pdfUrl && selectedProject.id === 'some-other-project' && ( // Beispielhafte Logik für einen anderen Button
            <Button variant="outline" onClick={() => alert('Weitere Informationen folgen in Kürze.')} className="border-border hover:bg-muted/50 flex-grow sm:flex-grow-0">
              <FileText className="w-4 h-4 mr-2" />
              Weitere Infos
            </Button>
          )
          }
        </div>
      </div>
    </div>
  );
}
