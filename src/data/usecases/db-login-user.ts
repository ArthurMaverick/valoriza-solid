import { UserLogin, Login } from '../../domain/usecases/user-login'
import { HashCompare, Encrypter, CheckAccountByEmailRepository, FindUserByEmailAccountRepository, UpdateAccessTokenRepository } from '../rules'

export class DbAuthentication implements UserLogin {
  constructor (
    private readonly hashCompare: HashCompare,
    private readonly jwt: Encrypter,
    private readonly checkAccountByEmail: CheckAccountByEmailRepository,
    private readonly findUserAccountRepository: FindUserByEmailAccountRepository,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository

  ) {}

  async userLogin (login: Login.Params): Promise<Login.Result> {
    const emailExits = await this.checkAccountByEmail.checkByEmail(login.email)

    if (emailExits) {
      const account = await this.findUserAccountRepository.findUserByEmail(login.email)
      const isValid = await this.hashCompare.compare(login.password, account.password)

      if (isValid) {
        const token = await this.jwt.encrypter(account.email, account.id)
        await this.updateAccessTokenRepository.updateAccessToken(account.id, token)
        return {
          id: account.id,
          accessToken: token
        }
      }
    }
    return false
  }
}
