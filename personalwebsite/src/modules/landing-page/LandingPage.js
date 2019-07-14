import React from 'react'
import withParticleBackground from '../particle-background/withParticleBackground'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import './LandingPage.css'
import { motion } from 'framer-motion'

const seoKeyWords = [
  `gatsby`,
  `application`,
  `react`,
  `Shane Schmaltz`,
  `Shane`,
  `Schmaltz`,
  `Calgary`,
  `Software Developer`,
  `Software`,
  `Developer`,
  `Website`,
  ``,
  `Web Developer`,
]

const LandingPage = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={seoKeyWords} />
      <div className="landing-page_container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <h1 className="landing-page_full-name">Shane Schmaltz</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 5 }}
        >
          <h2 className="landing-page_title">Software Developer</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 5 }}
        >
          <p className="landing-page_tagline">
            Creating websites with a lasting impression
          </p>
        </motion.div>
      </div>
    </Layout>
  )
}

LandingPage.propTypes = {}

export default withParticleBackground(LandingPage)
