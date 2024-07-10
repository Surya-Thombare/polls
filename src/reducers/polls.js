import { ADD_POLLS, RECEIVE_POLLS } from '../actions/polls.js'
import { addANswer, ADD_ANSWER } from '../actions/answers.js'


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
    case ADD_ANSWER:
      const { answer, id, authedUser } = action
      const poll = state[id]
      const votesKey = answer + 'Votes'

      return {
        ...state,
        [action.id]: {
          ...poll,
          [votesKey]: poll[votesKey].concat([authedUser])
        }
      }
    default:
      return state;
  }
}