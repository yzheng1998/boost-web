import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Footer = styled(Flex)`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100px;
`

export const FooterText = styled(Flex)`
  color: ${({ theme }) => theme.colors.secondary};
  width: 500px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.medium.family};
`
