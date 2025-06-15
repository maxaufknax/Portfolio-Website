import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Hero Section
    'hero.badge': 'Digital Portfolio - 1.6',
    'hero.name': 'Max Paasch',
    'hero.subtitle': 'Zwischen Code & Kreativität',
    'hero.description': 'Digitale Innovation durch die Fusion von Technologie und Design. Mein selbstentwickeltes digitales Portfolio.',
    'hero.projects': 'Meine Projekte',
    'hero.contact': 'Kontakt',
    
    // Navigation
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    
    // About Section
    'about.title': 'Über mich',
    'about.intro': 'Während andere noch überlegen, bau ich es einfach. Learning by Doing, 100%.',
    'about.background': 'Mein Hintergrund',
    'about.backgroundText': 'Als Student der Mediendesigninformatik beschäftige ich mich täglich mit der Schnittstelle zwischen Design und Technologie. Meine Leidenschaft liegt darin, komplexe technische Lösungen in intuitive und ästhetisch ansprechende Benutzererfahrungen zu verwandeln.',
    'about.skills': 'Meine Fähigkeiten',
    'about.frontend': 'Frontend-Entwicklung',
    'about.backend': 'Backend-Entwicklung',
    'about.design': 'UI/UX Design',
    'about.tools': 'Tools & Technologien',
    'about.interests': 'Interessen & Hobbys',
    'about.interestsText': 'Neben dem Programmieren interessiere ich mich für moderne Webtechnologien, KI-Entwicklung und innovative Designtrends. In meiner Freizeit experimentiere ich gerne mit neuen Frameworks und Bibliotheken.',
    
    // Projects Section
    'projects.title': 'Meine Projekte',
    'projects.subtitle': 'Innovative Lösungen aus Software-Entwicklung und kreativer Medienproduktion',
    'projects.viewAll': 'Alle Projekte anzeigen',
    'projects.viewDetails': 'Details anzeigen',
    'projects.technologies': 'Verwendete Technologien',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Quellcode',
    
    // Contact Section
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Kontaktinformationen',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.location': 'Standort',
    'contact.send': 'Nachricht senden',
    'contact.name': 'Name',
    'contact.message': 'Nachricht',
    'contact.namePlaceholder': 'Ihr Name',
    'contact.emailPlaceholder': 'ihre.email@beispiel.com',
    'contact.messagePlaceholder': 'Ihre Nachricht...',
    
    // Password Protection
    'password.title': 'Geschützter Bereich',
    'password.subtitle': 'Bitte geben Sie das Passwort ein, um fortzufahren',
    'password.placeholder': 'Passwort eingeben',
    'password.submit': 'Zugang',
    'password.footer': 'Maximilian Paasch - Digital Portfolio',
    'password.error': 'Falsches Passwort. Bitte versuchen Sie es erneut.',
    
    // General
    'general.loading': 'Laden...',
    'general.error': 'Ein Fehler ist aufgetreten',
    'general.close': 'Schließen',
  },
  en: {
    // Hero Section
    'hero.badge': 'Digital Portfolio - 1.6',
    'hero.name': 'Max Paasch',
    'hero.subtitle': 'Between Code & Creativity',
    'hero.description': 'Digital innovation through the fusion of technology and design. My self-developed digital portfolio.',
    'hero.projects': 'My Projects',
    'hero.contact': 'Contact',
    
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // About Section
    'about.title': 'About Me',
    'about.intro': 'While others are still thinking, I\'m already building it. Learning by doing, 100%.',
    'about.background': 'My Background',
    'about.backgroundText': 'As a Media Design Informatics student, I work daily at the intersection of design and technology. My passion lies in transforming complex technical solutions into intuitive and aesthetically pleasing user experiences.',
    'about.skills': 'My Skills',
    'about.frontend': 'Frontend Development',
    'about.backend': 'Backend Development',
    'about.design': 'UI/UX Design',
    'about.tools': 'Tools & Technologies',
    'about.interests': 'Interests & Hobbies',
    'about.interestsText': 'Besides programming, I\'m interested in modern web technologies, AI development, and innovative design trends. In my free time, I enjoy experimenting with new frameworks and libraries.',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'Innovative solutions from software development and creative media production',
    'projects.viewAll': 'View All Projects',
    'projects.viewDetails': 'View Details',
    'projects.technologies': 'Technologies Used',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.send': 'Send Message',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your Name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': 'Your message...',
    
    // Password Protection
    'password.title': 'Protected Area',
    'password.subtitle': 'Please enter the password to continue',
    'password.placeholder': 'Enter password',
    'password.submit': 'Access',
    'password.footer': 'Maximilian Paasch - Digital Portfolio',
    'password.error': 'Incorrect password. Please try again.',
    
    // General
    'general.loading': 'Loading...',
    'general.error': 'An error occurred',
    'general.close': 'Close',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'de';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
