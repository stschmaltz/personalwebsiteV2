import React from 'react'
import PropTypes from 'prop-types'
import './PageTitle.css'

const PageTitle = ({ title }) => {
  return (
    <div className="page-title__main-container">
      <div className="page-title__above-bar" />
      <div className="page-title__header">
        <h1>{title}</h1>
      </div>
      <div className="page-title__content">
        <p>
          Feel free to contact me via the form or send me a message at any of
          these links
        </p>
      </div>
    </div>
  )
}

PageTitle.propTypes = {}

export default PageTitle
