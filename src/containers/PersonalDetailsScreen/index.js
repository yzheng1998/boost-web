import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Mutation } from 'react-apollo'
import { withAlert } from 'react-alert'
import validate from 'validate.js'
import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
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
import {
  EmailSuggestionText,
  CheckContainer,
  CheckboxText,
  FAQLink,
  TextContainer
} from './styles'

const GreenCheckbox = withStyles({
  root: {
    color: theme.colors.darkGrey,
    '&$checked': {
      color: theme.colors.header
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />)

const mapStateToProps = state => ({
  registerInfo: state.registrationReducer
})

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info))
})

class PersonalDetailsScreen extends Component {
  state = {
    registerInput: {
      firstName: this.props.registerInfo.firstName || '',
      lastName: this.props.registerInfo.lastName || '',
      personalEmail: this.props.registerInfo.personalEmail || '',
      password: this.props.registerInfo.password || ''
    },
    confirmPassword: '',
    displayErrors: {},
    errors: {},
    touched: {},
    termsAgreement: false
  }

  componentDidMount = () => {
    this.validateForm(false)
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        firstName: this.state.registerInput.firstName,
        lastName: this.state.registerInput.lastName,
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
    if (
      verified.data.verifyPersonalEmail &&
      this.state.termsAgreement === true
    ) {
      Object.keys(this.state.registerInput).forEach(key =>
        this.props.addInfo({ key, value: this.state.registerInput[key] })
      )
      this.props.history.push(path)
    } else if (this.state.termsAgreement === false) {
      this.props.alert.show('Terms and conditions must be agreed to')
    } else {
      this.props.alert.show('Email already exists')
    }
  }

  render() {
    const enabled = !this.state.errors
    const buttonColor =
      enabled && this.state.termsAgreement
        ? theme.colors.tertiary
        : theme.colors.secondary
    return (
      <Background style={{ backgroundColor: theme.colors.background }}>
        <Header
          text="Step 2 of 3: Set up my account"
          color={theme.colors.header}
          style={{ alignSelf: 'center', paddingBottom: 20 }}
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
          labelText="First Name"
          value={this.state.registerInput.firstName}
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
          labelText="Last Name"
          value={this.state.registerInput.lastName}
          style={{ alignSelf: 'center' }}
          errorMessage={this.state.displayErrors.lastNamed}
        />
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
        <EmailSuggestionText text="This email address is requested so that you can be reached when not at work. We recommend using the email address that is linked to your PayPal account, since PayPal is currently the only payment method available in this pilot." />
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
        <BodyText
          text="Your password must be at least 8 characters long."
          style={{
            width: 300
          }}
        />
        <CheckContainer>
          <GreenCheckbox
            value="checkedG"
            onChange={() =>
              this.setState({ termsAgreement: !this.state.termsAgreement })
            }
          />
          <TextContainer>
            <CheckboxText>I agree to the Grant Circle </CheckboxText>
            <FAQLink href="/faq">Terms and Conditions</FAQLink>
            <CheckboxText> and Data Sharing Policy.</CheckboxText>
          </TextContainer>
        </CheckContainer>
        <Mutation mutation={VERIFY_PERSONAL}>
          {(verifyPersonalEmail, { loading }) => {
            const variables = {
              personalEmail: this.state.registerInput.personalEmail
            }
            return (
              <PrimaryButton
                text={loading ? <LoadingIcon /> : 'Continue'}
                onClick={() => {
                  this.handleSubmit('/complete-profile', () =>
                    verifyPersonalEmail({ variables })
                  )
                }}
                style={{
                  backgroundColor: buttonColor,
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
)(PersonalDetailsScreen)

export default withAlert()(Password)
