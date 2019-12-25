class Visitor {
  constructor(
    private firstName: string,
    private lastName: string,
    private personalId: number) {}

  get fullName() : String {
    return `${this.firstName} ${this.lastName}`
  }

  set id (id: number) {
    this.personalId = id
  }

  get id () : number {
    return this.personalId
  }
}

export default Visitor
