import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import {ArticlesService} from "./articles.service";
import {of} from "rxjs";
import {MockArticles} from "../utility/test/mockArticles";
import {MockUsers} from "../utility/test/mockUsers";
import {MockBlocks} from "../utility/test/mockBlocks";
import {JwtService} from "@nestjs/jwt";

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
    let createArticles = jest.spyOn(articlesService, "saveArticle").mockReturnValue(of(MockArticles));

    controller.createArticles({user: MockUsers}, [], MockArticles).subscribe({
      next: (art) => {
        expect(art).toEqual(MockArticles);
        expect(createArticles).toHaveBeenCalledWith({...MockArticles, users: MockUsers});
      }
    })
  })

  it("createBlocks", () => {
    let createBlocks = jest.spyOn(articlesService, "createBlocks").mockReturnValue(of(MockBlocks));

    controller.createBlocks({user: MockUsers}, MockArticles.id, [], MockBlocks).subscribe({
      next: (block) => {
        expect(block).toEqual(MockBlocks);
        expect(createBlocks).toHaveBeenCalledWith(MockArticles.id, {...MockBlocks, users: MockUsers})
      }
    })
  })

  it("getArticles", () => {
    let findOneArticle = jest.spyOn(articlesService, "findOneArticle").mockReturnValue(of(MockArticles));

    controller.getArticles(MockArticles.id).subscribe({
      next: (art) => {
        expect(art).toEqual(MockArticles);
        expect(findOneArticle).toHaveBeenCalledWith({where: {id: MockArticles.id}, relations: ["blocks", "comments"] });
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
    let findArticles = jest.spyOn(articlesService, "findArticles").mockReturnValue(of([MockArticles]));

    controller.getAllArticles({take: "1", skip: "0"}).subscribe({
      next: (articles) => {
        expect(articles).toEqual([MockArticles]);
        expect(findArticles).toHaveBeenCalledWith({ take: 1, skip: 0, order: { createdAt: "ASC" }, relations: ["users"] });
      }
    })
  });

  it("getAllArticles when query is empty", () => {
    let findArticles = jest.spyOn(articlesService, "findArticles").mockReturnValue(of([MockArticles]));

    controller.getAllArticles().subscribe({
      next: (articles) => {
        expect(articles).toEqual([MockArticles]);
        expect(findArticles).toHaveBeenCalledWith({ take: 8, skip: 0, order: { createdAt: "ASC" }, relations: ["users"] });
      }
    })
  });

});
