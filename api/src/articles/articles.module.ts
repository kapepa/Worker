import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticlesEntity} from "./entities/articles.entity";
import {BlocksEntity} from "./entities/blocks.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticlesEntity, BlocksEntity]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
  exports: [ArticlesService]
})
export class ArticlesModule {}
