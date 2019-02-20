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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra mauris ut ligula lobortis, quis interdum sapien elementum.
        </p>
      </div>
    </div>
  )
}

PageTitle.propTypes = {}

export default PageTitle
