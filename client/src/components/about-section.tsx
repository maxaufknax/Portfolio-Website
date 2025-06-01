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
        title: 'Freie Evangelische Grundschule Hannover',
        description: 'Grundschulzeit mit christlichen Werten und individueller Förderung',
        type: 'education'
      },
      {
        period: '2015 - 2021',
        title: 'IGS Bothfeld Gesamtschule',
        description: 'Erweiterten Realschulabschluss mit Notendurchschnitt 2,6',
        type: 'education'
      },
      {
        period: '2021 - 2024',
        title: 'IGS Bothfeld Gesamtschule',
        description: 'Allgemeine Fachhochschulreife - Schulischer Teil abgeschlossen',
        type: 'education'
      }
    ],
    career: [
      {
        period: '05.2020 - 03.2021',
        title: 'Wochenblattbote',
        description: 'Lokalboten Hannover - Eigenverantwortliche Zeitungsverteilung',
        type: 'work'
      },
      {
        period: '12.2019 - 10.2021',
        title: 'JuLeiCa-/MIA-Schulung',
        description: 'CVJM Hannover - Jugendleiterqualifikation und pädagogische Kompetenzen',
        type: 'training'
      },
      {
        period: '07.2024 - 01.2025',
        title: 'Digitalisierung Minijob',
        description: 'Pestalozzi Stiftung Burgwedel - Datenmanagement und HR-Software',
        type: 'work'
      },
      {
        period: '09.2024 - 09.2025',
        title: 'Bundesfreiwilligendienst',
        description: 'MHH - Digitalisierung, Mediengestaltung, Webdesign und IT-Automatisierung',
        type: 'service'
      }
    ],
    interests: [
      {
        period: '2018 - heute',
        title: 'KI & Machine Learning',
        description: 'Entwicklung von AI-Tools und intelligenten Anwendungen',
        type: 'tech'
      },
      {
        period: '2019 - heute',
        title: 'Medienproduktion',
        description: 'Fotografie, Videoproduktion und digitale Inhalte',
        type: 'creative'
      },
      {
        period: '2020 - heute',
        title: 'Web Development',
        description: 'Full-Stack Entwicklung mit modernen Frameworks',
        type: 'tech'
      },
      {
        period: '2021 - heute',
        title: 'Entrepreneurship',
        description: 'Aufbau eigener Projekte und kreative Selbstständigkeit',
        type: 'business'
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
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                        <span className="text-sm font-mono text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
