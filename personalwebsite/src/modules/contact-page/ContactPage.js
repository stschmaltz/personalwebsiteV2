import React from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../../components/PageTitle/PageTitle'
import './ContactPage.css'
import ContactPageTitleContent from './components/ContactPageTitleContent/ContactPageTitleContent'
import ContactPageForm from './components/ContactPageForm/ContactPageForm'

const ContactPage =  props => {
  return (
    <div className="contact-page_content-container">
      <PageTitle title="Contact" ContentComponent={ContactPageTitleContent} />
      <ContactPageForm />
    </div>
  )
}

ContactPage.propTypes = {}

export default ContactPage
