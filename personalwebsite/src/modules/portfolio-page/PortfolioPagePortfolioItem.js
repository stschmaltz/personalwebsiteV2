import React from 'react'
import './PortfolioPagePortfolioItem.css'
import PropTypes from 'prop-types'
import ReactCardFlipper from 'react-card-flipper'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

const PortfolioPagePortfolioItem = ({
  children,
  siteName,
  siteUrl,
  description,
}) => {
  return (
    <div className="portfolio-page-portfolio_container">
      <a href={siteUrl} className="portfolio-page-portfolio_wrapper">
        <ReactCardFlipper width="100%" height="250px" behavior="hover">
          <div className="portfolio-page-portfolio_thumbnail">
            <div className="portfolio-page-portfolio_banner">
              <span className="portfolio-page-portfolio_banner-text">
                {siteName}
              </span>
            </div>
            {children}
          </div>
          <div className="portfolio-page-portfolio_description">
            {description}
          </div>
        </ReactCardFlipper>
      </a>
    </div>
  )
}

PortfolioPagePortfolioItem.propTypes = {}

export default PortfolioPagePortfolioItem
