import {
  Calculator,
  BookOpen,
  FlaskConical,
  Leaf,
  Globe,
  BarChart2,
  Laptop,
  ArrowRight,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useApp } from '../context/AppContext';

export default function Courses() {
  const { t } = useApp();
  const ref = useScrollReveal();

  const icons = [
    <Calculator size={26} key="calc" />,
    <BookOpen size={26} key="book" />,
    <FlaskConical size={26} key="flask" />,
    <Leaf size={26} key="leaf" />,
    <Globe size={26} key="globe" />,
    <BarChart2 size={26} key="chart" />,
    <Laptop size={26} key="laptop" />,
  ];

  const handleEnroll = (courseName) => {
    window.dispatchEvent(new CustomEvent('select-course', { detail: courseName }));
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="section courses-section" aria-labelledby="courses-title">
      <div className="container" ref={ref}>
        <div className="section-header">
          <div className="section-tag reveal">📚 {t.courses.tag}</div>
          <h2 id="courses-title" className="section-title reveal reveal-delay-1">
            {t.courses.title}
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            {t.courses.subtitle}
          </p>
        </div>

        <div className="courses-grid">
          {t.courses.items.map((course, i) => {
            const delay = (i % 4) + 1;
            return (
              <article
                key={i}
                className={`course-card reveal reveal-delay-${delay}`}
                aria-label={course.name}
              >
                <div className="course-card-top-bar" />
                <div className="course-icon-wrap" aria-hidden="true">
                  {icons[i] || <BookOpen size={26} />}
                </div>
                <div className="course-tag">{course.tag}</div>
                <h3 className="course-name">{course.name}</h3>
                <p className="course-desc">{course.desc}</p>
                <div className="course-footer">
                  <div className="course-price">
                    Narxi: <strong>{t.courses.priceFrom}</strong>
                  </div>
                  <button
                    className="btn btn-outline-accent course-btn"
                    onClick={() => handleEnroll(course.name)}
                    aria-label={`${course.name} — ${t.courses.enrollBtn}`}
                  >
                    {t.courses.enrollBtn}
                    <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
