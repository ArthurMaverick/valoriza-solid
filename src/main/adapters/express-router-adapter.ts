import { Controller } from '../../presentation/rules'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const { body, statuscode } = await controller.handle(req.body)

    if (Number(statuscode) >= 200 && Number(statuscode) <= 299) {
      res.status(Number(statuscode)).json(body)
    } else {
      res.status(Number(statuscode)).json({ error: body.message })
    }
  }
}
