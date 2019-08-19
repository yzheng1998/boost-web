import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import { Container, ImgContainer, NumbersContainer, Paragraph } from './styles'
import How1 from '../../../../../../../src/assets/images/how1.png'
import NavNumber from '../../../../../../components/NavNumber'

// eslint-disable-next-line arrow-body-style
const HowItWorks4 = () => {
  return (
    <Container>
      <Header
        text="How does it work?"
        color={theme.colors.header}
        style={{ alignSelf: 'center' }}
      />
      <Paragraph>
        You can donate to the fund at any time. When you do, up to $400 of your
        contributions will become availible for you to request again without
        documentation (like your first $400). Contributions and grants are made
        availible via PayPal.
      </Paragraph>
      <NumbersContainer>
        <NavNumber text="1" />
        <NavNumber text="2" />
        <NavNumber text="3" />
        <NavNumber text="4" active />
      </NumbersContainer>
      <ImgContainer src={How1} alt="Graphic" />
    </Container>
  )
}

export default HowItWorks4
