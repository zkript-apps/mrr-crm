import { NextFunction, Request, Response } from 'express'
import { ResponseService } from '@/common/services/response'
import { USER_NOT_AUTHORIZED } from '@/common/constants'

const response = new ResponseService()

const isUserAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user
  if (user) {
    if(user?.role === "Admin") {
      next()
    } else {
      res.json(
        response.error({
          message: USER_NOT_AUTHORIZED,
        })
      )
    }
  } else {
    res.json(
      response.error({
        message: USER_NOT_AUTHORIZED,
      })
    )
  }
}

export default isUserAdmin
