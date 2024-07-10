import { RECEIVE_USERS } from "../actions/users";
import { ADD_POLLS } from '../actions/polls.js'


export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_POLLS:
      const poll = action.poll
      const { author, id } = poll
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].poll.concat(id)
        }
      }
    default:
      return state
  }
}
