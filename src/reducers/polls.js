import { ADD_POLLS, RECEIVE_POLLS } from '../actions/polls.js'

export default function polls(state = {}, action) {
  switch (action.type) {
    case ADD_POLLS:
      return {
        ...state,
        [action.poll.id]: action.poll
      }
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls
      }
    default:
      return state;
  }
}