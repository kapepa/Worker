import {IsEmail, IsNotEmpty, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AuthLoginDto {
  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6, {message: "this password is wrong length"})
  @ApiProperty()
  readonly password: string;
}