import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Span = styled(Flex)`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
`
