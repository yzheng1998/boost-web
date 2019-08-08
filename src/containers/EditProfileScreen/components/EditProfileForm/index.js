import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { withAlert } from 'react-alert'
import validate from 'validate.js'
import Header from '../../../../components/Header'
import Title from '../../../../components/Title'
import TextInput from '../../../../components/TextInput'
import DatePicker from '../../../../components/DatePicker'
import DropdownMenu from '../../../../components/DropdownMenu'
import PrimaryButton from '../../../../components/PrimaryButton'
import ProfileWrapper from '../../../../components/ProfileWrapper'
import ButtonWrapper from '../../../../components/ButtonWrapper'
import {
  secondaryIncomeItems,
  maritalStatusItems,
  financialLifeItems
} from '../../menuItems'
import theme from '../../../../theme'
import { EDIT_PROFILE, GET_USER } from '../../graphql'
import constraints from './constraints'

class EditProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      phone: props.user.phone,
      zipCode: props.user.zipCode,
      birthday: props.user.birthday,
      children: props.user.children,
      adults: props.user.adults,
      maritalStatus: props.user.maritalStatus,
      secondaryIncome: props.user.secondaryIncome,
      financialLife: props.user.financialLife,
      householdIncome: props.user.householdIncome,
      secondaryIncomeOpen: props.user.secondaryIncomeOpen,
      maritalStatusOpen: props.user.maritalStatusOpen,
      financialLifeOpen: props.user.financialLifeOpen,
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

  handleChangeDropdown = (event, child) => {
    this.setState(
      {
        [event.target.name]: child.key
      },
      () => this.validateForm(true)
    )
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
        lastName: this.state.lastName,
        phone: this.state.phone,
        zipCode: this.state.zipCode,
        birthday: this.state.birthday,
        children: this.state.children,
        adults: this.state.adults,
        maritalStatus: this.state.maritalStatus,
        secondaryIncome: this.state.secondaryIncome,
        financialLife: this.state.financialLife,
        householdIncome: this.state.householdIncome
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
      householdIncome,
      firstName,
      lastName,
      phone,
      zipCode
    } = this.state
    return (
      <ProfileWrapper>
        <Header text="Edit Profile" color={theme.colors.header} />

        <TextInput
          name="firstName"
          onChange={this.handleChange}
          onFocus={() => this.addTouched('firstName')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.firstName}
          labelText="First name"
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
          labelText="Last name"
          value={lastName}
          style={{ marginBottom: 12 }}
          inputStyle={{ width: '100%' }}
        />
        <TextInput
          name="phone"
          onChange={this.handleChange}
          onFocus={() => this.addTouched('phone')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.phone}
          labelText="Cellphone #"
          value={phone}
          style={{ marginBottom: 12 }}
          inputStyle={{ width: '100%' }}
        />
        <TextInput
          name="zipCode"
          onChange={this.handleChange}
          onFocus={() => this.addTouched('zipCode')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.zipCode}
          labelText="Work ZIP code"
          value={zipCode}
          style={{ marginBottom: 12 }}
          inputStyle={{ width: '100%' }}
        />
        <DatePicker
          id="date"
          label="Birth year"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          name="birthday"
          onChange={this.handleChange}
          onFocus={() => this.addTouched('birthday')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.birthday}
          value={birthday}
          inputStyle={{ width: '100%' }}
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
          onChange={this.handleChange}
          onFocus={() => this.addTouched('children')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.children}
          value={children}
          style={{ marginTop: 0, marginBottom: 12 }}
          inputStyle={{ width: '100%' }}
        />
        <TextInput
          labelText="Adults"
          type="number"
          name="adults"
          onChange={this.handleChange}
          onFocus={() => this.addTouched('adults')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.adults}
          value={adults}
          style={{ marginTop: 0 }}
          inputStyle={{ width: '100%' }}
        />
        <DropdownMenu
          title="Marital status"
          value={maritalStatusItems[maritalStatus] || ''}
          open={this.state.maritalStatusOpen}
          inputTitle="Choose one"
          inputName="maritalStatus"
          onChange={this.handleChangeDropdown}
          onFocus={() => this.addTouched('maritalStatus')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.maritalStatus}
          toggleOpen={() => this.toggleOpen('maritalStatusOpen')}
          menuItems={maritalStatusItems}
        />
        <DropdownMenu
          title="Do you or anyone else make money other than from this job?"
          value={secondaryIncomeItems[secondaryIncome]}
          open={this.state.secondaryIncomeOpen}
          inputTitle="Choose one"
          inputName="secondaryIncome"
          onChange={this.handleChangeBoolean}
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
          labelText="Income"
          type="number"
          name="householdIncome"
          onChange={this.handleChange}
          onFocus={() => this.addTouched('householdIncome')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.householdIncome}
          value={householdIncome}
          inputStyle={{ width: '100%' }}
        />
        <DropdownMenu
          title="Which of these best describes your financial life?"
          value={financialLifeItems[financialLife] || ''}
          open={this.state.financialLifeOpen}
          inputTitle="Choose one"
          inputName="financialLife"
          onChange={this.handleChangeDropdown}
          onFocus={() => this.addTouched('financialLife')}
          onBlur={() => this.validateForm(false)}
          errorMessage={this.state.displayErrors.financialLife}
          toggleOpen={() => this.toggleOpen('financialLifeOpen')}
          menuItems={financialLifeItems}
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
                  lastName,
                  phone,
                  zipCode,
                  birthday: Number(birthday),
                  children: Number(children),
                  adults: Number(adults),
                  maritalStatus,
                  financialLife,
                  secondaryIncome,
                  householdIncome: Number(householdIncome)
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
