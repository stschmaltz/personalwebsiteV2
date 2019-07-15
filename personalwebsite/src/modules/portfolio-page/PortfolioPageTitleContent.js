import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioPageTitleContent.css'
import { motion } from 'framer-motion'

const PortfolioPageTitleContent = props => {
  return (
    <div>
      <span>
        Welcome to my portfolio page. These websites I personally created start
        to finish by myself. All of the sites are mobile and desktop friendly.
        The code for each is publicly available at my github.
      </span>
      <motion.div
        className="portfolio-page-content_github-button-container"
        whileHover={{
          scale: 1.2,
          transition: { ease: 'easeOut', duration: 0.2 },
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <a
          href="https://github.com/stschmaltz"
          className="portfolio-page-content_github-button"
        >
          Available Here
        </a>
      </motion.div>
    </div>
  )
}

PortfolioPageTitleContent.propTypes = {}

export default PortfolioPageTitleContent
