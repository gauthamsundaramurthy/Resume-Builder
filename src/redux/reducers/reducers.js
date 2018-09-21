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
    case actionsTypes.ADD_DYNAMIC_FIELD:
      return Object.assign({}, state, {
        [action.section]: { ...state[action.section], 'additionalInfo': [...state[action.section]['additionalInfo'], {'field': 'value'}] }
      })
    case actionsTypes.UPDATE_FIELD_VALUE:
      return Object.assign({}, state, {
        [action.section]: Object.assign({}, state = state[action.section], 
          { 'additionalInfo':   state['additionalInfo'].map((data, index) => {
            if (index === Number(action.index)) {
              return Object.assign({}, state['additionalInfo'][index], {
                [action.fieldName]: action.fieldValue
              })
            }
            return data
          })
        })
      })
    case actionsTypes.UPDATE_FIELD_NAME:
      state[action.section]['additionalInfo'].map((data, index) => {
        if (index === Number(action.index)) {
          state[action.section]['additionalInfo'][index] = {}
        }
        return state
      })
      return Object.assign({}, state, {
        [action.section]: Object.assign({}, state = state[action.section], 
          { 'additionalInfo':   state['additionalInfo'].map((data, index) => {
            if (index === Number(action.index)) {
              return Object.assign({}, state['additionalInfo'][index], {
                [action.fieldName]: action.fieldValue
              })
            }
            return data
          })
        })
      })   
    default:
      return state
  }
}
