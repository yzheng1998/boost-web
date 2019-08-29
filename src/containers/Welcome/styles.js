import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const WelcomeScreen = styled(Flex)`
  height: auto;
  min-height: 100vh;
  flex-direction: column;
  margin-top: 20px;
`

export const InfoText = styled.span`
  justify-content: center;
  align-self: center;
  color: ${({ theme, green }) => (green ? theme.colors.tertiary : '')};
  font-family: ${({ theme }) => theme.fonts.medium.family};
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    text-align: center;
    padding-bottom: 5px;
  }
`

export const ButtonsContainer = styled(Flex)`
  margin-top: 50px;
  flex-direction: row;
  align-self: center;
  justify-content: space-evenly;
  width: 80%;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    width: 100%;
  }
`
