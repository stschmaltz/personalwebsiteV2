import React from 'react'
import PropTypes from 'prop-types'
import './DesktopTimeline.css'

const DesktopTimeline = props => {
  return (
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
  )
}

DesktopTimeline.propTypes = {}

export default DesktopTimeline
