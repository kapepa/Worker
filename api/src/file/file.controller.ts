import {Controller, HttpStatus, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {createMulterOptions} from "./file.service";

@ApiTags('file')
@Controller('file')
export class FileController {

  @Post("/record")
  @UseInterceptors(FileInterceptor("file", createMulterOptions()))
  @ApiResponse({ status: 201, description: 'Should be record file'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  record(@UploadedFile() file: Express.Multer.File): string {
    return file.filename;
  }
}
