// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <div className="navbar__logo">
          <Link to="/">LOGO</Link>
        </div>

        {/* Menú */}
        <ul className="navbar__menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/productos"
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Productos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Servicios
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* Botón Login */}
        <div className="navbar__actions">
          <Link to="/login" className="navbar__button">
            Ingresar
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;