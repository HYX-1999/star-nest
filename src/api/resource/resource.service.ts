/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-24 17:26:43
 */

import { Injectable } from '@nestjs/common'
import { Resource } from './entities/resource.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ResourceService {
  constructor(@InjectRepository(Resource) private readonly resourceRepository: Repository<Resource>) {}

  async getResourceByIds(ids: number[]) {
    const queryBuilder = this.resourceRepository.createQueryBuilder('resource')
    const resources = await queryBuilder.where('resource.id IN (:...ids)', { ids }).getMany()
    return resources
  }
}
