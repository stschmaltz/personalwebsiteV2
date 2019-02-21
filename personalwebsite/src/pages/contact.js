import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle/PageTitle'
import withParticleBackground from '../modules/particle-background/withParticleBackground'

const ContactPage = props => {
  return (
    <Layout>
      <div style={{ maxWidth: '900px', margin: '7rem auto' }}>
        <PageTitle title="Contact" />
      </div>
    </Layout>
  )
}

ContactPage.propTypes = {}

export default withParticleBackground(ContactPage)
