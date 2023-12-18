import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import {Repository} from "typeorm";
import {ArticlesEntity} from "./entities/articles.entity";
import {getRepositoryToken} from "@nestjs/typeorm";
import {BlocksEntity} from "./entities/blocks.entity";
import {MockArticles} from "../utility/test/mockArticles";
import {MockRating} from "../utility/test/mockRating";
import {MockBlocks} from "../utility/test/mockBlocks";
import {MockUsers} from "../utility/test/mockUsers";
import {ArticlesBlocks, ArticlesInterface} from "./interfaces/articles.interface";
import {HttpException, HttpStatus} from "@nestjs/common";
import {RatingService} from "../rating/rating.service";
import {UsersDto} from "../users/dto/users.dto";
import {of} from "rxjs";
import {FileService} from "../file/file.service";
import {CommentsService} from "../comments/comments.service";

describe('ArticlesService', () => {
  let serviceArticles: ArticlesService;
  let ratingService: RatingService;
  let repositoryArticles: Repository<ArticlesEntity>;
  let repositoryBlocks: Repository<BlocksEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: FileService,
          useValue: {}
        },
        {
          provide: CommentsService,
          useValue: {}
        },
        {
          provide: RatingService,
          useValue: {
            findOne: jest.fn(),
          }
        },
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
    ratingService = module.get<RatingService>(RatingService);
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

  it("findArticles resolve", () => {
    const find = jest.spyOn(repositoryArticles, "find").mockResolvedValue([MockArticles] as ArticlesEntity[]);
    const attr = { take: 8, skip: 0, order: { createdAt: "ASC" }, relations: ["users"] };

    serviceArticles.findArticles(attr).subscribe({
      next: (articles: ArticlesInterface[]) => {
        expect(articles).toEqual([MockArticles]);
        expect(find).toHaveBeenCalledWith(attr);
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

  it("getArticles", () => {
    const ArticlesFindOneMock = jest.spyOn(repositoryArticles, "findOne").mockResolvedValue(MockArticles as ArticlesEntity);
    const RatingFindOneMock = jest.spyOn(ratingService, "findOne").mockImplementation(() => of(MockRating));

    serviceArticles.getArticles(MockArticles.id, MockUsers as UsersDto).subscribe({
      next: (articles: ArticlesInterface) => {
        expect(articles).toEqual(Object.assign(MockArticles, {rating: MockRating}));
        expect(ArticlesFindOneMock).toHaveBeenCalledWith({where: { id: MockArticles.id }, relations: ["blocks", "comments", "users"] });
        expect(RatingFindOneMock).toHaveBeenCalledWith({where: {articles: { id: MockArticles.id }, users: {id: MockUsers.id} }})
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
