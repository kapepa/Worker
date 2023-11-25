import {forwardRef, Module} from '@nestjs/common';
import {RatingController} from './rating.controller';
import {RatingService} from './rating.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RatingEntity} from "./entities/rating.entity";
import {ArticlesModule} from "../articles/articles.module";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [
    UsersModule,
    forwardRef(() => ArticlesModule),
    TypeOrmModule.forFeature([RatingEntity]),
  ],
  controllers: [RatingController],
  providers: [RatingService],
  exports: [RatingService],
})
export class RatingModule {}
