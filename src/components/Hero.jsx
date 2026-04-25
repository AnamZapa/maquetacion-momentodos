import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg-text">URBAN</div>
      <div className="hero__content">
        <p className="hero__tagline">NUEVA COLECCIÓN 2024</p>
        <h1 className="hero__title">
          ESTILO URBANO
          <span>REDEFINIDO</span>
        </h1>
        <p className="hero__subtitle">
          Descubre nuestra colección exclusiva de ropa urbana minimalista
        </p>
        <button className="hero__cta" onClick={() => navigate('/productos')}>
          Explorar Colección
        </button>

        <div className="hero__features">
          <div className="hero__feature">
            <span className="hero__feature-icon">✦</span>
            <h3 className="hero__feature-title">Diseño Único</h3>
            <p className="hero__feature-text">Piezas exclusivas con estética urbana y minimalista</p>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">◈</span>
            <h3 className="hero__feature-title">Calidad Premium</h3>
            <p className="hero__feature-text">Materiales de alta calidad para máxima durabilidad</p>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">⬡</span>
            <h3 className="hero__feature-title">Envío Rápido</h3>
            <p className="hero__feature-text">Entrega express en 24-48 horas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
