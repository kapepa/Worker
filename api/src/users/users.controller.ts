import {
  Body,
  Controller, Delete,
  Get,
  HttpStatus,
  Param,
  Put,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {UsersService} from "./users.service";
import {AuthGuard} from "../auth/guard/auth.guard";
import {catchError, Observable, of, switchMap} from "rxjs";
import {UsersEntityInterfaces} from "./interfaces/users.interfaces";
import {ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {createMulterOptions, FileService} from "../file/file.service";
import {FilesInterceptor, MulterModule} from "@nestjs/platform-express";
import {ReqProps} from "../shared/interfaces/ReqProps";


@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly fileService: FileService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('/profile')
  @ApiResponse({ status: 200, description: 'Get user by token.'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  getProfile(@Req() req: ReqProps): Observable<UsersEntityInterfaces> {
    return this.usersService.findOne({where: { id: req.user.id }});
  }

  @UseGuards(AuthGuard)
  @Get('/customer/:id')
  @ApiResponse({ status: 200, description: 'Get full user data'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  getProfileFull(@Req() req: ReqProps, @Param() param): Observable<UsersEntityInterfaces>{
    return this.usersService.findOne({where: { id: param.id }});
  }

  @UseGuards(AuthGuard)
  @Put('/update')
  @UseInterceptors(FilesInterceptor("avatar", 1000, createMulterOptions()))
  @ApiResponse({ status: 200, description: 'Update succes user'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'User not found or an error occurred while updating'})
  updateUser(@Req() req: ReqProps, @UploadedFiles() avatar: Express.Multer.File, @Body() body: UsersEntityInterfaces): Observable<UsersEntityInterfaces> {
    const toBody = JSON.parse(JSON.stringify(body));

    if(!!avatar?.[0]) toBody.avatar = avatar![0].filename
    return this.usersService.updateUser(req.user.id, toBody).pipe(
      catchError((err) => {
        if( !toBody.avatar && !!avatar ) this.fileService.removeFile(toBody.avatar).subscribe();
        return err;
      })
    );
  }

  @UseGuards(AuthGuard)
  @Delete("/delete/:id")
  @ApiResponse({ status: 200, description: 'Success delete user data'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong when delete user.'})
  deleteUser(@Param() param: {id: string}){
    const { id } = param;
    return this.usersService.deleteUser({id});
  }
}
