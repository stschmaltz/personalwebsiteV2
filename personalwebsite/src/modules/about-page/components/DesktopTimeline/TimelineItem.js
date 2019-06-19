import React from 'react'
import PropTypes from 'prop-types'
import './DesktopTimeline.css'
import InfoIcon from '@material-ui/icons/InfoOutlined'

const TimelineItem = ({ titleText, eventName, date }) => {
  return (
    <div
      className={`about-page-main_timeline-item 
              about-page-main_timeline-${eventName}`}
    >
      <div className={`timeline-triangle timeline-${eventName}-triangle`} />
      <span className="about-page-main_timeline-item-title">{titleText}</span>
      <div className="about-page-main_timeline-item-secondary-row">
        <span className="about-page-main_timeline-item-date">{date}</span>
        <InfoIcon
          style={{ fontSize: 14 }}
          className="about-page-main_timeline-item-info-icon"
        />
      </div>
      <div className="about-page-main_timeline-item-description-container">
        this is a message
      </div>
    </div>
  )
}

TimelineItem.propTypes = {}

export default TimelineItem
