import { HttpResponse } from '../rules'
import { ServerError, UnauthorizedError } from '../errors'

export const badRequest = (error: Error): HttpResponse => ({
  statuscode: '400',
  body: error
})

export const forbidden = (error: Error): HttpResponse => ({
  statuscode: '403',
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statuscode: '401',
  body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
  statuscode: '500',
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  statuscode: '200',
  body: data
})

export const noContent = (): HttpResponse => ({
  statuscode: '204',
  body: null
})
