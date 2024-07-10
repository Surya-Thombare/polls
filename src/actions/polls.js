import { savePoll } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_POLLS = 'ADD_POLLS'
export const RECEIVE_POLLS = 'RECEIVE_POLLS'


function addPoll(poll) {
  return {
    type: ADD_POLLS,
    poll
  }
}

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls
  }
}

export function handleAddPoll(poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return savePoll({
      poll,
      author: authedUser
    })
      .then(() => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()))
  }
}