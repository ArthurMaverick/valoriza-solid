import { Pool, ClientConfig } from 'pg'

export class PostgresUtils {
   client: Pool

   constructor (private readonly config: ClientConfig) {
     this.client = new Pool(config)
   }

   async createConnection () {
     const callback = await this.client.connect()
     callback ? console.log('conectado') : console.error(callback)
   }

   async desconnect () {
     await this.client.end()
     console.log('desconectado')
   }
}
