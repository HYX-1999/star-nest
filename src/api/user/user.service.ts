/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 14:27:55
 */

import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(user: User) {
    const data = await this.userRepository.save(user)
    return data
  }

  async findByPage(pageNum: number, pageSize: number, nickname: string) {
    console.log('pageNum', pageNum)
    console.log('pageSize', pageSize)
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
