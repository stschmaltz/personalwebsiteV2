import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './Nav.css'

const Nav = props => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar__navigation">
        <ul className="nav-bar__navigation-list">
          <li className="nav-bar__link-item">
            <Link to="/about/">
              <h1>About</h1>
            </Link>
          </li>
          <li className="nav-bar__link-item">
            <Link to="/resume/">
              <h1>Resume</h1>
            </Link>
          </li>
          <div className="nav-bar__logo">
            <Link to="/">
              <div className="nav-bar__logo-inner">
                {/* <h4 className="nav-bar__logo-text">Home</h4> */}
              </div>
            </Link>
          </div>
          <li className="nav-bar__link-item">
            <Link to="/portfolio/">
              <h1>Portfolio</h1>
            </Link>
          </li>
          <li className="nav-bar__link-item">
            <Link to="/contact/">
              <h1>Contact</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

Nav.propTypes = {}

export default Nav
