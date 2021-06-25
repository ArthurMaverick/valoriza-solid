export interface CheckTagByIdRepository {
  checkByTagId: (TagId: CheckTagByIdRepository.Params)
    => Promise<CheckTagByIdRepository.Result>
}

export namespace CheckTagByIdRepository {
  export type Params = string
  export type Result = boolean
}
