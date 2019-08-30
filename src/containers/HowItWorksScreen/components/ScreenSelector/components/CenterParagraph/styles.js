import styled from 'styled-components'

export const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.medium.family};
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  align-self: center;
  margin-top: 30px;
  text-align: justify;
  width: 75%;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-bottom: 20px;
  min-height: 15vh;
`
