import { useState } from "react";

export default function AboutSection() {
  const [activeTimeline, setActiveTimeline] = useState<'education' | 'career' | 'interests'>('education');
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
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
          <p className="md:text-2xl text-muted-foreground max-w-4xl mx-auto text-[23px]">Während andere noch überlegen, bau ich es einfach. Learning by Doing, 100%.</p>
        </div>
        
        {/* Vision und Expertise - zentriert über Lebenslauf */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
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

        {/* Kompakter Lebenslauf-Bereich */}
        <div className="glassmorphism p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-foreground">Mein Werdegang</h3>
            <button
              onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
            >
              {isTimelineExpanded ? 'Weniger anzeigen' : 'Details anzeigen'}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isTimelineExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Kompakte Timeline Navigation */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setActiveTimeline('education')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTimeline === 'education' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10'
              }`}
            >
              Bildung
            </button>
            <button
              onClick={() => setActiveTimeline('career')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTimeline === 'career' 
                  ? 'bg-secondary text-secondary-foreground' 
                  : 'bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10'
              }`}
            >
              Berufsleben
            </button>
            <button
              onClick={() => setActiveTimeline('interests')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTimeline === 'interests' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10'
              }`}
            >
              Interessen
            </button>
          </div>

          {/* Timeline Content - Kollapsierbar */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isTimelineExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-32 opacity-70'
          }`}>
            <div className="space-y-4">
              {timelines[activeTimeline].map((item: any, index: number) => (
                <div key={index} className={`relative pl-8 pb-4 last:pb-0 transition-all duration-300 ${
                  !isTimelineExpanded && index >= 2 ? 'hidden' : ''
                }`}>
                  {/* Timeline line */}
                  {index !== timelines[activeTimeline].length - 1 && (
                    <div className="absolute left-3 top-6 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-1 top-2 w-4 h-4 rounded-full border-2 ${
                    item.type === 'education' || item.type === 'future' ? 'bg-primary border-primary' :
                    item.type === 'work' || item.type === 'freelance' || item.type === 'service' ? 'bg-secondary border-secondary' :
                    'bg-accent border-accent'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                        {item.subtitle && (
                          <p className="text-sm text-muted-foreground/80">{item.subtitle}</p>
                        )}
                      </div>
                      <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
                        {item.period}
                      </span>
                    </div>
                    
                    {isTimelineExpanded && (
                      <>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        {item.skills && item.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.skills.map((skill: string, skillIndex: number) => (
                              <span 
                                key={skillIndex}
                                className={`px-2 py-1 text-xs rounded font-mono ${
                                  item.type === 'education' || item.type === 'future' ? 'bg-primary/20 text-primary' :
                                  item.type === 'work' || item.type === 'freelance' || item.type === 'service' ? 'bg-secondary/20 text-secondary' :
                                  'bg-accent/20 text-accent'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {!isTimelineExpanded && timelines[activeTimeline].length > 2 && (
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  +{timelines[activeTimeline].length - 2} weitere Einträge
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Motivation Section */}
        <div className="glassmorphism p-8 rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 mt-12">
          <div className="text-center max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-6 text-gradient">Meine Vision</h4>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                „Ich glaube an die Kraft der Technologie, Menschen zu verbinden und das Leben zu verbessern. 
                Mein Ziel ist es, durch kreative Lösungen und innovative Ansätze digitale Erfahrungen zu schaffen, 
                die nicht nur funktional, sondern auch inspirierend sind."
              </p>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="flex-1 glassmorphism p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold text-primary mb-3">Innovation</h5>
                  <p className="text-muted-foreground text-sm">
                    Kontinuierliches Lernen und die Bereitschaft, neue Technologien zu erkunden, 
                    um zukunftsweisende Lösungen zu entwickeln.
                  </p>
                </div>
                <div className="flex-1 glassmorphism p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold text-secondary mb-3">Kreativität</h5>
                  <p className="text-muted-foreground text-sm">
                    Die Verbindung von technischem Know-how mit gestalterischem Denken 
                    für einzigartige und benutzerfreundliche Ergebnisse.
                  </p>
                </div>
                <div className="flex-1 glassmorphism p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold text-accent mb-3">Impact</h5>
                  <p className="text-muted-foreground text-sm">
                    Projekte entwickeln, die einen echten Mehrwert schaffen und positive 
                    Veränderungen in der digitalen Welt bewirken.
                  </p>
                </div>
              </div>
              
              {/* Kompakte Skills Anzeige */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h5 className="text-lg font-semibold text-foreground mb-4">Technologien & Tools</h5>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="skill-tag px-3 py-1 rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
