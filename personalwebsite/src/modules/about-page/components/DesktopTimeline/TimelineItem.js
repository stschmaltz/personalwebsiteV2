import React from 'react'
import PropTypes from 'prop-types'
import './TimelineItem.css'
import InfoIcon from '@material-ui/icons/InfoOutlined'

const TimelineItem = ({
  titleText,
  eventName,
  secondaryText,
  description,
  location,
  dateRange,
}) => {
  return (
    <div
      className={`about-page-main_timeline-item 
              about-page-main_timeline-${eventName}`}
    >
      <div className={`timeline-triangle timeline-${eventName}-triangle`} />

      <span className="about-page-main_timeline-item-title">{titleText}</span>
      <div className="about-page-main_timeline-item-secondary-row">
        <span className="about-page-main_timeline-item-date">
          {secondaryText}
        </span>
        <InfoIcon className="about-page-main_timeline-item-info-icon" />
      </div>
      <div className="about-page-main_timeline-item-description-container">
        <h1 className="about-page-main_timeline-item-description-header">
          {location}
        </h1>
        <p className="about-page-main_timeline-item-description-date">
          {dateRange}
        </p>
        <p className="about-page-main_timeline-item-description-text">
          {description}
        </p>
      </div>
    </div>
  )
}

TimelineItem.propTypes = {}

export default TimelineItem
