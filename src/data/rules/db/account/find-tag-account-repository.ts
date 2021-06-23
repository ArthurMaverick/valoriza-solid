import { AddTag } from '../../../../domain/usecases'

export interface FindTagAccountRepository {
  findTagById: (id: FindTagAccountRepository.Params) => Promise<FindTagAccountRepository.Result>
}

export namespace FindTagAccountRepository {
  export type Params = string // add type Either
  export type Result = AddTag.Result
}
