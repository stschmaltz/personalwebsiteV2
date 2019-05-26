import React from 'react'
import './DesktopNav.css'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const DesktopNavItem = ({ title, path, isSelected }) => {
  const selectionStyle = isSelected
    ? { textShadow: '1px 1px 5px var(--primary-color-200)' }
    : {}
  return (
    <li className="desktop-nav-bar__link-item">
      <Link to={path}>
        <h1 style={selectionStyle}>{title}</h1>
      </Link>
    </li>
  )
}

DesktopNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
export default DesktopNavItem
