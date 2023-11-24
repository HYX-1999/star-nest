/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-24 17:39:59
 */

import { Injectable } from '@nestjs/common'
import Redis from 'ioredis'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class RedisService {
  private readonly redisClient: Redis

  constructor(private configService: ConfigService) {
    this.redisClient = new Redis({
      port: 6379, // Redis 服务器的端口
      host: '127.0.0.1', // Redis 服务器的主机名
      password: 'redis5698',
    })
  }

  setValue(key: string, value: string, time: number = 2 * 60 * 60 * 24) {
    return this.redisClient.setex(key, time, value)
  }

  getValue(key: string) {
    return this.redisClient.get(key)
  }

  setWithExpiry(key: string, value: string, time: number) {
    return this.redisClient.setex(key, time, value)
  }

  async getAllKeys(pattern: string) {
    const keys = await this.redisClient.keys(pattern)
    return keys
  }

  delValue(key: string) {
    return this.redisClient.del(key)
  }

  async setHashField(key: string, field: string, value: string) {
    return this.redisClient.hset(key, field, value)
  }

  getHashField(key: string, field: string) {
    return this.redisClient.hget(key, field)
  }

  getAllHashFields(key: string) {
    return this.redisClient.hgetall(key)
  }
}
