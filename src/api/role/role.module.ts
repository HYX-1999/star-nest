/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:32:24
 */

import { Module } from '@nestjs/common'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { RoleMenuModule } from '../role-menu/role-menu.module'
import { RoleResourceModule } from '../role-resource/role-resource.module'
import { AuthModule } from '../auth/auth.module'
import { Role } from './entities/role.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Share } from 'src/utils/share'

@Module({
  imports: [TypeOrmModule.forFeature([Role]), RoleMenuModule, RoleResourceModule, AuthModule, Share],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
