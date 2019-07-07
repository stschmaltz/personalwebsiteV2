import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioPageTitleContent.css'

const PortfolioPageTitleContent = props => {
  return (
    <div>
      <span>
        Welcome to my portfolio page. These websites I personally
        created start to finish by myself. All of the sites are mobile and
        desktop friendly. The code for each is publicly available at my github.
      </span>
      <a
        href="https://github.com/stschmaltz"
        className="portfolio-page-content_github-button"
      >
        Available Here
      </a>
    </div>
  )
}

PortfolioPageTitleContent.propTypes = {}

export default PortfolioPageTitleContent
