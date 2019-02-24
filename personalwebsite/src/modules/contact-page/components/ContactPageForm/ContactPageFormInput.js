import React from 'react'
import PropTypes from 'prop-types'
import './ContactPageForm.css'

const ContactPageFormInput = ({ label, InputComponent }) => {
  return (
    <div className="contact-page-form-input_container">
      <span className="contact-page-form-input_label">{label}:</span>
      {InputComponent}
    </div>
  )
}

ContactPageFormInput.propTypes = {}

export default ContactPageFormInput
