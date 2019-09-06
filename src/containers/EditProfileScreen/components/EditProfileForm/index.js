import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { withAlert } from 'react-alert'
import validate from 'validate.js'
import Header from '../../../../components/Header'
import TextInput from '../../../../components/TextInput'
import PrimaryButton from '../../../../components/PrimaryButton'
import ProfileWrapper from '../../../../components/ProfileWrapper'
import ButtonWrapper from '../../../../components/ButtonWrapper'
import theme from '../../../../theme'
import { EDIT_PROFILE, GET_USER } from '../../graphql'
import constraints from './constraints'

class EditProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      displayErrors: {},
      errors: {},
      touched: {}
    }
  }

  componentDidMount = () => {
    this.validateForm(false)
  }

  handleChange = e =>
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => this.validateForm(true)
    )

  handleSubmit = async (path, edit) => {
    await edit()
    this.props.history.push(path)
  }

  handleChangeBoolean = (event, child) =>
    this.setState(
      {
        [event.target.name]: child.key === 'true'
      },
      () => this.validateForm(true)
    )

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName
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

  render() {
    const enabled = !this.state.errors
    const { firstName, lastName } = this.state
    return (
      <ProfileWrapper>
        <Header text="Edit Profile" color={theme.colors.header} />
        <TextInput
          name="firstName"
          onChange={this.handleChange}
          onFocus={() => this.addTouched('firstName')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.firstName}
          labelText="First Name"
          value={firstName}
          style={{ marginBottom: 12 }}
          inputStyle={{ width: '100%' }}
        />
        <TextInput
          name="lastName"
          onChange={this.handleChange}
          onFocus={() => this.addTouched('lastName')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.lastName}
          labelText="Last Name"
          value={lastName}
          style={{ marginBottom: 12 }}
          inputStyle={{ width: '100%' }}
        />
        <PrimaryButton
          text="Change Password"
          style={{
            backgroundColor: theme.colors.quaternary,
            color: theme.colors.primary,
            alignSelf: 'flex-start'
          }}
          onClick={() => {
            this.props.history.push('/recovery')
          }}
        />
        <ButtonWrapper>
          <PrimaryButton
            text="Cancel"
            style={{
              backgroundColor: theme.colors.secondary,
              color: theme.colors.primary,
              marginRight: 20
            }}
            onClick={() => {
              this.props.history.push('/request')
            }}
          />
          <Mutation
            mutation={EDIT_PROFILE}
            onCompleted={data => {
              if (!data.editProfile.error) {
                window.scrollTo(0, 0)
                this.props.alert.success('You successfully edited your profile')
              } else this.props.alert.error(data.editProfile.error.message)
            }}
            refetchQueries={[{ query: GET_USER }]}
          >
            {editProfile => {
              const variables = {
                input: {
                  firstName,
                  lastName
                }
              }
              return (
                <PrimaryButton
                  text="Save"
                  style={{
                    backgroundColor: theme.colors.tertiary,
                    color: theme.colors.primary
                  }}
                  onClick={() =>
                    this.handleSubmit('/request/', () =>
                      editProfile({ variables })
                    )
                  }
                  disabled={!enabled}
                />
              )
            }}
          </Mutation>
        </ButtonWrapper>
      </ProfileWrapper>
    )
  }
}

export default withAlert()(EditProfileForm)
