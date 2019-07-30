import React, { Component } from 'react'
import { connect } from 'react-redux'
import validate from 'validate.js'
import { addInfo } from '../../redux/actions'
import Background from '../../components/Background'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import constraints from './constraints'
import LoadingIcon from '../../components/LoadingIcon'

const mapStateToProps = state => ({
  registerInfo: state.registrationReducer
})

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info))
})

class UserDetailsScreen extends Component {
  state = {
    registerInput: {
      firstName: this.props.registerInfo.firstName || '',
      lastName: this.props.registerInfo.lastName || '',
      phone: this.props.registerInfo.phone || '',
      zipCode: this.props.registerInfo.zipCode || ''
    },
    displayErrors: {},
    errors: {},
    touched: {},
    isLoading: false
  }

  componentDidMount = () => {
    this.validateForm(false)
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        firstName: this.state.registerInput.firstName,
        lastName: this.state.registerInput.lastName,
        phone: this.state.registerInput.phone,
        zipCode: this.state.registerInput.zipCode
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

  handleSubmit = path => {
    const formattedPhone = String(this.state.registerInput.phone).replace(
      /[()-]/g,
      ''
    )
    this.setState(
      {
        registerInput: { ...this.state.registerInput, phone: formattedPhone },
        isLoading: true
      },
      () => {
        Object.keys(this.state.registerInput).forEach(key =>
          this.props.addInfo({ key, value: this.state.registerInput[key] })
        )
        this.setState({ isLoading: false }, () => {
          this.props.history.push(path)
        })
      }
    )
  }

  render() {
    const { firstName, lastName, phone, zipCode } = this.state.registerInput
    const enabled = !this.state.errors
    return (
      <Background style={{ backgroundColor: theme.colors.background }}>
        <Header
          text="Please tell us more about yourself!"
          color={theme.colors.header}
          style={{ alignSelf: 'center', paddingBottom: 10 }}
        />
        <TextInput
          name="firstName"
          onChange={e =>
            this.setState(
              {
                registerInput: {
                  ...this.state.registerInput,
                  firstName: e.target.value
                }
              },
              () => this.validateForm(true)
            )
          }
          onFocus={() => this.addTouched('firstName')}
          onBlur={() => this.validateForm(false)}
          labelText="First name"
          value={firstName}
          style={{ alignSelf: 'center' }}
          errorMessage={this.state.displayErrors.firstName}
        />
        <TextInput
          name="lastName"
          onChange={e =>
            this.setState(
              {
                registerInput: {
                  ...this.state.registerInput,
                  lastName: e.target.value
                }
              },
              () => this.validateForm(true)
            )
          }
          onFocus={() => this.addTouched('lastName')}
          onBlur={() => this.validateForm(false)}
          labelText="Last name"
          value={lastName}
          style={{ alignSelf: 'center' }}
          errorMessage={this.state.displayErrors.lastName}
        />
        <TextInput
          name="phone"
          onChange={e =>
            this.setState(
              {
                registerInput: {
                  ...this.state.registerInput,
                  phone: e.target.value
                }
              },
              () => this.validateForm(true)
            )
          }
          onFocus={() => this.addTouched('phone')}
          onBlur={() => this.validateForm(false)}
          labelText="Cellphone #"
          value={phone}
          style={{ alignSelf: 'center' }}
          errorMessage={this.state.displayErrors.phone}
        />
        <TextInput
          name="zipCode"
          onChange={e =>
            this.setState(
              {
                registerInput: {
                  ...this.state.registerInput,
                  zipCode: e.target.value
                }
              },
              () => this.validateForm(true)
            )
          }
          onFocus={() => this.addTouched('zipCode')}
          onBlur={() => this.validateForm(false)}
          labelText="Work ZIP code"
          value={zipCode}
          style={{ alignSelf: 'center' }}
          errorMessage={this.state.displayErrors.zipCode}
        />
        <PrimaryButton
          text={this.state.isLoading ? <LoadingIcon /> : 'Continue'}
          onClick={() => this.handleSubmit('/complete-profile')}
          disabled={!enabled || this.state.isLoading}
          style={{
            backgroundColor: theme.colors.tertiary,
            color: theme.colors.primary
          }}
        />
      </Background>
    )
  }
}

const UserDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsScreen)

export default UserDetails
