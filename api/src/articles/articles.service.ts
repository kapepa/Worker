import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArticlesEntity} from "./entities/articles.entity";
import {ArrayContains, ILike, Repository} from "typeorm";
import {BlocksEntity} from "./entities/blocks.entity";
import {ArticlesBlocks, ArticlesInterface} from "./interfaces/articles.interface";
import {from, Observable, of, switchMap, tap, throwError} from "rxjs";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {QueryArticlesFilter} from "../shared/interfaces/QueryArticlesFilter";
import {OrderFieldFind} from "../shared/Types/OrderFieldFind";
import {ArticlesFilterFields} from "../shared/enum/ArticlesFilterFields";

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

  getAllArticles(query?: QueryArticlesFilter):  Observable<ArticlesInterface[]> {
    const take: number = !!query?.take ? Number(query.take) : 8;
    const skip: number = !!query?.skip ? Number(query.skip) : 0;
    const sort: ArticlesFilterFields = query?.sort ?? ArticlesFilterFields.CREATE;
    const order: OrderFieldFind = query.order ?? "DESC";
    const type: FindManyOptions | undefined = !!query.type ? { where: { type: ArrayContains([query.type]) } } : undefined;
    const search: FindManyOptions | undefined = !!query.search ? { where: { title: ILike(`%${query.search}%`) } } : undefined;

    return this.findArticles({ ...search, ...type, take, skip, order:{ [sort]: order }, relations: ["users", "blocks"]});
  }
}
