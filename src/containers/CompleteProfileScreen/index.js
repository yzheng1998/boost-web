import React, { Component } from 'react'
import { connect, ReactReduxContext } from 'react-redux'
import { Mutation } from 'react-apollo'
import localStore from 'store'
import validate from 'validate.js'
import { REGISTER_USER, GET_ACCESS_TOKEN } from './graphql'
import Background from '../../components/Background'
import Header from '../../components/Header'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import DatePicker from '../../components/DatePicker'
import DropdownMenu from '../../components/DropdownMenu'
import PrimaryButton from '../../components/PrimaryButton'
import ProfileWrapper from '../../components/ProfileWrapper'
import {
  secondaryIncomeItems,
  maritalStatusItems,
  financialLifeItems
} from './menuItems'
import theme from '../../theme'
import { addInfo, clearRedux } from '../../redux/actions'
import constraints from './constraints'

const mapStateToProps = state => ({
  registerInfo: state.registrationReducer,
  paymentInfo: state.paymentReducer
})

const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info)),
  clearRedux: () => dispatch(clearRedux())
})

class CompleteProfileScreen extends Component {
  state = {
    registerInput: {
      birthday: this.props.registerInfo.birthday || '',
      children: this.props.registerInfo.children || '',
      adults: this.props.registerInfo.adults || '',
      maritalStatus: this.props.registerInfo.maritalStatus || '',
      secondaryIncome: this.props.registerInfo.secondaryIncome,
      financialLife: this.props.registerInfo.financialLife || '',
      householdIncome: this.props.registerInfo.householdIncome || ''
    },
    secondaryIncomeOpen: false,
    maritalStatusOpen: false,
    financialLifeOpen: false,
    displayErrors: {},
    errors: {},
    touched: {}
  }

  componentDidMount = () => {
    this.validateForm(false)
  }

  componentDidMount = () => {
    this.validateForm(false)
  }

  onChange = e => {
    this.setState(
      {
        registerInput: {
          ...this.state.registerInput,
          [e.target.name]: e.target.value
        }
      },
      () => this.validateForm(true)
    )
  }

  onChangeDropdown = (event, child) => {
    this.setState(
      {
        registerInput: {
          ...this.state.registerInput,
          [event.target.name]: child.key
        }
      },
      () => this.validateForm(true)
    )
  }

