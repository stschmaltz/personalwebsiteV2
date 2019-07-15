import React from 'react'
import withParticleBackground from '../particle-background/withParticleBackground'
import FullName from './FullName'
import SocialBar from './SocialBar'
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
