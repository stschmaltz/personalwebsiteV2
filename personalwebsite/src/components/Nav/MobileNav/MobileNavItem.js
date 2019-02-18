import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './MobileNav.css'

const MobileNavItem = ({ title, path }) => {
  return (
    <div className="mobile-nav-bar__nav-item-outer-container">
      <Link className="mobile-nav-bar__nav-item-link" to={path}>
        <div className="mobile-nav-bar__nav-item-inner-container">
          <div className="mobile-nav-bar__nav-item-icon" />
          <span className="mobile-nav-bar__nav-item-text"> {title} </span>
        </div>
      </Link>
    </div>
  )
}

MobileNavItem.propTypes = {}

export default MobileNavItem
