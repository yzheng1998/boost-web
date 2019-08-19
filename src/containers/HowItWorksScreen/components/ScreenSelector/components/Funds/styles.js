import styled from 'styled-components'
import { Flex } from 'grid-styled'

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
export const CenterParagraph = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.medium.family};
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: justify;
  width: 75%;
  color: ${({ theme }) => theme.colors.tertiary};
  height: 70px;
`

export const ImgContainer = styled.img`
  margin-top: 10px;
  width: 220px;
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
