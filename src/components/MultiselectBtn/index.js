import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import Button from '@material-ui/core/Button'

const MultiselectBtn = ({ text, classes, style, onClick, variant }) => (
  <Button
    variant={variant}
    size="small"
    classes={classes}
    style={style}
    onClick={onClick}
  >
    {text}
  </Button>
)

export default withStyles(styles)(MultiselectBtn)
