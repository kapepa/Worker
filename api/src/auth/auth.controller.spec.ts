import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import {of} from "rxjs";
import {MockUsers} from "../utility/test/mockUsers";
import {AuthUsersDto} from "./dto/auth-users.dto";

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        { provide: UsersService , useValue: {} },
        { provide: JwtService , useValue: {} },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("signIn, should be return token", () => {
    const mockToken = "some-token";
    const signIn = jest.spyOn(service, "signIn").mockReturnValue(of({access_token: mockToken}));

    controller.signIn({email: MockUsers.email, password: MockUsers.password}).subscribe((token) => {
      expect(token).toEqual({access_token: mockToken});
      expect(signIn).toHaveBeenCalledWith({email: MockUsers.email, password: MockUsers.password});
    })
  })

  it("signUp, should be return true", () => {
    const signUp = jest.spyOn(service, "signUp").mockReturnValue(of(true));

    controller.signUp({ username: MockUsers.username, email: MockUsers.email, password: MockUsers.password } as AuthUsersDto).subscribe((token) => {
      expect(token).toBeTruthy();
      expect(signUp).toHaveBeenCalledWith({ username: MockUsers.username, email: MockUsers.email, password: MockUsers.password });
    })
  })
});
