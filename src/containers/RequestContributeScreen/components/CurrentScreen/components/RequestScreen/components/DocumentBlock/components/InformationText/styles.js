import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const InfoText = styled(Flex)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
`
