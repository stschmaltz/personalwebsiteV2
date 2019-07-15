import React from 'react'
import PropTypes from 'prop-types'
import './DesktopTimeline.css'
import TimelineYearDivider from './TimelineYearDivider'
import TimelineItem from './TimelineItem'

const DesktopTimeline = ({ timelineItems }) => {
  const items = timelineItems || []
  const timelineContent = items.map(
    ({
      secondaryText,
      titleText,
      eventName,
      location,
      dateRange,
      description,
    }) => (
      <TimelineItem
        secondaryText={secondaryText}
        titleText={titleText}
        eventName={eventName}
        location={location}
        dateRange={dateRange}
        description={description}
      />
    ),
  )

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
        <div className="about-page-main_timeline-bar">{timelineContent}</div>
      </div>
    </div>
  )
}

DesktopTimeline.propTypes = {}

export default DesktopTimeline
