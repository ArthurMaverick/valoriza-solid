export class InvalidParamError extends Error {
  constructor (InvalidparamName: string) {
    super(`invalid param: ${InvalidparamName}`)
    this.name = 'invalidParamError'
  }
}
