import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from "./users.service";
import {Repository} from "typeorm";
import {UsersEntity} from "./entities/users.entity";
import {getRepositoryToken} from "@nestjs/typeorm";
import {of} from "rxjs";
import {MockUsers} from "../utility/test/mockUsers";
import {JwtService} from "@nestjs/jwt";

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: JwtService, useValue: {}},
        { provide: getRepositoryToken(UsersEntity), useValue: {} },
      ]
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
    module.get<Repository<UsersEntity>>(getRepositoryToken(UsersEntity));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('getProfile', () => {
    const findOne = jest.spyOn(service, 'findOne').mockImplementation(() => of(MockUsers));

    controller.getProfile({user: MockUsers}).subscribe((data) => {
      expect(data).toEqual(MockUsers);
      expect(findOne).toHaveBeenCalledWith({where: {id: MockUsers.id}});
    })
  })
});
