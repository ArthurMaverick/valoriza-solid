import { Compliments } from '../../../../domain/usecases'

export interface AddComplimentsAccountRepository {
  addCompliments: (complimentsData: AddComplimentsAccountRepository.Params)
  => Promise<AddComplimentsAccountRepository.Result>
}

export namespace AddComplimentsAccountRepository {
  type ID = {
    id: string
  }
  export type Params = Compliments.Params & ID
  export type Result = Compliments.Result
}
