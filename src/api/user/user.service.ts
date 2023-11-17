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
