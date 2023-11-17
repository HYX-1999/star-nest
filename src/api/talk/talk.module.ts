/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:34:50
 */

import { Module } from '@nestjs/common'
import { TalkService } from './talk.service'
import { TalkController } from './talk.controller'
import { Share } from 'src/utils/share'
import { Talk } from './entities/talk.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Talk]), Share],
  controllers: [TalkController],
  providers: [TalkService],
  exports: [TalkService],
})
export class TalkModule {}
