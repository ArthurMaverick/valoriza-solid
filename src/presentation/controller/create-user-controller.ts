import { Controller, HttpResponse, Validation } from '../rules'
import { badRequest, serverError, ok, forbidden } from '../helpers/http-helper'
import { EmailInUseError } from '../errors/email-in-use-error'
import { CreateUser } from '../../domain/usecases'
export class SignUpController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly dbAddUser: CreateUser

  ) {}

  async handle (request: SignUpController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      const { name, email, admin } = request
      const dataOrNull = await this.dbAddUser.createUser({ name, email, admin })
      if (!dataOrNull) {
        return forbidden(new EmailInUseError())
      }

      return ok(dataOrNull)
    } catch (err) {
      return serverError(err)
    }
  }
}

export namespace SignUpController {
  export type Request = {
    name: string
    email: string
    admin?: boolean
  }
}
