import React, { Component } from 'react'
import { connect, ReactReduxContext } from 'react-redux'
import { Mutation } from 'react-apollo'
import localStore from 'store'
import ReactGA from 'react-ga'
import { REGISTER_USER } from './graphql'
import Background from '../../components/Background'
import Header from '../../components/Header'
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
import { SubHeader, ErrorText, ErrorContainer } from './styles'
import LoadingIcon from '../../components/LoadingIcon'
import config from '../../config'
import RadioGroup from './components/RadioGroup'

ReactGA.initialize(config.gaTrackingCode)

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
    submitPressed: false
  }

  onChangeRadio = event => {
    this.setState({
      registerInput: {
        ...this.state.registerInput,
        [event.target.name]: event.target.value
      }
    })
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

  handleSubmit = async (store, register) => {
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
      register({
        variables: { input }
      })
    }
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
        <ProfileWrapper style={{ padding: '50px' }}>
          <Header
            text="Step 3 of 3: Your financial wellness"
            color={theme.colors.header}
            style={{ alignSelf: 'center', marginBottom: '30px' }}
          />
          <RadioGroup
            title="How much stress are your finances causing you today?"
            value={financialStress}
            name="financialStress"
            onChange={this.onChangeRadio}
            menuItems={financialStressItems}
          />
          <SubHeader styles={{ textAlign: 'left' }}>
            In the following questions, “household” includes you and others
            living with you who contribute financially to your home. If you live
            alone, or do not consider anyone else to be a member of your
            household, please answer these questions as an individual.
          </SubHeader>
          <RadioGroup
            title="Which of the following statements best describes how your household’s total spending compared to total income, over the last 12 months?"
            value={spendingVsIncome}
            name="spendingVsIncome"
            onChange={this.onChangeRadio}
            menuItems={spendingVsIncomeItems}
          />
          <RadioGroup
            title="Which of the following statements best describes how your household has paid its bills over the last 12 months? My household has been financially able to:"
            value={billsPaidOnTime}
            name="billsPaidOnTime"
            onChange={this.onChangeRadio}
            menuItems={billsPaidOnTimeItems}
          />
          <RadioGroup
            title="At your current level of spending, how long could you and your household afford to cover expenses, if you had to live only off the money you have readily available, without withdrawing money from retirement accounts or borrowing?"
            value={canCoverExpenses}
            name="canCoverExpenses"
            onChange={this.onChangeRadio}
            menuItems={canCoverExpensesItems}
          />
          <RadioGroup
            title="Thinking about your household’s longer term financial goals such as saving for a vacation, starting a business, buying or paying off a home, saving up for education, putting money away for retirement, or making retirement funds last… How confident are you that your household is currently doing what is needed to meet your longer term goals?"
            value={confidenceInLongTermGoals}
            name="confidenceInLongTermGoals"
            onChange={this.onChangeRadio}
            menuItems={confidenceInLongTermGoalsItems}
          />
          <RadioGroup
            title="Thinking about all of your household’s current debts, including mortgages, bank loans, student loans, money owed to people, medical debt, past-due bills, and credit card balances that are carried over from prior months... As of today, which of the following statements describes how manageable your household debt is?"
            value={levelOfDebt}
            name="levelOfDebt"
            onChange={this.onChangeRadio}
            menuItems={levelOfDebtItems}
          />
          <RadioGroup
            title="How would you rate your credit score? Your credit score is a number that tells lenders how risky or safe you are as a borrower."
            value={selfReportedCreditScore}
            name="selfReportedCreditScore"
            onChange={this.onChangeRadio}
            menuItems={selfReportedCreditScoreItems}
          />
          <RadioGroup
            title="Thinking about all of the types of personal and household insurance you and others in your household have, how confident are you that those insurance policies will provide enough support in case of an emergency?"
            value={confidenceInInsurance}
            name="confidenceInInsurance"
            onChange={this.onChangeRadio}
            menuItems={confidenceInInsuranceItems}
          />
          <RadioGroup
            title="To what extent do you agree or disagree with the following statement: “My household plans ahead financially.”"
            value={plansAhead}
            name="plansAhead"
            onChange={this.onChangeRadio}
            menuItems={plansAheadItems}
          />
          <ErrorContainer>
            {this.state.submitPressed && !enabled && (
              <ErrorText>All fields must be entered.</ErrorText>
            )}
          </ErrorContainer>

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
                  this.props.clearRedux()
                  this.props.history.push('/welcome')
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
                      ReactGA.event({
                        category: 'Register',
                        action: 'Registration Complete'
                      })
                      this.handleSubmit(store, register)
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
