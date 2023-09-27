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
import {ReqProps} from "../shared/interfaces/ReqProps";
import {QueryArticlesFilter} from "../shared/interfaces/QueryArticlesFilter";

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
  createArticles(@Req() req: ReqProps, @UploadedFiles() img: Array<Express.Multer.File>, @Body() body: ArticlesInterface): Observable<ArticlesInterface>{
    const toBody = JSON.parse(JSON.stringify(body));
    const toImg = JSON.parse(JSON.stringify(img));
    if (!!toImg.img?.length) toBody.img = toImg.img[0].filename;

    return this.articlesService.saveArticle(Object.assign({users: req.user}, toBody));
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(FileFieldsInterceptor([{ name: "src",  maxCount: 1000 }], createMulterOptions()))
  @ApiResponse({ status: 201, description: 'Should be create new Block'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  @Post("/create/block/:id")
  createBlocks(@Req() req: ReqProps, @Param("id") idArt: string, @UploadedFiles() src: Array<Express.Multer.File>, @Body() body: ArticlesBlocks): Observable<ArticlesBlocks>{
    const toBody = JSON.parse(JSON.stringify(body));
    const toSrc =  JSON.parse(JSON.stringify(src));
    if (toSrc.src && !!toSrc.src.length) toBody.src = toSrc.src[0].filename;

    return this.articlesService.createBlocks(idArt, Object.assign({users: req.user}, toBody));
  }

  @UseGuards(AuthGuard)
  @Get("/receive/art/:id")
  @ApiResponse({ status: 200, description: 'Should be receive article on id'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  getArticles(@Param("id") id: string) {
    return this.articlesService.findOneArticle({where: {id}, relations: ["blocks", "comments", "users"] })
  }

  @UseGuards(AuthGuard)
  @Get("/receive/block/:id")
  @ApiResponse({ status: 200, description: 'Should be receive block on id'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  getBlocks(@Param("id") id: string): Observable<ArticlesBlocks> {
    return this.articlesService.findOneBlocks({ where: {id} });
  }

  @Get("/receive/all")
  @ApiResponse({ status: 200, description: 'All articles on request must be received'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  getAllArticles(@Query() query?: QueryArticlesFilter): Observable<ArticlesInterface[]> {
    return this.articlesService.getAllArticles(query)
  }

  @Get("/edit/:id")
  @ApiResponse({ status: 200, description: 'the article should be returned if the user owns it'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'User is not owner.'})
  getEditArticle(@Param("id") id: string, @Req() red: ReqProps): Observable<ArticlesInterface> {
    return this.articlesService.getEditArticle(id, red.user);
  }
}
