import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Theme: dark | light
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('locus-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Language: uz | ru | en
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('locus-lang') || 'uz';
  });

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('locus-theme', theme);
  }, [theme]);

  // Save language
  useEffect(() => {
    localStorage.setItem('locus-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  const t = translations[lang] || translations.uz;

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
