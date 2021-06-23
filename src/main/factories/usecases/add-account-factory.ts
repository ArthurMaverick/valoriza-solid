import { DbAddUser } from '../../../data/usecases/db-add-user'
import { CreateUser } from '../../../domain/usecases'
import { AccountPostgresRepository } from '../../../infra/repository/postgres/account-postgres-repository'
import { AddIdOnRepository } from '../../../infra/criptography/add-id'

export const makeDbAddUser = (): CreateUser => {
  const uuid = new AddIdOnRepository()
  const PostgresRepository = new AccountPostgresRepository()
  return new DbAddUser(
    uuid,
    PostgresRepository,
    PostgresRepository,
    PostgresRepository
  )
}
