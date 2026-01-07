import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import LOGO from '../../assets/header_logo.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src={LOGO} alt="FurBridge Logo" className="logo-img" />
        </div>

        <nav>
          <ul className="header-nav">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <Link to="/adopt">Adopt</Link>
            </li>
            <li>
              <a href="#create">Create Listing</a>
            </li>
            <li>
              <a href="#enquiries">Enquiries</a>
            </li>
            <li>
              <a href="#analytics">Analytics</a>
            </li>
          </ul>
        </nav>

        <div className="header-icons">
          <button className="icon-btn" aria-label="Favorites">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: 'C55A9A', width: '30px', height: '27px' }}
            />
          </button>
          <button className="icon-btn" aria-label="Notifications">
            <FontAwesomeIcon
              icon={faBell}
              style={{ color: 'C55A9A', width: '30px', height: '27px' }}
            />
          </button>
          <button className="icon-btn icon-profile" aria-label="Profile"></button>
        </div>
      </header>
    </>
  );
};

export default Header;
