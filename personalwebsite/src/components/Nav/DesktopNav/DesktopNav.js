import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './DesktopNav.css'
import DesktopNavItem from './DesktopNavItem'
import { motion } from 'framer-motion'

const DesktopNav = ({ location }) => {
  const isHome = location.pathname === '/' ? 'isHome   ' : ''

  const currentPath = location.pathname
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
          <motion.div
            className="desktop-nav-bar__logo"
            initial={{
              rotate: 45,
            }}
            whileHover={{
              rotate: 225,
              transition: { ease: 'easeIn', duration: 0.3 },
            }}
          >
            <Link to="/">
              <div className="desktop-nav-bar__logo-inner">
                <span className="desktop-nav-bar__logo-text">S</span>
              </div>
            </Link>
          </motion.div>
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
