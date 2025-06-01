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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card glassmorphism p-6 rounded-2xl cursor-pointer" 
              onClick={() => handleProjectClick(project.id)}
            >
              <img 
                src={project.image} 
                alt={project.imageAlt}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-2 py-1 text-xs rounded font-mono ${
                        index % 3 === 0 ? 'bg-primary/20 text-primary' :
                        index % 3 === 1 ? 'bg-secondary/20 text-secondary' :
                        'bg-accent/20 text-accent'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}