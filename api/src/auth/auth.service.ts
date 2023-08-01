import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import * as dotenv from "dotenv";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {AuthLoginDto} from "./dto/auth-login.dto";
import {AuthUsersDto} from "./dto/auth-users.dto";
import {Observable, of, switchMap} from "rxjs";
import {UsersEntityInterfaces} from "../users/interfaces/users.interfaces";

dotenv.config();

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  signIn({ email, password }: AuthLoginDto): Observable<{access_token: string}> {
    return this.usersService.findOne({ where: { email }, select: ["id", "username", "email", "password"] }).pipe(
      switchMap(async (user: UsersEntityInterfaces) => {
        const compare = await this.comparePass(password, user.password);
        if(!compare) throw new UnauthorizedException();
        const payload = { id: user.id, username: user.username, email: user.email };
        return {access_token: await this.jwtService.signAsync(payload)};
      })
    )
  }

  signUp(user: AuthUsersDto): Observable<boolean> {
    const {password, ...other} = user;
    return this.usersService.exitUser({ where: {...other} }).pipe(
      switchMap(async (exist: boolean) => {
        if(exist) throw new HttpException('this letter already exists.', HttpStatus.FORBIDDEN);
        const hashPass = await this.bcrypt(password);
        return this.usersService.saveUser({...other, password: hashPass})
      })
    ).pipe(switchMap(() => of(true)));
  }

  async bcrypt(pass: string): Promise<string> {
    return await bcrypt.hash(pass, +process.env.BCRYPT_HASH);
  }

  async comparePass(pass: string, hash: string): Promise<string> {
    return await bcrypt.compare(pass, hash);
  }
}
