import { HttpResponse } from './http'

export interface Controller<Request = any> {
  handle: (resquest: Request) => Promise<HttpResponse>
}
