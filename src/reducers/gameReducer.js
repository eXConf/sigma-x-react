import { 
  CREATE_PLAYER,
  SET_PLAYER_NAME
 } from '../actions/types'

const INITITAL_STATE = {
  players: [
    {
      name: 'Игрок 1',
      team: '',
      answers: []
    },
    {
      name: 'Игрок 2',
      team: '',
      answers: []
    },
    {
      name: 'Игрок 3',
      team: '',
      answers: []
    },
    {
      name: 'Игрок 4',
      team: '',
      answers: []
    }
  ],
  currentQuestionNum: 1,
  subjectsNames: []
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
    default: 
      return state
  }
}