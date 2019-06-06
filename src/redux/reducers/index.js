import { combineReducers } from 'redux'
import paymentReducer from './payment'
import registrationReducer from './registration'
import { CLEAR_REDUX } from '../constants/action-types'

const combReducer = combineReducers({ paymentReducer, registrationReducer })

const rootReducer = (state, action) => {
  const updatedState = action.type === CLEAR_REDUX ? undefined : state
  return combReducer(updatedState, action)
}

export default rootReducer
