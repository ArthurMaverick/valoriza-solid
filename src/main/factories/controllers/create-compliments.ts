import { Controller } from '../../../presentation/rules'
import { ComplimentsRegisterController } from '../../../presentation/controller'
import { makeComplimentsValidation } from '../validations/compliments-validation-factory'
import { makeDbCompliments } from '../usecases/add-compliments'

export const makeComplimentsController = (): Controller => {
  return new ComplimentsRegisterController(makeComplimentsValidation(), makeDbCompliments())
}
