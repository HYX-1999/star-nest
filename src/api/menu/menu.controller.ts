/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-24 18:13:50
 */

import { Controller } from '@nestjs/common'
import { MenuService } from './menu.service'

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
}
