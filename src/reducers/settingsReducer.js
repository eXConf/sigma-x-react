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
  uiWidth: 600,
  activeTheme: 1,
  themes: [
    // main, dark, darker, light, lighter, bg, text-dark, text-light
    // 0 - user custom theme
    ['#424246', '#bbb6b6', '#747474', '#d4d9dd', '#f1f1f1', '#fffdfd', '#141414', '#f1f1f1'],
    // 1 - default brown-gray
    ['#424246', '#bbb6b6', '#747474', '#d4d9dd', '#f1f1f1', '#fffdfd', '#141414', '#f1f1f1'],
    //2 - greenery
    ['#5e7431', '#879d5e', '#9ab740', '#c8d86d', '#aabe86', '#fcfff5', '#161616', '#f1f1f1'],
    //3 - amber-chocolate
    ['#49290f', '#ffc45f', '#d17745', '#fff0bc', '#c78446', '#fff4e7', '#161616', '#f1f1f1'],
    //4 - burgundy-pink
    ['#8c323d', '#40151f', '#a66a66', '#e4c8cd', '#fed4d4', '#f8f8f8', '#dd6b6b', '#f1f1f1'],
    //5 - gray-blue
    ['#294552', '#00070a', '#597884', '#acc4ce', '#9eb9b3', '#537d8d', '#fffbfb', '#f1f1f1'],
    //6 - huckleberry
    ['#274684', '#132449', '#000000', '#709fdc', '#b9d5fd', '#f9fbff', '#ffffff', '#f1f1f1'],
  ]
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