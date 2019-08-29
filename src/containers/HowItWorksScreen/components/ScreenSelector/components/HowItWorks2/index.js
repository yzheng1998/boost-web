import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import { Container, EnvelopeGraphic, Paragraph } from './styles'
import NavNumbers from '../NavNumbers'

const HowItWorks2 = () => (
  <Container>
    <Header
      text="How does it work?"
      color={theme.colors.header}
      style={{ alignSelf: 'center' }}
    />
    <Paragraph>
      You can receive your first $400 in 1-2 business days by simply answering a
      few questions in the request form. This is a one-time benefit unless you
      contribute back into the fund. (For more detail, see Step 4 or the
      Frequently Asked Questions).
    </Paragraph>
    <NavNumbers activeScreen={2} />
    <EnvelopeGraphic />
  </Container>
)

export default HowItWorks2
