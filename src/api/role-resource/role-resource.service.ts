/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-18 15:12:58
 */

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { RoleResource } from './entities/role-resource.entity'
import { Repository } from 'typeorm'

@Injectable()
export class RoleResourceService {
  constructor(@InjectRepository(RoleResource) private readonly roleResourceRepository: Repository<RoleResource>) {}

  async findIdByRoleId(roleId: number) {
    const data: RoleResource[] = await this.roleResourceRepository.query(
      'select resource_id resourceId from t_role_resource where role_id=?',
      [roleId],
    )
    const resourceIds = data.map((item) => item.resourceId)
    return resourceIds
  }
}
