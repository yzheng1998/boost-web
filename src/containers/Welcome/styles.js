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
`

export const ButtonsContainer = styled(Flex)`
  flex-direction: row;
  align-self: center;
  justify-content: space-around;
  width: 425px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
