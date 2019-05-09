import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioPageTitleContent.css'

const PortfolioPageTitleContent = props => {
  return (
    <div>
      <span>
        Welcome to my portfolio page. These are all websites I have personally
        created start to finish by myself. All of the sites are mobile and
        desktop friendly. The code for each is publicly available at my github.
      </span>
      <button className="portfolio-page-content_github-button">
        Available Here
      </button>
    </div>
  )
}

PortfolioPageTitleContent.propTypes = {}

export default PortfolioPageTitleContent
