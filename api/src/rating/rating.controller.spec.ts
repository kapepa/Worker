import { Test, TestingModule } from '@nestjs/testing';
import { RatingController } from './rating.controller';
import {JwtService} from "@nestjs/jwt";
import {RatingService} from "./rating.service";
import {MockRating} from "../utility/test/mockRating";
import {MockUsers} from "../utility/test/mockUsers";
import {of} from "rxjs";
import {RatingDto} from "./dto/rating.dto";
import {MockArticles} from "../utility/test/mockArticles";
import {RatingInterface} from "./interfaces/rating.interface";
import {ReqProps} from "../shared/interfaces/ReqProps";
import {UsersDto} from "../users/dto/users.dto";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";

describe('RatingController', () => {
  let controller: RatingController;
  let ratingService: RatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: RatingService,
          useValue: {
            createArticle: jest.fn(),
            createProfile: jest.fn(),
            updateRating: jest.fn(),
            deleteOne: jest.fn(),
          }
        },
        { provide: JwtService, useValue: {}},
      ],
      controllers: [RatingController],
    }).compile();

    controller = module.get<RatingController>(RatingController);
    ratingService = module.get<RatingService>(RatingService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("createArticle", () => {
    const ratingServiceMock = jest.spyOn(ratingService, "createArticle").mockReturnValue(of(MockRating));

    controller.createArticle({user: MockUsers as UsersDto} as ReqProps, MockRating as RatingDto, {id: MockArticles.id}).subscribe({
      next: (rating: RatingInterface) => {
        expect(rating).toEqual(MockRating);
        expect(ratingServiceMock).toHaveBeenCalledWith(Object.assign(MockRating, {users: MockUsers}), MockArticles.id);
      }
    })
  })

  it("createProfile", () => {
    const createProfileMock = jest.spyOn(ratingService, "createProfile").mockReturnValue(of(MockRating));

    controller.createProfile({user: MockUsers as UsersDto} as ReqProps, MockRating as RatingDto, {id: MockArticles.id}).subscribe({
      next: (rating: RatingInterface) => {
        expect(rating).toEqual(MockRating);
        expect(createProfileMock).toHaveBeenCalledWith(Object.assign(MockRating, {users: MockUsers}), MockArticles.id);
      }
    })
  })

  it("updateRating", () => {
    const updateRatingMock = jest.spyOn(ratingService, "updateRating").mockReturnValue(of(MockRating));

    controller.updateRating({user: MockUsers as UsersDto} as ReqProps, MockRating as RatingDto, {id: MockRating.id}).subscribe({
      next: (rating: RatingInterface) => {
        expect(rating).toEqual(MockRating);
        expect(updateRatingMock).toHaveBeenCalledWith(Object.assign(MockRating, {users: MockUsers}), MockRating.id);
      }
    })
  })

  it("deleteRating", () => {
    const DelResMock = { "raw": [], "affected": 1}
    const deleteOneMock = jest.spyOn(ratingService, "deleteOne")
      .mockReturnValue(of(DelResMock));

    controller.deleteRating({id: MockRating.id}).subscribe({
      next: (res: DeleteResult) => {
        expect(res).toEqual(DelResMock);
        expect(deleteOneMock).toHaveBeenCalledWith({id: MockRating.id});
      }
    })
  })

});
