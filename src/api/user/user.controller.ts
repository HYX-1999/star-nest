/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 17:33:14
 */

import { Controller, Get, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { Result } from 'src/common/result'
import { isEmpty, isNil } from 'lodash'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/page')
  async findByPage(
    @Query('pageNum') pageNum: number,
    @Query('pageSize') pageSize: number,
    @Query('nickname') nickname: string,
  ) {
    return new Result(
      await this.userService.findByPage(
        !isNil(pageNum) && !isEmpty(pageNum) ? pageNum : 1,
        !isNil(pageSize) && !isEmpty(pageSize) ? pageSize : 10,
        nickname,
      ),
    )
  }
}
