/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:43:06
 */

import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('get')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello()
  }
}
