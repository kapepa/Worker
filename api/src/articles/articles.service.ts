import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArticlesEntity} from "./entities/articles.entity";
import {Repository} from "typeorm";
import {BlocksEntity} from "./entities/blocks.entity";
import {ArticlesBlocks, ArticlesInterface} from "./interfaces/articles.interface";
import {from, Observable, of, switchMap, throwError} from "rxjs";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticlesEntity)
    private articlesRepository: Repository<ArticlesEntity>,
    @InjectRepository(BlocksEntity)
    private blocksRepository: Repository<BlocksEntity>,
  ) {}

  saveArticle( article: ArticlesInterface ): Observable<ArticlesInterface>{
    return from(this.articlesRepository.save(article));
  }

  saveBlocks( blocks: ArticlesBlocks ): Observable<ArticlesBlocks>{
    return from(this.blocksRepository.save(blocks));
  }

  findArticles(data: FindManyOptions): Observable<ArticlesInterface[]> {
    return from(this.articlesRepository.find(data)).pipe(
      switchMap((articles: ArticlesInterface[]) => {
        return !!articles ? of(articles) : throwError(() => new HttpException("Articles not found", HttpStatus.NOT_FOUND))
      })
    )
  }

  findOneArticle(data: FindOneOptions):Observable<ArticlesInterface> {
    return from(this.articlesRepository.findOne(data)).pipe(
      switchMap((article: ArticlesInterface) => {
        return !!article ? of(article) : throwError(() => new HttpException("Article not found", HttpStatus.NOT_FOUND))
      })
    );
  }

  findOneBlocks(data: FindOneOptions):Observable<ArticlesBlocks> {
    return from(this.blocksRepository.findOne(data)).pipe(
      switchMap((block: ArticlesBlocks) => {
        return !!block ? of(block) : throwError(() => new HttpException("Block not found", HttpStatus.NOT_FOUND));
      })
    );
  }

  createBlocks(idArt: string, blocks: ArticlesBlocks): Observable<ArticlesBlocks> {
    return this.findOneArticle({where: {id: idArt}}).pipe(
      switchMap((article: ArticlesInterface) => {
        blocks.articles = article;
        return this.saveBlocks(blocks);
      })
    )
  }
}
