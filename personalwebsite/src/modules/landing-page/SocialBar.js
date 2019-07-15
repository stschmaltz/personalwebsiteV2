import React from 'react'
import PropTypes from 'prop-types'
import './SocialBar.css'
import SocialLink from '../../modules/contact-page/components/SocialLink'

import { motion } from 'framer-motion'
import {
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaGithubSquare,
  FaMailBulk,
} from 'react-icons/fa'
const SocialBar = props => {
  return (
    <motion.div
      className="social-bar_content-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.5, duration: 2 }}
    >
      <div className="social-bar_links-container">
        <SocialLink
          Icon={FaEnvelopeSquare}
          linkUrl="mailto:stschmaltz@gmail.com"
        />
        <SocialLink
          Icon={FaLinkedin}
          linkUrl="https://linkedin.com/in/stschmaltz/"
        />
        <SocialLink
          Icon={FaGithubSquare}
          linkUrl="https://github.com/stschmaltz/"
        />
      </div>
    </motion.div>
  )
}

SocialBar.propTypes = {}

export default SocialBar
