import { all, put, takeLatest } from 'redux-saga/effects'
import { Visitor, Gatekeeper } from '../../entities'
import { createVisitRecordAction } from './visitRecords/actions'
import { RecordVisitInteractor } from '../../useCases'
import { VisitRecordService } from '../../services'

export const RECORD_VISIT = 'visitRecord/save'

export interface RecordVisitActionType {
  type: string
  firstName: string
  lastName: string
}

export const recordVisitAction = (firstName: string, lastName: string): RecordVisitActionType => {
  return {
    type: RECORD_VISIT,
    firstName,
    lastName
  }
}

function * recordVisitSaga (action: RecordVisitActionType) {
  const { firstName, lastName } = action

  try {
    const gatekeeper = new Gatekeeper('Stefan', 'Covic')
    const visitor = new Visitor(firstName, lastName)

    const visitRecordService = new VisitRecordService()
    const recordVisitInteractor = new RecordVisitInteractor(visitRecordService)

    const visitRecord = yield recordVisitInteractor.recordVisit(visitor, gatekeeper)
    yield put(createVisitRecordAction(visitRecord))
  } catch (err) {
    console.error(err)
    // TODO: Handle this error better
  }
}

export function * rootSaga () {
  yield all([
    takeLatest(RECORD_VISIT, recordVisitSaga)
  ])
}
