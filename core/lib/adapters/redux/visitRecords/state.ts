import { StateType, initialState } from '../state'

export type StateSlice = StateType['visitRecords']

export const initial = initialState.visitRecords

export const visitRecordsSelector = (state: StateType) => state.visitRecords
