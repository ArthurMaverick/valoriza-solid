export class NameInUseError extends Error {
  constructor () {
    super('The received Name is already in use')
    this.name = 'NameInUseError'
  }
}
