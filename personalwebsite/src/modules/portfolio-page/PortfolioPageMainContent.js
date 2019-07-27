import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioPageMainContent.css'
import PortfolioPagePortfolioItem from './PortfolioPagePortfolioItem'
import SpotifyDashboardThumbnail from './SpotifyDashboardThumbnail'
import PersonalSiteV1Thumbnail from './PersonalSiteV1Thumbnail'
import MarketingDemoSiteThumbnail from './MarketingDemoSiteThumbnail'

const PortfolioPageMainContent = props => {
  return (
    <div className="portfolio-page-main-content__outer-container">
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem
          siteName="Spotify Dashboard"
          siteUrl="https://spotifydashboard.com"
          description="ReactJS site I made to experiment with Spotify Api. I learned how to do authentication and create an express JS server. As well as practice interacting with an api in ReactJS (used redux)"
          children={<SpotifyDashboardThumbnail />}
        />
      </div>
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem
          siteName="Personal Site V1"
          siteUrl="https://personal-site-eqp8ijihn.now.sh/"
          description="The first ReactJS site I made and also the original version of my personal website."
          children={<PersonalSiteV1Thumbnail />}
        />
      </div>
      <div className="portfolio-page-main-content__portfolio-item">
        <PortfolioPagePortfolioItem
          siteName="Marketing Demo Site"
          siteUrl="https://marketing-demo-site.now.sh"
          description="Another ReactJS site, this time it's a server side rendered website built with Gatsby. This was to practice some interesting marketing website techniques."
          children={<MarketingDemoSiteThumbnail />}
        />
      </div>
    </div>
  )
}

PortfolioPageMainContent.propTypes = {}

export default PortfolioPageMainContent
