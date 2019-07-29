import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Span = styled(Flex)`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
`
export const WrappedRow = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 300px;
  justify-content: center;
`

export const DocumentInput = styled.input``
