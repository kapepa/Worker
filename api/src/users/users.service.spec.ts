import {Test, TestingModule} from '@nestjs/testing';
import {UsersService} from './users.service';
import {getRepositoryToken} from "@nestjs/typeorm";
import {UsersEntity} from "./entities/users.entity";
import {Repository} from "typeorm";
import {MockUsers} from "../utility/test/mockUsers";
import {UsersEntityInterfaces} from "./interfaces/users.interfaces";
import {FileService} from "../file/file.service";
import {of} from "rxjs";
import {NotFoundException} from "@nestjs/common";

describe('UsersService', () => {
  let usersService: UsersService;
  let fileService: FileService;
  let repository: Repository<UsersEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        FileService,
        {
          provide: getRepositoryToken(UsersEntity),
          useClass: Repository
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    fileService = module.get<FileService>(FileService);
    repository = module.get<Repository<UsersEntity>>(getRepositoryToken(UsersEntity));
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  it("findOne", () => {
    const findOne = jest.spyOn(repository, "findOne").mockResolvedValue(MockUsers as UsersEntity);

    usersService.findOne({where: {id: MockUsers.id}}).subscribe((user: UsersEntityInterfaces) => {
      expect(user).toEqual(MockUsers);
      expect(findOne).toHaveBeenCalledWith({where: {id: MockUsers.id}});
    })
  })

  it("exitUser, should be return true", () => {
    const findOne = jest.spyOn(repository, "findOne").mockResolvedValue(MockUsers as UsersEntity);

    usersService.exitUser({where: {email: MockUsers.email}}).subscribe((exist: boolean) => {
      expect(exist).toBeTruthy();
      expect(findOne).toHaveBeenCalledWith({where: {email: MockUsers.email}});
    })
  })

  it("exitUser, should be return false", () => {
    const findOne = jest.spyOn(repository, "findOne").mockResolvedValue(null);

    usersService.exitUser({where: {email: MockUsers.email}}).subscribe((exist: boolean) => {
      expect(exist).toBeFalsy();
      expect(findOne).toHaveBeenCalledWith({where: {email: MockUsers.email}});
    })
  })

  it("saveUser", () => {
    const save = jest.spyOn(repository, "save").mockResolvedValue(MockUsers as UsersEntity);

    usersService.saveUser(MockUsers).subscribe((user: UsersEntityInterfaces) => {
      expect(user).toEqual(MockUsers);
      expect(save).toHaveBeenCalledWith(MockUsers);
    })
  })

  it("updateUser", () => {
    const avatarOld = "fake.png";
    const mockUser = {...MockUsers, avatar: "avatar.png"};
    const findOne = jest.spyOn(repository, "findOne").mockResolvedValue({...MockUsers, avatar: avatarOld} as UsersEntity);
    const save = jest.spyOn(repository, "save").mockResolvedValue(mockUser as UsersEntity);
    const removeFile = jest.spyOn(fileService, "removeFile").mockReturnValue(of(true));

    usersService.updateUser(mockUser.id, mockUser).subscribe({
      next: (user: UsersEntityInterfaces) => {
        expect(findOne).toHaveBeenCalledWith({ where: { id: mockUser.id } });
        expect(save).toHaveBeenCalledWith(mockUser);
        expect(removeFile).toHaveBeenCalledWith(avatarOld);
      }
    })
  })

  it("updateUser error", () => {
    const mockUser = {...MockUsers, avatar: "avatar.png"};
    const findOne = jest.spyOn(repository, "findOne").mockRejectedValue( () => new NotFoundException() );

    usersService.updateUser(mockUser.id, mockUser).subscribe({
      error: (err) => {
        expect(findOne).toHaveBeenCalledWith({ where: { id: mockUser.id } });
        expect(err().message).toEqual( new NotFoundException().message );
      }
    })
  })
});
