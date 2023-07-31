import {Test, TestingModule} from '@nestjs/testing';
import {UsersService} from './users.service';
import {getRepositoryToken} from "@nestjs/typeorm";
import {UsersEntity} from "./entities/users.entity";
import {Repository} from "typeorm";
import {MockUsers} from "../utility/test/mockUsers";
import {UsersEntityInterfaces} from "./interfaces/users.interfaces";

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<UsersEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UsersEntity),
          useClass: Repository
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<UsersEntity>>(getRepositoryToken(UsersEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("findOne", () => {
    const findOne = jest.spyOn(repository, "findOne").mockResolvedValue(MockUsers as UsersEntity);

    service.findOne({where: {id: MockUsers.id}}).subscribe((user: UsersEntityInterfaces) => {
      expect(user).toEqual(MockUsers);
      expect(findOne).toHaveBeenCalledWith({where: {id: MockUsers.id}});
    })
  })

  it("exitUser, should be return true", () => {
    const findOne = jest.spyOn(repository, "findOne").mockResolvedValue(MockUsers as UsersEntity);

    service.exitUser({where: {email: MockUsers.email}}).subscribe((exist: boolean) => {
      expect(exist).toBeTruthy();
      expect(findOne).toHaveBeenCalledWith({where: {email: MockUsers.email}});
    })
  })

  it("exitUser, should be return false", () => {
    const findOne = jest.spyOn(repository, "findOne").mockResolvedValue(null);

    service.exitUser({where: {email: MockUsers.email}}).subscribe((exist: boolean) => {
      expect(exist).toBeFalsy();
      expect(findOne).toHaveBeenCalledWith({where: {email: MockUsers.email}});
    })
  })

  it("saveUser", () => {
    const save = jest.spyOn(repository, "save").mockResolvedValue(MockUsers as UsersEntity);

    service.saveUser(MockUsers).subscribe((user: UsersEntityInterfaces) => {
      expect(user).toEqual(MockUsers);
      expect(save).toHaveBeenCalledWith(MockUsers);
    })
  })
});
