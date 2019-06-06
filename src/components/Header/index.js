import React from 'react'
import { StyledHeader } from './styles'

const Header = ({ text, ...rest }) => (
  <StyledHeader {...rest}>{text}</StyledHeader>
)

export default Header
