import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const StyledSubheader = styled(Flex)`
  color: ${({ color, theme }) => color || theme.colors.tertiary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  align-self: ${({ alignSelf }) => alignSelf || 'flex-start'};
  margin-top: 10px;
  margin-bottom: 10px;
`
