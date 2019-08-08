/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import _ from 'lodash'
import Background from '../../../../../../components/Background'
import FormWrapper from '../../../../../../components/FormWrapper'
import { defaultState, validateForm, MakeButtons } from './helpers'
import AmountBlock from './components/AmountBlock'
import ReasonsBlock from './components/ReasonsBlock'
import HardshipBlock from './components/HardshipBlock'
import Description from './components/Description'
import PayPalBlock from './components/PayPalBlock'
import DocumentBlock from './components/DocumentBlock'
import RequestButton from './components/RequestButton'

class RequestScreen extends Component {
  constructor(props) {
    super(props)
    const { payPalEmail, contributions, requests } = this.props.data
    const { balance } = this.props
    this.state = defaultState(payPalEmail, contributions, requests, balance)
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

  handleClick = value => {
    this.setState(
      {
        experiencedHardship: value
      },
      () => validateForm(true, this.state, this.setState.bind(this))
    )
  }

  handleSubmit = request => {
    const { requests, contributions, amount, opened } = this.state
    const fundsWithdrawn = requests + Number(amount) - contributions
    if (fundsWithdrawn >= 400 && !opened) {
      this.setState({ openPDF: true, opened: true })
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
      selectedBoostReasons,
      otherReason,
      experiencedHardship,
      amount,
      hardshipExplanation,
      documents,
      payPalEmail,
      hardshipDate,
      additionalInfo,
      errors,
      balance,
      displayErrors
    } = this.state
    const enabled =
      !errors &&
      (selectedBoostReasons.length || otherReason.length) &&
      experiencedHardship !== undefined

    const Buttons = MakeButtons(selectedBoostReasons, this.handleSelect)

    return (
      <Background style={{ justifyContent: 'flex-start' }}>
        <FormWrapper
          style={{ marginTop: 20, paddingRight: 20, paddingLeft: 20 }}
        >
          <AmountBlock
            amount={amount}
            balance={balance}
            displayErrors={displayErrors}
            onChange={this.onChange}
            addTouched={this.addTouched}
            validateForm={val =>
              validateForm(val, this.state, this.setState.bind(this))
            }
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
          <HardshipBlock
            experiencedHardship={experiencedHardship}
            hardshipExplanation={hardshipExplanation}
            hardshipDate={hardshipDate}
            displayErrors={displayErrors}
            handleClick={this.handleClick}
            onChange={this.onChange}
            addTouched={this.addTouched}
            validateForm={val =>
              validateForm(val, this.state, this.setState.bind(this))
            }
          />
          <Description
            headerText="Anything else you'd like to tell us?"
            labelText="Enter text"
            name="additionalInfo"
            onChange={this.onChange}
            value={additionalInfo}
            addTouched={() => this.addTouched('additionalInfo')}
            validateForm={() =>
              validateForm(false, this.state, this.setState.bind(this))
            }
            displayErrors={displayErrors}
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
          <DocumentBlock
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
