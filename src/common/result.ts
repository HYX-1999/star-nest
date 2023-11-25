/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 14:15:21
 */

export class Result {
  private data: any
  private code: number
  private msg: string
  private success: boolean
  private path: string
  constructor(data = null, code = 200, msg = null, success = true) {
    this.data = data
    this.code = code
    this.msg = msg
    this.success = success
  }
}
