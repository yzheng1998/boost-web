import React from 'react'
import { StyledSubheader } from './styles'

const Subheader = ({ color, text, ...rest }) => (
  <StyledSubheader color={color} {...rest}>
    {text}
  </StyledSubheader>
)

export default Subheader
