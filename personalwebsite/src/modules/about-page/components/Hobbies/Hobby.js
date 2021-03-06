import React from 'react'
import PropTypes from 'prop-types'
import './Hobbies.css'

const Hobby = ({ PhotoComponent, title, identifierText, description }) => {
  const hobbyClass = `about-page-main_hobby about-page-main_hobby-${identifierText}`
  return (
    <div className="about-page-main_hobby-container">
      <div className={hobbyClass}>
        <div className="hobby-description">
          <p className="hobby-description-text">{description}</p>
        </div>
        <PhotoComponent />
      </div>
      <span className="about-page-main_bass-hobby-text">{title}</span>
    </div>
  )
}

Hobby.propTypes = {}

export default Hobby
