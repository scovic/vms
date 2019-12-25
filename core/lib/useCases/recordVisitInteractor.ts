import Visitor from "../entities/visitor";
import Gatekeeper from "../entities/Gatekeeper";
import VisitRecord from "../entities/VisitRecord";

export interface RecordVisitService {
  saveVisitRecord (visitRecord: VisitRecord): Promise<VisitRecord>
}

export class RecordVisitInteractor {
  constructor (private recordVisitService: RecordVisitService) {}

  async recordVisit (visitor: Visitor, gatekeeper: Gatekeeper): Promise<VisitRecord> {
    const visitRecord = new VisitRecord(visitor, gatekeeper, new Date())
    return this.recordVisitService.saveVisitRecord(visitRecord)
  }
}
