import { EmailValidator } from '../../validations/rules'
import validator from 'validator'

export class EmailValidatorAdpter implements EmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
