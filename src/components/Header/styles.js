import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const StyledHeader = styled(Flex)`
  color: ${({ color }) => color || 'white'};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  align-self: ${({ style }) => style || 'left'};
`
