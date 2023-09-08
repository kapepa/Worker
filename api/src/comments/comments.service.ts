import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CommentsEntity} from "./entities/comments.entity";
import {from, Observable, of, switchMap, throwError} from "rxjs";
import {CommentsInterfaces} from "./interfaces/comments.interfaces";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {CommentsDto} from "./dto/comments.dto";
import {ArticlesService} from "../articles/articles.service";
import {ArticlesInterface} from "../articles/interfaces/articles.interface";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private commentsRepository: Repository<CommentsEntity>,
    private articlesService: ArticlesService,
  ) {}

  saveComments(comment: CommentsInterfaces | CommentsDto): Observable<CommentsInterfaces> {
    return from(this.commentsRepository.save(comment));
  }

  findOneComments(data: FindOneOptions): Observable<CommentsInterfaces> {
    return from(this.commentsRepository.findOne(data)).pipe(
      switchMap((comment: CommentsInterfaces) => {
        return !!comment ? of(comment) : throwError(() => new HttpException("Comment not found", HttpStatus.NOT_FOUND));
      })
    );
  }

  createArtComment(idArt: string, comment: CommentsInterfaces): Observable<CommentsInterfaces> {
    return this.articlesService.findOneArticle({where: {id: idArt}}).pipe(
      switchMap((article: ArticlesInterface) => {
        comment.articles = article;
        return this.saveComments(comment);
      })
    )
  }

  findComments(data: FindManyOptions): Observable<CommentsInterfaces[]> {
    return from(this.commentsRepository.find(data)).pipe(
      switchMap((comments: CommentsInterfaces[] ) => {
        return !!comments ? of(comments) : throwError(() => new HttpException("Comments not found", HttpStatus.NOT_FOUND));
      })
    );
  }
}
