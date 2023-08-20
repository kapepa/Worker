import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "./entities/users.entity";
import {Repository} from "typeorm";
import {from, Observable, of, switchMap, tap, throwError} from "rxjs";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {UsersEntityInterfaces} from "./interfaces/users.interfaces";
import {FileService} from "../file/file.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
    private fileService: FileService,
  ) {}

  findOne(data: FindOneOptions): Observable<UsersEntityInterfaces> {
    return from(this.usersRepository.findOne(data)).pipe(
      switchMap((user: UsersEntityInterfaces) => {
        return !!user ? of(user) : throwError(() => new HttpException("User not found", HttpStatus.NOT_FOUND))
      })
    );
  }

  exitUser(data: FindOneOptions): Observable<boolean> {
    return from(this.usersRepository.findOne(data)).pipe(
      switchMap((user: UsersEntity) => of(!!user))
    );
  }

  updateUser(id: string, user: UsersEntityInterfaces): Observable<UsersEntityInterfaces> {
    return this.findOne({ where: { id } }).pipe(
      switchMap((profile: UsersEntityInterfaces) => {
        if(!profile) return throwError(() => new NotFoundException());
        return this.saveUser({...profile, ...user}).pipe(
          tap(() => {
            if(!!profile.avatar && profile.avatar !== user.avatar) this.fileService.removeFile(profile.avatar).subscribe();
          })
        );
      }),
    )
  }

  saveUser(data:UsersEntityInterfaces): Observable<UsersEntityInterfaces> {
    return from(this.usersRepository.save(data));
  }
}
