import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './Nav.css'
import DesktopNavBar from './DesktopNav/DesktopNav'
import MobileNavBar from './MobileNav/MobileNav'
import sizeMe from 'react-sizeme'

const Nav = ({ size }) => {
  const { width } = size;
  console.log(width)
  return (
    <div className="nav-bar__container">
      { width > 600 ? <DesktopNavBar /> : <MobileNavBar/> }
    </div>
  )
}

Nav.propTypes = {
  size: PropTypes.object.isRequired
}

export default sizeMe()(Nav)
