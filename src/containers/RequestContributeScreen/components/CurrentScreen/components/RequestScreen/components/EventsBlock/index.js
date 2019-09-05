import React from 'react'
import _ from 'lodash'
import Subheader from '../../../../../../../../components/Subheader'
import { WrappedRow } from './styles'
import TextInput from '../../../../../../../../components/TextInput'

const EventsBlock = ({
  Events,
  selectedEvents,
  otherEvent,
  addTouched,
  validateForm,
  displayErrors,
  onChange
}) => (
  <div style={{ marginBottom: 15 }}>
    <Subheader text="What has led to the need for funds? (select all that apply)" />
    <WrappedRow style={{ justifyContent: 'flex-start' }}>{Events}</WrappedRow>
    {_.includes(selectedEvents, 'Other (please specify)') && (
      <TextInput
        type="text"
        labelText="Please Specify "
        rootStyle={{ alignSelf: 'flex-start' }}
        multiline
        name="otherEvent"
        onChange={onChange}
        value={otherEvent}
        onFocus={() => addTouched('otherEvent')}
        onBlur={() => validateForm(false)}
        errorMessage={displayErrors.otherEvent}
      />
    )}
  </div>
)

export default EventsBlock
