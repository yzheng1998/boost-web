import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const StyledLabel = styled(Flex)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
`
