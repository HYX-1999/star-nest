/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-18 15:22:05
 */

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Menu } from './entities/menu.entity'
import { In, Repository } from 'typeorm'

@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private readonly menuRepository: Repository<Menu>) {}

  async getMenuByIds(ids: number[]) {
    return this.menuRepository.find({ where: { id: In(ids) } })
  }
}
