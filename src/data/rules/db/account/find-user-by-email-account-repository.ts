// import { AddUser } from '../../../../domain/usecases'

export interface FindUserByEmailAccountRepository {
  findUserByEmail: (email: FindUserByEmailAccountRepository.Params) => Promise<FindUserByEmailAccountRepository.Result>
}

export namespace FindUserByEmailAccountRepository {
  export type Params = string // add type Either
  export type Result = any
}
