import {Body, Controller, HttpStatus, Param, Post, Req, UseGuards, ValidationPipe} from '@nestjs/common';
import {ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CommentsService} from "./comments.service";
import {AuthGuard} from "../auth/guard/auth.guard";
import {CommentsInterfaces} from "./interfaces/comments.interfaces";

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
  createArtComment(@Req() req, @Param("id") idArt: string, @Body(new ValidationPipe()) body: CommentsInterfaces) {
    body.users = req.user;
    return this.commentsService.createArtComment(idArt, body)
  }
}
