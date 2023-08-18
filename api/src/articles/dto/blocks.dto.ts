import {ArticlesBlockType} from "../interfaces/blocks.interface";
import {IsArray, IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {ArticlesDto} from "./articles.dto";

export class BlocksDto {
  @IsNotEmpty()
  @ApiProperty()
  type: ArticlesBlockType;

  @IsString()
  @ApiProperty()
  code?: string;

  @IsString()
  @ApiProperty()
  src?: string;

  @IsString()
  @ApiProperty()
  title?: string;

  @IsArray()
  @ApiProperty()
  paragraphs?: string[]

  @ApiProperty()
  articles?: ArticlesDto
}