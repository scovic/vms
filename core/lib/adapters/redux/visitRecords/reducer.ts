import { StateSlice, initial } from './state'

import {
  VisitRecordsActionType,
  SAVE_VISIT_RECORD
} from './actions'

const saveVisitRecordHandler = (state: StateSlice, action: VisitRecordsActionType): StateSlice => {
  return [action.visitRecord]
}

export const visitRecordReducer = (
  state: StateSlice = initial,
  action: VisitRecordsActionType): StateSlice => {
    switch (action.type) {
      case SAVE_VISIT_RECORD:
        return saveVisitRecordHandler(state, action)
      default:
        return null
    }
  }
