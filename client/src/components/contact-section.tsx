import { Mail, ExternalLink, Phone } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Mein Kontakt</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Kontaktinformationen</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:maximilian.elias.paasch@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    maximilian.elias.paasch@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Telefon</p>
                  <a href="tel:+491624957468" className="text-muted-foreground hover:text-primary transition-colors">
                    +49 1624957468
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <SiLinkedin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/max-paasch" 
                    className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.linkedin.com/in/max-paasch
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <SiGithub className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a 
                    href="https://github.com/maxaufknax" 
                    className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/maxaufknax
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
