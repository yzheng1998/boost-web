import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { withAlert } from 'react-alert'
import validate from 'validate.js'
import localStore from 'store'
import Background from '../../components/Background'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import { Wrapper } from './styles'
import constraints from './constraints'
import { RESET_PASSWORD } from './graphql'
import LoadingIcon from '../../components/LoadingIcon'

class NewPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    displayErrors: {},
    errors: {},
    touched: {}
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        personalEmail: this.state.personalEmail,
        password: this.state.password,
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

  handleSubmit = async (path, reset) => {
    const resetted = await reset()
    if (resetted.data.resetPassword.success) {
      this.props.alert.show('Password changed successfully')
      this.props.history.push(path)
    } else {
      this.props.alert.show('Failed to reset password')
    }
  }

  render() {
    const enabled = !this.state.errors
    return (
      <Background style={{ backgroundColor: theme.colors.primary }}>
        <Wrapper>
          <Header
            text="New Password"
            color={theme.colors.tertiary}
            style={{ marginBottom: '8px' }}
          />

          <TextInput
            labelText="Enter new password"
            style={{ width: 300 }}
            onChange={e =>
              this.setState(
                {
                  password: e.target.value
                },
                () => this.validateForm(true)
              )
            }
            onFocus={() => this.addTouched('password')}
            onBlur={() => this.validateForm(false)}
            type="password"
            value={this.state.password}
            name="setPassword"
            errorMessage={this.state.displayErrors.password}
          />

          <TextInput
            labelText="Confirm new password"
            style={{ width: 300 }}
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
            name="setConfirmPassword"
            errorMessage={this.state.displayErrors.confirmPassword}
          />

          <Mutation mutation={RESET_PASSWORD}>
            {(resetPassword, { loading }) => {
              const variables = {
                resetPasswordInput: {
                  newPassword: this.state.password,
                  code: this.props.history.location.state.code,
                  email: localStore.get('recoverUser')
                }
              }
              return (
                <PrimaryButton
                  text={loading ? <LoadingIcon /> : 'Reset Password'}
                  style={{
                    width: '100%',
                    backgroundColor: theme.colors.tertiary,
                    color: 'white',
                    marginTop: 15,
                    marginBottom: 15
                  }}
                  onClick={() => {
                    this.handleSubmit('/login', () =>
                      resetPassword({ variables })
                    )
                  }}
                  disabled={!enabled || loading}
                />
              )
            }}
          </Mutation>
        </Wrapper>
      </Background>
    )
  }
}

export default withAlert()(NewPassword)
