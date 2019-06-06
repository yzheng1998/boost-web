import styled from 'styled-components'
import { Flex } from 'grid-styled'
import PlaidLink from 'react-plaid-link'

import theme from '../../theme'

export const PlaidLinkContainer = styled(Flex)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const StyledPlaidLink = styled(PlaidLink)`
  background-color: ${({ active }) =>
    active ? theme.colors.tertiary : theme.colors.secondary} !important;
  color: ${theme.colors.primary};
  border: none !important;
  border-radius: 10px !important;
  font-size: 18px;
  padding: 10px !important;
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
`
