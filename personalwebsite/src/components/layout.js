import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './Nav/Nav'
import './layout.css'
import { Location } from '@reach/router'
import { ToastProvider } from 'react-toast-notifications'
import withPageView from '../lib/withPageView/withPageView'
import SEO from '../components/seo'

const seoKeyWords = [
  `gatsby`,
  `application`,
  `react`,
  `Shane Schmaltz`,
  `Shane`,
  `Schmaltz`,
  `Calgary`,
  `Software Developer`,
  `Software`,
  `Developer`,
  `Website`,
  ``,
  `Web Developer`,
]
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Location>
            {locationProps => (
              <ToastProvider>
                <SEO keywords={seoKeyWords} />

                <div className="main-layout">
                  <Nav {...locationProps} />
                  {children}
                </div>
              </ToastProvider>
            )}
          </Location>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withPageView(Layout)
