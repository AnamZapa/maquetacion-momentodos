import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { obtenerProductos } from '../services/productosService';
import '../styles/pages.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerProductos().then((data) => {
      setProductos(data);
      setCargando(false);
    });
  }, []);

  return (
    <section className="section" style={{ paddingTop: 'calc(var(--nav-height) + 4rem)' }}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Catálogo</span>
          <h1 className="section__title">Nuestra Colección</h1>
          <p className="section__subtitle">Estilo urbano para cada ocasión</p>
        </div>

        {cargando ? (
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>Cargando productos...</p>
        ) : (
          <div className="products-grid">
            {productos.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Productos;
