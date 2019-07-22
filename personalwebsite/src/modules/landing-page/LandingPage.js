import React from 'react'
import withParticleBackground from '../particle-background/withParticleBackground'
import FullName from './FullName'
import SocialBar from './SocialBar'
import Layout from '../../components/layout'
import './LandingPage.css'
import { motion } from 'framer-motion'

const LandingPage = props => {
  return (
    <Layout>
      <div className="landing-page_container">
        <FullName />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 3 }}
        >
          <h2 className="landing-page_title">Software Developer</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 3 }}
        >
          <p className="landing-page_tagline">
            Creating memorable websites with a purpose
          </p>
        </motion.div>
      </div>
      <div className="landing-page_social-bar">
        <SocialBar />
      </div>
    </Layout>
  )
}

LandingPage.propTypes = {}

export default withParticleBackground(LandingPage)
