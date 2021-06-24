import { DbAddUser } from '../../../data/usecases/db-add-user'
import { CreateUser } from '../../../domain/usecases'
import { AccountPostgresRepository } from '../../../infra/repository/postgres/account-postgres-repository'
import { AddIdOnRepository, BcryptAdapter } from '../../../infra/criptography'
require('dotenv').config()

export const makeDbAddUser = (): CreateUser => {
  const salt = 12
  const bcrypterAdapter = new BcryptAdapter(salt)
  const uuid = new AddIdOnRepository()

  const PostgresRepository = new AccountPostgresRepository({
    user: 'shorAcs1' || process.env.USER,
    database: 'nlw' || process.env.DATABASE,
    password: 'postgres' || process.env.PASSWORD,
    host: 'localhost' || process.env.HOSTNAME,
    port: '8080' || process.env.PORT
  })
  return new DbAddUser(
    uuid,
    bcrypterAdapter,
    PostgresRepository, // validade
    PostgresRepository, // find
    PostgresRepository // create
  )
}
