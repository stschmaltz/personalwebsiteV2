import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import withParticleBackground from '../modules/particle-background/withParticleBackground'

const PortfolioPage = props => {
  return <Layout>Portfolio</Layout>
}

PortfolioPage.propTypes = {}

export default withParticleBackground(PortfolioPage)
