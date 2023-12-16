import {forwardRef, HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArticlesEntity} from "./entities/articles.entity";
import {ArrayContains, ILike, Repository} from "typeorm";
import {BlocksEntity} from "./entities/blocks.entity";
import {ArticlesBlocks, ArticlesInterface} from "./interfaces/articles.interface";
import {
  concat,
  from, map,
  Observable,
  of,
  switchMap,
  tap,
  throwError
} from "rxjs";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {QueryArticlesFilter} from "../shared/interfaces/QueryArticlesFilter";
import {OrderFieldFind} from "../shared/Types/OrderFieldFind";
import {ArticlesFilterFields} from "../shared/enum/ArticlesFilterFields";
import {UsersDto} from "../users/dto/users.dto";
import {RatingService} from "../rating/rating.service";
import {RatingInterface} from "../rating/interfaces/rating.interface";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {CommentsService} from "../comments/comments.service";
import {FileService} from "../file/file.service";
import {ArticlesBlockType} from "./interfaces/blocks.interface";
import {RemoveOptions} from "typeorm/repository/RemoveOptions";

@Injectable()
export class ArticlesService {
  constructor(
    private fileService: FileService,
    @InjectRepository(ArticlesEntity)
    private articlesRepository: Repository<ArticlesEntity>,
    @InjectRepository(BlocksEntity)
    private blocksRepository: Repository<BlocksEntity>,
    @Inject(forwardRef(() => RatingService))
    private ratingService: RatingService,
    @Inject(forwardRef(() => CommentsService))
    private commentsService: CommentsService,
  ) {}

  saveArticle( article: ArticlesInterface ): Observable<ArticlesInterface>{
    return from(this.articlesRepository.save(article));
  }

  saveBlocks( blocks: ArticlesBlocks ): Observable<ArticlesBlocks | ArticlesBlocks[]>{
    return from(this.blocksRepository.save(blocks));
  }

  removeBlocks(entities: ArticlesBlocks[], options?: RemoveOptions): Observable<BlocksEntity[]> {
    return from(this.blocksRepository.remove(entities as BlocksEntity[], options))
  }

  deleteBlocks(blocks: FindOptionsWhere<ArticlesBlocks>): Observable<DeleteResult> {
    return from(this.blocksRepository.delete(blocks));
  }

  findArticles(data?: FindManyOptions): Observable<ArticlesInterface[] | ArticlesInterface> {
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

  findBlocks(blocks: FindManyOptions): Observable<ArticlesBlocks[]> {
    return from(this.blocksRepository.find(blocks));
  }

  findOneBlocks(data: FindOneOptions):Observable<ArticlesBlocks> {
    return from(this.blocksRepository.findOne(data)).pipe(
      switchMap((block: ArticlesBlocks) => {
        return !!block ? of(block) : throwError(() => new HttpException("Block not found", HttpStatus.NOT_FOUND));
      })
    );
  }

  deleteArticle(article: FindOptionsWhere<ArticlesInterface>): Observable<DeleteResult> {
    return from(this.articlesRepository.delete(article))
  }

  deleteArticleImage(articleID: string): Observable<ArticlesInterface> {
    return this.findOneArticle({where: {id: articleID}}).pipe(
      switchMap((articles: ArticlesInterface) => {
        const { img } = articles;

        return  this.fileService.removeImage(img).pipe(
          switchMap((progress: boolean) => {
            return of(Object.assign(articles,{ img: progress ? "" : img }))
          })
        )
      })
    )
  }

  createBlocks(idArt: string, blocks: ArticlesBlocks): Observable<ArticlesBlocks | ArticlesBlocks[]> {
    return this.findOneArticle({where: {id: idArt}}).pipe(
      switchMap((article: ArticlesInterface) => {
        blocks.articles = article;
        return this.saveBlocks(blocks);
      })
    )
  }

  deleteBlocksImagesAll(articleID: string): Observable<DeleteResult> {
    return this.findBlocks({where: { type: ArticlesBlockType.IMAGE, articles: { id: articleID } }}).pipe(
      map((blocks: ArticlesBlocks[]) => {
        from(blocks).pipe(
          map((block: ArticlesBlocks) => this.fileService.removeFile(block["src"]))
        )
      }),
      switchMap(() => {
        return this.deleteBlocks({articles: { id: articleID }});
      })
    );
  }

  getArticles(articleID: string, users: UsersDto): Observable<ArticlesInterface> {
    return this.findOneArticle({where: { id: articleID }, relations: ["blocks", "comments", "users"] }).pipe(
      switchMap((articles: ArticlesInterface) => {
        return this.ratingService.findOne({where: {articles: { id: articles.id }, users: {id: users.id} }}).pipe(
          switchMap((rating: RatingInterface) => {
            articles.rating = !!rating ? [rating] : [];
            return of(articles);
          })
        )
      })
    );
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

  createArticles(article: ArticlesInterface): Observable<ArticlesInterface> {
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

  getRating(user: UsersDto, articleID: string): Observable<RatingInterface> {
    return this.ratingService.findOne({where: {users: {id: user.id}, articles: { id: articleID }}});
  }

  deleteArticleID(articleID: string): Observable<DeleteResult> {
    return this.findOneArticle({ where: { id: articleID }}).pipe(
      switchMap((article: ArticlesInterface) => {
        return concat(
          this.deleteBlocksImagesAll(articleID),
          this.deleteBlocks({articles: { id: articleID }}),
          this.fileService.removeImage(article.img),
        ).pipe(
          switchMap(() => concat(
            this.ratingService.deleteOne({articles: {id: articleID }}),
            this.commentsService.deleteComments({articles: {id: articleID }})
            ).pipe(
            switchMap(() => this.deleteArticle({id: articleID}) ))
          )
        )
      })
    )
  }

}
