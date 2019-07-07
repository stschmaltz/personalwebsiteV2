import React from 'react'
import PropTypes from 'prop-types'
import SocialLink from '../SocialLink'
import {
  FaTwitterSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaGithubSquare,
  FaMailBulk,
} from 'react-icons/fa'
import './ContactPageTitleContent.css'

const usingTwitter = false

const ContentPageTitleContent = props => {
  const twitter = usingTwitter ? (
    <SocialLink Icon={FaTwitterSquare} linkUrl="" linkText="@shane_schmaltz" />
  ) : null
  return (
    <div className="page-title__content">
      <p className="page-title__paragraph">
        Please feel welcome to contact me via the form or use any of the links
        below.
      </p>
      <div>
        <ul>
          <SocialLink
            Icon={FaEnvelopeSquare}
            linkUrl="mailto:stschmaltz@gmail.com"
            linkText="stschmaltz@gmail.com"
          />
          <SocialLink
            Icon={FaLinkedin}
            linkUrl="https://linkedin.com/in/stschmaltz/"
            linkText="linkedin.com/in/stschmaltz/"
          />
          <SocialLink
            Icon={FaGithubSquare}
            linkUrl="https://github.com/stschmaltz/"
            linkText="github.com/stschmaltz/"
          />
          {twitter}
        </ul>
      </div>
    </div>
  )
}

ContentPageTitleContent.propTypes = {}

export default ContentPageTitleContent
