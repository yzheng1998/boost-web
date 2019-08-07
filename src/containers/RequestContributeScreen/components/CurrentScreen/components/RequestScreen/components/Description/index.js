import React from 'react'
import Subheader from '../../../../../../../../components/Subheader'
import OutlinedInput from '../../../../../../../../components/OutlinedInput'

const Description = ({
  headerText,
  labelText,
  name,
  value,
  onChange,
  addTouched,
  validateForm,
  displayErrors
}) => (
  <>
    <Subheader text={headerText} />
    <OutlinedInput
      type="text"
      label={labelText}
      rootStyle={{ alignSelf: 'flex-start' }}
      inputStyle={{ width: 350 }}
      rows="4"
      multiline
      name={name}
      onChange={onChange}
      value={value}
      onFocus={() => addTouched(name)}
      onBlur={() => validateForm(false)}
      errorMessage={displayErrors[name]}
    />
  </>
)

export default Description
