import { LoadAccountByToken } from '../../domain/usecases'
import { Decrypter, LoadAccountByTokenRepository } from '../rules/db'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypt: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, _role?: string): Promise<LoadAccountByToken.Result> {
    let token: string

    try {
      token = await this.decrypt.decrypter(accessToken)
    } catch (error) {
      return null
    }

    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(accessToken)
      if (account) {
        return account
      }
    }
    return null
  }
}
