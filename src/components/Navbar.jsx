import { useState, useEffect } from 'react';
import locusLogo from '../assets/locuslogo.png';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LANGUAGES } from '../i18n/translations';

export default function Navbar() {
  const { theme, toggleTheme, lang, setLang, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.courses, href: '#courses' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <div
            className="navbar-logo"
            onClick={() => handleNavClick('#home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('#home')}
            aria-label="Lokus Academy"
          >
            <img src={locusLogo} alt="Lokus Academy" />
          </div>

          {/* Desktop Menu */}
          <ul className="navbar-menu" role="navigation" aria-label="Asosiy menyu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <span
                  className="nav-link"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleNavClick(link.href)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNavClick(link.href)}
                >
                  {link.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Desktop Controls (Lang, Theme, CTA) */}
          <div className="navbar-controls">
            {/* Language Switcher */}
            <div className="lang-switcher" role="group" aria-label="Til tanlash">
              {LANGUAGES.map((item) => (
                <button
                  key={item.code}
                  className={`lang-btn ${lang === item.code ? 'active' : ''}`}
                  onClick={() => setLang(item.code)}
                  aria-label={item.fullLabel}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              title={theme === 'dark' ? 'Kunduzgi rejim' : 'Tungi rejim'}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* CTA Button */}
            <button
              className="btn btn-primary navbar-cta"
              onClick={() => handleNavClick('#contact')}
              aria-label={t.nav.enroll}
            >
              {t.nav.enroll}
            </button>

            {/* Hamburger for mobile */}
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
              aria-expanded={menuOpen}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Mobil menyu"
      >
        {navLinks.map((link) => (
          <span
            key={link.href}
            className="mobile-nav-link"
            role="button"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => handleNavClick(link.href)}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick(link.href)}
          >
            {link.label}
          </span>
        ))}

        {/* Mobile controls: Lang switcher + theme */}
        <div className="mobile-controls">
          <div className="lang-switcher" style={{ display: 'flex' }} role="group" aria-label="Til tanlash">
            {LANGUAGES.map((item) => (
              <button
                key={item.code}
                className={`lang-btn ${lang === item.code ? 'active' : ''}`}
                onClick={() => setLang(item.code)}
                aria-label={item.fullLabel}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="theme-toggle"
            style={{ display: 'flex' }}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => handleNavClick('#contact')}
          style={{ width: '100%', marginTop: '14px' }}
        >
          {t.nav.enroll}
        </button>
      </div>
    </>
  );
}
