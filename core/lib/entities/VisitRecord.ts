import Visitor from "./visitor";
import Gatekeeper from "./Gatekeeper";

class VisitRecord {
  constructor (
    private visitor: Visitor,
    private gateKeeper: Gatekeeper,
    private startVisit: Date,
    private endVisit?: Date) {}

  set checkOut (endVisit: Date) {
    this.endVisit = endVisit
  }
}

export default VisitRecord
