import {
  Visitor,
  Gatekeeper,
  VisitRecord
} from '../entities'

export interface CreateRecordVisitService {
  createVisitRecord (visitor: Visitor, gatekeeper: Gatekeeper, startVisit: Date): Promise<VisitRecord>
}

export class RecordVisitInteractor {
  constructor (private recordVisitService: CreateRecordVisitService) {}

  // TODO: Don't pass visitor and gatepeer
  async recordVisit (visitor: Visitor, gatekeeper: Gatekeeper): Promise<VisitRecord> {
    const date = new Date()
    return this.recordVisitService.createVisitRecord(visitor, gatekeeper, date)
  }
}
