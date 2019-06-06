import { ADD_INFO, ADD_PAYMENT, CLEAR_REDUX } from '../constants/action-types'

export const addInfo = info => ({ type: ADD_INFO, payload: info })
export const addPayment = payment => ({ type: ADD_PAYMENT, payload: payment })
export const clearRedux = () => ({
  type: CLEAR_REDUX
})
