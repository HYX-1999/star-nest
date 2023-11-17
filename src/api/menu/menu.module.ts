/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:29:32
 */

import { Module } from '@nestjs/common'
import { MenuService } from './menu.service'
import { MenuController } from './menu.controller'
import { Menu } from './entities/menu.entity'
import { Share } from 'src/utils/share'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Menu]), Share],
  controllers: [MenuController],
  providers: [MenuService],
  exports: [MenuService],
})
export class MenuModule {}
