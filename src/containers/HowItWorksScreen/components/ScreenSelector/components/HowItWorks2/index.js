import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import { Container, ImgContainer, NumbersContainer, Paragraph } from './styles'
import How4 from '../../../../../../../src/assets/images/how4.png'
import NavNumber from '../../../../../../components/NavNumber'

// eslint-disable-next-line arrow-body-style
const HowItWorks2 = () => {
  return (
    <Container>
      <Header
        text="How does it work?"
        color={theme.colors.header}
        style={{ alignSelf: 'center' }}
      />
      <Paragraph>
        You can recieve your first $400 in 1-2 business days by simply answering
        a few questions in the request form. This is a one-time benefit unless
        you contribute back into the fund. (See Step 4 or the FAQ for more
        detail).
      </Paragraph>
      <NumbersContainer>
        <NavNumber text="1" />
        <NavNumber text="2" active />
        <NavNumber text="3" />
        <NavNumber text="4" />
      </NumbersContainer>
      <ImgContainer src={How4} alt="Graphic" />
    </Container>
  )
}

export default HowItWorks2
