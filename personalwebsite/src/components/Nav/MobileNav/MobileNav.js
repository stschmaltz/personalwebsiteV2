import React from 'react'
import PropTypes from 'prop-types'
import './MobileNav.css'
import { Link } from 'gatsby'
import MobileNavItem from './MobileNavItem'

const MobileNav = props => {
  return (
    <div className="mobile-nav-nar__main-container">
      <MobileNavItem title="About" path="/about/" />
      <MobileNavItem title="Resume" path="/resume/" />
      <MobileNavItem title="Home" path="/" />
      <MobileNavItem title="Portfolio" path="/portfolio/" />
      <MobileNavItem title="Contact" path="/contact/" />
    </div>
  )
}

MobileNav.propTypes = {}

export default MobileNav
