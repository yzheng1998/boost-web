import styled from 'styled-components'
import { Flex } from 'grid-styled'
import CenterParagraph from '../CenterParagraph'
import How4 from '../../../../../../../src/assets/images/how4.png'

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

export const EnvelopeGraphic = styled.img.attrs(() => ({
  src: How4,
  alt: 'Graphic'
}))`
  width: 100px;
  height: 100px;
  margin: 30px;
  margin-bottom: 40px;
`

export const NumbersContainer = styled(Flex)`
  width: 100%;
  height: 100px;
  margin-top: 60px;
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
