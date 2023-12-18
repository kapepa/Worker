import {Test, TestingModule} from '@nestjs/testing';
import {NoticeService} from './notice.service';
import {Repository} from "typeorm";
import {NoticeEntity} from "./entities/notice.entity";
import {UsersService} from "../users/users.service";
import {getRepositoryToken} from "@nestjs/typeorm";
import {MockNotice} from "../utility/test/mockNotice";
import {MockUsers} from "../utility/test/mockUsers";
import {NoticeInterface} from "./interfaces/notice.interface";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {of} from "rxjs";

describe('NoticeService', () => {
  let service: NoticeService;
  let usersService: UsersService;
  let noticeRepository: Repository<NoticeEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NoticeService,
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn(),
          }
        },
        {
          provide: getRepositoryToken(NoticeEntity),
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<NoticeService>(NoticeService);
    usersService = module.get<UsersService>(UsersService);
    noticeRepository = module.get<Repository<NoticeEntity>>(getRepositoryToken(NoticeEntity))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("saveOneNotice", () => {
    const mockNoticeEntity = {...MockNotice, users: MockUsers} as NoticeEntity
    const saveRepository = jest.spyOn(noticeRepository, "save").mockResolvedValue(mockNoticeEntity);

    service.saveOneNotice(mockNoticeEntity).subscribe((notice : NoticeInterface) => {
      expect(notice).toEqual(mockNoticeEntity);
      expect(saveRepository).toBeCalledWith(mockNoticeEntity);
    })
  })

  it("findMany", () => {
    const mockNoticesArr: NoticeInterface[] = [MockNotice];
    const findRepository = jest.spyOn(noticeRepository, "find").mockResolvedValue(mockNoticesArr as NoticeEntity[]);

    service.findMany().subscribe((notices) => {
      expect(notices).toEqual(mockNoticesArr);
      expect(findRepository).toBeCalled();
    })
  })

  it("deleteOneNotice", () => {
    const mockDeleteResult: DeleteResult = {raw: "del", affected: 1};
    const deleteRepository = jest.spyOn(noticeRepository, "delete").mockResolvedValue(mockDeleteResult);

    service.deleteOneNotice(MockNotice.id).subscribe((result) => {
      expect(result).toEqual(mockDeleteResult);
      expect(deleteRepository).toBeCalledWith({ id: MockNotice.id });
    })
  })

  it("createNotice", () => {
    const mockNoticeEntity = {...MockNotice, users: MockUsers} as NoticeEntity
    const findOne = jest.spyOn(usersService, "findOne").mockReturnValue(of(MockUsers));
    const saveRepository = jest.spyOn(noticeRepository, "save").mockResolvedValue(mockNoticeEntity);

    service.createNotice({userID: MockUsers.id, body: MockNotice}).subscribe((notice) => {
      expect(notice).toEqual(mockNoticeEntity);
      expect(findOne).toBeCalledWith({ where: { id: MockUsers.id } });
      expect(saveRepository).toBeCalledWith(mockNoticeEntity);
    })
  })
});
