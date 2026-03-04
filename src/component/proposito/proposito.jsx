import React, { useEffect, useRef, useState } from 'react';
import '../../styles/estiloGeneral.css'
import { Leaf, Handshake, Sparkles, Truck } from 'lucide-react';
const Proposito = ({ isMenuOpen, setIsMenuOpen }) => {
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
    {
      threshold: 0.2,
    }
  );

  reveals.forEach((el) => observer.observe(el));

  return () => {
    reveals.forEach((el) => observer.unobserve(el));
  };
}, []);

  return (
    <>
    <div className="divider"></div>

<section id="proposito">
  <div className="proposito-inner">
    <div className="proposito-text reveal">
      <span className="section-label">Mi propósito</span>
      <h2 className="section-title">
        Más que un mate,<br/>
        <em>una conexión</em>
      </h2>
      <p className="section-desc">
        Nací rodeado del aroma a yerba y el calor de la pava. Desde pequeño supe que
        el mate no es solo una bebida: es el pretexto perfecto para compartir, para
        pensar, para estar presente.
      </p>
      <p className="section-desc" style={{marginTop:"1rem"}}>
        Hoy, desde Misiones, llevo ese espíritu a cada pieza que selecciono.
        Busco mates con carácter, hechos para durar, que se conviertan en parte
        de tu historia cotidiana.
      </p>

      <div className="proposito-quote">
        <p>"El mate es nuestra manera de decir: tenemos tiempo para vos."</p>
        <cite>— Atte: Herencia</cite>
      </div>
    </div>

    <div className="proposito-cards">
  <div className="prop-card reveal reveal-delay-1">
    <div className="prop-icon">
      <Leaf size={32} color="#4B6B57" />
    </div>
    <h3>Origen natural</h3>
    <p>Materiales nobles como calabazas seleccionadas, alpaca y aluminio de calidad...</p>
  </div>
  
  <div className="prop-card reveal reveal-delay-2">
    <div className="prop-icon">
      <Handshake size={32} color="#4B6B57" />
    </div>
    <h3>Trato cercano</h3>
    <p>Cada venta es personal. Te asesoro para encontrar el mate que mejor se adapte...</p>
  </div>
  
  <div className="prop-card reveal reveal-delay-3">
    <div className="prop-icon">
      <Sparkles size={32} color="#4B6B57" />
    </div>
    <h3>Calidad garantizada</h3>
    <p>Reviso uno por uno. Si no me convence, no lo vendo...</p>
  </div>
  
  <div className="prop-card reveal reveal-delay-4">
    <div className="prop-icon">
      <Truck size={32} color="#4B6B57" />
    </div>
    <h3>Envíos seguros</h3>
    <p>Embalaje cuidadoso y envíos a todo el país...</p>
  </div>
</div>
  </div>
</section>

<div className="divider"></div>
    </>
  );
};

export default Proposito;