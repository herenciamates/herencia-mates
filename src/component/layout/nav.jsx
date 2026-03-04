import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú al hacer click en un link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="nav-logo">Herencia<span>Mates</span></div>
        
        {/* Links para desktop */}
        <ul className="nav-links">
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#productos">PRODUCTOS</a></li>
          <li><a  href="#proposito" >PROPÓSITO</a></li>
          <li><a href="#contacto" className='nav-cta'>CONTACTO</a></li>
        </ul>

        {/* Botón hamburguesa */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Menú mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={handleLinkClick}>INICIO</a>
        <a href="#productos" onClick={handleLinkClick}>PRODUCTOS</a>
        <a href="#proposito" onClick={handleLinkClick}>PROPÓSITO</a>
        <a href="#contacto" onClick={handleLinkClick}>CONTACTO</a>
      </div>
      <section id="inicio">
        <div className="hero-content">
          <div className="hero-badge">Mates Artesanales · Misiones</div>

          <h1 className="hero-title">
            El ritual<br />
            del <em>buen</em>
            <span className="gold">mate.</span>
          </h1>

          <p className="hero-subtitle">
            Mates seleccionados con identidad. Cada pieza cuenta
            una historia de tradición, calidad y el sabor único
            del noreste argentino.
          </p>

          <div className="hero-actions">
            <a href="#productos" className="btn-primary">Ver productos</a>
            <a href="#proposito" className="btn-secondary">Mi historia</a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <strong>7+</strong>
              <span>Modelos</span>
            </div>
            <div className="stat-item">
              <strong>100%</strong>
              <span>Artesanal</span>
            </div>
            <div className="stat-item">
              <strong>★ 4.9</strong>
              <span>Valoración</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-big">
            <img src="../src/img/logo.jpg" alt="Logo Herencia Mates" />
            <div className="nav-logo"> 
              <strong style={{ color: "#c0d8b8" }}>Herencia</strong> 
              <span>Mates</span> 
            </div>
            <div className="hero-card-sub">Mates seleccionados</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;