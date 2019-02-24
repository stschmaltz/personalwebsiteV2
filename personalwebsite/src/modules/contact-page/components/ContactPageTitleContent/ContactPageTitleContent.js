import React from 'react'
import PropTypes from 'prop-types'
import SocialLink from '../SocialLink'

const ContentPageTitleContent = props => {
  return (
    <div className="page-title__content">
      <p>
        Feel free to contact me via the form or send me a message at any of
        these links
      </p>
      <div>
        <ul>
          <SocialLink />
          <SocialLink />
          <SocialLink />
        </ul>
      </div>
    </div>
  )
}

ContentPageTitleContent.propTypes = {}

export default ContentPageTitleContent
