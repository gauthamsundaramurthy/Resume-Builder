import * as actionTypes from './actionTypes'

export function saveBasicInfo (field, value) {
  return {
    type: actionTypes.SAVE_BASIC_INFO,
    field,
    value
  }
}

export function saveSectionInfo (infoLevel, field, value) {
  return {
    type: actionTypes.SAVE_SECTION_INFO,
    infoLevel,
    field,
    value
  }
}

export function addDynamicField (section) {
  return {
    type: actionTypes.ADD_DYNAMIC_FIELD,
    section
  }
}

export function updateFieldValues (section, index, value) {
  return {
    type: actionTypes.UPDATE_FIELD_VALUES,
    section,
    index,
    value
  }
}
