import { ADD_INFO } from '../constants/action-types'

const registrationState = {
  workEmail: '',
  personalEmail: '',
  firstName: '',
  lastName: '',
  password: '',
  spendingVsIncome: '',
  billsPaidOnTime: '',
  canCoverExpenses: '',
  confidenceInLongTermGoals: '',
  levelOfDebt: '',
  selfReportedCreditScore: '',
  confidenceInInsurance: '',
  plansAhead: '',
  financialStress: ''
}

const registerReducer = (state = registrationState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return { ...state, [action.payload.key]: action.payload.value }
    default:
      return state
  }
}

export default registerReducer
