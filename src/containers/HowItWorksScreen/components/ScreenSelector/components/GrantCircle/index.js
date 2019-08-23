import React from 'react'
import Header from '../../../../../../components/Header'
import theme from '../../../../../../theme'
import CenterParagraph from '../CenterParagraph'
import { Container, MoneyGraphic } from './styles'

// eslint-disable-next-line arrow-body-style
const GrantCircle = () => {
  return (
    <Container>
      <Header
        text="What is the Grant Circle?"
        color={theme.colors.header}
        style={{ alignSelf: 'center' }}
      />
      <CenterParagraph>
        The Grant Circle is ha shared fund availible through your workplace.
        Funds are availible to help you and your colleagues in times of need.
      </CenterParagraph>
      <MoneyGraphic />
      <CenterParagraph>
        The Grant Circle was started by a philanthropic donation. You and your
        colleagues can also contribute so that the fund can reach more members
        of your workplace community.
      </CenterParagraph>
    </Container>
  )
}

export default GrantCircle