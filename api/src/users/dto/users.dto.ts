import {ArticlesDto} from "../../articles/dto/articles.dto";
import {BlocksDto} from "../../articles/dto/blocks.dto";
import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../enum/role.enum";

export class UsersDto {
  @IsNotEmpty()
  @ApiProperty()
  username?: string

  @IsNotEmpty()
  @ApiProperty()
  firstname?: string

  @IsNotEmpty()
  @ApiProperty()
  lastname?: string

  @IsNotEmpty()
  @ApiProperty()
  email?: string

  @IsNotEmpty()
  @ApiProperty()
  password?: string

  @ApiProperty()
  avatar?: string

  @IsNotEmpty()
  @ApiProperty()
  country?: string

  @IsNotEmpty()
  @ApiProperty()
  city?: string

  @ApiProperty()
  roles?: Role[]

  @ApiProperty()
  articles?: ArticlesDto[]

  @ApiProperty()
  blocks?: BlocksDto[]

  @ApiProperty()
  isActive?: boolean
}