/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:43:25
 */

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Response } from './common/response'
import { ValidationPipe } from '@nestjs/common'
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  app.useGlobalInterceptors(new Response())

  app.useGlobalPipes(new ValidationPipe())

  app.use(
    session({
      secret: 'xingxing',
      resave: false,
      saveUninitialized: false,
    }),
  )

  await app.listen(3000)
}
bootstrap()
