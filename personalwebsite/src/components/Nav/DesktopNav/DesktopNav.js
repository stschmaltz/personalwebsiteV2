import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import './DesktopNav.css'

const DesktopNav = props => {
    return (
        <div className="desktop-nav-bar__main-container">
            <nav className="desktop-nav-bar__navigation">
        <ul className="desktop-nav-bar__navigation-list">
          <li className="desktop-nav-bar__link-item">
            <Link to="/about/">
              <h1>About</h1>
            </Link>
          </li>
          <li className="desktop-nav-bar__link-item">
            <Link to="/resume/">
              <h1>Resume</h1>
            </Link>
          </li>
          <div className="desktop-nav-bar__logo">
            <Link to="/">
              <div className="desktop-nav-bar__logo-inner" />
            </Link>
          </div>
          <li className="desktop-nav-bar__link-item">
            <Link to="/portfolio/">
              <h1>Portfolio</h1>
            </Link>
          </li>
          <li className="desktop-nav-bar__link-item">
            <Link to="/contact/">
              <h1>Contact</h1>
            </Link>
          </li>
        </ul>
      </nav>
        </div>
    );
};

DesktopNav.propTypes = {
    
};

export default DesktopNav;