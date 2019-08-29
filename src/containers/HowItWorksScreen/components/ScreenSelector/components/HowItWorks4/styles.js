import styled from 'styled-components'
import { Flex } from 'grid-styled'
import CenterParagraph from '../CenterParagraph'
import How1 from '../../../../../../../src/assets/images/how1.png'

export const Paragraph = styled(CenterParagraph)`
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    min-height: 70px;
  }
`

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

export const ContributeGraphic = styled.img.attrs(() => ({
  src: How1,
  alt: 'Graphic'
}))`
  width: 180px;
  height: 180px;
`

export const NumbersContainer = styled(Flex)`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    width: 100%;
  }
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

export const GraphicContainer = styled(Flex)`
  width: 100%;
  height: 260px;
  justify-content: center;
  align-items: center;
`
