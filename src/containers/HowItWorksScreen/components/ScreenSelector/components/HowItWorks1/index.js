import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import { Container, ImgContainer, NumbersContainer, Paragraph } from './styles'
import How3 from '../../../../../../../src/assets/images/how3.png'
import NavNumber from '../../../../../../components/NavNumber'

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
        If you experience a financial hardship, you can request funds from the
        Grant Circle by submitting a request online.
      </Paragraph>
      <NumbersContainer>
        <NavNumber text="1" active />
        <NavNumber text="2" />
        <NavNumber text="3" />
        <NavNumber text="4" />
      </NumbersContainer>
      <ImgContainer src={How3} alt="Graphic" />
    </Container>
  )
}

export default HowItWorks1
