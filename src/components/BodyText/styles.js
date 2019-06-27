import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const StyledText = styled(Flex)`
  color: ${({ color, theme }) => color || theme.colors.tertiary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  align-self: ${({ alignSelf }) => alignSelf || 'center'};
`
