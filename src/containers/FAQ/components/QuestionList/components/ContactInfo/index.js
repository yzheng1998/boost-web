import React from 'react'
import { Typography } from '@material-ui/core'
import { ContactInfoContainer } from './styles'

const ContactInfo = () => (
  <ContactInfoContainer>
    <Typography>
      You can email the Grant Circle team at&nbsp;
      <a href="mailto:info@grantcircles.org">info@grantcircles.org</a>
      &nbsp;with any questions, suggestions, or feedback. We will get back to
      you within 1-2 business days.
    </Typography>
  </ContactInfoContainer>
)

export default ContactInfo
