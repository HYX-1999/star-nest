/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-24 17:42:59
 */

import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { ResourceModule } from '../resource/resource.module'
import { MenuModule } from '../menu/menu.module'
import { RoleResourceModule } from '../role-resource/role-resource.module'
import { RedisModule } from '../redis/redis.module'
import { RoleMenuModule } from '../role-menu/role-menu.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'
import { JwtStrategy } from './auth.strategy'

@Module({
  imports: [
    UserModule,
    PassportModule,
    ResourceModule,
    MenuModule,
    RoleResourceModule,
    RedisModule,
    RoleMenuModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
