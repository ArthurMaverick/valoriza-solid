import { PostgresUtils } from './helpers/postgres-utils'
import {
  AddAccountRepository,
  CheckAccountByEmailRepository,
  FindUserAccountRepository,
  CheckTagByNameRepository,
  AddTagAccountRepository,
  FindTagAccountRepository
} from '../../../data/rules/db'

export class AccountPostgresRepository implements
  CheckAccountByEmailRepository,
  CheckTagByNameRepository,
  AddAccountRepository,
  AddTagAccountRepository,
  FindUserAccountRepository,
  FindTagAccountRepository {
    private readonly PostgresHelper: PostgresUtils
    constructor (config: object) {
      this.PostgresHelper = new PostgresUtils(config)
    }

    async checkByEmail (email: string): Promise<CheckAccountByEmailRepository.Result> {
      await this.PostgresHelper.createConnection()
      const isvalid = await this.PostgresHelper.client
        .query(`SELECT email FROM users WHERE email='${email}'`)
      return isvalid.rows[0]
    }

    async checkByTagName (tagName: string): Promise<CheckTagByNameRepository.Result> {
      await this.PostgresHelper.createConnection()
      const isvalid = await this.PostgresHelper.client
        .query(`SELECT email FROM tags WHERE name='${tagName}'`)
      return isvalid.rows[0]
    }

    async addUser (data: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
      await this.PostgresHelper.createConnection()
      await this.PostgresHelper.client
        .query(`INSERT INTO users (id,name,email,admin) values ('${data.id}','${data.name}','${data.email}','${data.admin}')`)
      const response = await this.PostgresHelper.client
        .query(`SELECT * FROM users WHERE id='${data.id}'`)
      return response.rows[0]
    }

    async addTags (data: AddTagAccountRepository.Params): Promise<AddTagAccountRepository.Result> {
      await this.PostgresHelper.createConnection()
      await this.PostgresHelper.client
        .query(`INSERT INTO tags (id,name) values ('${data.id}','${data.name}')`)
      const response = await this.PostgresHelper.client
        .query(`SELECT * FROM tags WHERE id='${data.id}'`)
      return response.rows[0]
    }

    async findUserById (id: FindUserAccountRepository.Params):Promise<FindUserAccountRepository.Result> {
      const response = await this.PostgresHelper.client
        .query(`SELECT * FROM users WHERE id='${id}'`)
      return response.rows[0]
    }

    async findTagById (id: FindTagAccountRepository.Params): Promise<FindTagAccountRepository.Result> {
      const response = await this.PostgresHelper.client
        .query(`SELECT * FROM tags WHERE id='${id}'`)
      return response.rows[0]
    }
}
