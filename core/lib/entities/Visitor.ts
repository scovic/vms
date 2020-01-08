export class Visitor {
  constructor (
    private readonly firstName: string,
    private readonly lastName: string) {}

  get fullName (): String {
    return `${this.firstName} ${this.lastName}`
  }

  get getFirstName (): String {
    return this.firstName
  }

  get getLastName (): String {
    return this.lastName
  }
}
