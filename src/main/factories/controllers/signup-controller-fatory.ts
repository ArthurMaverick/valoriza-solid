import { makeDbAddUser, makeSignUpValidation } from '../index'
import { SignUpController } from '../../../presentation/controller/create-user-controller'
import { Controller } from '../../../presentation/rules'

export const makeSignUpController = (): Controller => {
  return new SignUpController(makeSignUpValidation(), makeDbAddUser())
}
