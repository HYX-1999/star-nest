/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-18 15:22:05
 */

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Menu } from './entities/menu.entity'
import { Repository } from 'typeorm'

@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private readonly menuRepository: Repository<Menu>) {}

  async getMenuByIds(ids: number[]) {
    const queryBuilder = this.menuRepository.createQueryBuilder('menu')
    const menus = await queryBuilder.where('menu.id IN (:...ids)', { ids }).getMany()
    return menus
  }
}
