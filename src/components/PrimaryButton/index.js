import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import Button from '@material-ui/core/Button'

const PrimaryButton = ({ text, variant, ...rest }) => (
  <Button variant={variant || 'contained'} {...rest}>
    {text}
  </Button>
)

export default withStyles(styles)(PrimaryButton)
