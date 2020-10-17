import { 
  SET_PLAYERS_NUMBER,
  SET_QUESTIONS_NUMBER,
  SET_PRICE_MULTIPLIER,
  SET_UI_GAME_WIDTH,
  SET_THEME,
  SAVE_STATE_TO_LOCAL_STORAGE,
  LOAD_STATE_FROM_LOCAL_STORAGE
 } from '../actions/types'

const INITITAL_STATE = {
  numberOfPlayers: 4,
  numberOfQuestions: 5,
  priceMultiplier: 10,
  uiWidth: 600,
  activeTheme: 1,
  themes: [
    // colors: main, dark, darker, light, lighter, bg, text-dark, text-light
    {
      name: 'Пользовательская',
      colors: ['#424246', '#bbb6b6', '#747474', '#d4d9dd', '#f1f1f1', '#fffdfd', '#141414', '#f1f1f1']
    },
    {
      name: 'Brown-gray',
      colors: ['#424246', '#bbb6b6', '#747474', '#d4d9dd', '#f1f1f1', '#fffdfd', '#141414', '#f1f1f1']
    },
    {
      name: 'Greenery',
      colors: ['#5e7431', '#879d5e', '#9ab740', '#c8d86d', '#aabe86', '#fcfff5', '#161616', '#f1f1f1']
    },
    {
      name: 'Amber-chocolate',
      colors: ['#49290f', '#ffc45f', '#d17745', '#fff0bc', '#c78446', '#fff4e7', '#161616', '#f1f1f1']
    },
    {
      name: 'Burgundy-pink',
      colors: ['#8c323d', '#40151f', '#6e0700', '#d45863', '#cd7483', '#f8f8f8', '#ffcece', '#f1f1f1']
    },
    {
      name: 'Gray-blue',
      colors: ['#294552', '#00070a', '#597884', '#4f6c78', '#9eb9b3', '#76939d', '#f0f0f0', '#f1f1f1']
    },
    {
      name: 'Huckleberry',
      colors: ['#2c3953', '#7891c7', '#8393ff', '#889edb', '#657db2', '#e7f1ff', '#0d0d0d', '#f1f1f1']
    }
  ]
}

export default (state = INITITAL_STATE, action) => {
  const { payload } = action

  switch(action.type) {
    case SET_PLAYERS_NUMBER:
      return ({...state, numberOfPlayers: payload})
    case SET_QUESTIONS_NUMBER:
      return ({...state, numberOfQuestions: payload})
    case SET_PRICE_MULTIPLIER:
      return ({...state, priceMultiplier: payload})

    case SET_UI_GAME_WIDTH:
      return ({...state, uiWidth: payload})

    case SET_THEME:
      return ({...state, activeTheme: payload })

    case SAVE_STATE_TO_LOCAL_STORAGE:
      return state

    case LOAD_STATE_FROM_LOCAL_STORAGE:
      return ({...state, ...payload.settings})
    default: 
      return state
  }
}