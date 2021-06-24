export interface Encrypter {
  encrypter: (plaintext: Encrypter.Params, subject:Encrypter.Params) => Promise<Encrypter.Result>
}
export namespace Encrypter {
export type Params = string

export type Result = string
}
