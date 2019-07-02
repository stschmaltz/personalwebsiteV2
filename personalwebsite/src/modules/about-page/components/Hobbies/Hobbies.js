import React from 'react'
import PropTypes from 'prop-types'
import Hobby from './Hobby'
import BassPhoto from '../hobby-photos/BassPhoto'
import RunningPhoto from '../hobby-photos/RunningPhoto'
import SnowboardPhoto from '../hobby-photos/SnowboardPhoto'
import VideoGamePhoto from '../hobby-photos/VideoGamePhoto'
import './Hobbies.css'

const Hobbies = props => {
  return (
    <div className="about-page-main_hobbies-container">
      <span>Hobbies</span>
      <div className="about-page-main_hobbies-inner-container">
        <Hobby
          identifierText="bass"
          PhotoComponent={BassPhoto}
          title="Bass Guitar"
        />
        <Hobby
          identifierText="running"
          PhotoComponent={RunningPhoto}
          title="Running"
        />
        <Hobby
          identifierText="snowboarding"
          PhotoComponent={SnowboardPhoto}
          title="Snowboarding"
        />
        <Hobby
          identifierText="games"
          PhotoComponent={VideoGamePhoto}
          title="Video Games"
        />
      </div>
    </div>
  )
}

Hobbies.propTypes = {}

export default Hobbies
