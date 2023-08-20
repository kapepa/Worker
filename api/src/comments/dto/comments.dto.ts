import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {ArticlesDto} from "../../articles/dto/articles.dto";
import {UsersDto} from "../../users/dto/users.dto";

export class CommentsDto {
  @IsNotEmpty()
  @ApiProperty()
  text: string;

  @ApiProperty()
  articles?: ArticlesDto;

  @ApiProperty()
  users?: UsersDto;
}