import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import CenterParagraph from '../CenterParagraph'

import { Container, FundsGraphic } from './styles'

const Funds = () => (
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
    <FundsGraphic />
    <CenterParagraph>
      Funds can be requested to cover both temporary shortfalls or significant
      hardships, as long as the funds are are needed to address a difficuly
      financial situation. You can review the full Fund Use Policy in the{' '}
      Frequently Asked Questions.
    </CenterParagraph>
  </Container>
)

export default Funds
