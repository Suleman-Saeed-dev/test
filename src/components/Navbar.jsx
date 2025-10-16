import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Sarah Mitchell</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/')}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive('/about')}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={`nav-link ${isActive('/services')}`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={`nav-link ${isActive('/portfolio')}`}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/testimonials"
              className={`nav-link ${isActive('/testimonials')}`}
              onClick={closeMenu}
            >
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact')}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
