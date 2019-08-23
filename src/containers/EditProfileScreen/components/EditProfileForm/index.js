import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { withAlert } from 'react-alert'
import validate from 'validate.js'
import Header from '../../../../components/Header'
import TextInput from '../../../../components/TextInput'
import DropdownMenu from '../../../../components/DropdownMenu'
import PrimaryButton from '../../../../components/PrimaryButton'
import ProfileWrapper from '../../../../components/ProfileWrapper'
import ButtonWrapper from '../../../../components/ButtonWrapper'
import {
  billsPaidOnTimeItems,
  spendingVsIncomeItems,
  canCoverExpensesItems,
  confidenceInLongTermGoalsItems,
  levelOfDebtItems,
  selfReportedCreditScoreItems,
  confidenceInInsuranceItems,
  plansAheadItems
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
      spendingVsIncome: props.user.spendingVsIncome,
      billsPaidOnTime: props.user.billsPaidOnTime,
      canCoverExpenses: props.user.canCoverExpenses,
      confidenceInLongTermGoals: props.user.confidenceInLongTermGoals,
      levelOfDebt: props.user.levelOfDebt,
      selfReportedCreditScore: props.user.selfReportedCreditScore,
      confidenceInInsurance: props.user.confidenceInInsurance,
      plansAhead: props.user.plansAhead,
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
    console.log('SHIT')
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
        spendingVsIncome: this.state.spendingVsIncome,
        billsPaidOnTime: this.state.billsPaidOnTime,
        canCoverExpenses: this.state.canCoverExpenses,
        confidenceInLongTermGoals: this.state.confidenceInLongTermGoals,
        levelOfDebt: this.state.levelOfDebt,
        selfReportedCreditScore: this.state.selfReportedCreditScore,
        confidenceInInsurance: this.state.confidenceInInsurance,
        plansAhead: this.state.plansAhead
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
      firstName,
      lastName,
      spendingVsIncome,
      billsPaidOnTime,
      canCoverExpenses,
      confidenceInLongTermGoals,
      levelOfDebt,
      selfReportedCreditScore,
      confidenceInInsurance,
      plansAhead
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
        <DropdownMenu
          title="Spending vs Income"
          value={spendingVsIncomeItems[spendingVsIncome] || ''}
          open={this.state.spendingVsIncomeOpen}
          inputTitle="Choose one"
          inputName="spendingVsIncome"
          onChange={this.handleChangeDropdown}
          errorMessage={this.state.displayErrors.spendingVsIncome}
          toggleOpen={() => this.toggleOpen('spendingVsIncomeOpen')}
          menuItems={spendingVsIncomeItems}
        />
        <DropdownMenu
          title="Bills Paid On Time"
          value={billsPaidOnTimeItems[billsPaidOnTime] || ''}
          open={this.state.billsPaidOnTimeOpen}
          inputTitle="Choose one"
          inputName="billsPaidOnTime"
          onChange={this.handleChangeDropdown}
          errorMessage={this.state.displayErrors.billsPaidOnTime}
          toggleOpen={() => this.toggleOpen('billsPaidOnTimeOpen')}
          menuItems={billsPaidOnTimeItems}
        />
        <DropdownMenu
          title="Can Cover Expenses"
          value={canCoverExpensesItems[canCoverExpenses] || ''}
          open={this.state.canCoverExpensesOpen}
          inputTitle="Choose one"
          inputName="canCoverExpenses"
          onChange={this.handleChangeDropdown}
          errorMessage={this.state.displayErrors.canCoverExpenses}
          toggleOpen={() => this.toggleOpen('canCoverExpensesOpen')}
          menuItems={canCoverExpensesItems}
        />
        <DropdownMenu
          title="Confidence in Long Term Goals"
          value={
            confidenceInLongTermGoalsItems[confidenceInLongTermGoals] || ''
          }
          open={this.state.confidenceInLongTermGoalsOpen}
          inputTitle="Choose one"
          inputName="confidenceInLongTermGoals"
          onChange={this.handleChangeDropdown}
          errorMessage={this.state.displayErrors.confidenceInLongTermGoals}
          toggleOpen={() => this.toggleOpen('confidenceInLongTermGoalsOpen')}
          menuItems={confidenceInLongTermGoalsItems}
        />
        <DropdownMenu
          title="Level of Debt"
          value={levelOfDebtItems[levelOfDebt] || ''}
          open={this.state.levelOfDebtOpen}
          inputTitle="Choose one"
          inputName="levelOfDebt"
          onChange={this.handleChangeDropdown}
          errorMessage={this.state.displayErrors.levelOfDebt}
          toggleOpen={() => this.toggleOpen('levelOfDebtOpen')}
          menuItems={levelOfDebtItems}
        />
        <DropdownMenu
          title="Credit Score"
          value={selfReportedCreditScoreItems[selfReportedCreditScore] || ''}
          open={this.state.selfReportedCreditScoreOpen}
          inputTitle="Choose one"
          inputName="selfReportedCreditScore"
          onChange={this.handleChangeDropdown}
          errorMessage={this.state.displayErrors.selfReportedCreditScore}
          toggleOpen={() => this.toggleOpen('selfReportedCreditScoreOpen')}
          menuItems={selfReportedCreditScoreItems}
        />
        <DropdownMenu
          title="Confidence in Insurance"
          value={confidenceInInsuranceItems[confidenceInInsurance] || ''}
          open={this.state.confidenceInInsuranceOpen}
          inputTitle="Choose one"
          inputName="confidenceInInsurance"
          onChange={this.handleChangeDropdown}
          errorMessage={this.state.displayErrors.confidenceInInsurance}
          toggleOpen={() => this.toggleOpen('confidenceInInsuranceOpen')}
          menuItems={confidenceInInsuranceItems}
        />
        <DropdownMenu
          title="Plans Ahead"
          value={plansAheadItems[plansAhead] || ''}
          open={this.state.plansAheadOpen}
          inputTitle="Choose one"
          inputName="plansAhead"
          onChange={this.handleChangeDropdown}
          errorMessage={this.state.displayErrors.plansAhead}
          toggleOpen={() => this.toggleOpen('plansAheadOpen')}
          menuItems={plansAheadItems}
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
                  spendingVsIncome,
                  billsPaidOnTime,
                  canCoverExpenses,
                  confidenceInLongTermGoals,
                  levelOfDebt,
                  selfReportedCreditScore,
                  confidenceInInsurance,
                  plansAhead
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
