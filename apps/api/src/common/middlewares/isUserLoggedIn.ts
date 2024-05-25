import { NextFunction, Request, Response } from 'express'
import { ResponseService } from '@/common/services/response'
import { UNKNOWN_ERROR_OCCURRED, USER_NOT_AUTHORIZED } from '@/common/constants'
import jwt, { Secret } from 'jsonwebtoken'
import users from '@/models/users'
import { SIGN_KEY } from '../constants/ev'

const response = new ResponseService()

const isUserLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerHeader = req.headers["authorization"]
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    try {
      const { username }: any = jwt.verify(
        bearerToken as string,
        SIGN_KEY as Secret
      );
      const user = await users.findOne({
        username,
      }).populate("campaignId", "_id title").exec();
      res.locals.user = user
      next()
    } catch (err: any) {
      const message = err.message ? err.message : UNKNOWN_ERROR_OCCURRED
      response.error({
        message: message,
      })
    }
  } else {
    res.json(
      response.error({
        message: USER_NOT_AUTHORIZED,
      })
    )
  }
}

export default isUserLoggedIn
