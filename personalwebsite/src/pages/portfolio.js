import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import withParticleBackground from '../modules/particle-background/withParticleBackground'
import PortfolioPageContent from '../modules/portfolio-page/PortfolioPage'

const PortfolioPage = props => {
  return (
    <Layout>
      <PortfolioPageContent />
    </Layout>
  )
}

PortfolioPage.propTypes = {}

export default withParticleBackground(PortfolioPage)
