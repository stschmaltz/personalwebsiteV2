import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import withParticleBackground from '../modules/particle-background/withParticleBackground'

const AboutPage = props => {
  return <Layout>About</Layout>
}

AboutPage.propTypes = {}

export default withParticleBackground(AboutPage)
