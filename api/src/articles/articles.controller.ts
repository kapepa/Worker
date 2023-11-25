import {
  Body,
  Controller, Get,
  HttpStatus,
  Param, Patch,
  Post, Query,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {AuthGuard} from "../auth/guard/auth.guard";
import {ApiConsumes, ApiForbiddenResponse, ApiResponse, ApiTags} from "@nestjs/swagger";
import {FileFieldsInterceptor, NoFilesInterceptor} from "@nestjs/platform-express";
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
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileFieldsInterceptor([{ name: "img",  maxCount: 1000 }], createMulterOptions()))
  @ApiResponse({ status: 201, description: 'Should be create new article'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  @Post("/create/art")
  createArticles(@Req() req: ReqProps, @UploadedFiles() img: Array<Express.Multer.File>, @Body() body: ArticlesInterface): Observable<ArticlesInterface>{
    const toBody = JSON.parse(JSON.stringify(body));
    const toImg = JSON.parse(JSON.stringify(img));

    if (!!toImg.img?.length) toBody.img = toImg.img[0].filename;
    return this.articlesService.createArticles(Object.assign({users: req.user}, toBody))
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(FileFieldsInterceptor([{ name: "src",  maxCount: 1000 }], createMulterOptions()))
  @ApiResponse({ status: 201, description: 'Should be create new Block'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  @Post("/create/block/:id")
  createBlocks(@Req() req: ReqProps, @Param("id") idArt: string, @UploadedFiles() src: Array<Express.Multer.File>, @Body() body: ArticlesBlocks): Observable<ArticlesBlocks | ArticlesBlocks[]>{
    const toBody = JSON.parse(JSON.stringify(body));
    const toSrc =  JSON.parse(JSON.stringify(src));
    if (toSrc.src && !!toSrc.src.length) toBody.src = toSrc.src[0].filename;

    return this.articlesService.createBlocks(idArt, Object.assign(toBody, {users: req.user}));
  }

  @UseGuards(AuthGuard)
  @Get("/receive/art/:id")
  @ApiResponse({ status: 200, description: 'Should be receive article on id'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'Something went wrong.'})
  getArticles(@Req() req: ReqProps, @Param("id") id: string): Observable<ArticlesInterface> {
    return this.articlesService.getArticles(id, req.user);
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
  getAllArticles(@Query() query?: QueryArticlesFilter): Observable<ArticlesInterface[] | ArticlesInterface> {
    return this.articlesService.getAllArticles(query)
  }

  @Get("/edit/:id")
  @ApiResponse({ status: 200, description: 'the article should be returned if the user owns it'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'User is not owner.'})
  getEditArticle(@Param("id") id: string, @Req() red: ReqProps): Observable<ArticlesInterface> {
    return this.articlesService.getEditArticle(id, red.user);
  }

  @Patch("/update")
  @UseInterceptors(NoFilesInterceptor())
  @ApiResponse({ status: 200, description: 'update articles'})
  @ApiForbiddenResponse({ status: HttpStatus.FORBIDDEN, description: 'there was an error during the update'})
  updateArticle(@Body() body: ArticlesInterface): Observable<ArticlesInterface> {
    const toBody = JSON.parse(JSON.stringify(body));

    return this.articlesService.updateArticle(toBody)
  }
}
