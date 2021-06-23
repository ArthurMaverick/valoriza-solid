import { PostgresHelper } from './helpers/postgres-utils'
import { AddAccountRepository, CheckAccountByEmailRepository, FindUserAccountRepository } from '../../../data/rules/db'

export class AccountPostgresRepository implements
  CheckAccountByEmailRepository,
  AddAccountRepository,
  FindUserAccountRepository {
  async checkByEmail (email: string): Promise<CheckAccountByEmailRepository.Result> {
    const isvalid = await PostgresHelper.query(`SELECT email FROM nlw WHERE email='${email}'`)
    return isvalid.rows[0].email
  }

  async addUser (data: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
    await PostgresHelper.query(`INSERT INTO nlw (id,name,email,admin) values ('${data.id}','${data.name}','${data.email}','${data.admin}')`)
    const response = await PostgresHelper.query(`SELECT * FROM nlw WHERE id='${data.id}'`)
    return response.rows[0]
  }

  async findUserById (id: FindUserAccountRepository.Params):Promise<FindUserAccountRepository.Result> {
    const response = await PostgresHelper.query(`SELECT * FROM nlw WHERE id='${id}'`)
    return response.rows[0]
  }
}
