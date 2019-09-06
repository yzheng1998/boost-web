import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const ButtonContainer = styled(Flex)`
  flex-direction: column;
  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: 3px solid ${({ theme }) => theme.colors.header};
  background-color: ${({ theme }) => theme.colors.background};
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    width: 300px;
    height: 300px;
    border-radius: 150px;
    margin-left: 25px;
    margin-right: 5px;
  }
`

export const InfoText = styled(Flex)`
  justify-content: center;
  align-self: center;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  margin-top: 35px;
  text-align: center;
  color: ${({ theme }) => theme.colors.tertiary};
  padding-left: 30px;
  padding-right: 30px;
  font-size: 25px;
  margin-bottom: 20px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    font-size: 18px;
    padding: 10px;
  }
`
