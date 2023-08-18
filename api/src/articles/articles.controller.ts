import {
  Body,
  Controller, Get,
  HttpStatus,
  Param,
  Post, Query,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {AuthGuard} from "../auth/guard/auth.guard";
import {ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {FileFieldsInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {createMulterOptions} from "../file/file.service";
import {ArticlesBlocks, ArticlesInterface} from "./interfaces/articles.interface";
import {ArticlesService} from "./articles.service";
import {Observable} from "rxjs";

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {

  constructor(
    private articlesService: ArticlesService
  ) {}

  @UseGuards(AuthGuard)
  @UseInterceptors(FileFieldsInterceptor([{ name: "img",  maxCount: 1000 }], createMulterOptions()))
  @ApiResponse({ status: 201, description: 'Should be create new article'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  @Post("/create/art")
  createArticles(@Req() req, @UploadedFiles() img: Array<Express.Multer.File>, @Body() body: ArticlesInterface): Observable<ArticlesInterface>{
    const toBody = JSON.parse(JSON.stringify(body));
    const toImg = JSON.parse(JSON.stringify(img));
    if (!!toImg.img.length) toBody.img = toImg.img[0].filename;

    return this.articlesService.saveArticle(Object.assign({users: req.user}, toBody));
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(FileFieldsInterceptor([{ name: "src",  maxCount: 1000 }], createMulterOptions()))
  @ApiResponse({ status: 201, description: 'Should be create new Block'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  @Post("/create/block/:id")
  createBlocks(@Req() req, @Param("id") idArt: string, @UploadedFiles() src: Array<Express.Multer.File>, @Body() body: ArticlesBlocks){
    const toBody = JSON.parse(JSON.stringify(body));
    const toSrc = JSON.parse(JSON.stringify(src));
    if (toSrc.src && !!toSrc.src.length) toBody.src = toSrc.src[0].filename;

    return this.articlesService.createBlocks(idArt, Object.assign({users: req.user}, toBody));
  }

  @Get("/receive/art/:id")
  getArticles(@Param("id") id) {
    return this.articlesService.findOneArticle({where: {id}, relations: ["blocks", "comments"] })
  }

  @Get("/receive/block/:id")
  getBlocks(@Param("id") id) {
    return this.articlesService.findOneBlocks({ where: {id} });
  }
}
