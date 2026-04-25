import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__brand-logo">
            URBAN <span>THREADS</span>
          </div>
          <p className="footer__brand-desc">
            Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Enlaces</h4>
          <ul className="footer__links">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Ayuda</h4>
          <ul className="footer__links">
            <li><a href="#">Guía de tallas</a></li>
            <li><a href="#">Envíos</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__copy">© 2024 Urban Threads. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;