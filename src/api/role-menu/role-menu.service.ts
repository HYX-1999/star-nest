/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-18 14:45:34
 */

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { RoleMenu } from './entities/role-menu.entity'
import { Repository } from 'typeorm'

@Injectable()
export class RoleMenuService {
  constructor(@InjectRepository(RoleMenu) private readonly roleMenuRepository: Repository<RoleMenu>) {}

  async findIdByRoleId(roleId: number) {
    const data: RoleMenu[] = await this.roleMenuRepository.query(
      'select menu_id menuId from t_role_menu where role_id=?',
      [roleId],
    )
    const menuIds = data.map((item) => item.menuId)
    return menuIds
  }
}
