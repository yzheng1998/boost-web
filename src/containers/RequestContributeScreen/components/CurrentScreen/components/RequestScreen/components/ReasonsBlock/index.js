import React from 'react'
import _ from 'lodash'
import Subheader from '../../../../../../../../components/Subheader'
import { WrappedRow } from './styles'
import TextInput from '../../../../../../../../components/TextInput'

const ReasonsBlock = ({
  Buttons,
  selectedBoostReasons,
  otherReason,
  addTouched,
  validateForm,
  displayErrors,
  onChange
}) => (
  <div style={{ marginBottom: 15 }}>
    <Subheader text="What expenses do you need the funds for? (select all that apply)" />
    <WrappedRow>{Buttons}</WrappedRow>
    {_.includes(selectedBoostReasons, 'Other (please specify)') && (
      <TextInput
        type="text"
        labelText="Please Specify "
        rootStyle={{ alignSelf: 'flex-start' }}
        multiline
        name="otherReason"
        onChange={onChange}
        value={otherReason}
        onFocus={() => addTouched('otherReason')}
        onBlur={() => validateForm(false)}
        errorMessage={displayErrors.otherReason}
      />
    )}
  </div>
)

export default ReasonsBlock
