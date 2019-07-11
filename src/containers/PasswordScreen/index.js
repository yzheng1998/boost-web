import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Mutation } from 'react-apollo'
import { withAlert } from 'react-alert'
import validate from 'validate.js'
import Background from '../../components/Background'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import { addInfo } from '../../redux/actions'
import constraints from './constraints'
import { VERIFY_PERSONAL } from './graphql'
import LoadingIcon from '../../components/LoadingIcon'
import BodyText from '../../components/BodyText'

const mapStateToProps = state => ({
  registerInfo: state.registrationReducer
})

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info))
})

class PasswordScreen extends Component {
  state = {
    registerInput: {
      personalEmail: this.props.registerInfo.personalEmail || '',
      password: this.props.registerInfo.password || ''
    },
    confirmPassword: '',
    displayErrors: {},
    errors: {},
    touched: {}
  }

  componentDidMount = () => {
    this.validateForm(false)
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        personalEmail: this.state.registerInput.personalEmail,
        password: this.state.registerInput.password,
        confirmPassword: this.state.confirmPassword
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

  handleSubmit = async (path, verify) => {
    const verified = await verify()
    if (verified.data.verifyPersonalEmail) {
      Object.keys(this.state.registerInput).forEach(key =>
        this.props.addInfo({ key, value: this.state.registerInput[key] })
      )
      this.props.history.push(path)
    } else {
      this.props.alert.show('Email already exists')
    }
  }

  render() {
    const enabled = !this.state.errors
    return (
      <Background style={{ backgroundColor: theme.colors.background }}>
        <Header
          text="Step 2 of 4: Set-up my account"
          color={theme.colors.header}
          style={{ alignSelf: 'center', paddingBottom: 20 }}
        />
        <BodyText text="Make sure to choose an email you access often!" />
        <TextInput
          name="personalEmail"
          onChange={e =>
            this.setState(
              {
                registerInput: {
                  ...this.state.registerInput,
                  personalEmail: e.target.value
                }
              },
              () => this.validateForm(true)
            )
          }
          onFocus={() => this.addTouched('personalEmail')}
          onBlur={() => this.validateForm(false)}
          labelText="Enter personal email"
          value={this.state.registerInput.personalEmail}
          style={{ alignSelf: 'center' }}
          errorMessage={this.state.displayErrors.personalEmail}
        />
        <BodyText
          text="Your password must contain letters, numbers, and at least one special character: !@#$%^&#38;*?"
          style={{
            marginTop: 25,
            width: 300
          }}
        />
        <TextInput
          name="password"
          onChange={e =>
            this.setState(
              {
                registerInput: {
                  ...this.state.registerInput,
                  password: e.target.value
                }
              },
              () => this.validateForm(true)
            )
          }
          onFocus={() => this.addTouched('password')}
          onBlur={() => this.validateForm(false)}
          type="password"
          labelText="Create password"
          value={this.state.registerInput.password}
          style={{ alignSelf: 'center' }}
          errorMessage={this.state.displayErrors.password}
        />
        <TextInput
          name="confirmPassword"
          onChange={e =>
            this.setState(
              {
                confirmPassword: e.target.value
              },
              () => this.validateForm(true)
            )
          }
          onFocus={() => this.addTouched('confirmPassword')}
          onBlur={() => this.validateForm(false)}
          type="password"
          labelText="Confirm password"
          style={{ alignSelf: 'center' }}
          errorMessage={this.state.displayErrors.confirmPassword}
        />
        <Mutation mutation={VERIFY_PERSONAL}>
          {(verifyPersonalEmail, { loading }) => {
            const variables = {
              personalEmail: this.state.registerInput.personalEmail
            }
            return (
              <PrimaryButton
                text={loading ? <LoadingIcon /> : 'Continue'}
                onClick={() =>
                  this.handleSubmit('/details', () =>
                    verifyPersonalEmail({ variables })
                  )
                }
                style={{
                  backgroundColor: theme.colors.tertiary,
                  color: theme.colors.primary
                }}
                disabled={!enabled || loading}
              />
            )
          }}
        </Mutation>
      </Background>
    )
  }
}

const Password = connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordScreen)

export default withAlert()(Password)
