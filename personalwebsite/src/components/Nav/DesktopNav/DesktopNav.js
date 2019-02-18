import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './DesktopNav.css'
import DesktopNavItem from './DesktopNavItem'

const DesktopNav = props => {
  return (
    <div className="desktop-nav-bar__main-container">
      <nav className="desktop-nav-bar__navigation">
        <ul className="desktop-nav-bar__navigation-list">
          <DesktopNavItem title="About" path="/about/" />
          <DesktopNavItem title="Resume" path="/resume/" />
          <div className="desktop-nav-bar__logo">
            <Link to="/">
              <div className="desktop-nav-bar__logo-inner" />
            </Link>
          </div>
          <DesktopNavItem title="Portfolio" path="/portfolio/" />
          <DesktopNavItem title="Contact" path="/contact/" />
        </ul>
      </nav>
    </div>
  )
}

DesktopNav.propTypes = {}

export default DesktopNav
