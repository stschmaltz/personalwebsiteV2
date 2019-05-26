import React from 'react'
import PropTypes from 'prop-types'
import AboutMePhoto from './AboutMePhoto'
import './AboutPageTitleContent.css'
import differenceInCalendarISOYears from 'date-fns/difference_in_calendar_iso_years'
import differenceInCalendarISOWeeks from 'date-fns/difference_in_calendar_iso_weeks'

const AboutPageTitleContent = props => {
  const myAgeInYears = Math.floor(
    differenceInCalendarISOWeeks(new Date(), new Date(1992, 10, 16, 0, 0)) / 52,
  )
  return (
    <div className="about-me-page-title_main-container">
      <p>
        Hey there! My name is Shane Schmaltz.
        <br />
        I'm a {myAgeInYears} year old full-stack software developer living in
        the heart of Calgary Alberta Canada.
        <br />
      </p>

      <div className="about-me-page-title_photo-card">
        <AboutMePhoto />
        Thank you for checking out my website! 😊
      </div>
    </div>
  )
}

AboutPageTitleContent.propTypes = {}

export default AboutPageTitleContent
