import { 
  ADD_SUBJECT,
  SET_CURRENT_QUESTION_NUM,
  SET_PLAYER_ANSWER,
  CREATE_PLAYER,
  SET_PLAYER_NAME
 } from '../actions/types'

const INITITAL_STATE = {
  players: [
    {
      name: 'Игрок 1',
      team: '',
      answers: ['+', '-', null, null, '+']
    },
    {
      name: 'Игрок 2',
      team: '',
      answers: [null, '+']
    },
    {
      name: 'Игрок 3',
      team: '',
      answers: []
    },
    {
      name: 'Игрок 4',
      team: '',
      answers: [null, null, null, null, null, null, '+', '-']
    }
  ],
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
      return {...state, subjects: payload}
    default: 
      return state
  }
}