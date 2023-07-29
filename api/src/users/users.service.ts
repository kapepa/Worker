import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "./entities/users.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  getMyself() {
    return {id: "UserID", username: "UserName"}
  }

  createUser(users) {
    return "create"
  }
}
