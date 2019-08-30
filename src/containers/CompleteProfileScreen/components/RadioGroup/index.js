import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { StyledLabel } from './styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px'
  },
  formControl: {
    marginLeft: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}))

const RadioGroupSelector = ({ onChange, value, title, name, menuItems }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <StyledLabel>{title}</StyledLabel>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          name={name}
          className={classes.group}
          value={value}
          onChange={onChange}
        >
          {Object.entries(menuItems).map(item => (
            <FormControlLabel
              value={item[0]}
              control={<Radio />}
              label={item[1]}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default RadioGroupSelector
