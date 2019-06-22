import { combineReducers } from "redux";
import authReducer from './auth'
import counterReducer from './counter'

export default combineReducers({
  counterReducer,
  authReducer
})