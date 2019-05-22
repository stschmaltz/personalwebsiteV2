import React from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../../components/PageTitle/PageTitle'
import './AboutPage.css'
import AboutPageTitleContent from './components/AboutPageTitleContent'
import AboutPageMainContent from './components/AboutPageMainContent'

const AboutPage = props => {
  return (
    <div className="about-page_content-container">
      <PageTitle
        className="about-page_title-content"
        title="About Me"
        ContentComponent={AboutPageTitleContent}
      />
      <AboutPageMainContent />
    </div>
  )
}

AboutPage.propTypes = {}

export default AboutPage
