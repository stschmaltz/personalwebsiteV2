import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from '../../meta/config'

const Seo = props => {
  const { data, keywords, location } = props
  // debugger
  const title = config.siteTitle + location.location.pathname
  const description = config.siteDescription
  const url = config.siteUrl + location.location.pathname

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: 'og: http://ogp.me/ns#',
      }}
      meta={
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : [].concat(meta)
      }
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="language" content="English" />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/* <meta property="fb:app_id" content={facebook.appId} /> */}
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ''}
      />
    </Helmet>
  )
}

Seo.propTypes = {
  data: PropTypes.object,
}

export default Seo
