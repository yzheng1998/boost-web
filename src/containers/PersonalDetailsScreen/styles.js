import styled from 'styled-components'
import { Flex } from 'grid-styled'
import BodyText from '../../components/BodyText'

export const EmailSuggestionText = styled(BodyText)`
  max-width: 300px;
  margin-top: 5px;
  margin-bottom: 15px;
`

export const CheckContainer = styled(Flex)`
  width: 300px;
  align-items: center;
  justify-content: flex-start;
  align-self: center;
  margin-top: 20px;
`

export const CheckboxText = styled(Flex)`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  display: inline;
`

export const FAQLink = styled.a`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium.family};
  height: 6px;
`

export const TextContainer = styled.div`
  display: inline;
`
