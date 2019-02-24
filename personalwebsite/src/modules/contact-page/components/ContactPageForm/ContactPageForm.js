import React from 'react'
import PropTypes from 'prop-types'
import './ContactPageForm.css'

const ContactPageForm = props => {
  return (
    <div className="contact-page-form_container">
      <div className="contact-page-form_name-input" />
      <div className="contact-page-form_email-input" />
      <div className="contact-page-form_message-input" />
      <button className="contact-page-form_button">submit</button>
    </div>
  )
}

ContactPageForm.propTypes = {}

export default ContactPageForm