  onChangeBoolean = (event, child) => {
    this.setState(
      {
        registerInput: {
          ...this.state.registerInput,
          [event.target.name]: child.key === 'true'
        }
      },
      () => this.validateForm(true)
    )
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        birthday: this.state.registerInput.birthday,
        children: this.state.registerInput.children,
        adults: this.state.registerInput.adults,
        maritalStatus: this.state.registerInput.maritalStatus,
        secondaryIncome: this.state.registerInput.secondaryIncome,
        financialLife: this.state.registerInput.financialLife,
        householdIncome: this.state.registerInput.householdIncome
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

  handleSubmit = async (path, store, register) => {
    Object.keys(this.state.registerInput).forEach(key => {
      this.props.addInfo({ key, value: this.state.registerInput[key] })
    })
    const reduxStore = store.store.getState().registrationReducer
    const input = {
      ...reduxStore,
      birthday: Number(reduxStore.birthday),
      children: Number(reduxStore.children),
      adults: Number(reduxStore.adults),
      householdIncome: Number(reduxStore.householdIncome)
    }
    await register({
      variables: { input }
    })
    this.props.clearRedux()
    this.props.history.push(path)
  }

  toggleOpen = toggleOpenName => {
    this.setState({ [toggleOpenName]: !this.state[toggleOpenName] })
  }

  render() {
    const enabled = !this.state.errors
    const {
      birthday,
      children,
      adults,
      maritalStatus,
      secondaryIncome,
      financialLife,
      householdIncome
    } = this.state.registerInput
    return (
      <Background
        style={{
          backgroundColor: theme.colors.tertiary,
          paddingTop: 50,
          justifyContent: 'flex-start'
        }}
      >
        <ProfileWrapper>
          <Header
            text="Complete Profile"
            color={theme.colors.header}
            style={{ alignSelf: 'center' }}
          />

          <DatePicker
            id="date"
            label="Birth year"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            name="birthday"
            onChange={this.onChange}
            onFocus={() => this.addTouched('birthday')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.birthday}
            value={birthday}
          />
          <Title
            color={theme.colors.black}
            text="How many people live with you?"
            style={{ marginTop: 45 }}
          />
          <TextInput
            labelText="Children"
            type="number"
            name="children"
            onChange={this.onChange}
            onFocus={() => this.addTouched('children')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.children}
            value={children}
            style={{ marginTop: 0 }}
          />
          <TextInput
            labelText="Adults"
            type="number"
            name="adults"
            onChange={this.onChange}
            onFocus={() => this.addTouched('adults')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.adults}
            value={adults}
            style={{ marginTop: 0 }}
          />
          <DropdownMenu
            title="Marital status"
            value={maritalStatusItems[maritalStatus] || ''}
            open={this.state.maritalStatusOpen}
            inputTitle="Choose one"
            inputName="maritalStatus"
            onChange={this.onChangeDropdown}
            onFocus={() => this.addTouched('maritalStatus')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.maritalStatus}
            toggleOpen={() => this.toggleOpen('maritalStatusOpen')}
            menuItems={maritalStatusItems}
          />
          <DropdownMenu
            title="Do you or anyone else make money other than from this job?"
            value={secondaryIncomeItems[secondaryIncome] || ''}
            open={this.state.secondaryIncomeOpen}
            inputTitle="Choose one"
            inputName="secondaryIncome"
            onChange={this.onChangeBoolean}
            onFocus={() => this.addTouched('secondaryIncome')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.secondaryIncome}
            toggleOpen={() => this.toggleOpen('secondaryIncomeOpen')}
            menuItems={secondaryIncomeItems}
          />
          <Title
            color={theme.colors.black}
            text="What is your annual household income?"
            style={{ marginTop: 45 }}
          />
          <TextInput
            labelText="Annual Household Income"
            type="number"
            name="householdIncome"
            onChange={this.onChange}
            onFocus={() => this.addTouched('householdIncome')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.householdIncome}
            value={householdIncome}
          />
          <DropdownMenu
            title="Which of these best describes your financial life?"
            value={financialLifeItems[financialLife] || ''}
            open={this.state.financialLifeOpen}
            inputTitle="Choose one"
            inputName="financialLife"
            onChange={this.onChangeDropdown}
            onFocus={() => this.addTouched('financialLife')}
            onBlur={() => this.validateForm(false)}
            errorMessage={this.state.displayErrors.financialLife}
            toggleOpen={() => this.toggleOpen('financialLifeOpen')}
            menuItems={financialLifeItems}
          />
          <ReactReduxContext.Consumer>
            {store => (
              <Mutation
                mutation={GET_ACCESS_TOKEN}
                variables={{
                  plaidPublicToken: this.props.paymentInfo.plaidPublicToken
                }}
              >
                {getAccessToken => (
                  <Mutation
                    mutation={REGISTER_USER}
                    onCompleted={async data => {
                      const { token } = data.register
                      await localStore.set('user', { token })
                      getAccessToken()
                    }}
                  >
                    {(register, { loading }) => (
                      <PrimaryButton
                        text={loading ? 'Registering...' : 'Register'}
                        style={{
                          backgroundColor: theme.colors.tertiary,
                          color: theme.colors.primary
                        }}
                        onClick={() => {
                          this.handleSubmit('/request', store, register)
                        }}
                        disabled={!enabled || loading}
                      />
                    )}
                  </Mutation>
                )}
              </Mutation>
            )}
          </ReactReduxContext.Consumer>
        </ProfileWrapper>
      </Background>
    )
  }
}

const CompleteProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteProfileScreen)

export default CompleteProfile
