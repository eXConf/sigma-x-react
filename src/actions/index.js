import {
  SET_PLAYERS_NUMBER,
  SET_QUESTIONS_NUMBER,

  CREATE_PLAYER,
  SET_PLAYER_NAME,

  ADD_SUBJECT_BLOCK
} from './types'

export const setPlayersNumber = (num) => (dispatch) => {
  dispatch({ type: SET_PLAYERS_NUMBER, payload: num })
}

export const setQuestionsNumber = (num) => (dispatch) => {
  dispatch({ type: SET_QUESTIONS_NUMBER, payload: num })
}

export const createPlayer = (id) => {
  return { type: CREATE_PLAYER, payload: id }
}

export const setPlayerName = ({ name, id}) => {
  return { type: SET_PLAYER_NAME, payload: { name, id }}
}

export const addSubjectBlock = () => (dispatch, getState) => {
  //TODO replace null with an actual payload
  dispatch({ type: ADD_SUBJECT_BLOCK, payload: null })
}