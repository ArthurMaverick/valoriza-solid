import { TagsRegisterController } from '../../../presentation/controller'
import { Controller } from '../../../presentation/rules'
import { makeAddTagName } from '../usecases/add-tag-factory'
import { makeTagValidator } from '../validations/tag-validation-factory'

export const makeAddTagNameController = (): Controller => {
  return new TagsRegisterController(makeTagValidator(), makeAddTagName())
}
