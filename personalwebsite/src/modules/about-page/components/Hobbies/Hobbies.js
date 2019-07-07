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
          some coworkers that had a garage band. I practiced almost every day and met with 
          those coworkers every other week to play music. After a year I bought a bass and 
          immediately fell in love and continue to play today.`}
        />
        <Hobby
          identifierText="running"
          PhotoComponent={RunningPhoto}
          title="Running"
          description={`When I graduated university in 2015, I was a rather fairly inactive 
          individual. I decided when I started working that I wanted to change that and stop 
          limiting myself. I started weight lifting and learned how to cook healthier foods. 
          Nowadays I don't make it to the weights as much but I have started getting into
          running and many other fun sports.`}
        />
        <Hobby
          identifierText="snowboarding"
          PhotoComponent={SnowboardPhoto}
          title="Snowboarding"
          description={`Snowboarding is one of my newest hobbies.. Last winter was the first 
          year I decided to actually go out and buy my own board and try to 
          learn the sport. Once I started to get the hang of things it quickly became one of
          my favourite activities. This year I almost can't wait for winter just to get back in the mountains.`}
        />
        <Hobby
          identifierText="games"
          PhotoComponent={VideoGamePhoto}
          title="Video Games"
          description={`Video games are a life long interest of mine. Additionally, like many others in 
          this industry, are a big reason why I even got into programming. I don't manage to get 
          in nearly as many hours as my glory days but I still love gaming as a way to unwind 
          at the end of a day.`}
        />
      </div>
    </div>
  )
}

Hobbies.propTypes = {}

export default Hobbies
