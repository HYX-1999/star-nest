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
import { Share } from 'src/utils/share'

@Module({
  imports: [TypeOrmModule.forFeature([Message]), Share],
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
