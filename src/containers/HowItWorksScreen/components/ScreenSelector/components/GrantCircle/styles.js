import styled from 'styled-components'
import { Flex } from 'grid-styled'
import How6 from '../../../../../../../src/assets/images/how6.png'

export const BtnRow = styled(Flex)`
  justify-content: center;
  flex-direction: row;
`

export const Label = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.medium.family};
  font-size: 14px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.black};
  align-self: center;
  text-align: center;
`

export const MoneyGraphic = styled.img.attrs(() => ({
  src: How6,
  alt: 'Graphic'
}))`
  margin-top: 10px;
  width: 260px;
  height: 220px;
`

export const Container = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-self: center;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    width: 100%;
  }
`
