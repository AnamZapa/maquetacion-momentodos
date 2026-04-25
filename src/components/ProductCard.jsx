import { useState } from 'react';
import { formatearPrecio } from '../helpers/utils';
import { agregarAlCarrito } from '../services/productosService';
import '../styles/ProductCard.css';

const ProductCard = ({ producto }) => {
  const [agregado, setAgregado] = useState(false);

  const handleAgregar = () => {
    agregarAlCarrito(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1500);
  };

  return (
    <article className="card">
      <div className="card__image">
        {producto.badge && (
          <span className="card__badge">{producto.badge}</span>
        )}
        <span className="card__image-placeholder">{producto.emoji}</span>
      </div>
      <div className="card__body">
        <h3 className="card__name">{producto.nombre}</h3>
        <p className="card__material">{producto.material}</p>
        <div className="card__footer">
          <span className="card__price">{formatearPrecio(producto.precio)}</span>
          <button
            className={`card__btn${agregado ? ' added' : ''}`}
            onClick={handleAgregar}
          >
            {agregado ? '✓ AÑADIDO' : 'AÑADIR'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
