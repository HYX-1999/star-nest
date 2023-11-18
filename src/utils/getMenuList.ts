/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-18 16:52:15
 */

import { forEach, isNil } from 'lodash'
import { Menu } from 'src/api/menu/entities/menu.entity'

export default function getMenuList(list: Menu[]) {
  const menuMap: Map<number, Menu[]> = new Map()
  const rootList: Menu[] = []
  const sonList: Menu[] = []
  forEach(list, (item) => {
    item.children = []
    if (isNil(item.parentId)) {
      menuMap.set(item.id, [])
      rootList.push(item)
    } else {
      sonList.push(item)
    }
  })
  const newList: Menu[] = []
  forEach(sonList, (item) => {
    const hasKey = menuMap.has(item.parentId)
    if (hasKey) {
      const data = menuMap.get(item.parentId)
      menuMap.set(item.parentId, [...data, item])
    } else {
      newList.push(item)
    }
  })
  forEach(rootList, (item) => {
    newList.push({ ...item, children: menuMap.get(item.id) })
  })
  return newList
}
