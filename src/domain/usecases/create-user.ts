export namespace AddUser {
  export type Params = {
  name: string
  email: string
  admin?: boolean
  }

  export type User = {
    id: string
    name: string
    email: string
    admin: boolean
    created_At: Date
    updated_At: Date
  } | boolean // TODO ADD EITHER TYPE AFTER CREATE JWT

}
export interface CreateUser {
  createUser: (incompleteUser: AddUser.Params) => Promise<AddUser.User >
}
