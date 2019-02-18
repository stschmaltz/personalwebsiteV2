import React from 'react'
import './DesktopNav.css'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const DesktopNavItem = ({ title, path }) => {
  return (
    <li className="desktop-nav-bar__link-item">
      <Link to={path}>
        <h1>{title}</h1>
      </Link>
    </li>
  )
}

DesktopNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
export default DesktopNavItem
