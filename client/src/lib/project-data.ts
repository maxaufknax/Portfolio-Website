export interface ProjectVersion {
  name: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description?: string;
  isVideo?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subheadline: string;
  image: string;
  imageAlt: string;
  overview: string;
  description: string;
  features: string[];
  technologies: string[];
  technologiesTitle?: string; // Optionaler Titel für den Technologie/Tools-Abschnitt
  prerequisites?: string[]; // Optional, da nicht alle Projekte Voraussetzungen haben
  impact: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  versions?: { // Optional, da nicht alle Projekte Versionen haben
    stable: ProjectVersion[];
    beta: ProjectVersion[];
    experimental: ProjectVersion[];
  };
  pdfUrl?: string; // Optional
  videoUrl?: string; // Optional für Video-Showcases
  gallery?: GalleryImage[]; // Optional für Bildergalerien
}

export const projects: Project[] = [
  {
    id: 'medical-spytool',
    title: 'Medical Spytool', // Aktualisiert
    subheadline: 'KI-gestützte Plattform zur Recherche medizinischer Publikationen', // Hinzugefügt
    description: 'Intelligente Suchplattform für medizinische und wissenschaftliche Publikationen mit erweiterten Filterfunktionen und KI-gestützter Analyse.', // Leicht angepasst
    overview: 'Medical Spytool ist eine KI-gestützte Plattform, die Ärzt*innen, Medizinstudent*innen, Wissenschaftler*innen und anderen Healthcare Professionals hilft, medizinische Publikationen schnell, präzise und personalisiert zu recherchieren. Durch KI-gestützte Analyse und Priorisierung der Suchergebnisse wird die Literaturrecherche für Praxis, Studium und Forschung deutlich effizienter.', // Aktualisiert
    features: [
      'KI-gestützte Analyse und Priorisierung',
      'Erweiterte Datenbanksuche',
      'Intelligente Filteroptionen',
      'Personalisierte Suchergebnisse',
      'Export- und Speicherfunktionen',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'NLP-Frameworks (für medizinische Textanalyse)'], // Aktualisiert
    versions: { // Hinzugefügt
      stable: [
        { name: 'medicalspy-1.0', description: 'Stabile Desktop Version: Anwendung für umfangreiche Such- und Analyse Funktionen für Wissenschaftliche Publikationen und Ressourcen in PubMed und DNB (Deutsche Nationalbibliothek)' },
        { name: 'medicalspy-1.4', description: 'Stabile Desktop Version: Verbesserung von Benutzerfreundlichkeit der UI und mehr Ergebnissen. (PubMed DOI, Vollständige Quellen usw.)' }
      ],
      beta: [
        { name: 'medicalspy-5.0', description: 'Beta Web Version: Vollständig überarbeitete Web Anwendung für Benutzerdefinierte Such- und Analyse Funktionen. (Erweiterte Suchmodis, Erweiterte Personenliste, Erweiterte Datenbanksuchen: Scopus, Web of Science, GEPRIS)' },
        { name: 'medicalspy-5.5', description: 'Beta Web Version: Verbesserung der UI und Suchfunktionalität.' }
      ],
      experimental: [
        { name: 'medicalspy-5.5', description: 'Experimental Web Version: Implementierung einer KI gestützten Suche und Analyse über OpenAI und Gemini API. (Besonders Benutzerfreundliche Suche durch einfachen Chat Prompt)' }
      ],
    },
    impact: 'Verkürzt die Recherche-Zeit signifikant und verbessert die Präzision wissenschaftlicher Literatursuchen durch KI-gestützte Analyse.', // Angepasst
    image: '/Design ohne Titel.png', // Aktualisiertes Bild
    imageAlt: 'Medical Spytool - Neues Design der Benutzeroberfläche', // Aktualisierter Alternativtext
    githubUrl: 'https://github.com/maxaufknax/Medical-Spytool',
    pdfUrl: '/Portfolio - Medical Spytool.pdf'
  },
  {
    id: 'ai-discord-bot',
    title: 'General Purpose AI Discord Bot',
    subheadline: 'Lokaler Discord Bot mit Google Gemini & eigener Wissensdatenbank',
    image: '/Design ohne Titel 2.png',
    imageAlt: 'KI Discord Bot Benutzeroberfläche und Logo',
    overview:
      'Ein flexibler und benutzerfreundlicher Discord-Bot, der auf Google Gemini AI basiert und für den lokalen Betrieb konzipiert ist. Er kann mit Ihren eigenen API-Schlüsseln und einer optionalen benutzerdefinierten Wissensdatenbank konfiguriert werden.',
    description:
      'Dieser KI-gestützte Discord-Bot wurde entwickelt, um eine nahtlose Integration von fortschrittlicher KI in Discord-Server zu ermöglichen. Benutzer können natürliche Gespräche führen, Bilder analysieren lassen und von einer kontextbezogenen Konversationsführung profitieren. Die Möglichkeit, eine eigene Wissensdatenbank einzubinden, macht ihn besonders anpassungsfähig für spezifische Anwendungsfälle. Eine einfache Desktop-GUI erleichtert die Konfiguration und Verwaltung.',
    features: [
      'Konversationelle KI: Führt natürliche Gespräche, beantwortet Fragen und unterstützt bei verschiedenen Aufgaben mithilfe von Google Gemini.',
      'Anpassbare Wissensdatenbank: Verbessert die Antworten des Bots durch Bereitstellung einer eigenen Wissensdatenbank. Verweisen Sie den Bot einfach auf ein Verzeichnis mit Ihren .txt-, .pdf- oder .md-Dateien.',
      'Bildanalyse: Der Bot kann Bilder analysieren und diskutieren, die Sie im Chat hochladen, wenn Sie ihn erwähnen.',
      'Kontextmanagement: Merkt sich den Gesprächsverlauf für relevantere und kohärentere Antworten.',
      'Mehrsprachige Unterstützung: Erkennt und antwortet automatisch auf Deutsch oder Englisch (erweiterbar).',
      'Benutzerfreundliche GUI: Eine einfache Desktop-Oberfläche ermöglicht die einfache Konfiguration von API-Schlüsseln, des Wissensdatenbankverzeichnisses und das Starten/Stoppen des Bots.',
      'Lokale Ausführung: Läuft auf Ihrem eigenen Computer und gibt Ihnen volle Kontrolle.',
    ],
    technologies: ['Python', 'Discord.py', 'Google Gemini API', 'Tkinter (für GUI)', 'Langchain'],
    prerequisites: [
      'Python 3.9+ (Python 3.11+ empfohlen)',
      'Discord Bot Token',
      'Google Gemini API Key',
    ],
    impact:
      'Der Bot ermöglicht eine direkte und kontrollierte Nutzung von leistungsstarker KI in Discord-Communities. Durch die lokale Ausführung und die Möglichkeit, eine eigene Wissensdatenbank zu integrieren, bietet er ein hohes Maß an Datenschutz und Anpassbarkeit, was ihn ideal für private Server oder spezielle Interessengruppen macht.',
    githubUrl: 'https://github.com/maxaufknax/AI-Discord-Bot', // Aktualisierter GitHub Link
    videoUrl: '/ai discord bot showcase video.mp4',
    pdfUrl: '/Portfolio - Digital Portfolio.pdf'
  },
  {
    id: 'soulscribe',
    title: 'SoulScribe',
    subheadline: 'KI-gestützte Journaling-Anwendung für Reflexion & mentales Wohlbefinden',
    image: '/Design ohne Titel 3.png', 
    imageAlt: 'SoulScribe - Benutzeroberfläche einer KI-gestützten Journaling-Anwendung mit Beispielen für Reflexionsanregungen',
    overview:
      'SoulScribe ist eine innovative KI-gestützte Journaling-Anwendung, die persönliche Reflexion und mentales Wohlbefinden fördert. Sie kombiniert traditionelle Journaling-Praktiken mit moderner KI, um Nutzern ein einzigartiges Schreiberlebnis zu bieten, inklusive intelligenter Prompts und Stimmungsanalysen.',
    description:
      'Das Projekt zielt darauf ab, Menschen dabei zu helfen, ihre Gedanken und Emotionen besser zu verstehen, indem es intelligente, adaptive Schreibanregungen, detaillierte Stimmungsanalysen und personalisierte Einsichten bereitstellt. SoulScribe fungiert als digitaler Begleiter für die persönliche Entwicklung, emotionale Intelligenz und Selbstreflexion. Die Anwendung bietet eine intuitive Benutzeroberfläche mit anpassbaren Themes, Kalenderansicht und Datenvisualisierungen wie Stimmungsgraphen und Wortwolken. Sicherheit und Datenschutz stehen im Vordergrund, gewährleistet durch sichere Authentifizierung und verschlüsselte Datenübertragung. Premium-Funktionen über Stripe-Integration erweitern die Möglichkeiten zusätzlich.',
    features: [
      'Intelligentes Journaling mit KI-generierten, adaptiven Prompts & Reflexionskarten',
      'Emotionale Analyse mit Stimmungstracking, Sentiment-Verlaufsgraphen & Mustererkennung',
      'Responsive UI mit Dunkel/Hell-Modus, Drag & Drop und Kalenderansicht',
      'Datenvisualisierung (Dashboard, Stimmungsdiagramme, Kategorien-Charts, Word-Clouds)',
      'Sichere Authentifizierung, verschlüsselte Datenübertragung und privater Datenspeicherung',
      'Notizen-System, Gedankenprojekte und Export-Funktionalität',
      'Premium-Features (Abo-Modell) für erweiterte KI-Analysen und unbegrenzten Speicher',
    ],
    technologies: [
      'React 18.3',
      'TypeScript 5.6',
      'Tailwind CSS 3.4',
      'Wouter',
      'React Query',
      'Framer Motion',
      'Radix UI',
      'Node.js',
      'Express 4.21',
      'WebSocket',
      'Passport.js',
      'PostgreSQL',
      'Drizzle ORM 0.39',
      'OpenAI API (GPT-4)',
      'Stripe',
      'Vite 5.4',
    ],
    prerequisites: [
      'Node.js 18.x+',
      'PostgreSQL 14.x+',
      'npm 9.x+',
      'OpenAI Account (für KI-Funktionen)',
      'Stripe Account (optional für Entwicklung der Zahlungsfunktionen)',
    ],
    impact:
      'Fördert persönliche Entwicklung und emotionale Intelligenz durch strukturierte Selbstreflexion. Dient als Werkzeug zur Stressreduktion und Zielverfolgung. Bietet Potenzial für Therapeuten zur Klientenunterstützung und für Unternehmen im Bereich Mitarbeiterwohlbefinden und Burnout-Prävention.',
    githubUrl: 'https://github.com/maxaufknax/SoulScribe-AI-Application', // Hinzugefügter GitHub Link
    pdfUrl: '/Portfolio - SoulScribe.pdf'
  },
  {
    id: 'media-portfolio', // ID bleibt vorerst gleich, kann später angepasst werden, falls gewünscht
    title: 'E-Commerce & Digital Marketing',
    subheadline: 'DTC Store-Konzeption, Design, Betrieb & Paid Media Kampagnen',
    image: '/Design ohne Titel 4.png', // Aktualisiertes Bild
    imageAlt: 'E-Commerce Projekt-Showcase auf einem Laptop-Bildschirm', // Aktualisierter Alternativtext
    overview:
      'Konzeption, Gestaltung und Betrieb von Direct-to-Consumer (DTC) E-Commerce Stores auf Shopify. Dies umfasste Store-Design, Produktvisualisierung (Foto & Video) und die Entwicklung sowie Optimierung von zielgerichteten Paid Media Kampagnen in enger Zusammenarbeit mit Digital Marketing & Performance-Teams.',
    description:
      'In meinen E-Commerce-Projekten habe ich komplette DTC (Direct to Consumer) Stores auf Shopify konzipiert, gestaltet und betrieben. Dazu gehörten Store-Design, Produktvisualisierung, Videoproduktion und die Entwicklung von zielgerichteten Paid Media Kampagnen. Ich habe eng mit Digital Marketing & Performance-Teams zusammengearbeitet und Content, Copy & Kampagnenstrukturen selbst entwickelt und optimiert. Der Fokus lag auf der Schaffung einer nahtlosen Customer Journey und der Maximierung der Conversion Rates durch datengetriebene Entscheidungen. Besonders erfolgreich waren meine Arbeiten im Bereich Creative Design - von überzeugenden Produktwerbungen bis hin zu kompletten Buchcover-Serien für digitale Produkte. Die kontinuierliche Analyse der Sales Performance durch detaillierte Dashboards ermöglichte gezielte Optimierungen des gesamten E-Commerce Funnels.',
    features: [
      'Shopify Store Design & Optimierung',
      'Produktvisualisierung (Fotos & Videos)',
      'Paid Media Kampagnen (Meta, TikTok, Pinterest)',
      'Copywriting & Conversion-optimierte Produkttexte',
      'Marketing Analytics & Performance Tracking',
      'Produktrecherche & Marktanalyse',
      'Sales Dashboard & KPI-Monitoring',
      'Creative Design für digitale Produkte (Buchcover, Ads)',
      'A/B Testing von Werbematerialien',
    ],
    technologiesTitle: 'Verwendete Tools & Programme', // Benutzerdefinierter Titel
    technologies: [
      'Shopify (Themes, Customizer, Apps)',
      'Photoshop',
      'Lightroom',
      'Premiere Pro',
      'Meta Business Suite (Facebook & Instagram Ads)',
      'TikTok Ads Manager',
      'Pinterest Ads',
      'Google Analytics',
      'Meta Pixel',
      'TikTok Pixel',
    ],
    impact:
      '360° Erfahrung im E-Commerce-Funnel von Store-Setup bis Paid Marketing. Erfolgreiche Skalierung mehrerer Shopify Stores mit Umsatzsteigerung durch optimierte Creatives & Copy. Hohe Conversion-Optimierung durch zielgerichtete Produktvisualisierung & UX-optimiertes Store-Design. Datengetriebenes Testing & kontinuierliche Kampagnenoptimierung in enger Teamarbeit.',
    gallery: [
      {
        src: '/ecommerce-sales-analytics.jpg',
        alt: 'E-Commerce Sales Analytics Dashboard mit detaillierten Performance-Metriken',
        title: 'Sales Performance Analytics',
        description: 'Umfassendes Analytics Dashboard für E-Commerce Performance-Tracking mit detaillierten Verkaufsdaten, Conversion-Raten und ROI-Metriken zur datengetriebenen Optimierung des Sales Funnels.'
      },
      {
        src: '/ecom_visual_1.png',
        alt: 'Unterschiedliche Produkt Visuals und Store Section Elemente für physische Produkte',
        title: 'Produkt Visuals & Store Elemente',
        description: 'Verschiedene Marketing Visuals für physische Produkte inklusive Store Section Elementen, Produktvisualisierungen und kreativen Assets für E-Commerce Stores.'
      },
      {
        src: '/ecom_visual_2.png',
        alt: 'Produkt Visuals und Organic Ads für digitale Produkte wie E-Books',
        title: 'Digitale Produkt Visuals & Organic Ads',
        description: 'Unterschiedliche Produkt Visuals und Organic Ads mit Fokus auf digitale Produkte, insbesondere E-Books und weitere digitale Inhalte für den Online-Verkauf.'
      },
      {
        src: '/ecom_video_1.MP4',
        alt: 'Social Media Werbeanzeige für Keyguard Box - Schutz vor Autodiebstahl',
        title: 'Keyguard Box Social Media Ad',
        description: 'Professionelle Social Media Werbeanzeige für ein physisches Produkt - eine Keyguard Box, die Schallwellen von drahtlosen Autoschlüsseln vor Autodieben schützt.',
        isVideo: true
      },
      {
        src: '/ecom_video_2.MP4',
        alt: 'Social Media Werbeanzeige für Cat Dental Sticks - Katzenhygiene',
        title: 'Cat Dental Sticks Social Media Ad',
        description: 'Kreative Social Media Werbeanzeige für Cat Dental Sticks, ein physisches Produkt das Katzen hygienevolles Kauen und gesunde Ernährung ermöglicht.',
        isVideo: true
      }
    ],
    githubUrl: 'https://github.com/maxaufknax/E-Commerce', // Hinzugefügter GitHub Link
    pdfUrl: '/Portfolio - E-Commerce.pdf'
  },
  {
    id: 'bfd-mhh',
    title: 'BFD - Medizinische Hochschule Hannover',
    subheadline: 'Projekte und Arbeiten im Bundesfreiwilligendienst',
    image: '/Design ohne Titel 5.png', // Aktualisiertes Bild
    imageAlt: 'Außenansicht der Medizinischen Hochschule Hannover mit MHH-Logo und Fahnen', // Aktualisierter Alternativtext
    overview:
      'Während meines Bundesfreiwilligendienstes im Dekanat für Akademische Karrierenetwicklung an der Medizinischen Hochschule Hannover (MHH) war ich an verschiedenen Projekten beteiligt. Diese umfassten die Unterstützung bei der Organisation von Veranstaltungen, Datenmanagement und die Erstellung von Informationsmaterialien sowie Poster-Designs für Events.',
    description:
      'Dieser Abschnitt dokumentiert meine Tätigkeiten und Projekte während des Bundesfreiwilligendienstes an der MHH. Zu meinen Aufgaben gehörten die Pflege von Datenbanken, die Unterstützung bei der Vorbereitung und Durchführung von Workshops und Informationsveranstaltungen für den wissenschaftlichen Nachwuchs sowie die Mitarbeit an der Erstellung von Präsentationen, Berichten und professionellen Event-Postern. Besonders hervorzuheben ist meine Arbeit im Bereich Mediengestaltung, wo ich eigenverantwortlich Poster für verschiedene Promotionsprogramme und Veranstaltungen gestaltet habe. Ich konnte wertvolle Einblicke in die Strukturen einer großen medizinischen Einrichtung und in die Förderung akademischer Karrieren gewinnen.',
    features: [
      'Veranstaltungsorganisation und -unterstützung',
      'Datenbankpflege und -management',
      'Poster-Design und Mediengestaltung für Events und Programme',
      'Erstellung von Präsentationen und Informationsmaterialien',
      'Unterstützung administrativer Prozesse im Dekanat',
      'Einblicke in die akademische Karriereförderung im medizinischen Bereich',
      'Design von Kommunikationsmaterialien für strukturierte Promotionsprogramme',
    ],
    technologiesTitle: 'Eingesetzte Software & Tools',
    technologies: [
      'Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)',
      'Adobe Creative Suite (für Poster-Design)',
      'Canva Pro (für Event-Materialien)',
      'Datenbankmanagementsysteme (z.B. Access-basiert oder spezifische MHH-Systeme)',
      'Content-Management-Systeme (ggf. für Webseitenpflege)',
      'Bildbearbeitungssoftware (Grundlagen)',
    ],
    impact:
      'Aktive Unterstützung der Prozesse im Dekanat für Akademische Karrierenetwicklung. Beitrag zur erfolgreichen Durchführung von Veranstaltungen und zur Pflege wichtiger Datenbestände. Eigenverantwortliche Gestaltung professioneller Event-Poster, die zur visuellen Kommunikation der Promotionsprogramme beitrugen. Erweiterung meiner organisatorischen, administrativen und gestalterischen Fähigkeiten in einem professionellen Umfeld.',
    gallery: [
      {
        src: '/Poster-StrucProgramme-Vorstellungstag-04-02-2025.pdf.png',
        alt: 'Informationsposter für strukturierte Promotionsprogramme - Vorstellungstag 04.02.2025',
        title: 'Promotionsprogramme Vorstellungstag',
        description: 'Gestaltetes Poster für die Informationsveranstaltung der strukturierten Promotionsprogramme an der MHH. Das Design kommuniziert die drei verschiedenen Programme (StrucMed, KlinStrucMed, DigiStrucMed) visuell klar und ansprechend.'
      },
      {
        src: '/Poster 1.2 (SIE).pdf.png',
        alt: 'Informatik Masterarbeit in der digitalen Medizin Poster',
        title: 'Informatik Masterarbeit Poster',
        description: 'Professionelles Poster zur Bewerbung für Informatik-Masterarbeiten im Bereich digitaler Medizin. Zeigt Einsatzgebiete, Programmstruktur und Bewerbungsfristen übersichtlich auf.'
      },
      {
        src: '/Schnellstart-Anleitung Termin‑Platzhalter in Outlook.pdf.png',
        alt: 'Schnellstart-Anleitung für Termin-Platzhalter in Outlook',
        title: 'Outlook Schnellstart-Anleitung',
        description: 'Entwickelte Automatisierungsprozesse und Makros für Office-Programme sowie benutzerfreundliche Anleitungen für optimierte Arbeitsabläufe. Kombiniert technische Umsetzung mit klarer visueller Gestaltung.'
      }
    ],
    // githubUrl: 'Link zum relevanten GitHub-Repository, falls vorhanden' // Optional
    liveDemoUrl: 'https://www.mhh.de/akademische-karriereentwicklung', // Link zur offiziellen Abteilungsseite
    pdfUrl: '/Portfolio - BFD Portfolio.pdf'
  }
  // Weitere Projekte können hier hinzugefügt werden
];