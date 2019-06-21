import React from 'react'
import PropTypes from 'prop-types'
import './DesktopTimeline.css'
import TimelineYearDivider from './TimelineYearDivider'
import TimelineItem from './TimelineItem'

const DesktopTimeline = props => {
  return (
    <div className="about-page-main_timeline-container">
      <div className="about-page-main_timeline-inner-container">
        <div className="about-page-main_timeline-year-container">
          <TimelineYearDivider year={2015} />
          <TimelineYearDivider year={2016} />
          <TimelineYearDivider year={2017} />
          <TimelineYearDivider year={2018} />
          <TimelineYearDivider year={2019} />
          <div className="about-page-main_timeline-year-item-container" />
        </div>
        <div className="about-page-main_timeline-bar">
          <TimelineItem
            secondaryText="April 2015"
            titleText="Graduated University"
            eventName="university"
            location="University of Calgary"
            dateRange="Apr 2010 - Sep 2019"
            description="I graduated from the University of
             Calgary with a Bachelors of Science in Computer 
             Science."
          />
          <TimelineItem
            secondaryText="Replicon | May 2015"
            titleText="Test Automation Engineer"
            eventName="replicon-qa"
            location="Replicon Inc."
            dateRange="May 2010 - May 2011"
            description="Replicon was my first introduction to 
            programming in the real world and grew to truly love it. 
            I started in QA writing acceptance tests in selenium and
             I learned the process being creating enterprise
              software using agile methodologies."
          />
          <TimelineItem
            secondaryText="Replicon | May 2016"
            titleText="Full-Stack Developer"
            eventName="replicon-dev"
            location="Replicon Inc."
            dateRange="May 2011 - Mar 2019"
            description="After a year of QA, I was eager for a new challenge... Development! My first year as a dev was spent mostly working on a data streaming project involving Kafka and Kotlin. After this I started learning ReactJS and dove deep into the front-end world. I remained fullstack and working with many AWS resources but this became my passion."
          />
          <TimelineItem
            secondaryText="Osprey | March 2019"
            titleText="Front-End Developer"
            eventName="osprey"
            location="Osprey informatics"
            dateRange="Mar 2010 - Present"
            description="As I neared four years at Replicon, I felt that I was ready for another challenge and switched companies to Osprey Informatics. Replicon was a midsize company with 500 employees and Osprey was about 20 when I joined. It's been incredibly different and also a period of rapid growth for me. I do EmberJS and am the primary front-end developer, effectively taking ownership of much of the front-end"
          />
        </div>
      </div>
    </div>
  )
}

DesktopTimeline.propTypes = {}

export default DesktopTimeline
