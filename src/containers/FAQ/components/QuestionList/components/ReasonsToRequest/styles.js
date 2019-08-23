import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const ReasonsToRequestContainer = styled(Flex)`
  flex-direction: column;
`

export const ReasonsTable = styled(Flex)`
  flex-direction: row;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
