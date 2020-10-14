import { 
  RESET_GAME,
  ADD_SUBJECT,
  RESET_SUBJECTS,
  SET_SUBJECT_NAMES,
  SET_PACKAGE_TEXT,
  SET_CURRENT_QUESTION_NUM,
  SET_PLAYER_ANSWER,
  CREATE_PLAYER,
  SET_PLAYER_NAME,
  SET_UI_GAME_WIDTH,
  SAVE_STATE_TO_LOCAL_STORAGE,
  LOAD_STATE_FROM_LOCAL_STORAGE
 } from '../actions/types'

const INITITAL_STATE = {
  players: [],
  currentQuestionNum: 0,
  packageText: '',
  subjects: ['Тема #1', 'Тема #2', 'Тема #3'],
  subjectNames: []
}

export default (state = INITITAL_STATE, action) => {
  const { payload } = action

  switch(action.type) {
    case RESET_GAME:
      return { ...INITITAL_STATE }
    
    case CREATE_PLAYER:
      return {...state, players: payload}
    
    case SET_PLAYER_NAME:
      return {...state, players: payload}

    case SET_CURRENT_QUESTION_NUM:
      return {...state, currentQuestionNum: payload}

    case SET_PLAYER_ANSWER: 
      return {...state, players: payload}

    case ADD_SUBJECT:
      return {...state, subjects: payload}

    case SET_PACKAGE_TEXT:
      return {...state, packageText: payload}

    case RESET_SUBJECTS:
      return {
        ...state, 
        subjects: [...INITITAL_STATE.subjects], 
        subjectNames: []
      }
    case SET_SUBJECT_NAMES:
      return {...payload}

    case SET_UI_GAME_WIDTH:
      return state
    default: 
      return state
  }
}