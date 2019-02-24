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

const ContentPageTitleContent = props => {
  return (
    <div className="page-title__content">
      <p className="page-title__paragraph">
        Feel free to contact me via the form or use any of the links below
      </p>
      <div>
        <ul>
          <SocialLink Icon={FaEnvelopeSquare} link="stschmaltz@gmail.com" />
          <SocialLink Icon={FaLinkedin} link="linkedin.com/in/stschmaltz/" />
          <SocialLink Icon={FaGithubSquare} link="github.com/stschmaltz/" />
          <SocialLink Icon={FaTwitterSquare} link="@shane_schmaltz" />
        </ul>
      </div>
    </div>
  )
}

ContentPageTitleContent.propTypes = {}

export default ContentPageTitleContent
