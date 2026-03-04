import React, { useEffect } from 'react';
import '../../styles/estiloGeneral.css';
import { mates, accesoriosCanastas, combos } from "../../data/ProductosData";
import ProductoCard from './ProductosCard';

const Productos = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.2 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="productos">

      {/* SECCIÓN MATES */}
      <div className="productos-header reveal">
        <div>
          <span className="section-label">Catálogo</span>
          <h2 className="section-title">Nuestros <em>mates</em></h2>
        </div>
        <p className="section-desc">
          Selección cuidada de modelos para todos los gustos. Precios en pesos argentinos.
        </p>
      </div>
      <div className="productos-grid grid-mates">
        {mates.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
        <div className="cita-grid-full cita-mates">
          <div className="proposito-quote">
            <p>"El mate es nuestra manera de decir: tenemos tiempo para vos."</p>
            <cite>— Atte: Herencia</cite>
          </div>
        </div>
      </div>

      {/* SEPARADOR */}
      <div className="catalogo-separador">
        <span className="catalogo-separador-icono">✦</span>
      </div>

      {/* SECCIÓN ACCESORIOS */}
      <div className="productos-header reveal">
        <div>
          <span className="section-label">Catálogo</span>
          <h2 className="section-title">Nuestros <em>accesorios</em></h2>
        </div>
        <p className="section-desc">
          Selección de accesorios esenciales para completar tu experiencia matera.
        </p>
      </div>
      <div className="productos-grid grid-accesorios">
        {accesoriosCanastas.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
        <div className="cita-grid-full cita-secundaria">
          <div className="proposito-quote proposito-quote--chico">
            <p>"Cada accesorio cuenta una historia, cada detalle tiene un propósito."</p>
            <cite>— ATTE: Herencia</cite>
          </div>
        </div>
      </div>

      {/* SEPARADOR */}
      <div className="catalogo-separador">
        <span className="catalogo-separador-icono">✦</span>
      </div>

      {/* SECCIÓN COMBOS */}
      <div className="productos-header reveal">
        <div>
          <span className="section-label">Catálogo</span>
          <h2 className="section-title">Nuestros <em>combos</em></h2>
        </div>
        <p className="section-desc">
          Kits completos pensados para regalar (o para darse un gusto).
        </p>
      </div>
      <div className="productos-grid grid-combos">
        {combos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
        <div className="cita-grid-full cita-secundaria">
          <div className="proposito-quote proposito-quote--chico">
            <p>"Un combo es el principio de una tradición que se comparte."</p>
            <cite>— ATTE: Herencia</cite>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Productos;