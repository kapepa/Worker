import {UsersDto} from "../../users/dto/users.dto";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class NoticeDto {
  @ApiProperty()
  id?: string;

  @IsNotEmpty()
  @ApiProperty()
  title?: string;

  @IsNotEmpty()
  @ApiProperty()
  description?: string;

  @ApiProperty()
  href?: string;

  @ApiProperty()
  read?: boolean;

  @ApiProperty()
  users?: UsersDto;

  @ApiProperty()
  createdAt?: Date;
}