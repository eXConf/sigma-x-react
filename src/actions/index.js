import history from '../history'
import {
  RESET_GAME,
  
  SET_PLAYERS_NUMBER,
  SET_QUESTIONS_NUMBER,
  SET_PRICE_MULTIPLIER,

  CREATE_PLAYER,
  SET_PLAYER_NAME,

  SET_CURRENT_QUESTION_NUM,
  SET_PLAYER_ANSWER,
  ADD_SUBJECT,
  RESET_SUBJECTS,
  SET_SUBJECT_NAMES
} from './types'

//#region SETTINGS
export const setPlayersNumber = (num) => (dispatch) => {
  dispatch({ type: SET_PLAYERS_NUMBER, payload: num })
}

export const setQuestionsNumber = (num) => (dispatch) => {
  dispatch({ type: SET_QUESTIONS_NUMBER, payload: num })
}

export const setPriceMultiplier = (multiplier) => {
  return ({ type: SET_PRICE_MULTIPLIER, payload: multiplier })
}

//#endregion

export const resetGame = () => (dispatch) => {
  dispatch ({ type: RESET_GAME, payload: '' })
  history.push('/')
}

export const setCurrentQuestionNum = (num) => {
  return ({ type: SET_CURRENT_QUESTION_NUM, payload: num })
}

export const createPlayers = () => (dispatch, getState) => {
  const numOfPlayers = getState().settings.numberOfPlayers
  const players = []
  for (let i = 0; i < numOfPlayers; i++) {
    players.push({
      name: `Игрок ${i}`,
      team: '',
      answers: []
    })
  }
  dispatch({ type: CREATE_PLAYER, payload: [...players] })
}

export const setPlayerName = ({ name, id}) => (dispatch, getState) => {
  const { players } = getState().game
  players[id].name = name
  dispatch({ type: SET_PLAYER_NAME, payload: [...players] })
}

export const setPlayerAnswer = 
  ({ playerID, questionID, score}) => (dispatch, getState) => {
  const { players } = getState().game
  const currentScore = players[playerID].answers[questionID]
  if (score === currentScore) {
    players[playerID].answers[questionID] = null
  } else {
    players[playerID].answers[questionID] = score
  }
  dispatch({
    type: SET_PLAYER_ANSWER,
    payload: [...players]
  })
}

export const addSubject = () => (dispatch, getState) => {
  const subjects = [...getState().game.subjects]
  const newSubjectNumber = subjects.length + 1
  const newSubjectName = getState().game.subjectNames[newSubjectNumber - 1] ||
    `Тема #${newSubjectNumber}`
  subjects.push(newSubjectName)
  
  dispatch({ type: ADD_SUBJECT, payload: [...subjects] })
}

export const resetSubjects = () => (dispatch) => {
  dispatch({ type: RESET_SUBJECTS, payload: [] })
}

export const setSubjectNames = (names) => (dispatch, getState) => {
  const newGame = {...getState().game}
  newGame.subjectNames = [...names]
  newGame.subjects.map((el, index) => {
    return newGame.subjects[index] = newGame.subjectNames[index] || `Тема #${index + 1}`
  })
  dispatch({ type: SET_SUBJECT_NAMES, payload: newGame})
}