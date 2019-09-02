import React from 'react'
import Description from '../Description'

const EventExplanationBlock = ({
  eventsExplanation,
  onChange,
  addTouched,
  validateForm,
  displayErrors
}) => (
  <>
    <Description
      headerText="Please provide a brief description of the situation, including approximate dates for any of the events you selected above and how they created the need for funds:"
      labelText="Enter Description"
      name="eventsExplanation"
      value={eventsExplanation}
      onChange={onChange}
      addTouched={addTouched}
      validateForm={validateForm}
      displayErrors={displayErrors}
    />
  </>
)

export default EventExplanationBlock
