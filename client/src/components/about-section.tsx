import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
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
      }
    ],
    career: [
      {
        period: '05.2020 - 03.2021',
        title: 'Aushilfe / Minijob – Wochenblattbote',
        subtitle: 'Lokalboten Hannover',
        description: 'Zuverlässige und eigenständige Verteilung von Wochenblättern im Rahmen eines Minijobs. Entwicklung von Belastbarkeit, Ausdauer und Selbstorganisation durch regelmäßige und verantwortungsvolle Tätigkeiten.',
        type: 'work',
        skills: ['Zuverlässigkeit', 'Selbstständigkeit', 'Belastbarkeit', 'Arbeitsdisziplin', 'Ausdauer']
      },
      {
        period: '07.2024 - 01.2025',
        title: 'Aushilfe / Minijob – Digitalisierung',
        subtitle: 'Pestalozzi Stiftung Burgwedel',
        description: 'Mitarbeit im Digitalisierungsmanagement der Personalabteilung. Aufgaben im Datenmanagement, Digitalisierung, Nutzung von HR-Software und digitalen Tools sowie Beachtung von Datenschutz und abteilungsübergreifende Zusammenarbeit.',
        type: 'work',
        skills: ['Digitalisierung', 'HR-Software', 'Datenmanagement', 'Datenschutz', 'Teamarbeit']
      },
      {
        period: '09.2024 - 09.2025',
        title: 'Bundesfreiwilligendienst',
        subtitle: 'Medizinische Hochschule Hannover • Dekanat für Akademische Karriereentwicklung',
        description: 'Unterstützung in den Bereichen Datenmanagement, Digitalisierung, Mediengestaltung, Webdesign (Frontend), IT-Automatisierungsprozesse und datenschutzrelevante Aufgaben. Praktische Anwendung technischer Fähigkeiten im professionellen Umfeld.',
        type: 'service',
        skills: ['Digitalisierung', 'Mediengestaltung', 'Frontend-Entwicklung', 'IT-Automatisierung', 'Datenschutz', 'Teamarbeit', 'Verantwortung']
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">{t('about.title')}</h2>
          <p className="md:text-2xl text-muted-foreground max-w-4xl mx-auto text-[23px]">{t('about.intro')}</p>
        </div>
        
        {/* Profilfoto Header */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative glassmorphism-strong p-2 rounded-3xl">
              <img 
                src="/bewerbungsfoto-max-paasch.jpeg" 
                alt="Max Paasch - Professional Portrait" 
                className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating elements around photo */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-accent/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Über Max - Neustrukturiert */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-black mb-12 text-gradient text-center">Über Max</h3>
          
          {/* Haupteinführung */}
          <div className="glassmorphism p-6 md:p-8 rounded-2xl mb-8 max-w-4xl mx-auto animate-slide-up">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center">
              Ich bin Max, 20 Jahre alt, und ich denke viel – manchmal zu viel.
              <br />
              Ich frage mich oft, was wirklich sinnvoll ist, was Wirkung hat und was nur Lärm ist.
              <br />
              <span className="text-primary font-medium">Ich will keine Oberflächen. Ich will Tiefe</span> – in meiner Arbeit, in Gesprächen, in mir selbst.
            </p>
          </div>

          {/* Eigenschaften Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Wie ich arbeite */}
            <div className="glassmorphism p-6 rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Wie ich arbeite</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ich baue gerne digitale Dinge – Anwendungen, Interfaces, Systeme.
                    Aber nicht, um Technik zu feiern.
                    Sondern, um Komplexes verständlich zu machen.
                    Ich arbeite mit Code, KI und Design wie mit Werkzeugen – um Gedanken nutzbar zu machen.
                  </p>
                </div>
              </div>
            </div>

            {/* Was mich antreibt */}
            <div className="glassmorphism p-6 rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-3">Was mich antreibt</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ich will nicht nur „coole Sachen" machen.
                    Ich will gestalten, was Bestand hat – was ruhig, durchdacht und klar ist.
                    Ich glaube, dass echte Qualität Zeit und Haltung braucht.
                    Und dass nicht alles sofort sichtbar sein muss, um Wirkung zu haben.
                  </p>
                </div>
              </div>
            </div>

            {/* Was mich ausmacht */}
            <div className="glassmorphism p-6 rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-3">Was mich ausmacht</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ich arbeite oft im Hintergrund – mit Fokus.
                    Ich brauche keine Show – aber ich will Verantwortung für das, was ich tue.
                    Meine Projekte sind auch persönliche Reflexionen.
                    Sie zeigen, wie ich denke. Und wohin ich will.
                  </p>
                </div>
              </div>
            </div>

            {/* Was ich glaube */}
            <div className="glassmorphism p-6 rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gradient mb-3">Was ich glaube</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ich habe keinen Masterplan. Aber ich habe einen inneren Kompass.
                    Und vielleicht ist das in einer Welt voller Ablenkung genau das, was zählt.
                    Ich baue an etwas – nicht laut, aber konsequent.
                    <br />
                    <span className="text-primary/80 italic">Und ich glaube daran, dass stille Arbeit sichtbarer wird, als man denkt.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kompakter Lebenslauf-Bereich */}
        <div className="glassmorphism p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-foreground">Mein Werdegang</h3>
            <button
              onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 text-[16px] bg-[#de6f6f00] font-semibold"
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
            <h4 className="text-2xl font-bold mb-6 text-gradient">Meine Motivation</h4>
            <div className="space-y-6">
              <p className="text-muted-foreground text-[16px]">Ich will Technologien nicht nur nutzen, sondern formen. Für mich geht es darum, eigene Systeme, Tools und Produkte zu schaffen, die Menschen wirklich weiterbringen. Ich glaube daran, dass gute digitale Lösungen mehr sind als Code – sie sollen begeistern, inspirieren und echte Freiräume schaffen. Mein Antrieb ist es, Neues zu lernen, Altes zu hinterfragen und eigene Ideen in die Welt zu bringen, die was bewegen.</p>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="flex-1 glassmorphism p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold text-primary mb-3">Innovation</h5>
                  <p className="text-muted-foreground text-sm">
                    Ständiges Lernen, neugierig bleiben und die Möglichkeiten neuer Technologien wirklich ausreizen. Ich will keine fertigen Rezepte, sondern eigene Lösungen entwickeln, die nach vorn schauen.
                  </p>
                </div>
                <div className="flex-1 glassmorphism p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold text-secondary mb-3">Kreativität</h5>
                  <p className="text-muted-foreground text-sm">
                    Technik trifft Ästhetik. Design und Code gehören für mich zusammen. Ich will digitale Erlebnisse schaffen, die funktionieren, sich gut anfühlen und die man nicht einfach wieder vergisst.
                  </p>
                </div>
                <div className="flex-1 glassmorphism p-6 rounded-2xl">
                  <h5 className="text-lg font-semibold text-accent mb-3">Impact</h5>
                  <p className="text-muted-foreground text-sm">Ich baue keine Projekte fürs Portfolio, sondern für echten Nutzen. Ob Tools, Websites oder Produkte – was ich mache, soll Menschen helfen, inspirieren oder einfach etwas in Bewegung setzen.</p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
