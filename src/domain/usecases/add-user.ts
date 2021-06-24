export namespace AddUser {
  export type Params = {
  name: string
  email: string
  password: string
  admin?: boolean
  }

  export type User = {
    id: string
    name: string
    email: string
    password: string
    admin: boolean
    created_At: Date
    updated_At: Date
  } | boolean

}
export interface CreateUser {
  createUser: (incompleteUser: AddUser.Params) => Promise<AddUser.User >
}
