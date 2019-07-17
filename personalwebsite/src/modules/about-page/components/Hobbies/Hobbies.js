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
          description={`I started playing guitar in January of 2017 after being inspired by 
          some coworkers that had a garage band. A year later I started playing bass for those
          guys and still do today.`}
        />
        <Hobby
          identifierText="running"
          PhotoComponent={RunningPhoto}
          title="Running"
          description={`I found a love for fitness later in my life. After graduating university 
          I bought a gym membership and started lifting weights. After a while I started branching 
          out and enjoy a variety of sports today. Running is my main activity nowadays but I make sure to 
          find new things to try regularly.`}
        />
        <Hobby
          identifierText="snowboarding"
          PhotoComponent={SnowboardPhoto}
          title="Snowboarding"
          description={`Snowboarding is one of my newest hobbies. Last winter was the first 
          year I decided to make an effort to learn how to snowboard and it immediately became one of my favourite
          activities of all time.`}
        />
        <Hobby
          identifierText="games"
          PhotoComponent={VideoGamePhoto}
          title="Video Games"
          description={`Video games are a life long interest of mine. They are even a big reason as to how I even got into programming. I don't manage to get 
          in nearly as many hours as my glory days but I still love gaming as a way to unwind 
          at the end of a day.`}
        />
      </div>
    </div>
  )
}

Hobbies.propTypes = {}

export default Hobbies
