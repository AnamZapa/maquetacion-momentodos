import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { obtenerProductos } from '../services/productosService';
import '../styles/pages.css';

const Home = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    obtenerProductos().then((data) => {
      setProductosDestacados(data.slice(0, 3));
    });
  }, []);

  return (
    <>
      <Hero />

      <section className="section home__products-preview" id="productos">
        <div className="section__container">
          <div className="section__header">
            <span className="section__label">Destacados</span>
            <h2 className="section__title">Nuestra Colección</h2>
            <p className="section__subtitle">Estilo urbano para cada ocasión</p>
          </div>
          <div className="products-grid">
            {productosDestacados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              style={{
                padding: '1rem 2.5rem',
                background: 'transparent',
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onClick={() => navigate('/productos')}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--color-accent)';
                e.target.style.color = '#0a0a0a';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'var(--color-accent)';
              }}
            >
              Ver Todo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
