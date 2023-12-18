import { Test, TestingModule } from '@nestjs/testing';
import { CommentsService } from './comments.service';
import {getRepositoryToken} from "@nestjs/typeorm";
import {CommentsEntity} from "./entities/comments.entity";
import {Repository} from "typeorm";
import {ArticlesService} from "../articles/articles.service";
import {BlocksEntity} from "../articles/entities/blocks.entity";
import {MockComments} from "../utility/test/mockComments";
import {MockArticles} from "../utility/test/mockArticles";
import {MockUsers} from "../utility/test/mockUsers";
import {HttpException, HttpStatus} from "@nestjs/common";
import {of, throwError} from "rxjs";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {UsersDto} from "../users/dto/users.dto";
import {CommentsInterfaces} from "./interfaces/comments.interfaces";

describe('CommentsService', () => {
  let serviceComments: CommentsService;
  let serviceArticles: ArticlesService;
  let repositoryComments: Repository<CommentsEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        { provide: ArticlesService, useValue: { findOneArticle: jest.fn() } },
        { provide: getRepositoryToken(CommentsEntity), useClass: Repository },
        { provide: getRepositoryToken(BlocksEntity), useClass: Repository },
      ],
    }).compile();

    serviceComments = module.get<CommentsService>(CommentsService);
    serviceArticles = module.get<ArticlesService>(ArticlesService);
    repositoryComments = module.get(getRepositoryToken(CommentsEntity));
  });

  it('should be defined', () => {
    expect(serviceComments).toBeDefined();
  });

  it("saveComments", () => {
    let save = jest.spyOn(repositoryComments, "save").mockResolvedValue(MockComments as CommentsEntity);

    serviceComments.saveComments({text: MockComments.text}).subscribe({
      next: (comments) => {
        expect(comments).toEqual(MockComments);
        expect(save).toHaveBeenCalledWith({text: MockComments.text});
      }
    })
  })

  it("findOneComments resolve", () => {
    let findOne = jest.spyOn(repositoryComments, "findOne").mockResolvedValue(MockComments as CommentsEntity);

    serviceComments.findOneComments({where: { id: MockComments.id }}).subscribe({
      next: (comment) => {
        expect(comment).toEqual(MockComments);
        expect(findOne).toHaveBeenCalledWith({where: { id: MockComments.id }});
      }
    })
  })

  it("findOneComments reject", () => {
    let findOne = jest.spyOn(repositoryComments, "findOne").mockResolvedValue(null);

    serviceComments.findOneComments({where: { id: MockComments.id }}).subscribe({
      error: (err) => {
        expect(err).toEqual(new HttpException("Comment not found", HttpStatus.NOT_FOUND));
        expect(findOne).toHaveBeenCalledWith({where: { id: MockComments.id }});
      }
    })
  })

  it("createArtComment resolve", () => {
    let mockArt = {...MockComments, articles: MockArticles}
    let findOneArticle = jest.spyOn(serviceArticles, "findOneArticle").mockImplementation(() => of(MockArticles));
    let save = jest.spyOn(repositoryComments, "save").mockResolvedValue(mockArt as CommentsEntity);

    serviceComments.createArtComment(MockArticles.id, MockComments).subscribe({
      next: (comments) => {
        expect(comments).toEqual(mockArt);
        expect(findOneArticle).toHaveBeenCalledWith({where: {id: MockArticles.id}});
        expect(save).toHaveBeenCalledWith(mockArt);
      }
    })
  })

  it("createArtComment reject", () => {
    let findOneArticle = jest.spyOn(serviceArticles, "findOneArticle")
      .mockImplementation(() => throwError(() => new HttpException("Article not found", HttpStatus.NOT_FOUND)));

    serviceComments.createArtComment(MockArticles.id, MockComments).subscribe({
      error: (err) => {
        expect(err).toEqual(new HttpException("Article not found", HttpStatus.NOT_FOUND));
        expect(findOneArticle).toHaveBeenCalledWith({where: {id: MockArticles.id}});
      }
    })
  })

  it("findComments resolve", () => {
    const find = jest.spyOn(repositoryComments, "find").mockResolvedValue([MockComments] as CommentsEntity[]);

    serviceComments.findComments({where: { articles: { id: MockArticles.id } }}).subscribe({
      next: ( comments: CommentsInterfaces[] ) => {
        expect(comments).toEqual([MockComments]);
        expect(find).toHaveBeenCalledWith({where: { articles: { id: MockArticles.id } }});
      }
    })
  })

  it("findComments resolve", () => {
    const find = jest.spyOn(repositoryComments, "find").mockResolvedValue([] as CommentsEntity[]);

    serviceComments.findComments({where: { articles: { id: MockArticles.id } }}).subscribe({
      error: (err) => {
        expect(err).toEqual(new HttpException("Comments not found", HttpStatus.NOT_FOUND));
        expect(find).toHaveBeenCalledWith({where: { articles: { id: MockArticles.id } }});
      }
    })
  })

  it("deleteComments resolve", () => {
    const result: DeleteResult = { raw: 1, affected: 204 }
    const deleteOne = jest.spyOn(repositoryComments, "delete").mockResolvedValue(result);

    serviceComments.deleteComments({id: MockComments.id}).subscribe({
      next: (del: DeleteResult) => {
        expect(del).toEqual(result);
        expect(deleteOne).toHaveBeenCalledWith({id: MockComments.id});
      }
    })
  })

  it("deleteUserComment resolve", () => {
    const result: DeleteResult = { raw: 1, affected: 204 }
    const findOne = jest.spyOn(repositoryComments, "findOne").mockResolvedValue(MockComments as CommentsEntity);
    const deleteOne = jest.spyOn(repositoryComments, "delete").mockResolvedValue(result);

    serviceComments.deleteUserComment(MockUsers as UsersDto, MockComments.id).subscribe({
      next: (del: DeleteResult) => {
        expect(del).toEqual(result);
        expect(findOne).toHaveBeenCalledWith({ where: { id: MockComments.id } });
        expect(deleteOne).toHaveBeenCalledWith(MockComments.id);
      }
    })
  })

  it("deleteUserComment reject", () => {
    const findOne = jest.spyOn(repositoryComments, "findOne").mockResolvedValue(undefined);

    serviceComments.deleteUserComment(MockUsers as UsersDto, MockComments.id).subscribe({
      error: (err) => {
        expect(err).toEqual(new HttpException("Comment not found", HttpStatus.NOT_FOUND));
        expect(findOne).toHaveBeenCalled();
      }
    })
  })
});
