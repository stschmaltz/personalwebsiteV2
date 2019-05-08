import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioPageMainContent.css'
import PortfolioPagePortfolioItem from './PortfolioPagePortfolioItem'
import SpotifyDashboardThumbnail from './SpotifyDashboardThumbnail'
import PersonalSiteV1Thumbnail from './PersonalSiteV1Thumbnail'

const PortfolioPageMainContent = props => {
  return (
    <div className="portfolio-page-main-content__outer-container">
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem
          description="ReactJS site I made to experiment with Spotify api"
          children={<SpotifyDashboardThumbnail />}
        />
      </div>
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem
          description="ReactJS site I made to experiment with Spotify api"
          children={<PersonalSiteV1Thumbnail />}
        />
      </div>
    </div>
  )
}

PortfolioPageMainContent.propTypes = {}

export default PortfolioPageMainContent
