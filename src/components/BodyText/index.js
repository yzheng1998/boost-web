import React from 'react'
import { StyledText } from './styles'

const BodyText = ({ color, text, ...rest }) => (
  <StyledText color={color} {...rest}>
    {text}
  </StyledText>
)

export default BodyText
