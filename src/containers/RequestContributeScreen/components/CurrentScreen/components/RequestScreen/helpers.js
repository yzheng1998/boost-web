import React from 'react'
import constraints from './constraints'
import validate from 'validate.js'
import MultiselectBtn from '../../../../../../components/MultiselectBtn'
import theme from '../../../../../../theme'

export const defaultState = (
  contributions,
  requests,
  balance,
  personalEmail
) => ({
  openPDF: false,
  opened: false,
  selectedBoostReasons: [],
  selectedEvents: [],
  otherEvent: '',
  otherReason: '',
  amount: '',
  eventsExplanation: '',
  documents: [],
  payPalEmail: personalEmail,
  displayErrors: {},
  errors: {},
  touched: {},
  contributions,
  requests,
  balance,
  acceptTerms: false
})

export const validateForm = (isOnChangeText, state, setState) => {
  const errors = validate(
    {
      amount: state.amount,
      payPalEmail: state.payPalEmail
    },
    constraints
  )

  const constructDisplayErrors = () => {
    const displayErrors = {}
    Object.keys(errors || {}).forEach(key => {
      if (state.touched[key]) {
        displayErrors[key] = errors[key]
      }
    })
    return displayErrors
  }

  const errorsReduced =
    Object.keys(errors || {}).length < Object.keys(state.errors || {}).length

  if (!isOnChangeText || (isOnChangeText && errorsReduced)) {
    setState({ displayErrors: constructDisplayErrors() })
  }
  setState({ errors })
}

export const MakeButtons = (selectedBoostReasons, handleSelect, reasonsList) =>
  reasonsList.map(boostReason =>
    selectedBoostReasons.includes(boostReason) ? (
      <MultiselectBtn
        key={boostReason}
        text={boostReason}
        variant="contained"
        style={{
          backgroundColor: theme.colors.tertiary,
          color: 'white'
        }}
        onClick={() => handleSelect(boostReason)}
      />
    ) : (
      <MultiselectBtn
        key={boostReason}
        text={boostReason}
        variant="outlined"
        onClick={() => handleSelect(boostReason)}
      />
    )
  )

export const MakeCheckList = (selectedEvents, handleEventSelect, eventsList) =>
  eventsList.map(event => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        fontFamily: theme.fonts.medium.family,
        marginBottom: 10,
        width: '100%'
      }}
    >
      <input
        type="checkbox"
        onChange={e => handleEventSelect(e.target.name)}
        name={event}
        checked={selectedEvents.includes(event)}
      />
      &nbsp;{event}
    </div>
  ))
