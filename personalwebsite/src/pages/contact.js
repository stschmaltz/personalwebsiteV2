import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import withParticleBackground from '../modules/particle-background/withParticleBackground'
import ContactPageContent from '../modules/contact-page/ContactPage'

const ContactPage = props => {
  return (
    <Layout>
      <ContactPageContent />
    </Layout>
  )
}

ContactPage.propTypes = {}

export default withParticleBackground(ContactPage)
