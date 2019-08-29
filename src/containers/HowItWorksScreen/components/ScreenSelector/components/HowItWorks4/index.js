import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import { Container, ContributeGraphic, Paragraph } from './styles'
import NavNumbers from '../NavNumbers'

const HowItWorks4 = () => (
  <Container>
    <Header
      text="How does it work?"
      color={theme.colors.header}
      style={{ alignSelf: 'center' }}
    />
    <Paragraph>
      You can donate to the fund at any time. When you do, up to $400 of your
      contributions will become available for you to request again without
      documentation (like your first $400). Contributions are accepted and
      grants are currently only made with PayPal.
    </Paragraph>
    <NavNumbers activeScreen={4} />
    <ContributeGraphic />
  </Container>
)

export default HowItWorks4
