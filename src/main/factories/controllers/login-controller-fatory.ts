import { makeLoginValidation } from '../validations'
import { makeAuthentication } from '../usecases'
import { LoginController } from '../../../presentation/controller/login-controller'
import { Controller } from '../../../presentation/rules'

export const makeLoginController = (): Controller => {
  return new LoginController(makeAuthentication(), makeLoginValidation())
}
