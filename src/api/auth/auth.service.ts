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
import getMenuList from 'src/utils/getMenuList'
import { ResourceService } from '../resource/resource.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwt: JwtService,
    private readonly roleMenuService: RoleMenuService,
    private readonly roleResourceService: RoleResourceService,
    private readonly menuService: MenuService,
    private readonly resourceService: ResourceService,
  ) {}

  async login(nickname: string, password: string) {
    const userInfo = await this.userService.isExistUser(nickname)
    const flag = await bcrypt.compare(password, userInfo.password)
    if (userInfo && flag) {
      const { menu } = await this.getPermission(userInfo.userRole.id)
      const token = await this.jwt.signAsync({ nickname: userInfo.nickname, sub: userInfo.id })
      delete userInfo.password
      userInfo.menus = menu
      return { userInfo, token }
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

  async getPermission(roleId: number) {
    const menuIds = await this.roleMenuService.findIdByRoleId(roleId)
    const resourceIds = await this.roleResourceService.findIdByRoleId(roleId)
    const list = await this.menuService.getMenuByIds(menuIds)
    const menu = getMenuList(list)
    const resource = await this.resourceService.getResourceByIds(resourceIds)
    return { menu, resource }
  }
}
