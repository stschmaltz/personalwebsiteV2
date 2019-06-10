import React from 'react'
import PropTypes from 'prop-types'

const TimelineYearDivider = ({ year }) => {
  return (
    <div className="about-page-main_timeline-year-item-container">
      <span className="timeline-year-label">{year}</span>
      <div className="divider" />
    </div>
  )
}

export default TimelineYearDivider
