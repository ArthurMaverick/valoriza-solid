import { Controller, HttpResponse, Validation } from '../rules'
import { badRequest, serverError, ok, forbidden } from '../helpers/http-helper'
import { NameInUseError } from '../errors'
import { CreateTag } from '../../domain/usecases'

export namespace TagController {
  export type Request = {
    name: string

  }
}

export class TagsRegisterController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly CreateTag: CreateTag
    // add authentication
  ) {}

  async handle (request: TagController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      const { name } = request
      const dataOrNull = await this.CreateTag.createTag({ name })
      if (!dataOrNull) {
        return forbidden(new NameInUseError())
      }

      return ok(dataOrNull)
    } catch (err) {
      console.log(err)
      return serverError(err)
    }
  }
}
