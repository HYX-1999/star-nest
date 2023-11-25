/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-25 17:05:49
 */

import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import { jwtConstants } from '../api/auth/constants'
import { tokenError } from '../common/exception'

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1] // Assuming JWT is sent in Authorization header
    if (token) {
      try {
        const decodedToken = jwt.verify(token, jwtConstants.secret)
        req.user = {
          userId: decodedToken.sub,
        }
      } catch (error) {
        throw new tokenError('token过期或token错误，请重新登录')
      }
    }

    next()
  }
}
