/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 11:38:57
 */

import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { Result } from 'src/common/result'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
