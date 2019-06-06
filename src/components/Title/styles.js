import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const StyledTitle = styled(Flex)`
  color: ${({ color }) => color || 'white'};
  margin-top: ${({ style }) => style || 15};
  font-size: 18px;
  font-family: 'Roboto';
`
