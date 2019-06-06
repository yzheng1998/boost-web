import React from 'react'
import { styles } from './styles'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'

const DatePicker = ({ classes, date, errorMessage, ...rest }) => (
  <form className={classes.container} noValidate>
    <TextField className={classes.textField} {...rest} />

    <FormHelperText
      id="component-error-text"
      classes={{
        root: classes.cssError
      }}
    >
      {errorMessage}
    </FormHelperText>
  </form>
)

export default withStyles(styles)(DatePicker)
