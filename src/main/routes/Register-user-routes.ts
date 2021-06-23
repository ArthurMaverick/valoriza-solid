import { adaptRoute } from '../adapters/express-router-adapter'
import { makeSignUpController } from '../factories'
import { Router } from 'express'

export default (router: Router) => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
