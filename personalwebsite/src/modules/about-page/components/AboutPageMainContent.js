import React from 'react'
import PropTypes from 'prop-types'
import './AboutPageMainContent.css'
import { Link } from 'gatsby'

const AboutPageMainContent = props => {
  return (
    <div className="about-page-main_container">
      <p>
        I am a full-stack software developer with a special focus on front-end
        work and a growing passion for design. Thanks for taking the time to
        check out my website, if you have any interesting opportunities for me,
        please{' '}
        <Link to="/contact" className="about-page-main_contact-me-btn">
          contact me.
        </Link>
      </p>
    </div>
  )
}

AboutPageMainContent.propTypes = {}

export default AboutPageMainContent
