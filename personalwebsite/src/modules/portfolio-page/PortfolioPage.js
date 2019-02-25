import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioPage.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import PortfolioPageContent from './PortfolioPageContent'

const PortfolioPage = props => {
  return (
    <div className="portfolio-page_content-container">
      <PageTitle title="Portfolio" ContentComponent={PortfolioPageContent} />
      <span>abc123</span>
    </div>
  )
}

PortfolioPage.propTypes = {}

export default PortfolioPage
