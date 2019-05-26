import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import './PortfolioPagePortfolioItem.css'

const MarketingDemoSiteThumbnail = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(
              relativePath: { eq: "small-marketing-demo-site-thumbnail.jpg" }
            ) {
              childImageSharp {
                fluid(maxWidth: 500) {
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
    </>
  )
}

MarketingDemoSiteThumbnail.propTypes = {}

export default MarketingDemoSiteThumbnail
