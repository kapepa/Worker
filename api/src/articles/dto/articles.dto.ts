import {ArticlesBlocks, ArticlesTypeKey} from "../interfaces/articles.interface";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";
import {BlocksDto} from "./blocks.dto";

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
}