import { Validation } from '../../presentation/rules'
import { InvalidParamError } from '../../presentation/errors'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldNameCompare: string
  ) {}

  validate (input: any): Error {
    if (input[this.fieldName] === input[this.fieldNameCompare]) {
      return new InvalidParamError(this.fieldNameCompare)
    }
  }
}
