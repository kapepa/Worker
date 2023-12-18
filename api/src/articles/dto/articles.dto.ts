import {ArticlesTypeKey} from "../interfaces/articles.interface";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";
import {BlocksDto} from "./blocks.dto";
import {RatingInterface} from "../../rating/interfaces/rating.interface";
import {RatingDto} from "../../rating/dto/rating.dto";

export class ArticlesDto {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @ApiProperty()
  subtitle: string;

  @IsNotEmpty()
  @ApiProperty()
  img: string;

  @IsNotEmpty()
  @ApiProperty()
  views: number;

  @ApiProperty()
  createdAt: Date;

  @IsNotEmpty()
  @ApiProperty()
  type: ArticlesTypeKey[];

  @IsNotEmpty()
  @ApiProperty()
  blocks: BlocksDto[];

  @ApiProperty()
  rating?: RatingDto[]
}