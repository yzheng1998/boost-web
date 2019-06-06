import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import styles from './styles'

const OutlinedInput = ({
  classes,
  onChange,
  inputStyle,
  name,
  label,
  multiline,
  rootStyle,
  type,
  rows,
  style,
  errorMessage,
  ...rest
}) => (
  <FormControl
    classes={{
      root: classes.root
    }}
    style={style}
  >
    <TextField
      className={classes.margin}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused
        }
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline
        },
        onChange,
        style: inputStyle,
        name,
        multiline,
        type,
        rows
      }}
      label={label}
      variant="outlined"
      id={name}
      style={rootStyle}
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

export default withStyles(styles)(OutlinedInput)
