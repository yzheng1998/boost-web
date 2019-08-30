import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const SubHeader = styled(Flex)`
  color: ${({ theme }) => theme.colors.header};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  align-self: ${({ style }) => style || 'left'};
  text-align: left;
  margin-bottom: 35px;
  margin-top: 5px;
`

export const ErrorText = styled(Flex)`
  color: red;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  text-align: center;
`

export const ErrorContainer = styled(Flex)`
  justify-content: center;
  width: 100%;
  text-align: center;
  height: 20px;
`
