/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:35:42
 */

import { Module } from '@nestjs/common'
import { TalkCommentService } from './talk-comment.service'
import { TalkCommentController } from './talk-comment.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TalkComment } from './entities/talk-comment.entity'
import { User } from '../user/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([TalkComment, User])],
  controllers: [TalkCommentController],
  providers: [TalkCommentService],
  exports: [TalkCommentService],
})
export class TalkCommentModule {}
