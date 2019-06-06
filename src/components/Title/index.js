import React from 'react'
import { StyledTitle } from './styles'

const Title = ({ text, ...rest }) => <StyledTitle {...rest}>{text}</StyledTitle>

export default Title
