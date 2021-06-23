import { Validation } from '../../../presentation/rules'
import { RequiredFieldValidation, ValidationComposite } from '../../../validations/validators'

export const makeTagValidator = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['name']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
