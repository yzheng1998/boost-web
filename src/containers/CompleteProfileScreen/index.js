import React, { Component } from 'react'
import { connect, ReactReduxContext } from 'react-redux'
import { Mutation } from 'react-apollo'
import localStore from 'store'
import { REGISTER_USER } from './graphql'
import Background from '../../components/Background'
import Header from '../../components/Header'
import DropdownMenu from '../../components/DropdownMenu'
import PrimaryButton from '../../components/PrimaryButton'
import ProfileWrapper from '../../components/ProfileWrapper'
import {
  financialStressItems,
  billsPaidOnTimeItems,
  spendingVsIncomeItems,
  canCoverExpensesItems,
  confidenceInLongTermGoalsItems,
  levelOfDebtItems,
  selfReportedCreditScoreItems,
  confidenceInInsuranceItems,
  plansAheadItems
} from './menuItems'
import theme from '../../theme'
import { addInfo, clearRedux } from '../../redux/actions'
import { SubHeader } from './styles'
import LoadingIcon from '../../components/LoadingIcon'

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
      financialStress: this.props.registerInfo.financialStress || '',
      spendingVsIncome: this.props.registerInfo.spendingVsIncome || '',
      billsPaidOnTime: this.props.registerInfo.billsPaidOnTime || '',
      canCoverExpenses: this.props.registerInfo.canCoverExpenses || '',
      confidenceInLongTermGoals:
        this.props.registerInfo.confidenceInLongTermGoals || '',
      levelOfDebt: this.props.registerInfo.levelOfDebt || '',
      selfReportedCreditScore:
        this.props.registerInfo.selfReportedCreditScore || '',
      confidenceInInsurance:
        this.props.registerInfo.confidenceInInsurance || '',
      plansAhead: this.props.registerInfo.plansAhead || ''
    },
    financialStressOpen: false,
    spendingVsIncomeOpen: false,
    billsPaidOnTimeOpen: false,
    canCoverExpensesOpen: false,
    confidenceInLongTermGoalsOpen: false,
    levelOfDebtOpen: false,
    selfReportedCreditScoreOpen: false,
    confidenceInInsuranceOpen: false,
    plansAheadOpen: false,
    submitPressed: false
  }

  onChangeDropdown = (event, child) => {
    this.setState({
      registerInput: {
        ...this.state.registerInput,
        [event.target.name]: child.key
      }
    })
  }

  displayError = key => {
    if (!this.state.registerInput[key].length && this.state.submitPressed) {
      return '^Cannot be blank'
    }
    return null
  }

  valid = () => {
    // eslint-disable-next-line consistent-return
    Object.keys(this.state.registerInput).forEach(key => {
      if (!this.state.registerInput[key].length) {
        return false
      }
    })
    return true
  }

  handleSubmit = async (path, store, register) => {
    this.setState({
      submitPressed: true
    })
    if (this.valid) {
      Object.keys(this.state.registerInput).forEach(key => {
        this.props.addInfo({ key, value: this.state.registerInput[key] })
      })
      const reduxStore = store.store.getState().registrationReducer
      const input = {
        ...reduxStore,
        financialStress: Number(reduxStore.financialStress)
      }
      console.log('VARS->', input)
      await register({
        variables: { input }
      })
      this.props.clearRedux()
      this.props.history.push(path)
    }
  }

  toggleOpen = toggleOpenName => {
    this.setState({
      [toggleOpenName]: !this.state[toggleOpenName]
    })
  }

  render() {
    const enabled = this.valid
    const {
      financialStress,
      spendingVsIncome,
      billsPaidOnTime,
      canCoverExpenses,
      confidenceInLongTermGoals,
      levelOfDebt,
      selfReportedCreditScore,
      confidenceInInsurance,
      plansAhead
    } = this.state.registerInput
    return (
      <Background
        style={{
          backgroundColor: theme.colors.background,
          justifyContent: 'flex-start',
          paddingTop: 30
        }}
      >
        <ProfileWrapper>
          <Header
            text="Step 3 of 3: Your financial wellness"
            color={theme.colors.header}
            style={{ alignSelf: 'center' }}
          />
          <DropdownMenu
            title="How much stress are your finances causing you today?"
            value={financialStressItems[financialStress] || ''}
            open={this.state.financialStressOpen}
            inputTitle="Choose one"
            inputName="financialStress"
            onChange={this.onChangeDropdown}
            errorMessage={this.displayError('financialStress')}
            toggleOpen={() => this.toggleOpen('financialStressOpen')}
            menuItems={financialStressItems}
          />
          <SubHeader>
            In the following questions, “household” includes you and others
            living with you who contribute financially to your home. If you live
            alone, or do not consider anyone else to be a member of your
            household, please answer these questions as an individual.
          </SubHeader>
          <DropdownMenu
            title="Which of the following statements best describes how your household’s total spending compared to total income, over the last 12 months?"
            value={spendingVsIncomeItems[spendingVsIncome] || ''}
            open={this.state.spendingVsIncomeOpen}
            inputTitle="Choose one"
            inputName="spendingVsIncome"
            onChange={this.onChangeDropdown}
            errorMessage={this.displayError('spendingVsIncome')}
            toggleOpen={() => this.toggleOpen('spendingVsIncomeOpen')}
            menuItems={spendingVsIncomeItems}
          />
          <DropdownMenu
            title="Which of the following statements best describes how your household has paid its bills over the last 12 months? My household has been financially able to:"
            value={billsPaidOnTimeItems[billsPaidOnTime] || ''}
            open={this.state.billsPaidOnTimeOpen}
            inputTitle="Choose one"
            inputName="billsPaidOnTime"
            onChange={this.onChangeDropdown}
            errorMessage={this.displayError('billsPaidOnTime')}
            toggleOpen={() => this.toggleOpen('billsPaidOnTimeOpen')}
            menuItems={billsPaidOnTimeItems}
          />
          <DropdownMenu
            title="At your current level of spending, how long could you and your household afford to cover expenses, if you had to live only off the money you have readily available, without withdrawing money from retirement accounts or borrowing?"
            value={canCoverExpensesItems[canCoverExpenses] || ''}
            open={this.state.canCoverExpensesOpen}
            inputTitle="Choose one"
            inputName="canCoverExpenses"
            onChange={this.onChangeDropdown}
            errorMessage={this.displayError('canCoverExpenses')}
            toggleOpen={() => this.toggleOpen('canCoverExpensesOpen')}
            menuItems={canCoverExpensesItems}
          />
          <DropdownMenu
            title="Thinking about your household’s longer term financial goals such as saving for a vacation, starting a business, buying or paying off a home, saving up for education, putting money away for retirement, or making retirement funds last… How confident are you that your household is currently doing what is needed to meet your longer term goals?"
            value={
              confidenceInLongTermGoalsItems[confidenceInLongTermGoals] || ''
            }
            open={this.state.confidenceInLongTermGoalsOpen}
            inputTitle="Choose one"
            inputName="confidenceInLongTermGoals"
            onChange={this.onChangeDropdown}
            errorMessage={this.displayError('confidenceInLongTermGoals')}
            toggleOpen={() => this.toggleOpen('confidenceInLongTermGoalsOpen')}
            menuItems={confidenceInLongTermGoalsItems}
          />
          <DropdownMenu
            title="Thinking about all of your household’s current debts, including mortgages, bank loans, student loans, money owed to people, medical debt, past-due bills, and credit card balances that are carried over from prior months... As of today, which of the following statements describes how manageable your household debt is?"
            value={levelOfDebtItems[levelOfDebt] || ''}
            open={this.state.levelOfDebtOpen}
            inputTitle="Choose one"
            inputName="levelOfDebt"
            onChange={this.onChangeDropdown}
            errorMessage={this.displayError('levelOfDebt')}
            toggleOpen={() => this.toggleOpen('levelOfDebtOpen')}
            menuItems={levelOfDebtItems}
          />
          <DropdownMenu
            title="How would you rate your credit score? Your credit score is a number that tells lenders how risky or safe you are as a borrower."
            value={selfReportedCreditScoreItems[selfReportedCreditScore] || ''}
            open={this.state.selfReportedCreditScoreOpen}
            inputTitle="Choose one"
            inputName="selfReportedCreditScore"
            onChange={this.onChangeDropdown}
            errorMessage={this.displayError('selfReportedCreditScore')}
            toggleOpen={() => this.toggleOpen('selfReportedCreditScoreOpen')}
            menuItems={selfReportedCreditScoreItems}
          />
          <DropdownMenu
            title="Thinking about all of the types of personal and household insurance you and others in your household have, how confident are you that those insurance policies will provide enough support in case of an emergency?"
            value={confidenceInInsuranceItems[confidenceInInsurance] || ''}
            open={this.state.confidenceInInsuranceOpen}
            inputTitle="Choose one"
            inputName="confidenceInInsurance"
            onChange={this.onChangeDropdown}
            errorMessage={this.displayError('confidenceInInsurance')}
            toggleOpen={() => this.toggleOpen('confidenceInInsuranceOpen')}
            menuItems={confidenceInInsuranceItems}
          />
          <DropdownMenu
            title="To what extent do you agree or disagree with the following statement: “My household plans ahead financially.”"
            value={plansAheadItems[plansAhead] || ''}
            open={this.state.plansAheadOpen}
            inputTitle="Choose one"
            inputName="plansAhead"
            onChange={this.onChangeDropdown}
            errorMessage={this.displayError('plansAhead')}
            toggleOpen={() => this.toggleOpen('plansAheadOpen')}
            menuItems={plansAheadItems}
          />
          <ReactReduxContext.Consumer>
            {store => (
              // <Mutation
              //   mutation={GET_ACCESS_TOKEN}
              //   variables={{
              //     plaidPublicTokens: this.props.paymentInfo.plaidPublicTokens
              //   }}
              // >
              //   {getAccessTokens => (
              <Mutation
                mutation={REGISTER_USER}
                onCompleted={async data => {
                  const { token } = data.register
                  await localStore.set('user', { token })
                  // getAccessTokens()
                }}
              >
                {(register, { loading }) => (
                  <PrimaryButton
                    text={loading ? <LoadingIcon /> : 'Register'}
                    style={{
                      backgroundColor: enabled ? theme.colors.tertiary : null,
                      color: enabled ? theme.colors.primary : '#D3D3D3'
                    }}
                    onClick={() => {
                      this.handleSubmit('/welcome', store, register)
                    }}
                    disabled={!enabled || loading}
                  />
                )}
              </Mutation>
              //   )}
              // </Mutation>
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
