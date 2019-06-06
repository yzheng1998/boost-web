import { ADD_INFO } from '../constants/action-types'

const registrationState = {
  workEmail: '',
  personalEmail: '',
  firstName: '',
  lastName: '',
  password: '',
  phone: '',
  zipCode: '',
  birthday: '',
  children: null,
  adults: null,
  maritalStatus: '',
  financialLife: '',
  secondaryIncome: null,
  householdIncome: null
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
