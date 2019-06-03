import React from 'react'
import PropTypes from 'prop-types'
import './AboutPageMainContent.css'
import { Link } from 'gatsby'

const AboutPageMainContent = props => {
  return (
    <div className="about-page-main_container">
      <p>
        I am a full-stack software developer with a special focus on front-end
        work and a growing passion for design. I am constantly working on
        improving my skills and exploring new challenges. If you have any
        interesting opportunities for me, please{' '}
        <Link to="/contact" className="about-page-main_contact-me-btn">
          contact me.
        </Link>
      </p>
      <div className="about-page-main_timeline-container">
        <div className="about-page-main_timeline-inner-container">
          <div className="about-page-main_timeline-year-container">
            <div className="about-page-main_timeline-year-item-container">
              <div className="divider" />
              <span>2015</span>
            </div>
            <div className="about-page-main_timeline-year-item-container">
              <div className="divider" />
              <span>2016</span>
            </div>
            <div className="about-page-main_timeline-year-item-container">
              <div className="divider" />
              <span>2017</span>
            </div>
            <div className="about-page-main_timeline-year-item-container">
              <div className="divider" />
              <span>2018</span>
            </div>
            <div className="about-page-main_timeline-year-item-container">
              <div className="divider" />
              <span>2019</span>
            </div>
            <div className="about-page-main_timeline-year-item-container" />
          </div>
          <div className="about-page-main_timeline-bar">
            <span>Graduated University</span>
            <span>Started at Replicon as Test Automation Engineer</span>
            <span>Became a developer at Replicon</span>
            <span>Became a </span>
            <div className="about-page-main_timeline-item about-page-main_timeline-university" />
            <div className="about-page-main_timeline-item about-page-main_timeline-replicon-qa" />
            <div className="about-page-main_timeline-item about-page-main_timeline-replicon-dev" />
            <div className="about-page-main_timeline-item about-page-main_timeline-osprey" />
          </div>
        </div>
      </div>
      <div className="about-page-main_hobbies-container">
        <span>Hobbies</span>
        <div className="about-page-main_hobbies-inner-container">
          <div className="about-page-main_hobby" />
          <div className="about-page-main_hobby" />
          <div className="about-page-main_hobby" />
          <div className="about-page-main_hobby" />
        </div>
      </div>
    </div>
  )
}

AboutPageMainContent.propTypes = {}

export default AboutPageMainContent
