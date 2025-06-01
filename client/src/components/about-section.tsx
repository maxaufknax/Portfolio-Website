export default function AboutSection() {
  const skills = [
    'Python', 'React', 'TensorFlow', 'Node.js', 'Adobe CC', 'Three.js',
    'TypeScript', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'Figma'
  ];

  const strengths = [
    { category: 'Technical', items: ['AI Integration', 'Full-Stack Development', 'UX/UI Design'] },
    { category: 'Creative', items: ['Media Production', 'Data Analysis', 'Creative Problem Solving'] }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between technical innovation and creative expression
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="glassmorphism p-8 rounded-2xl animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently pursuing Media Design Informatics, I'm passionate about creating intelligent, 
                user-centered digital experiences. My work spans from AI-powered applications to 
                immersive media projects, always with a focus on meaningful innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of technology to enhance human creativity and solve real-world problems. 
                Whether it's developing medical analysis tools or crafting engaging digital content, 
                I approach each project with curiosity and dedication.
              </p>
            </div>
            
            <div className="glassmorphism p-8 rounded-2xl animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Core Strengths</h3>
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
