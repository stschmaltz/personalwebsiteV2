import React from 'react'
import PropTypes from 'prop-types'
import './AboutPageMainContent.css'
import { Link } from 'gatsby'
import sizeMe from 'react-sizeme'
import DesktopTimeline from './DesktopTimeline'

const AboutPageMainContent = ({ size }) => {
  const { width } = size
  console.log(width)
  const timeline = width > 500 ? <DesktopTimeline /> : null
  const hobbies =
    width > 500 ? (
      <div className="about-page-main_hobbies-container">
        <span>Hobbies</span>
        <div className="about-page-main_hobbies-inner-container">
          <div className="about-page-main_hobby" />
          <div className="about-page-main_hobby" />
          <div className="about-page-main_hobby" />
          <div className="about-page-main_hobby" />
        </div>
      </div>
    ) : null
  return (
    <div className="about-page-main_container">
      <p className="about-page-main_paragraph">
        I am a full-stack software developer with a special focus on front-end
        work and a growing passion for design. I am constantly working on
        improving my skills and exploring new challenges. If you have any
        interesting opportunities for me, please{' '}
        <Link to="/contact" className="about-page-main_contact-me-btn">
          contact me.
        </Link>
      </p>
      {timeline}
      {hobbies}
    </div>
  )
}

AboutPageMainContent.propTypes = {}

export default sizeMe()(AboutPageMainContent)
