import React from 'react'
import Description from '../Description'

const EventExplanationBlock = ({
  hardshipExplanation,
  hardshipDate,
  onChange,
  addTouched,
  validateForm,
  displayErrors
}) => (
  <>
    <Description
      headerText="Please describe what happened:"
      labelText="Enter Description"
      name="hardshipExplanation"
      value={hardshipExplanation}
      onChange={onChange}
      addTouched={addTouched}
      validateForm={validateForm}
      displayErrors={displayErrors}
    />

    <Description
      headerText="When did this happen?"
      labelText="Describe the time it happened here"
      name="hardshipDate"
      value={hardshipDate}
      onChange={onChange}
      addTouched={addTouched}
      validateForm={validateForm}
      displayErrors={displayErrors}
    />
  </>
)

export default EventExplanationBlock
