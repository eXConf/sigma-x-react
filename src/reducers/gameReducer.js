import { 
  ADD_SUBJECT,
  SET_CURRENT_QUESTION_NUM,
  SET_PLAYER_ANSWER,
  CREATE_PLAYER,
  SET_PLAYER_NAME
 } from '../actions/types'

const INITITAL_STATE = {
  players: [],
  currentQuestionNum: 0,
  subjects: ['Тема #1', 'Тема #2', 'Тема #3', 'Тема 4', 'Тема 5'],
  subjectNames: []
}

export default (state = INITITAL_STATE, action) => {
  const { payload } = action

  switch(action.type) {
    case CREATE_PLAYER:
      return {...state, players: payload}
    
    case SET_PLAYER_NAME:
      return {...state, players: payload}

    case SET_CURRENT_QUESTION_NUM:
      return {...state, currentQuestionNum: payload}

    case SET_PLAYER_ANSWER: 
      return {...state, players: payload}

    case ADD_SUBJECT:
    console.log({...state, subjects: payload})  
    return {...state, subjects: payload}
    default: 
      return state
  }
}