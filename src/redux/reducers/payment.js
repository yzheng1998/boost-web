import { ADD_PAYMENT } from '../constants/action-types'

const paymentState = {
  plaidPublicToken: []
}
const paymentReducer = (state = paymentState, action) => {
  switch (action.type) {
    case ADD_PAYMENT:
      return { ...state, plaidPublicToken: action.payload.value }
    default:
      return state
  }
}

export default paymentReducer
