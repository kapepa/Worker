import {Module} from '@nestjs/common';
import * as dotenv from "dotenv";
import {ConfigModule, ConfigService} from '@nestjs/config';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users/entities/users.entity";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path';
import {FileModule} from './file/file.module';
import {ArticlesModule} from './articles/articles.module';
import {ArticlesEntity} from "./articles/entities/articles.entity";
import {BlocksEntity} from "./articles/entities/blocks.entity";
import {CommentsModule} from './comments/comments.module';
import {CommentsEntity} from "./comments/entities/comments.entity";
import {NoticeModule} from './notice/notice.module';
import {NoticeEntity} from "./notice/entities/notice.entity";
import {RatingModule} from './rating/rating.module';
import {RatingEntity} from "./rating/entities/rating.entity";

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [
          UsersEntity,
          ArticlesEntity,
          BlocksEntity,
          CommentsEntity,
          NoticeEntity,
          RatingEntity,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    FileModule,
    ArticlesModule,
    CommentsModule,
    NoticeModule,
    RatingModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
