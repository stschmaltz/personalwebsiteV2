import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5rem',
      }}
    >
      <h1>Page Not Found</h1>
      <p>
        You just hit a route that doesn&#39;t exist... please contact me if it
        should have :)
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
