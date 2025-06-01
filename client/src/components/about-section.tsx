export default function AboutSection() {
  const skills = [
    'Python', 'React', 'TensorFlow', 'Node.js', 'Adobe CC', 'Three.js',
    'TypeScript', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'Figma'
  ];

  const strengths = [
    { category: 'Technical', items: ['E-Commerce', 'Digital Marketing', 'Webdesign'] },
    { category: 'Creative', items: ['Mediendesign', 'Video Editing', 'Creative Problem Solving'] }
  ];

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
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with multiple monitors and clean setup" 
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Skills Tags Overlay */}
            <div className="absolute inset-0 flex items-end p-6">
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
