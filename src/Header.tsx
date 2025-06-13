import './css/header.css';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li className='logo'>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/games">Games & Services</Link></li>
          <li><Link to="/locations">Our Locations</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
