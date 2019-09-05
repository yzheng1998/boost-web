import React from 'react'
import { Footer, FooterText } from './styles'

const PageFooter = () => (
  <Footer>
    <FooterText>
      <address>
        Please email{' '}
        <a href="mailto:greenpath@grantcircles.org">
          greenpath@grantcircles.org
        </a>{' '}
        with
        <br />
        any questions, issues, or feedback.
      </address>
    </FooterText>
  </Footer>
)

export default PageFooter
