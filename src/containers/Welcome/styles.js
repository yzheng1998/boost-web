import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const WelcomeScreen = styled(Flex)`
  height: auto;
  min-height: 100vh;
  flex-direction: column;
  margin-top: 20px;
`

export const InfoText = styled(Flex)`
  justify-content: center;
  align-self: center;
  color: ${({ theme, green }) => (green ? theme.colors.tertiary : '')};
`

export const ButtonsContainer = styled(Flex)`
  margin-top: 30px;
  flex-direction: row;
  align-self: center;
  justify-content: space-evenly;
  width: 80%;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
