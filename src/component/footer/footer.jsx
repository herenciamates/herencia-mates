import React, { useEffect } from 'react';
import '../../styles/estiloGeneral.css';
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  const contactItems = [
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      value: '+54 9 3700 000-000',
      href: 'https://wa.me/5493700000000',
      external: true,
    },
    {
      icon: <Instagram size={20} />,
      label: 'Instagram',
      value: '@herenciamate',
      href: 'https://instagram.com/herenciamate',
      external: true,
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'hola@materia.com.ar',
      href: 'mailto:hola@materia.com.ar',
      external: false,
    },
    {
      icon: <MapPin size={20} />,
      label: 'Ubicación',
      value: 'Oberá, Misiones, Argentina',
      href: null,
    },
  ];

  return (
    <>
    <div className="footer-wave">
  <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#1C2D24"/>
  </svg>
</div>
      <section id="contacto">
        <div className="contacto-inner">
          <div className="contacto-info reveal">
            <span className="section-label">Hablemos</span>
            <h2 className="section-title">
              ¿Te quedó<br /><em>alguna duda?</em>
            </h2>
        
            <div className="contacto-items">
              {contactItems.map(({ icon, label, value, href, external }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    className="contacto-item"
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <div className="ci-icon">{icon}</div>
                    <div className="ci-text">
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </div>
                  </a>
                ) : (
                  <div key={label} className="contacto-item" style={{ cursor: 'default' }}>
                    <div className="ci-icon">{icon}</div>
                    <div className="ci-text">
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          Herencia<span>Mates</span>
        </div>
        <div className="footer-copy">
          © 2026 Matería · Oberá, Misiones · Hecho con un🧉
        </div>
        <div className="footer-socials">
          <a href="#" title="Instagram" aria-label="Instagram"><Instagram size={16} /></a>
          <a href="#" title="WhatsApp" aria-label="WhatsApp"><MessageCircle size={16} /></a>
          <a href="#" title="Email" aria-label="Email"><Mail size={16} /></a>
        </div>
      </footer>
    </>
  );
};

export default Footer;