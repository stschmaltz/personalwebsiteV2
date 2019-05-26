import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './DesktopNav.css'
import DesktopNavItem from './DesktopNavItem'

const DesktopNav = ({ location }) => {
  const isHome = location.pathname === '/' ? 'isHome   ' : ''

  const currentPath = location.pathname
  console.log(currentPath)
  return (
    <div className="desktop-nav-bar__main-container">
      <nav className="desktop-nav-bar__navigation">
        <ul className="desktop-nav-bar__navigation-list">
          <DesktopNavItem
            title="About"
            isSelected={currentPath === '/about/'}
            path="/about/"
          />
          <DesktopNavItem
            isSelected={currentPath === '/resume/'}
            title="Resume"
            path="/resume/"
          />
          <div className="desktop-nav-bar__logo">
            <Link to="/">
              <div className="desktop-nav-bar__logo-inner">
                <span className="desktop-nav-bar__logo-text">S</span>
              </div>
            </Link>
          </div>
          <DesktopNavItem
            isSelected={currentPath === '/portfolio/'}
            title="Portfolio"
            path="/portfolio/"
          />
          <DesktopNavItem
            isSelected={currentPath === '/contact/'}
            title="Contact"
            path="/contact/"
          />
        </ul>
      </nav>
    </div>
  )
}

DesktopNav.propTypes = {}

export default DesktopNav
