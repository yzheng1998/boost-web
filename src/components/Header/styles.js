import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const StyledHeader = styled(Flex)`
  color: ${({ color }) => color || 'white'};
  font-size: 24px;
  font-family: 'Roboto';
  align-self: ${({ style }) => style || 'left'};
`
