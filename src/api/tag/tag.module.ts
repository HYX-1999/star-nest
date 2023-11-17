/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:34:08
 */

import { Module } from '@nestjs/common'
import { TagService } from './tag.service'
import { TagController } from './tag.controller'
import { ArticleModule } from '../article/article.module'
import { Share } from 'src/utils/share'
import { Tag } from './entities/tag.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Tag]), ArticleModule, Share],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService],
})
export class TagModule {}
