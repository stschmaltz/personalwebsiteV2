import React from 'react'
import PropTypes from 'prop-types'
import './Hobbies.css'

const Hobby = ({ PhotoComponent, title, identifierText }) => {
  const hobbyClass = `about-page-main_hobby about-page-main_hobby-${identifierText}`
  return (
    <div className="about-page-main_hobby-container">
      <div className={hobbyClass}>
        <div className="hobby-description">
          <p className="hobby-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostru.
          </p>
        </div>
        <PhotoComponent />
      </div>
      <span className="about-page-main_bass-hobby-text">{title}</span>
    </div>
  )
}

Hobby.propTypes = {}

export default Hobby
