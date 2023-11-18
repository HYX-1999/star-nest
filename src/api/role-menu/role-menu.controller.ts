/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-18 14:59:59
 */

import { Controller, Get, Param } from '@nestjs/common'
import { RoleMenuService } from './role-menu.service'
import { Result } from 'src/common/result'

@Controller('role-menu')
export class RoleMenuController {
  constructor(private readonly roleMenuService: RoleMenuService) {}

  @Get('role/:roleId')
  async findIdByRoleId(@Param('roleId') roleId: number) {
    return new Result(await this.roleMenuService.findIdByRoleId(roleId))
  }
}
