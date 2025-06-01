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
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Über mich</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between technical innovation and creative expression
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="glassmorphism p-8 rounded-2xl animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Über mich</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ich bin Kreativer Tech-Enthusiast mit Leidenschaft für digitale Medien, Informatik und KI. 
                Ich entwickle Anwendungen, gestalte visuelle Inhalte und arbeite an eigenen Projekten mit 
                dem Ziel kreativer Selbstständigkeit. Struktur, Eigenständigkeit und Vision treiben mich.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ich will unabhängig arbeiten, sinnvolle Dinge bauen, dabei stetig lernen und Menschen erreichen. 
                Geld und Erfolg sind für mich kein Selbstzweck, sondern Werkzeuge für kreative Freiheit. 
                Ich träume nicht nur, ich plane, ich baue und ich mache weiter, bis es funktioniert.
              </p>
            </div>
            
            <div className="glassmorphism p-8 rounded-2xl animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Meine Interessen und Kenntnisse</h3>
              <div className="grid grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="space-y-2">
                    {strength.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          itemIndex === 0 ? 'bg-primary' : 
                          itemIndex === 1 ? 'bg-secondary' : 'bg-accent'
                        }`}></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Timeline Navigation */}
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTimeline('education')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTimeline === 'education' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'glassmorphism hover:bg-white/10'
                }`}
              >
                Bildung
              </button>
              <button
                onClick={() => setActiveTimeline('career')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTimeline === 'career' 
                    ? 'bg-secondary text-secondary-foreground' 
                    : 'glassmorphism hover:bg-white/10'
                }`}
              >
                Berufsleben
              </button>
              <button
                onClick={() => setActiveTimeline('interests')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTimeline === 'interests' 
                    ? 'bg-accent text-accent-foreground' 
                    : 'glassmorphism hover:bg-white/10'
                }`}
              >
                Interessen
              </button>
            </div>

            {/* Timeline Content */}
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="space-y-6">
                {timelines[activeTimeline].map((item: any, index: number) => (
                  <div key={index} className="relative pl-8 pb-6 last:pb-0">
                    {/* Timeline line */}
                    {index !== timelines[activeTimeline].length - 1 && (
                      <div className="absolute left-3 top-6 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className={`absolute left-1 top-2 w-4 h-4 rounded-full border-2 ${
                      item.type === 'education' ? 'bg-primary border-primary' :
                      item.type === 'work' ? 'bg-secondary border-secondary' :
                      item.type === 'training' ? 'bg-accent border-accent' :
                      item.type === 'service' ? 'bg-primary border-primary' :
                      item.type === 'tech' ? 'bg-primary border-primary' :
                      item.type === 'creative' ? 'bg-secondary border-secondary' :
                      'bg-accent border-accent'
                    }`}></div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                          {item.subtitle && (
                            <p className="text-sm font-medium text-muted-foreground/80 mb-2">{item.subtitle}</p>
                          )}
                        </div>
                        <span className="text-sm font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {item.skills.map((skill: string, skillIndex: number) => (
                            <span 
                              key={skillIndex}
                              className={`px-2 py-1 text-xs rounded font-mono ${
                                item.type === 'education' || item.type === 'future' ? 'bg-primary/20 text-primary' :
                                item.type === 'work' || item.type === 'freelance' || item.type === 'service' ? 'bg-secondary/20 text-secondary' :
                                item.type === 'discovery' || item.type === 'creative' ? 'bg-accent/20 text-accent' :
                                item.type === 'business' || item.type === 'tech' ? 'bg-primary/20 text-primary' :
                                'bg-muted/20 text-muted-foreground'
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
            <div className="glassmorphism p-6 rounded-2xl">
              <h4 className="text-lg font-semibold mb-4 text-accent">Technologien & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag px-3 py-1 rounded-full text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
