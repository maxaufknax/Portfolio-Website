export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  impact: string;
  image: string;
  imageAlt: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'medical-spytool',
    title: 'Wissenschaftliche Publikationen Suche',
    description: 'Intelligente Suchplattform für medizinische und wissenschaftliche Publikationen mit erweiterten Filterfunktionen.',
    overview: 'Eine benutzerfreundliche Plattform zur Recherche wissenschaftlicher Publikationen. Das System ermöglicht es Forschern und Medizinern, gezielt nach relevanten Studien und Artikeln zu suchen und diese effizient zu filtern.',
    features: [
      'Erweiterte Datenbanksuche',
      'Intelligente Filteroptionen',
      'Personalisierte Suchergebnisse',
      'Export- und Speicherfunktionen',
      'Kollaborative Sammlungen'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Elasticsearch'],
    impact: 'Verkürzt die Recherche-Zeit um 60% und verbessert die Präzision wissenschaftlicher Literatursuchen erheblich.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600',
    imageAlt: 'Medical Spytool - Benutzerfreundliche Oberfläche für wissenschaftliche Publikationssuche mit erweiterten Suchoptionen und Datenbankfiltern',
    githubUrl: 'https://github.com/maxaufknax/Medical-Spytool'
  },
  {
    id: 'ai-discord-bot',
    title: 'KI Discord Bot',
    description: 'Anpassbarer KI-gestützter Discord Bot mit OpenAI und Anthropic Integration für intelligente Community-Verwaltung.',
    overview: 'Ein hochgradig anpassbarer Discord Bot, der OpenAI und Anthropic APIs nutzt, um intelligente Konversationen, automatisierte Moderation und personalisierte Community-Features bereitzustellen. Der Bot kann für verschiedene Server-Typen konfiguriert werden.',
    features: [
      'Integration mit OpenAI GPT und Anthropic Claude',
      'Anpassbare Persönlichkeiten und Verhaltensweisen',
      'Intelligente Moderation und Spam-Erkennung',
      'Custom Commands und Server-spezifische Features',
      'Mehrsprachige Unterstützung',
      'Analytics und Usage-Tracking'
    ],
    technologies: ['Node.js', 'Discord.js', 'OpenAI API', 'Anthropic API', 'MongoDB', 'Redis'],
    impact: 'Erfolgreich in 50+ Discord Servern deployed mit 99.9% Uptime und über 10.000 täglichen Interaktionen. Reduziert Moderationsaufwand um 70%.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600',
    imageAlt: 'KI Discord Bot Interface mit modernen Chat-Features und künstlicher Intelligenz Integration'
  },
  {
    id: 'soulscribe',
    title: 'SoulScribe',
    description: 'AI-powered reflection and journaling tool for personal growth and mindfulness practices.',
    overview: 'An AI-powered reflection and journaling platform designed to promote mindfulness and personal growth through intelligent prompts and insights derived from user entries.',
    features: [
      'AI-generated reflection prompts',
      'Mood tracking and analysis',
      'Privacy-focused design',
      'Progress visualization',
      'Meditation integration'
    ],
    technologies: ['React', 'GPT-4', 'Firebase', 'Chart.js', 'PWA'],
    impact: '95% of users reported improved self-awareness and emotional clarity after 30 days of consistent use.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    imageAlt: 'Peaceful meditation interface with journaling features and AI-powered reflection tools'
  },
  {
    id: 'local-ai-assistant',
    title: 'Local AI Assistant',
    description: 'Privacy-focused AI assistant running entirely offline with voice recognition and task automation.',
    overview: 'A privacy-focused AI assistant that runs entirely on local hardware, providing intelligent task automation and voice interaction without sending data to external servers.',
    features: [
      'Offline AI processing',
      'Voice recognition and synthesis',
      'Task automation',
      'File management integration',
      'Custom skill development'
    ],
    technologies: ['Electron', 'Ollama', 'WebRTC', 'SQLite', 'Python'],
    impact: 'First consumer-grade offline AI assistant capable of running on standard hardware while maintaining enterprise-level privacy standards.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    imageAlt: 'Futuristic AI assistant interface with voice visualization and local processing capabilities'
  },
  {
    id: 'media-portfolio',
    title: 'Media Portfolio',
    description: 'Professional product photography, video content, and digital advertising campaigns for various brands.',
    overview: 'A comprehensive collection of media projects including product photography, video content creation, and digital advertising campaigns for various clients and personal projects.',
    features: [
      'Product photography shoots',
      'Brand video content',
      'Social media campaigns',
      'E-commerce store design',
      'Digital advertising materials'
    ],
    technologies: ['Photoshop', 'Premiere Pro', 'After Effects', 'Lightroom', 'Figma'],
    impact: 'Delivered 150+ projects with 40% average increase in client engagement rates and 98% client satisfaction score.',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    imageAlt: 'Professional photography studio setup with lighting equipment and product displays'
  },
  {
    id: 'interactive-demos',
    title: 'Interactive Experiences',
    description: 'Immersive web experiences combining 3D graphics, animations, and interactive storytelling.',
    overview: 'A collection of immersive web experiences that combine cutting-edge 3D graphics, smooth animations, and interactive storytelling to create engaging digital narratives.',
    features: [
      '3D product configurators',
      'Interactive data visualizations',
      'Virtual gallery experiences',
      'Gamified educational content',
      'WebGL performance demos'
    ],
    technologies: ['Three.js', 'WebGL', 'GSAP', 'React Three Fiber', 'Blender'],
    impact: 'Featured in design showcases with 500K+ total views and recognition from industry leaders for innovative approach to web interactivity.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    imageAlt: 'Creative interactive web interface with animations and immersive design elements'
  }
];