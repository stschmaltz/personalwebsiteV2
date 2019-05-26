import React from 'react'
import withParticleBackground from '../particle-background/withParticleBackground'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import './LandingPage.css'

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
  `Web Developer`
]

const LandingPage = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={seoKeyWords} />
      <div className="landing-page_container">
        <h1 className="landing-page_full-name">Shane Schmaltz</h1>
        <h2 className="landing-page_title">Software Developer</h2>
        <p className="landing-page_tagline">
          Creating websites with a lasting impression
        </p>
      </div>
    </Layout>
  )
}

LandingPage.propTypes = {}

export default withParticleBackground(LandingPage)
