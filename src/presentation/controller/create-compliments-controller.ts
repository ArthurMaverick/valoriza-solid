import { Controller, Validation, HttpResponse } from '../rules'
import { ok, serverError, unauthorized, badRequest } from '../helpers/http-helper'
import { Compliments, CreateCompliments } from '../../domain/usecases/add-compliment'

export class ComplimentsRegisterController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly compliments: CreateCompliments
  ) {}

  async handle (request: Compliments.Params): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)

      const dataOrNull = await this.compliments.createCompliments(request)
      if (!dataOrNull) return unauthorized()

      return ok(dataOrNull)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
