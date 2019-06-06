import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const StyledText = styled(Flex)`
  color: ${({ color, theme }) => color || theme.colors.tertiary};
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  align-self: ${({ alignSelf }) => alignSelf || 'center'};
`
