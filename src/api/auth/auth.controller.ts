/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 11:38:57
 */

import { Controller } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async register() {
    // const arrVal = []
  }
}
