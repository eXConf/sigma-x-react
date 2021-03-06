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
  SET_SUBJECT_NAMES,
  SET_PACKAGE_TEXT,

  SET_UI_GAME_WIDTH,

  SET_THEME,
  SET_USER_COLOR,

  SAVE_STATE_TO_LOCAL_STORAGE,
  LOAD_STATE_FROM_LOCAL_STORAGE
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

export const resetGame = ({resetPackage}) => (dispatch, getState) => {
  const {game} = getState()
  
  if (resetPackage) {
    game.subjects = ['Тема #1', 'Тема #2', 'Тема #3']
    game.subjectNames = []
    game.packageText = ""
  }

  dispatch ({ type: RESET_GAME, payload: game })
  history.push('/')
  dispatch( saveStateToLocalStorage() )
}

export const setCurrentQuestionNum = (num) => (dispatch) => {
  dispatch({ type: SET_CURRENT_QUESTION_NUM, payload: num })
  dispatch( saveStateToLocalStorage() )
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
  dispatch( saveStateToLocalStorage() )
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
  dispatch( saveStateToLocalStorage() )
}

export const addSubject = () => (dispatch, getState) => {
  const subjects = [...getState().game.subjects]
  const newSubjectNumber = subjects.length + 1
  const newSubjectName = getState().game.subjectNames[newSubjectNumber - 1] ||
    `Тема #${newSubjectNumber}`
  subjects.push(newSubjectName)
  
  dispatch({ type: ADD_SUBJECT, payload: [...subjects] })
  dispatch( saveStateToLocalStorage() )
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
  dispatch( saveStateToLocalStorage() )
}

export const setPackageText = (text) => (dispatch, getState) => {
  dispatch({ type: SET_PACKAGE_TEXT, payload: text})
  dispatch(saveStateToLocalStorage())
}

export const setUIGameWidth = (width) => (dispatch, getState) => {
  const numOfPlayers = getState().settings.numberOfPlayers
  const baseWidth = 130
  let gameWidth, playerScoreWidth
  if (width / numOfPlayers <= 120) {
    gameWidth = width
    playerScoreWidth = width / numOfPlayers
  } else if (width / numOfPlayers >= baseWidth) {
    gameWidth = numOfPlayers * baseWidth
    playerScoreWidth = baseWidth
  } else {
    gameWidth = width
    playerScoreWidth = width / numOfPlayers
  }
  document.documentElement.style.setProperty('--game-width', `${gameWidth}px`)
  document.documentElement.style.setProperty('--player-score-width', `${playerScoreWidth}px`)
  dispatch({ type: SET_UI_GAME_WIDTH, payload: gameWidth})
}

export const setTheme = (id) => (dispatch, getState) => {
  if (id === undefined) {
    id = getState().settings.activeTheme
  }
  const colors = getState().settings.themes[id].colors
  const keys = [
    '--theme-main',
    '--theme-dark',
    '--theme-darker',
    '--theme-light',
    '--theme-lighter',
    '--theme-bg',
    '--theme-text-dark',
    '--theme-text-light'
  ]
  colors.forEach((color, index) => {
    document.documentElement.style.setProperty(keys[index], color)
  })
  dispatch({ type: SET_THEME, payload: id })
  dispatch(saveStateToLocalStorage())
}

export const setUserColor = ({index, color}) => (dispatch, getState) => {
  const themes = getState().settings.themes
  themes[0].colors[index] = color

  dispatch({ type: SET_USER_COLOR, payload: themes })
  dispatch(setTheme(0))
}

let allowRecording = true

export const saveStateToLocalStorage = () => (dispatch, getState) => {
  if (allowRecording) {
    allowRecording = false

    setTimeout(() => {
      console.log('saved state to local storage')
      localStorage.setItem('state', JSON.stringify(getState()))
      allowRecording = true
    }, 1000);

  }
  dispatch({ type: SAVE_STATE_TO_LOCAL_STORAGE, payload: null })
}

export const loadStateFromLocalStorage = () => (dispatch, getState) => {
  const state = JSON.parse(localStorage.getItem('state'))
  if (state) {
    dispatch({ type: LOAD_STATE_FROM_LOCAL_STORAGE, payload: state })
  } else {
    dispatch({ type: LOAD_STATE_FROM_LOCAL_STORAGE, payload: getState() })
  }
}