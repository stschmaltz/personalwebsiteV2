import React from 'react'
import PropTypes from 'prop-types'
import './SocialLink.css'

const SocialLink = ({ Icon, link }) => {
  return (
    <div className="social-link__container">
      <div className="social-link__icon">
        <Icon className="social-link__icon" />
      </div>
      <span className="social-link__text">{link}</span>
    </div>
  )
}

SocialLink.propTypes = {}

export default SocialLink
