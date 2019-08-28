import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const BtnRow = styled(Flex)`
  justify-content: center;
  flex-direction: row;
`

export const ButtonContainer = styled(Flex)`
  justify-content: space-between;
  flex-direction: ${({ buttonPlacement }) =>
    buttonPlacement ? 'row-reverse' : 'row'};
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  width: 75%;
`

export const Label = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.medium.family};
  font-size: 14px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.black};
  align-self: center;
  text-align: center;
`
export const CenterParagraph = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.medium.family};
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: justify;
  width: 75%;
  color: ${({ theme }) => theme.colors.tertiary};
`
export const Container = styled(Flex)`
  width: 50%;
  /* padding-top: 50px; */
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-self: center;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    width: 100%;
  }
`

export const Slide = styled.img``
