import { AddUser } from '../../../../domain/usecases'

export interface AddAccountRepository {
  addUser: (Userdata: AddAccountRepository.Params) => Promise<AddAccountRepository.Result>
}

export namespace AddAccountRepository {
  type Id = {
    id?: string
  }
  export type Params = AddUser.Params & Id
  export type Result = AddUser.User
}
