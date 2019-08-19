import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import { Container, ImgContainer, NumbersContainer, Paragraph } from './styles'
import How7 from '../../../../../../../src/assets/images/how7.png'
import NavNumber from '../../../../../../components/NavNumber'

// eslint-disable-next-line arrow-body-style
const HowItWorks3 = () => {
  return (
    <Container>
      <Header
        text="How does it work?"
        color={theme.colors.header}
        style={{ alignSelf: 'center' }}
      />
      <Paragraph>
        Beyond your first $400, you will be asked to submit documentation of
        your financial hardship. We review all requests within 1-2 business
        days, but the process can take up to 1-2 weeks if we need additional
        information from you. In such cases, a smaller amount of money may be
        made available to you sooner.
      </Paragraph>
      <NumbersContainer>
        <NavNumber text="1" />
        <NavNumber text="2" />
        <NavNumber text="3" active />
        <NavNumber text="4" />
      </NumbersContainer>
      <ImgContainer src={How7} alt="Graphic" />
    </Container>
  )
}

export default HowItWorks3
