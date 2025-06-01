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

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Meine Projekte</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions combining AI, design, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glassmorphism-strong p-8 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-500 group relative overflow-hidden" 
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                        className="glassmorphism px-4 py-2 text-sm font-bold rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
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
          ))}
        </div>
      </div>
    </section>
  );
}