import { BookOpen, ArrowRight, Calculator, FlaskConical, Globe, Laptop } from 'lucide-react';
import locusLogo from '../assets/locuslogo.png';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { t, lang } = useApp();

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const statsByLang = {
    uz: [
      { val: '7+', lbl: "Yo'nalishlar" },
      { val: '100%', lbl: 'Sifat kafolati' },
      { val: '24/7', lbl: "Qo'llab-quvvatlash" },
    ],
    ru: [
      { val: '7+', lbl: 'Направлений' },
      { val: '100%', lbl: 'Гарантия качества' },
      { val: '24/7', lbl: 'Поддержка' },
    ],
    en: [
      { val: '7+', lbl: 'Disciplines' },
      { val: '100%', lbl: 'Quality Guarantee' },
      { val: '24/7', lbl: 'Support' },
    ],
  };

  const stats = statsByLang[lang] || statsByLang.uz;

  return (
    <section id="home" className="hero">
      {/* Background elements */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient-1" />
        <div className="hero-gradient-2" />
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-dots-grid">
          {Array.from({ length: 63 }).map((_, i) => (
            <div key={i} className="hero-dot" />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Left: Text & CTA */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              {t.hero.badge}
            </div>

            <h1 className="hero-title">
              {t.hero.title1}{' '}
              <span className="accent">{t.hero.title2}</span>{' '}
              {t.hero.title3}
            </h1>

            <p className="hero-desc">{t.hero.description}</p>

            <div className="hero-actions">
              <button
                id="hero-courses-btn"
                className="btn btn-primary"
                onClick={() => handleNavClick('#courses')}
                aria-label={t.hero.ctaPrimary}
              >
                <BookOpen size={18} aria-hidden="true" />
                {t.hero.ctaPrimary}
              </button>
              <button
                id="hero-consult-btn"
                className="btn btn-secondary"
                onClick={() => handleNavClick('#contact')}
                aria-label={t.hero.ctaSecondary}
              >
                {t.hero.ctaSecondary}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="hero-price-card">
              <div>
                <div className="hero-price-label">{t.hero.priceLabel}</div>
                <div className="hero-price-value">
                  <span>{t.hero.priceValue}</span> {t.hero.priceFrom}
                </div>
              </div>
            </div>

            <div className="hero-stats">
              {stats.map((s, idx) => (
                <div key={idx} className="hero-stat">
                  <div className="hero-stat-value">{s.val}</div>
                  <div className="hero-stat-label">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Logo Visual with Orbits */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-logo-container">
              <div className="hero-logo-bg" />
              <div className="hero-logo-ring" />
              <div className="hero-logo-ring hero-logo-ring-2" />
              <img src={locusLogo} alt="Lokus Academy Logo" className="hero-logo-img" />

              <div className="hero-orbit-cards">
                <div className="orbit-card orbit-top" title="Matematika">
                  <Calculator size={22} />
                </div>
                <div className="orbit-card orbit-right" title="Tillar">
                  <Globe size={22} />
                </div>
                <div className="orbit-card orbit-bottom" title="Tabiiy fanlar">
                  <FlaskConical size={22} />
                </div>
                <div className="orbit-card orbit-left" title="IT">
                  <Laptop size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
