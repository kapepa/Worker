import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comments.controller';
import {CommentsService} from "./comments.service";
import {JwtService} from "@nestjs/jwt";
import {of} from "rxjs";
import {MockComments} from "../utility/test/mockComments";
import {MockUsers} from "../utility/test/mockUsers";
import {MockArticles} from "../utility/test/mockArticles";

describe('CommentsController', () => {
  let controllerComments: CommentsController;
  let commentsService: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsController],
      providers: [
        JwtService,
        { provide: CommentsService, useValue: {createArtComment : jest.fn()} }
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
});
