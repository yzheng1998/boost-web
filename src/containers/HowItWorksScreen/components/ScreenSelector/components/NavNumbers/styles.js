import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const NumbersContainer = styled(Flex)`
  width: 100%;
  height: 100px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  align-self: center;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    width: 100%;
  }
`
