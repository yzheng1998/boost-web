import React from 'react'
import { styles } from './styles'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import Title from '../Title'

const DropdownMenu = ({
  classes,
  title,
  inputTitle,
  inputName,
  menuItems,
  open,
  toggleOpen,
  errorMessage,
  ...rest
}) => (
  <form autoComplete="off" className={classes.form}>
    <Title color="black" text={title} style={{ marginTop: 40 }} />
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="demo-controlled-open-select">
        {inputTitle}
      </InputLabel>
      <Select
        open={open}
        onClose={toggleOpen}
        onOpen={toggleOpen}
        inputProps={{
          name: inputName,
          id: 'demo-controlled-open-select'
        }}
        MenuProps={{ classes: { paper: classes.selectorStyle } }}
        {...rest}
      >
        {Object.keys(menuItems).map(key => (
          <MenuItem key={key} value={menuItems[key]}>
            <div
              style={{
                whiteSpace: 'normal'
              }}
            >
              {menuItems[key]}
            </div>
          </MenuItem>
        ))}
      </Select>

      <FormHelperText
        id="component-error-text"
        classes={{
          root: classes.cssError
        }}
      >
        {errorMessage}
      </FormHelperText>
    </FormControl>
  </form>
)

export default withStyles(styles)(DropdownMenu)
