import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo" onClick={() => navigate('/')}>
          URBAN <span>THREADS</span>
        </div>
        <ul className="navbar__links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={({ isActive }) => isActive ? 'active' : ''}>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;