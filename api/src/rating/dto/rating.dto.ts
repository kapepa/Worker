import {UsersEntityInterfaces} from "../../users/interfaces/users.interfaces";
import {ApiProperty} from "@nestjs/swagger";
import {IsInt} from 'class-validator';
import {ArticlesDto} from "../../articles/dto/articles.dto";
import {UsersDto} from "../../users/dto/users.dto";

export class RatingDto {
  @ApiProperty()
  readonly id?: string;

  @IsInt()
  @ApiProperty()
  readonly rate: number;

  @ApiProperty()
  readonly text?: string;

  @ApiProperty()
  readonly users?: UsersEntityInterfaces;

  @ApiProperty()
  readonly articles?: ArticlesDto;

  @ApiProperty()
  readonly profile?: UsersDto;

  @ApiProperty()
  readonly createdAt?: Date;
}