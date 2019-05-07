import React from 'react'
import './PortfolioPagePortfolioItem.css'
import PropTypes from 'prop-types'
import ReactCardFlipper from 'react-card-flipper'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const PortfolioPagePortfolioItem = props => {
  return (
    <div className="portfolio-page-portfolio_container">
      <ReactCardFlipper width="100%" height="250px" behavior="hover">
        <div className="portfolio-page-portfolio_thumbnail">
          <StaticQuery
            query={graphql`
              query {
                placeholderImage: file(
                  relativePath: { eq: "spotfiy-dashboard-thumbnail.png" }
                ) {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => (
              <Img
                className="portfolio-page-portfolio_img"
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
            )}
          />
          <span>title</span>
        </div>
        <div className="portfolio-page-portfolio_description">back</div>
      </ReactCardFlipper>
    </div>
  )
}

PortfolioPagePortfolioItem.propTypes = {}

export default PortfolioPagePortfolioItem
