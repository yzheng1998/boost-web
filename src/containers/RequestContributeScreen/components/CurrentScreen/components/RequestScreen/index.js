import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { withAlert } from 'react-alert'
import _ from 'lodash'
import validate from 'validate.js'
import Subheader from '../../../../../../components/Subheader'
import Background from '../../../../../../components/Background'
import BodyText from '../../../../../../components/BodyText'
import Row from '../../../../../../components/Row'
import PrimaryButton from '../../../../../../components/PrimaryButton'
import MultiselectBtn from '../../../../../../components/MultiselectBtn'
import TextInput from '../../../../../../components/TextInput'
import FormWrapper from '../../../../../../components/FormWrapper'
import OutlinedInput from '../../../../../../components/OutlinedInput'
import theme from '../../../../../../theme'
import { Span, WrappedRow } from './styles'
import boostReasons from '../../../../constants/boostReasons'
import { REQUEST_FUNDS, GET_USER } from './graphql'
import constraints from './constraints'
import LoadingIcon from '../../../../../../components/LoadingIcon'

class RequestScreen extends Component {
  constructor(props) {
    super(props)
    const { payPalEmail, contributions, requests } = this.props.data
    const { balance } = this.props
    this.state = {
      selectedBoostReasons: [],
      otherReason: '',
      amount: '',
      experiencedHardship: undefined,
      hardshipExplanation: '',
      hardshipDate: '',
      additionalInfo: '',
      payPalEmail,
      displayErrors: {},
      errors: {},
      touched: {},
      contributions,
      requests,
      balance
    }
  }

  onChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => this.validateForm(true)
    )
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        amount: this.state.amount,
        hardshipExplanation: this.state.hardshipExplanation,
        hardshipDate: this.state.hardshipDate,
        additionalInfo: this.state.additionalInfo,
        payPalEmail: this.state.payPalEmail
      },
      constraints
    )

    const constructDisplayErrors = () => {
      const displayErrors = {}
      Object.keys(errors || {}).forEach(key => {
        if (this.state.touched[key]) {
          displayErrors[key] = errors[key]
        }
      })
      return displayErrors
    }

    const errorsReduced =
      Object.keys(errors || {}).length <
      Object.keys(this.state.errors || {}).length

    if (!isOnChangeText || (isOnChangeText && errorsReduced)) {
      this.setState({ displayErrors: constructDisplayErrors() })
    }
    this.setState({ errors })
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
        () => this.validateForm(true)
      )
    } else {
      this.setState(
        {
          selectedBoostReasons: selectedBoostReasons.filter(
            item => item !== boostReason
          )
        },
        () => this.validateForm(true)
      )
    }
  }

  handleClick = value => {
    this.setState(
      {
        experiencedHardship: value
      },
      () => this.validateForm(true)
    )
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
        payPalEmail: ''
      },
      () => this.validateForm(true)
    )
  }

  render() {
    const {
      selectedBoostReasons,
      otherReason,
      experiencedHardship,
      amount,
      hardshipExplanation,
      payPalEmail,
      hardshipDate,
      additionalInfo,
      errors
    } = this.state
    const enabled =
      !errors &&
      (selectedBoostReasons.length || otherReason.length) &&
      experiencedHardship !== undefined
    const Buttons = boostReasons.map(boostReason =>
      selectedBoostReasons.includes(boostReason) ? (
        <MultiselectBtn
          key={boostReason}
          text={boostReason}
          variant="contained"
          style={{
            backgroundColor: theme.colors.tertiary,
            color: 'white'
          }}
          onClick={() => this.handleSelect(boostReason)}
        />
      ) : (
        <MultiselectBtn
          key={boostReason}
          text={boostReason}
          variant="outlined"
          onClick={() => this.handleSelect(boostReason)}
        />
      )
    )

    return (
      <Background style={{ justifyContent: 'flex-start' }}>
        <FormWrapper
          style={{ marginTop: 20, paddingRight: 20, paddingLeft: 20 }}
        >
          <Subheader
            text="How much would you like to request?"
            style={{ marginBottom: 20 }}
          />
          <Row justifyContent="flex-start">
            <BodyText text="Your Boost funds available: " />
            <BodyText text={`$${this.state.balance}`} />
          </Row>
          <Row justifyContent="flex-start">
            <Span>$</Span>
            <TextInput
              type="number"
              labelText="Enter Amount"
              rootStyle={{ alignSelf: 'center' }}
              name="amount"
              onChange={this.onChange}
              value={amount}
              onFocus={() => this.addTouched('amount')}
              onBlur={() => this.validateForm(false)}
              errorMessage={this.state.displayErrors.amount}
            />
          </Row>
          <Subheader text="What is your boost for?" />
          <WrappedRow>{Buttons}</WrappedRow>
          {_.includes(selectedBoostReasons, 'Other') && (
            <TextInput
              type="text"
              labelText="Please Specify "
              rootStyle={{ alignSelf: 'flex-start' }}
              multiline
              name="otherReason"
              onChange={this.onChange}
              value={otherReason}
              onFocus={() => this.addTouched('otherReason')}
              onBlur={() => this.validateForm(false)}
              errorMessage={this.state.displayErrors.otherReason}
            />
          )}
          <Subheader text="Have you experienced any financial hardship?" />
          <Row justifyContent="space-between">
            <MultiselectBtn
              text="Yes"
              variant={experiencedHardship ? 'contained' : 'outlined'}
              style={
                experiencedHardship
                  ? {
                      backgroundColor: theme.colors.tertiary,
                      color: 'white',
                      width: 150
                    }
                  : { width: 150 }
              }
              onClick={() => this.handleClick(true)}
              value={experiencedHardship}
            />
            <MultiselectBtn
              text="No"
              variant={experiencedHardship === false ? 'contained' : 'outlined'}
              style={
                experiencedHardship === false
                  ? {
                      backgroundColor: theme.colors.tertiary,
                      color: 'white',
                      width: 150
                    }
                  : { width: 150 }
              }
              onClick={() => this.handleClick(false)}
              value={experiencedHardship === false}
            />
          </Row>
          <Subheader text="Please describe what happened:" />
          <OutlinedInput
            type="text"
            label="Enter Description"
            rootStyle={{ alignSelf: 'flex-start' }}
            inputStyle={{ width: 350 }}
            rows="4"
            multiline
            name="hardshipExplanation"
            onChange={this.onChange}
            value={hardshipExplanation}
            onFocus={() => this.addTouched('hardshipExplanation')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.hardshipExplanation}
          />
          <Subheader text="When did this happen?" />
          <OutlinedInput
            type="text"
            label="Describe the time it happened here"
            inputStyle={{ width: 350 }}
            rows="4"
            rootStyle={{ alignSelf: 'flex-start' }}
            multiline
            name="hardshipDate"
            onChange={this.onChange}
            value={hardshipDate}
            onFocus={() => this.addTouched('hardshipDate')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.hardshipDate}
          />
          <Subheader text="Anything else you'd like to tell us?" />
          <OutlinedInput
            type="text"
            label="Enter text"
            rows="4"
            rootStyle={{ alignSelf: 'flex-start' }}
            inputStyle={{ width: 350 }}
            multiline
            name="additionalInfo"
            onChange={this.onChange}
            value={additionalInfo}
            onFocus={() => this.addTouched('additionalInfo')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.additionalInfo}
          />
          <Subheader
            style={{ marginTop: 20 }}
            text="Please enter your email associated with your PayPal account"
          />
          <Row justifyContent="flex-start">
            <TextInput
              type="text"
              labelText="PayPal account email"
              rootStyle={{ alignSelf: 'center' }}
              name="payPalEmail"
              onChange={this.onChange}
              value={payPalEmail}
              onFocus={() => this.addTouched('payPalEmail')}
              onBlur={() => this.validateForm(false)}
              errorMessage={this.state.displayErrors.payPalEmail}
            />
          </Row>
          <Mutation
            mutation={REQUEST_FUNDS}
            onCompleted={data => {
              if (data.request.success) {
                this.clearState()
                window.scrollTo(0, 0)
                this.props.history.push('/')
                this.props.alert.success(
                  'You successfully requested a Boost fund'
                )
              } else this.props.alert.error(data.request.error.message)
            }}
            refetchQueries={[{ query: GET_USER }]}
          >
            {(request, { loading }) => {
              const variables = {
                input: {
                  contributions: this.state.contributions,
                  requests: this.state.requests,
                  amount: Number(amount),
                  reason: selectedBoostReasons.concat([otherReason]).join(', '),
                  financialHardship: Boolean(experiencedHardship),
                  hardshipExplanation,
                  hardshipDate,
                  payPalEmail,
                  additionalInfo
                }
              }
              return (
                <PrimaryButton
                  text={loading ? <LoadingIcon /> : 'Request funds with Paypal'}
                  style={{
                    width: 350,
                    backgroundColor:
                      loading || !enabled
                        ? theme.colors.secondary
                        : theme.colors.tertiary,
                    color: 'white',
                    marginTop: 15,
                    marginBottom: 45
                  }}
                  onClick={() => {
                    request({ variables })
                  }}
                  disabled={!enabled || loading}
                />
              )
            }}
          </Mutation>
        </FormWrapper>
      </Background>
    )
  }
}

export default withAlert()(RequestScreen)
