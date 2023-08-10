import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from "./users.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./entities/users.entity";
import {FileModule} from "../file/file.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
    FileModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
