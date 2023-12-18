import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Req, UseGuards, UseInterceptors} from '@nestjs/common';
import {NoticeService} from "./notice.service";
import {ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {NoticeDto} from "./dto/notice.dto";
import {NoFilesInterceptor} from "@nestjs/platform-express";
import {ReqProps} from "../shared/interfaces/ReqProps";
import {AuthGuard} from "../auth/guard/auth.guard";
import {NoticeInterface} from "./interfaces/notice.interface";
import {Observable} from "rxjs";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
@ApiTags('notice')
@Controller('notice')
export class NoticeController {
  constructor(
    private noticeService: NoticeService,
  ) {}

  @UseGuards(AuthGuard)
  @Get("/all")
  @ApiResponse({ status: 200, description: 'Should be get all notices'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  allNotice(@Req() req: ReqProps): Observable<NoticeInterface[]> {
    return this.noticeService.findMany({ where: { users: req.user } });
  }

  @UseGuards(AuthGuard)
  @Post("/create/:id")
  @ApiResponse({ status: 200, description: 'Should create notice'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  @UseInterceptors(NoFilesInterceptor())
  createNotice(@Req() req: ReqProps, @Param() param: {id: string}, @Body() body: NoticeDto): Observable<NoticeInterface> {
    const toBody: NoticeInterface = JSON.parse(JSON.stringify(body));

    return this.noticeService.createNotice({ userID: param.id, body: toBody });
  }

  @UseGuards(AuthGuard)
  @Delete("/delete/:id")
  @ApiResponse({ status: 200, description: 'Should be delete notice'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  deleteNotice(@Req() req: ReqProps, @Param() param: {id: string}): Observable<DeleteResult> {
    return this.noticeService.deleteOneNotice(param.id);
  }
}
