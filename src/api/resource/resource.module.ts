/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:31:14
 */

import { Module } from '@nestjs/common'
import { ResourceService } from './resource.service'
import { ResourceController } from './resource.controller'
import { Resource } from './entities/resource.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Resource])],
  controllers: [ResourceController],
  providers: [ResourceService],
  exports: [ResourceService],
})
export class ResourceModule {}
