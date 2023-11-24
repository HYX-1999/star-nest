/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 11:38:57
 */

import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { Result } from 'src/common/result'
import { User } from '../user/entities/user.entity'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /** 登录 */
  @Post('login')
  async login(@Body() userInfo: User) {
    const { nickname, password } = userInfo
    const data = await this.authService.login(nickname, password)
    return new Result(data)
  }

  /** 注册 */
  @Post('register')
  async register(@Body() userInfoDto: CreateUserDto) {
    if (userInfoDto.password !== userInfoDto.confirmPwd) {
      return new Result('密码不一致', 406)
    }
    const data = await this.authService.register(userInfoDto)
    return new Result(data)
  }
}
