/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-24 18:14:20
 */

import { Controller } from '@nestjs/common'
import { ResourceService } from './resource.service'

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}
}
