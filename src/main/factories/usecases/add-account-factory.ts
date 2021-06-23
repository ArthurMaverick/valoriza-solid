import { DbAddUser } from '../../../data/usecases/db-add-user'
import { CreateUser } from '../../../domain/usecases'
import { AccountPostgresRepository } from '../../../infra/repository/postgres/account-postgres-repository'
import { AddIdOnRepository } from '../../../infra/criptography/add-id'
require('dotenv').config()

export const makeDbAddUser = (): CreateUser => {
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
    PostgresRepository, // validade
    PostgresRepository, // find
    PostgresRepository // create
  )
}
