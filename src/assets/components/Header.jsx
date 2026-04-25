// src/components/Header.jsx
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">

        {/* Logo */}
        <div className="header__logo">
          <Link to="/">LOGO</Link>
        </div>

        {/* Navegación */}
        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Botón */}
        <div className="header__actions">
          <Link to="/login" className="btn-login">
            Iniciar Sesión
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;