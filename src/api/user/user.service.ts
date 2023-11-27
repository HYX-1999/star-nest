/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 14:27:55
 */

import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { RoleMenuService } from '../role-menu/role-menu.service'
import { MenuService } from '../menu/menu.service'
import getMenuList from 'src/utils/getMenuList'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly roleMenuService: RoleMenuService,
    private readonly menuService: MenuService,
  ) {}

  async create(user: User) {
    const data = await this.userRepository.save(user)
    return data
  }

  async findByPage(pageNum: number, pageSize: number, nickname: string) {
    const queryBuilder = this.userRepository
      .createQueryBuilder('user')
      .leftJoin('user.userRole', 'role')
      .addSelect(['role.id', 'role.roleName'])
      .where('user.nickname LIKE :nickname', { nickname: `%${nickname}` })
    const data = await queryBuilder
      .select()
      .orderBy('user.updateTime', 'DESC')
      .skip((pageNum - 1) * pageSize)
      .take(pageSize)
      .getMany()
    const total = await queryBuilder.getCount()
    return { records: data, total, pageSize, pageNum }
  }

  async findOne(id: number) {
    const data = await this.userRepository
      .createQueryBuilder('user')
      .leftJoin('user.userRole', 'role')
      .addSelect(['role.id', 'role.roleName'])
      .where('user.id=:id', { id })
      .getOne()
    const menuIds = await this.roleMenuService.findIdByRoleId(data.userRole.id)
    const list = await this.menuService.getMenuByIds(menuIds)
    data.menus = getMenuList(list)
    return data
  }

  async isExistUser(nickname: string) {
    const res = await this.userRepository
      .createQueryBuilder('user')
      .select()
      .addSelect('user.password')
      .leftJoin('user.userRole', 'role')
      .addSelect(['role.id', 'role.roleName'])
      .where('user.nickname=:nickname', { nickname })
      .getOne()
    return res
  }
}
