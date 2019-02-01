import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
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
      ]}
    />
    <h1>Shane Schmaltz</h1>
    <p>Software Developer</p>
    <p>Creating good first impressions on the web</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
