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
  <>
    <Subheader text="What has led to the need for funds? (select all that apply)" />
    <WrappedRow>{Events}</WrappedRow>
    {_.includes(selectedEvents, 'Other') && (
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
  </>
)

export default EventsBlock
