import { Pool, ClientConfig } from 'pg'

export class PostgresUtils {
   client: Pool

   constructor (private config: ClientConfig) {
     this.client = new Pool(config)
   }

   async createConnection () {
     const callback = await this.client.connect()
     callback ? console.log('conectado ao Postgres') : console.error(callback)
   }

   async desconnect () {
     await this.client.end()
     console.log('desconectado do Postgres')
   }
}
