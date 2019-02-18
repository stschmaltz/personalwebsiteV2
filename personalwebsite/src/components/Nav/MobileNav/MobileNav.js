import React from 'react'
import PropTypes from 'prop-types'
import './MobileNav.css'
import { Link } from 'gatsby'
import MobileNavItem from './MobileNavItem'
import {
  FaQuestion,
  FaHome,
  FaFileAlt,
  FaThLarge,
  FaMailBulk,
} from 'react-icons/fa'

const MobileNav = props => {
  return (
    <div className="mobile-nav-nar__main-container">
      <MobileNavItem title="Home" path="/" Icon={FaHome} />
      <MobileNavItem title="About" path="/about/" Icon={FaQuestion} />
      <MobileNavItem title="Resume" path="/resume/" Icon={FaFileAlt} />
      <MobileNavItem title="Portfolio" path="/portfolio/" Icon={FaThLarge} />
      <MobileNavItem title="Contact" path="/contact/" Icon={FaMailBulk} />
    </div>
  )
}

MobileNav.propTypes = {}

export default MobileNav
