import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ButtonStyles from './styles'
import Button from '@material-ui/core/Button'

const AuthButton = ({ text, ...rest }) => (
  <Button variant="contained" size="large" {...rest}>
    {text}
  </Button>
)

export default withStyles(ButtonStyles)(AuthButton)
