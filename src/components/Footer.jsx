import { Phone } from 'lucide-react';
import locusLogo from '../assets/locuslogo.png';
import { useApp } from '../context/AppContext';

const CURRENT_YEAR = new Date().getFullYear();

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  }
}

// Telegram SVG icon
function TelegramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

// Instagram SVG icon
function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  const { t } = useApp();

  const navSections = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.courses, href: '#courses' },
    { label: t.nav.about, href: '#about' },
    { label: t.why.tag, href: '#why' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="footer" id="footer" aria-label="Sahifa quyi qismi">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img
              src={locusLogo}
              alt="Lokus Academy"
              className="footer-logo-img"
            />
            <p className="footer-desc">
              {t.footer.desc}
            </p>
            <nav className="footer-socials" aria-label="Ijtimoiy tarmoqlar">
              <a
                href="https://t.me/Lokus_academy"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <TelegramIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/lokus_academy/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="tel:+998776994646"
                className="social-link"
                aria-label="Telefon: +998 77 699 46 46"
              >
                <Phone size={18} aria-hidden="true" />
              </a>
            </nav>
          </div>

          {/* Navigation */}
          <nav aria-label="Sahifa bo'limlari">
            <h3 className="footer-col-title">{t.footer.sectionsTitle}</h3>
            <ul className="footer-links">
              {navSections.map((link) => (
                <li key={link.href}>
                  <span
                    className="footer-link"
                    role="button"
                    tabIndex={0}
                    onClick={() => scrollTo(link.href)}
                    onKeyDown={(e) => e.key === 'Enter' && scrollTo(link.href)}
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacts */}
          <address style={{ fontStyle: 'normal' }}>
            <h3 className="footer-col-title">{t.footer.contactTitle}</h3>
            <div>
              <a
                href="tel:+998776994646"
                className="footer-contact-item"
                aria-label="Telefon: +998 77 699 46 46"
              >
                <Phone size={16} className="footer-contact-icon" aria-hidden="true" />
                +998 77 699 46 46
              </a>
              <a
                href="tel:+998776994747"
                className="footer-contact-item"
                aria-label="Telefon: +998 77 699 47 47"
              >
                <Phone size={16} className="footer-contact-icon" aria-hidden="true" />
                +998 77 699 47 47
              </a>
              <a
                href="https://t.me/Lokus_academy"
                className="footer-contact-item"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram: @Lokus_academy"
              >
                <span className="footer-contact-icon" aria-hidden="true" style={{ display: 'flex' }}>
                  <TelegramIcon size={16} />
                </span>
                @Lokus_academy
              </a>
              <a
                href="https://www.instagram.com/lokus_academy/"
                className="footer-contact-item"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram: @lokus_academy"
              >
                <span className="footer-contact-icon" aria-hidden="true" style={{ display: 'flex' }}>
                  <InstagramIcon size={16} />
                </span>
                @lokus_academy
              </a>
            </div>
          </address>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {CURRENT_YEAR} <span>Lokus Academy</span>. {t.footer.copyright}
          </p>
          <p className="footer-copy" style={{ fontSize: '12px' }}>
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
