import {ArticlesDto} from "../../articles/dto/articles.dto";
import {BlocksDto} from "../../articles/dto/blocks.dto";
import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../enum/role.enum";
import {NoticeDto} from "../../notice/dto/notice.dto";
import {RatingInterface} from "../../rating/interfaces/rating.interface";
import {RatingDto} from "../../rating/dto/rating.dto";

export class UsersDto {
  @ApiProperty()
  id?: string

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
  notice?: NoticeDto[]

  @ApiProperty()
  rating?: RatingDto[]

  @ApiProperty()
  ratingProfile?: RatingDto[]

  @ApiProperty()
  isActive?: boolean
}