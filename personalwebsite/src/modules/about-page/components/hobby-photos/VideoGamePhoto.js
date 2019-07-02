import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import './HobbyPhoto.css'

const BassPhoto = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(
              relativePath: { eq: "playstation-red.png" }
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
          <div className="hobby-bass-photo-container">
            <Img
              className="hobby-bass-photo"
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
        )}
      />
    </>
  )
}

BassPhoto.propTypes = {}

export default BassPhoto
