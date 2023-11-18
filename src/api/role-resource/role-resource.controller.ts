/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-18 15:18:44
 */

import { Controller, Get, Param } from '@nestjs/common'
import { RoleResourceService } from './role-resource.service'
import { Result } from 'src/common/result'

@Controller('role-resource')
export class RoleResourceController {
  constructor(private readonly roleResourceService: RoleResourceService) {}

  @Get('role/:roleId')
  async findIdByRoleId(@Param('roleId') roleId: number) {
    return new Result(await this.roleResourceService.findIdByRoleId(roleId))
  }
}
