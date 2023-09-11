import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
  ValidationPipe
} from '@nestjs/common';
import {ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CommentsService} from "./comments.service";
import {AuthGuard} from "../auth/guard/auth.guard";
import {CommentsInterfaces} from "./interfaces/comments.interfaces";
import {Observable} from "rxjs";

@ApiTags('comments')
@Controller('comments')
export class CommentsController {

  constructor(
    private commentsService: CommentsService,
  ) {}

  @UseGuards(AuthGuard)
  @Post("/create/art/:id")
  @ApiResponse({ status: 201, description: 'Should be create new comment'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  createArtComment(@Req() req, @Param("id") idArt: string, @Body(new ValidationPipe()) body: CommentsInterfaces): Observable<CommentsInterfaces> {
    body.users = req.user;
    return this.commentsService.createArtComment(idArt, body);
  }

  @Get("/receive/:id")
  @ApiResponse({ status: 200, description: 'Comments should be returned'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  receiveComments(@Param("id") id: string, @Query() query: {take: string, skip: string}): Observable<CommentsInterfaces[]> {
    const { take, skip } = query;
    const toTake = !!take ? parseInt(take) : 8;
    const toSkip = !!take ? parseInt(skip) : 0;

    return this.commentsService.findComments({
      where: { articles: { id } },
      take: toTake,
      skip: toSkip,
      order: { createdAt: "DESC" },
      relations: ["users"]
    })
  }

  @UseGuards(AuthGuard)
  @Delete("/delete/:id")
  @ApiResponse({ status: 204, description: 'Successfully delete user comment'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'The comment was not found or has the wrong owner'})
  deleteUserComment(@Req() req, @Param() param) {
    return this.commentsService.deleteUserComment(req.user, param.id);
  }
}
