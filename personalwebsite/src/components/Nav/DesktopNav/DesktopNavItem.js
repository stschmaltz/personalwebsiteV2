import React from 'react'
import './DesktopNav.css'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const DesktopNavItem = ({ title, path, isSelected }) => {
  const selectionStyle = isSelected
    ? { textShadow: '1px 1px 5px var(--primary-color-200)' }
    : {}
  return (
    <li className="desktop-nav-bar__link-item">
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { ease: 'easeOut', duration: 0.2 },
        }}
        whileTap={{
          scale: 1,
        }}
      >
        <Link to={path}>
          <h1 style={selectionStyle}>{title}</h1>
        </Link>
      </motion.div>
    </li>
  )
}

DesktopNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
export default DesktopNavItem
