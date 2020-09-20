import {
  SET_PLAYERS_NUMBER,
  SET_QUESTIONS_NUMBER,
  SET_PRICE_MULTIPLIER,

  CREATE_PLAYER,
  SET_PLAYER_NAME,

  SET_CURRENT_QUESTION_NUM,
  SET_PLAYER_ANSWER,
  ADD_SUBJECT
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

export const setCurrentQuestionNum = (num) => {
  return ({ type: SET_CURRENT_QUESTION_NUM, payload: num })
}

export const createPlayer = (id) => (dispatch, getState) => {
  const { players } = getState().game
  players.push({
    name: `Игрок ${id}`,
    team: '',
    answers: []
  })
  dispatch({ type: CREATE_PLAYER, payload: {...players} })
}

export const setPlayerName = ({ name, id}) => (dispatch, getState) => {
  const { players } = getState().game
  players[id].name = name
  dispatch({ type: SET_PLAYER_NAME, payload: {...players}})
}

export const setPlayerAnswer = 
  ({ playerID, questionID, scoreSign}) => (dispatch, getState) => {
  const { players } = getState().game
  const currentSign = players[playerID].answers[questionID]
  if (scoreSign === currentSign) {
    players[playerID].answers[questionID] = null
  } else {
    players[playerID].answers[questionID] = scoreSign
  }
  dispatch({
    type: SET_PLAYER_ANSWER,
    payload: {...players}
  })
}

export const addSubject = () => (dispatch, getState) => {
  const { subjects } = getState().game
  const newSubjectNumber = subjects.length + 1
  const newSubjectName = getState().game.subjectNames[newSubjectNumber] ||
    `Тема #${newSubjectNumber}`
  subjects.push(newSubjectName)
  
  dispatch({ type: ADD_SUBJECT, payload: {...subjects} })
}