import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import {of} from "rxjs";
import {MockUsers} from "../utility/test/mockUsers";
import DoneCallback = jest.DoneCallback;
import {HttpException, HttpStatus, UnauthorizedException} from "@nestjs/common";

describe('AuthService',() => {
  let service: AuthService;
  let userService: UsersService;

  beforeAll(async () => {

  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: { findOne: jest.fn(), exitUser: jest.fn(), saveUser: jest.fn() } }
      ],
      imports: [
        JwtModule.register({
          global: true,
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '30d' },
        }),
      ]
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("signIn, should be return token", (done: DoneCallback) => {
    service.bcrypt(MockUsers.password).then((mockPass) => {
      const findOne = jest.spyOn(userService, "findOne").mockReturnValue(of({...MockUsers, password: mockPass}));

      service.signIn({email: MockUsers.email, password: MockUsers.password}).subscribe((token) => {
        expect(token).toBeDefined();
        expect(findOne).toHaveBeenCalledWith({ where: { email: MockUsers.email }, select: ["id", "username", "email", "password"] })
        done();
      })
    });
  });

  it("signIn, should be return error", () => {
    jest.spyOn(userService, "findOne").mockReturnValue(of(MockUsers));

    service.signIn({email: MockUsers.email, password: MockUsers.password}).subscribe({
      error: (err) => expect(err).toEqual(new UnauthorizedException()),
    })
  });

  it("signUp, should be success sign up user", (done: DoneCallback) => {
    const existUser = jest.spyOn(userService, "exitUser").mockReturnValue(of(false));
    const saveUser = jest.spyOn(userService, "saveUser").mockReturnValue(of(MockUsers));

    service.signUp({ username: MockUsers.username, email: MockUsers.email, password: MockUsers.password }).subscribe((bol: boolean) => {
      expect(bol).toBeTruthy();
      expect(existUser).toHaveBeenCalledWith({ where: { username: MockUsers.username, email: MockUsers.email } });
      expect(saveUser).toHaveBeenCalled()
      done();
    })
  })

  it("signUp, should be user exist", () => {
    jest.spyOn(userService, "exitUser").mockReturnValue(of(true));

    service.signUp({ username: MockUsers.username, email: MockUsers.email, password: MockUsers.password }).subscribe({
      error: (err) => expect(err).toEqual(new HttpException('this letter already exists.', HttpStatus.FORBIDDEN))
    })
  })
});
