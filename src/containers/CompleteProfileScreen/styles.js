import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const SubHeader = styled(Flex)`
  color: ${({ theme }) => theme.colors.header};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  align-self: ${({ style }) => style || 'left'};
  text-align: center;
`
