import React from 'react'
import PropTypes from 'prop-types'
import './FullName.css'
import { motion } from 'framer-motion'

const FullName = props => {
  return (
    <div className="landing-page_full-name">
      <span>
        <motion.div
          className="landing-page_first-name-S-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="landing-page_first-name-S">S</h1>
        </motion.div>
        <motion.div
          className="landing-page_first-name-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2.5 }}
        >
          <h1 className="landing-page_first-name">hane</h1>
        </motion.div>
      </span>
      <span>
        <motion.div
          className="landing-page_last-name-S-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="landing-page_last-name-S">S</h1>
        </motion.div>
        <motion.div
          className="landing-page_last-name-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2.5 }}
        >
          <h1 className="landing-page_last-name">chmaltz</h1>
        </motion.div>
      </span>
    </div>
  )
}

FullName.propTypes = {}

export default FullName
