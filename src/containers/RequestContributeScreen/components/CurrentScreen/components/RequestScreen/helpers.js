import React from 'react'
import constraints from './constraints'
import validate from 'validate.js'
import MultiselectBtn from '../../../../../../components/MultiselectBtn'
import theme from '../../../../../../theme'
import boostReasons from '../../../../constants/boostReasons'

export const defaultState = (
  payPalEmail,
  contributions,
  requests,
  balance
) => ({
  openPDF: false,
  opened: false,
  selectedBoostReasons: [],
  otherReason: '',
  amount: '',
  experiencedHardship: undefined,
  hardshipExplanation: '',
  hardshipDate: '',
  additionalInfo: '',
  documents: [],
  payPalEmail,
  displayErrors: {},
  errors: {},
  touched: {},
  contributions,
  requests,
  balance
})

export const validateForm = (isOnChangeText, state, setState) => {
  const errors = validate(
    {
      amount: state.amount,
      hardshipExplanation: state.hardshipExplanation,
      hardshipDate: state.hardshipDate,
      additionalInfo: state.additionalInfo,
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

export const MakeButtons = (selectedBoostReasons, handleSelect) =>
  boostReasons.map(boostReason =>
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
