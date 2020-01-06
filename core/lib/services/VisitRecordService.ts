import { CreateRecordVisitService } from '../useCases'
import { Gatekeeper, VisitRecord, Visitor } from '../entities'

export class VisitRecordService implements CreateRecordVisitService {
  async createVisitRecord (visitor: Visitor, gatekeeper: Gatekeeper, startVisit: Date): Promise<VisitRecord> {
    return Promise.resolve(new VisitRecord(visitor, gatekeeper, startVisit))
  }
}
