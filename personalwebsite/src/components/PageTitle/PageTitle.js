import React from 'react'
import PropTypes from 'prop-types'
import './PageTitle.css'
import SocialLink from '../../modules/contact-page/components/SocialLink'

const PageTitle = ({ title, ContentComponent }) => {
  return (
    <div className="page-title__main-container">
      <div className="page-title__above-bar" />
      <div className="page-title__header">
        <h1>{title}</h1>
      </div>
      <ContentComponent />
    </div>
  )
}

PageTitle.propTypes = {}

export default PageTitle
