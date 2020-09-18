import { 
  SET_PLAYERS_NUMBER,
  SET_QUESTIONS_NUMBER
 } from '../actions/types'

const INITITAL_STATE = {
  numberOfPlayers: 4,
  numberOfQuestions: 5
}

export default (state = INITITAL_STATE, action) => {
  switch(action.type) {
    case SET_PLAYERS_NUMBER:
      return ({...state, numberOfPlayers: action.payload})
    case SET_QUESTIONS_NUMBER:
      return ({...state, numberOfQuestions: action.payload})
    default: 
      return state
  }
}