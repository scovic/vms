import { VisitRecord, Gatekeeper } from '../../entities'

export interface StateType {
  readonly visitRecords: VisitRecord[] | null
  readonly gatekeeper: Gatekeeper | null
}

export const initialState: StateType = {
  visitRecords: null,
  gatekeeper: null
}
