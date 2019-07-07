import React from 'react'
import PropTypes from 'prop-types'
import './ContactPageForm.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ContactPageFormInput from './ContactPageFormInput'
import * as emailjs from 'emailjs-com'
import { withToastManager } from 'react-toast-notifications'

const service_id = 'default_service'
const template_id = 'template_FAqr1HtI'

const ContactPageForm = ({ toastManager, context }) => {
  return (
    <>
      <Formik
        initialValues={{ email: '' }}
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
            const template_params = {
              from_name: values.name,
              from_email: values.email,
              message_html: values.message,
            }
            emailjs.send(
              service_id,
              template_id,
              template_params,
              process.env.USER_ID,
            )
            toastManager.add('Email sent successfully', {
              appearance: 'success',
              autoDismiss: true,
              pauseOnHover: true,
            })

            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className="contact-page-form_container">
            <ContactPageFormInput
              InputComponent={
                <Field
                  className="contact-page-form_name-input"
                  type="text"
                  name="name"
                />
              }
              label="Name"
            />
            <ContactPageFormInput
              InputComponent={
                <Field
                  className="contact-page-form_email-input"
                  type="email"
                  name="email"
                />
              }
              label="Email"
            />
            <ContactPageFormInput
              InputComponent={
                <Field
                  component="textarea"
                  className="contact-page-form_message-input"
                  type="text"
                  name="message"
                />
              }
              label="Message"
            />
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
    </>
  )
}

ContactPageForm.propTypes = {}

export default withToastManager(ContactPageForm)
