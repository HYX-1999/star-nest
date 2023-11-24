/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-24 17:40:21
 */

import { Module } from '@nestjs/common'
import { RedisService } from './redis.service'
import { RedisController } from './redis.controller'

@Module({
  controllers: [RedisController],
  exports: [RedisService],
  providers: [RedisService],
})
export class RedisModule {}
