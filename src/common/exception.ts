/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:06:13
 */

import { HttpException, HttpStatus } from '@nestjs/common'

export class LoginError extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED)
  }
}
