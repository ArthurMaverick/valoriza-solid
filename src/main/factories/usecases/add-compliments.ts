import { DbCompliments } from '../../../data/usecases/db-add-compliment'
import { CreateCompliments } from '../../../domain/usecases'
import { AccountPostgresRepository } from '../../../infra/repository/postgres/account-postgres-repository'
import { AddIdOnRepository } from '../../../infra/criptography'
require('dotenv').config()

export const makeDbCompliments = (): CreateCompliments => {
  const uuid = new AddIdOnRepository()

  const PostgresRepository = new AccountPostgresRepository({
    user: 'shorAcs1' || process.env.USER,
    database: 'nlw' || process.env.DATABASE,
    password: 'postgres' || process.env.PASSWORD,
    host: 'localhost' || process.env.HOSTNAME,
    port: '8080' || process.env.PORT
  })
  return new DbCompliments(
    uuid,
    PostgresRepository,
    PostgresRepository,
    PostgresRepository
  )
}
