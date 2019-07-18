import React from 'react'
import PropTypes from 'prop-types'
import './SocialLink.css'
import { motion } from 'framer-motion'

const SocialLink = ({ Icon, linkText, linkUrl }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { ease: 'easeOut', duration: 0.2 },
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <a
        aria-label={linkText}
        className="social-link_actual-link"
        href={linkUrl}
      >
        <div className="social-link__container">
          <div className="social-link__icon">
            <Icon className="social-link__icon" />
          </div>
          {linkText && <span className="social-link__text">{linkText}</span>}
        </div>
      </a>
    </motion.div>
  )
}

SocialLink.propTypes = {}

export default SocialLink
