import { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useApp } from '../context/AppContext';

export default function ContactForm() {
  const { t } = useApp();
  const ref = useScrollReveal();

  const [fields, setFields] = useState({
    name: '',
    phone: '',
    course: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [apiError, setApiError] = useState('');

  // Listen to course selection from Course cards
  useEffect(() => {
    const handleSelectCourse = (e) => {
      if (e.detail) {
        setFields((prev) => ({ ...prev, course: e.detail }));
        setErrors((prev) => ({ ...prev, course: '' }));
      }
    };
    window.addEventListener('select-course', handleSelectCourse);
    return () => window.removeEventListener('select-course', handleSelectCourse);
  }, []);

  const validate = () => {
    const errs = {};
    if (!fields.name.trim()) {
      errs.name = t.form.errors.nameRequired;
    } else if (fields.name.trim().length < 2) {
      errs.name = t.form.errors.nameMin;
    }

    const phoneClean = fields.phone.replace(/\s/g, '');
    if (!phoneClean) {
      errs.phone = t.form.errors.phoneRequired;
    } else if (!/^\+998\d{9}$/.test(phoneClean)) {
      errs.phone = t.form.errors.phoneInvalid;
    }

    if (!fields.course) {
      errs.course = t.form.errors.courseRequired;
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneInput = (e) => {
    let value = e.target.value;
    if (value && !value.startsWith('+')) {
      value = '+998' + value.replace(/^998/, '');
    }
    setFields((prev) => ({ ...prev, phone: value }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setApiError('');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name.trim(),
          phone: fields.phone.replace(/\s/g, ''),
          course: fields.course,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setApiError(data.message || t.form.errors.apiError);
        setStatus('error');
      }
    } catch {
      setApiError(t.form.errors.apiError);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFields({ name: '', phone: '', course: '' });
    setErrors({});
    setStatus('idle');
    setApiError('');
  };

  const successMessageText = t.form.successDesc
    .replace('{name}', fields.name)
    .replace('{phone}', fields.phone);

  return (
    <section id="contact" className="section form-section" aria-labelledby="form-title">
      <div className="container" ref={ref}>
        <div className="form-layout">
          {/* Left info */}
          <div className="form-info">
            <div className="section-tag reveal">✉️ {t.form.tag}</div>
            <h2 id="form-title" className="section-title reveal reveal-delay-1">
              {t.form.title}
            </h2>
            <p className="section-subtitle reveal reveal-delay-2">
              {t.form.subtitle}
            </p>

            <ul className="form-info-points" aria-label="Ariza bo'yicha ma'lumot">
              {t.form.points.map((point, i) => (
                <li key={i} className={`form-info-point reveal reveal-delay-${i + 3}`}>
                  <div className="form-info-dot" aria-hidden="true" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-6" style={{ marginTop: '28px' }}>
              <a
                href="https://t.me/locus_academy_robot?start=enroll"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  borderColor: 'var(--border-accent)',
                  color: 'var(--text-primary)',
                  background: 'var(--accent-dim)',
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>{t.form.tgBtn}</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal reveal-delay-2">
            {status === 'success' ? (
              <div className="success-message" role="status" aria-live="polite">
                <div className="success-icon" aria-hidden="true">
                  <CheckCircle size={36} />
                </div>
                <h3 className="success-title">{t.form.successTitle}</h3>
                <p className="success-desc">{successMessageText}</p>
                <button
                  className="btn btn-secondary"
                  onClick={handleReset}
                  style={{ marginTop: '24px' }}
                  aria-label={t.form.newFormBtn}
                >
                  {t.form.newFormBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Kursga yozilish formasi">
                <h3 className="form-title">{t.form.formTitle}</h3>

                {/* Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    {t.form.nameLbl} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder={t.form.namePlaceholder}
                    value={fields.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    autoComplete="name"
                    maxLength={80}
                  />
                  {errors.name && (
                    <p id="name-error" className="form-error" role="alert">
                      <AlertCircle size={12} aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    {t.form.phoneLbl} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder={t.form.phonePlaceholder}
                    value={fields.phone}
                    onChange={handlePhoneInput}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    autoComplete="tel"
                    maxLength={20}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="form-error" role="alert">
                      <AlertCircle size={12} aria-hidden="true" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Course Select */}
                <div className="form-group">
                  <label className="form-label" htmlFor="course">
                    {t.form.courseLbl} <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    className={`form-select ${errors.course ? 'error' : ''}`}
                    value={fields.course}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.course}
                    aria-describedby={errors.course ? 'course-error' : undefined}
                  >
                    <option value="" disabled>
                      {t.form.courseDefault}
                    </option>
                    {t.courses.items.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <p id="course-error" className="form-error" role="alert">
                      <AlertCircle size={12} aria-hidden="true" />
                      {errors.course}
                    </p>
                  )}
                </div>

                {/* API Error Notification */}
                {status === 'error' && apiError && (
                  <div className="api-error-box" role="alert" aria-live="assertive">
                    <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px', color: '#ef4444' }} />
                    <div>{apiError}</div>
                  </div>
                )}

                <button
                  id="submit-btn"
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === 'loading'}
                  aria-label={status === 'loading' ? t.form.submitting : t.form.submitBtn}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      {t.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={18} aria-hidden="true" />
                      {t.form.submitBtn}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
