import { DbAuthentication } from '../../../data/usecases/db-login-user'
import { BcryptAdapter } from '../../../infra/criptography/bcrypt-adapter'
import { JwtAdapter } from '../../../infra/criptography/jwt-adapter'
import { UserLogin } from '../../../domain/usecases/user-login'
import { AccountPostgresRepository } from '../../../infra/repository/postgres/account-postgres-repository'

export const makeAuthentication = (): UserLogin => {
  const salt = 12
  const bcrypterAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter('6fa18a0ac995377c6582912a7524018c', '1d') // nlw md5
  const repository = new AccountPostgresRepository({
    user: 'shorAcs1' || process.env.USER,
    database: 'nlw' || process.env.DATABASE,
    password: 'postgres' || process.env.PASSWORD,
    host: 'localhost' || process.env.HOSTNAME,
    port: '8080' || process.env.PORT
  })
  return new DbAuthentication(bcrypterAdapter, jwtAdapter, repository, repository)
}
