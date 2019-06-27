import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const InnerText = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.medium.family};
  font-size: 14px;
  align-self: center;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
`

export const Image = styled.img`
  width: 20em;
  height: auto;
  margin-bottom: 1em;
`

export const LineText = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.medium.family};
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
  align-items: center;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.grey};
  border-width: 1px;
  border-radius: 5px;
  width: auto;
  height: auto;
  align-self: center;
`
export const Line = styled(Flex)`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.grey};
  width: 40%;
`
export const LineWrapper = styled(Flex)`
  margin-top: 15px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
`
