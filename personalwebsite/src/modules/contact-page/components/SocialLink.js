import React from 'react'
import PropTypes from 'prop-types'
import './SocialLink.css'

const SocialLink = ({ Icon, linkText, linkUrl }) => {
  return (
    <a className="social-link_actual-link" href={linkUrl}>
      <div className="social-link__container">
        <div className="social-link__icon">
          <Icon className="social-link__icon" />
        </div>
        <span className="social-link__text">{linkText}</span>
      </div>
    </a>
  )
}

SocialLink.propTypes = {}

export default SocialLink
