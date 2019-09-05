import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    marginLeft: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}))

const HealthOptions = ({ onChange, currentValue }) => {
  const classes = useStyles()

  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          className={classes.group}
          value={currentValue}
          onChange={handleChange}
        >
          <FormControlLabel
            value="100"
            control={<Radio />}
            label="High stress"
          />
          <FormControlLabel
            value="66"
            control={<Radio />}
            label="Moderate stress"
          />
          <FormControlLabel
            value="33"
            control={<Radio />}
            label="A little stress"
          />
          <FormControlLabel value="0" control={<Radio />} label="No stress" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default HealthOptions
