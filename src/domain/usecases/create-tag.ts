export namespace AddTag {

  export type Params = {
    name: string
  }
  export type Result = {
    id: string
    name: string
    created_At: Date
    updated_At: Date
  } | boolean // TODO ADD EITHER TYPE AFTER CREATE JWT

}
export interface CreateTag {
  createTag: (tagName: AddTag.Params) => Promise<AddTag.Result>
}
