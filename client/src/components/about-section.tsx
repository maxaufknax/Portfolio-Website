import { useState } from "react";

export default function AboutSection() {
  const [activeTimeline, setActiveTimeline] = useState<'education' | 'career' | 'interests'>('education');
  const skills = [
    'Python', 'React', 'TensorFlow', 'Node.js', 'Adobe CC', 'Three.js',
    'TypeScript', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'Figma'
  ];

  const strengths = [
    { category: 'Technical', items: ['KI-Integration', 'Full-Stack Development', 'UX/UI Design'] },
    { category: 'Creative', items: ['Medienproduktion', 'Datenanalyse', 'Kreative Problemlösung'] }
  ];

  const timelines = {
    education: [
      {
        period: '2011 - 2015',
        title: 'Grundschulausbildung',
        subtitle: 'Freie Evangelische Schule Hannover (FESH)',
        description: 'Fundament der schulischen Laufbahn in einer innovativen Bildungseinrichtung. Frühe Förderung von Kreativität und selbstständigem Denken, die den Grundstein für spätere technische und gestalterische Interessen legten.',
        type: 'education',
        skills: []
      },
      {
        period: '2015 - 2021',
        title: 'Erweiterter Realschulabschluss',
        subtitle: 'IGS Bothfeld • Durchschnitt: 2,6',
        description: 'Solide schulische Grundausbildung mit gutem Abschluss. Entwicklung von analytischen Fähigkeiten und erste Berührungspunkte mit digitalen Medien. Erfolgreiche Qualifikation für die gymnasiale Oberstufe.',
        type: 'education',
        skills: []
      },
      {
        period: '2021 - 2023',
        title: 'Schulischer Teil der Fachhochschulreife',
        subtitle: 'IGS Bothfeld • Durchschnitt: 3,3',
        description: 'Erfolgreich abgeschlossene gymnasiale Oberstufe mit Schwerpunkt auf mathematisch-naturwissenschaftliche Fächer. Solide Grundlage für technische Studiengänge und erste Vertiefung in informatische Themengebiete.',
        type: 'education',
        skills: []
      },
      {
        period: '2023 - 2024',
        title: '13. Klasse & Abiturphase',
        subtitle: 'IGS Bothfeld',
        description: 'Erfolgreiche Teilnahme an der 13. Klasse mit starken Leistungen in den Grundkursen. Trotz des nicht erreichten Abiturs wertvolle Erfahrungen in wissenschaftlichem Arbeiten und Projektmanagement gesammelt.',
        type: 'education',
        skills: []
      },
      {
        period: '2024 - 09.2025',
        title: 'Praktischer Teil der Fachhochschulreife',
        subtitle: 'Bundesfreiwilligendienst • Medizinische Hochschule Hannover',
        description: 'Vervollständigung der Fachhochschulreife durch praktische Berufserfahrung im Gesundheitswesen. Wertvolle Einblicke in die digitale Transformation medizinischer Einrichtungen.',
        type: 'education',
        skills: []
      },
      {
        period: '2025 - Zukunft',
        title: 'Mediendesigninformatik Studium',
        subtitle: 'Geplant • Fachhochschule oder Universität',
        description: 'Angestrebtes Studium zur Verbindung von technischen und kreativen Kompetenzen. Fokus auf die Entwicklung von benutzerfreundlichen digitalen Lösungen und innovativen Medienanwendungen.',
        type: 'future',
        skills: ['Web Development', 'UI/UX Design', 'AI & Machine Learning', 'Digital Innovation', 'Medienproduktion']
      }
    ],
    career: [
      {
        period: '2021 - 2022',
        title: 'Aushilfe & Praktika',
        subtitle: 'Verschiedene Unternehmen • Gastronomie & Einzelhandel',
        description: 'Erste praktische Berufserfahrungen in verschiedenen Branchen. Entwicklung von Grundlagen im Kundenservice, Verkauf und Teamarbeit. Aufbau von Arbeitsethik und Verständnis für betriebliche Abläufe.',
        type: 'work',
        skills: ['Kundenservice', 'Verkauf', 'Flexibilität', 'Arbeitsethik', 'Branchenvielfalt']
      },
      {
        period: '2022 - 2023',
        title: 'Freelance Content Creator',
        subtitle: 'Selbstständig • Social Media & Video',
        description: 'Eigenständige Entwicklung und Umsetzung von Content-Strategien für verschiedene Plattformen. Spezialisierung auf visuelles Storytelling und professionelle Videobearbeitung.',
        type: 'freelance',
        skills: ['Adobe Creative Suite', 'Video Editing', 'Social Media', 'Content Strategy', 'Selbstständigkeit']
      },
      {
        period: '2024 - 2025',
        title: 'Bundesfreiwilligendienst',
        subtitle: 'Medizinische Hochschule Hannover • Station A1',
        description: 'Vollzeit-Engagement im Gesundheitswesen mit direktem Patientenkontakt und administrativen Aufgaben. Entwicklung von Soft Skills in der Kommunikation, Teamarbeit und Stressmanagement.',
        type: 'service',
        skills: ['Patientenbetreuung', 'Teamarbeit', 'Kommunikation', 'Verantwortung', 'Digitale Systeme']
      }
    ],
    interests: [
      {
        period: '2015 - 2019',
        title: 'Digitale Entdeckungsphase',
        subtitle: 'Gaming & Medien',
        description: 'Erste Schritte in die digitale Welt durch Computer Gaming und Medienkonsum. Entwicklung eines Verständnisses für interaktive Technologien und digitale Unterhaltung.',
        type: 'discovery',
        skills: ['Gaming', 'Digitale Medien', 'Interaktive Technologien']
      },
      {
        period: '2020 - 2023',
        title: 'Kreative Medienproduktion',
        subtitle: 'Design & Content Creation',
        description: 'Intensive Beschäftigung mit visueller Mediengestaltung. Erlernung von Adobe After Effects und Premiere Pro für professionelle Videobearbeitung. Entwicklung von Skills in Photoediting und Social Media Content Creation.',
        type: 'creative',
        skills: ['Adobe After Effects', 'Premiere Pro', 'Photoediting', 'Social Media Content', 'Design-Prinzipien']
      },
      {
        period: '2023 - heute',
        title: 'E-Commerce & Digital Marketing',
        subtitle: 'Business & Marketing',
        description: 'Fokus auf die kommerzielle Seite digitaler Medien. Vertiefung in E-Commerce, Webdesign und Online Marketing. Entwicklung von Expertise in visuellem Marketing und strategischer Content-Erstellung.',
        type: 'business',
        skills: ['E-Commerce', 'Webdesign', 'Online Marketing', 'Visuelles Marketing', 'Content-Strategie']
      },
      {
        period: '2023 - heute',
        title: 'Technologie & KI-Entwicklung',
        subtitle: 'Development & AI',
        description: 'Parallel zur Marketing-Expertise: Tiefe Auseinandersetzung mit digitalen Produkten und Informatik. Spezialisierung auf Web- und Anwendungsentwicklung sowie künstliche Intelligenz.',
        type: 'tech',
        skills: ['Web Development', 'App Development', 'Künstliche Intelligenz', 'Design-Skills', 'Technische Umsetzung']
      }
    ]
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Über mich</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bridging the gap between technical innovation and creative expression
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="glassmorphism p-8 rounded-3xl animate-slide-up shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 text-primary">Meine Vision</h3>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ich bin Kreativer Tech-Enthusiast mit Leidenschaft für digitale Medien, Informatik und KI. 
                  Ich entwickle Anwendungen, gestalte visuelle Inhalte und arbeite an eigenen Projekten mit 
                  dem Ziel kreativer Selbstständigkeit.
                </p>
                <div className="h-px bg-gradient-to-r from-primary via-secondary to-accent opacity-30"></div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ich will unabhängig arbeiten, sinnvolle Dinge bauen, dabei stetig lernen und Menschen erreichen. 
                  Geld und Erfolg sind für mich kein Selbstzweck, sondern Werkzeuge für kreative Freiheit.
                </p>
              </div>
            </div>
            
            <div className="glassmorphism p-8 rounded-3xl animate-slide-up shadow-2xl hover:shadow-secondary/20 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 text-secondary">Expertise</h3>
              <div className="grid grid-cols-1 gap-6">
                {strengths.map((strength, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-lg font-semibold text-accent">{strength.category}</h4>
                    <div className="space-y-3">
                      {strength.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-3 group">
                          <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            itemIndex === 0 ? 'bg-primary group-hover:scale-125' : 
                            itemIndex === 1 ? 'bg-secondary group-hover:scale-125' : 'bg-accent group-hover:scale-125'
                          }`}></div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-8">
            {/* Timeline Navigation */}
            <div className="glassmorphism p-2 rounded-2xl">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTimeline('education')}
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTimeline === 'education' 
                      ? 'bg-primary text-primary-foreground shadow-lg transform scale-105' 
                      : 'hover:bg-white/10 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Bildung
                </button>
                <button
                  onClick={() => setActiveTimeline('career')}
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTimeline === 'career' 
                      ? 'bg-secondary text-secondary-foreground shadow-lg transform scale-105' 
                      : 'hover:bg-white/10 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Berufsleben
                </button>
                <button
                  onClick={() => setActiveTimeline('interests')}
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTimeline === 'interests' 
                      ? 'bg-accent text-accent-foreground shadow-lg transform scale-105' 
                      : 'hover:bg-white/10 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Interessen
                </button>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="glassmorphism p-8 rounded-3xl shadow-2xl hover:shadow-accent/20 transition-all duration-500 min-h-[600px]">
              <div className="space-y-8">
                {timelines[activeTimeline].map((item: any, index: number) => (
                  <div key={index} className="relative pl-12 pb-8 last:pb-0 group">
                    {/* Timeline line */}
                    {index !== timelines[activeTimeline].length - 1 && (
                      <div className="absolute left-4 top-8 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className={`absolute left-1 top-3 w-6 h-6 rounded-full border-3 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      item.type === 'education' || item.type === 'future' ? 'bg-primary border-primary shadow-primary/30' :
                      item.type === 'work' || item.type === 'freelance' || item.type === 'service' ? 'bg-secondary border-secondary shadow-secondary/30' :
                      item.type === 'training' || item.type === 'discovery' || item.type === 'creative' || item.type === 'business' || item.type === 'tech' ? 'bg-accent border-accent shadow-accent/30' :
                      'bg-accent border-accent shadow-accent/30'
                    }`}>
                      <div className="absolute inset-1 rounded-full bg-white/20"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4 glassmorphism p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group-hover:shadow-lg">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                          {item.subtitle && (
                            <p className="text-base font-medium text-muted-foreground/90 mb-3">{item.subtitle}</p>
                          )}
                        </div>
                        <span className="text-sm font-mono text-muted-foreground bg-white/10 px-4 py-2 rounded-full whitespace-nowrap group-hover:bg-white/15 transition-colors duration-300">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.skills.map((skill: string, skillIndex: number) => (
                            <span 
                              key={skillIndex}
                              className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                                item.type === 'education' || item.type === 'future' ? 'bg-primary/20 text-primary hover:bg-primary/30' :
                                item.type === 'work' || item.type === 'freelance' || item.type === 'service' ? 'bg-secondary/20 text-secondary hover:bg-secondary/30' :
                                item.type === 'discovery' || item.type === 'creative' || item.type === 'business' || item.type === 'tech' ? 'bg-accent/20 text-accent hover:bg-accent/30' :
                                'bg-muted/20 text-muted-foreground hover:bg-muted/30'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Tags */}
            <div className="glassmorphism p-8 rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <h4 className="text-2xl font-bold mb-6 text-accent">Technologien & Tools</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-tag px-4 py-3 rounded-xl text-sm font-semibold text-center hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <span className="group-hover:text-white transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
