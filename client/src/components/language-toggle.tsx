import React from 'react';
import { Button } from './ui/button';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 glassmorphism border border-primary/20 hover:border-primary/40 transition-all duration-300"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'de' ? 'EN' : 'DE'}</span>
    </Button>
  );
};
