import React from 'react'
import PropTypes from 'prop-types'
import './ContactPageForm.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const ContactPageForm = props => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          let errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="contact-page-form_container">
            <div className="contact-page-form_name-container">
              <span className="contact-page-form_name-label">Name:</span>
              <Field
                className="contact-page-form_name-input"
                type="text"
                name="name"
              />
            </div>
            <div className="contact-page-form_email-container">
              <span className="contact-page-form_email-label">Email:</span>
              <Field
                className="contact-page-form_email-input"
                type="email"
                name="email"
              />
            </div>
            <div className="contact-page-form_message-container">
              <span className="contact-page-form_message-label">Message:</span>

              <Field
                component="textarea"
                className="contact-page-form_message-input"
                type="text"
                name="message"
              />
            </div>

            <button
              className="contact-page-form_button"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

ContactPageForm.propTypes = {}

export default ContactPageForm
