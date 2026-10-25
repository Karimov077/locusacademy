import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import locusLogo from '../assets/locuslogo.png';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useApp } from '../context/AppContext';

export default function Why() {
  const { t, lang } = useApp();
  const ref = useScrollReveal();

  const emojis = ['🧮', '🌍', '🔬', '💻'];

  const subLabels = {
    uz: "Ta'lim yo'nalishlari",
    ru: 'Направления обучения',
    en: 'Educational Programs',
  };

  const handleCta = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="why" className="section why-section" aria-labelledby="why-title">
      <div className="container" ref={ref}>
        <div className="why-layout">
          {/* Content */}
          <div className="why-content">
            <div className="section-tag reveal">
              <Sparkles size={14} aria-hidden="true" />
              {t.why.tag}
            </div>
            <h2 id="why-title" className="section-title reveal reveal-delay-1">
              {t.why.title}
            </h2>
            <p className="section-subtitle reveal reveal-delay-2">
              {t.why.subtitle}
            </p>

            <ul className="why-list" aria-label="Afzalliklar ro'yxati">
              {t.why.items.map((point, i) => (
                <li
                  key={i}
                  className={`why-item reveal reveal-delay-${i + 2}`}
                >
                  <div className="why-icon" aria-hidden="true">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="why-item-title">{point.title}</h3>
                    <p className="why-item-desc">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-6" style={{ marginTop: '36px' }}>
              <button
                className="btn btn-primary"
                onClick={handleCta}
                aria-label={t.why.ctaBtn}
              >
                {t.why.ctaBtn}
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Visual Panel with Logo */}
          <div className="why-visual-panel reveal reveal-delay-2" aria-hidden="true">
            <div className="why-logo-row">
              <img src={locusLogo} alt="Lokus Academy" />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Lokus Academy
                </div>
                <div className="why-logo-label">
                  {subLabels[lang] || subLabels.uz}
                </div>
              </div>
            </div>

            {t.why.directions.map((dir, i) => (
              <div key={i} className="why-direction-item">
                <div className="why-dir-emoji">{emojis[i] || '✨'}</div>
                <div>
                  <div className="why-dir-name">{dir.name}</div>
                  <div className="why-dir-sub">{dir.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
