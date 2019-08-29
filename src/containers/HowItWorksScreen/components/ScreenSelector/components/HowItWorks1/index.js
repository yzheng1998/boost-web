import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import {
  Container,
  Paragraph,
  LightningGraphic,
  GraphicContainer
} from './styles'
import NavNumbers from '../NavNumbers'

// eslint-disable-next-line arrow-body-style
const HowItWorks1 = () => {
  return (
    <Container>
      <Header
        text="How does it work?"
        color={theme.colors.header}
        style={{ alignSelf: 'center' }}
      />
      <Paragraph>
        If you experience a financial hardship, you can seek funds from the
        Grant Circle by submitting a request online.
      </Paragraph>
      <NavNumbers activeScreen={1} />
      <GraphicContainer>
        <LightningGraphic />
      </GraphicContainer>
    </Container>
  )
}

export default HowItWorks1
