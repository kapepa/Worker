import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import {Repository} from "typeorm";
import {ArticlesEntity} from "./entities/articles.entity";
import {getRepositoryToken} from "@nestjs/typeorm";
import {BlocksEntity} from "./entities/blocks.entity";
import {MockArticles} from "../utility/test/mockArticles";
import {ArticlesBlocks, ArticlesInterface} from "./interfaces/articles.interface";
import {MockBlocks} from "../utility/test/mockBlocks";
import {HttpException, HttpStatus} from "@nestjs/common";

describe('ArticlesService', () => {
  let serviceArticles: ArticlesService;
  let repositoryArticles: Repository<ArticlesEntity>;
  let repositoryBlocks: Repository<BlocksEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: getRepositoryToken(ArticlesEntity),
          useClass: Repository
        },
        {
          provide: getRepositoryToken(BlocksEntity),
          useClass: Repository
        },
      ],
    }).compile();

    serviceArticles = module.get<ArticlesService>(ArticlesService);
    repositoryArticles = module.get<Repository<ArticlesEntity>>(getRepositoryToken(ArticlesEntity));
    repositoryBlocks = module.get<Repository<BlocksEntity>>(getRepositoryToken(BlocksEntity));
  });

  it('should be defined', () => {
    expect(serviceArticles).toBeDefined();
  });

  it("saveArticle", () => {
    const articlesSave = jest.spyOn(repositoryArticles, "save").mockResolvedValue(MockArticles as ArticlesEntity);

    serviceArticles.saveArticle(MockArticles).subscribe({
      next: (art: ArticlesInterface) => {
        expect(art).toEqual(MockArticles);
        expect(articlesSave).toHaveBeenCalledWith(MockArticles);
      }
    })
  })

  it("saveBlocks", () => {
    const blocksSave = jest.spyOn(repositoryBlocks, "save").mockResolvedValue(MockBlocks as BlocksEntity);

    serviceArticles.saveBlocks(MockBlocks).subscribe({
      next: (block: ArticlesBlocks) => {
        expect(block).toEqual(MockBlocks);
        expect(blocksSave).toHaveBeenCalledWith(MockBlocks);
      }
    })
  })

  it("findOneArticle resolve", () => {
    const findOneArticle = jest.spyOn(repositoryArticles, "findOne").mockResolvedValue(MockArticles as ArticlesEntity);

    serviceArticles.findOneArticle({where: { id: MockArticles.id} }).subscribe({
      next: (art: ArticlesInterface) => {
        expect(art).toEqual(MockArticles);
        expect(findOneArticle).toHaveBeenCalledWith({where: { id: MockArticles.id} });
      }
    })
  })

  it("findOneArticle reject", () => {
    const findOneArticle = jest.spyOn(repositoryArticles, "findOne").mockResolvedValue(null);

    serviceArticles.findOneArticle({where: { id: MockArticles.id} }).subscribe({
      error: (err) => {
        expect(err).toEqual(new HttpException("Article not found", HttpStatus.NOT_FOUND))
        expect(findOneArticle).toHaveBeenCalledWith({where: { id: MockArticles.id} });
      }
    })
  })

  it("findOneBlocks resolve", () => {
    const findOneBlocks = jest.spyOn(repositoryBlocks, "findOne").mockResolvedValue(MockBlocks as BlocksEntity);

    serviceArticles.findOneBlocks({where: { id: MockBlocks.id} }).subscribe({
      next: (block: ArticlesBlocks) => {
        expect(block).toEqual(MockBlocks);
        expect(findOneBlocks).toHaveBeenCalledWith({where: { id: MockBlocks.id} });
      }
    })
  })

  it("findOneBlocks reject", () => {
    const findOneBlocks = jest.spyOn(repositoryBlocks, "findOne").mockResolvedValue(null);

    serviceArticles.findOneBlocks({where: { id: MockBlocks.id} }).subscribe({
      error: (err) => {
        expect(err).toEqual(new HttpException("Block not found", HttpStatus.NOT_FOUND));
        expect(findOneBlocks).toHaveBeenCalledWith({where: { id: MockBlocks.id} });
      }
    })
  })

  it("createBlocks resolve", () => {
    const mockMerge = {...MockBlocks, articles: MockArticles};
    const findOneArticle = jest.spyOn(repositoryArticles, "findOne").mockResolvedValue(MockArticles as ArticlesEntity);
    const blocksSave = jest.spyOn(repositoryBlocks, "save").mockResolvedValue(mockMerge as BlocksEntity);

    serviceArticles.createBlocks(MockArticles.id, MockBlocks).subscribe({
      next: (block: ArticlesBlocks) => {
        expect(block).toEqual(mockMerge);
        expect(findOneArticle).toHaveBeenCalledWith({where: {id: MockArticles.id}});
        expect(blocksSave).toHaveBeenCalledWith(mockMerge);
      }
    })
  })

  it("createBlocks reject", () => {
    const findOneArticle = jest.spyOn(repositoryArticles, "findOne").mockResolvedValue(null);

    serviceArticles.createBlocks(MockArticles.id, MockBlocks).subscribe({
      error: (err) => {
        expect(err).toEqual(new HttpException("Article not found", HttpStatus.NOT_FOUND));
        expect(findOneArticle).toHaveBeenCalledWith({where: {id: MockArticles.id}});
      }
    })
  })

});
