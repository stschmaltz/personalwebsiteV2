import React from 'react'
import PropTypes from 'prop-types'
import './SocialLink.css'

const SocialLink = props => {
  return (
    <div className="social-link__container">
      <div className="social-link__icon">icon</div>
      <span className="social-link__text">: some sort of link</span>
    </div>
  )
}

SocialLink.propTypes = {}

export default SocialLink
