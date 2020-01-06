import { Visitor } from "./Visitor";
import { Gatekeeper } from "./Gatekeeper";

export class VisitRecord {
  constructor (
    private visitor: Visitor,
    private gateKeeper: Gatekeeper,
    private startVisit: Date,
    private endVisit?: Date) {}

  set checkOut (endVisit: Date) {
    this.endVisit = endVisit
  }
}
