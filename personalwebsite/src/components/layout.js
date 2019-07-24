import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './Nav/Nav'
import './layout.css'
import { Location } from '@reach/router'
import { ToastProvider } from 'react-toast-notifications'
import withPageView from '../lib/withPageView/withPageView'
import SEO from '../components/seo'
import { motion } from 'framer-motion'

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
                <SEO location={locationProps} keywords={seoKeyWords} />

                <div className="main-layout">
                  <Nav {...locationProps} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{ width: '100%' }}
                  >
                    {children}
                  </motion.div>
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
