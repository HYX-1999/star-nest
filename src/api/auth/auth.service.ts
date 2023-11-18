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
import { RoleMenuService } from '../role-menu/role-menu.service'
import { RoleResourceService } from '../role-resource/role-resource.service'
import { MenuService } from '../menu/menu.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly roleMenuService: RoleMenuService,
    private readonly roleResourceService: RoleResourceService,
    private readonly menuService: MenuService,
  ) {}

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

  async getPermission(roleId: number) {
    const menuIds = await this.roleMenuService.findIdByRoleId(roleId)
    const resourceIds = await this.roleResourceService.findIdByRoleId(roleId)
    const list = await this.menuService.getMenuByIds(menuIds)
    // const menu = getM
  }
}
