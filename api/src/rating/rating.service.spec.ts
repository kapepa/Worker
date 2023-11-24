import {Test, TestingModule} from '@nestjs/testing';
import {RatingService} from './rating.service';
import {UsersService} from "../users/users.service";
import {ArticlesService} from "../articles/articles.service";
import {Repository} from "typeorm";
import {RatingEntity} from "./entities/rating.entity";
import {getRepositoryToken} from "@nestjs/typeorm";
import {MockRating} from "../utility/test/mockRating";
import {MockArticles} from "../utility/test/mockArticles"
import {MockUsers} from "../utility/test/mockUsers";
import {RatingInterface} from "./interfaces/rating.interface";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {FindOptionsWhere} from "typeorm/find-options/FindOptionsWhere";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {of} from "rxjs";
import {NotFoundException} from "@nestjs/common";
describe('RatingService', () => {
  let service: RatingService;
  let usersService: UsersService;
  let articlesService: ArticlesService;
  let ratingRepository: Repository<RatingEntity>;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RatingService,
        {
          provide: UsersService,
          useValue : {
            findOne: jest.fn(),
          },
        },
        {
          provide: ArticlesService,
          useValue : {
            findOneArticle: jest.fn(),
          },
        },
        { provide: getRepositoryToken(RatingEntity), useClass: Repository}
      ],
    }).compile();

    service = module.get<RatingService>(RatingService);
    usersService = module.get<UsersService>(UsersService);
    articlesService = module.get<ArticlesService>(ArticlesService);
    ratingRepository = module.get<Repository<RatingEntity>>(getRepositoryToken(RatingEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it("saveOne", () => {
    const RatingMock = MockRating as RatingEntity;
    const saveOneMock = jest.spyOn(ratingRepository, "save").mockResolvedValue(RatingMock);

    service.saveOne(RatingMock).subscribe({
      next: (rating: RatingInterface) => {
        expect(rating).toEqual(RatingMock);
        expect(saveOneMock).toHaveBeenCalledWith(RatingMock);
      }
    })
  })

  it("save", () => {
    const RatingsMock: RatingInterface[] = [MockRating]
    const saveOneMock = jest.spyOn(ratingRepository, "save").mockResolvedValue(RatingsMock as any);

    service.save(RatingsMock).subscribe({
      next: (ratings: RatingInterface[]) => {
        expect(ratings).toEqual(RatingsMock);
        expect(saveOneMock).toHaveBeenCalledWith(RatingsMock);
      }
    })
  })

  it("findOne", () => {
    const findOptions: FindOneOptions = {where: {id: MockRating.id}};
    const findOneMock = jest.spyOn(ratingRepository, "findOne").mockResolvedValue(MockRating as RatingEntity);

    service.findOne(findOptions).subscribe({
      next: (rating: RatingInterface) => {
        expect(rating).toEqual(MockRating);
        expect(findOneMock).toHaveBeenCalledWith(findOptions);
      }
    })
  })

  it("find", () => {
    const findOptions: FindManyOptions = {where: {id: MockRating.id}};
    const findMock = jest.spyOn(ratingRepository, "find").mockResolvedValue([MockRating] as RatingEntity[]);

    service.find(findOptions).subscribe({
      next: (ratings: RatingInterface[]) => {
        expect(ratings).toEqual([MockRating]);
        expect(findMock).toHaveBeenCalledWith(findOptions);
      }
    })
  })

  it("deleteOne", () => {
    const resDelMock: DeleteResult =  { "raw": [], "affected": 1};
    const delOption: FindOptionsWhere<RatingInterface> = {id: MockRating.id};
    const deleteMock = jest.spyOn(ratingRepository, "delete").mockResolvedValue(resDelMock);

    service.deleteOne(delOption).subscribe({
      next: (res: DeleteResult) => {
        expect(res).toEqual(resDelMock);
        expect(deleteMock).toHaveBeenCalledWith(delOption);
      }
    })
  })

  it("createArticle", () => {
    const RatingMock = MockRating as RatingEntity;
    const saveOneMock = jest.spyOn(ratingRepository, "save").mockResolvedValue(RatingMock);
    const findOneArticleMock = jest.spyOn(articlesService, "findOneArticle").mockImplementation(() => of(MockArticles));
    const RatingWithArticle = Object.assign(RatingMock, {articles: MockArticles})

    service.createArticle(RatingMock, MockArticles.id).subscribe({
      next: (rating: RatingInterface) => {
        expect(rating).toEqual(RatingWithArticle);
        expect(findOneArticleMock).toHaveBeenCalledWith({where: {id: MockArticles.id}});
        expect(saveOneMock).toHaveBeenCalledWith(RatingWithArticle);
      }
    })
  })

  it("createArticle NotFoundException", () => {
    const RatingMock = MockRating as RatingEntity;
    const findOneArticleMock = jest.spyOn(articlesService, "findOneArticle").mockImplementation(() => of(undefined));

    service.createArticle(RatingMock, MockArticles.id).subscribe({
      error: (err) => {
        expect(err).toEqual(new NotFoundException({ error: "this article was not found!" }));
        expect(findOneArticleMock).toHaveBeenCalledWith({where: {id: MockArticles.id}});
      }
    })
  })

  it("createProfile", () => {
    const RatingMock = MockRating as RatingEntity;
    const saveOneMock = jest.spyOn(ratingRepository, "save").mockResolvedValue(RatingMock);
    const findOneUsersMock = jest.spyOn(usersService, "findOne").mockImplementation(() => of(MockUsers));
    const RatingWithUsers = Object.assign(RatingMock, {profile: MockUsers});

    service.createProfile(RatingMock, MockUsers.id).subscribe({
      next: (rating: RatingInterface) => {
        expect(rating).toEqual(RatingWithUsers);
        expect(findOneUsersMock).toHaveBeenCalledWith({where: {id: MockArticles.id}});
        expect(saveOneMock).toHaveBeenCalledWith(RatingWithUsers);
      }
    })
  })

  it("createProfile NotFoundException", () => {
    const RatingMock = MockRating as RatingEntity;
    const findOneUsersMock = jest.spyOn(usersService, "findOne").mockImplementation(() => of(undefined));

    service.createProfile(RatingMock, MockUsers.id).subscribe({
      error: (err) => {
        expect(err).toEqual(new NotFoundException({ error: "this user was not found!" }));
        expect(findOneUsersMock).toHaveBeenCalledWith({where: {id: MockUsers.id}})
      }
    })
  })

  it("updateRating", () => {
    const RatingWithUsers: RatingInterface = Object.assign(MockRating, {users: MockUsers});
    const findOneMock = jest.spyOn(ratingRepository, "findOne").mockResolvedValue({...MockRating, rate: 1} as RatingEntity);
    const saveOneMock = jest.spyOn(ratingRepository, "save").mockResolvedValue(RatingWithUsers as RatingEntity);

    service.updateRating(RatingWithUsers, RatingWithUsers.id).subscribe({
      next: (rating: RatingInterface) => {
        expect(rating).toEqual(RatingWithUsers);
        expect(findOneMock).toHaveBeenCalledWith({where: { id: MockRating.id, users: { id: MockUsers.id } }});
        expect(saveOneMock).toHaveBeenCalledWith(RatingWithUsers);
      }
    })
  })

  it("updateRating Exception", () => {
    const RatingWithUsers: RatingInterface = Object.assign(MockRating, {users: MockUsers});
    const findOneMock = jest.spyOn(ratingRepository, "findOne").mockRejectedValue(new NotFoundException());

    service.updateRating(RatingWithUsers, RatingWithUsers.id).subscribe({
      error: (err) => {
        expect(err).toEqual(new NotFoundException());
        expect(findOneMock).toHaveBeenCalledWith({where: { id: MockRating.id, users: { id: MockUsers.id } }});
      }
    })
  })

});
