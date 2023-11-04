import { Test, TestingModule } from '@nestjs/testing';
import { NoticeController } from './notice.controller';
import {JwtService} from "@nestjs/jwt";
import {NoticeService} from "./notice.service";
import {of} from "rxjs";
import {MockNotice} from "../utility/test/mockNotice";
import {MockUsers} from "../utility/test/mockUsers";
import {ReqProps} from "../shared/interfaces/ReqProps";
import {UsersDto} from "../users/dto/users.dto";
import {NoticeInterface} from "./interfaces/notice.interface";
import {NoticeDto} from "./dto/notice.dto";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";

describe('NoticeController', () => {
  let controller: NoticeController;
  let service: NoticeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticeController],
      providers: [
        JwtService,
        {
          provide: NoticeService,
          useValue: {
            findMany: jest.fn(),
            createNotice: jest.fn(),
            deleteOneNotice: jest.fn(),
          }
        }
      ]
    }).compile();

    controller = module.get<NoticeController>(NoticeController);
    service = module.get<NoticeService>(NoticeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('allNotice', () => {
    const mockListNotice = [MockNotice];
    const findMany = jest.spyOn(service, "findMany").mockReturnValue(of(mockListNotice));

    controller.allNotice({user: MockUsers as UsersDto} as ReqProps).subscribe((notice: NoticeInterface[]) => {
      expect(notice).toEqual(mockListNotice);
      expect(findMany).toBeCalledWith({ where: {users: MockUsers} })
    })
  })

  it("createNotice", () => {
    const mockCreateNotice = {...MockNotice, users: MockUsers}
    const createNotice = jest.spyOn(service, "createNotice").mockReturnValue(of(mockCreateNotice));

    controller.createNotice(
      {user: MockUsers as UsersDto} as ReqProps,
      { id: MockUsers.id },
      MockNotice as NoticeDto
    ).subscribe((notice: NoticeInterface) => {
      expect(notice).toEqual(mockCreateNotice);
      expect(createNotice).toBeCalledWith({ userID: MockUsers.id, body: MockNotice })
    })
  })

  it("deleteNotice", () => {
    const mockDelete: DeleteResult = {raw: "del", affected: 1};
    const deleteOneNotice = jest.spyOn(service, "deleteOneNotice").mockReturnValue(of(mockDelete));

    controller.deleteNotice(
      {user: MockUsers as UsersDto} as ReqProps,
      { id: MockNotice.id }
    ).subscribe((result) => {
      expect(result).toEqual(mockDelete);
      expect(deleteOneNotice).toBeCalledWith(MockNotice.id);
    })
  })
});
