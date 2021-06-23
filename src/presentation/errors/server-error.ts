export class ServerError extends Error {
  constructor (stack: string) {
    super('intern server error')
    this.name = 'ServerError'
    this.stack = stack
  }
}
