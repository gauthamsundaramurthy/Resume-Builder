import * as actionsTypes from '../actions/actionTypes'
import {initialState} from './initialState'

export function saveBasicDetails (state = initialState.resume, action) {
  switch (action.type) {
    case actionsTypes.SAVE_BASIC_INFO:
      return Object.assign({}, state, {
        [action.field]: action.value
      })
    case actionsTypes.SAVE_SECTION_INFO:
      return Object.assign({}, state, {
        [action.infoLevel]: { ...state[action.infoLevel], [action.field]: action.value }
      })
    default:
      return state
  }
}
