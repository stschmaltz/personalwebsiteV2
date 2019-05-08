import React from 'react'
import './PortfolioPagePortfolioItem.css'
import PropTypes from 'prop-types'
import ReactCardFlipper from 'react-card-flipper'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const PortfolioPagePortfolioItem = ({ children, siteName, description }) => {
  return (
    <div className="portfolio-page-portfolio_container">
      <ReactCardFlipper width="100%" height="250px" behavior="hover">
        <div className="portfolio-page-portfolio_thumbnail">{children}</div>
        <div className="portfolio-page-portfolio_description">
          {description}
        </div>
      </ReactCardFlipper>
    </div>
  )
}

PortfolioPagePortfolioItem.propTypes = {}

export default PortfolioPagePortfolioItem
