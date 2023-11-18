/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:30:03
 */

import { Module } from '@nestjs/common'
import { MessageService } from './message.service'
import { MessageController } from './message.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Message } from './entities/message.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
