import { adaptRoute } from '../adapters/express-router-adapter'
import { makeAddTagNameController } from '../factories'
import { Router } from 'express'

export default (router: Router) => {
  router.post('/createtag', adaptRoute(makeAddTagNameController()))
}
