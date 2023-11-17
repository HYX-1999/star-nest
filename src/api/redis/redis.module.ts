/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 14:13:05
 */

import { Module } from '@nestjs/common'
import { RedisService } from './redis.service'
import { RedisController } from './redis.controller'

@Module({
  controllers: [RedisController],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
