import {
  SET_PLAYERS_NUMBER
} from './types'

export const setPlayersNumber = (num) => (dispatch) => {
  dispatch({ type: SET_PLAYERS_NUMBER, payload: num })
}

