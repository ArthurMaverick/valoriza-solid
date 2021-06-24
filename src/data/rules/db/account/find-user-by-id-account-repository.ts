import { AddUser } from '../../../../domain/usecases'

export interface FindUserAccountRepository {
  findUserById: (id: FindUserAccountRepository.Params) => Promise<FindUserAccountRepository.Result>
}

export namespace FindUserAccountRepository {
  export type Params = string // add type Either
  export type Result = AddUser.User
}
