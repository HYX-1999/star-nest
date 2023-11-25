/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 14:24:18
 */

import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { UserService } from '../user/user.service'
import { LoginError } from 'src/common/exception'
import { User } from '../user/entities/user.entity'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { RedisService } from '../redis/redis.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwt: JwtService,
    private readonly redisService: RedisService,
  ) {}

  async login(nickname: string, password: string) {
    const userInfo = await this.userService.isExistUser(nickname)
    const flag = await bcrypt.compare(password, userInfo.password)
    if (userInfo && flag) {
      this.redisService.setValue(`user:${userInfo.id}`, JSON.stringify({ roleId: userInfo.userRole.id }))
      const token = await this.jwt.signAsync({ nickname: userInfo.nickname, sub: userInfo.id })
      delete userInfo.password
      return token
    }
    throw new LoginError('账号或密码错误')
  }

  async register(registerUser: CreateUserDto) {
    const userFlag = await this.userService.isExistUser(registerUser.nickname)
    if (userFlag) {
      throw new LoginError('用户已存在')
    }
    const user = new User()
    user.nickname = registerUser.nickname
    user.password = await bcrypt.hash(registerUser.password, 10)
    return this.userService.create(user)
  }
}
