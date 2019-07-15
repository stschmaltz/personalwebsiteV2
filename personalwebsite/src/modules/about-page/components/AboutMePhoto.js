import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import './AboutMePhoto.css'

const AboutMePhoto = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "shane-crop.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div className="about-me-page_headshot-image-container">
            <Img
              className="about-me-page_headshot-image"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
        )}
      />
    </>
  )
}

AboutMePhoto.propTypes = {}

export default AboutMePhoto
