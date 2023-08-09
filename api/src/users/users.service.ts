import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "./entities/users.entity";
import {Repository} from "typeorm";
import {from, Observable, of, switchMap} from "rxjs";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {UsersEntityInterfaces} from "./interfaces/users.interfaces";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  findOne(data: FindOneOptions): Observable<UsersEntityInterfaces> {
    return from(this.usersRepository.findOne(data));
  }

  exitUser(data: FindOneOptions): Observable<boolean> {
    return from(this.usersRepository.findOne(data)).pipe(
      switchMap((user: UsersEntity) => of(!!user))
    );
  }

  updateUser(id: string, user: UsersEntityInterfaces): Observable<UsersEntityInterfaces> {
    return this.findOne({ where: { id } }).pipe(
      switchMap((profile: UsersEntityInterfaces) => {
        if(!profile) throw new NotFoundException();
        return this.saveUser({...profile, ...user});
      })
    )
  }

  saveUser(data:UsersEntityInterfaces): Observable<UsersEntityInterfaces> {
    return from(this.usersRepository.save(data));
  }
}
