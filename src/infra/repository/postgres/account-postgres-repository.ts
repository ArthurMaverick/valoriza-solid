import { PostgresUtils } from './helpers/postgres-utils'
import {
  AddAccountRepository,
  CheckAccountByEmailRepository,
  FindUserAccountRepository,
  FindUserByEmailAccountRepository,
  CheckTagByNameRepository,
  CheckTagByIdRepository,
  AddTagAccountRepository,
  FindTagAccountRepository,
  AddComplimentsAccountRepository,
  LoadAccountByTokenRepository,
  UpdateAccessTokenRepository
} from '../../../data/rules/db'

export class AccountPostgresRepository implements
  CheckAccountByEmailRepository,
  CheckTagByNameRepository,
  CheckTagByIdRepository,
  AddAccountRepository,
  AddTagAccountRepository,
  AddComplimentsAccountRepository,
  FindUserAccountRepository,
  FindUserByEmailAccountRepository,
  FindTagAccountRepository,
//
  LoadAccountByTokenRepository,
  UpdateAccessTokenRepository {
    private readonly PostgresHelper: PostgresUtils
    constructor (config: object) {
      this.PostgresHelper = new PostgresUtils(config)
    }

    async loadByToken (token: string): Promise<LoadAccountByTokenRepository.Result> {
      await this.PostgresHelper.createConnection()
      const response = await this.PostgresHelper.client
        .query(`SELECT id FROM tokens WHERE token='${token}'`)
      return response.rows[0]
    }

    async updateAccessToken (id: string, token:string): Promise<void> {
      await this.PostgresHelper.createConnection()
      await this.PostgresHelper.client
        .query(`UPDATE tokens SET token=${token} WHERE id'${id}'`)
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
        .query(`SELECT name FROM tags WHERE name='${tagName}'`)
      return isvalid.rows[0]
    }

    async checkByTagId (tagId: string): Promise<CheckTagByIdRepository.Result> {
      await this.PostgresHelper.createConnection()
      const isvalid = await this.PostgresHelper.client
        .query(`SELECT id FROM tags WHERE id='${tagId}'`)
      return isvalid.rows[0]
    }

    async addCompliments (data: AddComplimentsAccountRepository.Params): Promise<AddComplimentsAccountRepository.Result> {
      await this.PostgresHelper.createConnection()
      await this.PostgresHelper.client
        .query(`INSERT INTO compliments (message,tag_id,user_receiver,user_sender,id) values ('${data.message}','${data.tag_id}','${data.user_receiver}','${data.user_sender}','${data.id}')`)
      const response = await this.PostgresHelper.client
        .query(`SELECT * FROM compliments WHERE id='${data.id}'`)
      return response.rows[0]
    }

    async addUser (data: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
      await this.PostgresHelper.createConnection()
      await this.PostgresHelper.client
        .query(`INSERT INTO users (id,name,email,password,admin) values ('${data.id}','${data.name}','${data.email}','${data.password}','${data.admin}')`)
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

    async findUserByEmail (email: FindUserAccountRepository.Params):Promise<FindUserAccountRepository.Result> {
      const response = await this.PostgresHelper.client
        .query(`SELECT * FROM users WHERE email='${email}'`)
      return response.rows[0]
    }

    async findUserById (id: FindUserByEmailAccountRepository.Params):Promise<FindUserByEmailAccountRepository.Result> {
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
