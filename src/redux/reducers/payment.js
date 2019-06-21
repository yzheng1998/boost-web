import { ADD_PAYMENT } from '../constants/action-types'

const paymentState = {
  plaidPublicTokens: []
}
const paymentReducer = (state = paymentState, action) => {
  switch (action.type) {
    case ADD_PAYMENT:
      return { ...state, plaidPublicTokens: action.payload.value }
    default:
      return state
  }
}

export default paymentReducer
