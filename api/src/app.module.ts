import {Module} from '@nestjs/common';
import * as dotenv from "dotenv";
import {ConfigModule, ConfigService} from '@nestjs/config';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./users/entities/users.entity";
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import { FileModule } from './file/file.module';

dotenv.config()

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
        entities: [UsersEntity],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    FileModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
