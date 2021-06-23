import { Validation } from '../../../presentation/rules'
import { RequiredFieldValidation, ValidationComposite } from '../../../validations/validators'

export const makeTagValidator = (): ValidationComposite => {
  const validation: Validation[] = []

  // campo name deve ser posto no corpo da requisição
  for (const field of ['name']) {
    const res = new RequiredFieldValidation(field)
    validation.push(res)
  }
  return new ValidationComposite(validation)
}
