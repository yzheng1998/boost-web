import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const BtnRow = styled(Flex)`
  justify-content: center;
  flex-direction: row;
`

export const BtnWrapper = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`

export const Label = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.black};
  align-self: center;
  text-align: center;
`
export const CenterParagraph = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.medium};
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: justify;
  width: 75%;
  color: ${({ theme }) => theme.colors.tertiary};
`

export const Container = styled(Flex)`
  width: 50%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
`
