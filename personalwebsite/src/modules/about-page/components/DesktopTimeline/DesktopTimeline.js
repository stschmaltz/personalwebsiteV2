import React from 'react'
import PropTypes from 'prop-types'
import './DesktopTimeline.css'
import TimelineYearDivider from './TimelineYearDivider'

const DesktopTimeline = props => {
  return (
    <div className="about-page-main_timeline-container">
      <div className="about-page-main_timeline-inner-container">
        <div className="about-page-main_timeline-year-container">
          <TimelineYearDivider year={2015} />
          <TimelineYearDivider year={2016} />
          <TimelineYearDivider year={2017} />
          <TimelineYearDivider year={2018} />
          <TimelineYearDivider year={2019} />
          <div className="about-page-main_timeline-year-item-container" />
        </div>
        <div className="about-page-main_timeline-bar">
          <div
            className="about-page-main_timeline-item 
              about-page-main_timeline-university"
          >
            <div className="timeline-triangle timeline-university-triangle" />
            <span>Graduated University</span>
          </div>
          <div
            className="about-page-main_timeline-item 
              about-page-main_timeline-replicon-qa"
          >
            <div className="timeline-triangle timeline-qa-triangle" />
            <span>Test Automation Engineer</span>
          </div>
          <div
            className="about-page-main_timeline-item 
              about-page-main_timeline-replicon-dev"
          >
            <div className="timeline-triangle timeline-fsdev-triangle" />
            <span>Full-Stack Developer</span>
          </div>
          <div
            className="about-page-main_timeline-item 
              about-page-main_timeline-osprey"
          >
            <div className="timeline-triangle timeline-osprey-triangle" />

            <span>Front-End Developer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

DesktopTimeline.propTypes = {}

export default DesktopTimeline
