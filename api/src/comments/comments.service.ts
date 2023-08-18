import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CommentsEntity} from "./entities/comments.entity";
import {from, Observable, switchMap} from "rxjs";
import {CommentsInterfaces} from "./interfaces/comments.interfaces";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {CommentsDto} from "./dto/comments.dto";
import {ArticlesService} from "../articles/articles.service";
import {ArticlesInterface} from "../articles/interfaces/articles.interface";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private articlesRepository: Repository<CommentsEntity>,
    private articlesService: ArticlesService,
  ) {}

  saveComments(comment: CommentsInterfaces | CommentsDto): Observable<CommentsInterfaces> {
    return from(this.articlesRepository.save(comment));
  }

  findOneComments(data: FindOneOptions) {
    return from(this.articlesRepository.findOne(data));
  }

  createArtComment(idArt: string, body: CommentsInterfaces) {
    return this.articlesService.findOneArticle({where: {id: idArt}}).pipe(
      switchMap((article: ArticlesInterface) => {
        body.articles = article;
        return this.saveComments(body);
      })
    )
  }
}
