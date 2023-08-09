import {Body, Controller, Get, HttpStatus, Put, Req, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {AuthGuard} from "../auth/guard/auth.guard";
import {Observable, of, switchMap} from "rxjs";
import {UsersEntityInterfaces} from "./interfaces/users.interfaces";
import {ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get('/profile')
  @ApiResponse({ status: 200, description: 'Get user by token.'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  getProfile(@Req() req): Observable<UsersEntityInterfaces> {
    return this.usersService.findOne({where: { id: req.user.id }});
  }

  @UseGuards(AuthGuard)
  @Get('/profile-full')
  @ApiResponse({ status: 200, description: 'Get full user data'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  getProfileFull(@Req() req): Observable<UsersEntityInterfaces>{
    return this.usersService.findOne({where: { id: req.user.id }});
  }

  @UseGuards(AuthGuard)
  @Put('/update')
  @ApiResponse({ status: 200, description: 'Update succes user'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'User not found or an error occurred while updating'})
  updateUser(@Req() req, @Body() body: UsersEntityInterfaces): Observable<UsersEntityInterfaces> {
    return this.usersService.updateUser(req.user.id, body);
  }
}
