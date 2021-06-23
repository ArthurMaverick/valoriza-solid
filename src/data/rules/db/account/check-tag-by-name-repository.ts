export interface CheckTagByNameRepository {
  checkByTagName: (Tagname: CheckTagByNameRepository.Params)
    => Promise<CheckTagByNameRepository.Result>
}

export namespace CheckTagByNameRepository {
  export type Params = string
  export type Result = boolean
}
