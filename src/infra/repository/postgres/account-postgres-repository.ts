import { PostgresUtils } from './helpers/postgres-utils'
import { AddAccountRepository, CheckAccountByEmailRepository, FindUserAccountRepository } from '../../../data/rules/db'

export class AccountPostgresRepository implements
  CheckAccountByEmailRepository,
  AddAccountRepository,
  FindUserAccountRepository {
    private readonly PostgresHelper: PostgresUtils
    constructor (config: object) {
      this.PostgresHelper = new PostgresUtils(config)
    }

    async checkByEmail (email: string): Promise<CheckAccountByEmailRepository.Result> {
      await this.PostgresHelper.createConnection()
      const isvalid = await this.PostgresHelper.client
        .query(`SELECT email FROM nlw WHERE email='${email}'`)
      return isvalid.rows[0]
    }

    async addUser (data: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
      await this.PostgresHelper.createConnection()
      await this.PostgresHelper.client
        .query(`INSERT INTO nlw (id,name,email,admin) values ('${data.id}','${data.name}','${data.email}','${data.admin}')`)
      const response = await this.PostgresHelper.client
        .query(`SELECT * FROM nlw WHERE id='${data.id}'`)
      return response.rows[0]
    }

    async findUserById (id: FindUserAccountRepository.Params):Promise<FindUserAccountRepository.Result> {
      const response = await this.PostgresHelper.client
        .query(`SELECT * FROM nlw WHERE id='${id}'`)
      return response.rows[0]
    }
}
