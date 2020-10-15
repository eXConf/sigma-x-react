import { 
  SET_PLAYERS_NUMBER,
  SET_QUESTIONS_NUMBER,
  SET_PRICE_MULTIPLIER,
  SET_UI_GAME_WIDTH
 } from '../actions/types'

const INITITAL_STATE = {
  numberOfPlayers: 4,
  numberOfQuestions: 5,
  priceMultiplier: 10,
  uiWidth: 600
}

export default (state = INITITAL_STATE, action) => {
  switch(action.type) {
    case SET_PLAYERS_NUMBER:
      return ({...state, numberOfPlayers: action.payload})
    case SET_QUESTIONS_NUMBER:
      return ({...state, numberOfQuestions: action.payload})
    case SET_PRICE_MULTIPLIER:
      return ({...state, priceMultiplier: action.payload})

    case SET_UI_GAME_WIDTH:
      return ({...state, uiWidth: action.payload})
    default: 
      return state
  }
}