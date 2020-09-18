import { combineReducers } from 'redux'
import settingsReducer from './settingsReducer'
import gameReducer from './gameReducer'

export default combineReducers({
  settings: settingsReducer,
  game: gameReducer
})