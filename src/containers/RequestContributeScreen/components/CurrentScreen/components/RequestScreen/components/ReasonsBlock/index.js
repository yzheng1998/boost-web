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
  <>
    <Subheader text="What is your boost for?" />
    <WrappedRow>{Buttons}</WrappedRow>
    {_.includes(selectedBoostReasons, 'Other') && (
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
  </>
)

export default ReasonsBlock
