import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from "./users.service";
import {Repository} from "typeorm";
import {UsersEntity} from "./entities/users.entity";
import {getRepositoryToken} from "@nestjs/typeorm";
import {of, throwError} from "rxjs";
import {MockUsers} from "../utility/test/mockUsers";
import {JwtService} from "@nestjs/jwt";
import {FileService} from "../file/file.service";
import {NotFoundException} from "@nestjs/common";

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;
  let fileService: FileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        FileService,
        { provide: JwtService, useValue: {}},
        { provide: getRepositoryToken(UsersEntity), useValue: {} },
      ]
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
    fileService = module.get<FileService>(FileService);
    module.get<Repository<UsersEntity>>(getRepositoryToken(UsersEntity));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('getProfile', () => {
    const findOne = jest.spyOn(usersService, 'findOne').mockImplementation(() => of(MockUsers));

    controller.getProfile({user: MockUsers}).subscribe((data) => {
      expect(data).toEqual(MockUsers);
      expect(findOne).toHaveBeenCalledWith({where: {id: MockUsers.id}});
    })
  })

  it('getProfileFull', () => {
    const findOne = jest.spyOn(usersService, "findOne").mockReturnValue(of(MockUsers));

    controller.getProfile({user: MockUsers}).subscribe({
      next: (data) => {
        expect(data).toEqual(MockUsers);
        expect(findOne).toHaveBeenCalledWith({where: {id: MockUsers.id}});
      }
    })
  })

  it('updateUser', () => {
    const findOne = jest.spyOn(usersService, "updateUser").mockReturnValue(of(MockUsers));

    controller.updateUser({user: MockUsers}, {} as Express.Multer.File, MockUsers).subscribe({
      next: (data) => {
        expect(findOne).toHaveBeenCalledWith(MockUsers.id, MockUsers);
      }
    })
  })

  it('updateUser error', () => {
    const findOne = jest.spyOn(usersService, "updateUser").mockReturnValue(throwError(() => new NotFoundException()));
    const removeFile = jest.spyOn(fileService, "removeFile").mockReturnValue(of(true));
    const mockAvatar = "filename.png";
    const avatar: Express.Multer.File = { filename: mockAvatar } as Express.Multer.File

    controller.updateUser({user: MockUsers}, avatar , {...MockUsers, avatar: mockAvatar}).subscribe({
      error: (err) => {
        expect(findOne).toHaveBeenCalledWith(MockUsers.id, {...MockUsers, avatar: mockAvatar});
        expect(removeFile).toHaveBeenCalledWith(mockAvatar);
      }
    })
  })
});
