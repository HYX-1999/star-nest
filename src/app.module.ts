/*
 * @Description:
 * @Author: hyx
 * @Date: 2023-11-17 16:07:12
 */

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './api/auth/auth.module'
import { UserModule } from './api/user/user.module'
import { CommentModule } from './api/comment/comment.module'
import { ArticleModule } from './api/article/article.module'
import { TagModule } from './api/tag/tag.module'
import { MessageModule } from './api/message/message.module'
import { TalkModule } from './api/talk/talk.module'
import { TalkCommentModule } from './api/talk-comment/talk-comment.module'
import { RoleModule } from './api/role/role.module'
import { MenuModule } from './api/menu/menu.module'
import { ResourceModule } from './api/resource/resource.module'
import { RoleResourceModule } from './api/role-resource/role-resource.module'
import { RoleMenuModule } from './api/role-menu/role-menu.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST', 'localhost'), // 从环境变量获取，如果不存在则默认为 'localhost'
        port: configService.get<number>('DATABASE_PORT', 3306), // 从环境变量获取，如果不存在则默认为 3306
        username: configService.get<string>('DATABASE_USERNAME', 'root'), // 从环境变量获取，如果不存在则默认为 'root'
        password: configService.get<string>('DATABASE_PASSWORD', 'admin5698'), // 从环境变量获取，如果不存在则默认为 '123456'
        database: configService.get<string>('DATABASE_NAME', 'blog'), // 从环境变量获取，如果不存在则默认为 'blog'
        entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
        retryDelay: 500,
        retryAttempts: 10,
        autoLoadEntities: true,
      }),
      inject: [ConfigService], // 注入 ConfigService 依赖
    }),
    AuthModule,
    UserModule,
    CommentModule,
    ArticleModule,
    TagModule,
    MessageModule,
    TalkModule,
    TalkCommentModule,
    RoleModule,
    MenuModule,
    ResourceModule,
    RoleResourceModule,
    RoleMenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
