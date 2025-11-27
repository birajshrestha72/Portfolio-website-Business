import './css/header.css';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='logo'>
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <button className='menu-toggle' onClick={toggleMenu} aria-label="Toggle menu">
            <span className={menuOpen ? 'hamburger open' : 'hamburger'}></span>
            <span className={menuOpen ? 'hamburger open' : 'hamburger'}></span>
            <span className={menuOpen ? 'hamburger open' : 'hamburger'}></span>
          </button>
        </div>
        <ul className={menuOpen ? 'nav-list active' : 'nav-list'}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/games" onClick={closeMenu}>Games & Services</Link></li>
          <li><Link to="/locations" onClick={closeMenu}>Our Locations</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
