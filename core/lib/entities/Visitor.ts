export  class Visitor {
  constructor(
    private firstName: string,
    private lastName: string) {}

  get fullName() : String {
    return `${this.firstName} ${this.lastName}`
  }
}
