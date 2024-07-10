import { savePollAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'


export const ADD_ANSWER = 'ADD_ANSWER';

export function addANswer({ authedUser, id, answer }) {
  return {
    type: ADD_ANSWER,
    addANswer,
    id,
    answer
  }
}

export function handleAddAnswer(answerData) {
  return (dispatch) => {
    dispatch(showLoading())
    savePollAnswer(answerData)
      .then(() => dispatch(addANswer(answerData)))
      .then(() => dispatch(hideLoading()))
  }
}