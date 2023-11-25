import {forwardRef, Inject, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {RatingEntity} from "./entities/rating.entity";
import {Repository} from "typeorm";
import {from, Observable, switchMap} from "rxjs";
import {RatingInterface} from "./interfaces/rating.interface";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {ArticlesService} from "../articles/articles.service";
import {ArticlesInterface} from "../articles/interfaces/articles.interface";
import {UsersService} from "../users/users.service";
import {UsersEntityInterfaces} from "../users/interfaces/users.interfaces";

@Injectable()
export class RatingService {
  constructor(
    private usersService: UsersService,
    @Inject(forwardRef(() => ArticlesService))
    private articlesService: ArticlesService,
    @InjectRepository(RatingEntity)
    private ratingRepository: Repository<RatingEntity>,
  ) {}

  saveOne (rating: RatingInterface): Observable<RatingInterface & RatingEntity> {
    return from(this.ratingRepository.save(rating));
  }

  save (ratings: RatingInterface[]): Observable<RatingInterface[] & RatingEntity[]> {
    return from(this.ratingRepository.save(ratings));
  }

  findOne (rating: FindOneOptions): Observable<RatingInterface> {
    return from(this.ratingRepository.findOne(rating));
  }

  find (rating: FindManyOptions): Observable<RatingInterface[]> {
    return from(this.ratingRepository.find(rating));
  }

  deleteOne (rating: FindOptionsWhere<RatingInterface>): Observable<DeleteResult> {
    return from(this.ratingRepository.delete(rating));
  }

  createArticle (rating: RatingInterface, articleID: string): Observable<RatingInterface> {
    return this.articlesService.findOneArticle({where: {id: articleID}}).pipe(
      switchMap((article: ArticlesInterface) => {
        if(!article) throw new NotFoundException({ error: "this article was not found!" });
        rating.articles = article;
        return this.saveOne(rating);
      })
    )
  }

  createProfile (rating: RatingInterface, userID: string): Observable<RatingInterface> {
    return this.usersService.findOne({where: {id: userID}}).pipe(
      switchMap((users: UsersEntityInterfaces) => {
        if(!users) throw new NotFoundException({ error: "this user was not found!" });
        rating.profile = users;
        return this.saveOne(rating);
      })
    )
  }

  updateRating(rating: RatingInterface, ratingID: string): Observable<RatingInterface> {
    const { users } = rating;

    return this.findOne({where: { id: ratingID, users: { id: users.id } }}).pipe(
      switchMap((hasRating: RatingInterface) => {
        if(!hasRating) throw new NotFoundException({ error: "this rating was not found!" });
        return this.saveOne(Object.assign(hasRating,rating));
      })
    );
  }
}
