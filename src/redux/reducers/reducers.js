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
    case actionsTypes.UPDATE_FIELD_VALUES:
      // return Object.assign({}, state, {
      //   [action.section]: Object.assign({}, state = state[action.section], 
      //     { 'additionalInfo':   state['additionalInfo'].map((data, index) => {
      //       if (index === action.index) {
      //         return Object.assign({}, state['additionalInfo'][index], {
      //           'field': action.value
      //         })
      //       }
      //       return data
      //     })
      //     })
      // })
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          additionalInfo: state[action.section]['additionalInfo'].map((data, index) => {          
            if (index !== action.index) {
              console.log(index)
              console.log(action.index)
              return data
            }
            return {
              field: action.value
            }
          })
        }
      }
    default:
      return state
  }
}

// chatHistory: Object.assign({}, state = state.chatHistory, {
//   [action.data.channel_id]: state[action.data.channel_id].map((messageObj, index) => {
//     if (messageObj.messageId === action.data.message_id) {
//       return Object.assign({}, state[action.data.channel_id][index], {
//         viewedStatus: 2
//       })
//     }
//     return messageObj
//   })
// })

