import { adaptRoute } from '../adapters/express-router-adapter'
import { makeComplimentsController } from '../factories/controllers'
import { Router } from 'express'

export default (router: Router) => {
  router.post('/createcompliments', adaptRoute(makeComplimentsController()))
}
