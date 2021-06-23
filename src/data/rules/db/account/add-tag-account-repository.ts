import { AddTag } from '../../../../domain/usecases'

export interface AddTagAccountRepository {
  addTags: (tagName: AddTagAccountRepository.Params)
  => Promise<AddTagAccountRepository.Result>
}

export namespace AddTagAccountRepository {
  type Id = {
    id?: string
  }
  export type Params = AddTag.Params & Id
  export type Result = AddTag.Result
}
