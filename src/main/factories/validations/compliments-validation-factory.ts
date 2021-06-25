import { RequiredFieldValidation, ValidationComposite, CompareFieldsValidation } from '../../../validations/validators'
import { Validation } from '../../../presentation/rules/validation'

export const makeComplimentsValidation = (): ValidationComposite => {
  const validation: Validation[] = []
  for (const field of ['tag_id', 'user_sender', 'user_receiver', 'message']) {
    validation.push(new RequiredFieldValidation(field))
  }
  validation.push(new CompareFieldsValidation('user_sender', 'user_receiver'))
  return new ValidationComposite(validation)
}
