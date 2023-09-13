import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comments.controller';
import {CommentsService} from "./comments.service";
import {JwtService} from "@nestjs/jwt";
import {of} from "rxjs";
import {MockComments} from "../utility/test/mockComments";
import {MockUsers} from "../utility/test/mockUsers";
import {MockArticles} from "../utility/test/mockArticles";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {CommentsInterfaces} from "./interfaces/comments.interfaces";

describe('CommentsController', () => {
  let controllerComments: CommentsController;
  let commentsService: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsController],
      providers: [
        JwtService,
        {
          provide: CommentsService,
          useValue: {
            findComments: jest.fn(),
            createArtComment: jest.fn(),
            deleteUserComment: jest.fn(),
          }
        }
      ]
    }).compile();

    controllerComments = module.get<CommentsController>(CommentsController);
    commentsService = module.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(controllerComments).toBeDefined();
  });

  it('createArtComment', function () {
    const createArtComment = jest.spyOn(commentsService, "createArtComment").mockImplementation(() => of(MockComments));

    controllerComments.createArtComment({user: MockUsers}, MockArticles.id, MockComments).subscribe({
      next: (comment) => {
        expect(comment).toEqual(MockComments);
        expect(createArtComment).toHaveBeenCalledWith(MockArticles.id, MockComments);
      }
    });
  });

  it("receiveComments", () => {
    const findComments = jest.spyOn(commentsService, "findComments").mockImplementation(() => of([MockComments]));

    controllerComments.receiveComments(MockArticles.id, {take: "1", skip: "0"}).subscribe({
      next: (comments: CommentsInterfaces[]) => {
        expect(comments).toEqual([MockComments]);
        expect(findComments).toHaveBeenCalledWith({
          where: { articles: { id: MockArticles.id } },
          take: 1,
          skip: 0,
          order: { createdAt: "DESC" },
          relations: ["users"]
        })
      }
    })
  });

  it("deleteUserComment", () => {
    const result: DeleteResult = { raw: 1, affected: 204 }
    const deleteUserComment = jest.spyOn(commentsService, "deleteUserComment").mockImplementation(() => of(result));

    controllerComments.deleteUserComment({user: MockUsers}, {id: MockComments.id}).subscribe({
      next: (del: DeleteResult) => {
        expect(del).toEqual(result);
        expect(deleteUserComment).toHaveBeenCalledWith(MockUsers, MockComments.id);
      }
    })
  })
});
