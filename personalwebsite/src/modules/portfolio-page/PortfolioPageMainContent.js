import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioPageMainContent.css'
import PortfolioPagePortfolioItem from './PortfolioPagePortfolioItem'

const PortfolioPageMainContent = props => {
  return (
    <div className="portfolio-page-main-content__outer-container">
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem thumbnailPath="spotfiy-dashboard-thumbnail.png" />
      </div>
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem />
      </div>
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem />
      </div>
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem />
      </div>
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem />
      </div>
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem />
      </div>
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem />
      </div>
    </div>
  )
}

PortfolioPageMainContent.propTypes = {}

export default PortfolioPageMainContent
