import { Users, Target, Building2, BookMarked } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useApp } from '../context/AppContext';

export default function Features() {
  const { t } = useApp();
  const ref = useScrollReveal();

  const icons = [
    <Users size={24} key="users" />,
    <Target size={24} key="target" />,
    <Building2 size={24} key="building" />,
    <BookMarked size={24} key="book" />,
  ];

  return (
    <section id="about" className="section features-section" aria-labelledby="features-title">
      <div className="container" ref={ref}>
        <div className="section-header">
          <div className="section-tag reveal">✦ {t.features.tag}</div>
          <h2 id="features-title" className="section-title reveal reveal-delay-1">
            {t.features.title}
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            {t.features.subtitle}
          </p>
        </div>

        <div className="features-grid">
          {t.features.items.map((feature, i) => (
            <article
              key={i}
              className={`feature-card reveal reveal-delay-${i + 1}`}
              aria-label={feature.title}
            >
              <div className="feature-icon-wrap" aria-hidden="true">
                {icons[i] || <Users size={24} />}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
