import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import { Container, FormGraphic, Paragraph, GraphicContainer } from './styles'
import NavNumbers from '../NavNumbers'

const HowItWorks3 = () => (
  <Container>
    <Header
      text="How does it work?"
      color={theme.colors.header}
      style={{ alignSelf: 'center' }}
    />
    <Paragraph>
      Beyond your first $400, you will be asked to submit documentation of your
      financial hardship. We review all requests within 1-2 business days, but
      the process can take up to 1-2 weeks if we need additional information
      from you. In such cases, a smaller amount of money may be made available
      to you sooner.
    </Paragraph>
    <NavNumbers activeScreen={3} />
    <GraphicContainer>
      <FormGraphic />
    </GraphicContainer>
  </Container>
)

export default HowItWorks3
