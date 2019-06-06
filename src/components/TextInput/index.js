import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { withStyles } from '@material-ui/core'
import styles from './styles'

const TextInput = ({
  classes,
  labelText,
  errorMessage,
  rootStyle,
  style,
  ...rest
}) => (
  <FormControl
    classes={{
      root: classes.root
    }}
    style={style}
  >
    <InputLabel
      htmlFor="custom-css-standard-input"
      classes={{
        root: classes.cssLabel,
        focused: classes.cssFocused
      }}
    >
      {labelText}
    </InputLabel>
    <Input
      id="custom-css-standard-input"
      classes={{
        root: classes.input,
        underline: classes.cssUnderline
      }}
      {...rest}
    />
    <FormHelperText
      id="component-error-text"
      classes={{
        root: classes.cssError
      }}
    >
      {errorMessage}
    </FormHelperText>
  </FormControl>
)

export default withStyles(styles)(TextInput)
