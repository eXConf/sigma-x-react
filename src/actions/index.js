import {
  SET_PLAYERS_NUMBER,
  SET_QUESTIONS_NUMBER,

  CREATE_PLAYER,
  SET_PLAYER_NAME,

  ADD_SUBJECT
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

export const addSubject = () => (dispatch, getState) => {
  const newSubjectNumber = getState().game.subjects.length + 1
  const newSubjectName = getState().game.subjectNames[newSubjectNumber] ||
    `Тема #${newSubjectNumber}`
  
  dispatch({ type: ADD_SUBJECT, payload: newSubjectName })
}