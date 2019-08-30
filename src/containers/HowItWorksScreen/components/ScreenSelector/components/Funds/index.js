import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import CenterParagraph from '../CenterParagraph'

import { Container, FundsGraphic, FAQLink } from './styles'

const Funds = () => (
  <Container>
    <Header
      text="What are Grant Circle funds for?"
      color={theme.colors.header}
      style={{ alignSelf: 'center' }}
    />
    <CenterParagraph>
      The Grant Circle is here to help you get through a financial hardship.
      That could be a medical emergency, an unexpected car or home repair, or
      something else that challenges your financial well-being.
    </CenterParagraph>
    <FundsGraphic />
    <CenterParagraph>
      Funds can be requested to cover both both smaller or more serious
      hardships, as long as the funds are needed to address a difficult
      financial situation. You can review the full Fund Use Policy in the
      Frequently Asked Questions{' '}
      <FAQLink href="/faq" target="_blank" rel="noopener noreferrer">
        here
      </FAQLink>
      .
    </CenterParagraph>
  </Container>
)

export default Funds
