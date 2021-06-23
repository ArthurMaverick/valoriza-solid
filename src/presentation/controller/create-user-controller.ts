import { Controller, HttpResponse } from '../rules'

export class SignUpController implements Controller {
  async handle (request: SignUpController.Request): Promise<HttpResponse> {
    return new Promise(resolve => resolve({ statuscode: '200' }))
  };
}

export namespace SignUpController {
  export type Request = {
    name: string
    email: string
    admin: boolean
  }
}
