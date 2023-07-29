import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UsersService} from "../users/users.service";

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post("/login")
  loginUsers(@Body() body) {
    return this.authService.loginUsers();
  }

  @Post("/registration")
  registrationUser(@Body() body) {
    return this.usersService.createUser(body);
  }
}
