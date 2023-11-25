/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-24 17:26:43
 */

import { Injectable } from '@nestjs/common'
import { Resource } from './entities/resource.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'

@Injectable()
export class ResourceService {
  constructor(@InjectRepository(Resource) private readonly resourceRepository: Repository<Resource>) {}

  async getResourceByIds(ids: number[]) {
    return this.resourceRepository.find({ where: { id: In(ids) } })
  }
}
