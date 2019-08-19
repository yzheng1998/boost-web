import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import CenterParagraph from '../CenterParagraph'

import { Container, ImgContainer } from './styles'
import How5 from '../../../../../../../src/assets/images/how5.png'

// eslint-disable-next-line arrow-body-style
const Funds = () => {
  return (
    <Container>
      <Header
        text="What are funds for?"
        color={theme.colors.header}
        style={{ alignSelf: 'center' }}
      />
      <CenterParagraph>
        The Grant Circle is here to help you get through a challenging financial
        hardship. That could be a medical emergency, and unexpected car or home
        repair, or something else that challenges your financial well-being.
      </CenterParagraph>
      <ImgContainer src={How5} alt="Graphic" />
      <CenterParagraph>
        Funds can be requested to cover both temporary shortfalls or significant
        hardships, as long as the funds are are needed to address a difficuly
        financial situation. You can review the full Fund Use Policy in the{' '}
        Frequently Asked Questions.
      </CenterParagraph>
    </Container>
  )
}

export default Funds
