import { Response as Res, Request as Req, Router } from 'express'

export default (router: Router) => {
  router.get('/clean', (req:Req, res: Res) => {
    res.json({
      success: 'Running'
    })
  })
}
