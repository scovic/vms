import { VisitRecord } from '../../../entities'

export const UPDATE_VISIT_RECORD = 'UPDATE_VISIT_RECORD'
export const SAVE_VISIT_RECORD = 'SAVE_VISIT_RECORD'

export interface VisitRecordsActionType {
  type: string,
  visitRecord: VisitRecord
}

export const updateVisitRecordsAction = (visitRecord: VisitRecord): VisitRecordsActionType => {
  return {
    type: UPDATE_VISIT_RECORD,
    visitRecord
  }
}

export const createVisitRecordAction = (visitRecord: VisitRecord): VisitRecordsActionType => {
  return {
    type: SAVE_VISIT_RECORD,
    visitRecord
  }
}
