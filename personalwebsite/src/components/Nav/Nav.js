import React from 'react'
import PropTypes from 'prop-types'
import './Nav.css'
import DesktopNavBar from './DesktopNav/DesktopNav'
import MobileNavBar from './MobileNav/MobileNav'
import sizeMe from 'react-sizeme'

const Nav = ({ size, location, ...locationProps }) => {
  const { width } = size
  return (
    <div className="nav-bar__container">
      {width > 600 ? <DesktopNavBar location={location} /> : <MobileNavBar />}
    </div>
  )
}

Nav.propTypes = {
  size: PropTypes.object.isRequired,
}

export default sizeMe()(Nav)
