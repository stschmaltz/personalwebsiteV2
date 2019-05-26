import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import './PortfolioPagePortfolioItem.css'

const PersonalSiteV1Thumbnail = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(
              relativePath: { eq: "small-shane-schmaltz-v1-thumbnail.jpg" }
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

PersonalSiteV1Thumbnail.propTypes = {}

export default PersonalSiteV1Thumbnail
