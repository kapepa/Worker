import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ArticlesEntity} from "./entities/articles.entity";
import {Repository} from "typeorm";
import {BlocksEntity} from "./entities/blocks.entity";
import {ArticlesBlocks, ArticlesInterface} from "./interfaces/articles.interface";
import {from, Observable, of, switchMap} from "rxjs";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";

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

  findOneArticle(data: FindOneOptions):Observable<ArticlesInterface> {
    return from(this.articlesRepository.findOne(data));
  }

  findOneBlocks(data: FindOneOptions):Observable<ArticlesBlocks> {
    return from(this.blocksRepository.findOne(data));
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
