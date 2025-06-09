import { projects } from "@/lib/project-data";

interface ProjectsSectionProps {
  onProjectClick?: (projectId: string) => void;
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  const handleProjectClick = (projectId: string) => {
    if (onProjectClick) {
      onProjectClick(projectId);
    } else {
      // Dispatch custom event for modal
      window.dispatchEvent(new CustomEvent('openProjectModal', { detail: projectId }));
    }
  };

  // Kategorisierung der Projekte
  const softwareProjects = projects.filter(project => 
    ['medical-spytool', 'ai-discord-bot', 'soulscribe'].includes(project.id)
  );
  
  const mediaProjects = projects.filter(project => 
    ['media-portfolio', 'bfd-mhh'].includes(project.id)
  );

  const ProjectCard = ({ project, category }: { project: typeof projects[0], category: 'software' | 'media' }) => {
    const isSoftware = category === 'software';
    const primaryColor = isSoftware ? 'primary' : 'secondary';
    const gradientFrom = isSoftware ? 'from-primary/10' : 'from-secondary/10';
    const gradientTo = isSoftware ? 'to-blue-500/10' : 'to-purple-500/10';
    const borderColor = isSoftware ? 'border-primary/20' : 'border-secondary/20';
    
    return (
      <div 
        key={project.id}
        className={`glassmorphism-strong p-8 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-500 group relative overflow-hidden border-2 ${borderColor} hover:${isSoftware ? 'border-primary/40' : 'border-secondary/40'}`}
        onClick={() => handleProjectClick(project.id)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        <div className="relative z-10">
          <div className="aspect-video mb-6 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={project.image} 
              alt={project.imageAlt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-gradient group-hover:scale-105 transition-transform duration-300">{project.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className={`glassmorphism px-4 py-2 text-sm font-bold rounded-full border ${isSoftware ? 'border-primary/30 text-primary hover:bg-primary/10' : 'border-secondary/30 text-secondary hover:bg-secondary/10'} transition-colors`}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="glassmorphism px-4 py-2 text-sm font-bold rounded-full border border-accent/30 text-accent">
                  +{project.technologies.length - 3} mehr
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Meine Projekte</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative Lösungen aus Software-Entwicklung und kreativer Medienproduktion
          </p>
        </div>

        {/* Software Entwicklung Kategorie */}
        <div className="mb-24">
          {/* Kategorie Header mit stärkerem visuellen Design */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-xl"></div>
            <div className="relative glassmorphism-strong border-2 border-primary/20 rounded-3xl p-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
                    <h3 className="text-4xl font-black text-primary drop-shadow-lg">Software-Entwicklung</h3>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                  Programmierte Anwendungen und intelligente Systeme mit modernsten Technologien
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {softwareProjects.map((project) => (
              <ProjectCard key={project.id} project={project} category="software" />
            ))}
          </div>
        </div>

        {/* Trenner zwischen Kategorien */}
        <div className="my-20">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-muted-foreground/20 to-transparent"></div>
            </div>
            <div className="relative glassmorphism px-8 py-4 rounded-full border border-muted-foreground/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Media & Design Kategorie */}
        <div>
          {/* Kategorie Header mit stärkerem visuellen Design */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-secondary/10 to-secondary/5 rounded-3xl blur-xl"></div>
            <div className="relative glassmorphism-strong border-2 border-secondary/20 rounded-3xl p-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse shadow-lg shadow-secondary/50"></div>
                    <h3 className="text-4xl font-black text-secondary drop-shadow-lg">Media & Design</h3>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse shadow-lg shadow-secondary/50"></div>
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                  Kreative Projekte in der visuellen Kommunikation und digitalen Medienproduktion
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {mediaProjects.map((project) => (
              <ProjectCard key={project.id} project={project} category="media" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}