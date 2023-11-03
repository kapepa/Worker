import { Module } from '@nestjs/common';
import { NoticeController } from './notice.controller';
import { NoticeService } from './notice.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { NoticeEntity } from "./entities/notice.entity";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([NoticeEntity]),
    UsersModule
  ],
  controllers: [NoticeController],
  providers: [NoticeService],
  exports: [NoticeService]
})
export class NoticeModule {}
