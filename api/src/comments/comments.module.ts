import {forwardRef, Module} from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommentsEntity} from "./entities/comments.entity";
import {ArticlesModule} from "../articles/articles.module";
import {RatingModule} from "../rating/rating.module";

@Module({
  imports: [
    forwardRef(() => RatingModule),
    forwardRef(() =>  ArticlesModule),
    TypeOrmModule.forFeature([CommentsEntity]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService]
})
export class CommentsModule {}
