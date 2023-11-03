import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {NoticeEntity} from "./entities/notice.entity";
import {NoticeInterface} from "./interfaces/notice.interface";
import {from, Observable, switchMap} from "rxjs";
import {UsersService} from "../users/users.service";
import {UsersEntityInterfaces} from "../users/interfaces/users.interfaces";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(NoticeEntity)
    private noticeRepository: Repository<NoticeEntity>,
    private usersService: UsersService,
  ) {}

  saveOneNotice (notice: NoticeInterface): Observable<NoticeInterface>  {
    return from(this.noticeRepository.save(notice));
  }

  findMany (options?: FindManyOptions): Observable<NoticeInterface[]> {
    return from(this.noticeRepository.find(options));
  }

  createNotice({userID, body}: {userID: string, body: NoticeInterface}): Observable<NoticeInterface> {
    return this.usersService.findOne({ where: { id: userID} }).pipe(
      switchMap((users: UsersEntityInterfaces) => {
        return this.saveOneNotice({...body, users});
      })
    )
  }

  deleteOneNotice(noticeID: string) : Observable<DeleteResult> {
    return from(this.noticeRepository.delete({ id: noticeID}))
  }
}
