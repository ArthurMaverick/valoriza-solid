import { AccountPostgresRepository } from '../../../infra/repository/postgres/account-postgres-repository'
import { AddIdOnRepository } from '../../../infra/criptography/add-id'
import { DbAddTag } from '../../../data/usecases/db-add-tag'
import { CreateTag } from '../../../domain/usecases'
require('dotenv').config()
export const makeAddTagName = (): CreateTag => {
  const uuid = new AddIdOnRepository()
  const Repository = new AccountPostgresRepository({
    user: 'shorAcs1' || process.env.USER,
    database: 'nlw' || process.env.DATABASE,
    password: 'postgres' || process.env.PASSWORD,
    host: 'localhost' || process.env.HOSTNAME,
    port: '8080' || process.env.PORT
  })

  return new DbAddTag(
    uuid,
    Repository,
    Repository,
    Repository
  )
}
