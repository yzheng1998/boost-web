import React, { Component, forwardRef } from 'react'
import { Mutation } from 'react-apollo'
import { withAlert } from 'react-alert'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import validate from 'validate.js'
import Background from '../../components/Background'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput'
import PrimaryButton from '../../components/PrimaryButton'
import theme from '../../theme'
import { connect } from 'react-redux'
import { addInfo } from '../../redux/actions'
import constraints from './constraints'
import { VERIFY_WORK } from './graphql'
import LoadingIcon from '../../components/LoadingIcon'
import WorkEmailModal from './components/WorkEmailModal'

const mapStateToProps = state => ({
  registerInfo: state.registrationReducer
})

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info))
})

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
))

class WorkEmailScreen extends Component {
  state = {
    registerInput: {
      workEmail: this.props.registerInfo.workEmail || ''
    },
    displayErrors: {},
    errors: {},
    touched: {},
    open: false
  }

  componentDidMount = () => {
    this.validateForm(false)
  }

  setOpen = open => {
    this.setState({ open })
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        workEmail: this.state.registerInput.workEmail
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
    if (verified.data.verifyWorkEmail.notListed) {
      this.setOpen(true)
    } else if (verified.data.verifyWorkEmail.error) {
      this.props.alert.show(verified.data.verifyWorkEmail.error.message)
    } else {
      Object.keys(this.state.registerInput).forEach(key =>
        this.props.addInfo({ key, value: this.state.registerInput[key] })
      )
      this.props.history.push(path)
    }
  }

  render() {
    const enabled = !this.state.errors
    return (
      <Background style={{ backgroundColor: theme.colors.background }}>
        <Header
          text="Step 1 of 3: Verify your email"
          color={theme.colors.header}
          style={{ alignSelf: 'center', paddingBottom: 20 }}
        />
        <TextInput
          name="workEmail"
          onChange={e =>
            this.setState(
              {
                registerInput: { workEmail: e.target.value }
              },
              () => this.validateForm(true)
            )
          }
          onFocus={() => this.addTouched('workEmail')}
          onBlur={() => this.validateForm(false)}
          labelText="Please enter your work email"
          value={this.state.registerInput.workEmail}
          style={{ alignSelf: 'center' }}
          errorMessage={this.state.displayErrors.workEmail}
        />
        <Mutation mutation={VERIFY_WORK}>
          {(verifyWorkEmail, { loading }) => {
            const variables = {
              workEmail: this.state.registerInput.workEmail
            }
            return (
              <PrimaryButton
                text={loading ? <LoadingIcon /> : 'Verify my email'}
                onClick={() =>
                  this.handleSubmit('/register-cont', () =>
                    verifyWorkEmail({ variables })
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
        <Dialog
          open={this.state.open}
          onClose={() => this.setOpen(false)}
          TransitionComponent={Transition}
        >
          <WorkEmailModal
            setOpen={this.setOpen}
            email={this.state.registerInput.workEmail}
            history={this.props.history}
          />
        </Dialog>
      </Background>
    )
  }
}

const WorkEmail = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkEmailScreen)

export default withAlert()(WorkEmail)
