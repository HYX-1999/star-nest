/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:33:43
 */

import { Module } from '@nestjs/common'
import { RoleResourceService } from './role-resource.service'
import { RoleResourceController } from './role-resource.controller'
import { RoleResource } from './entities/role-resource.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([RoleResource])],
  controllers: [RoleResourceController],
  providers: [RoleResourceService],
  exports: [RoleResourceService],
})
export class RoleResourceModule {}
