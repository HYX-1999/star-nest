/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:43:17
 */

import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }
}
