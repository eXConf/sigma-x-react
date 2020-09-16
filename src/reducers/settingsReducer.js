import { SET_PLAYERS_NUMBER } from '../actions/types'

const INITITAL_STATE = {
  numberOfPlayers: 4
}

export default (state = INITITAL_STATE, action) => {
  switch(action.type) {
    case SET_PLAYERS_NUMBER:
      return ({...state, numberOfPlayers: action.payload})
    default: 
      return state
  }
}