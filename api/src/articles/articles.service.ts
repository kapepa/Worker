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
import {UsersDto} from "../users/dto/users.dto";

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

  saveBlocks( blocks: ArticlesBlocks ): Observable<ArticlesBlocks | ArticlesBlocks[]>{
    return from(this.blocksRepository.save(blocks));
  }

  findArticles(data: FindManyOptions): Observable<ArticlesInterface[] | ArticlesInterface> {
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

  createBlocks(idArt: string, blocks: ArticlesBlocks): Observable<ArticlesBlocks | ArticlesBlocks[]> {
    return this.findOneArticle({where: {id: idArt}}).pipe(
      switchMap((article: ArticlesInterface) => {
        blocks.articles = article;
        return this.saveBlocks(blocks);
      })
    )
  }

  getAllArticles(query?: QueryArticlesFilter):  Observable<ArticlesInterface[] | ArticlesInterface> {
    const take: number = !!query?.take ? Number(query.take) : 8;
    const skip: number = !!query?.skip ? Number(query.skip) : 0;
    const sort: ArticlesFilterFields = query?.sort ?? ArticlesFilterFields.CREATE;
    const order: OrderFieldFind = query.order ?? "DESC";
    const type: FindManyOptions | undefined = !!query.type ? { where: { type: ArrayContains([query.type]) } } : undefined;
    const search: FindManyOptions | undefined = !!query.search ? { where: { title: ILike(`%${query.search}%`) } } : undefined;

    return this.findArticles({ ...search, ...type, take, skip, order:{ [sort]: order }, relations: ["users", "blocks"]});
  }

  getEditArticle(articleID: string, users: UsersDto): Observable<ArticlesInterface> {
    return this.findOneArticle({ where: { id: articleID, users }, relations: ["blocks"] })
  }

  createArticles(article: ArticlesInterface): any {
    const { blocks, ...otherArticles } = article;
    const toBlocks = !!blocks && blocks.length ? from(this.blocksRepository.save(blocks)) : of([]);

    return toBlocks.pipe(
      switchMap((blocks: ArticlesBlocks[]) => {
        return this.saveArticle({...otherArticles, blocks: blocks })
      })
    )
  }

  updateArticle(article: ArticlesInterface): Observable<ArticlesInterface> {
    const { blocks, ...otherArticle} = article;

    const blocksList = !!blocks && !!blocks.length
      ? from(this.findOneArticle(({ where: { id: otherArticle.id }, relations: ["blocks"] }))).pipe(
        switchMap((article: ArticlesInterface) => {
          return from(this.blocksRepository.save(blocks)).pipe(
            tap(() => {
              if(!!blocks && !!blocks.length) {
                const removeBlocks: ArticlesBlocks[] = blocks.reduce((accum: ArticlesBlocks[], block: ArticlesBlocks) => {
                  const findIndex: number = accum.findIndex(({id}) => id === block.id);
                  if(findIndex !== -1) accum.splice(findIndex, 1);
                  return accum;
                }, article.blocks);
                if( !!removeBlocks && !!removeBlocks.length ) this.blocksRepository.remove(removeBlocks as BlocksEntity[])
              }
            })
          )
        })
      )
      : from([]);

    return blocksList.pipe(
      switchMap((blocksArr) => {
        return this.saveArticle({...otherArticle, blocks: blocksArr})
      })
    )
  }
}
