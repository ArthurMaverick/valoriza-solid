export namespace AddUser {
  export type Params = {
  name: string
  email: string
  admin?: string
  }

  export type User = {
    id: string
    name: string
    email: string
    admin: boolean
    created_At: Date
    updated_At: Date
  } | boolean

}
export interface CreateUser {
  createUser: (incompleteUser: AddUser.Params) => Promise<AddUser.User >
}
