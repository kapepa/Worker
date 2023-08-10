import {
  Body,
  Controller,
  Get,
  HttpStatus, ParseFilePipe, ParseFilePipeBuilder,
  Post,
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
  @UseInterceptors(FilesInterceptor("avatar", 1000, createMulterOptions()))
  @ApiResponse({ status: 200, description: 'Update succes user'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'User not found or an error occurred while updating'})
  updateUser(@Req() req, @UploadedFiles() avatar: Express.Multer.File, @Body() body: UsersEntityInterfaces): Observable<UsersEntityInterfaces> {
    const toBody = JSON.parse(JSON.stringify(body));
    const { filename } = avatar[0];

    if( filename ) toBody.avatar = filename;
    return this.usersService.updateUser(req.user.id, toBody).pipe(
      catchError(() => {
        if( filename ) return this.fileService.removeFile(filename);
      })
    );
  }

  @Post("/file")
  @UseInterceptors(FilesInterceptor("avatar", 1000, createMulterOptions()))
  fileLoader(@UploadedFiles() avatar: Express.Multer.File, @Body() body: UsersEntityInterfaces){
    const toBody = JSON.parse(JSON.stringify(body));
    const { filename } = avatar[0]
  }
}
