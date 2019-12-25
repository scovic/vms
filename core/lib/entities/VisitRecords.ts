import VisitRecord from './VisitRecord'
import Visitor from './visitor';
import Gatekeeper from './Gatekeeper';

class VisitRecords {
  constructor (private records: Array<VisitRecord> = []) {}
  
  recordVisit (visitor: Visitor, gatekeeper: Gatekeeper) : void {
    const dateRecord: Date = new Date()
    const visitRecord: VisitRecord = new VisitRecord(visitor, gatekeeper, dateRecord)

    this.records.push(visitRecord)
  }
}

export default VisitRecords
