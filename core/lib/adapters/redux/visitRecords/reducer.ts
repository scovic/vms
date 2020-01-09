import { StateSlice, initial } from './state'

import {
  VisitRecordsActionType,
  SAVE_VISIT_RECORD
} from './actions'

const saveVisitRecordHandler = (state: StateSlice, action: VisitRecordsActionType): StateSlice => {
  const newState = !state ? [action.visitRecord] : [...state, action.visitRecord] 
  return newState
}

export const visitRecordReducer = (
  state: StateSlice = initial,
  action: VisitRecordsActionType): StateSlice => {
  switch (action.type) {
    case SAVE_VISIT_RECORD:
      return saveVisitRecordHandler(state, action)
    default:
      return state
  }
}
