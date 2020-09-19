import { 
  ADD_SUBJECT,
  SET_CURRENT_QUESTION_NUM,
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
  subjects: ['Тема #1', 'Тема #2', 'Тема #3'],
  subjectNames: []
}

export default (state = INITITAL_STATE, action) => {
  const newState = {...state}

  switch(action.type) {
    case CREATE_PLAYER:
      newState.players.push({
        name: `Игрок ${action.payload}`,
        team: '',
        answers: []
      })
      return {...newState}
    
    case SET_PLAYER_NAME:
      newState.players[action.payload.id].name = action.payload.name
      return {...newState}

    case SET_CURRENT_QUESTION_NUM:
      return {...newState, currentQuestionNum: action.payload}

    case ADD_SUBJECT:
      newState.subjects.push(action.payload)
      return {...newState}
    default: 
      return state
  }
}