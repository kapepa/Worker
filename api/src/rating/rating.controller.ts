import {Body, Controller, Post, Req, Param, UseGuards, UseInterceptors, Delete, Put} from '@nestjs/common';
import {ApiCreatedResponse, ApiForbiddenResponse, ApiTags} from "@nestjs/swagger";
import {RatingService} from "./rating.service";
import {AuthGuard} from "../auth/guard/auth.guard";
import {ReqProps} from "../shared/interfaces/ReqProps";
import {NoFilesInterceptor} from "@nestjs/platform-express";
import {RatingDto} from "./dto/rating.dto";
import {Observable} from "rxjs";
import {RatingInterface} from "./interfaces/rating.interface";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
@ApiTags('rating')
@Controller('rating')
export class RatingController {
  constructor(
    private ratingService: RatingService,
  ) {}

  @Post("/create-art/:id")
  @UseGuards(AuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  @ApiCreatedResponse({description: 'The rating has been successfully created.', type: RatingDto})
  @ApiForbiddenResponse({ description: 'it was an error during creation created'})
  createArticle (@Req() req: ReqProps, @Body() body: RatingDto, @Param() param: {id: string}): Observable<RatingInterface> {
    const toBody: RatingInterface = JSON.parse(JSON.stringify(body));
    return this.ratingService.createArticle(Object.assign(toBody , {users: req.user}), param.id);
  }

  @Post("/create-profile/:id")
  @UseGuards(AuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  @ApiCreatedResponse({description: 'The rating has been successfully created.', type: RatingDto})
  @ApiForbiddenResponse({ description: 'it was an error during creation created'})
  createProfile (@Req() req: ReqProps, @Body() body: RatingDto, @Param() param: {id: string}): Observable<RatingInterface> {
    const toBody: RatingInterface = JSON.parse(JSON.stringify(body));
    return this.ratingService.createProfile(Object.assign(toBody , {users: req.user}), param.id);
  }

  @Put("/update/:id")
  @UseGuards(AuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  @ApiCreatedResponse({description: 'The rating has been successfully update.', type: RatingDto})
  @ApiForbiddenResponse({ description: 'it was an error during creation created'})
  updateRating (@Req() req: ReqProps,  @Body() body: RatingDto, @Param() param: {id: string}): Observable<RatingInterface> {
    const toBody: RatingInterface = JSON.parse(JSON.stringify(body));
    return this.ratingService.updateRating(Object.assign(toBody, {users: req.user}), param.id);
  }

  @Delete("/:id")
  @UseGuards(AuthGuard)
  deleteRating (@Param() param: {id: string}): Observable<DeleteResult> {
    return this.ratingService.deleteOne({id: param.id});
  }
}
