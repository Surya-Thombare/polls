import { combineReducers } from 'redux'
import authedUser from './authUserReducer'
import users from './users'

export default combineReducers({
  authedUser,
  users
})



