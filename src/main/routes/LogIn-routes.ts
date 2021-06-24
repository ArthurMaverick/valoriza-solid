import { adaptRoute } from '../adapters/express-router-adapter'
import { makeLoginController } from '../factories'
import { Router } from 'express'

export default (router: Router) => {
  router.post('/login', adaptRoute(makeLoginController()))
}
