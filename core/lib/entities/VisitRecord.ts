import { Visitor } from './Visitor'
import { Gatekeeper } from './Gatekeeper'

export class VisitRecord {
  constructor (
    private readonly visitor: Visitor,
    private readonly gatekeeper: Gatekeeper,
    private readonly startVisit: Date,
    private endVisit?: Date) {}

  set checkOut (endVisit: Date) {
    this.endVisit = endVisit
  }

  get visitorInfo (): Visitor {
    return this.visitor
  }

  get gatekeeperInfo (): Gatekeeper {
    return this.gatekeeper
  }

  get startVisitDateString (): string {
    return this.startVisit.toDateString()
  }
}
