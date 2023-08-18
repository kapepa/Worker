import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommentsEntity} from "./entities/comments.entity";
import {ArticlesModule} from "../articles/articles.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentsEntity]),
    ArticlesModule
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService]
})
export class CommentsModule {}
