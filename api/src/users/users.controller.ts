import {Body, Controller, Get} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/myself')
  getMyself(@Body() body) {
    return this.usersService.getMyself();
  }

}
