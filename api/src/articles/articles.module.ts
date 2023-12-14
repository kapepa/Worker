import {forwardRef, Module} from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticlesEntity} from "./entities/articles.entity";
import {BlocksEntity} from "./entities/blocks.entity";
import {RatingModule} from "../rating/rating.module";
import {CommentsModule} from "../comments/comments.module";
import {FileModule} from "../file/file.module";

@Module({
  imports: [
    FileModule,
    forwardRef(() => RatingModule),
    forwardRef(() => CommentsModule),
    TypeOrmModule.forFeature([ArticlesEntity, BlocksEntity]),
  ],
  controllers: [
    ArticlesController
  ],
  providers: [
    ArticlesService,
  ],
  exports: [ArticlesService]
})
export class ArticlesModule {}
