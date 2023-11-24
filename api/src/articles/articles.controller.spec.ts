import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import {ArticlesService} from "./articles.service";
import {of} from "rxjs";
import {MockArticles} from "../utility/test/mockArticles";
import {MockUsers} from "../utility/test/mockUsers";
import {MockBlocks} from "../utility/test/mockBlocks";
import {JwtService} from "@nestjs/jwt";
import {QueryArticlesFilter} from "../shared/interfaces/QueryArticlesFilter";
import {UsersDto} from "../users/dto/users.dto";
import {ReqProps} from "../shared/interfaces/ReqProps";

describe('ArticlesController', () => {
  let controller: ArticlesController;

  let articlesService: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        JwtService,
        { provide: ArticlesService, useValue: {
            saveArticle: jest.fn(),
            createBlocks: jest.fn(),
            findOneArticle: jest.fn(),
            findOneBlocks: jest.fn(),
            findArticles: jest.fn(),
            getAllArticles: jest.fn(),
            createArticles: jest.fn(),
        }}
      ],
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
    articlesService = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("createArticles", () => {
    let createArticles = jest.spyOn(articlesService, "createArticles").mockReturnValue(of(MockArticles));

    controller.createArticles({user: MockUsers as UsersDto} as ReqProps, [], MockArticles).subscribe({
      next: (art) => {
        expect(art).toEqual(MockArticles);
        expect(createArticles).toHaveBeenCalledWith({...MockArticles, users: MockUsers});
      }
    })
  })

  it("createBlocks", () => {
    let createBlocks = jest.spyOn(articlesService, "createBlocks").mockReturnValue(of(MockBlocks));

    controller.createBlocks({user: MockUsers as UsersDto} as ReqProps, MockArticles.id, [], {...MockBlocks, users: MockUsers}).subscribe({
      next: (block) => {
        expect(block).toEqual(MockBlocks);
        expect(createBlocks).toHaveBeenCalledWith(MockArticles.id, {...MockBlocks, users: MockUsers});
      }
    })
  })

  it("getArticles", () => {
    let findOneArticle = jest.spyOn(articlesService, "findOneArticle").mockReturnValue(of(MockArticles));

    controller.getArticles(MockArticles.id).subscribe({
      next: (art) => {
        expect(art).toEqual(MockArticles);
        expect(findOneArticle).toHaveBeenCalledWith({where: {id: MockArticles.id}, relations: ["blocks", "comments", "users", "rating"] });
      }
    })
  })

  it("getBlocks", () => {
    let findOneArticle = jest.spyOn(articlesService, "findOneBlocks").mockReturnValue(of(MockBlocks));

    controller.getBlocks(MockBlocks.id).subscribe({
      next: (block) => {
        expect(block).toEqual(MockBlocks);
        expect(findOneArticle).toHaveBeenCalledWith({where: {id: MockBlocks.id} });
      }
    })
  })

  it("getAllArticles", () => {
    let getAllArticles = jest.spyOn(articlesService, "getAllArticles").mockReturnValue(of([MockArticles]));

    controller.getAllArticles({take: "1", skip: "0"} as QueryArticlesFilter).subscribe({
      next: (articles) => {
        expect(articles).toEqual([MockArticles]);
        expect(getAllArticles).toHaveBeenCalledWith({ take: "1", skip: "0" });
      }
    })
  });

});
