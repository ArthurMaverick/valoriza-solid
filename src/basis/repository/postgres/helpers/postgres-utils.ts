import { Pool, ClientConfig, QueryResult, PoolClient } from 'pg'

// export class PostgresUtils {
//   private readonly client: Pool

//   constructor (private readonly config: ClientConfig) {
//     this.client = new Pool(config)
//   }

//   async createConnection () {
//     const callback = await this.client.connect()
//     callback ? console.log('conectado') : console.error(callback)
//   }

//   async desconnect () {
//     await this.client.end()
//     console.log('desconectado')
//   }

//   async query (data: string) {
//    return await this.client.query(data)

//   }
// }

export const PostgresHelper = {
  pool: null as Pool,
  client: null as Promise<PoolClient>,
  config: null as ClientConfig,
  async createConnection (config: ClientConfig): Promise<void> {
    this.pool = new Pool(config)
    this.config = config
    this.client = this.pool.connect()
  },

  //   async desconnect (): Promise<void> {
  //     await this.client.end()
  //     console.log('desconectado')
  // },
  async query (data: string): Promise<QueryResult<any>> {
    await (await this.client).connect()
    return await (await this.client).query(data)
  }
}
