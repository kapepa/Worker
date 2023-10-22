import {Body, Controller, HttpStatus, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {createMulterOptions, FileService} from "./file.service";
import {Observable, of, switchMap} from "rxjs";

@ApiTags('file')
@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post("/record")
  @UseInterceptors(FileInterceptor("file", createMulterOptions()))
  @ApiResponse({ status: 201, description: 'Should be record file'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  record(@UploadedFile() file: Express.Multer.File, @Body() body:{ remove: string }): Observable<string> {
    const {remove} = JSON.parse(JSON.stringify(body));
    const removeFile = !!remove ? this.fileService.removeFile(remove) : of(true);

    return removeFile.pipe(
      switchMap(() => of(file.filename))
    )
  }
}
