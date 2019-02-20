import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import PageTitle from '../components/PageTitle/PageTitle'

const contact = props => {
  return (
    <Layout>
      <div style={{ width: '900px', margin: '7rem auto' }}>
        <PageTitle title="Contact" />
      </div>
    </Layout>
  )
}

contact.propTypes = {}

export default contact
