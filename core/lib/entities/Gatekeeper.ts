class Gatekeeper {
  constructor (private firstName: string, private lastName: string) {}

  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

export default Gatekeeper
