import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import withParticleBackground from '../modules/particle-background/withParticleBackground'
import AboutPageContent from '../modules/about-page/AboutPage'

const AboutPage = props => {
  return (
    <Layout>
      <AboutPageContent />
    </Layout>
  )
}

AboutPage.propTypes = {}

export default withParticleBackground(AboutPage)
