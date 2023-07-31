import {Body, Controller, HttpStatus, Post, ValidationPipe} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthLoginDto} from "./dto/auth-login.dto";
import {AuthUsersDto} from "./dto/auth-users.dto";
import {ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Observable} from "rxjs";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('/login')
  @ApiResponse({ status: 201, description: 'The token has been successfully created.'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'There was an authorization error.'})
  signIn(@Body(new ValidationPipe()) body: AuthLoginDto): Observable<{access_token: string}> {
    return this.authService.signIn(body);
  }

  @Post("/sign-up")
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'this letter already exists.'})
  signUp(@Body(new ValidationPipe()) body: AuthUsersDto): Observable<boolean> {
    return this.authService.signUp(body);
  }
}
