import {IsEmail, IsNotEmpty, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AuthUsersDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly username: string;

  @IsNotEmpty()
  @MinLength(3, {message: "this firstname is wrong length"})
  @ApiProperty()
  readonly firstname: string;

  @IsNotEmpty()
  @MinLength(3, {message: "this lastname is wrong length"})
  @ApiProperty()
  readonly lastname: string;

  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6, {message: "this password is wrong length"})
  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly avatar?: string;

  @IsNotEmpty()
  @MinLength(3, {message: "this country is wrong length"})
  @ApiProperty()
  readonly country: string;

  @IsNotEmpty()
  @MinLength(3, {message: "this city is wrong length"})
  @ApiProperty()
  readonly city: string;
}