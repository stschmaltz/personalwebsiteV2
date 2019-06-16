import React from 'react'
import PropTypes from 'prop-types'
import './DesktopTimeline.css'
import TimelineYearDivider from './TimelineYearDivider'
import TimelineItem from './TimelineItem'

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
          <TimelineItem
            date="April 2015"
            titleText="Graduated University"
            eventName="university"
          />
          <TimelineItem
            date="Replicon | May 2015"
            titleText="Test Automation Engineer"
            eventName="replicon-qa"
          />
          <TimelineItem
            date="Replicon | May 2016"
            titleText="Full-Stack Developer"
            eventName="replicon-dev"
          />
          <TimelineItem
            date="Osprey | March 2019"
            titleText="Front-End Developer"
            eventName="osprey"
          />
        </div>
      </div>
    </div>
  )
}

DesktopTimeline.propTypes = {}

export default DesktopTimeline
