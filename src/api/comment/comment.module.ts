/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:28:28
 */

import { Module } from '@nestjs/common'
import { Comment } from './entities/comment.entity'
import { CommentService } from './comment.service'
import { CommentController } from './comment.controller'
import { User } from '../user/entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Comment, User])],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
