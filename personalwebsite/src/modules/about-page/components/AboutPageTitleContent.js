import React from 'react'
import PropTypes from 'prop-types'
import AboutMePhoto from './AboutMePhoto'

const AboutPageTitleContent = props => {
  return (
    <div>
      <p>
        Hey there! My name is Shane Schmaltz.
        <br />
        I'm a full-stack software developer living in the heart of Calgary
        Alberta Canada.
        <br />
        <AboutMePhoto />
        Thank you for checking out my website! 😊
      </p>
    </div>
  )
}

AboutPageTitleContent.propTypes = {}

export default AboutPageTitleContent
