/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:33:02
 */

import { Module } from '@nestjs/common'
import { RoleMenuService } from './role-menu.service'
import { RoleMenuController } from './role-menu.controller'
import { RoleMenu } from './entities/role-menu.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([RoleMenu])],
  controllers: [RoleMenuController],
  providers: [RoleMenuService],
  exports: [RoleMenuService],
})
export class RoleMenuModule {}
