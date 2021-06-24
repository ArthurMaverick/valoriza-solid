import { UserLogin } from '../../domain/usecases'
import { Controller, Validation, HttpResponse } from '../rules'
import { badRequest, serverError, unauthorized, ok } from '../helpers/http-helper'

export class LoginController implements Controller {
  constructor (
    private readonly authetication: UserLogin,
    private readonly validation: Validation
  ) {}

  async handle (resquest: LoginController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(resquest)
      if (error) {
        return badRequest(error)
      }

      const authetication = await this.authetication.userLogin(resquest)
      if (!authetication) {
        return unauthorized()
      }
      console.log(authetication)
      return ok(authetication)
    } catch (error) {
      console.log(error)
      serverError(error)
    }
  }
}

export namespace LoginController {
  export type Request = {
    email: string
    password: string
  }
}
