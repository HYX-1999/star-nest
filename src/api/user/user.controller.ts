/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 17:33:14
 */

import { Controller } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
