import React from 'react'
import PropTypes from 'prop-types'
import './AboutPageMainContent.css'
import { Link } from 'gatsby'
import sizeMe from 'react-sizeme'
import DesktopTimeline from './DesktopTimeline/DesktopTimeline'
import Hobbies from './Hobbies/Hobbies'
import { timelineData } from './TimelineData/timeline'
const AboutPageMainContent = ({ size }) => {
  const { width } = size

  const timeline =
    width > 500 ? <DesktopTimeline timelineItems={timelineData} /> : null
  const hobbies = width > 500 ? <Hobbies /> : null
  const description =
    width > 500
      ? `My primary focus and passion is front-end web development with a special
  interest in UI/UX design. I have a lot of fun continuously working on
  improving my skills and exploring new challenges. Software is magic that
  is constantly changing the world and I am so grateful to be a part of
  that.`
      : `My primary focus and passion is front-end web development with a special
      interest in UI/UX design.`
  return (
    <div className="about-page-main_container">
      <p className="about-page-main_paragraph">
        {description}
        <br /> If you have any interesting opportunities available, please{' '}
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
