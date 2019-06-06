import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const InnerText = styled(Flex)`
  font-family: 'Roboto';
  font-size: 14px;
  align-self: center;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
`

export const LineText = styled(Flex)`
  font-family: 'Roboto';
  font-size: 14px;
  align-self: center;
  color: ${({ theme }) => theme.colors.grey};
  margin-right: 5px;
  margin-left: 5px;
`

export const Wrapper = styled(Flex)`
  flex-direction: column;
  padding: 20px 30px 20px 30px;
  justify-content: center;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.grey};
  border-width: 1px;
  border-radius: 5px;
  width: auto;
  height: auto;
  align-self: center;
`
