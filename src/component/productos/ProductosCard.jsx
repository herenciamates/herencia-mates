const ProductoCard = ({ producto }) => {
  return (
    <div className="producto-card reveal reveal-delay-1">
      <div className="producto-img pc-verde">
        <img src={producto.img} alt={producto.nombre}/>
        <span className="producto-tag">{producto.tag}</span>
      </div>

      <div className="producto-body">
        <div className="producto-nombre">{producto.nombre}</div>
        <div className="producto-desc">{producto.desc}</div>
        <div className="producto-footer">
          <div className="producto-precio">
            <sup>$</sup>{producto.precio}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;