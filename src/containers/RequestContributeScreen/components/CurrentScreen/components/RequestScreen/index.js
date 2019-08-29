/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import _ from 'lodash'
import Background from '../../../../../../components/Background'
import FormWrapper from '../../../../../../components/FormWrapper'
import {
  defaultState,
  validateForm,
  MakeButtons,
  MakeCheckList
} from './helpers'
import AmountBlock from './components/AmountBlock'
import ReasonsBlock from './components/ReasonsBlock'
import PayPalBlock from './components/PayPalBlock'
import DocumentBlock from './components/DocumentBlock'
import RequestButton from './components/RequestButton'
import EventsBlock from './components/EventsBlock'
import { events, boostReasons } from './constants'
import EventExplanationBlock from './components/EventExplanationBlock'
import AgreementBlock from './components/AgreementBlock'

class RequestScreen extends Component {
  constructor(props) {
    super(props)
    const { contributions, requests } = this.props.data
    const { balance, personalEmail } = this.props
    this.state = defaultState(contributions, requests, balance, personalEmail)
  }

  componentDidMount = () => {
    window.scrollTo(0, 0)
  }

  onChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => validateForm(true, this.state, this.setState.bind(this))
    )
  }

  onDocChange = ({ url, name }) => {
    this.setState(
      {
        documents: [...this.state.documents, { url, name }]
      },
      () => validateForm(true, this.state, this.setState.bind(this))
    )
  }

  addTouched = key => {
    const touched = {
      ...this.state.touched,
      [key]: true
    }
    this.setState({ touched })
  }

  handleSelect = boostReason => {
    const { selectedBoostReasons } = this.state
    if (!_.includes(selectedBoostReasons, boostReason)) {
      this.setState(
        {
          selectedBoostReasons: [...selectedBoostReasons, boostReason]
        },
        () => validateForm(true, this.state, this.setState.bind(this))
      )
    } else {
      this.setState(
        {
          selectedBoostReasons: selectedBoostReasons.filter(
            item => item !== boostReason
          )
        },
        () => validateForm(true, this.state, this.setState.bind(this))
      )
    }
  }

  handleEventSelect = event => {
    const { selectedEvents } = this.state
    if (!_.includes(selectedEvents, event) && event !== 'None') {
      const newArray = selectedEvents.filter(item => item !== 'None')
      newArray.push(event)
      this.setState(
        {
          selectedEvents: newArray
        },
        () => validateForm(true, this.state, this.setState.bind(this))
      )
    } else if (!_.includes(selectedEvents, event) && event === 'None') {
      this.setState(
        {
          selectedEvents: [event]
        },
        () => validateForm(true, this.state, this.setState.bind(this))
      )
    } else {
      this.setState(
        {
          selectedEvents: selectedEvents.filter(item => item !== event)
        },
        () => validateForm(true, this.state, this.setState.bind(this))
      )
    }
  }

  handleClick = value => {
    this.setState(
      {
        experiencedHardship: value
      },
      () => validateForm(true, this.state, this.setState.bind(this))
    )
  }

  handleSubmit = request => {
    const { requests, contributions, amount, documents } = this.state
    const fundsWithdrawn = requests + Number(amount) - contributions
    if (fundsWithdrawn >= 400 && documents.length === 0) {
      this.setState({ openPDF: true })
      return null
    }
    return request()
  }

  handleSuccess = () => {
    this.clearState()
    window.scrollTo(0, 0)
    this.props.history.push('/')
  }

  clearState = () => {
    this.setState(
      {
        selectedEvents: [],
        otherEvent: '',
        selectedBoostReasons: [],
        otherReason: '',
        amount: '',
        experiencedHardship: '',
        hardshipExplanation: '',
        hardshipDate: '',
        additionalInfo: '',
        payPalEmail: '',
        documents: [],
        open: false,
        opened: false
      },
      () => validateForm(true, this.state, this.setState.bind(this))
    )
  }

  render() {
    const {
      selectedEvents,
      otherEvent,
      selectedBoostReasons,
      otherReason,
      amount,
      eventsExplanation,
      documents,
      payPalEmail,
      errors,
      displayErrors,
      acceptTerms,
      requests,
      contributions
    } = this.state
    const enabled =
      !errors &&
      (selectedBoostReasons.length || otherReason.length) &&
      acceptTerms

    const Buttons = MakeButtons(
      selectedBoostReasons,
      this.handleSelect,
      boostReasons
    )
    const Events = MakeCheckList(selectedEvents, this.handleEventSelect, events)

    return (
      <Background style={{ justifyContent: 'flex-start' }}>
        <FormWrapper
          style={{ marginTop: 20, paddingRight: 20, paddingLeft: 20 }}
        >
          <AgreementBlock
            setState={this.setState.bind(this)}
            acceptTerms={acceptTerms}
          />
          <AmountBlock
            amount={amount}
            displayErrors={displayErrors}
            onChange={this.onChange}
            addTouched={this.addTouched}
            validateForm={val =>
              validateForm(val, this.state, this.setState.bind(this))
            }
          />
          <PayPalBlock
            onChange={this.onChange}
            payPalEmail={payPalEmail}
            addTouched={this.addTouched}
            validateForm={() =>
              validateForm(false, this.state, this.setState.bind(this))
            }
            displayErrors={displayErrors}
          />
          <ReasonsBlock
            Buttons={Buttons}
            selectedBoostReasons={selectedBoostReasons}
            otherReason={otherReason}
            displayErrors={displayErrors}
            onChange={this.onChange}
            addTouched={this.addTouched}
            validateForm={val =>
              validateForm(val, this.state, this.setState.bind(this))
            }
          />
          <EventsBlock
            Events={Events}
            selectedEvents={selectedEvents}
            otherEvent={otherEvent}
            displayErrors={displayErrors}
            onChange={this.onChange}
            addTouched={this.addTouched}
            validateForm={val =>
              validateForm(val, this.state, this.setState.bind(this))
            }
          />
          {!selectedEvents.includes('None') && (
            <EventExplanationBlock
              eventsExplanation={eventsExplanation}
              displayErrors={displayErrors}
              onChange={this.onChange}
              addTouched={this.addTouched}
              validateForm={val =>
                validateForm(val, this.state, this.setState.bind(this))
              }
            />
          )}
          <DocumentBlock
            fundsWithdrawn={requests + Number(amount) - contributions}
            onDocChange={this.onDocChange}
            addTouched={this.addTouched}
            validateForm={() =>
              validateForm(false, this.state, this.setState.bind(this))
            }
            displayErrors={displayErrors}
            documents={documents}
            setState={this.setState.bind(this)}
          />
          <RequestButton
            state={this.state}
            setState={this.setState.bind(this)}
            alert={this.props.alert}
            handleSubmit={this.handleSubmit}
            handleSuccess={this.handleSuccess}
            disabled={!enabled}
          />
        </FormWrapper>
      </Background>
    )
  }
}

export default withAlert()(RequestScreen)
