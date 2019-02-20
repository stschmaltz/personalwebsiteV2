import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './Nav/Nav'
import Header from './header'
import './layout.css'

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
    render={data => (
      <>
        <div>
          <Nav />
          {children}
          <footer
            style={{
              position: 'absolute',
              bottom: 0,
              left: '45%',
              marginBottom: '5rem',
            }}
          >
            {/* © {new Date().getFullYear()} Shane Schmaltz */}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
