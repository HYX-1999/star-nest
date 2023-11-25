/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:24:53
 */

import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { MenuModule } from '../menu/menu.module'
import { RoleMenuModule } from '../role-menu/role-menu.module'

@Module({
  imports: [TypeOrmModule.forFeature([User]), RoleMenuModule, MenuModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
